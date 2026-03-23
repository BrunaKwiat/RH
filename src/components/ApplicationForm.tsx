import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const jobs = [
  "Auxiliar de Limpeza",
  "Auxiliar de Produção",
];

const ApplicationForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileName, setFileName] = useState("");
  const [vaga, setVaga] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Formato inválido",
          description: "Por favor, envie um arquivo PDF ou DOC.",
          variant: "destructive",
        });
        e.target.value = "";
        setFileName("");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Arquivo muito grande",
          description: "O currículo deve ter no máximo 5MB.",
          variant: "destructive",
        });
        e.target.value = "";
        setFileName("");
        return;
      }
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setSuccess(true);
    toast({
      title: "Candidatura enviada!",
      description: "Recebemos seu currículo. Entraremos em contato em breve.",
    });
  };

  if (success) {
    return (
      <section id="form" className="py-24 bg-card">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container mx-auto px-4 text-center max-w-lg"
        >
          <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-primary-foreground" size={40} />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Candidatura Enviada!
          </h2>
          <p className="text-muted-foreground mb-8">
            Obrigado pelo interesse em fazer parte da Shiva Conexões em PVC. Nossa equipe de
            RH analisará seu perfil e entrará em contato em breve.
          </p>
          <Button variant="default" onClick={() => setSuccess(false)}>
            Enviar outra candidatura
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="form" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Inscreva-se
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Formulário de Candidatura
          </h2>
          <p className="text-muted-foreground">
            Preencha os campos abaixo e envie seu currículo. É rápido e simples!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-background rounded-2xl p-8 md:p-10 shadow-card space-y-6"
        >
          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">
              Nome completo <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              required
              placeholder="Seu nome completo"
              className="h-12"
            />
          </div>

          {/* Email e Telefone */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                E-mail <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="seu@email.com"
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-medium">
                Telefone <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="(46) 3263-7400"
                className="h-12"
              />
            </div>
          </div>

          {/* Vaga */}
          <div className="space-y-2">
            <Label htmlFor="vaga-select" className="text-foreground font-medium">
              Vaga de interesse <span className="text-destructive">*</span>
            </Label>
            <select
              id="vaga-select"
              required
              value={vaga}
              onChange={(e) => setVaga(e.target.value)}
              className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground"
            >
              <option value="">Selecione uma vaga</option>
              {jobs.map((j) => (
                <option key={j} value={j}>
                  {j}
                </option>
              ))}
            </select>
          </div>

          {/* Upload */}
          <div className="space-y-2">
            <Label className="text-foreground font-medium">
              Currículo (PDF ou DOC) <span className="text-destructive">*</span>
            </Label>
            <label
              htmlFor="resume"
              className="flex items-center gap-3 h-12 w-full rounded-md border border-dashed border-input bg-background px-4 cursor-pointer hover:border-primary transition-colors"
            >
              <Upload size={18} className="text-muted-foreground shrink-0" />
              <span className="text-sm text-muted-foreground truncate">
                {fileName || "Clique para selecionar o arquivo"}
              </span>
              <input
                id="resume"
                type="file"
                required
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="sr-only"
              />
            </label>
          </div>

          {/* Mensagem */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground font-medium">
              Mensagem ou apresentação{" "}
              <span className="text-muted-foreground font-normal">(opcional)</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Conte um pouco sobre você, sua experiência e por que gostaria de trabalhar conosco..."
              rows={4}
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full text-base py-6"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Enviando...
              </>
            ) : (
              "Enviar candidatura"
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ApplicationForm;
