import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="ConStruct Pro Logo" className="h-10 w-auto" />
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-primary">ConStruct Pro</h1>
            <p className="text-xs text-muted-foreground">Construcții de Calitate</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#acasa" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Acasă
          </a>
          <a href="#servicii" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Servicii
          </a>
          <a href="#proiecte" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Proiecte
          </a>
          <a href="#despre" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Despre Noi
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+40 123 456 789</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>contact@constructpro.ro</span>
            </div>
          </div>
          
          <Button variant="professional" size="sm" className="hidden md:flex">
            Solicitați Ofertă
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;