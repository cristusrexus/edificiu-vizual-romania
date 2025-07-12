import { Building, Home, Factory, Wrench, PaintBucket, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Construcții Comerciale",
      description: "Clădiri de birouri, centre comerciale, spații retail și complexe mixte cu design modern și funcțional.",
      features: ["Proiectare arhitecturală", "Execuție la cheie", "Certificări BREEAM"]
    },
    {
      icon: Home,
      title: "Construcții Rezidențiale",
      description: "Case particulare, vile, apartamente și complexe rezidențiale cu atenție la detalii și confort.",
      features: ["Planuri personalizate", "Materiale premium", "Eficiență energetică"]
    },
    {
      icon: Factory,
      title: "Construcții Industriale",
      description: "Hale industriale, depozite, fabrici și centre logistice adaptate nevoilor specifice ale business-ului.",
      features: ["Structuri rezistente", "Tehnologii avansate", "Conformitate reglementări"]
    },
    {
      icon: Wrench,
      title: "Renovări și Modernizări",
      description: "Transformarea și modernizarea spațiilor existente pentru a răspunde cerințelor actuale.",
      features: ["Analiză structurală", "Design contemporan", "Optimizare spații"]
    },
    {
      icon: PaintBucket,
      title: "Finisaje și Design Interior",
      description: "Servicii complete de finisaje interioare și design pentru spații funcționale și estetice.",
      features: ["Consultanță design", "Materiale calitative", "Execuție impecabilă"]
    },
    {
      icon: Zap,
      title: "Instalații Tehnice",
      description: "Proiectare și execuție instalații electrice, sanitare, termice și de ventilație.",
      features: ["Sisteme smart", "Eficiență energetică", "Mentenanță inclusă"]
    }
  ];

  return (
    <section id="servicii" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Serviciile Noastre Complete
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferim o gamă completă de servicii de construcții, de la proiectare la finalizare, 
            cu experiență în toate tipurile de proiecte și respectarea celor mai înalte standarde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-elevation transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;