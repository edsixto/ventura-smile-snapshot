
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient for 5 years",
    content: "I've been going to Ventura Dentists for years, and I've always had a great experience. The staff is friendly, the office is clean and modern, and the dentists are knowledgeable and gentle. I highly recommend them!",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "New Patient",
    content: "After moving to Ventura, I was nervous about finding a new dentist. The team at Ventura Dentists made me feel welcome and comfortable from day one. Their attention to detail and follow-up care is impressive!",
    avatar: "MR"
  },
  {
    id: 3,
    name: "Jennifer Williams",
    role: "Patient for 3 years",
    content: "I used to be terrified of going to the dentist until I found Ventura Dentists. They took the time to understand my anxiety and made accommodations to ensure I felt comfortable. Now I actually look forward to my dental visits!",
    avatar: "JW"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Patient for 7 years",
    content: "The cosmetic work I had done at Ventura Dentists completely transformed my smile. The results exceeded my expectations, and the compliments I receive boost my confidence daily. Worth every penny!",
    avatar: "DT"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = window.innerWidth >= 768 ? 2 : 1;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + itemsPerPage) >= testimonials.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - itemsPerPage) < 0 ? testimonials.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="testimonials" className="py-16 bg-dental-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our patients have to say about their experiences with Ventura Dentists.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex-1 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-dental-primary">
                      <AvatarFallback className="bg-dental-primary text-white">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">{testimonial.content}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-dental-primary text-dental-primary" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow hover:bg-dental-light transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6 text-dental-primary" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow hover:bg-dental-light transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6 text-dental-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
