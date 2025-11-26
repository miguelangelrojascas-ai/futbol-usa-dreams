import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-3 md:px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <img 
              src={new URL('@/assets/logo.png', import.meta.url).href} 
              alt="FutbolUAgency Logo" 
              className="h-10 md:h-12 w-auto"
            />
            <span className="text-base md:text-xl font-bold text-foreground">FutbolUAgency</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection("casos-exito")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.success')}
            </button>
            <button
              onClick={() => scrollToSection("quienes-somos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.about')}
            </button>
          </nav>

          {/* CTA Button */}
          <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all rounded-xl text-xs md:text-sm px-3 md:px-4 whitespace-nowrap"
            >
              <a href="https://calendly.com/miguelangelrojascas/new-meeting" target="_blank" rel="noopener noreferrer">
                {t('nav.cta')}
              </a>
            </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
