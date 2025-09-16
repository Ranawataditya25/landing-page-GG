import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertNewsletterSchema, type InsertNewsletter } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Twitter, Linkedin, Instagram, MessageSquare } from "lucide-react";

export function Footer() {
  const { toast } = useToast();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InsertNewsletter>({
    resolver: zodResolver(insertNewsletterSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertNewsletter) => {
      const response = await apiRequest("POST", "/api/newsletter", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertNewsletter) => {
    mutation.mutate(data);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Team%20GoodGuiders";

  return (
    <footer className="bg-gray-900 text-white py-16 hover:bg-hsl(218, 46%, 36%); transition-colors">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">Good Guiders for India</div>
            <p className="text-gray-400 mb-6">
              Empowering students with quality mentorship and career guidance across India.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
               className="w-10 h-10 bg-white text-blue-500 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white text-blue-500 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white text-blue-500 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                 className="w-10 h-10 bg-white text-blue-500 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Academic Mentorship</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Counseling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Study Abroad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Job Assistance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Skill Development</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with latest educational opportunities</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                {...register("email")}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
              )}
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">Copyright © 2025 Good Guiders for India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
