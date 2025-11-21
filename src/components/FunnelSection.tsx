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
    <section className="py-20 bg-gradient-to-b from-background via-neutral-light to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('funnel.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('funnel.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line with Gradient */}
            <div className="absolute left-8 md:left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full opacity-30" />

            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative mb-12 last:mb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  {/* Number Circle with Gradient */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl shadow-primary/20 hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                        {step.number}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 animate-pulse">
                        <CheckCircle2 className="w-6 h-6 text-secondary drop-shadow-md" />
                      </div>
                    )}
                  </div>

                  {/* Content Card with Enhanced Design */}
                  <div className="flex-1 bg-gradient-to-br from-card to-card/50 p-6 md:p-8 rounded-2xl shadow-xl border-2 border-primary/10 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
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
