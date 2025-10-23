import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-jjt-black/90 via-jjt-black/70 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src={logo} 
                alt="Escola Ailton Simões de Jiu-Jitsu" 
                className="w-32 h-32 lg:w-40 lg:h-40"
              />
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Escola Ailton Simões
                <span className="block text-jjt-red">de Jiu-Jitsu</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Transformando vidas através da arte suave
              </p>
            </div>
            
            {/* Offer Highlight */}
            <div className="bg-gradient-hero rounded-2xl p-6 shadow-red">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
                3 Aulas Experimentais
              </h2>
              <p className="text-xl text-primary-foreground/90 font-semibold">
                TOTALMENTE GRÁTIS
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5571996862235?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20as%20aulas."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="xl" className="shadow-elegant">
                  Agendar Aula Grátis
                </Button>
              </a>
              <a 
                href="https://wa.me/5571996862235?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20as%20aulas."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="gold" size="xl">
                  Saiba Mais
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right side - Stats or additional content */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                <div className="text-3xl font-bold text-jjt-gold mb-2">25+</div>
                <div className="text-primary-foreground">Anos de Experiência</div>
              </div>
              <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                <div className="text-3xl font-bold text-jjt-gold mb-2">4º</div>
                <div className="text-primary-foreground">Grau Faixa Preta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;