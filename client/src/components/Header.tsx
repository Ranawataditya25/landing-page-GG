
// // import { Button } from "@/components/ui/button";
// // import { Menu, X } from "lucide-react";
// // import { useMobileMenu } from "@/hooks/use-mobile-menu";

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
// //     const mainAppBase = "https://goodguiders.onrender.com";
// //     window.location.href = `${mainAppBase}${path}`;
// //   };

// //   return (
// //     <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200 shadow-sm">
// //       <div className="max-w-7xl mx-auto px-4 lg:px-8">

// //         <div className="flex items-center justify-between h-20">

// //           {/* Logo */}
// //           <div className="flex items-center gap-3">
// //             <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
// //               GG
// //             </div>

// //             <div>
// //               <h1 className="text-xl font-bold text-slate-900">
// //                 Good Guiders
// //               </h1>
// //               <p className="text-xs text-slate-500">
// //                 Smart Career Guidance
// //               </p>
// //             </div>
// //           </div>

// //           {/* Desktop Nav */}
// //           <nav className="hidden lg:flex items-center gap-8">
// //             <button
// //               onClick={() => scrollToSection("home")}
// //               className="font-medium text-slate-700 hover:text-blue-600 transition"
// //             >
// //               Home
// //             </button>

// //             <button
// //               onClick={() => scrollToSection("features")}
// //               className="font-medium text-slate-700 hover:text-blue-600 transition"
// //             >
// //               Features
// //             </button>

// //             <button
// //               onClick={() => scrollToSection("about")}
// //               className="font-medium text-slate-700 hover:text-blue-600 transition"
// //             >
// //               About
// //             </button>

// //             <button
// //               onClick={() => scrollToSection("contact")}
// //               className="font-medium text-slate-700 hover:text-blue-600 transition"
// //             >
// //               Contact
// //             </button>
// //           </nav>

// //           {/* Right Section */}
// //           <div className="hidden lg:flex items-center gap-3">

// //             <Button
// //               onClick={() =>
// //                 window.open("https://facebook.com", "_blank")
// //               }
// //               className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5"
// //             >
// //               Facebook
// //             </Button>

// //             <Button
// //               onClick={() =>
// //                 window.open("https://instagram.com", "_blank")
// //               }
// //               className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full px-5"
// //             >
// //               Instagram
// //             </Button>

// //             <Button
// //               variant="outline"
// //               onClick={() => navigateToMainApp("/login")}
// //               className="rounded-full"
// //             >
// //               Login
// //             </Button>

// //             <Button
// //               onClick={() =>
// //                 scrollToSection("early-registration")
// //               }
// //               className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
// //             >
// //               Get Early Access
// //             </Button>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <Button
// //             variant="ghost"
// //             size="icon"
// //             className="lg:hidden"
// //             onClick={toggle}
// //           >
// //             {isOpen ? (
// //               <X size={24} />
// //             ) : (
// //               <Menu size={24} />
// //             )}
// //           </Button>
// //         </div>

// //         {/* Mobile Menu */}
// //         {isOpen && (
// //           <div className="lg:hidden pb-6">

// //             <div className="bg-white rounded-2xl shadow-xl border p-5 space-y-4">

// //               <button
// //                 onClick={() => scrollToSection("home")}
// //                 className="block w-full text-left"
// //               >
// //                 Home
// //               </button>

// //               <button
// //                 onClick={() => scrollToSection("features")}
// //                 className="block w-full text-left"
// //               >
// //                 Features
// //               </button>

// //               <button
// //                 onClick={() => scrollToSection("about")}
// //                 className="block w-full text-left"
// //               >
// //                 About
// //               </button>

// //               <button
// //                 onClick={() => scrollToSection("contact")}
// //                 className="block w-full text-left"
// //               >
// //                 Contact
// //               </button>

// //               <Button
// //                 className="w-full"
// //                 onClick={() => navigateToMainApp("/login")}
// //               >
// //                 Login
// //               </Button>

// //               <Button
// //                 className="w-full bg-orange-500 hover:bg-orange-600"
// //                 onClick={() =>
// //                   scrollToSection("early-registration")
// //                 }
// //               >
// //                 Get Early Access
// //               </Button>
// //             </div>

// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // }


