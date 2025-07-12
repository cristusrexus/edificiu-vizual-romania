import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contactează-ne Astăzi
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discută cu echipa noastră despre proiectul tău. Oferim consultanță gratuită 
            și estimări detaliate pentru toate tipurile de construcții.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-elevation">
              <CardHeader>
                <CardTitle className="text-primary">Solicită Ofertă</CardTitle>
                <CardDescription>
                  Completează formularul și te vom contacta în cel mai scurt timp pentru o consultație gratuită.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nume" className="block text-sm font-medium text-foreground mb-2">
                        Nume și Prenume *
                      </label>
                      <Input id="nume" placeholder="Introduceți numele complet" required />
                    </div>
                    <div>
                      <label htmlFor="telefon" className="block text-sm font-medium text-foreground mb-2">
                        Telefon *
                      </label>
                      <Input id="telefon" type="tel" placeholder="+40 123 456 789" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input id="email" type="email" placeholder="nume@email.com" required />
                    </div>
                    <div>
                      <label htmlFor="tip-proiect" className="block text-sm font-medium text-foreground mb-2">
                        Tip Proiect
                      </label>
                      <select className="w-full p-2 border border-input rounded-md bg-background">
                        <option>Rezidențial</option>
                        <option>Comercial</option>
                        <option>Industrial</option>
                        <option>Renovare</option>
                        <option>Altul</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mesaj" className="block text-sm font-medium text-foreground mb-2">
                      Descrierea Proiectului *
                    </label>
                    <Textarea 
                      id="mesaj" 
                      placeholder="Descrieți pe scurt proiectul dumneavoastră, bugetul estimat și termenele dorite..."
                      rows={5}
                      required 
                    />
                  </div>

                  <Button variant="professional" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Trimite Solicitarea
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Adresa Sediului</h3>
                    <p className="text-muted-foreground">
                      Strada Construcțiilor nr. 25<br />
                      Sector 1, București 010101<br />
                      România
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Telefon</h3>
                    <p className="text-muted-foreground">
                      Sediu: +40 21 123 4567<br />
                      Mobil: +40 123 456 789<br />
                      Urgențe: +40 123 456 790
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      General: contact@constructpro.ro<br />
                      Oferte: oferte@constructpro.ro<br />
                      Suport: suport@constructpro.ro
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Program de Lucru</h3>
                    <p className="text-muted-foreground">
                      Luni - Vineri: 08:00 - 18:00<br />
                      Sâmbătă: 09:00 - 14:00<br />
                      Duminică: Închis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;