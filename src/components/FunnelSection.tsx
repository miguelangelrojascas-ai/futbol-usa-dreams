import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FunnelSection = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      titleKey: "funnel.step1",
    },
    {
      number: "02",
      titleKey: "funnel.step2",
    },
    {
      number: "03",
      titleKey: "funnel.step3",
    },
    {
      number: "04",
      titleKey: "funnel.step4",
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('funnel.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('funnel.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-10 md:left-20 top-0 bottom-0 w-1 bg-primary/10 rounded-full" />

            {steps.map((step, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                <div className="flex items-start gap-8">
                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl md:text-3xl font-bold">
                        {step.number}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-24 md:top-28 left-1/2 transform -translate-x-1/2">
                        <CheckCircle2 className="w-7 h-7 text-secondary fill-secondary/20" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card p-8 rounded-xl shadow-md border border-border/50">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                      {t(step.titleKey)}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunnelSection;
