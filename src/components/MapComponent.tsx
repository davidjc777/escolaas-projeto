import React from 'react';

const MapComponent = () => {
  // Coordenadas da escola: -12.9021855, -38.4610618
  const schoolLocation = "-12.9021855,-38.4610618";
  
  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden">
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0234567890123!2d-38.4610618!3d-12.9021855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716112233445566%3A0x1234567890abcdef!2sRua%20Oito%20de%20Novembro%2C%2066%20-%20Piraja%2C%20Salvador%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1609459200000!5m2!1spt-BR!2sbr&q=${schoolLocation}`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Escola Ailton Simões de Jiu-Jitsu"
        className="absolute inset-0"
      />
    </div>
  );
};

export default MapComponent;