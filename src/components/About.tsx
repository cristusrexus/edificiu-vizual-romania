import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building2, number: "250+", label: "Proiecte Finalizate", description: "Construcții de toate tipurile" },
    { icon: Award, number: "15+", label: "Ani de Experiență", description: "Pe piața românească" },
    { icon: Users, number: "120+", label: "Specialiști", description: "Ingineri și meșteri calificați" },
    { icon: TrendingUp, number: "98%", label: "Clienți Mulțumiți", description: "Rata de satisfacție" }
  ];

  const certifications = [
    "ISO 9001:2015 - Managementul Calității",
    "ISO 14001:2015 - Managementul de Mediu", 
    "ISO 45001:2018 - Sănătatea și Securitatea Muncii",
    "BREEAM Assessor - Construcții Sustenabile",
    "Autorizație de Execuție Clasa I",
    "Membru ARACO - Asociația Română a Antreprenorilor de Construcții"
  ];

  return (
    <section id="despre" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Despre ConStruct Pro
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                <strong className="text-primary">ConStruct Pro</strong> este o companie românească de construcții 
                înființată în 2009, specializată în proiecte rezidențiale, comerciale și industriale de înaltă calitate.
              </p>
              <p>
                Cu o echipă de peste 120 de specialiști și 15 ani de experiență pe piața românească, 
                am finalizat cu succes peste 250 de proiecte, de la case particulare până la complexe 
                comerciale și industriale majore.
              </p>
              <p>
                Misiunea noastră este să construim nu doar clădiri, ci să materializăm visurile clienților 
                noștri prin profesionalism, inovație și respect pentru mediu. Respectăm cele mai înalte 
                standarde internaționale și investim constant în tehnologii moderne și formarea echipei.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Certificări și Autorizații</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="justify-start p-2 text-xs">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elevation transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;