import { Trophy, GraduationCap, Share2, Globe } from "lucide-react";

const requirements = [
  {
    icon: Trophy,
    title: "Nivel Deportivo",
    description: "Experiencia competitiva en tu deporte",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800",
  },
  {
    icon: GraduationCap,
    title: "Nivel de Estudios",
    description: "Rendimiento académico sólido",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800",
  },
  {
    icon: Share2,
    title: "Redes Sociales",
    description: "Presencia digital activa",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
  },
  {
    icon: Globe,
    title: "Idioma",
    description: "Conocimientos básicos de inglés",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800",
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
            Lo que necesitas para comenzar tu camino hacia una beca deportiva
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-80"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${req.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/70 to-brand-navy/30" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-end p-6 text-center">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <req.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {req.title}
                </h3>
                <p className="text-white/90 text-sm">
                  {req.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
