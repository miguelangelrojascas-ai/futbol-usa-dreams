import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Agenda tu Evaluación Gratuita
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Empieza a construir tu futuro universitario hoy. Sin compromiso, sin costo.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-card hover:bg-card/90 text-foreground text-lg px-8 py-6 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all font-bold"
          >
            <a 
              href="https://calendly.com/miguelangelrojascas/caribe-pos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Agendar Evaluación Gratuita
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
