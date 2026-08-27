


// // import { Button } from "@/components/ui/button";
// // import {
// //   Menu,
// //   X,
// //   Facebook,
// //   Instagram,
// //   Youtube,
// // } from "lucide-react";
// // import { useMobileMenu } from "@/hooks/use-mobile-menu";
// // import Logo from "@/Assets/icon-logo.png";

// // export function Header() {
// //   const { isOpen, toggle, close } = useMobileMenu();

// //   const scrollToSection = (sectionId: string) => {
// //     const element = document.getElementById(sectionId);

// //     if (element) {
// //       element.scrollIntoView({
// //         behavior: "smooth",
// //       });
// //       close();
// //     }
// //   };

// //   const navigateToMainApp = (path: string) => {
// //     window.location.href = `https://app.goodguiders.com${path}`;
// //   };

// //   const menuItems = [
// //     "Home",
// //     "Courses",
// //     "Test-Series",
// //     "Resource",
// //     "Study Material",
// //     "Store",
// //     "More",
// //     "Rids Course",

// //     "Study Material",
// //     "Store",
// //     "More",
// //     "Rids Course",
  
    
    
// //   ];

// //   return (
// //     <header
// //       className="sticky top-0 z-50 bg-white"
// //       style={{
// //         boxShadow: "0 2px 8px rgba(59,130,246,.25)",
// //       }}
// //     >
// //       <div className="w-full px-4 sm:px-6 lg:px-8">

// //         {/* ================= Top Header ================= */}
// //         <div className="flex items-center justify-between py-4">

// //           {/* Logo */}
// //           <div className="flex items-center">
// //             <img
// //               src={Logo}
// //               alt="Good Guiders"
// //               className="h-12 w-auto mr-3"
// //             />

// //             <h1 className="text-xl md:text-2xl font-bold text-primary">
// //               Good Guiders
// //             </h1>
// //           </div>

// //           {/* Right Side */}
// //           <div className="flex items-center gap-2">

// //             {/* Facebook */}
// //             <Button
// //               size="icon"
// //               className="bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-lg h-9 w-9"
// //               onClick={() =>
// //                 window.open("https://facebook.com", "_blank")
// //               }
// //             >
// //               <Facebook className="w-4 h-4" />
// //             </Button>

// //             {/* YouTube */}
// //             <Button
// //               size="icon"
// //               className="bg-[#FF0000] hover:bg-[#d40000] text-white rounded-lg h-9 w-9"
// //               onClick={() =>
// //                 window.open(
// //                   "https://www.youtube.com/@YourChannelName",
// //                   "_blank"
// //                 )
// //               }
// //             >
// //               <Youtube className="w-4 h-4" />
// //             </Button>

// //             {/* Instagram */}
// //             <Button
// //               size="icon"
// //               className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-lg h-9 w-9"
// //               onClick={() =>
// //                 window.open(
// //                   "https://instagram.com",
// //                   "_blank"
// //                 )
// //               }
// //             >
// //               <Instagram className="w-4 h-4" />
// //             </Button>

// //             {/* Desktop Login */}
// //             <Button
// //               className="hidden md:flex bg-secondary hover:bg-orange-600 text-white font-bold px-6"
// //               onClick={() => navigateToMainApp("/login")}
// //             >
// //               Login
// //             </Button>

// //             {/* Mobile Menu */}
// //             <Button
// //               variant="ghost"
// //               size="icon"
// //               className="md:hidden"
// //               onClick={toggle}
// //             >
// //               {isOpen ? (
// //                 <X className="w-6 h-6" />
// //               ) : (
// //                 <Menu className="w-6 h-6" />
// //               )}
// //             </Button>

// //           </div>
// //         </div>

// //         {/* ================= Desktop Navigation ================= */}

// //         <nav className="hidden md:flex justify-center gap-8 pb-4 border-t pt-4">

// //           {menuItems.map((item) => (
// //             <button
// //               key={item}
// //               onClick={() => scrollToSection("features")}
// //               className="font-semibold text-gray-700 hover:text-primary transition"
// //             >
// //               {item}
// //             </button>
// //           ))}

