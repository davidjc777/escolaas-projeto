import professorAilton from "@/assets/professor-ailton.png";
import teamPhoto from "@/assets/team-photo.png";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* About Professor */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Conheça o Professor
              <span className="block text-jjt-red">Ailton Simões</span>
            </h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                <strong className="text-jjt-red">Ailton Simões</strong>, faixa preta 4º grau de Jiu-Jitsu, 
                com mais de 25 anos de experiência dedicados à arte suave.
              </p>
              <p>
                Transformando vidas através do esporte e da inclusão social, 
                o Professor Ailton tem uma abordagem única que combina técnica, 
                disciplina e valores fundamentais para a formação de campeões 
                dentro e fora do tatame.
              </p>
              <p>
                Sua filosofia vai além do ensino técnico: formar pessoas melhores, 
                mais confiantes e preparadas para os desafios da vida.
              </p>
            </div>
            
            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-jjt-red">25+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-jjt-red">4º Grau</div>
                <div className="text-sm text-muted-foreground">Faixa Preta</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={professorAilton} 
              alt="Professor Ailton Simões" 
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>
        </div>
        
        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Nossa <span className="text-jjt-red">Equipe</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma família unida pela paixão do Jiu-Jitsu, onde cada aluno é valorizado 
            e recebe atenção personalizada para desenvolver seu potencial máximo.
          </p>
        </div>
        
        <div className="relative">
          <img 
            src={teamPhoto} 
            alt="Equipe da Escola Ailton Simões de Jiu-Jitsu" 
            className="w-full h-auto rounded-2xl shadow-elegant"
          />
        </div>
      </div>
    </section>
  );
};

export default About;