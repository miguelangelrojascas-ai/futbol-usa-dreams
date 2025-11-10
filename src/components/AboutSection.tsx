import { Button } from "@/components/ui/button";

const founders = [
  {
    name: "Ignacio",
    role: "Finanzas y Operaciones",
    quote: "Viví la soledad de estar en un país extranjero con una agencia que solo buscaba dinero. Fundé esto para que ningún jugador se sienta abandonado.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
  },
  {
    name: "Mohammed",
    role: "Relaciones con Universidades",
    quote: "Me sentí abandonado al intentar transferirme. Nuestra misión es estar presentes en todo momento para el jugador y su familia.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },
];

const AboutSection = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Más que una Agencia, Somos tu Equipo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ignacio y Mohammed fundaron Futbol Agency para que ningún jugador vuelva a sentirse solo en su sueño. 
            Tras vivir malas experiencias con agencias que desaparecían, decidieron crear una organización transparente, 
            cercana y comprometida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="text-primary font-semibold mb-4">
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
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
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
