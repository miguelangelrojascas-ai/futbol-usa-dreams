import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { value: "350+", labelKey: "stats.universities" },
  { value: "40+", labelKey: "stats.states" },
  { value: "$10M+", labelKey: "stats.scholarships" },
  { value: "98%", labelKey: "stats.success" },
];

const StatsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                {stat.value}
              </div>
              <div className="text-foreground/70 font-medium text-base">
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
