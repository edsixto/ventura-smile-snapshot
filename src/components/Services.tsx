
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Calendar, Award, ArrowRight, ArrowUp, ArrowDown } from "lucide-react";

const services = [
  {
    icon: <ArrowRight className="h-10 w-10 text-dental-primary" />,
    title: "General Dentistry",
    description: "Comprehensive check-ups, cleanings, fillings, and preventative care to maintain oral health."
  },
  {
    icon: <ArrowUp className="h-10 w-10 text-dental-primary" />,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with whitening, veneers, bonding, and other aesthetic treatments."
  },
  {
    icon: <ArrowDown className="h-10 w-10 text-dental-primary" />,
    title: "Restorative Care",
    description: "Restore function and appearance with crowns, bridges, implants, and dentures."
  },
  {
    icon: <Heart className="h-10 w-10 text-dental-primary" />,
    title: "Pediatric Dentistry",
    description: "Kid-friendly dental care in a comfortable environment for your little ones."
  },
  {
    icon: <Award className="h-10 w-10 text-dental-primary" />,
    title: "Advanced Procedures",
    description: "Root canals, extractions, periodontal treatments, and other specialized services."
  },
  {
    icon: <Calendar className="h-10 w-10 text-dental-primary" />,
    title: "Emergency Care",
    description: "Same-day appointments available for dental emergencies and pain relief."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Dental Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We offer a comprehensive range of dental services to meet all your oral health needs in Ventura, California.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-dental-primary">
              <CardHeader className="flex flex-col items-start p-6">
                <div className="bg-dental-light p-3 rounded-lg mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
