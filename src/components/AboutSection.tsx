import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Assegurar a qualidade competitiva para nosso negócio e nossos clientes, desenvolvendo soluções em sistemas hidráulicos, visando a qualidade de vida das pessoas e permitindo a superação das expectativas socioambientais.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser reconhecida como uma das empresas líderes do segmento de conexões em pvc, conquistar crescimento constante do volume de negócios e buscar novas oportunidades de mercado.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Ser reconhecida como a melhor empresa para trabalhar perante nossos colaboradores, referência de qualidade para nossos clientes, relacionamento para nossos fornecedores e resultado para nossos acionistas, respeitando o meio ambiente e valorizando a vida.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">
          Quem somos
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Sobre a Shiva Conexões em PVC
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          A marca Shiva nasceu em 1992 na cidade de Xanxerê/SC, fabricando apenas peças moldadas conforme as necessidades das industrias da região. Ao longo dos anos, fomos fortalecendo nossa marca e nosso setor produtivo com tecnologias na área de injeção e rotomoldagem.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {values.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-background rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center"
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-5">
              <item.icon className="text-primary-foreground" size={24} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
