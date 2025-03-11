
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <h1 className="text-dental-primary text-2xl font-bold">VenturaDentists.com</h1>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-dental-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-dental-primary transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-dental-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-dental-primary transition-colors">
              Contact
            </a>
            <Button className="bg-dental-primary hover:bg-dental-dark">
              <Phone className="mr-2 h-4 w-4" /> (805) 555-1234
            </Button>
          </div>
          
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 flex flex-col items-start">
            <a href="#services" className="text-gray-700 hover:text-dental-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-dental-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-dental-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-dental-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <Button className="bg-dental-primary hover:bg-dental-dark">
              <Phone className="mr-2 h-4 w-4" /> (805) 555-1234
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