// // import { Button } from "@/components/ui/button";
// // import { Menu, X } from "lucide-react";
// // import { useMobileMenu } from "@/hooks/use-mobile-menu";
// // import Logo from "@/Assets/icon-logo.png";



// // export function Header() {
// //   const { isOpen, toggle, close } = useMobileMenu();

// //   const scrollToSection = (sectionId: string) => {
// //     const element = document.getElementById(sectionId);
// //     if (element) {
// //       element.scrollIntoView({ behavior: "smooth" });
// //       close();
// //     }
// //   };

// // const navigateToMainApp = (path: string) => {
// //   const mainAppBase = "https://goodguiders.onrender.com"; 
// //   // ↑ yahan apna MAIN FRONTEND static site URL daalna

// //   window.location.href = `${mainAppBase}${path}`;
// // };



// //   return (
// //     <header className="bg-'hsl(222, 36%, 72%)' shadow-'0 2px 4px rgba(59, 130, 246, 0.5)' top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center py-4">
      
         


// //           <div className="flex items-center">
// //               <img
// //     src={Logo}
// //     alt="Good Guiders Logo"
// //     className="h-12 w-auto mr-5"
// //   />
// //             <div className="text-2xl font-bold text-primary">Good Guiders</div>
// //           </div>

// // <div className="hidden md:block">
// //   <Button
// //     className="bg-[#1877F2] hover:bg-[#166FE5] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
// //     onClick={() => window.open("https://facebook.com", "_blank")}
// //   >
// //     Facebook
// //   </Button>
// // </div>

// // <Button
// //   className="bg-[#E1306C] hover:bg-[#C13584] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
// //   onClick={() => window.open("https://instagram.com", "_blank")}
// // >
// //   Instagram
// // </Button>

// // <Button
// //   className="bg-[#1877F2] hover:bg-[#166FE5] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
// //   onClick={() => navigateToMainApp("/login")}>
              

// // Login
// // </Button>
         
         
         

// //           {/* CTA Button */}
// //           <div className="hidden md:block">
// //             <Button
// //               className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
// //               onClick={() => scrollToSection("early-registration")}
// //             >
// //               Get Early Access – 20% Off!
// //             </Button>

            
// //           </div>
          

// //           {/* Mobile Menu Button */}
// //           <Button
// //             variant="ghost"
// //             size="icon"
// //             className="md:hidden p-2"
// //             onClick={toggle}
// //           >
// //             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //           </Button>
// //         </div>

// //         {/* Mobile Navigation */}
// //         {isOpen && (
// //           <div className="md:hidden pb-4">
// //             <div className="flex flex-col space-y-2">
// //               <button
// //                 onClick={() => scrollToSection("home")}
// //                 className="text-gray-700 hover:text-primary font-medium py-2 text-left"
// //               >
// //                 Home
// //               </button>
// //               <button
// //                 onClick={() => scrollToSection("features")}
// //                 className="text-gray-700 hover:text-primary font-medium py-2 text-left"
// //               >
// //                 Features
// //               </button>
// //               <button
// //                 onClick={() => scrollToSection("about")}
// //                 className="text-gray-700 hover:text-primary font-medium py-2 text-left"
// //               >
// //                 About
// //               </button>
// //               <button
// //                 onClick={() => scrollToSection("contact")}
// //                 className="text-gray-700 hover:text-primary  font-medium py-2 text-left"
// //               >
// //                 Contact
// //               </button>
// //               <button
// //   onClick={() => navigateToMainApp("/login")}
// //   className="text-gray-700 hover:text-orange font-medium py-2 text-left"
// // >
// //   Login
// // </button>

// //               <Button
// //                 className="bg-secondary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg mt-4 w-full"
// //                 onClick={() => scrollToSection("early-registration")}
// //               >
// //                 Get Early Access – 20% Off!
// //               </Button>

              
// //             </div>
// //           </div>
// //         )}


