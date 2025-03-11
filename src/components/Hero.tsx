
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-dental-light">
      <div className="absolute inset-0 bg-gradient-to-r from-dental-primary/10 to-dental-light/30"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <div 
              className="bg-dental-primary/10 text-dental-primary text-lg font-semibold px-4 py-2 rounded-full inline-block mb-4 cursor-pointer"
              onClick={() => window.open("https://mynamebrand.com/name/VenturaDentists.com", "_blank")}
            >
              Domain For Sale
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Quality Dental Care in <span className="text-dental-primary">Ventura</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Experience exceptional dental care with our team of expert dentists. From routine check-ups to advanced cosmetic procedures, we're here for all your dental needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                className="bg-dental-primary hover:bg-dental-dark text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg"
                onClick={() => window.open("https://mynamebrand.com/name/VenturaDentists.com", "_blank")}
              >
                <ExternalLink className="mr-2 h-5 w-5" /> BUY THIS DOMAIN
              </Button>
              <Button 
                variant="outline" 
                className="border-dental-primary text-dental-primary hover:bg-dental-light py-3 px-8 rounded-md text-lg"
                onClick={() => window.open("https://mynamebrand.com/name/VenturaDentists.com", "_blank")}
              >
                <Calendar className="mr-2 h-5 w-5" /> Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjM0ODY5Ng&ixlib=rb-1.2.1&q=80&w=1080" 
              alt="Ventura Dentist Office" 
              className="rounded-lg shadow-xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
