import { RefObject, useEffect } from "react";

type Options = {
  frameTime?: number; // seconds offset to capture frame
  quality?: number; // JPEG quality 0..1
};

// Captures a frame from the provided video element and sets it as the poster
// - Seeks to a small offset (default 0.1s) to avoid black frames
// - Resets currentTime back to 0 so playback starts from the beginning
// - Silently fails if capture is not possible (keeps any existing poster)
const useVideoPosterFromFrame = (
  videoRef: RefObject<HTMLVideoElement>,
  options: Options = {}
) => {
  const { frameTime = 0.1, quality = 0.82 } = options;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const capture = () => {
      try {
        if (cancelled) return;
        const vw = video.videoWidth;
        const vh = video.videoHeight;
        if (!vw || !vh) return;
        const canvas = document.createElement("canvas");
        canvas.width = vw;
        canvas.height = vh;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(video, 0, 0, vw, vh);
        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        video.setAttribute("poster", dataUrl);
      } catch (err) {
        // Ignore capture errors; fallback to any existing poster/behavior
      }
    };

    const onLoadedMetadata = () => {
      // Ensure a safe capture point within duration
      const duration = Number.isFinite(video.duration) ? video.duration : 10;
      const safeOffset = Math.min(Math.max(frameTime, 0.05), Math.max(duration - 0.05, 0.1));

      const handleSeeked = () => {
        capture();
        // Reset to start so user playback begins at 0
        try {
          video.currentTime = 0;
        } catch {}
        video.removeEventListener("seeked", handleSeeked);
      };

      try {
        video.addEventListener("seeked", handleSeeked, { once: true } as any);
        video.currentTime = safeOffset;
      } catch {
        // Fallback: attempt immediate capture if seeking fails
        capture();
        video.removeEventListener("seeked", handleSeeked);
      }
    };

    if (video.readyState >= 1) {
      onLoadedMetadata();
    } else {
      video.addEventListener("loadedmetadata", onLoadedMetadata, { once: true });
    }

    return () => {
      cancelled = true;
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [videoRef, frameTime, quality]);
};

export default useVideoPosterFromFrame;