// //           {/* <nav className="hidden md:flex justify-center space-x-8">
// //             <button
// //               onClick={() => scrollToSection("home")}
// //               className="text-gray-700 hover:text-primary font-medium transition-colors"
// //             >
// //               Home
// //             </button>
// //             <button
// //               onClick={() => scrollToSection("features")}
// //               className="text-gray-700 hover:text-primary font-medium transition-colors"
// //             >
// //               Features
// //             </button>
// //             <button
// //               onClick={() => scrollToSection("about")}
// //               className="text-gray-700 hover:text-primary font-medium transition-colors"
// //             >
// //               About
// //             </button>
// //             <button
// //               onClick={() => scrollToSection("contact")}
// //               className="text-gray-700 hover:text-primary font-medium transition-colors"
// //             >
// //               Contact
// //             </button>
// //             <button
// //   onClick={() => navigateToMainApp("/login")}
// //   className="text-gray-700 hover:text-primary font-medium transition-colors"
// // >
// //   Login 
// // </button>

// //           </nav> */}

// //       </div>
// //    {/* <nav className="hidden md:flex justify-center space-x-8">
// //             <button
// //               onClick={() => scrollToSection("home")}
// //               className="text-gray-700 hover:text-primary font-medium transition-colors"
// //             >
// //               Home
// //             </button>
// //             <button
// //               onClick={() => scrollToSection("features")}
// //               className="text-gray-700 hover:text-primary font-medium transition-colors"
// //             >
// //            Courses
// //             </button>
// //             <button
// //               onClick={() => scrollToSection("about")}
// //               className="text-gray-700 hover:text-primary font-medium transition-colors"
// //             >
// //           Test-Serious
// //             </button>
// //             <button
// //               onClick={() => scrollToSection("contact")}
// //               className="text-gray-700 hover:text-primary font-medium transition-colors"
// //             >
// //              Resource
// //             </button>
// //             <button
// //   onClick={() => navigateToMainApp("/login")}
// //   className="text-gray-700 hover:text-primary font-medium transition-colors"
// // >
// //   Study Material
// // </button>

// //  <button
// //               onClick={() => scrollToSection("features")}
// //               className="text-gray-700 hover:text-primary font-medium transition-colors"
// //             >
// //            Store
// //             </button>

// //               <button
// //               onClick={() => scrollToSection("features")}
// //               className="text-gray-700 hover:text-primary font-medium transition-colors"
// //             >
// //            More 
// //             </button>

// //               <button
// //               onClick={() => scrollToSection("features")}
// //               className="text-gray-700 hover:text-primary font-medium transition-colors"
// //             >
// //              Rids Course
// //             </button>

// //           </nav>
// //         */}


// //         <nav className="hidden md:flex justify-center items-center space-x-8">
// //   <button
// //     onClick={() => scrollToSection("home")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     Home
// //   </button>

// //   <button
// //     onClick={() => scrollToSection("features")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     Courses
// //   </button>

// //   <button
// //     onClick={() => scrollToSection("about")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     Test-Series
// //   </button>

// //   <button
// //     onClick={() => scrollToSection("contact")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     Resource
// //   </button>

// //   <button
// //     onClick={() => navigateToMainApp("/login")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     Study Material
// //   </button>

// //   <button
// //     onClick={() => scrollToSection("features")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     Store
// //   </button>

// //   <button
// //     onClick={() => scrollToSection("features")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     More
// //   </button>

// //   <button
// //     onClick={() => scrollToSection("features")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     Rids Course
// //   </button>
// // </nav>
        
// //     </header>
// //   );
// // }


// // // import { Button } from "@/components/ui/button";
// // // import { Menu, X } from "lucide-react";
// // // import { useMobileMenu } from "@/hooks/use-mobile-menu";

// // // export function Header() {
// // //   const { isOpen, toggle, close } = useMobileMenu();

// // //   const scrollToSection = (sectionId: string) => {
// // //     const element = document.getElementById(sectionId);

// // //     if (element) {
// // //       element.scrollIntoView({
// // //         behavior: "smooth",
// // //       });

// // //       close();
// // //     }
// // //   };

// // //   const navigateToMainApp = (path: string) => {
// // //     const mainAppBase = "https://goodguiders.onrender.com";
// // //     window.location.href = `${mainAppBase}${path}`;
// // //   };

// // //   return (
// // //     <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200 shadow-sm">
// // //       <div className="max-w-7xl mx-auto px-4 lg:px-8">

// // //         <div className="flex items-center justify-between h-20">

// // //           {/* Logo */}
// // //           <div className="flex items-center gap-3">
// // //             <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
// // //               GG
// // //             </div>

