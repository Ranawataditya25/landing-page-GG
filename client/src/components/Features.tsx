



// // // // import React, { useEffect, useRef, useState } from "react";
// // // // import { Card, CardContent } from "@/components/ui/card";
// // // // import {
// // // //   BookOpen,
// // // //   TrendingUp,
// // // //   Globe,
// // // //   Briefcase,
// // // //   Heart,
// // // //   FileText,
// // // //   Users,
// // // //   BarChart3,
// // // //   Library,
// // // // } from "lucide-react";
// // // // const [expandedCard, setExpandedCard] = useState<number | null>(null);
// // // // const features = [
// // // //   // { icon: BookOpen, title: "", description: "" },
// // // //   // { icon: TrendingUp, title: "", description: "" },
// // // //   // { icon: Globe, title: "", description: "" },


 
// // // //   {
// // // //     icon: Users,
// // // //     title: "🤝 1:1 Mentorship",
// // // //     description:
// // // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // // //   },
// // // //   {
// // // //     icon: FileText,
// // // //     title: "🧪 Mock Tests & Practice",
// // // //     description:
// // // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // // //   },
// // // //   {
// // // //     icon: Heart,
// // // //     title: "🧠 Psychological Support",
// // // //     description:
// // // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // // //   },
// // // //   {
// // // //     icon: Briefcase,
// // // //     title: "👩‍💼 HR & Job Assistance",
// // // //     description:
// // // //       "Get job placement support with resume building and interview preparation.",
// // // //   },
// // // //   {
// // // //     icon: Globe,
// // // //     title: "🌍 Career Guidance",
// // // //     description:
// // // //       "Explore career opportunities and choose the right path according to your interests and skills.",
// // // //   },
// // // //   {
// // // //     icon: TrendingUp,
// // // //     title: "📈 Skill Development & Training",
// // // //     description:
// // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // //   },
// // // //   {
// // // //     icon: Library,
// // // //     title: "📚 Stream & Subject Help",
// // // //     description:
// // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // //   },

// // // //   {
// // // //     icon: Briefcase,
// // // //     title: "👩‍💼 HR & Job Assistance",
// // // //     description:
// // // //       "Get job placement support with resume building and interview preparation.",
// // // //   },
// // // //   {
// // // //     icon: Heart,
// // // //     title: "🧠 Psychological Support",
// // // //     description:
// // // //       "Mental health support and stress management for academic and personal challenges.",
// // // //   },
// // // //   {
// // // //     icon: FileText,
// // // //     title: "🧪 Mock Tests & Practice",
// // // //     description:
// // // //       "Practice with realistic mock tests and get detailed performance analytics.",
// // // //   },
// // // //   {
// // // //     icon: Users,
// // // //     title: "🤝 One-to-One Mentorship",
// // // //     description:
// // // //       "Personalized guidance sessions with experienced mentors in your field of interest.",
// // // //   },
// // // //   {
// // // //     icon: BarChart3,
// // // //     title: "📈 Skill Development & Training",
// // // //     description:
// // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // //   },
// // // //   {
// // // //     icon: Library,
// // // //     title: "📚 Stream & Subject Help",
// // // //     description:
// // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // //   },
// // // // ];

// // // // export function Features() {
// // // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // // //   const [boxes, setBoxes] = useState<
// // // //     { id: number; description: string; color: string }[]
// // // //   >([]);

// // // //   // Generate boxes
// // // //   useEffect(() => {
// // // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // // //       id: i,
// // // //       description: `Learn ${i + 1}`,
// // // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // // //     }));
// // // //     setBoxes(items);
// // // //   }, []);

// // // //   // Auto scroll (reverse at ends)
// // // //   useEffect(() => {
// // // //     const scrollContainer = scrollRef.current;
// // // //     if (!scrollContainer) return;

// // // //     let direction = 1;
// // // //     const scrollStep = 1;
// // // //     const scrollDelay = 15;

// // // //     const interval = setInterval(() => {
// // // //       if (!scrollContainer) return;
// // // //       scrollContainer.scrollLeft += scrollStep * direction;

// // // //       // reverse at ends
// // // //       if (
// // // //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// // // //         scrollContainer.scrollWidth - 1
// // // //       ) {
// // // //         direction = -1;
// // // //       }
// // // //       if (scrollContainer.scrollLeft <= 0) {
// // // //         direction = 1;
// // // //       }
// // // //     }, scrollDelay);

// // // //     return () => clearInterval(interval);
// // // //   }, [boxes]);

// // // //   // Hide scrollbar styles
// // // //   useEffect(() => {
// // // //     const styleEl = document.createElement("style");
// // // //     styleEl.id = "features-scrollbar-hide";
// // // //     styleEl.innerHTML = `
// // // //       /* Hide scrollbar for WebKit browsers (Chrome, Safari, Edge) */
// // // //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// // // //       /* Hide scrollbar for Firefox */
// // // //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// // // //     `;
// // // //     document.head.appendChild(styleEl);
// // // //     return () => {
// // // //       const existing = document.getElementById("features-scrollbar-hide");
// // // //       if (existing) existing.remove();
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <section id="features" className="py-20 bg-white">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         {/* Section Header */}
// // // //         <div className="text-center mb-16">
// // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // //             Comprehensive Guidance for Every Student
// // // //           </h2>
// // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // //             From academic support to career planning, we provide everything you
// // // //             need to succeed in your educational journey.
// // // //           </p>
// // // //         </div>

// // // //         {/* Top 3 Cards */}
// // // //         <div className="flex flex-wrap justify-center gap-8 mb-12">
// // // //           {features.slice(0, 3).map((feature, index) => {
// // // //             const Icon = feature.icon;
// // // //             const bgColors = [
// // // //               "bg-[rgb(125,219,123)]",
// // // //               "bg-[rgb(255,153,153)]",
// // // //               "bg-[rgb(169,254,255)]",
// // // //             ];
// // // //             return (
// // // //               <Card
// // // //                 key={index}
// // // //                 className={`${bgColors[index]} text-black h-auto w-full md:w-[350px] shadow-md hover:shadow-lg transition-shadow group`}
// // // //               >
// // // //                 <CardContent className="p-6 flex flex-col h-full">
// // // //                   <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // //                     <Icon className="w-8 h-8 text-black" />
// // // //                   </div>
// // // //                   <h3 className="text-xl font-semibold mb-3">
// // // //                    {feature.title}
               
// // // //                   </h3>
// // // //                   <p className="text-black/80 mb-4">{feature.description}</p>
// // // //                   <button className="mt-auto bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
// // // //                     Learn More
// // // //                   </button>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             );
// // // //           })}
// // // //         </div>

// // // //         {/* Remaining Cards */}
// // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// // // //           {features.slice(3).map((feature, index) => {
// // // //             const Icon = feature.icon;
// // // //             return (
// // // //               <Card
// // // //                 key={index + 3}
// // // //                 className="bg-slate-50 h-56 w-full shadow-md hover:shadow-lg transition-shadow group"
// // // //               >
// // // //                 <CardContent className="p-4">
// // // //                   <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // //                     <Icon className="w-8 h-8 text-primary" />
// // // //                   </div>
// // // //                   <h3 className="text-xl font-semibold text-gray-900 mb-3">
// // // //                     {feature.title}
// // // //                   </h3>
// // // //                   <p className="text-gray-600">{feature.description}</p>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             );
// // // //           })}
// // // //         </div>

// // // //         {/* Auto-scrolling boxes */}
// // // //         <div className="relative mb-12">
// // // //           <div
// // // //             ref={scrollRef}
// // // //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// // // //             style={{
// // // //               scrollBehavior: "smooth",
// // // //               borderRadius: "8px",
// // // //               overflow: "hidden",
// // // //             }}
// // // //           >
// // // //             {boxes.map((box) => (
// // // //               <div
// // // //                 key={box.id}
// // // //                 className="min-w-[200px] h-[150px] flex-shrink-0 shadow-md p-4"
// // // //                 style={{
// // // //                   backgroundColor: box.color,
// // // //                   borderRadius: "8px",
// // // //                 }}
// // // //               >
// // // //                 {/* <h4 className="text-lg font-semibold">{box.title}</h4>
// // // //                 <p className="text-sm text-gray-700">{box.description}</p> */}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }







// // // // import React, { useEffect, useRef, useState } from "react";
// // // // import { Card, CardContent } from "@/components/ui/card";
// // // // import {
// // // //   BookOpen,
// // // //   TrendingUp,
// // // //   Globe,
// // // //   Briefcase,
// // // //   Heart,
// // // //   FileText,
// // // //   Users,
// // // //   BarChart3,
// // // //   Library,
// // // // } from "lucide-react";
// // // // const [expandedCard, setExpandedCard] = useState<number | null>(null);
// // // // const features = [
// // // //   // { icon: BookOpen, title: "", description: "" },
// // // //   // { icon: TrendingUp, title: "", description: "" },
// // // //   // { icon: Globe, title: "", description: "" },


 
// // // //   {
// // // //     icon: Users,
// // // //     title: "🤝 1:1 Mentorship",
// // // //     description:
// // // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // // //   },
// // // //   {
// // // //     icon: FileText,
// // // //     title: "🧪 Mock Tests & Practice",
// // // //     description:
// // // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // // //   },
// // // //   {
// // // //     icon: Heart,
// // // //     title: "🧠 Psychological Support",
// // // //     description:
// // // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // // //   },
// // // //   {
// // // //     icon: Briefcase,
// // // //     title: "👩‍💼 HR & Job Assistance",
// // // //     description:
// // // //       "Get job placement support with resume building and interview preparation.",
// // // //   },
// // // //   {
// // // //     icon: Globe,
// // // //     title: "🌍 Career Guidance",
// // // //     description:
// // // //       "Explore career opportunities and choose the right path according to your interests and skills.",
// // // //   },
// // // //   {
// // // //     icon: TrendingUp,
// // // //     title: "📈 Skill Development & Training",
// // // //     description:
// // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // //   },
// // // //   {
// // // //     icon: Library,
// // // //     title: "📚 Stream & Subject Help",
// // // //     description:
// // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // //   },

// // // //   {
// // // //     icon: Briefcase,
// // // //     title: "👩‍💼 HR & Job Assistance",
// // // //     description:
// // // //       "Get job placement support with resume building and interview preparation.",
// // // //   },
// // // //   {
// // // //     icon: Heart,
// // // //     title: "🧠 Psychological Support",
// // // //     description:
// // // //       "Mental health support and stress management for academic and personal challenges.",
// // // //   },
// // // //   {
// // // //     icon: FileText,
// // // //     title: "🧪 Mock Tests & Practice",
// // // //     description:
// // // //       "Practice with realistic mock tests and get detailed performance analytics.",
// // // //   },
// // // //   {
// // // //     icon: Users,
// // // //     title: "🤝 One-to-One Mentorship",
// // // //     description:
// // // //       "Personalized guidance sessions with experienced mentors in your field of interest.",
// // // //   },
// // // //   {
// // // //     icon: BarChart3,
// // // //     title: "📈 Skill Development & Training",
// // // //     description:
// // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // //   },
// // // //   {
// // // //     icon: Library,
// // // //     title: "📚 Stream & Subject Help",
// // // //     description:
// // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // //   },
// // // // ];

// // // // export function Features() {
// // // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // // //   const [boxes, setBoxes] = useState<
// // // //     { id: number; description: string; color: string }[]
// // // //   >([]);

// // // //   // Generate boxes
// // // //   useEffect(() => {
// // // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // // //       id: i,
// // // //       description: `Learn ${i + 1}`,
// // // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // // //     }));
// // // //     setBoxes(items);
// // // //   }, []);

// // // //   // Auto scroll (reverse at ends)
// // // //   useEffect(() => {
// // // //     const scrollContainer = scrollRef.current;
// // // //     if (!scrollContainer) return;

// // // //     let direction = 1;
// // // //     const scrollStep = 1;
// // // //     const scrollDelay = 15;

// // // //     const interval = setInterval(() => {
// // // //       if (!scrollContainer) return;
// // // //       scrollContainer.scrollLeft += scrollStep * direction;

// // // //       // reverse at ends
// // // //       if (
// // // //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// // // //         scrollContainer.scrollWidth - 1
// // // //       ) {
// // // //         direction = -1;
// // // //       }
// // // //       if (scrollContainer.scrollLeft <= 0) {
// // // //         direction = 1;
// // // //       }
// // // //     }, scrollDelay);

// // // //     return () => clearInterval(interval);
// // // //   }, [boxes]);

// // // //   // Hide scrollbar styles
// // // //   useEffect(() => {
// // // //     const styleEl = document.createElement("style");
// // // //     styleEl.id = "features-scrollbar-hide";
// // // //     styleEl.innerHTML = `
// // // //       /* Hide scrollbar for WebKit browsers (Chrome, Safari, Edge) */
// // // //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// // // //       /* Hide scrollbar for Firefox */
// // // //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// // // //     `;
// // // //     document.head.appendChild(styleEl);
// // // //     return () => {
// // // //       const existing = document.getElementById("features-scrollbar-hide");
// // // //       if (existing) existing.remove();
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <section id="features" className="py-20 bg-white">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         {/* Section Header */}
// // // //         <div className="text-center mb-16">
// // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // //             Comprehensive Guidance for Every Student
// // // //           </h2>
// // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // //             From academic support to career planning, we provide everything you
// // // //             need to succeed in your educational journey.
// // // //           </p>
// // // //         </div>

// // // //         {/* Top 3 Cards */}
// // // //         <div className="flex flex-wrap justify-center gap-8 mb-12">
// // // //           {features.slice(0, 3).map((feature, index) => {
// // // //             const Icon = feature.icon;
// // // //             const bgColors = [
// // // //               "bg-[rgb(125,219,123)]",
// // // //               "bg-[rgb(255,153,153)]",
// // // //               "bg-[rgb(169,254,255)]",
// // // //             ];
// // // //             return (
// // // //               <Card
// // // //                 key={index}
// // // //                 className={`${bgColors[index]} text-black h-auto w-full md:w-[350px] shadow-md hover:shadow-lg transition-shadow group`}
// // // //               >
// // // //                 <CardContent className="p-6 flex flex-col h-full">
// // // //                   <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // //                     <Icon className="w-8 h-8 text-black" />
// // // //                   </div>
// // // //                   <h3 className="text-xl font-semibold mb-3">
// // // //                    {feature.title}
               
