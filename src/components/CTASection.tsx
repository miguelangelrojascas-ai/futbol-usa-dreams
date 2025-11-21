import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.2),_transparent_25%),radial-gradient(circle_at_80%_30%,_rgba(255,255,255,0.15),_transparent_25%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold">
            <ShieldCheck className="h-4 w-4" />
            <span>{t('hero.badge1')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-primary-foreground/90">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-2xl hover:shadow-3xl hover:-translate-y-0.5 transition-all font-bold rounded-xl"
            >
              <a
                href="https://calendly.com/miguelangelrojascas/caribe-pos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                {t('cta.button')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <span className="text-sm text-primary-foreground/80">{t('cta.note')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
