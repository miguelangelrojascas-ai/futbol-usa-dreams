import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Evaluación Inicial",
    description: "Analizamos tu perfil académico y deportivo para identificar las mejores oportunidades.",
  },
  {
    number: "02",
    title: "Video Profesional (VCL)",
    description: "Creamos un video destacado que muestra tu mejor rendimiento en el campo.",
  },
  {
    number: "03",
    title: "Contacto con Entrenadores",
    description: "Te conectamos directamente con entrenadores de universidades interesadas.",
  },
  {
    number: "04",
    title: "Oferta y Asesoría Final",
    description: "Negociamos la mejor oferta y te acompañamos hasta tu llegada al campus.",
  },
];

const FunnelSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tu Camino a la Beca
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso claro y estructurado para asegurar tu éxito
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line - Desktop */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

            {steps.map((step, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className="flex gap-6 md:gap-8">
                  {/* Number Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <span className="text-primary-foreground font-bold text-lg">
                        {step.number}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="md:hidden absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-primary/20" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-background rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
                      {step.title}
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
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