// // //             <div>
// // //               <h1 className="text-xl font-bold text-slate-900">
// // //                 Good Guiders
// // //               </h1>
// // //               <p className="text-xs text-slate-500">
// // //                 Smart Career Guidance
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* Desktop Nav */}
// // //           <nav className="hidden lg:flex items-center gap-8">
// // //             <button
// // //               onClick={() => scrollToSection("home")}
// // //               className="font-medium text-slate-700 hover:text-blue-600 transition"
// // //             >
// // //               Home
// // //             </button>

// // //             <button
// // //               onClick={() => scrollToSection("features")}
// // //               className="font-medium text-slate-700 hover:text-blue-600 transition"
// // //             >
// // //               Features
// // //             </button>

// // //             <button
// // //               onClick={() => scrollToSection("about")}
// // //               className="font-medium text-slate-700 hover:text-blue-600 transition"
// // //             >
// // //               About
// // //             </button>

// // //             <button
// // //               onClick={() => scrollToSection("contact")}
// // //               className="font-medium text-slate-700 hover:text-blue-600 transition"
// // //             >
// // //               Contact
// // //             </button>
// // //           </nav>

// // //           {/* Right Section */}
// // //           <div className="hidden lg:flex items-center gap-3">

// // //             <Button
// // //               onClick={() =>
// // //                 window.open("https://facebook.com", "_blank")
// // //               }
// // //               className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5"
// // //             >
// // //               Facebook
// // //             </Button>

// // //             <Button
// // //               onClick={() =>
// // //                 window.open("https://instagram.com", "_blank")
// // //               }
// // //               className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full px-5"
// // //             >
// // //               Instagram
// // //             </Button>

// // //             <Button
// // //               variant="outline"
// // //               onClick={() => navigateToMainApp("/login")}
// // //               className="rounded-full"
// // //             >
// // //               Login
// // //             </Button>

// // //             <Button
// // //               onClick={() =>
// // //                 scrollToSection("early-registration")
// // //               }
// // //               className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
// // //             >
// // //               Get Early Access
// // //             </Button>
// // //           </div>

// // //           {/* Mobile Menu Button */}
// // //           <Button
// // //             variant="ghost"
// // //             size="icon"
// // //             className="lg:hidden"
// // //             onClick={toggle}
// // //           >
// // //             {isOpen ? (
// // //               <X size={24} />
// // //             ) : (
// // //               <Menu size={24} />
// // //             )}
// // //           </Button>
// // //         </div>

// // //         {/* Mobile Menu */}
// // //         {isOpen && (
// // //           <div className="lg:hidden pb-6">

// // //             <div className="bg-white rounded-2xl shadow-xl border p-5 space-y-4">

// // //               <button
// // //                 onClick={() => scrollToSection("home")}
// // //                 className="block w-full text-left"
// // //               >
// // //                 Home
// // //               </button>

// // //               <button
// // //                 onClick={() => scrollToSection("features")}
// // //                 className="block w-full text-left"
// // //               >
// // //                 Features
// // //               </button>

// // //               <button
// // //                 onClick={() => scrollToSection("about")}
// // //                 className="block w-full text-left"
// // //               >
// // //                 About
// // //               </button>

// // //               <button
// // //                 onClick={() => scrollToSection("contact")}
// // //                 className="block w-full text-left"
// // //               >
// // //                 Contact
// // //               </button>

// // //               <Button
// // //                 className="w-full"
// //               //   onClick={() => navigateToMainApp("/login")}
// //               // >
// // //                 Login
// // //               </Button>

// // //               <Button
// // //                 className="w-full bg-orange-500 hover:bg-orange-600"
// // //                 onClick={() =>
// // //                   scrollToSection("early-registration")
// // //                 }
// // //               >
// // //                 Get Early Access
// // //               </Button>
// // //             </div>

// // //           </div>
// // //         )}
// // //       </div>
// // //     </header>
// // //   );
// // // }








// // import { Button } from "@/components/ui/button";
// // import { Menu, X } from "lucide-react";
// // import { useMobileMenu } from "@/hooks/use-mobile-menu";
// // import Logo from "@/Assets/icon-logo.png";



