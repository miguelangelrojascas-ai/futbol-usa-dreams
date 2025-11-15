import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-primary-foreground/95 mb-8">
            Agenda una evaluación gratuita de 20 minutos con nuestro equipo
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all font-bold rounded-xl"
          >
            <a 
              href="https://calendly.com/miguelangelrojascas/caribe-pos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Evalúa tu Beca GRATIS
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
