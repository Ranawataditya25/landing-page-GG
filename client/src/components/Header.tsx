


import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import Logo from "@/Assets/icon-logo.png";

export function Header() {
  const { isOpen, toggle, close } = useMobileMenu();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      close();
    }
  };

  const navigateToMainApp = (path: string) => {
    window.location.href = `https://app.goodguiders.com${path}`;
  };

  const menuItems = [
    "Home",
    "Courses",
    "Test-Series",
    "Resource",
    "Study Material",
    "Store",
    "More",
    "Rids Course",

    "Study Material",
    "Store",
    "More",
    "Rids Course",
  
    
    
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{
        boxShadow: "0 2px 8px rgba(59,130,246,.25)",
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">

        {/* ================= Top Header ================= */}
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Good Guiders"
              className="h-12 w-auto mr-3"
            />

            <h1 className="text-xl md:text-2xl font-bold text-primary">
              Good Guiders
            </h1>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">

            {/* Facebook */}
            <Button
              size="icon"
              className="bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-lg h-9 w-9"
              onClick={() =>
                window.open("https://facebook.com", "_blank")
              }
            >
              <Facebook className="w-4 h-4" />
            </Button>

            {/* YouTube */}
            <Button
              size="icon"
              className="bg-[#FF0000] hover:bg-[#d40000] text-white rounded-lg h-9 w-9"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/@YourChannelName",
                  "_blank"
                )
              }
            >
              <Youtube className="w-4 h-4" />
            </Button>

            {/* Instagram */}
            <Button
              size="icon"
              className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-lg h-9 w-9"
              onClick={() =>
                window.open(
                  "https://instagram.com",
                  "_blank"
                )
              }
            >
              <Instagram className="w-4 h-4" />
            </Button>

            {/* Desktop Login */}
            <Button
              className="hidden md:flex bg-secondary hover:bg-orange-600 text-white font-bold px-6"
              onClick={() => navigateToMainApp("/login")}
            >
              Login
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggle}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>

          </div>
        </div>

        {/* ================= Desktop Navigation ================= */}

        <nav className="hidden md:flex justify-center gap-8 pb-4 border-t pt-4">

          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection("features")}
              className="font-semibold text-gray-700 hover:text-primary transition"
            >
              {item}
            </button>
          ))}

        </nav>

        {/* ================= Mobile Menu ================= */}

        {isOpen && (
          <div className="md:hidden border-t pt-4 pb-5">

            <div className="flex flex-col gap-3">

              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection("features")}
                  className="text-left py-2 font-medium hover:text-primary"
                >
                  {item}
                </button>
              ))}

              {/* Mobile Social Icons */}
            

              {/* Mobile Login hd;fohaod */}
              <Button
                className="bg-secondary hover:bg-orange-600 text-white font-bold mt-4"
                onClick={() => navigateToMainApp("/login")}
              >
                Login
              </Button>

            </div>

          </div>
        )}

      </div>
    </header>
  );
}