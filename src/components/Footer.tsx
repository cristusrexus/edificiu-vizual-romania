import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img src={logo} alt="EliteConstruct SRL Logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-2xl font-bold">EliteConstruct SRL</h3>
                <p className="text-primary-foreground/80">Construcții de Excelență</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 max-w-md">
              EliteConstruct SRL - companie românească de construcții cu 15 ani de experiență în proiecte 
              rezidențiale, comerciale și industriale. Excelență garantată și respect pentru termene.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300">
                <Facebook className="h-5 w-5 text-accent-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300">
                <Instagram className="h-5 w-5 text-accent-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300">
                <Linkedin className="h-5 w-5 text-accent-foreground" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicii</h4>
            <ul className="space-y-3">
              <li><a href="#servicii" className="text-primary-foreground/80 hover:text-accent transition-colors">Construcții Rezidențiale</a></li>
              <li><a href="#servicii" className="text-primary-foreground/80 hover:text-accent transition-colors">Construcții Comerciale</a></li>
              <li><a href="#servicii" className="text-primary-foreground/80 hover:text-accent transition-colors">Construcții Industriale</a></li>
              <li><a href="#servicii" className="text-primary-foreground/80 hover:text-accent transition-colors">Renovări</a></li>
              <li><a href="#servicii" className="text-primary-foreground/80 hover:text-accent transition-colors">Design Interior</a></li>
              <li><a href="#servicii" className="text-primary-foreground/80 hover:text-accent transition-colors">Instalații Tehnice</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>Strada Construcțiilor nr. 25</p>
                  <p>Sector 1, București</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">+40 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">contact@eliteconstruct.ro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 EliteConstruct SRL. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Politica de Confidențialitate
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Termeni și Condiții
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;