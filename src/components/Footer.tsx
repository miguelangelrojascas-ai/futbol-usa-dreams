import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <span className="text-xl font-bold text-primary-foreground">FA</span>
              </div>
              <span className="text-xl font-bold text-secondary-foreground">Futbol Agency</span>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Transformamos tu talento deportivo en una oportunidad universitaria en Estados Unidos.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-secondary-foreground mb-4">
              Contacto
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:info@futboluagency.com"
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">info@futboluagency.com</span>
              </a>
              <a 
                href="tel:+18327411634"
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">🇺🇸 +1 (832) 741-1634</span>
              </a>
              <a 
                href="tel:+34634000794"
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">🇪🇸 +34 634 00 07 94</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-secondary-foreground mb-4">
              Enlaces Rápidos
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
              >
                Servicios
              </button>
              <button
                onClick={() => document.getElementById("casos-exito")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
              >
                Casos de Éxito
              </button>
              <button
                onClick={() => document.getElementById("quienes-somos")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
              >
                Quiénes Somos
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <p className="text-center text-secondary-foreground/60 text-sm">
            © 2025 Futbol Agency. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