// // // //                   </h3>
// // // //                   <p className="text-black/80 mb-4">{feature.description}</p>
// // // //                   <button className="mt-auto bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
// // // //                     Learn More
// // // //                   </button>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             );
// // // //           })}
// // // //         </div>

// // // //         {/* Remaining Cards */}
// // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// // // //           {features.slice(3).map((feature, index) => {
// // // //             const Icon = feature.icon;
// // // //             return (
// // // //               <Card
// // // //                 key={index + 3}
// // // //                 className="bg-slate-50 h-56 w-full shadow-md hover:shadow-lg transition-shadow group"
// // // //               >
// // // //                 <CardContent className="p-4">
// // // //                   <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // //                     <Icon className="w-8 h-8 text-primary" />
// // // //                   </div>
// // // //                   <h3 className="text-xl font-semibold text-gray-900 mb-3">
// // // //                     {feature.title}
// // // //                   </h3>
// // // //                   <p className="text-gray-600">{feature.description}</p>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             );
// // // //           })}
// // // //         </div>

// // // //         {/* Auto-scrolling boxes */}
// // // //         <div className="relative mb-12">
// // // //           <div
// // // //             ref={scrollRef}
// // // //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// // // //             style={{
// // // //               scrollBehavior: "smooth",
// // // //               borderRadius: "8px",
// // // //               overflow: "hidden",
// // // //             }}
// // // //           >
// // // //             {boxes.map((box) => (
// // // //               <div
// // // //                 key={box.id}
// // // //                 className="min-w-[200px] h-[150px] flex-shrink-0 shadow-md p-4"
// // // //                 style={{
// // // //                   backgroundColor: box.color,
// // // //                   borderRadius: "8px",
// // // //                 }}
// // // //               >
// // // //                 {/* <h4 className="text-lg font-semibold">{box.title}</h4>
// // // //                 <p className="text-sm text-gray-700">{box.description}</p> */}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }


// // // import React, { useEffect, useRef, useState } from "react";
// // // import { Card, CardContent } from "@/components/ui/card";
// // // import {
// // //   TrendingUp,
// // //   Globe,
// // //   Briefcase,
// // //   Heart,
// // //   FileText,
// // //   Users,
// // //   BarChart3,
// // //   Library,
// // // } from "lucide-react";

// // // const features = [
// // //   {
// // //     icon: Users,
// // //     title: "🤝 1:1 Mentorship",
// // //     description:
// // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // //   },
// // //   {
// // //     icon: FileText,
// // //     title: "🧪 Mock Tests & Practice",
// // //     description:
// // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // //   },
// // //   {
// // //     icon: Heart,
// // //     title: "🧠 Psychological Support",
// // //     description:
// // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // //   },
// // //   {
// // //     icon: Briefcase,
// // //     title: "👩‍💼 HR & Job Assistance",
// // //     description:
// // //       "Get job placement support with resume building and interview preparation.",
// // //   },
// // //   {
// // //     icon: Globe,
// // //     title: "🌍 Career Guidance",
// // //     description:
// // //       "Explore career opportunities and choose the right path according to your interests and skills.",
// // //   },
// // //   {
// // //     icon: TrendingUp,
// // //     title: "📈 Skill Development & Training",
// // //     description:
// // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // //   },
// // //   {
// // //     icon: Library,
// // //     title: "📚 Stream & Subject Help",
// // //     description:
// // //       "Get expert help in specific subjects and choose the right academic stream.",
// // //   },
// // //   {
// // //     icon: Briefcase,
// // //     title: "👩‍💼 HR & Job Assistance",
// // //     description:
// // //       "Get job placement support with resume building and interview preparation.",
// // //   },
// // //   {
// // //     icon: Heart,
// // //     title: "🧠 Psychological Support",
// // //     description:
// // //       "Mental health support and stress management for academic and personal challenges.",
// // //   },
// // //   {
// // //     icon: FileText,
// // //     title: "🧪 Mock Tests & Practice",
// // //     description:
// // //       "Practice with realistic mock tests and get detailed performance analytics.",
// // //   },
// // //   {
// // //     icon: Users,
// // //     title: "🤝 One-to-One Mentorship",
// // //     description:
// // //       "Personalized guidance sessions with experienced mentors in your field of interest.",
// // //   },
// // //   {
// // //     icon: BarChart3,
// // //     title: "📈 Skill Development & Training",
// // //     description:
// // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // //   },
// // //   {
// // //     icon: Library,
// // //     title: "📚 Stream & Subject Help",
// // //     description:
// // //       "Get expert help in specific subjects and choose the right academic stream.",
// // //   },
// // // ];

// // // export function Features() {
// // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
  
// // //   // 1. expandedCard स्टेट को यहाँ कॉम्पोनेंट के अंदर रखा है
// // //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// // //   // Generate boxes
// // //   useEffect(() => {
// // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // //       id: i,
// // //       description: `Learn ${i + 1}`,
// // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // //     }));
// // //     setBoxes(items);
// // //   }, []);

// // //   // Auto scroll (reverse at ends)
// // //   useEffect(() => {
// // //     const scrollContainer = scrollRef.current;
// // //     if (!scrollContainer) return;

// // //     let direction = 1;
// // //     const scrollStep = 1;
// // //     const scrollDelay = 15;

// // //     const interval = setInterval(() => {
// // //       if (!scrollContainer) return;
// // //       scrollContainer.scrollLeft += scrollStep * direction;

// // //       if (
// // //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// // //         scrollContainer.scrollWidth - 1
// // //       ) {
// // //         direction = -1;
// // //       }
// // //       if (scrollContainer.scrollLeft <= 0) {
// // //         direction = 1;
// // //       }
// // //     }, scrollDelay);

// // //     return () => clearInterval(interval);
// // //   }, [boxes]);

// // //   // Hide scrollbar styles
// // //   useEffect(() => {
// // //     const styleEl = document.createElement("style");
// // //     styleEl.id = "features-scrollbar-hide";
// // //     styleEl.innerHTML = `
// // //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// // //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// // //     `;
// // //     document.head.appendChild(styleEl);
// // //     return () => {
// // //       const existing = document.getElementById("features-scrollbar-hide");
// // //       if (existing) existing.remove();
// // //     };
// // //   }, []);

// // //   return (
// // //     <section id="features" className="py-20 bg-white">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         {/* Section Header */}
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // //             Comprehensive Guidance for Every Student
// // //           </h2>
// // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // //             From academic support to career planning, we provide everything you
// // //             need to succeed in your educational journey.
// // //           </p>
// // //         </div>

// // //         {/* Top 3 Cards */}
// // //         <div className="flex flex-wrap justify-center gap-8 mb-12">
// // //           {features.slice(0, 3).map((feature, index) => {
// // //             const Icon = feature.icon;
// // //             const bgColors = [
// // //               "bg-[rgb(125,219,123)]",
// // //               "bg-[rgb(255,153,153)]",
// // //               "bg-[rgb(169,254,255)]",
// // //             ];
            
// // //             // चेक करें कि क्या यह कार्ड खुला हुआ है
// // //             const isExpanded = expandedCard === index;

// // //             return (
// // //               <Card
// // //                 key={index}
// // //                 className={`${bgColors[index]} text-black w-full md:w-[350px] shadow-md hover:shadow-lg transition-all duration-300 group ${
// // //                   isExpanded ? "h-auto" : "h-[320px]"
// // //                 }`}
// // //               >
// // //                 <CardContent className="p-6 flex flex-col h-full justify-between">
// // //                   <div>
// // //                     <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // //                       <Icon className="w-8 h-8 text-black" />
// // //                     </div>
// // //                     <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    
// // //                     {/* अगर expanded नहीं है तो टेक्स्ट 2 लाइनों के बाद कट जाएगा */}
// // //                     <p className={`text-black/80 mb-4 ${isExpanded ? "" : "line-clamp-2"}`}>
// // //                       {feature.description}
// // //                     </p>
// // //                   </div>
                  
// // //                   <button
// // //                     onClick={() => setExpandedCard(isExpanded ? null : index)}
// // //                     className="mt-auto w-full bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
// // //                   >
// // //                     {isExpanded ? "Show Less" : "Learn More"}
// // //                   </button>
// // //                 </CardContent>
// // //               </Card>
// // //             );
// // //           })}
// // //         </div>

// // //         {/* Remaining Cards */}
// // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// // //           {features.slice(3).map((feature, index) => {
// // //             const Icon = feature.icon;
// // //             const actualIndex = index + 3; // बाकी कार्ड्स के लिए unique index
// // //             const isExpanded = expandedCard === actualIndex;

// // //             return (
// // //               <Card
// // //                 key={actualIndex}
// // //                 className={`bg-slate-50 w-full shadow-md hover:shadow-lg transition-all duration-300 group ${
// // //                   isExpanded ? "h-auto" : "h-56"
// // //                 }`}
// // //               >
// // //                 <CardContent className="p-6 flex flex-col h-full justify-between">
// // //                   <div>
// // //                     <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // //                       <Icon className="w-8 h-8 text-primary" />
// // //                     </div>
// // //                     <h3 className="text-xl font-semibold text-gray-900 mb-3">
// // //                       {feature.title}
// // //                     </h3>
// // //                     <p className={`text-gray-600 mb-4 ${isExpanded ? "" : "line-clamp-2"}`}>
// // //                       {feature.description}
// // //                     </p>
// // //                   </div>

// // //                   <button
// // //                     onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// // //                     className="text-sm font-medium text-[hsl(218,46%,36%)] hover:text-orange-600 self-start transition-colors"
// // //                   >
// // //                     {isExpanded ? "Show Less ↑" : "Learn More →"}
// // //                   </button>
// // //                 </CardContent>
// // //               </Card>
// // //             );
// // //           })}
// // //         </div>

// // //         {/* Auto-scrolling boxes */}
// // //         <div className="relative mb-12">
// // //           <div
// // //             ref={scrollRef}
// // //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// // //             style={{
// // //               scrollBehavior: "smooth",
// // //               borderRadius: "8px",
// // //               overflow: "hidden",
// // //             }}
// // //           >
// // //             {boxes.map((box) => (
// // //               <div
// // //                 key={box.id}
// // //                 className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4"
// // //                 style={{
// // //                   backgroundColor: box.color,
// // //                   borderRadius: "8px",
// // //                 }}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }




// // // import React, { useEffect, useRef, useState } from "react";
// // // import { Card, CardContent } from "@/components/ui/card";
// // // import {
// // //   TrendingUp,
// // //   Globe,
// // //   Briefcase,
// // //   Heart,
// // //   FileText,
// // //   Users,
// // //   BarChart3,
// // //   Library,
// // // } from "lucide-react";

// // // const features = [
// // //   {
// // //     icon: Users,
// // //     title: "🤝 1:1 Mentorship",
// // //     description:
// // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // //   },
// // //   {
// // //     icon: FileText,
// // //     title: "🧪 Mock Tests & Practice",
// // //     description:
// // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // //   },
// // //   {
// // //     icon: Heart,
// // //     title: "🧠 Psychological Support",
// // //     description:
// // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // //   },
// // //   {
// // //     icon: Briefcase,
// // //     title: "👩‍💼 HR & Job Assistance",
// // //     description:
// // //       "Get job placement support with resume building and interview preparation.",
// // //   },
// // //   {
// // //     icon: Globe,
// // //     title: "🌍 Career Guidance",
// // //     description:
// // //       "Explore career opportunities and choose the right path according to your interests and skills.",
// // //   },
// // //   {
// // //     icon: TrendingUp,
// // //     title: "📈 Skill Development & Training",
// // //     description:
// // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // //   },
// // //   {
// // //     icon: Library,
// // //     title: "📚 Stream & Subject Help",
// // //     description:
// // //       "Get expert help in specific subjects and choose the right academic stream.",
// // //   },
// // //   {
// // //     icon: Briefcase,
// // //     title: "👩‍💼 HR & Job Assistance",
// // //     description:
// // //       "Get job placement support with resume building and interview preparation.",
// // //   },
// // //   {
// // //     icon: Heart,
// // //     title: "🧠 Psychological Support",
// // //     description:
// // //       "Mental health support and stress management for academic and personal challenges.",
// // //   },
// // //   {
// // //     icon: FileText,
// // //     title: "🧪 Mock Tests & Practice",
// // //     description:
// // //       "Practice with realistic mock tests and get detailed performance analytics.",
// // //   },
// // //   {
// // //     icon: Users,
// // //     title: "🤝 One-to-One Mentorship",
// // //     description:
// // //       "Personalized guidance sessions with experienced mentors in your field of interest.",
// // //   },
// // //   {
// // //     icon: BarChart3,
// // //     title: "📈 Skill Development & Training",
// // //     description:
// // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // //   },
// // //   {
// // //     icon: Library,
// // //     title: "📚 Stream & Subject Help",
// // //     description:
// // //       "Get expert help in specific subjects and choose the right academic stream.",
// // //   },
// // // ];

// // // export function Features() {
// // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
// // //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// // //   // Generate boxes
// // //   useEffect(() => {
// // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // //       id: i,
// // //       description: `Learn ${i + 1}`,
// // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // //     }));
// // //     setBoxes(items);
// // //   }, []);

// // //   // Auto scroll
// // //   useEffect(() => {
// // //     const scrollContainer = scrollRef.current;
// // //     if (!scrollContainer) return;

// // //     let direction = 1;
// // //     const scrollStep = 1;
// // //     const scrollDelay = 15;

// // //     const interval = setInterval(() => {
// // //       if (!scrollContainer) return;
// // //       scrollContainer.scrollLeft += scrollStep * direction;

// // //       if (
// // //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// // //         scrollContainer.scrollWidth - 1
// // //       ) {
// // //         direction = -1;
// // //       }
// // //       if (scrollContainer.scrollLeft <= 0) {
// // //         direction = 1;
// // //       }
// // //     }, scrollDelay);

