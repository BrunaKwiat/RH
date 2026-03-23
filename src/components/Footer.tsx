import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-card text-muted-foreground py-16 border-t border-border">
    <div className="container mx-auto px-4 text-center">
      <div className="flex flex-col items-center justify-center gap-10 mb-12">
        {/* Contato */}
        <div className="flex flex-col items-center">
          <h4 className="text-foreground font-semibold mb-4 text-lg">Contato</h4>
          <ul className="space-y-3 text-sm flex flex-col items-center sm:flex-row sm:gap-8 sm:space-y-0">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              rh@shiva.ind.br
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              (46)3263-7400
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              Palmas, PR - Brasil
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Shiva Conexões em PVC. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
