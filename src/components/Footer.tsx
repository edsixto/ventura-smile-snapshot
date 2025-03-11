
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VenturaDentists.com</h3>
            <p className="text-gray-400 mb-4">
              Providing quality dental care to the Ventura community for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-dental-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-dental-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-dental-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-dental-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">General Dentistry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Restorative Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pediatric Dentistry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emergency Care</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Main Street</p>
              <p>Ventura, CA 93001</p>
              <p>Phone: (805) 555-1234</p>
              <p>Email: info@venturadentists.com</p>
            </address>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-6" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} VenturaDentists.com. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-gray-400 transition-colors ml-2">Terms of Service</a> | 
            <a href="#" className="hover:text-gray-400 transition-colors ml-2">Accessibility</a>
          </p>
          <p className="mt-2">
            This is a demonstration website. Not affiliated with any actual dental practice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