// // //     return () => clearInterval(interval);
// // //   }, [boxes]);

// // //   // Hide scrollbar styles
// // //   useEffect(() => {
// // //     const styleEl = document.createElement("style");
// // //     styleEl.id = "features-scrollbar-hide";
// // //     styleEl.innerHTML = `
// // //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// // //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// // //     `;
// // //     document.head.appendChild(styleEl);
// // //     return () => {
// // //       const existing = document.getElementById("features-scrollbar-hide");
// // //       if (existing) existing.remove();
// // //     };
// // //   }, []);

// // //   return (
// // //     <section id="features" className="py-20 bg-white">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         {/* Section Header */}
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // //             Comprehensive Guidance for Every Student
// // //           </h2>
// // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // //             From academic support to career planning, we provide everything you
// // //             need to succeed in your educational journey.
// // //           </p>
// // //         </div>

// // //         {/* Top 3 Cards */}
// // //         <div className="flex flex-wrap justify-center gap-8 mb-12">
// // //           {features.slice(0, 3).map((feature, index) => {
// // //             const Icon = feature.icon;
// // //             const bgColors = [
// // //               "bg-[rgb(125,219,123)]",
// // //               "bg-[rgb(255,153,153)]",
// // //               "bg-[rgb(169,254,255)]",
// // //             ];
            
// // //             const isExpanded = expandedCard === index;

// // //             return (
// // //               <Card
// // //                 key={index}
// // //                 // यहाँ h-[320px] से बढ़कर h-[480px] हो जाएगी खुलते ही
// // //                 className={`${bgColors[index]} text-black w-full md:w-[350px] shadow-md hover:shadow-lg transition-all duration-500 ease-in-out group ${
// // //                   isExpanded ? "h-[480px]" : "h-[320px]"
// // //                 }`}
// // //               >
// // //                 <CardContent className="p-6 flex flex-col h-full justify-between">
// // //                   <div>
// // //                     <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // //                       <Icon className="w-8 h-8 text-black" />
// // //                     </div>
// // //                     <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    
// // //                     {/* जब बंद रहेगा तो सिर्फ 2 लाइन दिखेगी, खुलने पर पूरा */}
// // //                     <p className={`text-black/80 transition-all ${isExpanded ? "" : "line-clamp-2"}`}>
// // //                       {feature.description}
// // //                     </p>
// // //                   </div>
                  
// // //                   <button
// // //                     onClick={() => setExpandedCard(isExpanded ? null : index)}
// // //                     className="mt-auto w-full bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
// // //                   >
// // //                     {isExpanded ? "Show Less ↑" : "Learn More →"}
// // //                   </button>
// // //                 </CardContent>
// // //               </Card>
// // //             );
// // //           })}
// // //         </div>

// // //         {/* Remaining Cards */}
// // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// // //           {features.slice(3).map((feature, index) => {
// // //             const Icon = feature.icon;
// // //             const actualIndex = index + 3; 
// // //             const isExpanded = expandedCard === actualIndex;

// // //             return (
// // //               <Card
// // //                 key={actualIndex}
// // //                 // यहाँ बाकी कार्ड्स की हाइट h-56 (224px) से बढ़कर सीधे h-[420px] हो जाएगी
// // //                 className={`bg-slate-50 w-full shadow-md hover:shadow-lg transition-all duration-500 ease-in-out group ${
// // //                   isExpanded ? "h-[420px]" : "h-56"
// // //                 }`}
// // //               >
// // //                 <CardContent className="p-6 flex flex-col h-full justify-between">
// // //                   <div>
// // //                     <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // //                       <Icon className="w-8 h-8 text-primary" />
// // //                     </div>
// // //                     <h3 className="text-xl font-semibold text-gray-900 mb-3">
// // //                       {feature.title}
// // //                     </h3>
// // //                     <p className={`text-gray-600 ${isExpanded ? "" : "line-clamp-2"}`}>
// // //                       {feature.description}
// // //                     </p>
// // //                   </div>

// // //                   <button
// // //                     onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// // //                     className="mt-4 text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 self-start transition-colors"
// // //                   >
// // //                     {isExpanded ? "Show Less ↑" : "Learn More →"}
// // //                   </button>
// // //                 </CardContent>
// // //               </Card>
// // //             );
// // //           })}
// // //         </div>

// // //         {/* Auto-scrolling boxes */}
// // //         <div className="relative mb-12">
// // //           <div
// // //             ref={scrollRef}
// // //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// // //             style={{
// // //               scrollBehavior: "smooth",
// // //               borderRadius: "8px",
// // //               overflow: "hidden",
// // //             }}
// // //           >
// // //             {boxes.map((box) => (
// // //               <div
// // //                 key={box.id}
// // //                 className="min-w-[200px] h-[150px] flex-shrink-0 shadow-md p-4"
// // //                 style={{
// // //                   backgroundColor: box.color,
// // //                   borderRadius: "8px",
// // //                 }}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }





// // // import React, { useEffect, useRef, useState } from "react";
// // // import { Card, CardContent } from "@/components/ui/card";
// // // import {
// // //   TrendingUp,
// // //   Globe,
// // //   Briefcase,
// // //   Heart,
// // //   FileText,
// // //   Users,
// // //   BarChart3,
// // //   Library,
// // // } from "lucide-react";

// // // const features = [
// // //   {
// // //     icon: Users,
// // //     title: "🤝 1:1 Mentorship",
// // //     description:
// // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // //   },
// // //   {
// // //     icon: FileText,
// // //     title: "🧪 Mock Tests & Practice",
// // //     description:
// // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // //   },
// // //   {
// // //     icon: Heart,
// // //     title: "🧠 Psychological Support",
// // //     description:
// // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // //   },
// // //   {
// // //     icon: Briefcase,
// // //     title: "👩‍💼 HR & Job Assistance",
// // //     description:
// // //       "Get job placement support with resume building and interview preparation.",
// // //   },
// // //   {
// // //     icon: Globe,
// // //     title: "🌍 Career Guidance",
// // //     description:
// // //       "Explore career opportunities and choose the right path according to your interests and skills.",
// // //   },
// // //   {
// // //     icon: TrendingUp,
// // //     title: "📈 Skill Development & Training",
// // //     description:
// // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // //   },
// // //   {
// // //     icon: Library,
// // //     title: "📚 Stream & Subject Help",
// // //     description:
// // //       "Get expert help in specific subjects and choose the right academic stream.",
// // //   },
// // //   {
// // //     icon: Briefcase,
// // //     title: "👩‍💼 HR & Job Assistance",
// // //     description:
// // //       "Get job placement support with resume building and interview preparation.",
// // //   },
// // //   {
// // //     icon: Heart,
// // //     title: "🧠 Psychological Support",
// // //     description:
// // //       "Mental health support and stress management for academic and personal challenges.",
// // //   },
// // //   {
// // //     icon: FileText,
// // //     title: "🧪 Mock Tests & Practice",
// // //     description:
// // //       "Practice with realistic mock tests and get detailed performance analytics.",
// // //   },
// // //   {
// // //     icon: Users,
// // //     title: "🤝 One-to-One Mentorship",
// // //     description:
// // //       "Personalized guidance sessions with experienced mentors in your field of interest.",
// // //   },
// // //   {
// // //     icon: BarChart3,
// // //     title: "📈 Skill Development & Training",
// // //     description:
// // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // //   },
// // //   {
// // //     icon: Library,
// // //     title: "📚 Stream & Subject Help",
// // //     description:
// // //       "Get expert help in specific subjects and choose the right academic stream.",
// // //   },
// // // ];

// // // export function Features() {
// // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
  
// // //   // 1. expandedCard स्टेट को यहाँ कॉम्पोनेंट के अंदर रखा है
// // //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// // //   // Generate boxes
// // //   useEffect(() => {
// // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // //       id: i,
// // //       description: `Learn ${i + 1}`,
// // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // //     }));
// // //     setBoxes(items);
// // //   }, []);

// // //   // Auto scroll (reverse at ends)
// // //   useEffect(() => {
// // //     const scrollContainer = scrollRef.current;
// // //     if (!scrollContainer) return;

// // //     let direction = 1;
// // //     const scrollStep = 1;
// // //     const scrollDelay = 15;

// // //     const interval = setInterval(() => {
// // //       if (!scrollContainer) return;
// // //       scrollContainer.scrollLeft += scrollStep * direction;

// // //       if (
// // //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// // //         scrollContainer.scrollWidth - 1
// // //       ) {
// // //         direction = -1;
// // //       }
// // //       if (scrollContainer.scrollLeft <= 0) {
// // //         direction = 1;
// // //       }
// // //     }, scrollDelay);

// // //     return () => clearInterval(interval);
// // //   }, [boxes]);

// // //   // Hide scrollbar styles
// // //   useEffect(() => {
// // //     const styleEl = document.createElement("style");
// // //     styleEl.id = "features-scrollbar-hide";
// // //     styleEl.innerHTML = `
// // //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// // //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// // //     `;
// // //     document.head.appendChild(styleEl);
// // //     return () => {
// // //       const existing = document.getElementById("features-scrollbar-hide");
// // //       if (existing) existing.remove();
// // //     };
// // //   }, []);

// // //   return (
// // //     <section id="features" className="py-20 bg-white">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         {/* Section Header */}
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // //             Comprehensive Guidance for Every Student
// // //           </h2>
// // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // //             From academic support to career planning, we provide everything you
// // //             need to succeed in your educational journey.
// // //           </p>
// // //         </div>

// // //         {/* Top 3 Cards */}
// // //         <div className="flex flex-wrap justify-center gap-8 mb-12">
// // //           {features.slice(0, 3).map((feature, index) => {
// // //             const Icon = feature.icon;
// // //             const bgColors = [
// // //               "bg-[rgb(125,219,123)]",
// // //               "bg-[rgb(255,153,153)]",
// // //               "bg-[rgb(169,254,255)]",
// // //             ];
            
// // //             // चेक करें कि क्या यह कार्ड खुला हुआ है
// // //             const isExpanded = expandedCard === index;

// // //             return (
// // //               <Card
// // //                 key={index}
// // //                 className={`${bgColors[index]} text-black w-full md:w-[350px] shadow-md hover:shadow-lg transition-all duration-300 group ${
// // //                   isExpanded ? "h-auto" : "h-[320px]"
// // //                 }`}
// // //               >
// // //                 <CardContent className="p-6 flex flex-col h-full justify-between">
// // //                   <div>
// // //                     <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // //                       <Icon className="w-8 h-8 text-black" />
// // //                     </div>
// // //                     <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    
// // //                     {/* अगर expanded नहीं है तो टेक्स्ट 2 लाइनों के बाद कट जाएगा */}
// // //                     <p className={`text-black/80 mb-4 ${isExpanded ? "" : "line-clamp-2"}`}>
// // //                       {feature.description}
// // //                     </p>
// // //                   </div>
                  
// // //                   <button
// // //                     onClick={() => setExpandedCard(isExpanded ? null : index)}
// // //                     className="mt-auto w-full bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
// // //                   >
// // //                     {isExpanded ? "Show Less" : "Learn More"}
// // //                   </button>
// // //                 </CardContent>
// // //               </Card>
// // //             );
// // //           })}
// // //         </div>

// // //         {/* Remaining Cards */}
// // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// // //           {features.slice(3).map((feature, index) => {
// // //             const Icon = feature.icon;
// // //             const actualIndex = index + 3; // बाकी कार्ड्स के लिए unique index
// // //             const isExpanded = expandedCard === actualIndex;

// // //             return (
// // //               <Card
// // //                 key={actualIndex}
// // //                 className={`bg-slate-50 w-full shadow-md hover:shadow-lg transition-all duration-300 group ${
// // //                   isExpanded ? "h-auto" : "h-56"
// // //                 }`}
// // //               >
// // //                 <CardContent className="p-6 flex flex-col h-full justify-between">
// // //                   <div>
// // //                     <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // //                       <Icon className="w-8 h-8 text-primary" />
// // //                     </div>
// // //                     <h3 className="text-xl font-semibold text-gray-900 mb-3">
// // //                       {feature.title}
// // //                     </h3>
// // //                     <p className={`text-gray-600 mb-4 ${isExpanded ? "" : "line-clamp-2"}`}>
// // //                       {feature.description}
// // //                     </p>
// // //                   </div>

// // //                   <button
// // //                     onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// // //                     className="text-sm font-medium text-[hsl(218,46%,36%)] hover:text-orange-600 self-start transition-colors"
// // //                   >
// // //                     {isExpanded ? "Show Less ↑" : "Learn More →"}
// // //                   </button>
// // //                 </CardContent>
// // //               </Card>
// // //             );
// // //           })}
// // //         </div>

// // //         {/* Auto-scrolling boxes */}
// // //         <div className="relative mb-12">
// // //           <div
// // //             ref={scrollRef}
// // //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// // //             style={{
// // //               scrollBehavior: "smooth",
// // //               borderRadius: "8px",
// // //               overflow: "hidden",
// // //             }}
// // //           >
// // //             {boxes.map((box) => (
// // //               <div
// // //                 key={box.id}
// // //                 className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4"
// // //                 style={{
// // //                   backgroundColor: box.color,
// // //                   borderRadius: "8px",
// // //                 }}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // import React, { useEffect, useRef, useState } from "react";
// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   TrendingUp,
// //   Globe,
// //   Briefcase,
// //   Heart,
// //   FileText,
// //   Users,
// //   BarChart3,
// //   Library,
// //   BookOpen,
// // } from "lucide-react";