// //         </nav>

// //         {/* ================= Mobile Menu ================= */}

// //         {isOpen && (
// //           <div className="md:hidden border-t pt-4 pb-5">

// //             <div className="flex flex-col gap-3">

// //               {menuItems.map((item) => (
// //                 <button
// //                   key={item}
// //                   onClick={() => scrollToSection("features")}
// //                   className="text-left py-2 font-medium hover:text-primary"
// //                 >
// //                   {item}
// //                 </button>
// //               ))}

// //               {/* Mobile Social Icons */}
            

// //               {/* Mobile Login hd;fohaod */}
// //               <Button
// //                 className="bg-secondary hover:bg-orange-600 text-white font-bold mt-4"
// //                 onClick={() => navigateToMainApp("/login")}
// //               >
// //                 Login
// //               </Button>

// //             </div>

// //           </div>
// //         )}

// //       </div>
// //     </header>
// //   );
// // }





// import { Button } from "@/components/ui/button";
// import {
//   Menu,
//   X,
//   Facebook,
//   Instagram,
//   Youtube,
// } from "lucide-react";
// import { useMobileMenu } from "@/hooks/use-mobile-menu";
// import Logo from "@/Assets/icon-logo.png";

// export function Header() {
//   const { isOpen, toggle, close } = useMobileMenu();

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);

//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//       });
//       close();
//     }
//   };

//   const navigateToMainApp = (path: string) => {
//     window.location.href = `https://app.goodguiders.com${path}`;
//   };

//   const menuItems = [
//     "Home",
//     "Courses",
//     "Test-Series",
//     "Local-Tutors",
//     "Online-Tutors",
//     "Online-Mentors",
    
  
    
    
//   ];

//   return (
//     <header
//       className="sticky top-0 z-50 bg-white"
//       style={{
//         boxShadow: "0 2px 8px rgba(59,130,246,.25)",
//       }}
//     >
//       <div className="w-full px-4 sm:px-6 lg:px-8">

//         {/* ================= Top Header ================= */}
//         <div className="flex items-center justify-between py-4">

//           {/* Logo */}
//           <div className="flex items-center">
//             <img
//               src={Logo}
//               alt="Good Guiders"
//               className="h-12 w-auto mr-3"
//             />

//             <h1 className="text-xl md:text-2xl font-bold text-primary">
//               Good Guiders
//             </h1>
//           </div>

//           {/* Right Side */}
//           <div className="flex items-center gap-2">

//             {/* Facebook */}
//             <Button
//               size="icon"
//               className="bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-lg h-9 w-9"
//               onClick={() =>
//                 window.open("https://facebook.com", "_blank")
//               }
//             >
//               <Facebook className="w-4 h-4" />
//             </Button>

//             {/* YouTube */}
//             <Button
//               size="icon"
//               className="bg-[#FF0000] hover:bg-[#d40000] text-white rounded-lg h-9 w-9"
//               onClick={() =>
//                 window.open(
//                   "https://www.youtube.com/@YourChannelName",
//                   "_blank"
//                 )
//               }
//             >
//               <Youtube className="w-4 h-4" />
//             </Button>

//             {/* Instagram */}
//             <Button
//               size="icon"
//               className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-lg h-9 w-9"
//               onClick={() =>
//                 window.open(
//                   "https://instagram.com",
//                   "_blank"
//                 )
//               }
//             >
//               <Instagram className="w-4 h-4" />
//             </Button>

//             {/* Desktop Login */}
//             <Button
//               className="hidden md:flex bg-secondary hover:bg-orange-600 text-white font-bold px-6"
//               onClick={() => navigateToMainApp("/login")}
//             >
//               Login
//             </Button>

//             {/* Mobile Menu */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="md:hidden"
//               onClick={toggle}
//             >
//               {isOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </Button>

//           </div>
//         </div>

//         {/* ================= Desktop Navigation ================= */}

//         <nav className="hidden md:flex justify-center gap-8 pb-4 border-t pt-4">

