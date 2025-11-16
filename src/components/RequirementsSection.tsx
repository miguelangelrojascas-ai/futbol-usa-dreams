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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('requirements.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('requirements.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 text-center flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <req.icon className="w-8 h-8 text-secondary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                {t(req.titleKey)}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed flex-grow">
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