// // const features = [
// //   {
// //     icon: Users,
// //     title: "🤝 1:1 Mentorship",
// //     description:
// //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// //   },
// //   {
// //     icon: FileText,
// //     title: "🧪 Mock Tests & Practice",
// //     description:
// //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// //   },
// //   {
// //     icon: Heart,
// //     title: "🧠 Psychological Support",
// //     description:
// //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// //   },
// //   {
// //     icon: Briefcase,
// //     title: "👩‍💼 HR & Job Assistance",
// //     description:
// //       "Get job placement support with resume building and interview preparation.",
// //   },
// //   {
// //     icon: Globe,
// //     title: "🌍 Career Guidance",
// //     description:
// //       "Explore career opportunities and choose the right path according to your interests and skills.",
// //   },
// //   {
// //     icon: TrendingUp,
// //     title: "📈 Skill Development & Training",
// //     description:
// //       "Build industry-relevant skills with hands-on training and certification programs.",
// //   },
// //   {
// //     icon: Library,
// //     title: "📚 Stream & Subject Help",
// //     description:
// //       "Get expert help in specific subjects and choose the right academic stream.",
// //   },
// // ];

// // // इमेज वाला "Personalized Study Plan" कॉम्पोनेंट
// // function PersonalizedStudyPlan() {
// //   return (
// //     <div className="w-full mt-6 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
// //       {/* Left Side: Modern Vector Illustration Recreated in CSS/SVG */}
// //       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-xl overflow-hidden">
// //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
// //         <div className="flex items-center gap-4 z-10">
// //           <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
// //             <BarChart3 className="w-10 h-10" />
// //           </div>
// //           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
// //             <FileText className="w-10 h-10" />
// //           </div>
// //           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
// //             <TrendingUp className="w-10 h-10" />
// //           </div>
// //         </div>
// //         {/* Abstract background shapes */}
// //         <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
// //         <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-50"></div>
// //       </div>

// //       {/* Right Side: Content */}
// //       <div className="w-full md:w-1/2 flex flex-col items-start text-left">
// //         <div className="flex items-center gap-2 mb-3">
// //           <span className="text-2xl">📚</span>
// //           <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase text-sm md:text-base">
// //             Personalized Study Plan
// //           </h4>
// //         </div>
        
// //         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
// //           Weak–strong subject analysis Daily + weekly target sheet PYQ based planning (especially from NEET-UG trend)
// //         </p>

