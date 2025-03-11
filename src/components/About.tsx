
import { Button } from "@/components/ui/button";
import { UserCheck, Award, Clock, Users } from "lucide-react";

const AboutCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
    <div className="bg-dental-light p-3 rounded-full mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1588776813677-77aaf5595b83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Ventura Dental Team" 
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Ventura Dentists</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Ventura Dentists, we are dedicated to providing exceptional dental care to residents of Ventura County and beyond. Our team of experienced dentists combines advanced technology with compassionate care to ensure every patient receives the highest quality treatment.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We believe in creating long-lasting relationships with our patients built on trust, open communication, and personalized care tailored to your unique dental needs and goals.
            </p>
            
            <Button className="bg-dental-primary hover:bg-dental-dark mb-12">
              Meet Our Team
            </Button>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <AboutCard
                icon={<UserCheck className="h-6 w-6 text-dental-primary" />}
                title="Experienced Dentists"
                description="Our team of dentists brings decades of combined experience to serve you better."
              />
              <AboutCard
                icon={<Award className="h-6 w-6 text-dental-primary" />}
                title="Award-Winning Care"
                description="Recognized for excellence in dental care and patient satisfaction."
              />
              <AboutCard
                icon={<Clock className="h-6 w-6 text-dental-primary" />}
                title="Convenient Hours"
                description="Extended and weekend hours to accommodate your busy schedule."
              />
              <AboutCard
                icon={<Users className="h-6 w-6 text-dental-primary" />}
                title="Family-Focused"
                description="Comprehensive dental care for patients of all ages in one location."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