// // export function Header() {
// //   const { isOpen, toggle, close } = useMobileMenu();

// //   const scrollToSection = (sectionId: string) => {
// //     const element = document.getElementById(sectionId);
// //     if (element) {
// //       element.scrollIntoView({ behavior: "smooth" });
// //       close();
// //     }
// //   };

// // const navigateToMainApp = (path: string) => {
// //   const mainAppBase = "https://goodguiders.onrender.com"; 
// //   // ↑ yahan apna MAIN FRONTEND static site URL daalna

// //   window.location.href = `${mainAppBase}${path}`;
// // };



// //   return (
// //     <header className="bg-'hsl(222, 36%, 72%)' shadow-'0 2px 4px rgba(59, 130, 246, 0.5)' top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center py-4">
      
         


// //           <div className="flex items-center">
// //               <img
// //     src={Logo}
// //     alt="Good Guiders Logo"
// //     className="h-12 w-auto mr-5"
// //   />
// //             <div className="text-2xl font-bold text-primary">Good Guiders</div>
// //           </div>

// // <div className="hidden md:block">
// //   <Button
// //     className="bg-[#1877F2] hover:bg-[#166FE5] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
// //     onClick={() => window.open("https://facebook.com", "_blank")}
// //   >
// //     Facebook
// //   </Button>
// // </div>

// // <Button
// //   className="bg-[#E1306C] hover:bg-[#C13584] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
// //   onClick={() => window.open("https://instagram.com", "_blank")}
// // >
// //   Instagram
// // </Button>

// // <Button
// //   className="bg-[#1877F2] hover:bg-[#166FE5] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
// //   onClick={() => navigateToMainApp("/login")}>
              

// // Login
// // </Button>
         
         
         

// //           {/* CTA Button */}
// //           <div className="hidden md:block">
// //             <Button
// //               className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
// //               onClick={() => scrollToSection("early-registration")}
// //             >
// //               Get Early Access – 20% Off!
// //             </Button>

            
// //           </div>
          

// //           {/* Mobile Menu Button */}
// //           <Button
// //             variant="ghost"
// //             size="icon"
// //             className="md:hidden p-2"
// //             onClick={toggle}
// //           >
// //             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //           </Button>
// //         </div>

// //         {/* Mobile Navigation */}
// //         {isOpen && (
// //           <div className="md:hidden pb-4">
// //             <div className="flex flex-col space-y-2">
// //               <button
// //                 onClick={() => scrollToSection("home")}
// //                 className="text-gray-700 hover:text-primary font-medium py-2 text-left"
// //               >
// //                 Home
// //               </button>
// //               <button
// //                 onClick={() => scrollToSection("features")}
// //                 className="text-gray-700 hover:text-primary font-medium py-2 text-left"
// //               >
// //                 Features
// //               </button>
// //               <button
// //                 onClick={() => scrollToSection("about")}
// //                 className="text-gray-700 hover:text-primary font-medium py-2 text-left"
// //               >
// //                 About
// //               </button>
// //               <button
// //                 onClick={() => scrollToSection("contact")}
// //                 className="text-gray-700 hover:text-primary  font-medium py-2 text-left"
// //               >
// //                 Contact
// //               </button>
// //               <button
// //   onClick={() => navigateToMainApp("/login")}
// //   className="text-gray-700 hover:text-orange font-medium py-2 text-left"
// // >
// //   Login
// // </button>

// //               <Button
// //                 className="bg-secondary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg mt-4 w-full"
// //                 onClick={() => scrollToSection("early-registration")}
// //               >
// //                 Get Early Access – 20% Off!
// //               </Button>

              
// //             </div>
// //           </div>
// //         )}


     

// //         <nav className="hidden md:flex justify-center items-center space-x-8">
// //   <button
// //     onClick={() => scrollToSection("home")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     Home
// //   </button>

// //   <button
// //     onClick={() => scrollToSection("features")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     Courses
// //   </button>

// //   <button
// //     onClick={() => scrollToSection("about")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     Test-Series
// //   </button>

// //   <button
// //     onClick={() => scrollToSection("contact")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     Resource
// //   </button>

// //   <button
// //     onClick={() => navigateToMainApp("/login")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     Study Material
// //   </button>

// //   <button
// //     onClick={() => scrollToSection("features")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     Store
// //   </button>

