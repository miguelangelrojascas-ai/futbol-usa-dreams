import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Evaluación Integral del Perfil",
    description: "Análisis deportivo, académico y personal para determinar tu potencial y objetivos.",
  },
  {
    number: "02",
    title: "Creación de Highlight Video Profesional",
    description: "Producimos tu video destacado que captura tu mejor nivel para impresionar entrenadores.",
  },
  {
    number: "03",
    title: "Contacto Directo con Universidades",
    description: "Te conectamos con entrenadores universitarios y gestionamos el proceso de reclutamiento.",
  },
  {
    number: "04",
    title: "Oferta, Visado y Asesoría Final",
    description: "Negociamos tu beca, te guiamos en el visado y te preparamos para tu nueva vida en EE. UU.",
  },
];

const FunnelSection = () => {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tu Camino a la Beca
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso claro, personalizado y respaldado por experiencia internacional
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-16 top-0 bottom-0 w-0.5 bg-primary/20" />

            {steps.map((step, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className="flex items-start gap-6">
                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl md:text-2xl font-bold">
                        {step.number}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                        <CheckCircle2 className="w-6 h-6 text-secondary" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card p-6 rounded-xl shadow-lg border border-border">
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                      {step.title}
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
