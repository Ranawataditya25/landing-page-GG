import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToEarlyRegistration = () => {
    const element = document.getElementById("early-registration");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
     className="bg-gradient-to-br from-[#5d9af5] to-[#a6ffb8] pt-20 pb-8"

    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-[39px] h-[170px] font-bold text-gray-900 mb-6 leading-tight">
  India's <span className="text-primary">Growing</span> Mentorship & Career Guidance App for Students
</h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From Class 6 to Career – One App, All Answers
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
              <Button
                className="bg-primary hover:bg-hsl(25, 86%, 31%); text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                onClick={scrollToEarlyRegistration}
              >
                Join Now & Save 20%
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors"
                onClick={scrollToFeatures}
              >
                Learn More
              </Button>
            </div>
          </div>
      <div className="flex justify-center h-[309px] w-[78%] mx-auto">


            {/* Students mentorship guidance scene */}
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Students receiving mentorship guidance"
              className="rounded-2xl shadow-2xl w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
