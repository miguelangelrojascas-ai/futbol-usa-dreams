import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-28 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8 leading-tight">
            {t('cta.title')}
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-12 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl px-12 py-8 h-auto shadow-2xl hover:shadow-3xl hover:scale-105 transition-all font-bold rounded-xl"
          >
            <a 
              href="https://calendly.com/miguelangelrojascas/caribe-pos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              {t('cta.button')}
              <ArrowRight className="w-6 h-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
