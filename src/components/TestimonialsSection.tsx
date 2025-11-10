import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alejandro Pérez",
    position: "Delantero",
    university: "Stanford University",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
    quote: "Gracias a Futbol Agency, ahora estoy jugando en una de las mejores universidades del país mientras obtengo una educación de clase mundial. El equipo me apoyó en cada paso.",
  },
  {
    name: "David Moreno",
    position: "Defensa",
    university: "Clemson University",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800",
    quote: "El proceso fue increíblemente fluido. Desde la evaluación inicial hasta firmar mi beca, el equipo estuvo siempre disponible y me guió con profesionalismo total.",
  },
  {
    name: "Sofía Castillo",
    position: "Mediocampista",
    university: "Univ. North Carolina",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    quote: "Nunca pensé que mi sueño de jugar en Estados Unidos sería posible. Futbol Agency no solo lo hizo realidad, sino que negociaron una beca que cubre todo. ¡Eternamente agradecida!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="casos-exito" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Casos de Éxito
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Historias reales de jugadores que cumplieron su sueño con nuestra ayuda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Info */}
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm">
                    {testimonial.position}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.university}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