//           {menuItems.map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollToSection("features")}
//               className="font-semibold text-gray-700 hover:text-primary transition"
//             >
//               {item}
//             </button>
//           ))}

//         </nav>

//         {/* ================= Mobile Menu ================= */}

//         {isOpen && (
//           <div className="md:hidden border-t pt-4 pb-5">

//             <div className="flex flex-col gap-3">

//               {menuItems.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection("features")}
//                   className="text-left py-2 font-medium hover:text-primary"
//                 >
//                   {item}
//                 </button>
//               ))}

//               {/* Mobile Social Icons */}
            

//               {/* Mobile Login hd;fohaod */}
//               <Button
//                 className="bg-secondary hover:bg-orange-600 text-white font-bold mt-4"
//                 onClick={() => navigateToMainApp("/login")}
//               >
//                 Login
//               </Button>

//             </div>

//           </div>
//         )}

//       </div>
//     </header>
//   );
// }


// import { Button } from "@/components/ui/button";
// import {
//   Menu,
//   X,
//   Facebook,
//   Instagram,
//   Youtube,
// } from "lucide-react";
// import { useMobileMenu } from "@/hooks/use-mobile-menu";
// import Logo from "@/Assets/icon-logo.png";

// export function Header() {
//   const { isOpen, toggle, close } = useMobileMenu();

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);

//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//       });
//       close();
//     }
//   };

//   const navigateToMainApp = (path: string) => {
//     window.location.href = `https://app.goodguiders.com${path}`;
//   };

//   const menuItems = [
//     "Home",
//     "Courses",
//     "Test-Series",
//     "Local-Tutors",
//     "Online-Tutors",
//     "Online-Mentors",
//   ];

//   return (
//     <header
//       className="sticky top-0 z-50 bg-white"
//       style={{
//         boxShadow: "0 2px 8px rgba(59,130,246,.25)",
//       }}
//     >
//       <div className="w-full px-4 sm:px-6 lg:px-8">
//         {/* ================= Single Row Header ================= */}
//         <div className="flex items-center justify-between py-3 md:py-4">

//           {/* Left: Logo & Brand Name */}
//           <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => scrollToSection("home")}>
//             <img
//               src={Logo}
//               alt="Good Guiders"
//               className="h-10 md:h-12 w-auto mr-3"
//             />
//             <h1 className="text-xl md:text-2xl font-bold text-primary whitespace-nowrap">
//               Good Guiders
//             </h1>
//           </div>

//           {/* Center: Desktop Navigation Links (Moved to Top Row) */}
//           <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
//             {menuItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection("features")}
//                 className="font-semibold text-gray-700 hover:text-primary transition-colors text-sm xl:text-base whitespace-nowrap"
//               >
//                 {item}
//               </button>
//             ))}
//           </nav>

//           {/* Right: Social Icons + Login + Mobile Menu Toggle */}
//           <div className="flex items-center gap-2">
//             {/* Facebook */}
//             <Button
//               size="icon"
//               className="bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-lg h-9 w-9"
//               onClick={() =>
//                 window.open("https://facebook.com", "_blank")
//               }
//               aria-label="Facebook"
//             >
//               <Facebook className="w-4 h-4" />
//             </Button>

//             {/* YouTube */}
//             <Button
//               size="icon"
//               className="bg-[#FF0000] hover:bg-[#d40000] text-white rounded-lg h-9 w-9"
//               onClick={() =>
//                 window.open(
//                   "https://www.youtube.com/@YourChannelName",
//                   "_blank"
//                 )
//               }
//               aria-label="YouTube"
//             >
//               <Youtube className="w-4 h-4" />
//             </Button>

//             {/* Instagram */}
//             <Button
//               size="icon"
//               className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-lg h-9 w-9"
//               onClick={() =>
//                 window.open(
//                   "https://instagram.com",
//                   "_blank"
//                 )
//               }
//               aria-label="Instagram"
//             >
//               <Instagram className="w-4 h-4" />
//             </Button>

//             {/* Desktop Login Button */}
//             <Button
//               className="hidden md:flex bg-secondary hover:bg-orange-600 text-white font-bold px-5"
//               onClick={() => navigateToMainApp("/login")}
//             >
//               Login
//             </Button>

