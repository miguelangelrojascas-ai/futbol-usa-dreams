import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Menu, X, ShieldCheck } from "lucide-react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const NavLinks = () => (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
      <button
        onClick={() => scrollToSection("servicios")}
        className="text-foreground/90 hover:text-primary transition-colors font-medium"
      >
        {t('nav.services')}
      </button>
      <button
        onClick={() => scrollToSection("casos-exito")}
        className="text-foreground/90 hover:text-primary transition-colors font-medium"
      >
        {t('nav.success')}
      </button>
      <button
        onClick={() => scrollToSection("quienes-somos")}
        className="text-foreground/90 hover:text-primary transition-colors font-medium"
      >
        {t('nav.about')}
      </button>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border/60 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 blur-lg" />
              <img
                src={new URL('@/assets/logo.png', import.meta.url).href}
                alt="FutbolUAgency Logo"
                className="relative h-12 w-auto drop-shadow-sm"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3rem] text-primary font-semibold">FutbolUAgency</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                <span>Scholarships & college soccer</span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <NavLinks />
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-semibold">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>

            <Button
              asChild
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all rounded-xl"
            >
              <a href="https://calendly.com/miguelangelrojascas/caribe-pos" target="_blank" rel="noopener noreferrer">
                {t('nav.cta')}
              </a>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs font-semibold">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <button
              className="p-2 rounded-lg border border-border/70 bg-white/70"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl border border-border bg-white/90 shadow-lg space-y-4">
            <NavLinks />
            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold"
            >
              <a href="https://calendly.com/miguelangelrojascas/caribe-pos" target="_blank" rel="noopener noreferrer">
                {t('nav.cta')}
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
