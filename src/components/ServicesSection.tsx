import { Target, Video, Handshake } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Evaluación Académica y Deportiva",
    description: "Analizamos tu perfil completo para identificar las mejores oportunidades de becas que se ajusten a tu nivel y objetivos.",
  },
  {
    icon: Video,
    title: "Video Profesional (VCL)",
    description: "Creamos tu video destacado profesional que muestra tu mejor juego para captar la atención de entrenadores universitarios.",
  },
  {
    icon: Handshake,
    title: "Conexión y Negociación",
    description: "Te conectamos directamente con entrenadores de universidades y negociamos las mejores condiciones de becas para ti.",
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
            Te acompañamos en cada paso del camino hacia tu beca deportiva
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