//             {/* Mobile Menu Toggle Button */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="lg:hidden"
//               onClick={toggle}
//               aria-label="Toggle Menu"
//             >
//               {isOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </Button>
//           </div>
//         </div>

//         {/* ================= Mobile Menu Drawer ================= */}
//         {isOpen && (
//           <div className="lg:hidden border-t py-4">
//             <div className="flex flex-col gap-2">
//               {menuItems.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection("features")}
//                   className="text-left py-2 px-3 font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition"
//                 >
//                   {item}
//                 </button>
//               ))}

//               <Button
//                 className="bg-secondary hover:bg-orange-600 text-white font-bold mt-3 w-full"
//                 onClick={() => navigateToMainApp("/login")}
//               >
//                 Login
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }


import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
  ChevronDown,
} from "lucide-react";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import Logo from "@/Assets/icon-logo.png";

interface SubMenuItem {
  label: string;
  sectionId?: string;
  path?: string;
}

interface MenuItem {
  title: string;
  sectionId?: string;
  subItems?: SubMenuItem[];
}

export function Header() {
  const { isOpen, toggle, close } = useMobileMenu();
  
  // Desktop dropdown state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Mobile accordion state
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mouse Enter with timeout clear
  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(title);
  };

  // Mouse Leave with 200ms smooth delay buffer
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Close dropdown on clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const scrollToSection = (sectionId?: string) => {
    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setActiveDropdown(null);
      close();
    }
  };

  const navigateToMainApp = (path: string) => {
    window.location.href = `https://app.goodguiders.com${path}`;
  };

  const menuConfig: MenuItem[] = [
    { title: "Home", sectionId: "home" },
    {
      title: "Courses",
      subItems: [
        { label: "Class 1 to 5", sectionId: "courses-1-5" },
        { label: "Class 6 to 10", sectionId: "courses-6-10" },
        { label: "Class 11 to 12", sectionId: "courses-11-12" },
        { label: "After 12th", sectionId: "courses-after-12" },
      ],
    },
    {
      title: "Exam Prep",
      subItems: [
        { label: "Exam 1", sectionId: "exam-1" },
        { label: "Exam 2", sectionId: "exam-2" },
        { label: "Exam 3", sectionId: "exam-3" },
        { label: "Exam 4", sectionId: "exam-4" },
        { label: "Exam 5", sectionId: "exam-5" },
      ],
    },
    { title: "Local Tutors", 
        subItems: [
        { label: "Class 1 to 5", sectionId: "courses-1-5" },
        { label: "Class 6 to 10", sectionId: "courses-6-10" },
        { label: "Class 11 to 12", sectionId: "courses-11-12" },
       
      ],
     },
    { title: "Online Tutors", 
        subItems: [
        { label: "Class 1 to 5", sectionId: "courses-1-5" },
        { label: "Class 6 to 10", sectionId: "courses-6-10" },
        { label: "Class 11 to 12", sectionId: "courses-11-12" },
        
      ],
     },
    { title: "Online Mentors",   subItems: [
        { label: "Class 1 to 5", sectionId: "courses-1-5" },
        { label: "Class 6 to 10", sectionId: "courses-6-10" },
        { label: "Class 11 to 12", sectionId: "courses-11-12" },
    
      ],},
     { title: "Join Us",
      subItems:[
 { label: "Become Local Tutor", sectionId: "exam-1" },
        { label: "Become Online Tutor", sectionId: "exam-2" },
        { label: "Become Mentor", sectionId: "exam-3" },
      ]
    }
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{
        boxShadow: "0 2px 8px rgba(59,130,246,.25)",
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* ================= Single Row Header ================= */}
        <div className="flex items-center justify-between py-3 md:py-4">
          
          {/* Left: Logo & Brand Name */}
          <div
            className="flex items-center flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={Logo}
              alt="Good Guiders"
              className="h-10 md:h-12 w-auto mr-3"
            />
            <h1 className="text-xl md:text-2xl font-bold text-primary whitespace-nowrap">
              Good Guiders
            </h1>
          </div>

          {/* Center: Desktop Navigation Links with Dropdown */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuConfig.map((item) => {
              const hasSubItems = item.subItems && item.subItems.length > 0;
              const isDropdownOpen = activeDropdown === item.title;

              return (
                <div
                  key={item.title}
                  className="relative py-2"
                  onMouseEnter={() => hasSubItems && handleMouseEnter(item.title)}
                  onMouseLeave={() => hasSubItems && handleMouseLeave()}
                >
                  <button
                    onClick={() => {
                      if (hasSubItems) {
                        setActiveDropdown(isDropdownOpen ? null : item.title);
                      } else {
                        scrollToSection(item.sectionId);
                      }
                    }}
                    className="flex items-center gap-1 font-semibold text-gray-700 hover:text-primary transition-colors text-sm xl:text-base whitespace-nowrap"
                  >
                    {item.title}
                    {hasSubItems && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Desktop Dropdown Menu with Invisible Bridge Area */}
                  {hasSubItems && isDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 pt-2 w-48 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                      onMouseEnter={() => handleMouseEnter(item.title)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-white border border-gray-100 rounded-lg shadow-xl py-2">
                        {item.subItems!.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => {
                              if (subItem.path) {
                                navigateToMainApp(subItem.path);
                              } else {
                                scrollToSection(subItem.sectionId || item.sectionId);
                              }
                              setActiveDropdown(null);
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors block"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: Social Icons + Login + Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            {/* Facebook */}


           <Button
  size="icon"
  className="bg-black hover:bg-gray-800 text-white rounded-lg h-9 w-9"
  onClick={() => window.open("https://x.com", "_blank")}
  aria-label="X"
>
  <X className="w-4 h-4" />
</Button>


            <Button
              size="icon"
              className="bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-lg h-9 w-9"
              onClick={() => window.open("https://facebook.com", "_blank")}
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </Button>

            {/* YouTube */}
            <Button
              size="icon"
              className="bg-[#FF0000] hover:bg-[#d40000] text-white rounded-lg h-9 w-9"
              onClick={() =>
                window.open("https://www.youtube.com/@YourChannelName", "_blank")
              }
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </Button>

            {/* Instagram */}
            <Button
              size="icon"
              className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-lg h-9 w-9"
              onClick={() => window.open("https://instagram.com", "_blank")}
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </Button>

            {/* Desktop Login Button */}
            <Button
              className="hidden md:flex bg-secondary hover:bg-orange-600 text-white font-bold px-5"
              onClick={() => navigateToMainApp("/login")}
            >
              Login
            </Button>

            {/* Mobile Menu Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggle}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* ================= Mobile Menu Drawer ================= */}
        {isOpen && (
          <div className="lg:hidden border-t py-4">
            <div className="flex flex-col gap-1">
              {menuConfig.map((item) => {
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const isExpanded = mobileExpanded === item.title;

                return (
                  <div key={item.title} className="flex flex-col">
                    <button
                      onClick={() => {
                        if (hasSubItems) {
                          setMobileExpanded(isExpanded ? null : item.title);
                        } else {
                          scrollToSection(item.sectionId);
                        }
                      }}
                      className="flex items-center justify-between w-full py-2.5 px-3 font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition"
                    >
                      <span>{item.title}</span>
                      {hasSubItems && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Mobile Submenu Accordion */}
                    {hasSubItems && isExpanded && (
                      <div className="pl-4 py-1 flex flex-col gap-1 bg-gray-50/60 rounded-md mb-1">
                        {item.subItems!.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => {
                              if (subItem.path) {
                                navigateToMainApp(subItem.path);
                              } else {
                                scrollToSection(subItem.sectionId || item.sectionId);
                              }
                            }}
                            className="text-left py-2 px-3 text-sm text-gray-600 hover:text-primary hover:bg-gray-100 rounded-md transition"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <Button
                className="bg-secondary hover:bg-orange-600 text-white font-bold mt-3 w-full"
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