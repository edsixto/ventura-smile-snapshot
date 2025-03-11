
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Form Submitted",
      description: "Thank you for contacting us. We'll get back to you shortly!",
      duration: 5000,
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions or ready to schedule your appointment? Reach out to our friendly team today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <Input 
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(805) 555-1234"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={4}
                  required
                  className="w-full"
                />
              </div>
              
              <Button type="submit" className="w-full bg-dental-primary hover:bg-dental-dark">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-dental-light p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-dental-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-700">(805) 555-1234</p>
                  <p className="text-gray-500 text-sm">Mon-Fri, 8am-5pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-light p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-dental-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-700">info@venturadentists.com</p>
                  <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-light p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-dental-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-gray-700">123 Main Street</p>
                  <p className="text-gray-700">Ventura, CA 93001</p>
                  <p className="text-gray-500 text-sm">Free parking available</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-light p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-dental-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Office Hours</h4>
                  <div className="grid grid-cols-2 gap-2 text-gray-700">
                    <p>Monday - Friday:</p>
                    <p>8:00 AM - 5:00 PM</p>
                    <p>Saturday:</p>
                    <p>9:00 AM - 2:00 PM</p>
                    <p>Sunday:</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-100 rounded-lg overflow-hidden h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52861.03381226049!2d-119.27621587832032!3d34.27494710000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e9b0d91d05bc31%3A0x535daf9e2d5426fd!2sVentura%2C%20CA!5e0!3m2!1sen!2sus!4v1655761059929!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ventura Dentists Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