// //   <button
// //     onClick={() => scrollToSection("features")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     More
// //   </button>

// //   <button
// //     onClick={() => scrollToSection("features")}
// //     className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 -translate-y-1"
// //   >
// //     Rids Course
// //   </button>
// // </nav>
        
// //     </header>
// //   );
// // }

// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { useMobileMenu } from "@/hooks/use-mobile-menu";
// import Logo from "@/Assets/icon-logo.png";

// export function Header() {
//   const { isOpen, toggle, close } = useMobileMenu();

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       close();
//     }
//   };

//   const navigateToMainApp = (path: string) => {
//     const mainAppBase = "https://goodguiders.onrender.com";
//     window.location.href = `${mainAppBase}${path}`;
//   };

//   return (
//     <header className="bg-'hsl(222, 36%, 72%)' shadow-'0 2px 4px rgba(59, 130, 246, 0.5)' top-0 z-50">
//       {/* width full ki hai taaki logo left kone se start ho */}
//       <div className="w-full px- sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
          
//           {/* Logo Section - Ab ye bilkul left rahega */}
//           <div className="flex items-center">
//             <img src={Logo} alt="Good Guiders Logo" className="h-12 w-auto mr-5" />
//             <div className="text-2xl font-bold text-primary">Good Guiders</div>
//           </div>

//           {/* Buttons Group */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Button
//               className="bg-[#1877F2] hover:bg-[#166FE5] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
//               onClick={() => window.open("https://facebook.com", "_blank")}
//             >
//               Facebook
//             </Button>

//             <Button
//               className="bg-[#E1306C] hover:bg-[#C13584] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
//               onClick={() => window.open("https://instagram.com", "_blank")}
//             >
//               Instagram
//             </Button>

//             <Button
//               className="bg-[#1877F2] hover:bg-[#166FE5] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
//               onClick={() => navigateToMainApp("/login")}
//             >
//               Login
//             </Button>

//             <Button
//               className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
//               onClick={() => scrollToSection("early-registration")}
//             >
//               Get Early Access – 20% Off!
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden p-2"
//             onClick={toggle}
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </Button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden pb-4">
//             <div className="flex flex-col space-y-2">
//               <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">Home</button>
//               <button onClick={() => scrollToSection("features")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">Features</button>
//               <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">About</button>
//               <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">Contact</button>
//               <button onClick={() => navigateToMainApp("/login")} className="text-gray-700 hover:text-orange font-medium py-2 text-left">Login</button>
//               <Button className="bg-secondary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg mt-4 w-full" onClick={() => scrollToSection("early-registration")}>
//                 Get Early Access – 20% Off!
//               </Button>
//             </div>
//           </div>
//         )}

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex justify-center items-center space-x-8 py-2">
//           {["Home", "Courses", "Test-Series", "Resource", "Study Material", "Store", "More", "Rids Course"].map((item, index) => (
//             <button key={index} onClick={() => scrollToSection("features")} className="text-gray-700 hover:text-primary font-semibold transition-all duration-300">
//               {item}
//             </button>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }



// import { Button } from "@/components/ui/button";
// import { Menu, X, Facebook, Instagram } from "lucide-react"; // यहाँ Facebook और Instagram आइकॉन इम्पोर्ट किए हैं
// import { useMobileMenu } from "@/hooks/use-mobile-menu";
// import Logo from "@/Assets/icon-logo.png";

// export function Header() {
//   const { isOpen, toggle, close } = useMobileMenu();

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       close();
//     }
//   };

//   const navigateToMainApp = (path: string) => {
//     const mainAppBase = "https://goodguiders.onrender.com";
//     window.location.href = `${mainAppBase}${path}`;
//   };

//   return (
//     <header className="bg-'hsl(222, 36%, 72%)' shadow-'0 2px 4px rgba(59, 130, 246, 0.5)' top-0 z-50">
//       <div className="w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
          
//           {/* Logo Section */}
//           <div className="flex items-center">
//             <img src={Logo} alt="Good Guiders Logo" className="h-12 w-auto mr-5" />
//             <div className="text-2xl font-bold text-primary">Good Guiders</div>
//           </div>

