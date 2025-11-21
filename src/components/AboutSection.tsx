import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ignacioImage from "@/assets/ignacio.jpg";
import mohaImage from "@/assets/moha.jpg";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const AboutSection = () => {
  const { t } = useLanguage();
  const [openFounder, setOpenFounder] = useState<string | null>(null);
  
  const founders = [
    {
      id: "ignacio",
      name: "Ignacio De Bejar",
      roleKey: "about.ignacio.role",
      quoteKey: "about.ignacio.quote",
      storyKey: "about.ignacio.story",
      image: ignacioImage,
    },
    {
      id: "moha",
      name: "Moha Tahri",
      roleKey: "about.moha.role",
      quoteKey: "about.moha.quote",
      storyKey: "about.moha.story",
      image: mohaImage,
    },
  ];

  return (
    <section id="quienes-somos" className="py-20 bg-neutral-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,_rgba(255,255,255,0.7),_transparent_30%),radial-gradient(circle_at_90%_20%,_rgba(52,144,220,0.12),_transparent_35%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-border/80 hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 text-primary text-xs font-semibold shadow">
                    {t(founder.roleKey)}
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{t(founder.quoteKey)}</p>
                </div>

                {openFounder !== founder.id ? (
                  <button
                    onClick={() => setOpenFounder(founder.id)}
                    className="flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition-colors"
                  >
                    {t('about.readMore')}
                    <ChevronDown className="h-4 w-4 transition-transform" />
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div className="text-muted-foreground leading-relaxed space-y-4 animate-accordion-down">
                      {t(founder.storyKey).split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                    <button
                      onClick={() => setOpenFounder(null)}
                      className="flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition-colors"
                    >
                      {t('about.readLess')}
                      <ChevronDown className="h-4 w-4 transition-transform rotate-180" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-secondary-foreground font-semibold shadow-lg rounded-xl"
          >
            <a href="https://calendly.com/miguelangelrojascas/caribe-pos" target="_blank" rel="noopener noreferrer">
              {t('about.cta')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
