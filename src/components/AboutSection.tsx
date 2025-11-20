import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ignacioImage from "@/assets/ignacio.jpg";
import mohaImage from "@/assets/moha.jpg";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const AboutSection = () => {
  const { t } = useLanguage();
  const [openIgnacio, setOpenIgnacio] = useState(false);
  const [openMoha, setOpenMoha] = useState(false);
  
  const founders = [
    {
      name: "Ignacio De Bejar",
      roleKey: "about.ignacio.role",
      quoteKey: "about.ignacio.quote",
      storyKey: "about.ignacio.story",
      image: ignacioImage,
      isOpen: openIgnacio,
      setIsOpen: setOpenIgnacio,
    },
    {
      name: "Moha Tahri",
      roleKey: "about.moha.role",
      quoteKey: "about.moha.quote",
      storyKey: "about.moha.story",
      image: mohaImage,
      isOpen: openMoha,
      setIsOpen: setOpenMoha,
    },
  ];

  return (
    <section id="quienes-somos" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
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
              className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {founder.name}
                </h3>
                <p className="text-secondary font-semibold mb-4">
                  {t(founder.roleKey)}
                </p>
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "{t(founder.quoteKey)}"
                </p>
                
                <Collapsible open={founder.isOpen} onOpenChange={founder.setIsOpen}>
                  <CollapsibleTrigger className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
                    {founder.isOpen ? t('about.readLess') : t('about.readMore')}
                    <ChevronDown className={`h-4 w-4 transition-transform ${founder.isOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4">
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      {t(founder.storyKey).split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-lg rounded-xl"
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
