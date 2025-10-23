import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import KidsSection from "@/components/KidsSection";
import FreeClasses from "@/components/FreeClasses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      
      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <section id="sobre">
          <About />
        </section>
        
        <section id="infantil">
          <KidsSection />
        </section>
        
        <section id="aulas-gratis">
          <FreeClasses />
        </section>
        
        <section id="contato">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
