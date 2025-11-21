import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBackground from "@/assets/hero-background.jpg";
import { ArrowDownRight, CheckCircle2, Sparkles } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url('${heroBackground}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute -top-16 -left-16 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-semibold backdrop-blur">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span>{t('hero.trust')}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-2xl hover:shadow-3xl hover:-translate-y-0.5 transition-all font-bold rounded-xl"
              >
                <a href="https://calendly.com/miguelangelrojascas/caribe-pos" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta')}
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/50 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6 rounded-xl"
                onClick={() => {
                  const target = document.getElementById("casos-exito");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="inline-flex items-center gap-2">
                  {t('hero.secondaryCta')}
                  <ArrowDownRight className="h-5 w-5" />
                </span>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-white/90">
              {[t('hero.badge1'), t('hero.badge2'), t('stats.universities'), t('stats.success')].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur"
                >
                  <CheckCircle2 className="h-4 w-4 text-secondary" />
                  <span className="font-semibold leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-3xl" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-white/70">{t('hero.playbookLabel')}</p>
                  <h3 className="text-2xl font-bold text-white">{t('hero.playbookTitle')}</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary text-white text-sm font-semibold shadow-lg">
                  {t('hero.playbookTier')}
                </span>
              </div>

              <div className="space-y-4">
                {[
                  t('hero.playbook1'),
                  t('hero.playbook2'),
                  t('hero.playbook3'),
                  t('hero.playbook4'),
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5" />
                    <span className="text-white/90 font-semibold leading-tight">{item}</span>
                  </div>
                ))}
              </div>

                <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 flex items-center justify-between text-white/90">
                  <div>
                    <p className="text-sm">{t('hero.playbookNext')}</p>
                    <p className="text-lg font-bold">{t('hero.playbookWeek')}</p>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-secondary text-white font-semibold shadow-lg">
                    {t('hero.playbookSlots')}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
