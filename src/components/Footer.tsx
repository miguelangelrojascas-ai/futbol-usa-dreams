import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={new URL('@/assets/logo.png', import.meta.url).href} 
                alt="FutbolUAgency Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold">FutbolUAgency</span>
            </div>
            <p className="text-background/80 text-sm">
              Transformamos tu talento deportivo en una oportunidad universitaria en Estados Unidos
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a 
                href="mailto:futboluagency@gmail.com" 
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                futboluagency@gmail.com
              </a>
              <a 
                href="tel:+34603331990" 
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +34 603 331 990
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("servicios")}
                className="block text-background/80 hover:text-background transition-colors text-sm"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("quienes-somos")}
                className="block text-background/80 hover:text-background transition-colors text-sm"
              >
                Quiénes Somos
              </button>
              <button
                onClick={() => scrollToSection("casos-exito")}
                className="block text-background/80 hover:text-background transition-colors text-sm"
              >
                Casos de Éxito
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} FutbolUAgency. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
