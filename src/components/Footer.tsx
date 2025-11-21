import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background pt-16 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_40%,_rgba(255,255,255,0.08),_transparent_30%),radial-gradient(circle_at_90%_60%,_rgba(255,255,255,0.06),_transparent_30%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={new URL('@/assets/logo.png', import.meta.url).href}
                alt="FutbolUAgency Logo"
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold">FutbolUAgency</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.contact')}</h3>
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

          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.links')}</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("servicios")}
                className="block text-background/80 hover:text-background transition-colors text-sm"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection("quienes-somos")}
                className="block text-background/80 hover:text-background transition-colors text-sm"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection("casos-exito")}
                className="block text-background/80 hover:text-background transition-colors text-sm"
              >
                {t('nav.success')}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} FutbolUAgency. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
