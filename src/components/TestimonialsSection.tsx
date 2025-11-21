import { Star, Quote } from "lucide-react";
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
    <section id="casos-exito" className="py-20 bg-gradient-to-b from-background via-neutral-light to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(52,144,220,0.12),_transparent_40%),radial-gradient(circle_at_20%_70%,_rgba(244,63,94,0.12),_transparent_45%)]" />
      <div className="container mx-auto px-4 relative">
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
              className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-border/80 hover:-translate-y-1 transition-all"
            >
              <div className="aspect-square overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white text-xs font-semibold">
                  <Quote className="h-4 w-4" />
                  <span>{testimonial.university}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-muted-foreground italic mb-4 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    Transfer
                  </span>
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
