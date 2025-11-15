import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={new URL('@/assets/logo.png', import.meta.url).href} 
              alt="FutbolUAgency Logo" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-foreground">FutbolUAgency</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("casos-exito")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Casos de Éxito
            </button>
            <button
              onClick={() => scrollToSection("quienes-somos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Quiénes Somos
            </button>
          </nav>

          {/* CTA Button */}
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all rounded-xl"
          >
            <a href="https://calendly.com/miguelangelrojascas/caribe-pos" target="_blank" rel="noopener noreferrer">
              Evalúa tu Beca GRATIS
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
