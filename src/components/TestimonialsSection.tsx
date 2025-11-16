import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import omarImage from "@/assets/omar-ocampos.jpg";
import rogelioImage from "@/assets/rogelio-rojas.jpg";
import diegoImage from "@/assets/diego-salamanca.jpg";
import joepJoshuaImage from "@/assets/joep-joshua.jpg";

const testimonials = [
  {
    name: "Joep Joshua",
    position: "Defensa Central",
    university: "Seattle University",
    image: joepJoshuaImage,
    quote: "Quiero agradecer a FutbolUAgency por todo el apoyo en mi proceso de transferencia. Gracias a su ayuda, hoy puedo decir que formo parte de una universidad NCAA D1 como Seattle U. Han sido clave en cada paso del camino",
  },
  {
    name: "Omar Ocampos",
    position: "Mediocampista",
    university: "Cowley College",
    image: omarImage,
    quote: "Gracias a Moha e Ignacio he conseguido ir al mejor Junior College del país con beca completa, con el objetivo claro de transferirme a una NCAA D1.",
  },
  {
    name: "Rogelio Rojas",
    position: "Mediocampista",
    university: "Shorter University",
    image: rogelioImage,
    quote: "Estaba en una universidad NCAA D2 donde el coach no confiaba en mí ni me daba oportunidades. Pero cuando conocí FutbolUAgency, todo cambió: consiguieron para mí una mejor beca en otra universidad, donde hoy soy una pieza clave del equipo y me siento valorado.",
  },
  {
    name: "Diego Salamanca",
    position: "Defensa",
    university: "UW-Stout",
    image: diegoImage,
    quote: "Busqué una transferencia y contacté con FutbolUAgency, quienes hicieron realidad una mejor beca y una universidad bien ubicada para seguir creciendo académica y deportivamente. ¡Gracias por el apoyo en este proceso!",
  },
];

const TestimonialsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="casos-exito" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
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
