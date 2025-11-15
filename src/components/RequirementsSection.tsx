import { Trophy, GraduationCap, Video, Globe } from "lucide-react";

const requirements = [
  {
    icon: Trophy,
    title: "Nivel Deportivo",
    description: "Experiencia competitiva en clubes, academias o selecciones.",
  },
  {
    icon: GraduationCap,
    title: "Nivel de Estudios",
    description: "Haber terminado el bachillerato/ESO o estar en último año.",
  },
  {
    icon: Video,
    title: "Video Destacado",
    description: "Tener videos jugando es fundamental para evaluar tu nivel.",
  },
  {
    icon: Globe,
    title: "Inglés Básico",
    description: "Se recomienda un nivel básico de inglés. Te guiamos en los exámenes.",
  },
];

const RequirementsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Requisitos Básicos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lo que necesitas para iniciar tu camino hacia una beca deportiva
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border text-center"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <req.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {req.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {req.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
