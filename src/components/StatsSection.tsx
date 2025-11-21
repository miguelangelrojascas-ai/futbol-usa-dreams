import { Building2, MapPin, Trophy, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { value: "350+", labelKey: "stats.universities", icon: Building2 },
  { value: "40+", labelKey: "stats.states", icon: MapPin },
  { value: "$10M+", labelKey: "stats.scholarships", icon: Sparkles },
  { value: "98%", labelKey: "stats.success", icon: Trophy },
];

const StatsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-neutral-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,144,220,0.12),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(244,63,94,0.12),_transparent_40%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('stats.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">2024</span>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium leading-tight">
                {t(stat.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
