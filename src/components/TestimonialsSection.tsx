import { Star } from "lucide-react";
import omarImage from "@/assets/omar-ocampos.jpg";
import rogelioImage from "@/assets/rogelio-rojas.jpg";
import diegoImage from "@/assets/diego-salamanca.jpg";
import joepJoshuaImage from "@/assets/joep-joshua.jpg";

const testimonials = [
  {
    name: "Omar Ocampos",
    position: "Mediocampista",
    university: "Cowley College",
    image: omarImage,
    quote: "FutbolUAgency me ayudó a cumplir mi sueño de jugar y estudiar en Estados Unidos. Su apoyo fue incondicional desde el primer día.",
  },
  {
    name: "Rogelio Rojas",
    position: "Mediocampista",
    university: "Shorter University",
    image: rogelioImage,
    quote: "El equipo de FutbolUAgency estuvo siempre presente, guiándome en cada paso del proceso. Ahora estoy viviendo mi sueño americano.",
  },
  {
    name: "Diego Salamanca",
    position: "Defensa",
    university: "UW-Stout",
    image: diegoImage,
    quote: "Gracias a FutbolUAgency conseguí una beca completa en una excelente universidad. Su profesionalismo y dedicación marcaron la diferencia.",
  },
  {
    name: "Joep Joshua",
    position: "Mediocampista",
    university: "Seattle University",
    image: joepJoshuaImage,
    quote: "Comprometido con Seattle University gracias al apoyo incondicional de FutbolUAgency. Este es el comienzo de un gran capítulo en mi carrera deportiva y académica.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border"
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
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground italic mb-4 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Info */}
                <div>
                  <h3 className="text-lg font-bold text-foreground">
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
