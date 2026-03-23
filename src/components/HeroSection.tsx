import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-team.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Equipe trabalhando em colaboração"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary backdrop-blur-sm border border-primary/20">
            Estamos contratando!
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Venha fazer parte do{" "}
            <span className="text-primary">nosso time!</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Buscamos talentos apaixonados por inovação. Construa sua carreira em
            um ambiente dinâmico, colaborativo e cheio de oportunidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-base px-8 py-6" onClick={scrollToForm}>
              Candidatar-se agora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10"
              onClick={() => document.getElementById("jobs")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver vagas abertas
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
