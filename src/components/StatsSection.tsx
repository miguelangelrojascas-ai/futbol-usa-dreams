const stats = [
  { value: "350+", label: "Universidades aliadas" },
  { value: "40+", label: "Estados cubiertos" },
  { value: "$10M+", label: "En becas gestionadas" },
  { value: "98%", label: "Tasa de éxito" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
