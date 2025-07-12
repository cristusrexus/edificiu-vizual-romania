import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      image: project1,
      title: "Complexul Rezidențial Green Hills",
      category: "Rezidențial",
      location: "București, Sector 1",
      year: "2024",
      area: "15,000 m²",
      description: "Un complex modern de apartamente cu 120 de unități locative, spații verzi și facilități comunitare.",
      status: "Finalizat"
    },
    {
      image: project2,
      title: "Centrul de Afaceri Corporate Plaza",
      category: "Comercial",
      location: "Cluj-Napoca",
      year: "2023",
      area: "25,000 m²",
      description: "Clădire de birouri clasa A cu 12 etaje, certificare BREEAM Excellent și tehnologii smart building.",
      status: "Finalizat"
    },
    {
      image: project3,
      title: "Centrul Logistic Industrial Park",
      category: "Industrial",
      location: "Timișoara",
      year: "2024",
      area: "40,000 m²",
      description: "Complex industrial modern cu hale de depozitare și centre de distribuție pentru e-commerce.",
      status: "În Progres"
    }
  ];

  return (
    <section id="proiecte" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Proiecte de Referință
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descoperă câteva dintre proiectele noastre reprezentative care demonstrează 
            calitatea și diversitatea serviciilor oferite în ultimii ani.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-elevation transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant={project.status === "Finalizat" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-accent" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    {project.year}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-accent" />
                    Suprafață: {project.area}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="professional" size="lg">
            Vezi Toate Proiectele
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;