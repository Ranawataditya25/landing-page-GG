import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Class 12, Science Stream",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    content: "Good Guiders helped me choose the right engineering stream and prepare for JEE. I scored 98.2 percentile thanks to their mentorship!",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Commerce Graduate",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    content: "The career counseling session opened my eyes to opportunities I never knew existed. Now I'm pursuing my dream job in finance!",
    rating: 5
  },
  {
    name: "Arjun Kumar",
    role: "Study Abroad Student",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    content: "Got into my dream university in Canada! The study abroad guidance was comprehensive and made the entire process smooth.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-[rgb(205,237,202)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories from Our Students</h2>
          <p className="text-xl text-gray-700">See how our mentorship has transformed student careers</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={`Student testimonial - ${testimonial.name}`} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex text-yellow-400">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

