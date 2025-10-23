import logo from "@/assets/logo.png";
import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-jjt-black text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-12 h-12" />
              <div>
                <div className="font-bold">Escola Ailton Simões</div>
                <div className="text-sm text-jjt-red">de Jiu-Jitsu</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Transformando vidas através da arte suave há mais de 25 anos. 
              Venha fazer parte da nossa família!
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-jjt-red" />
                <span>Pirajá, Rua Oito de Novembro, Nº 66</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-jjt-red" />
                <span>(71) 99686-2235</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-jjt-red" />
                <span>@escolaasjiujitsu</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Comece Hoje</h3>
            <div className="bg-gradient-hero rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">3 Aulas Grátis</div>
                <div className="text-sm text-primary-foreground/80 mb-3">
                  Sem compromisso
                </div>
                <a 
                  href="https://wa.me/5571996862235?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20as%20aulas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-jjt-gold text-jjt-black px-4 py-2 rounded-lg font-semibold hover:bg-jjt-gold/90 transition-colors"
                >
                  Agendar Agora
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Escola Ailton Simões de Jiu-Jitsu. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;