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
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={new URL('@/assets/logo.png', import.meta.url).href} 
                alt="FutbolUAgency Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
              <span className="text-xl font-bold text-white">FutbolUAgency</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <a 
                href="mailto:futboluagency@gmail.com" 
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-5 h-5 text-white" />
                futboluagency@gmail.com
              </a>
              <a 
                href="tel:+34603331990" 
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-5 h-5 text-white" />
                +34 603 331 990
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t('footer.links')}</h3>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("servicios")}
                className="block text-white/80 hover:text-white transition-colors text-sm text-left"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection("quienes-somos")}
                className="block text-white/80 hover:text-white transition-colors text-sm text-left"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection("casos-exito")}
                className="block text-white/80 hover:text-white transition-colors text-sm text-left"
              >
                {t('nav.success')}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} FutbolUAgency. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
