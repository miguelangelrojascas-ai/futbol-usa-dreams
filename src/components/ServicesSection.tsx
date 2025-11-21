import { Target, Video, Handshake, HeartHandshake, Compass, ArrowUpRight } from "lucide-react";
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
    <section id="servicios" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(52,144,220,0.08),_transparent_25%),radial-gradient(circle_at_80%_0%,_rgba(244,63,94,0.08),_transparent_20%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
            <Compass className="h-4 w-4" />
            <span>{t('services.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border border-border shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-2xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {t(service.descKey)}
              </p>
              <div className="h-1 w-full rounded-full bg-neutral-light overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-primary to-secondary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