// //         <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
// //           JOIN US
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export function Features() {
// //   const scrollRef = useRef<HTMLDivElement | null>(null);
// //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
// //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// //   // Generate boxes
// //   useEffect(() => {
// //     const items = Array.from({ length: 10 }, (_, i) => ({
// //       id: i,
// //       description: `Learn ${i + 1}`,
// //       color: `hsl(${i * 36}, 70%, 80%)`,
// //     }));
// //     setBoxes(items);
// //   }, []);

// //   // Auto scroll
// //   useEffect(() => {
// //     const scrollContainer = scrollRef.current;
// //     if (!scrollContainer) return;
// //     let direction = 1;
// //     const scrollStep = 1;
// //     const scrollDelay = 15;
// //     const interval = setInterval(() => {
// //       if (!scrollContainer) return;
// //       scrollContainer.scrollLeft += scrollStep * direction;
// //       if (
// //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// //         scrollContainer.scrollWidth - 1
// //       ) {
// //         direction = -1;
// //       }
// //       if (scrollContainer.scrollLeft <= 0) {
// //         direction = 1;
// //       }
// //     }, scrollDelay);
// //     return () => clearInterval(interval);
// //   }, [boxes]);

// //   // Hide scrollbar styles
// //   useEffect(() => {
// //     const styleEl = document.createElement("style");
// //     styleEl.id = "features-scrollbar-hide";
// //     styleEl.innerHTML = `
// //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// //     `;
// //     document.head.appendChild(styleEl);
// //     return () => {
// //       const existing = document.getElementById("features-scrollbar-hide");
// //       if (existing) existing.remove();
// //     };
// //   }, []);

// //   return (
// //     <section id="features" className="py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// //         {/* Section Header */}
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// //             Comprehensive Guidance for Every Student
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             From academic support to career planning, we provide everything you
// //             need to succeed in your educational journey.
// //           </p>
// //         </div>

// //         {/* Top 3 Cards */}
// //         <div className="flex flex-col gap-4 mb-12">
// //           <div className="flex flex-wrap justify-center gap-8">
// //             {features.slice(0, 3).map((feature, index) => {
// //               const Icon = feature.icon;
// //               const bgColors = [
// //                 "bg-[rgb(125,219,123)]",
// //                 "bg-[rgb(255,153,153)]",
// //                 "bg-[rgb(169,254,255)]",
// //               ];
              
// //               const isExpanded = expandedCard === index;
// //               return (
// //                 <div key={index} className="w-full md:w-[350px] flex flex-col">
// //                   <Card
// //                     className={`${bgColors[index]} text-black h-[320px] shadow-md hover:shadow-lg transition-all duration-300 group`}
// //                   >
// //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// //                       <div>
// //                         <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// //                           <Icon className="w-8 h-8 text-black" />
// //                         </div>
// //                         <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// //                         <p className="text-black/80 mb-4 line-clamp-3">
// //                           {feature.description}
// //                         </p>
// //                       </div>
                      
// //                       <button
// //                         onClick={() => setExpandedCard(isExpanded ? null : index)}
// //                         className="mt-auto w-full bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium"
// //                       >
// //                         {isExpanded ? "Show Less" : "Learn More"}
// //                       </button>
// //                     </CardContent>
// //                   </Card>
// //                 </div>
// //               );
// //             })}
// //           </div>
          
// //           {/* अगर top 3 में से कोई कार्ड सिलेक्टेड है तो यहाँ स्टडी प्लान दिखेगा */}
// //           {expandedCard !== null && expandedCard < 3 && (
// //             <PersonalizedStudyPlan />
// //           )}
// //         </div>

// //         {/* Remaining Cards */}
// //         <div className="flex flex-col gap-6 mb-16">
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {features.slice(3).map((feature, index) => {
// //               const Icon = feature.icon;
// //               const actualIndex = index + 3;
// //               const isExpanded = expandedCard === actualIndex;
// //               return (
// //                 <div key={actualIndex} className="w-full flex flex-col">
// //                   <Card
// //                     className="bg-slate-50 w-full h-64 shadow-md hover:shadow-lg transition-all duration-300 group"
// //                   >
// //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// //                       <div>
// //                         <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// //                           <Icon className="w-8 h-8 text-primary" />
// //                         </div>
// //                         <h3 className="text-xl font-semibold text-gray-900 mb-3">
// //                           {feature.title}
// //                         </h3>
// //                         <p className="text-gray-600 mb-4 line-clamp-2">
// //                           {feature.description}
// //                         </p>
// //                       </div>
// //                       <button
// //                         onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// //                         className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 self-start transition-colors flex items-center gap-1"
// //                       >
// //                         {isExpanded ? "Show Less ↑" : "Learn More →"}
// //                       </button>
// //                     </CardContent>
// //                   </Card>
// //                 </div>
// //               );
// //             })}
// //           </div>

// //           {/* अगर नीचे की ग्रिड में से कोई कार्ड सिलेक्टेड है तो उसके ठीक नीचे स्टडी प्लान दिखेगा */}
// //           {expandedCard !== null && expandedCard >= 3 && (
// //             <PersonalizedStudyPlan />
// //           )}
// //         </div>

// //         {/* Auto-scrolling boxes */}
// //         <div className="relative mb-12">
// //           <div
// //             ref={scrollRef}
// //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// //             style={{
// //               scrollBehavior: "smooth",
// //               borderRadius: "8px",
// //               overflow: "hidden",
// //             }}
// //           >
// //             {boxes.map((box) => (
// //               <div
// //                 key={box.id}
// //                 className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4"
// //                 style={{
// //                   backgroundColor: box.color,
// //                   borderRadius: "8px",
// //                 }}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }



// // import React, { useEffect, useRef, useState } from "react";
// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   TrendingUp,
// //   Globe,
// //   Briefcase,
// //   Heart,
// //   FileText,
// //   Users,
// //   BarChart3,
// //   Library,
// // } from "lucide-react";

// // const features = [
// //   {
// //     icon: Users,
// //     title: "🤝 1:1 Mentorship",
// //     description:
// //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// //   },
// //   {
// //     icon: FileText,
// //     title: "🧪 Mock Tests & Practice",
// //     description:
// //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// //   },
// //   {
// //     icon: Heart,
// //     title: "🧠 Psychological Support",
// //     description:
// //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// //   },
// //   {
// //     icon: Briefcase,
// //     title: "👩‍💼 HR & Job Assistance",
// //     description:
// //       "Get job placement support with resume building and interview preparation.",
// //   },
// //   {
// //     icon: Globe,
// //     title: "🌍 Career Guidance",
// //     description:
// //       "Explore career opportunities and choose the right path according to your interests and skills.",
// //   },
// //   {
// //     icon: TrendingUp,
// //     title: "📈 Skill Development & Training",
// //     description:
// //       "Build industry-relevant skills with hands-on training and certification programs.",
// //   },
// //   {
// //     icon: Library,
// //     title: "📚 Stream & Subject Help",
// //     description:
// //       "Get expert help in specific subjects and choose the right academic stream.",
// //   },
// // ];

// // // अलग-अलग कार्ड्स के लिए अलग-अलग कंटेंट (Different Matter)
// // const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
// //   0: {
// //     title: "Personalized Study Plan",
// //     desc: "Weak–strong subject analysis Daily + weekly target sheet PYQ based planning (especially from NEET-UG trend)",
// //     icon: "📚",
// //   },
// //   1: {
// //     title: "Test Series & Evaluation",
// //     desc: "All India Rank analysis, mistake log tracking, time-management sheets, and customized revision tests.",
// //     icon: "🧪",
// //   },
// //   2: {
// //     title: "Mindset & Motivation Plan",
// //     desc: "Weekly stress-buster sessions, 1:1 interaction with counselors, and customized schedules to avoid burnout.",
// //     icon: "🧠",
// //   },
// //   3: {
// //     title: "Placement Preparation Toolkit",
// //     desc: "Resume review, live mock HR interviews, industry-specific soft skill training, and direct referral opportunities.",
// //     icon: "💼",
// //   },
// //   4: {
// //     title: "Global Career Roadmap",
// //     desc: "In-depth profile building for global markets, profile enhancement advice, and university selection support.",
// //     icon: "🌍",
// //   },
// //   5: {
// //     title: "Advanced Tech & Skills Training",
// //     desc: "Hands-on capstone projects, cohort-based learning, industry mentorship, and verified portfolio building.",
// //     icon: "📈",
// //   },
// //   6: {
// //     title: "Academic Stream Roadmap",
// //     desc: "Subject combination advisor, continuous track evaluation, and specific curriculum help with top faculties.",
// //   },
// // };

// // // डायनेमिक कंटेंट वाला Study Plan बॉक्स कॉम्पोनेंट
// // function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
// //   // अगर उस इंडेक्स का डेटा नहीं मिलता तो डिफ़ॉल्ट डेटा दिखाएगा
// //   const data = studyPlanData[activeIndex] || studyPlanData[0];

// //   return (
// //     <div className="w-full mt-6 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
// //       {/* Left Side: Modern Interactive Vectors */}
// //       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-xl overflow-hidden">
// //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
// //         <div className="flex items-center gap-4 z-10">
// //           <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
// //             <BarChart3 className="w-10 h-10" />
// //           </div>
// //           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
// //             <FileText className="w-10 h-10" />
// //           </div>
// //           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
// //             <TrendingUp className="w-10 h-10" />
// //           </div>
// //         </div>
// //         <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
// //         <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-50"></div>
// //       </div>

// //       {/* Right Side: Dynamic Content based on active card */}
// //       <div className="w-full md:w-1/2 flex flex-col items-start text-left">
// //         <div className="flex items-center gap-2 mb-3">
// //           <span className="text-2xl">{data.icon}</span>
// //           <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase text-sm md:text-base">
// //             {data.title}
// //           </h4>
// //         </div>
        
// //         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
// //           {data.desc}
// //         </p>

// //         <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
// //           JOIN US
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export function Features() {
// //   const scrollRef = useRef<HTMLDivElement | null>(null);
// //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
  
// //   // डिफ़ॉल्ट रूप से 0 (पहला कार्ड) ओपन रहेगा
// //   const [expandedCard, setExpandedCard] = useState<number | null>(0);

// //   // Generate boxes
// //   useEffect(() => {
// //     const items = Array.from({ length: 10 }, (_, i) => ({
// //       id: i,
// //       description: `Learn ${i + 1}`,
// //       color: `hsl(${i * 36}, 70%, 80%)`,
// //     }));
// //     setBoxes(items);
// //   }, []);

// //   // Auto scroll
// //   useEffect(() => {
// //     const scrollContainer = scrollRef.current;
// //     if (!scrollContainer) return;
// //     let direction = 1;
// //     const scrollStep = 1;
// //     const scrollDelay = 15;
// //     const interval = setInterval(() => {
// //       if (!scrollContainer) return;
// //       scrollContainer.scrollLeft += scrollStep * direction;
// //       if (
// //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// //         scrollContainer.scrollWidth - 1
// //       ) {
// //         direction = -1;
// //       }
// //       if (scrollContainer.scrollLeft <= 0) {
// //         direction = 1;
// //       }
// //     }, scrollDelay);
// //     return () => clearInterval(interval);
// //   }, [boxes]);

// //   // Hide scrollbar styles
// //   useEffect(() => {
// //     const styleEl = document.createElement("style");
// //     styleEl.id = "features-scrollbar-hide";
// //     styleEl.innerHTML = `
// //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// //     `;
// //     document.head.appendChild(styleEl);
// //     return () => {
// //       const existing = document.getElementById("features-scrollbar-hide");
// //       if (existing) existing.remove();
// //     };
// //   }, []);

// //   return (
// //     <section id="features" className="py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// //         {/* Section Header */}
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// //             Comprehensive Guidance for Every Student
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             From academic support to career planning, we provide everything you
// //             need to succeed in your educational journey.
// //           </p>
// //         </div>

// //         {/* Top 3 Cards Row */}
// //         <div className="flex flex-col gap-4 mb-12">
// //           <div className="flex flex-wrap justify-center gap-8">
// //             {features.slice(0, 3).map((feature, index) => {
// //               const Icon = feature.icon;
// //               const bgColors = [
// //                 "bg-[rgb(125,219,123)]",
// //                 "bg-[rgb(255,153,153)]",
// //                 "bg-[rgb(169,254,255)]",
// //               ];
              
// //               const isExpanded = expandedCard === index;
// //               return (
// //                 <div key={index} className="w-full md:w-[350px] flex flex-col">
// //                   <Card
// //                     className={`${bgColors[index]} text-black h-[320px] shadow-md hover:shadow-lg transition-all duration-300 group ${
// //                       isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""
// //                     }`}
// //                   >
// //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// //                       <div>
// //                         <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// //                           <Icon className="w-8 h-8 text-black" />
// //                         </div>
// //                         <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// //                         <p className="text-black/80 mb-4 line-clamp-3">
// //                           {feature.description}
// //                         </p>
// //                       </div>
                      
// //                       <button
// //                         onClick={() => setExpandedCard(isExpanded ? null : index)}
// //                         className={`mt-auto w-full px-4 py-2 rounded-md transition-colors font-medium ${
// //                           isExpanded 
// //                             ? "bg-black text-white hover:bg-gray-800" 
// //                             : "bg-[hsl(218,46%,36%)] text-white hover:bg-orange-600"
// //                         }`}
// //                       >
// //                         {isExpanded ? "Show Less" : "Learn More"}
// //                       </button>
// //                     </CardContent>
// //                   </Card>
// //                 </div>
// //               );
// //             })}
// //           </div>
          
// //           {/* Top 3 में से कोई सिलेक्टेड है तो यहाँ रेंडर होगा */}
// //           {expandedCard !== null && expandedCard < 3 && (
// //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// //           )}
// //         </div>

// //         {/* Remaining Cards Row */}
// //         <div className="flex flex-col gap-6 mb-16">
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {features.slice(3).map((feature, index) => {
// //               const Icon = feature.icon;
// //               const actualIndex = index + 3;
// //               const isExpanded = expandedCard === actualIndex;
// //               return (
// //                 <div key={actualIndex} className="w-full flex flex-col">
// //                   <Card
// //                     className={`bg-slate-50 w-full h-64 shadow-md hover:shadow-lg transition-all duration-300 group ${
// //                       isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""
// //                     }`}
// //                   >
// //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// //                       <div>
// //                         <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// //                           <Icon className="w-8 h-8 text-primary" />
// //                         </div>
// //                         <h3 className="text-xl font-semibold text-gray-900 mb-3">
// //                           {feature.title}
// //                         </h3>
// //                         <p className="text-gray-600 mb-4 line-clamp-2">
// //                           {feature.description}
// //                         </p>
// //                       </div>
// //                       <button
// //                         onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// //                         className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 self-start transition-colors flex items-center gap-1"
// //                       >
// //                         {isExpanded ? "Show Less ↑" : "Learn More →"}
// //                       </button>
// //                     </CardContent>
// //                   </Card>
// //                 </div>
// //               );
// //             })}
// //           </div>

// //           {/* नीचे वाली Row में से कोई सिलेक्टेड है तो यहाँ रेंडर होगा */}
// //           {expandedCard !== null && expandedCard >= 3 && (
// //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// //           )}
// //         </div>

// //         {/* Auto-scrolling boxes */}
// //         <div className="relative mb-12">
// //           <div
// //             ref={scrollRef}
// //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// //             style={{
// //               scrollBehavior: "smooth",
// //               borderRadius: "8px",
// //               overflow: "hidden",
// //             }}
// //           >
// //             {boxes.map((box) => (
// //               <div
// //                 key={box.id}
// //                 className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4"
// //                 style={{
// //                   backgroundColor: box.color,
// //                   borderRadius: "8px",
// //                 }}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }



// // import React, { useEffect, useRef, useState } from "react";
// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   TrendingUp,
// //   Globe,
// //   Briefcase,
// //   Heart,
// //   FileText,
// //   Users,
// //   BarChart3,
// //   Library,
// // } from "lucide-react";

// // const features = [
// //   {
// //     icon: Users,
// //     title: "🤝 1:1 Mentorship",
// //     description:
// //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// //   },
// //   {
// //     icon: FileText,
// //     title: "🧪 Mock Tests & Practice",
// //     description:
// //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// //   },
// //   {
// //     icon: Heart,
// //     title: "🧠 Psychological Support",
// //     description:
// //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// //   },
// //   {
// //     icon: Briefcase,
// //     title: "👩‍💼 HR & Job Assistance",
// //     description:
// //       "Get job placement support with resume building and interview preparation.",
// //   },
// //   {
// //     icon: Globe,
// //     title: "🌍 Career Guidance",
// //     description:
// //       "Explore career opportunities and choose the right path according to your interests and skills.",
// //   },
// //   {
// //     icon: TrendingUp,
// //     title: "📈 Skill Development & Training",
// //     description:
// //       "Build industry-relevant skills with hands-on training and certification programs.",
// //   },
// //   {
// //     icon: Library,
// //     title: "📚 Stream & Subject Help",
// //     description:
// //       "Get expert help in specific subjects and choose the right academic stream.",
// //   },
// // ];


// // const goals = [
// //     "Learn Maths",
// //     "Learn English",
// //     "Science",
// //     "GK",
// //     "JNV Entrance",
// //     "KVS",
// //     "Sainik School",
// //     "Olympiad",
// //   ];

// // // अलग-अलग कार्ड्स के लिए अलग-अलग कंटेंट (Different Matter)
// // const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
// //   0: {
// //     title: "Personalized Study Plan",
// //     desc: "Weak–strong subject analysis Daily + weekly target sheet PYQ based planning (especially from NEET-UG trend)",
// //     icon: "📚",
// //   },
// //   1: {
// //     title: "Test Series & Evaluation",
// //     desc: "All India Rank analysis, mistake log tracking, time-management sheets, and customized revision tests.",
// //     icon: "🧪",
// //   },
// //   2: {
// //     title: "Mindset & Motivation Plan",
// //     desc: "Weekly stress-buster sessions, 1:1 interaction with counselors, and customized schedules to avoid burnout.",
// //     icon: "🧠",
// //   },
// //   3: {
// //     title: "Placement Preparation Toolkit",
// //     desc: "Resume review, live mock HR interviews, industry-specific soft skill training, and direct referral opportunities.",
// //     icon: "💼",
// //   },
// //   4: {
// //     title: "Global Career Roadmap",
// //     desc: "In-depth profile building for global markets, profile enhancement advice, and university selection support.",
// //     icon: "🌍",
// //   },
// //   5: {
// //     title: "Advanced Tech & Skills Training",
// //     desc: "Hands-on capstone projects, cohort-based learning, industry mentorship, and verified portfolio building.",
// //     icon: "📈",
// //   },
// //   6: {
// //     title: "Academic Stream Roadmap",
// //     desc: "Subject combination advisor, continuous track evaluation, and specific curriculum help with top faculties.",
// //     icon: "📚",
// //   },
// // };

// // // डायनेमिक कंटेंट वाला Study Plan बॉक्स कॉम्पोनेंट
// // function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
// //   const data = studyPlanData[activeIndex] || studyPlanData[0];

// //   return (
// //     <div className="w-full mt-6 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
// //       {/* Left Side: Modern Interactive Vectors */}
// //       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-xl overflow-hidden">
// //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
// //         <div className="flex items-center gap-4 z-10">
// //           <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
// //             <BarChart3 className="w-10 h-10" />
// //           </div>
// //           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
// //             <FileText className="w-10 h-10" />
// //           </div>
// //           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
// //             <TrendingUp className="w-10 h-10" />
// //           </div>
// //         </div>
// //         <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
// //         <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-50"></div>
// //       </div>

// //       {/* Right Side: Dynamic Content based on active card */}
// //       <div className="w-full md:w-1/2 flex flex-col items-start text-left">
// //         <div className="flex items-center gap-2 mb-3">
// //           <span className="text-2xl">{data.icon}</span>
// //           <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase text-sm md:text-base">
// //             {data.title}
// //           </h4>
// //         </div>
        
// //         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
// //           {data.desc}
// //         </p>

// //         <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
// //           JOIN US
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export function Features() {
// //   const scrollRef = useRef<HTMLDivElement | null>(null);
// //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
  
// //   // यहाँ default वैल्यू को null सेट किया है ताकि शुरुआत में कुछ भी ओपन न रहे
// //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// //   // Generate boxes
// //   useEffect(() => {
// //     const items = Array.from({ length: 10 }, (_, i) => ({
// //       id: i,
// //       description: `Learn ${i + 1}`,
// //       color: `hsl(${i * 36}, 70%, 80%)`,
// //     }));
// //     setBoxes(items);
// //   }, []);

// //   // Auto scroll
// //   useEffect(() => {
// //     const scrollContainer = scrollRef.current;
// //     if (!scrollContainer) return;
// //     let direction = 1;
// //     const scrollStep = 1;
// //     const scrollDelay = 15;
// //     const interval = setInterval(() => {
// //       if (!scrollContainer) return;
// //       scrollContainer.scrollLeft += scrollStep * direction;
// //       if (
// //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// //         scrollContainer.scrollWidth - 1
// //       ) {
// //         direction = -1;
// //       }
// //       if (scrollContainer.scrollLeft <= 0) {
// //         direction = 1;
// //       }
// //     }, scrollDelay);
// //     return () => clearInterval(interval);
// //   }, [boxes]);

// //   // Hide scrollbar styles
// //   useEffect(() => {
// //     const styleEl = document.createElement("style");
// //     styleEl.id = "features-scrollbar-hide";
// //     styleEl.innerHTML = `
// //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// //     `;
// //     document.head.appendChild(styleEl);
// //     return () => {
// //       const existing = document.getElementById("features-scrollbar-hide");
// //       if (existing) existing.remove();
// //     };
// //   }, []);

// //   return (
// //     <section id="features" className="py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// //         {/* Section Header */}
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// //             Comprehensive Guidance for Every Student
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             From academic support to career planning, we provide everything you
// //             need to succeed in your educational journey.
// //           </p>
// //         </div>

// //         {/* Top 3 Cards Row */}
// //         <div className="flex flex-col gap-4 mb-12">
// //           <div className="flex flex-wrap justify-center gap-8">
// //             {features.slice(0, 3).map((feature, index) => {
// //               const Icon = feature.icon;
// //               const bgColors = [
// //                 "bg-[rgb(125,219,123)]",
// //                 "bg-[rgb(255,153,153)]",
// //                 "bg-[rgb(169,254,255)]",
// //               ];
              
// //               const isExpanded = expandedCard === index;
// //               return (
// //                 <div key={index} className="w-full md:w-[350px] flex flex-col">
// //                   <Card
// //                     className={`${bgColors[index]} text-black h-[320px] shadow-md hover:shadow-lg transition-all duration-300 group ${
// //                       isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""
// //                     }`}
// //                   >
// //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// //                       <div>
// //                         <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// //                           <Icon className="w-8 h-8 text-black" />
// //                         </div>
// //                         <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// //                         <p className="text-black/80 mb-4 line-clamp-3">
// //                           {feature.description}
// //                         </p>
// //                       </div>
                      
// //                       <button
// //                         onClick={() => setExpandedCard(isExpanded ? null : index)}
// //                         className={`mt-auto w-full px-4 py-2 rounded-md transition-colors font-medium ${
// //                           isExpanded 
// //                             ? "bg-black text-white hover:bg-gray-800" 
// //                             : "bg-[hsl(218,46%,36%)] text-white hover:bg-orange-600"
// //                         }`}
// //                       >
// //                         {isExpanded ? "Show Less" : "Learn More"}
// //                       </button>
// //                     </CardContent>
// //                   </Card>
// //                 </div>
// //               );
// //             })}
// //           </div>
          
// //           {/* सिर्फ क्लिक करने पर ही दिखेगा */}
// //           {expandedCard !== null && expandedCard < 3 && (
// //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// //           )}
// //         </div>

// //         {/* Remaining Cards Row */}
// //   <div style={{ display: "flex", justifyContent: "center",
// //      padding: "20px" }}>
 

// //       <button
// //         style={{
// //              width: "350px",
// //           padding: "12px 24px",
// //           borderRadius: "8px",
// //           border: "none",
// //           backgroundColor: "#5B3EC6",
// //           color: "#fff",
// //           cursor: "pointer",
// //         }}
// //       >
// //       Select Your Learning Goal
// //       </button>
// //     </div>

// //   <div className=" flex justify-center items-center p-6">
// //       <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
        
// //         {/* Title */}
// //         <h1 className="text-3xl font-bold text-center mb-10">
// //           Class 1 to 5
// //         </h1>

// //         {/* Cards */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {goals.map((goal, index) => (
// //             <div
// //               key={index}
// //               className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300"
// //             >
// //               {goal}
// //             </div>
// //           ))}
// //         </div>

// //         {/* Bottom Button */}
// //         {/* <div className="flex justify-center mt-10">
// //           <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-10 py-4 rounded-full text-lg w-full max-w-xl transition">
// //             Find Your Local Tutor For Home Tuition
// //           </button>
// //         </div> */}
// //       </div>
// //     </div>

// //         <div className="flex flex-col gap-6 mb-16">
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {features.slice(3).map((feature, index) => {
// //               const Icon = feature.icon;
// //               const actualIndex = index + 3;
// //               const isExpanded = expandedCard === actualIndex;
// //               return (
// //                 <div key={actualIndex} className="w-full flex flex-col">
// //                   <Card
// //                     className={`bg-slate-50 w-full h-64 shadow-md hover:shadow-lg transition-all duration-300 group ${
// //                       isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""
// //                     }`}
// //                   >
// //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// //                       <div>
// //                         <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// //                           <Icon className="w-8 h-8 text-primary" />
// //                         </div>
// //                         <h3 className="text-xl font-semibold text-gray-900 mb-3">
// //                           {feature.title}
// //                         </h3>
// //                         <p className="text-gray-600 mb-4 line-clamp-2">
// //                           {feature.description}
// //                         </p>
// //                       </div>
// //                       <button
// //                         onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// //                         className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 self-start transition-colors flex items-center gap-1"
// //                       >
// //                         {isExpanded ? "Show Less ↑" : "Learn More →"}
// //                       </button>
// //                     </CardContent>
// //                   </Card>
// //                 </div>
// //               );
// //             })}
// //           </div>

// //           {/* सिर्फ क्लिक करने पर ही दिखेगा */}
// //           {expandedCard !== null && expandedCard >= 3 && (
// //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// //           )}
// //         </div>

// //         {/* Auto-scrolling boxes */}
// //         <div className="relative mb-12">
// //           <div
// //             ref={scrollRef}
// //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// //             style={{
// //               scrollBehavior: "smooth",
// //               borderRadius: "8px",
// //               overflow: "hidden",
// //             }}
// //           >
// //             {boxes.map((box) => (
// //               <div
// //                 key={box.id}
// //                 className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4"
// //                 style={{
// //                   backgroundColor: box.color,
// //                   borderRadius: "8px",
// //                 }}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }









// // import React, { useEffect, useRef, useState } from "react";
// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   TrendingUp,
// //   Globe,
// //   Briefcase,
// //   Heart,
// //   FileText,
// //   Users,
// //   BarChart3,
// //   Library,
// // } from "lucide-react";

// // const features = [
// //   {
// //     icon: Users,
// //     title: "🤝 1:1 Mentorship",
// //     description:
// //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// //   },
// //   {
// //     icon: FileText,
// //     title: "🧪 Mock Tests & Practice",
// //     description:
// //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// //   },
// //   {
// //     icon: Heart,
// //     title: "🧠 Psychological Support",
// //     description:
// //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// //   },
// //   {
// //     icon: Briefcase,
// //     title: "👩‍💼 Class 6",
// //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// //   },
// //   {
// //     icon: Globe,
// //     title: "👩‍💼 Class 7",
// //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// //   },
// //   {
// //     icon: TrendingUp,
// //     title: "👩‍💼 Class 8",
// //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// //   },
// //   {
// //     icon: Library,
// //     title: "👩‍💼 Class 9",
// //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// //   },
// //   {
// //     icon: Library,
// //     title: "👩‍💼 Class 10",
// //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// //   },
// //   {
// //     icon: Library,
// //     title: "🏆 Olympiad",
// //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// //   },
// // ];

// // const goals = [
// //   "Learn Maths",
// //   "Learn English",
// //   "Science",
// //   "GK",
// //   "JNV Entrance",
// //   "KVS",
// //   "Sainik School",
// //   "Olympiad",
// // ];

// // const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
// //   0: {
// //     title: "Personalized Study Plan",
// //     desc: "Weak–strong subject analysis Daily + weekly target sheet PYQ based planning (especially from NEET-UG trend)",
// //     icon: "📚",
// //   },
// //   1: {
// //     title: "Test Series & Evaluation",
// //     desc: "All India Rank analysis, mistake log tracking, time-management sheets, and customized revision tests.",
// //     icon: "🧪",
// //   },
// //   2: {
// //     title: "Mindset & Motivation Plan",
// //     desc: "Weekly stress-buster sessions, 1:1 interaction with counselors, and customized schedules to avoid burnout.",
// //     icon: "🧠",
// //   },
// //   3: {
// //     title: "Placement Preparation Toolkit",
// //     desc: "Resume review, live mock HR interviews, industry-specific soft skill training, and direct referral opportunities.",
// //     icon: "💼",
// //   },
// //   4: {
// //     title: "Global Career Roadmap",
// //     desc: "In-depth profile building for global markets, profile enhancement advice, and university selection support.",
// //     icon: "🌍",
// //   },
// //   5: {
// //     title: "Advanced Tech & Skills Training",
// //     desc: "Hands-on capstone projects, cohort-based learning, industry mentorship, and verified portfolio building.",
// //     icon: "📈",
// //   },
// //   6: {
// //     title: "Academic Stream Roadmap",
// //     desc: "Subject combination advisor, continuous track evaluation, and specific curriculum help with top faculties.",
// //     icon: "📚",
// //   },
// // };

// // function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
// //   const data = studyPlanData[activeIndex] || studyPlanData[0];

// //   return (
// //     <div className="w-full mt-6 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
// //       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-xl overflow-hidden">
// //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
// //         <div className="flex items-center gap-4 z-10">
// //           <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
// //             <BarChart3 className="w-10 h-10" />
// //           </div>
// //           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
// //             <FileText className="w-10 h-10" />
// //           </div>
// //           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
// //             <TrendingUp className="w-10 h-10" />
// //           </div>
// //         </div>
// //       </div>

// //       <div className="w-full md:w-1/2 flex flex-col items-start text-left">
// //         <div className="flex items-center gap-2 mb-3">
// //           <span className="text-2xl">{data.icon}</span>
// //           <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase text-sm md:text-base">
// //             {data.title}
// //           </h4>
// //         </div>
// //         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
// //           {data.desc}
// //         </p>
// //         <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
// //           JOIN US
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export function Features() {
// //   const scrollRef = useRef<HTMLDivElement | null>(null);
// //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
// //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// //   useEffect(() => {
// //     const items = Array.from({ length: 10 }, (_, i) => ({
// //       id: i,
// //       description: `Learn ${i + 1}`,
// //       color: `hsl(${i * 36}, 70%, 80%)`,
// //     }));
// //     setBoxes(items);
// //   }, []);

// //   useEffect(() => {
// //     const scrollContainer = scrollRef.current;
// //     if (!scrollContainer) return;
// //     let direction = 1;
// //     const scrollStep = 1;
// //     const scrollDelay = 15;
// //     const interval = setInterval(() => {
// //       if (!scrollContainer) return;
// //       scrollContainer.scrollLeft += scrollStep * direction;
// //       if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
// //         direction = -1;
// //       }
// //       if (scrollContainer.scrollLeft <= 0) {
// //         direction = 1;
// //       }
// //     }, scrollDelay);
// //     return () => clearInterval(interval);
// //   }, [boxes]);

// //   return (
// //     <section id="features" className="py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// //             Comprehensive Guidance for Every Student
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             From academic support to career planning, we provide everything you need to succeed in your educational journey.
// //           </p>
// //         </div>

// //         {/* Top 3 Cards Row */}
// //         <div className="flex flex-col gap-4 mb-12">
// //           <div className="flex flex-wrap justify-center gap-8">
// //             {features.slice(0, 3).map((feature, index) => {
// //               const Icon = feature.icon;
// //               const bgColors = ["bg-[rgb(125,219,123)]", "bg-[rgb(255,153,153)]", "bg-[rgb(169,254,255)]"];
// //               const isExpanded = expandedCard === index;
              
// //               return (
// //                 <div key={index} className="w-full md:w-[350px] flex flex-col">
// //                   <Card className={`${bgColors[index]} text-black h-[320px] shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
// //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// //                       <div>
// //                         <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// //                           <Icon className="w-8 h-8 text-black" />
// //                         </div>
// //                         <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// //                         <p className="text-black/80 mb-4 line-clamp-3 whitespace-pre-line">
// //                           {feature.description}
// //                         </p>
// //                       </div>
// //                       <button
// //                         onClick={() => setExpandedCard(isExpanded ? null : index)}
// //                         className={`mt-auto w-full px-4 py-2 rounded-md transition-colors font-medium ${isExpanded ? "bg-black text-white hover:bg-gray-800" : "bg-[hsl(218,46%,36%)] text-white hover:bg-orange-600"}`}
// //                       >
// //                         {isExpanded ? "Show Less" : "Learn More"}
// //                       </button>
// //                     </CardContent>
// //                   </Card>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //           {expandedCard !== null && expandedCard < 3 && <PersonalizedStudyPlan activeIndex={expandedCard} />}
// //         </div>

// //         {/* Learning Goals Section */}
// //         <div className="flex justify-center mb-6">
// //           <button className="w-[350px] rounded-lg border-none bg-[#5B3EC6] text-white cursor-pointer py-3 px-6 font-semibold shadow-md hover:bg-[#4a30a8] transition-colors">
// //             Select Your Learning Goal
// //           </button>
// //         </div>

// //         {/* Class 1 to 5 Box */}
// //         <div className="flex justify-center items-center p-6 mb-6">
// //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// //             <h1 className="text-3xl font-bold text-center mb-10">Class 1 to 5</h1>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //               {goals.map((goal, index) => (
// //                 <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
// //                   {goal}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Class 6 to 10 Box (Exactly Same Structure) */}
// //         {/* <div className="flex justify-center items-center p-6 mb-12">
// //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// //             <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //               {goals.map((goal, index) => (
// //                 <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
// //                   {goal}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div> */}

// //         {/* Remaining Cards Row (Class 6, 7, 8, 9, 10, Olympiad) */}

// //         <div className="flex justify-center items-center p-6 mb-12">
// //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// //             <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
// //         <div className="flex flex-col gap-6 mb-16">
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {features.slice(3).map((feature, index) => {
// //               const Icon = feature.icon;
// //               const actualIndex = index + 3;
// //               const isExpanded = expandedCard === actualIndex;
// //               return (
// //                 <div key={actualIndex} className="w-full flex">
// //                   <Card className={`bg-slate-50 w-full h-auto min-h-[340px] flex flex-col shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
// //                     <CardContent className="p-6 flex flex-col flex-grow justify-between">
// //                       <div>
// //                         <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
// //                           <Icon className="w-6 h-6 text-primary" />
// //                         </div>
// //                         <h3 className="text-xl font-bold text-gray-900 mb-3">
// //                           {feature.title}
// //                         </h3>
// //                         <p className="text-gray-700 mb-4 text-sm whitespace-pre-line leading-relaxed font-medium bg-white/50 p-3 rounded-xl border border-gray-100">
// //                           {feature.description}
// //                         </p>
// //                       </div>
// //                       <button
// //                         onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// //                         className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 mt-2 transition-colors flex items-center gap-1 self-start"
// //                       >
// //                         {isExpanded ? "Show Less ↑" : "Learn More →"}
// //                       </button>
// //                     </CardContent>
// //                   </Card>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //           </div>
// //           </div>

// //           {expandedCard !== null && expandedCard >= 3 && (
// //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// //           )}
// //         </div>


// // ////////class 11 to 12 box (Same Structure) *




// //  {/* <div className="flex justify-center items-center p-6 mb-12">
// //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// //             <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //               {goals.map((goal, index) => (
// //                 <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
// //                   {goal}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>  */}
// //         {/* Auto Scrolling boxes */}
// //         <div className="relative mb-12">
// //           <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg" style={{ scrollBehavior: "smooth" }}>
// //             {boxes.map((box) => (
// //               <div key={box.id} className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4" style={{ backgroundColor: box.color, borderRadius: "8px" }} />
// //             ))}
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }






// import React, { useEffect, useRef, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   TrendingUp,
//   Globe,
//   Briefcase,
//   Heart,
//   FileText,
//   Users,
//   BarChart3,
//   Library,
// } from "lucide-react";

// const features = [
//   {
//     icon: Users,
//     title: "🤝 1:1 Mentorship",
//     description:
//       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
//   },
//   {
//     icon: FileText,
//     title: "🧪 Mock Tests & Practice",
//     description:
//       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
//   },
//   {
//     icon: Heart,
//     title: "🧠 Psychological Support",
//     description:
//       "Mental health support, stress management, and counseling for academic and personal challenges.",
//   },
//   {
//     icon: Briefcase,
//     title: "👩‍💼 Class 6",
//     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
//   },
//   {
//     icon: Globe,
//     title: "👩‍💼 Class 7",
//     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
//   },
//   {
//     icon: TrendingUp,
//     title: "👩‍💼 Class 8",
//     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
//   },
//   {
//     icon: Library,
//     title: "👩‍💼 Class 9",
//     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
//   },
//   {
//     icon: Library,
//     title: "👩‍💼 Class 10",
//     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
//   },
//   {
//     icon: Library,
//     title: "🏆 Olympiad",
//     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
//   },
// ];

// const goals = [
//   "Learn Maths",
//   "Learn English",
//   "Science",
//   "GK",
//   "JNV Entrance",
//   "KVS",
//   "Sainik School",
//   "Olympiad",
// ];

// const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
//   0: {
//     title: "Personalized Study Plan",
//     desc: "Weak–strong subject analysis Daily + weekly target sheet PYQ based planning (especially from NEET-UG trend)",
//     icon: "📚",
//   },
//   1: {
//     title: "Test Series & Evaluation",
//     desc: "All India Rank analysis, mistake log tracking, time-management sheets, and customized revision tests.",
//     icon: "🧪",
//   },
//   2: {
//     title: "Mindset & Motivation Plan",
//     desc: "Weekly stress-buster sessions, 1:1 interaction with counselors, and customized schedules to avoid burnout.",
//     icon: "🧠",
//   },
//   3: {
//     title: "Placement Preparation Toolkit",
//     desc: "Resume review, live mock HR interviews, industry-specific soft skill training, and direct referral opportunities.",
//     icon: "💼",
//   },
//   4: {
//     title: "Global Career Roadmap",
//     desc: "In-depth profile building for global markets, profile enhancement advice, and university selection support.",
//     icon: "🌍",
//   },
//   5: {
//     title: "Advanced Tech & Skills Training",
//     desc: "Hands-on capstone projects, cohort-based learning, industry mentorship, and verified portfolio building.",
//     icon: "📈",
//   },
//   6: {
//     title: "Academic Stream Roadmap",
//     desc: "Subject combination advisor, continuous track evaluation, and specific curriculum help with top faculties.",
//     icon: "📚",
//   },
// };

// function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
//   const data = studyPlanData[activeIndex] || studyPlanData[0];

//   return (
//     <div className="w-full mt-6 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
//       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-xl overflow-hidden">
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
//         <div className="flex items-center gap-4 z-10">
//           <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
//             <BarChart3 className="w-10 h-10" />
//           </div>
//           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
//             <FileText className="w-10 h-10" />
//           </div>
//           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
//             <TrendingUp className="w-10 h-10" />
//           </div>
//         </div>
//       </div>

//       <div className="w-full md:w-1/2 flex flex-col items-start text-left">
//         <div className="flex items-center gap-2 mb-3">
//           <span className="text-2xl">{data.icon}</span>
//           <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase text-sm md:text-base">
//             {data.title}
//           </h4>
//         </div>
//         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
//           {data.desc}
//         </p>
//         <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
//           JOIN US
//         </button>
//       </div>
//     </div>
//   );
// }

// export function Features() {
//   const scrollRef = useRef<HTMLDivElement | null>(null);
//   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);

//   useEffect(() => {
//     const items = Array.from({ length: 10 }, (_, i) => ({
//       id: i,
//       description: `Learn ${i + 1}`,
//       color: `hsl(${i * 36}, 70%, 80%)`,
//     }));
//     setBoxes(items);
//   }, []);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;
//     let direction = 1;
//     const scrollStep = 1;
//     const scrollDelay = 15;
//     const interval = setInterval(() => {
//       if (!scrollContainer) return;
//       scrollContainer.scrollLeft += scrollStep * direction;
//       if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
//         direction = -1;
//       }
//       if (scrollContainer.scrollLeft <= 0) {
//         direction = 1;
//       }
//     }, scrollDelay);
//     return () => clearInterval(interval);
//   }, [boxes]);

//   return (
//     <section id="features" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Comprehensive Guidance for Every Student
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             From academic support to career planning, we provide everything you need to succeed in your educational journey.
//           </p>
//         </div>

//         {/* Top 3 Cards Row */}
//         <div className="flex flex-col gap-4 mb-12">
//           <div className="flex flex-wrap justify-center gap-8">
//             {features.slice(0, 3).map((feature, index) => {
//               const Icon = feature.icon;
//               const bgColors = ["bg-[rgb(125,219,123)]", "bg-[rgb(255,153,153)]", "bg-[rgb(169,254,255)]"];
//               const isExpanded = expandedCard === index;
              
//               return (
//                 <div key={index} className="w-full md:w-[350px] flex flex-col">
//                   <Card className={`${bgColors[index]} text-black h-[320px] shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
//                     <CardContent className="p-6 flex flex-col h-full justify-between">
//                       <div>
//                         <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
//                           <Icon className="w-8 h-8 text-black" />
//                         </div>
//                         <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
//                         <p className="text-black/80 mb-4 line-clamp-3 whitespace-pre-line">
//                           {feature.description}
//                         </p>
//                       </div>
//                       <button
//                         onClick={() => setExpandedCard(isExpanded ? null : index)}
//                         className={`mt-auto w-full px-4 py-2 rounded-md transition-colors font-medium ${isExpanded ? "bg-black text-white hover:bg-gray-800" : "bg-[hsl(218,46%,36%)] text-white hover:bg-orange-600"}`}
//                       >
//                         {isExpanded ? "Show Less" : "Learn More"}
//                       </button>
//                     </CardContent>
//                   </Card>
//                 </div>
//               );
//             })}
//           </div>
//           {expandedCard !== null && expandedCard < 3 && <PersonalizedStudyPlan activeIndex={expandedCard} />}
//         </div>

//         {/* Learning Goals Section */}
//         <div className="flex justify-center mb-6">
//           <button className="w-[350px] rounded-lg border-none bg-[#5B3EC6] text-white cursor-pointer py-3 px-6 font-semibold shadow-md hover:bg-[#4a30a8] transition-colors">
//             Select Your Learning Goal
//           </button>
//         </div>

//         {/* Class 1 to 5 Box */}
//         <div className="flex justify-center items-center p-6 mb-6">
//           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
//             <h1 className="text-3xl font-bold text-center mb-10">Class 1 to 5</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {goals.map((goal, index) => (
//                 <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
//                   {goal}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Class 6 to 10 Box (Exactly Same Structure) */}
//         {/* <div className="flex justify-center items-center p-6 mb-12">
//           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
//             <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {goals.map((goal, index) => (
//                 <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
//                   {goal}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div> */}

//         {/* Remaining Cards Row (Class 6, 7, 8, 9, 10, Olympiad) */}

//         <div className="flex justify-center items-center p-6 mb-12">
//           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
//             <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
//         <div className="flex flex-col gap-6 mb-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.slice(3).map((feature, index) => {
//               const Icon = feature.icon;
//               const actualIndex = index + 3;
//               const isExpanded = expandedCard === actualIndex;
//               return (
//                 <div key={actualIndex} className="w-full flex">
//                   <Card className={`bg-slate-50 w-full h-auto min-h-[340px] flex flex-col shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
//                     <CardContent className="p-6 flex flex-col flex-grow justify-between">
//                       <div>
//                         <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
//                           <Icon className="w-6 h-6 text-primary" />
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900 mb-3">
//                           {feature.title}
//                         </h3>
//                         <p className="text-gray-700 mb-4 text-sm whitespace-pre-line leading-relaxed font-medium bg-white/50 p-3 rounded-xl border border-gray-100">
//                           {feature.description}
//                         </p>
//                       </div>
//                       <button
//                         onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
//                         className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 mt-2 transition-colors flex items-center gap-1 self-start"
//                       >
//                         {isExpanded ? "Show Less ↑" : "Learn More →"}
//                       </button>
//                     </CardContent>
//                   </Card>
//                 </div>
//               );
//             })}
//           </div>
//           </div>
//           </div>

//           {expandedCard !== null && expandedCard >= 3 && (
//             <PersonalizedStudyPlan activeIndex={expandedCard} />
//           )}
//         </div>


// ////////class 11 to 12 box (Same Structure) *




//  {/* <div className="flex justify-center items-center p-6 mb-12">
//           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
//             <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {goals.map((goal, index) => (
//                 <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
//                   {goal}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>  */}
//         {/* Auto Scrolling boxes */}
//         <div className="relative mb-12">
//           <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg" style={{ scrollBehavior: "smooth" }}>
//             {boxes.map((box) => (
//               <div key={box.id} className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4" style={{ backgroundColor: box.color, borderRadius: "8px" }} />
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



// import React, { useEffect, useRef, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   TrendingUp,
//   Globe,
//   Briefcase,
//   Heart,
//   FileText,
//   Users,
//   BarChart3,
//   Library,
//   BookOpen,
//   Award,
// } from "lucide-react";

// // Extended features array to include Class 11, 12, and NEET/JEE details
// const features = [
//   {
//     icon: Users,
//     title: "🤝 1:1 Mentorship",
//     description:
//       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
//   },
//   {
//     icon: FileText,
//     title: "🧪 Mock Tests & Practice",
//     description:
//       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
//   },
//   {
//     icon: Heart,
//     title: "🧠 Psychological Support",
//     description:
//       "Mental health support, stress management, and counseling for academic and personal challenges.",
//   },
//   // Class 6 to 10
//   {
//     icon: Briefcase,
//     title: "👩‍💼 Class 6",
//     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
//   },
//   {
//     icon: Globe,
//     title: "👩‍💼 Class 7",
//     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
//   },
//   {
//     icon: TrendingUp,
//     title: "👩‍💼 Class 8",
//     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
//   },
//   {
//     icon: Library,
//     title: "👩‍💼 Class 9",
//     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
//   },
//   {
//     icon: Library,
//     title: "👩‍💼 Class 10",
//     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
//   },
//   {
//     icon: Library,
//     title: "🏆 Olympiad",
//     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
//   },
//   // Class 11 to 12 / Competitive
//   {
//     icon: BookOpen,
//     title: "🎓 Class 11 Arts",
//     description: `• JEE/NEET Foundation\n• 1500+ Physics/Chem MCQs\n• 2500+ Subjective Qs\n• 3500+ Sample Papers\n• Top Faculty Mentorship\n• 24/7 Doubt Solving`,
//   },
//   {
//     icon: Award,
//     title: "🎓 Class 11 Commerce",
//     description: `• Board Exam Special Prep\n• Full Syllabus Mock Tests\n• PYQ Analysis (Last 10 Yrs)\n• 4000+ Practice Questions\n• Stress-Free Counseling\n• Career Guidance Sessions`,
//   },
//   {
//     icon: TrendingUp,
//    title: "🎓 Class 11 Science",
//     description: `• All India Test Series (AITS)\n• Real-time Rank Predictor\n• Physics, Chemistry, Biology/Maths\n• Advanced Doubt Clearance\n• Personalized Weakness Tracker`,
//   },
// ];

// const goals = [
//   "Learn Maths",
//   "Learn English",
//   "Science",
//   "GK",
//   "JNV Entrance",
//   "KVS",
//   "Sainik School",
//   "Olympiad",
// ];

// const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
//   0: {
//     title: "Personalized Study Plan",
//     desc: "Weak–strong subject analysis Daily + weekly target sheet PYQ based planning (especially from NEET-UG trend)",
//     icon: "📚",
//   },
//   1: {
//     title: "Test Series & Evaluation",
//     desc: "All India Rank analysis, mistake log tracking, time-management sheets, and customized revision tests.",
//     icon: "🧪",
//   },
//   2: {
//     title: "Mindset & Motivation Plan",
//     desc: "Weekly stress-buster sessions, 1:1 interaction with counselors, and customized schedules to avoid burnout.",
//     icon: "🧠",
//   },
//   3: {
//     title: "Placement Preparation Toolkit",
//     desc: "Resume review, live mock HR interviews, industry-specific soft skill training, and direct referral opportunities.",
//     icon: "💼",
//   },
//   4: {
//     title: "Global Career Roadmap",
//     desc: "In-depth profile building for global markets, profile enhancement advice, and university selection support.",
//     icon: "🌍",
//   },
//   5: {
//     title: "Advanced Tech & Skills Training",
//     desc: "Hands-on capstone projects, cohort-based learning, industry mentorship, and verified portfolio building.",
//     icon: "📈",
//   },
//   6: {
//     title: "Academic Stream Roadmap",
//     desc: "Subject combination advisor, continuous track evaluation, and specific curriculum help with top faculties.",
//     icon: "📚",
//   },
// };

// function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
//   // Safe fallback if activeIndex is out of predefined data keys
//   const data = studyPlanData[activeIndex % 7] || studyPlanData[0];

//   return (
//     <div className="w-full mt-6 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
//       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-xl overflow-hidden">
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
//         <div className="flex items-center gap-4 z-10">
//           <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
//             <BarChart3 className="w-10 h-10" />
//           </div>
//           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
//             <FileText className="w-10 h-10" />
//           </div>
//           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
//             <TrendingUp className="w-10 h-10" />
//           </div>
//         </div>
//       </div>

//       <div className="w-full md:w-1/2 flex flex-col items-start text-left">
//         <div className="flex items-center gap-2 mb-3">
//           <span className="text-2xl">{data.icon}</span>
//           <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase text-sm md:text-base">
//             {data.title}
//           </h4>
//         </div>
//         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
//           {data.desc}
//         </p>
//         <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
//           JOIN US
//         </button>
//       </div>
//     </div>
//   );
// }

// export function Features() {
//   const scrollRef = useRef<HTMLDivElement | null>(null);
//   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);

//   useEffect(() => {
//     const items = Array.from({ length: 10 }, (_, i) => ({
//       id: i,
//       description: `Learn ${i + 1}`,
//       color: `hsl(${i * 36}, 70%, 80%)`,
//     }));
//     setBoxes(items);
//   }, []);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;
//     let direction = 1;
//     const scrollStep = 1;
//     const scrollDelay = 15;
//     const interval = setInterval(() => {
//       if (!scrollContainer) return;
//       scrollContainer.scrollLeft += scrollStep * direction;
//       if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
//         direction = -1;
//       }
//       if (scrollContainer.scrollLeft <= 0) {
//         direction = 1;
//       }
//     }, scrollDelay);
//     return () => clearInterval(interval);
//   }, [boxes]);

//   return (
//     <section id="features" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Comprehensive Guidance for Every Student
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             From academic support to career planning, we provide everything you need to succeed in your educational journey.
//           </p>
//         </div>

//         {/* Top 3 Cards Row */}
//         <div className="flex flex-col gap-4 mb-12">
//           <div className="flex flex-wrap justify-center gap-8">
//             {features.slice(0, 3).map((feature, index) => {
//               const Icon = feature.icon;
//               const bgColors = ["bg-[rgb(125,219,123)]", "bg-[rgb(255,153,153)]", "bg-[rgb(169,254,255)]"];
//               const isExpanded = expandedCard === index;
              
//               return (
//                 <div key={index} className="w-full md:w-[350px] flex flex-col">
//                   <Card className={`${bgColors[index]} text-black h-[320px] shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
//                     <CardContent className="p-6 flex flex-col h-full justify-between">
//                       <div>
//                         <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
//                           <Icon className="w-8 h-8 text-black" />
//                         </div>
//                         <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
//                         <p className="text-black/80 mb-4 line-clamp-3 whitespace-pre-line">
//                           {feature.description}
//                         </p>
//                       </div>
//                       <button
//                         onClick={() => setExpandedCard(isExpanded ? null : index)}
//                         className={`mt-auto w-full px-4 py-2 rounded-md transition-colors font-medium ${isExpanded ? "bg-black text-white hover:bg-gray-800" : "bg-[hsl(218,46%,36%)] text-white hover:bg-orange-600"}`}
//                       >
//                         {isExpanded ? "Show Less" : "Learn More"}
//                       </button>
//                     </CardContent>
//                   </Card>
//                 </div>
//               );
//             })}
//           </div>
//           {expandedCard !== null && expandedCard < 3 && <PersonalizedStudyPlan activeIndex={expandedCard} />}
//         </div>

//         {/* Learning Goals Section */}
//         <div className="flex justify-center mb-6">
//           <button className="w-[350px] rounded-lg border-none bg-[#5B3EC6] text-white cursor-pointer py-3 px-6 font-semibold shadow-md hover:bg-[#4a30a8] transition-colors">
//             Select Your Learning Goal
//           </button>
//         </div>

//         {/* Class 1 to 5 Box */}
//         <div className="flex justify-center items-center p-6 mb-6">
//           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
//             <h1 className="text-3xl font-bold text-center mb-10">Class 1 to 5</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {goals.map((goal, index) => (
//                 <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
//                   {goal}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Class 6 to 10 Box */}
//         <div className="flex justify-center items-center p-6 mb-6">
//           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
//             <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
//             <div className="flex flex-col gap-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {features.slice(3, 9).map((feature, index) => {
//                   const Icon = feature.icon;
//                   const actualIndex = index + 3;
//                   const isExpanded = expandedCard === actualIndex;
//                   return (
//                     <div key={actualIndex} className="w-full flex">
//                       <Card className={`bg-slate-50 w-full h-auto min-h-[340px] flex flex-col shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
//                         <CardContent className="p-6 flex flex-col flex-grow justify-between">
//                           <div>
//                             <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
//                               <Icon className="w-6 h-6 text-primary" />
//                             </div>
//                             <h3 className="text-xl font-bold text-gray-900 mb-3">
//                               {feature.title}
//                             </h3>
//                             <p className="text-gray-700 mb-4 text-sm whitespace-pre-line leading-relaxed font-medium bg-white/50 p-3 rounded-xl border border-gray-100">
//                               {feature.description}
//                             </p>
//                           </div>
//                           <button
//                             onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
//                             className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 mt-2 transition-colors flex items-center gap-1 self-start"
//                           >
//                             {isExpanded ? "Show Less ↑" : "Learn More →"}
//                           </button>
//                         </CardContent>
//                       </Card>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Study Plan for Class 6 to 10 */}
//         {expandedCard !== null && expandedCard >= 3 && expandedCard < 9 && (
//           <div className="mb-12 px-6">
//             <PersonalizedStudyPlan activeIndex={expandedCard} />
//           </div>
//         )}

//         {/* Class 11 to 12 Box (Exactly Same Structure) */}
//         <div className="flex justify-center items-center p-6 mb-12">
//           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
//             <h1 className="text-3xl font-bold text-center mb-10">Class 11 to 12</h1>
//             <div className="flex flex-col gap-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {features.slice(9).map((feature, index) => {
//                   const Icon = feature.icon;
//                   const actualIndex = index + 9;
//                   const isExpanded = expandedCard === actualIndex;
//                   return (
//                     <div key={actualIndex} className="w-full flex">
//                       <Card className={`bg-slate-50 w-full h-auto min-h-[340px] flex flex-col shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
//                         <CardContent className="p-6 flex flex-col flex-grow justify-between">
//                           <div>
//                             <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
//                               <Icon className="w-6 h-6 text-primary" />
//                             </div>
//                             <h3 className="text-xl font-bold text-gray-900 mb-3">
//                               {feature.title}
//                             </h3>
//                             <p className="text-gray-700 mb-4 text-sm whitespace-pre-line leading-relaxed font-medium bg-white/50 p-3 rounded-xl border border-gray-100">
//                               {feature.description}
//                             </p>
//                           </div>
//                           <button
//                             onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
//                             className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 mt-2 transition-colors flex items-center gap-1 self-start"
//                           >
//                             {isExpanded ? "Show Less ↑" : "Learn More →"}
//                           </button>
//                         </CardContent>
//                       </Card>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Study Plan for Class 11 & 12 */}
//         {expandedCard !== null && expandedCard >= 9 && (
//           <div className="mb-12 px-6">
//             <PersonalizedStudyPlan activeIndex={expandedCard} />
//           </div>
//         )}

//         {/* Auto Scrolling boxes */}
//         <div className="relative mb-12">
//           <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg" style={{ scrollBehavior: "smooth" }}>
//             {boxes.map((box) => (
//               <div key={box.id} className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4" style={{ backgroundColor: box.color, borderRadius: "8px" }} />
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  Globe,
  Briefcase,
  Heart,
  FileText,
  Users,
  BarChart3,
  Library,
  BookOpen,
  Award,
} from "lucide-react";

// Extended features array to include Class 11, 12, and NEET/JEE details
const features = [
  {
    icon: Users,
    // title: "🤝 1:1 Mentorship",
     title: "🤝 Evaluate",
    description:
      "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
  },
  {
    icon: FileText,
    // title: "🧪 Mock Tests & Practice",
     title: "🧪 Educate",
    description:
      "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
  },
  {
    icon: Heart,
    title: "🧠 Elevate",
    description:
      "Mental health support, stress management, and counseling for academic and personal challenges.",
  },
  // Class 6 to 10
  {
    icon: Briefcase,
    title: "👩‍💼 Class 6",
    description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
  },
  {
    icon: Globe,
    title: "👩‍💼 Class 7",
    description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
  },
  {
    icon: TrendingUp,
    title: "👩‍💼 Class 8",
    description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
  },
  {
    icon: Library,
    title: "👩‍💼 Class 9",
    description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
  },
  {
    icon: Library,
    title: "👩‍💼 Class 10",
    description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
  },
  {
    icon: Library,
    title: "🏆 Olympiad",
    description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
  },
  // Class 11
  {
    icon: BookOpen,
    title: "🎓 Class 11 Arts",
    description: `• JEE/NEET Foundation\n• 1500+ Physics/Chem MCQs\n• 2500+ Subjective Qs\n• 3500+ Sample Papers\n• Top Faculty Mentorship\n• 24/7 Doubt Solving`,
  },
  {
    icon: Award,
    title: "🎓 Class 11 Commerce",
    description: `• Board Exam Special Prep\n• Full Syllabus Mock Tests\n• PYQ Analysis (Last 10 Yrs)\n• 4000+ Practice Questions\n• Stress-Free Counseling\n• Career Guidance Sessions`,
  },
  {
    icon: TrendingUp,
    title: "🎓 Class 11 Science",
    description: `• All India Test Series (AITS)\n• Real-time Rank Predictor\n• Physics, Chemistry, Biology/Maths\n• Advanced Doubt Clearance\n• Personalized Weakness Tracker`,
  },
  // Class 12
  {
    icon: BookOpen,
    title: "🎓 Class 12 Arts",
    description: `• CUET & Board Integrated Prep\n• 2000+ Subjective Answers Writing\n• Last 12 Years PYQ Detailed Analysis\n• Answer Checking by Board Experts\n• Top Faculty Mentorship\n• Career Stream Guidance`,
  },
  {
    icon: Award,
    title: "🎓 Class 12 Commerce",
    description: `• Premium CA/CS Foundation Prep\n• Accounts & Eco Core Concept Booster\n• 5000+ Practice MCQs & Case Studies\n• Board Exam Mock Series (Strict Timing)\n• Stress-Free Counseling\n• Placement Seminars`,
  },
  {
    icon: TrendingUp,
    title: "🎓 Class 12 Science",
    description: `• Core JEE Main/Advanced & NEET Tracker\n• Daily Live Doubt Clearing Rooms\n• Formula Sheet & Concept Mapping Notes\n• High-Yielding All India Test Series\n• Real-Time Rank Predictor Dashboard`,
  },
];

const goals = [
  "Learn Maths",
  "Learn English",
  "Science",
  "GK",
  "JNV Entrance",
  "KVS",
  "Sainik School",
  "Olympiad",
];

const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
  0: {
    title: "Personalized Study Plan",
    desc: "Weak–strong subject analysis Daily + weekly target sheet PYQ based planning (especially from NEET-UG trend)",
    icon: "📚",
  },
  1: {
    title: "Test Series & Evaluation",
    desc: "All India Rank analysis, mistake log tracking, time-management sheets, and customized revision tests.",
    icon: "🧪",
  },
  2: {
    title: "Mindset & Motivation Plan",
    desc: "Weekly stress-buster sessions, 1:1 interaction with counselors, and customized schedules to avoid burnout.",
    icon: "🧠",
  },
  3: {
    title: "Placement Preparation Toolkit",
    desc: "Resume review, live mock HR interviews, industry-specific soft skill training, and direct referral opportunities.",
    icon: "💼",
  },
  4: {
    title: "Global Career Roadmap",
    desc: "In-depth profile building for global markets, profile enhancement advice, and university selection support.",
    icon: "🌍",
  },
  5: {
    title: "Advanced Tech & Skills Training",
    desc: "Hands-on capstone projects, cohort-based learning, industry mentorship, and verified portfolio building.",
    icon: "📈",
  },
  6: {
    title: "Academic Stream Roadmap",
    desc: "Subject combination advisor, continuous track evaluation, and specific curriculum help with top faculties.",
    icon: "📚",
  },
};

function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
  const data = studyPlanData[activeIndex % 7] || studyPlanData[0];

  return (
    <div className="w-full mt-6 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-xl overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="flex items-center gap-4 z-10">
          <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
            <BarChart3 className="w-10 h-10" />
          </div>
          <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
            <FileText className="w-10 h-10" />
          </div>
          <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
            <TrendingUp className="w-10 h-10" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{data.icon}</span>
          <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase text-sm md:text-base">
            {data.title}
          </h4>
        </div>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
          {data.desc}
        </p>
        <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
          JOIN US
        </button>
      </div>
    </div>
  );
}

export function Features() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    const items = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      description: `Learn ${i + 1}`,
      color: `hsl(${i * 36}, 70%, 80%)`,
    }));
    setBoxes(items);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let direction = 1;
    const scrollStep = 1;
    const scrollDelay = 15;
    const interval = setInterval(() => {
      if (!scrollContainer) return;
      scrollContainer.scrollLeft += scrollStep * direction;
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
        direction = -1;
      }
      if (scrollContainer.scrollLeft <= 0) {
        direction = 1;
      }
    }, scrollDelay);
    return () => clearInterval(interval);
  }, [boxes]);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Guidance for Every Student
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From academic support to career planning, we provide everything you need to succeed in your educational journey.
          </p>
        </div>

        {/* Top 3 Cards Row */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex flex-wrap justify-center gap-8">
            {features.slice(0, 3).map((feature, index) => {
              const Icon = feature.icon;
              const bgColors = ["bg-[rgb(125,219,123)]", "bg-[rgb(255,153,153)]", "bg-[rgb(169,254,255)]"];
              const isExpanded = expandedCard === index;
              
              return (
                <div key={index} className="w-full md:w-[350px] flex flex-col">
                  <Card className={`${bgColors[index]} text-black h-[320px] shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
                    <CardContent className="p-6 flex flex-col h-full justify-between">
                      <div>
                        <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
                          <Icon className="w-8 h-8 text-black" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-black/80 mb-4 line-clamp-3 whitespace-pre-line">
                          {feature.description}
                        </p>
                      </div>
                      <button
                        onClick={() => setExpandedCard(isExpanded ? null : index)}
                        className={`mt-auto w-full px-4 py-2 rounded-md transition-colors font-medium ${isExpanded ? "bg-black text-white hover:bg-gray-800" : "bg-[hsl(218,46%,36%)] text-white hover:bg-orange-600"}`}
                      >
                        {isExpanded ? "Show Less" : "Learn More"}
                      </button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
          {expandedCard !== null && expandedCard < 3 && <PersonalizedStudyPlan activeIndex={expandedCard} />}
        </div>

        {/* Learning Goals Section */}
        <div className="flex justify-center mb-6">
          <button className="w-[350px] rounded-lg border-none bg-[#5B3EC6] text-white cursor-pointer py-3 px-6 font-semibold shadow-md hover:bg-[#4a30a8] transition-colors">
            Select Your Learning Goal
          </button>
        </div>

        {/* Class 1 to 5 Box */}
        <div className="flex justify-center items-center p-6 mb-6">
          <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-10">Class 1 to 5</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {goals.map((goal, index) => (
                <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
                  {goal}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Class 6 to 10 Box */}
        <div className="flex justify-center items-center p-6 mb-6">
          <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.slice(3, 9).map((feature, index) => {
                  const Icon = feature.icon;
                  const actualIndex = index + 3;
                  const isExpanded = expandedCard === actualIndex;
                  return (
                    <div key={actualIndex} className="w-full flex">
                      <Card className={`bg-slate-50 w-full h-auto min-h-[340px] flex flex-col shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
                        <CardContent className="p-6 flex flex-col flex-grow justify-between">
                          <div>
                            <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {feature.title}
                            </h3>
                            <p className="text-gray-700 mb-4 text-sm whitespace-pre-line leading-relaxed font-medium bg-white/50 p-3 rounded-xl border border-gray-100">
                              {feature.description}
                            </p>
                          </div>
                          <button
                            onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
                            className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 mt-2 transition-colors flex items-center gap-1 self-start"
                          >
                            {isExpanded ? "Show Less ↑" : "Learn More →"}
                          </button>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Study Plan for Class 6 to 10 */}
        {expandedCard !== null && expandedCard >= 3 && expandedCard < 9 && (
          <div className="mb-12 px-6">
            <PersonalizedStudyPlan activeIndex={expandedCard} />
          </div>
        )}

        {/* Class 11 to 12 Box */}
        <div className="flex justify-center items-center p-6 mb-12">
          <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-10">Class 11 to 12</h1>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.slice(9).map((feature, index) => {
                  const Icon = feature.icon;
                  const actualIndex = index + 9;
                  const isExpanded = expandedCard === actualIndex;
                  return (
                    <div key={actualIndex} className="w-full flex">
                      <Card className={`bg-slate-50 w-full h-auto min-h-[340px] flex flex-col shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
                        <CardContent className="p-6 flex flex-col flex-grow justify-between">
                          <div>
                            <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {feature.title}
                            </h3>
                            <p className="text-gray-700 mb-4 text-sm whitespace-pre-line leading-relaxed font-medium bg-white/50 p-3 rounded-xl border border-gray-100">
                              {feature.description}
                            </p>
                          </div>
                          <button
                            onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
                            className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 mt-2 transition-colors flex items-center gap-1 self-start"
                          >
                            {isExpanded ? "Show Less ↑" : "Learn More →"}
                          </button>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Study Plan for Class 11 & 12 */}
        {expandedCard !== null && expandedCard >= 9 && (
          <div className="mb-12 px-6">
            <PersonalizedStudyPlan activeIndex={expandedCard} />
          </div>
        )}

        {/* Auto Scrolling boxes */}
        {/* <div className="relative mb-12">
          <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg" style={{ scrollBehavior: "smooth" }}>
            {boxes.map((box) => (
              <div key={box.id} className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4" style={{ backgroundColor: box.color, borderRadius: "8px" }} />
            ))}
          </div>
        </div> */}

      </div>
    </section>
  );
}