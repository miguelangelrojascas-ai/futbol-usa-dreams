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
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
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
