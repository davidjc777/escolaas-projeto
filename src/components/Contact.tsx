import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { useState } from "react";
import MapComponent from "./MapComponent";

const Contact = () => {
  const [selectedSchedule, setSelectedSchedule] = useState<'infantil' | 'adulto' | null>(null);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      details: "Pirajá, Rua Oito de Novembro, Nº 66\nSalvador - BA",
      action: "Ver no Maps"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      details: "(71) 99686-2235",
      action: "Chamar no WhatsApp"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      details: "@escolaasjiujitsu",
      action: "Seguir"
    }
  ];

  const schedules = {
    infantil: [
      { day: "Segunda-Feira", time: "09:00 e 19:00" },
      { day: "Quarta-Feira", time: "09:00 e 19:00" },
      { day: "Quinta-Feira", time: "19:00" },
      { day: "Sexta-Feira", time: "09:00" }
    ],
    adulto: [
      { day: "Segunda-Feira", time: "10:00 e 20:00" },
      { day: "Quarta-Feira", time: "10:00 e 20:00" },
      { day: "Quinta-Feira", time: "20:00" },
      { day: "Sexta-Feira", time: "10:00" }
    ]
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fale <span className="text-jjt-red">Conosco</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para recebê-lo! Entre em contato e agende sua visita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-hero border-none shadow-red">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-primary-foreground">
                  Agende Sua Visita
                </CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Venha conhecer nossa estrutura e metodologia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://wa.me/5571996862235?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20as%20aulas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="gold" size="xl" className="w-full">
                    Agendar Aula Experimental
                  </Button>
                </a>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="bg-jjt-red/10 p-3 rounded-lg">
                      <div className="text-jjt-red">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {info.details}
                      </p>
                    </div>
                    {info.title === "WhatsApp" ? (
                      <a 
                        href="https://wa.me/5571996862235?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20as%20aulas."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          {info.action}
                        </Button>
                      </a>
                    ) : info.title === "Localização" ? (
                      <a 
                        href="https://www.google.com/maps/place/-12.9021855,-38.4610618"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          {info.action}
                        </Button>
                      </a>
                    ) : info.title === "Instagram" ? (
                      <a 
                        href="https://instagram.com/escolaasjiujitsu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          {info.action}
                        </Button>
                      </a>
                    ) : (
                      <Button variant="outline" size="sm">
                        {info.action}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Schedule and Map */}
          <div className="space-y-8">
            {/* Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-jjt-red" />
                  Horários de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2 mb-4">
                  <Button 
                    variant={selectedSchedule === 'infantil' ? 'hero' : 'outline'}
                    onClick={() => setSelectedSchedule(selectedSchedule === 'infantil' ? null : 'infantil')}
                    size="sm"
                  >
                    Aulas Infantil
                  </Button>
                  <Button 
                    variant={selectedSchedule === 'adulto' ? 'hero' : 'outline'}
                    onClick={() => setSelectedSchedule(selectedSchedule === 'adulto' ? null : 'adulto')}
                    size="sm"
                  >
                    Aulas Adulto
                  </Button>
                </div>
                
                {selectedSchedule && (
                  <div className="space-y-2">
                    {schedules[selectedSchedule].map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                        <span className="font-medium text-foreground">{item.day}</span>
                        <span className="text-muted-foreground">{item.time}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {!selectedSchedule && (
                  <p className="text-muted-foreground text-center py-4">
                    Selecione uma categoria acima para ver os horários
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle>Nossa Localização</CardTitle>
                <CardDescription>
                  Fácil acesso e estacionamento disponível
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MapComponent />
                <div className="mt-4 text-center">
                  <a 
                    href="https://www.google.com/maps/place/-12.9021855,-38.4610618"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      Abrir no Google Maps
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;