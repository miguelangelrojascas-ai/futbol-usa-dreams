import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ignacioImage from "@/assets/ignacio.jpg";
import mohaImage from "@/assets/moha.jpg";

const AboutSection = () => {
  const { t } = useLanguage();
  
  const founders = [
    {
      name: "Ignacio De Bejar",
      roleKey: "about.ignacio.role",
      quoteKey: "about.ignacio.quote",
      image: ignacioImage,
    },
    {
      name: "Moha Tahri",
      roleKey: "about.moha.role",
      quoteKey: "about.moha.quote",
      image: mohaImage,
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
                <p className="text-muted-foreground italic leading-relaxed">
                  "{t(founder.quoteKey)}"
                </p>
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
