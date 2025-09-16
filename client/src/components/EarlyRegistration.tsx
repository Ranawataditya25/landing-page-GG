import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export function EarlyRegistration() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="early-registration" className="p-[23px] bg-white">

      <div className="custom-max-w-45 mx-auto px-4 sm:px-6 lg:px-8">

       <div className="bg-gradient-to-br from-[#5d9af5] to-[#a6ffb8] text-white rounded-2xl p-12 text-center"
  style={{ boxShadow: '0 10px 25px rgb(127, 227, 237)' }}>
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Clock className="w-12 h-12" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Register Early and Get 20% Off!</h2>
          <p className="text-xl mb-2 opacity-90">Limited offer for the first 500 students</p>
          <p className="text-sm mb-8 opacity-75">Join now and save on your mentorship journey</p>
          <Button 
            onClick={scrollToContact}
           className="bg-[hsl(218,46%,36%)] text-white hover:bg-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
          >
            Claim Your Discount
          </Button>
          <div className="mt-6 text-sm opacity-75">
            <span>247</span> spots remaining
          </div>
        </div>
      </div>
    </section>
  );
}
