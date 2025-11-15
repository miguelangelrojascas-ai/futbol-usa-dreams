import { Button } from "@/components/ui/button";
import ignacioImage from "@/assets/ignacio.jpg";
import mohaImage from "@/assets/moha.jpg";

const founders = [
  {
    name: "Ignacio De Bejar",
    role: "Finanzas y Operaciones",
    quote: "Vivir la soledad de estar en un país extranjero con una agencia que solo buscaba dinero me marcó. Fundé esto para que ningún jugador se sienta abandonado.",
    image: ignacioImage,
  },
  {
    name: "Moha Tahri",
    role: "Relaciones con Universidades",
    quote: "Me sentí abandonado al intentar transferirme. Nuestra misión es estar presentes en todo momento para el jugador y su familia.",
    image: mohaImage,
  },
];

const AboutSection = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Más que una Agencia, Somos tu Equipo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ignacio y Mohammed fundaron FutbolUAgency para que ningún jugador vuelva a sentirse solo en su sueño. 
            Tras vivir malas experiencias con agencias poco transparentes, decidieron crear una organización cercana, 
            profesional y comprometida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {founder.name}
                </h3>
                <p className="text-secondary font-semibold mb-4">
                  {founder.role}
                </p>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{founder.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-lg rounded-xl"
          >
            <a href="https://calendly.com/miguelangelrojascas/caribe-pos" target="_blank" rel="noopener noreferrer">
              Conoce cómo podemos ayudarte
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
