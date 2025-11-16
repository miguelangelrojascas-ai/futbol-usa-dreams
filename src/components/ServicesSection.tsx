import { Target, Video, Handshake, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Target,
      titleKey: "services.1.title",
      descKey: "services.1.desc",
    },
    {
      icon: Video,
      titleKey: "services.2.title",
      descKey: "services.2.desc",
    },
    {
      icon: Handshake,
      titleKey: "services.3.title",
      descKey: "services.3.desc",
    },
    {
      icon: HeartHandshake,
      titleKey: "services.4.title",
      descKey: "services.4.desc",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
