import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Clock, Trophy } from "lucide-react";

const FreeClasses = () => {
  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Ambiente Familiar",
      description: "Treine em um ambiente acolhedor e respeitoso"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horários Flexíveis",
      description: "Diversas opções de horários para se adequar à sua rotina"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Resultados Garantidos",
      description: "Metodologia comprovada com mais de 25 anos de sucesso"
    }
  ];

  const includes = [
    "Avaliação física completa",
    "Aula técnica e teórica", 
    "Plano de treinos personalizado",
    "Orientação nutricional básica"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-jjt-black to-jjt-black/90">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Experimente <span className="text-jjt-red">Gratuitamente</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Venha conhecer nossa metodologia e sinta a diferença que o Jiu-Jitsu 
            pode fazer na sua vida. Sem compromisso, sem taxas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Offer details */}
          <div className="space-y-8">
            <Card className="bg-gradient-hero border-none shadow-red">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-primary-foreground">
                  3 Aulas Experimentais
                </CardTitle>
                <CardDescription className="text-primary-foreground/80 text-lg">
                  Valor total: R$ 0,00
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-foreground mb-2">GRÁTIS</div>
                  <p className="text-primary-foreground/90">
                    Sem taxa de matrícula • Sem mensalidade
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary-foreground">O que está incluso:</h4>
                  {includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-jjt-gold flex-shrink-0" />
                      <span className="text-primary-foreground/90">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <a 
              href="https://wa.me/5571996862235?text=Olá,%20gostaria%20de%20agendar%20minhas%203%20aulas%20experimentais%20grátis."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="gold" size="xl" className="w-full shadow-elegant">
                Agendar Minhas Aulas Grátis
              </Button>
            </a>
          </div>

          {/* Right side - Benefits */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary-foreground text-center lg:text-left">
              Por que escolher nossa escola?
            </h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-card/10 backdrop-blur-sm border-primary/20">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="bg-jjt-red/20 p-3 rounded-lg">
                      <div className="text-jjt-gold">{benefit.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-foreground mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeClasses;