import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useMobileMenu } from "@/hooks/use-mobile-menu";

export function Header() {
  const { isOpen, toggle, close } = useMobileMenu();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      close();
    }
  };

const navigateToMainApp = (path: string) => {
  const mainAppBase = "http://localhost:5173/bootstrapreact/medixo";

  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ action: "navigate", path }, mainAppBase);
  } else {
    window.location.href = `${mainAppBase}${path}`;
  }
};



  return (
    <header className="bg-'hsl(222, 36%, 72%)' shadow-'0 2px 4px rgba(59, 130, 246, 0.5)' top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">Good Guiders</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Contact
            </button>
            <button
  onClick={() => navigateToMainApp("/login")}
  className="text-gray-700 hover:text-primary font-medium transition-colors"
>
  Login 
</button>

          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
              onClick={() => scrollToSection("early-registration")}
            >
              Get Early Access – 20% Off!
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden p-2"
            onClick={toggle}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-primary font-medium py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-primary font-medium py-2 text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-primary font-medium py-2 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-primary font-medium py-2 text-left"
              >
                Contact
              </button>
              <button
  onClick={() => navigateToMainApp("/login")}
  className="text-gray-700 hover:text-orange font-medium py-2 text-left"
>
  Login
</button>

              <Button
                className="bg-secondary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg mt-4 w-full"
                onClick={() => scrollToSection("early-registration")}
              >
                Get Early Access – 20% Off!
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
