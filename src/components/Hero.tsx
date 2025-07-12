import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section 
      id="acasa" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 54, 84, 0.8), rgba(34, 54, 84, 0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Construim <span className="text-accent">Visurile</span> Tale
            <br />
            Cu Profesionalism și Calitate
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Peste 15 ani de experiență în construcții rezidențiale, comerciale și industriale. 
            Partenerii de încredere pentru proiectele tale de construcții în România.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              Începe Proiectul Tău
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              Vezi Proiectele Noastre
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-white/10 backdrop-blur border-white/20 text-center">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Calitate Garantată</h3>
              <p className="text-gray-200">Toate proiectele cu garanție și certificări complete</p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur border-white/20 text-center">
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">La Timp</h3>
              <p className="text-gray-200">Respectăm întotdeauna termenele stabilite</p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur border-white/20 text-center">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Echipă Expertă</h3>
              <p className="text-gray-200">Profesioniști cu experiență și certificări</p>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;