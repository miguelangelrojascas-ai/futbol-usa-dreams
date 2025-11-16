import { Trophy, GraduationCap, Video, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const RequirementsSection = () => {
  const { t } = useLanguage();
  
  const requirements = [
    {
      icon: Trophy,
      titleKey: "requirements.1.title",
      descKey: "requirements.1.desc",
    },
    {
      icon: GraduationCap,
      titleKey: "requirements.2.title",
      descKey: "requirements.2.desc",
    },
    {
      icon: Video,
      titleKey: "requirements.3.title",
      descKey: "requirements.3.desc",
    },
    {
      icon: Globe,
      titleKey: "requirements.4.title",
      descKey: "requirements.4.desc",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('requirements.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('requirements.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border text-center"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <req.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {t(req.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(req.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
