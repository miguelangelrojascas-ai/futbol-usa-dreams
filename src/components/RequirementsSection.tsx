import { Trophy, GraduationCap, Video, Globe, Shield, ArrowRight } from "lucide-react";
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
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(52,144,220,0.08),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(244,63,94,0.08),_transparent_30%)]" />
      <div className="container mx-auto px-4 relative">
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
              className="relative group bg-white rounded-2xl p-6 border border-border shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              <div className="absolute inset-x-0 -top-1 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full opacity-70" />
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <req.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {t(req.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {t(req.descKey)}
              </p>
              <div className="flex items-center justify-between text-xs font-semibold text-primary">
                <span className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  {t('requirements.ready')}
                </span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