//           {/* Buttons Group */}
//           <div className="hidden md:flex items-center space-x-4">
//             {/* Facebook Icon Button */}
//             <Button
//               size="icon"
//               className="bg-[#1877F2] hover:bg-[#166FE5] text-white p-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
//               onClick={() => window.open("https://facebook.com", "_blank")}
//             >
//               <Facebook className="w-5 h-5" />
//             </Button>

//             {/* Instagram Icon Button */}
//             <Button
//               size="icon"
//               className="bg-[#E1306C] hover:bg-[#C13584] text-white p-2 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
//               onClick={() => window.open("https://instagram.com", "_blank")}
//             >
//               <Instagram className="w-5 h-5" />
//             </Button>

//             <Button
//               className="bg-[#1877F2] hover:bg-[#166FE5] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
//               onClick={() => navigateToMainApp("/login")}
//             >
//               Login
//             </Button>

//             <Button
//               className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
//               onClick={() => scrollToSection("early-registration")}
//             >
//               Get Early Access – 20% Off!
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden p-2"
//             onClick={toggle}
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </Button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden pb-4">
//             <div className="flex flex-col space-y-2">
//               <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">Home</button>
//               <button onClick={() => scrollToSection("features")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">Features</button>
//               <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">About</button>
//               <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">Contact</button>
//               <button onClick={() => navigateToMainApp("/login")} className="text-gray-700 hover:text-orange font-medium py-2 text-left">Login</button>
//               <Button className="bg-secondary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg mt-4 w-full" onClick={() => scrollToSection("early-registration")}>
//                 Get Early Access – 20% Off!
//               </Button>
//             </div>
//           </div>
//         )}

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex justify-center items-center space-x-8 py-2">
//           {["Home", "Courses", "Test-Series", "Resource", "Study Material", "Store", "More", "Rids Course"].map((item, index) => (
//             <button key={index} onClick={() => scrollToSection("features")} className="text-gray-700 hover:text-primary font-semibold transition-all duration-300">
//               {item}
//             </button>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }








import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Instagram } from "lucide-react"; // यहाँ Facebook और Instagram आइकॉन इम्पोर्ट किए हैं
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import Logo from "@/Assets/icon-logo.png";

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
    const mainAppBase = "https://app.goodguiders.com";
    window.location.href = `${mainAppBase}${path}`;
  };

  return (
    <header className="bg-'hsl(222, 36%, 72%)' shadow-'0 2px 4px rgba(59, 130, 246, 0.5)' top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={Logo} alt="Good Guiders Logo" className="h-12 w-auto mr-5" />
            <div className="text-2xl font-bold text-primary">Good Guiders</div>
          </div>

          {/* Buttons Group */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Facebook Icon Button */}
            <Button
              size="icon"
              className="bg-[#1877F2] hover:bg-[#166FE5] text-white p-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open("https://facebook.com", "_blank")}
            >
              <Facebook className="w-5 h-5" />
            </Button>

            {/* Instagram Icon Button */}
            <Button
              size="icon"
              className="bg-[#E1306C] hover:bg-[#C13584] text-white p-2 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => window.open("https://instagram.com", "_blank")}
            >
              <Instagram className="w-5 h-5" />
            </Button>

            <Button
              className="bg-[#1877F2] hover:bg-[#166FE5] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigateToMainApp("/login")}
            >
              Login
            </Button>

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
              <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">Home</button>
              <button onClick={() => scrollToSection("features")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">Courses</button>
              <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">Test-Series</button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">Resource</button>
                            <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">Study Material</button>
                                          <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">Store</button>
                                                        <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">More</button>
                                                                      <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-primary font-medium py-2 text-left">Ride Course</button>
              <button onClick={() => navigateToMainApp("/login")} className="text-gray-700 hover:text-orange font-medium py-2 text-left">Login</button>
              <Button className="bg-secondary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg mt-4 w-full" onClick={() => scrollToSection("early-registration")}>
                Get Early Access – 20% Off!
              </Button>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center space-x-8 py-2">
          {["Home", "Courses", "Test-Series", "Resource", "Study Material", "Store", "More", "Rids Course"].map((item, index) => (
            <button key={index} onClick={() => scrollToSection("features")} className="text-gray-700 hover:text-primary font-semibold transition-all duration-300">
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
