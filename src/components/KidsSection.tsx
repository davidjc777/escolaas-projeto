import React, { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, Shield, Trophy, Play } from "lucide-react";
import useVideoPosterFromFrame from "@/hooks/useVideoPosterFromFrame";
import devThumbnail from "@/assets/kids-development-thumbnail.jpg";
import trainThumbnail from "@/assets/kids-training-thumbnail.jpg";

const KidsSection = () => {
  const [isDevVideoPlaying, setIsDevVideoPlaying] = useState(false);
  const [isTrainVideoPlaying, setIsTrainVideoPlaying] = useState(false);
  
  const devRef = useRef<HTMLVideoElement>(null);
  const trainRef = useRef<HTMLVideoElement>(null);
  useVideoPosterFromFrame(devRef, { frameTime: 0.2 });
  useVideoPosterFromFrame(trainRef, { frameTime: 0.2 });
  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Desenvolvimento Emocional",
      description: "Autoconfiança, disciplina e controle emocional através da arte suave"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Habilidades Sociais",
      description: "Respeito, trabalho em equipe e novas amizades no tatame"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Defesa Pessoal",
      description: "Técnicas seguras e eficazes adaptadas para crianças"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Condicionamento Físico",
      description: "Força, flexibilidade e coordenação de forma divertida"
    }
  ];


  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Jiu-Jitsu <span className="text-jjt-red">Infantil</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Muito além do tatame! O Jiu-Jitsu é uma ferramenta poderosa de desenvolvimento 
            para as crianças, ensinando valores que levam para a vida toda.
          </p>
        </div>

        {/* Videos Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden bg-card border">
            <CardContent className="p-0">
              <div className="relative bg-muted group">
                <video 
                  ref={devRef}
                  controls 
                  muted
                  playsInline
                  preload="metadata"
                  poster={devThumbnail}
                  className="w-full h-80 object-cover"
                  onPlay={() => setIsDevVideoPlaying(true)}
                  onPause={() => setIsDevVideoPlaying(false)}
                  onEnded={() => setIsDevVideoPlaying(false)}
                >
                  <source src="/videos/kids-development.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
                {/* Play button overlay */}
                {!isDevVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:bg-black/10 transition-colors">
                    <div className="bg-white/90 rounded-full p-4 shadow-lg">
                      <Play className="w-8 h-8 text-jjt-red fill-current" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Desenvolvimento Integral
                </h3>
                <p className="text-muted-foreground">
                  Veja como o Jiu-Jitsu vai muito além do tatame, sendo uma ferramenta 
                  poderosa para o desenvolvimento das crianças.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-card border">
            <CardContent className="p-0">
              <div className="relative bg-muted group">
                <video 
                  ref={trainRef}
                  controls 
                  muted
                  playsInline
                  preload="metadata"
                  poster={trainThumbnail}
                  className="w-full h-80 object-cover"
                  onPlay={() => setIsTrainVideoPlaying(true)}
                  onPause={() => setIsTrainVideoPlaying(false)}
                  onEnded={() => setIsTrainVideoPlaying(false)}
                >
                  <source src="/videos/kids-training.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
                {/* Play button overlay */}
                {!isTrainVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:bg-black/10 transition-colors">
                    <div className="bg-white/90 rounded-full p-4 shadow-lg">
                      <Play className="w-8 h-8 text-jjt-red fill-current" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Treinando Desde Cedo
                </h3>
                <p className="text-muted-foreground">
                  Treinando desde cedo para cair e levantar mais fortes! 
                  As crianças aprendem muito mais que técnicas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-jjt-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-jjt-red">{benefit.icon}</div>
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Agende uma Aula Experimental para seu Filho
          </h3>
          <p className="text-muted-foreground mb-6">
            Venha conhecer nossa metodologia especial para crianças
          </p>
          <a 
            href="https://wa.me/5571996862235?text=Olá,%20gostaria%20de%20agendar%20uma%20aula%20experimental%20para%20meu%20filho."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="xl" className="shadow-elegant">
              Agendar Aula Experimental Infantil
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default KidsSection;