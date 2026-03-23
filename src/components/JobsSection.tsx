import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    title: "Auxiliar de Limpeza",
    location: "Palmas, PR",
    type: "Tempo integral",
    tags: ["Limpeza", "Conservação", "Organização"],
  },
  {
    title: "Auxiliar de Produção",
    location: "Palmas, PR",
    type: "Tempo integral",
    tags: ["Produção", "Industrial", "PVC"],
  },
];

const JobsSection = () => {
  const scrollToForm = (jobTitle: string) => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
    // Set the job select after a tick so element is visible
    setTimeout(() => {
      const select = document.querySelector<HTMLSelectElement>("#vaga-select");
      if (select) {
        const option = Array.from(select.options).find((o) =>
          o.text.toLowerCase().includes(jobTitle.split(" ")[0].toLowerCase())
        );
        if (option) {
          select.value = option.value;
          select.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    }, 600);
  };

  return (
    <section id="jobs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Oportunidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Vagas Disponíveis
          </h2>
          <p className="text-muted-foreground">
            Encontre a vaga ideal para você e dê o próximo passo na sua carreira.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group border border-border"
            >
              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {job.title}
              </h3>
              <div className="flex flex-wrap gap-3 mb-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {job.type}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button
                variant="ghost"
                className="text-primary font-semibold px-0 hover:bg-transparent hover:gap-3 gap-2 transition-all"
                onClick={() => scrollToForm(job.title)}
              >
                Candidatar-se <ArrowRight size={16} />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
