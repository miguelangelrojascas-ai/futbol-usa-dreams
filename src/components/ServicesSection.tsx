import { Target, Video, Handshake, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Evaluación Deportiva y Académica",
    description: "Analizamos tu nivel futbolístico y académico para identificar universidades que encajen con tu perfil, metas y presupuesto.",
  },
  {
    icon: Video,
    title: "Creación de Perfil Profesional + Highlight",
    description: "Diseñamos tu perfil completo en inglés, incluyendo edición de video profesional con tus mejores jugadas.",
  },
  {
    icon: Handshake,
    title: "Conexión Directa y Negociación con Universidades",
    description: "Nos encargamos de presentarte a entrenadores en EE. UU. y gestionar becas según tus objetivos.",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento Personalizado",
    description: "Te guiamos paso a paso: aplicación universitaria, visado, procesos deportivos y adaptación.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Te acompañamos en todo el proceso hacia tu beca deportiva en EE. UU.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
