



// // // // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // // // import {
// // // // // // //   BookOpen,
// // // // // // //   TrendingUp,
// // // // // // //   Globe,
// // // // // // //   Briefcase,
// // // // // // //   Heart,
// // // // // // //   FileText,
// // // // // // //   Users,
// // // // // // //   BarChart3,
// // // // // // //   Library,
// // // // // // // } from "lucide-react";
// // // // // // // const [expandedCard, setExpandedCard] = useState<number | null>(null);
// // // // // // // const features = [
// // // // // // //   // { icon: BookOpen, title: "", description: "" },
// // // // // // //   // { icon: TrendingUp, title: "", description: "" },
// // // // // // //   // { icon: Globe, title: "", description: "" },


 
// // // // // // //   {
// // // // // // //     icon: Users,
// // // // // // //     title: "🤝 1:1 Mentorship",
// // // // // // //     description:
// // // // // // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: FileText,
// // // // // // //     title: "🧪 Mock Tests & Practice",
// // // // // // //     description:
// // // // // // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: Heart,
// // // // // // //     title: "🧠 Psychological Support",
// // // // // // //     description:
// // // // // // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: Briefcase,
// // // // // // //     title: "👩‍💼 HR & Job Assistance",
// // // // // // //     description:
// // // // // // //       "Get job placement support with resume building and interview preparation.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: Globe,
// // // // // // //     title: "🌍 Career Guidance",
// // // // // // //     description:
// // // // // // //       "Explore career opportunities and choose the right path according to your interests and skills.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: TrendingUp,
// // // // // // //     title: "📈 Skill Development & Training",
// // // // // // //     description:
// // // // // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: Library,
// // // // // // //     title: "📚 Stream & Subject Help",
// // // // // // //     description:
// // // // // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // // // // //   },

// // // // // // //   {
// // // // // // //     icon: Briefcase,
// // // // // // //     title: "👩‍💼 HR & Job Assistance",
// // // // // // //     description:
// // // // // // //       "Get job placement support with resume building and interview preparation.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: Heart,
// // // // // // //     title: "🧠 Psychological Support",
// // // // // // //     description:
// // // // // // //       "Mental health support and stress management for academic and personal challenges.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: FileText,
// // // // // // //     title: "🧪 Mock Tests & Practice",
// // // // // // //     description:
// // // // // // //       "Practice with realistic mock tests and get detailed performance analytics.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: Users,
// // // // // // //     title: "🤝 One-to-One Mentorship",
// // // // // // //     description:
// // // // // // //       "Personalized guidance sessions with experienced mentors in your field of interest.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: BarChart3,
// // // // // // //     title: "📈 Skill Development & Training",
// // // // // // //     description:
// // // // // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: Library,
// // // // // // //     title: "📚 Stream & Subject Help",
// // // // // // //     description:
// // // // // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // // // // //   },
// // // // // // // ];

// // // // // // // export function Features() {
// // // // // // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // // // // // //   const [boxes, setBoxes] = useState<
// // // // // // //     { id: number; description: string; color: string }[]
// // // // // // //   >([]);

// // // // // // //   // Generate boxes
// // // // // // //   useEffect(() => {
// // // // // // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // // // // // //       id: i,
// // // // // // //       description: `Learn ${i + 1}`,
// // // // // // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // // // // // //     }));
// // // // // // //     setBoxes(items);
// // // // // // //   }, []);

// // // // // // //   // Auto scroll (reverse at ends)
// // // // // // //   useEffect(() => {
// // // // // // //     const scrollContainer = scrollRef.current;
// // // // // // //     if (!scrollContainer) return;

// // // // // // //     let direction = 1;
// // // // // // //     const scrollStep = 1;
// // // // // // //     const scrollDelay = 15;

// // // // // // //     const interval = setInterval(() => {
// // // // // // //       if (!scrollContainer) return;
// // // // // // //       scrollContainer.scrollLeft += scrollStep * direction;

// // // // // // //       // reverse at ends
// // // // // // //       if (
// // // // // // //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// // // // // // //         scrollContainer.scrollWidth - 1
// // // // // // //       ) {
// // // // // // //         direction = -1;
// // // // // // //       }
// // // // // // //       if (scrollContainer.scrollLeft <= 0) {
// // // // // // //         direction = 1;
// // // // // // //       }
// // // // // // //     }, scrollDelay);

// // // // // // //     return () => clearInterval(interval);
// // // // // // //   }, [boxes]);

// // // // // // //   // Hide scrollbar styles
// // // // // // //   useEffect(() => {
// // // // // // //     const styleEl = document.createElement("style");
// // // // // // //     styleEl.id = "features-scrollbar-hide";
// // // // // // //     styleEl.innerHTML = `
// // // // // // //       /* Hide scrollbar for WebKit browsers (Chrome, Safari, Edge) */
// // // // // // //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// // // // // // //       /* Hide scrollbar for Firefox */
// // // // // // //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// // // // // // //     `;
// // // // // // //     document.head.appendChild(styleEl);
// // // // // // //     return () => {
// // // // // // //       const existing = document.getElementById("features-scrollbar-hide");
// // // // // // //       if (existing) existing.remove();
// // // // // // //     };
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <section id="features" className="py-20 bg-white">
// // // // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // // // //         {/* Section Header */}
// // // // // // //         <div className="text-center mb-16">
// // // // // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // // // // //             Comprehensive Guidance for Every Student
// // // // // // //           </h2>
// // // // // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // // // // //             From academic support to career planning, we provide everything you
// // // // // // //             need to succeed in your educational journey.
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         {/* Top 3 Cards */}
// // // // // // //         <div className="flex flex-wrap justify-center gap-8 mb-12">
// // // // // // //           {features.slice(0, 3).map((feature, index) => {
// // // // // // //             const Icon = feature.icon;
// // // // // // //             const bgColors = [
// // // // // // //               "bg-[rgb(125,219,123)]",
// // // // // // //               "bg-[rgb(255,153,153)]",
// // // // // // //               "bg-[rgb(169,254,255)]",
// // // // // // //             ];
// // // // // // //             return (
// // // // // // //               <Card
// // // // // // //                 key={index}
// // // // // // //                 className={`${bgColors[index]} text-black h-auto w-full md:w-[350px] shadow-md hover:shadow-lg transition-shadow group`}
// // // // // // //               >
// // // // // // //                 <CardContent className="p-6 flex flex-col h-full">
// // // // // // //                   <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // // // //                     <Icon className="w-8 h-8 text-black" />
// // // // // // //                   </div>
// // // // // // //                   <h3 className="text-xl font-semibold mb-3">
// // // // // // //                    {feature.title}
               
// // // // // // //                   </h3>
// // // // // // //                   <p className="text-black/80 mb-4">{feature.description}</p>
// // // // // // //                   <button className="mt-auto bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
// // // // // // //                     Learn More
// // // // // // //                   </button>
// // // // // // //                 </CardContent>
// // // // // // //               </Card>
// // // // // // //             );
// // // // // // //           })}
// // // // // // //         </div>

// // // // // // //         {/* Remaining Cards */}
// // // // // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// // // // // // //           {features.slice(3).map((feature, index) => {
// // // // // // //             const Icon = feature.icon;
// // // // // // //             return (
// // // // // // //               <Card
// // // // // // //                 key={index + 3}
// // // // // // //                 className="bg-slate-50 h-56 w-full shadow-md hover:shadow-lg transition-shadow group"
// // // // // // //               >
// // // // // // //                 <CardContent className="p-4">
// // // // // // //                   <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // // // //                     <Icon className="w-8 h-8 text-primary" />
// // // // // // //                   </div>
// // // // // // //                   <h3 className="text-xl font-semibold text-gray-900 mb-3">
// // // // // // //                     {feature.title}
// // // // // // //                   </h3>
// // // // // // //                   <p className="text-gray-600">{feature.description}</p>
// // // // // // //                 </CardContent>
// // // // // // //               </Card>
// // // // // // //             );
// // // // // // //           })}
// // // // // // //         </div>

// // // // // // //         {/* Auto-scrolling boxes */}
// // // // // // //         <div className="relative mb-12">
// // // // // // //           <div
// // // // // // //             ref={scrollRef}
// // // // // // //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// // // // // // //             style={{
// // // // // // //               scrollBehavior: "smooth",
// // // // // // //               borderRadius: "8px",
// // // // // // //               overflow: "hidden",
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             {boxes.map((box) => (
// // // // // // //               <div
// // // // // // //                 key={box.id}
// // // // // // //                 className="min-w-[200px] h-[150px] flex-shrink-0 shadow-md p-4"
// // // // // // //                 style={{
// // // // // // //                   backgroundColor: box.color,
// // // // // // //                   borderRadius: "8px",
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 {/* <h4 className="text-lg font-semibold">{box.title}</h4>
// // // // // // //                 <p className="text-sm text-gray-700">{box.description}</p> */}
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }







// // // // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // // // import {
// // // // // // //   BookOpen,
// // // // // // //   TrendingUp,
// // // // // // //   Globe,
// // // // // // //   Briefcase,
// // // // // // //   Heart,
// // // // // // //   FileText,
// // // // // // //   Users,
// // // // // // //   BarChart3,
// // // // // // //   Library,
// // // // // // // } from "lucide-react";
// // // // // // // const [expandedCard, setExpandedCard] = useState<number | null>(null);
// // // // // // // const features = [
// // // // // // //   // { icon: BookOpen, title: "", description: "" },
// // // // // // //   // { icon: TrendingUp, title: "", description: "" },
// // // // // // //   // { icon: Globe, title: "", description: "" },


 
// // // // // // //   {
// // // // // // //     icon: Users,
// // // // // // //     title: "🤝 1:1 Mentorship",
// // // // // // //     description:
// // // // // // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: FileText,
// // // // // // //     title: "🧪 Mock Tests & Practice",
// // // // // // //     description:
// // // // // // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: Heart,
// // // // // // //     title: "🧠 Psychological Support",
// // // // // // //     description:
// // // // // // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: Briefcase,
// // // // // // //     title: "👩‍💼 HR & Job Assistance",
// // // // // // //     description:
// // // // // // //       "Get job placement support with resume building and interview preparation.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: Globe,
// // // // // // //     title: "🌍 Career Guidance",
// // // // // // //     description:
// // // // // // //       "Explore career opportunities and choose the right path according to your interests and skills.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: TrendingUp,
// // // // // // //     title: "📈 Skill Development & Training",
// // // // // // //     description:
// // // // // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: Library,
// // // // // // //     title: "📚 Stream & Subject Help",
// // // // // // //     description:
// // // // // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // // // // //   },

// // // // // // //   {
// // // // // // //     icon: Briefcase,
// // // // // // //     title: "👩‍💼 HR & Job Assistance",
// // // // // // //     description:
// // // // // // //       "Get job placement support with resume building and interview preparation.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: Heart,
// // // // // // //     title: "🧠 Psychological Support",
// // // // // // //     description:
// // // // // // //       "Mental health support and stress management for academic and personal challenges.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: FileText,
// // // // // // //     title: "🧪 Mock Tests & Practice",
// // // // // // //     description:
// // // // // // //       "Practice with realistic mock tests and get detailed performance analytics.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: Users,
// // // // // // //     title: "🤝 One-to-One Mentorship",
// // // // // // //     description:
// // // // // // //       "Personalized guidance sessions with experienced mentors in your field of interest.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: BarChart3,
// // // // // // //     title: "📈 Skill Development & Training",
// // // // // // //     description:
// // // // // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: Library,
// // // // // // //     title: "📚 Stream & Subject Help",
// // // // // // //     description:
// // // // // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // // // // //   },
// // // // // // // ];

// // // // // // // export function Features() {
// // // // // // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // // // // // //   const [boxes, setBoxes] = useState<
// // // // // // //     { id: number; description: string; color: string }[]
// // // // // // //   >([]);

// // // // // // //   // Generate boxes
// // // // // // //   useEffect(() => {
// // // // // // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // // // // // //       id: i,
// // // // // // //       description: `Learn ${i + 1}`,
// // // // // // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // // // // // //     }));
// // // // // // //     setBoxes(items);
// // // // // // //   }, []);

// // // // // // //   // Auto scroll (reverse at ends)
// // // // // // //   useEffect(() => {
// // // // // // //     const scrollContainer = scrollRef.current;
// // // // // // //     if (!scrollContainer) return;

// // // // // // //     let direction = 1;
// // // // // // //     const scrollStep = 1;
// // // // // // //     const scrollDelay = 15;

// // // // // // //     const interval = setInterval(() => {
// // // // // // //       if (!scrollContainer) return;
// // // // // // //       scrollContainer.scrollLeft += scrollStep * direction;

// // // // // // //       // reverse at ends
// // // // // // //       if (
// // // // // // //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// // // // // // //         scrollContainer.scrollWidth - 1
// // // // // // //       ) {
// // // // // // //         direction = -1;
// // // // // // //       }
// // // // // // //       if (scrollContainer.scrollLeft <= 0) {
// // // // // // //         direction = 1;
// // // // // // //       }
// // // // // // //     }, scrollDelay);

// // // // // // //     return () => clearInterval(interval);
// // // // // // //   }, [boxes]);

// // // // // // //   // Hide scrollbar styles
// // // // // // //   useEffect(() => {
// // // // // // //     const styleEl = document.createElement("style");
// // // // // // //     styleEl.id = "features-scrollbar-hide";
// // // // // // //     styleEl.innerHTML = `
// // // // // // //       /* Hide scrollbar for WebKit browsers (Chrome, Safari, Edge) */
// // // // // // //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// // // // // // //       /* Hide scrollbar for Firefox */
// // // // // // //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// // // // // // //     `;
// // // // // // //     document.head.appendChild(styleEl);
// // // // // // //     return () => {
// // // // // // //       const existing = document.getElementById("features-scrollbar-hide");
// // // // // // //       if (existing) existing.remove();
// // // // // // //     };
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <section id="features" className="py-20 bg-white">
// // // // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // // // //         {/* Section Header */}
// // // // // // //         <div className="text-center mb-16">
// // // // // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // // // // //             Comprehensive Guidance for Every Student
// // // // // // //           </h2>
// // // // // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // // // // //             From academic support to career planning, we provide everything you
// // // // // // //             need to succeed in your educational journey.
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         {/* Top 3 Cards */}
// // // // // // //         <div className="flex flex-wrap justify-center gap-8 mb-12">
// // // // // // //           {features.slice(0, 3).map((feature, index) => {
// // // // // // //             const Icon = feature.icon;
// // // // // // //             const bgColors = [
// // // // // // //               "bg-[rgb(125,219,123)]",
// // // // // // //               "bg-[rgb(255,153,153)]",
// // // // // // //               "bg-[rgb(169,254,255)]",
// // // // // // //             ];
// // // // // // //             return (
// // // // // // //               <Card
// // // // // // //                 key={index}
// // // // // // //                 className={`${bgColors[index]} text-black h-auto w-full md:w-[350px] shadow-md hover:shadow-lg transition-shadow group`}
// // // // // // //               >
// // // // // // //                 <CardContent className="p-6 flex flex-col h-full">
// // // // // // //                   <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // // // //                     <Icon className="w-8 h-8 text-black" />
// // // // // // //                   </div>
// // // // // // //                   <h3 className="text-xl font-semibold mb-3">
// // // // // // //                    {feature.title}
               
// // // // // // //                   </h3>
// // // // // // //                   <p className="text-black/80 mb-4">{feature.description}</p>
// // // // // // //                   <button className="mt-auto bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
// // // // // // //                     Learn More
// // // // // // //                   </button>
// // // // // // //                 </CardContent>
// // // // // // //               </Card>
// // // // // // //             );
// // // // // // //           })}
// // // // // // //         </div>

// // // // // // //         {/* Remaining Cards */}
// // // // // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// // // // // // //           {features.slice(3).map((feature, index) => {
// // // // // // //             const Icon = feature.icon;
// // // // // // //             return (
// // // // // // //               <Card
// // // // // // //                 key={index + 3}
// // // // // // //                 className="bg-slate-50 h-56 w-full shadow-md hover:shadow-lg transition-shadow group"
// // // // // // //               >
// // // // // // //                 <CardContent className="p-4">
// // // // // // //                   <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // // // //                     <Icon className="w-8 h-8 text-primary" />
// // // // // // //                   </div>
// // // // // // //                   <h3 className="text-xl font-semibold text-gray-900 mb-3">
// // // // // // //                     {feature.title}
// // // // // // //                   </h3>
// // // // // // //                   <p className="text-gray-600">{feature.description}</p>
// // // // // // //                 </CardContent>
// // // // // // //               </Card>
// // // // // // //             );
// // // // // // //           })}
// // // // // // //         </div>

// // // // // // //         {/* Auto-scrolling boxes */}
// // // // // // //         <div className="relative mb-12">
// // // // // // //           <div
// // // // // // //             ref={scrollRef}
// // // // // // //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// // // // // // //             style={{
// // // // // // //               scrollBehavior: "smooth",
// // // // // // //               borderRadius: "8px",
// // // // // // //               overflow: "hidden",
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             {boxes.map((box) => (
// // // // // // //               <div
// // // // // // //                 key={box.id}
// // // // // // //                 className="min-w-[200px] h-[150px] flex-shrink-0 shadow-md p-4"
// // // // // // //                 style={{
// // // // // // //                   backgroundColor: box.color,
// // // // // // //                   borderRadius: "8px",
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 {/* <h4 className="text-lg font-semibold">{box.title}</h4>
// // // // // // //                 <p className="text-sm text-gray-700">{box.description}</p> */}
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }


// // // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // // import {
// // // // // //   TrendingUp,
// // // // // //   Globe,
// // // // // //   Briefcase,
// // // // // //   Heart,
// // // // // //   FileText,
// // // // // //   Users,
// // // // // //   BarChart3,
// // // // // //   Library,
// // // // // // } from "lucide-react";

// // // // // // const features = [
// // // // // //   {
// // // // // //     icon: Users,
// // // // // //     title: "🤝 1:1 Mentorship",
// // // // // //     description:
// // // // // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: FileText,
// // // // // //     title: "🧪 Mock Tests & Practice",
// // // // // //     description:
// // // // // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Heart,
// // // // // //     title: "🧠 Psychological Support",
// // // // // //     description:
// // // // // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Briefcase,
// // // // // //     title: "👩‍💼 HR & Job Assistance",
// // // // // //     description:
// // // // // //       "Get job placement support with resume building and interview preparation.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Globe,
// // // // // //     title: "🌍 Career Guidance",
// // // // // //     description:
// // // // // //       "Explore career opportunities and choose the right path according to your interests and skills.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: TrendingUp,
// // // // // //     title: "📈 Skill Development & Training",
// // // // // //     description:
// // // // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Library,
// // // // // //     title: "📚 Stream & Subject Help",
// // // // // //     description:
// // // // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Briefcase,
// // // // // //     title: "👩‍💼 HR & Job Assistance",
// // // // // //     description:
// // // // // //       "Get job placement support with resume building and interview preparation.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Heart,
// // // // // //     title: "🧠 Psychological Support",
// // // // // //     description:
// // // // // //       "Mental health support and stress management for academic and personal challenges.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: FileText,
// // // // // //     title: "🧪 Mock Tests & Practice",
// // // // // //     description:
// // // // // //       "Practice with realistic mock tests and get detailed performance analytics.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Users,
// // // // // //     title: "🤝 One-to-One Mentorship",
// // // // // //     description:
// // // // // //       "Personalized guidance sessions with experienced mentors in your field of interest.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: BarChart3,
// // // // // //     title: "📈 Skill Development & Training",
// // // // // //     description:
// // // // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Library,
// // // // // //     title: "📚 Stream & Subject Help",
// // // // // //     description:
// // // // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // // // //   },
// // // // // // ];

// // // // // // export function Features() {
// // // // // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // // // // //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
  
// // // // // //   // 1. expandedCard स्टेट को यहाँ कॉम्पोनेंट के अंदर रखा है
// // // // // //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// // // // // //   // Generate boxes
// // // // // //   useEffect(() => {
// // // // // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // // // // //       id: i,
// // // // // //       description: `Learn ${i + 1}`,
// // // // // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // // // // //     }));
// // // // // //     setBoxes(items);
// // // // // //   }, []);

// // // // // //   // Auto scroll (reverse at ends)
// // // // // //   useEffect(() => {
// // // // // //     const scrollContainer = scrollRef.current;
// // // // // //     if (!scrollContainer) return;

// // // // // //     let direction = 1;
// // // // // //     const scrollStep = 1;
// // // // // //     const scrollDelay = 15;

// // // // // //     const interval = setInterval(() => {
// // // // // //       if (!scrollContainer) return;
// // // // // //       scrollContainer.scrollLeft += scrollStep * direction;

// // // // // //       if (
// // // // // //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// // // // // //         scrollContainer.scrollWidth - 1
// // // // // //       ) {
// // // // // //         direction = -1;
// // // // // //       }
// // // // // //       if (scrollContainer.scrollLeft <= 0) {
// // // // // //         direction = 1;
// // // // // //       }
// // // // // //     }, scrollDelay);

// // // // // //     return () => clearInterval(interval);
// // // // // //   }, [boxes]);

// // // // // //   // Hide scrollbar styles
// // // // // //   useEffect(() => {
// // // // // //     const styleEl = document.createElement("style");
// // // // // //     styleEl.id = "features-scrollbar-hide";
// // // // // //     styleEl.innerHTML = `
// // // // // //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// // // // // //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// // // // // //     `;
// // // // // //     document.head.appendChild(styleEl);
// // // // // //     return () => {
// // // // // //       const existing = document.getElementById("features-scrollbar-hide");
// // // // // //       if (existing) existing.remove();
// // // // // //     };
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <section id="features" className="py-20 bg-white">
// // // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // // //         {/* Section Header */}
// // // // // //         <div className="text-center mb-16">
// // // // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // // // //             Comprehensive Guidance for Every Student
// // // // // //           </h2>
// // // // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // // // //             From academic support to career planning, we provide everything you
// // // // // //             need to succeed in your educational journey.
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* Top 3 Cards */}
// // // // // //         <div className="flex flex-wrap justify-center gap-8 mb-12">
// // // // // //           {features.slice(0, 3).map((feature, index) => {
// // // // // //             const Icon = feature.icon;
// // // // // //             const bgColors = [
// // // // // //               "bg-[rgb(125,219,123)]",
// // // // // //               "bg-[rgb(255,153,153)]",
// // // // // //               "bg-[rgb(169,254,255)]",
// // // // // //             ];
            
// // // // // //             // चेक करें कि क्या यह कार्ड खुला हुआ है
// // // // // //             const isExpanded = expandedCard === index;

// // // // // //             return (
// // // // // //               <Card
// // // // // //                 key={index}
// // // // // //                 className={`${bgColors[index]} text-black w-full md:w-[350px] shadow-md hover:shadow-lg transition-all duration-300 group ${
// // // // // //                   isExpanded ? "h-auto" : "h-[320px]"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 <CardContent className="p-6 flex flex-col h-full justify-between">
// // // // // //                   <div>
// // // // // //                     <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // // //                       <Icon className="w-8 h-8 text-black" />
// // // // // //                     </div>
// // // // // //                     <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    
// // // // // //                     {/* अगर expanded नहीं है तो टेक्स्ट 2 लाइनों के बाद कट जाएगा */}
// // // // // //                     <p className={`text-black/80 mb-4 ${isExpanded ? "" : "line-clamp-2"}`}>
// // // // // //                       {feature.description}
// // // // // //                     </p>
// // // // // //                   </div>
                  
// // // // // //                   <button
// // // // // //                     onClick={() => setExpandedCard(isExpanded ? null : index)}
// // // // // //                     className="mt-auto w-full bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
// // // // // //                   >
// // // // // //                     {isExpanded ? "Show Less" : "Learn More"}
// // // // // //                   </button>
// // // // // //                 </CardContent>
// // // // // //               </Card>
// // // // // //             );
// // // // // //           })}
// // // // // //         </div>

// // // // // //         {/* Remaining Cards */}
// // // // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// // // // // //           {features.slice(3).map((feature, index) => {
// // // // // //             const Icon = feature.icon;
// // // // // //             const actualIndex = index + 3; // बाकी कार्ड्स के लिए unique index
// // // // // //             const isExpanded = expandedCard === actualIndex;

// // // // // //             return (
// // // // // //               <Card
// // // // // //                 key={actualIndex}
// // // // // //                 className={`bg-slate-50 w-full shadow-md hover:shadow-lg transition-all duration-300 group ${
// // // // // //                   isExpanded ? "h-auto" : "h-56"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 <CardContent className="p-6 flex flex-col h-full justify-between">
// // // // // //                   <div>
// // // // // //                     <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // // //                       <Icon className="w-8 h-8 text-primary" />
// // // // // //                     </div>
// // // // // //                     <h3 className="text-xl font-semibold text-gray-900 mb-3">
// // // // // //                       {feature.title}
// // // // // //                     </h3>
// // // // // //                     <p className={`text-gray-600 mb-4 ${isExpanded ? "" : "line-clamp-2"}`}>
// // // // // //                       {feature.description}
// // // // // //                     </p>
// // // // // //                   </div>

// // // // // //                   <button
// // // // // //                     onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// // // // // //                     className="text-sm font-medium text-[hsl(218,46%,36%)] hover:text-orange-600 self-start transition-colors"
// // // // // //                   >
// // // // // //                     {isExpanded ? "Show Less ↑" : "Learn More →"}
// // // // // //                   </button>
// // // // // //                 </CardContent>
// // // // // //               </Card>
// // // // // //             );
// // // // // //           })}
// // // // // //         </div>

// // // // // //         {/* Auto-scrolling boxes */}
// // // // // //         <div className="relative mb-12">
// // // // // //           <div
// // // // // //             ref={scrollRef}
// // // // // //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// // // // // //             style={{
// // // // // //               scrollBehavior: "smooth",
// // // // // //               borderRadius: "8px",
// // // // // //               overflow: "hidden",
// // // // // //             }}
// // // // // //           >
// // // // // //             {boxes.map((box) => (
// // // // // //               <div
// // // // // //                 key={box.id}
// // // // // //                 className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4"
// // // // // //                 style={{
// // // // // //                   backgroundColor: box.color,
// // // // // //                   borderRadius: "8px",
// // // // // //                 }}
// // // // // //               />
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }




// // // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // // import {
// // // // // //   TrendingUp,
// // // // // //   Globe,
// // // // // //   Briefcase,
// // // // // //   Heart,
// // // // // //   FileText,
// // // // // //   Users,
// // // // // //   BarChart3,
// // // // // //   Library,
// // // // // // } from "lucide-react";

// // // // // // const features = [
// // // // // //   {
// // // // // //     icon: Users,
// // // // // //     title: "🤝 1:1 Mentorship",
// // // // // //     description:
// // // // // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: FileText,
// // // // // //     title: "🧪 Mock Tests & Practice",
// // // // // //     description:
// // // // // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Heart,
// // // // // //     title: "🧠 Psychological Support",
// // // // // //     description:
// // // // // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Briefcase,
// // // // // //     title: "👩‍💼 HR & Job Assistance",
// // // // // //     description:
// // // // // //       "Get job placement support with resume building and interview preparation.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Globe,
// // // // // //     title: "🌍 Career Guidance",
// // // // // //     description:
// // // // // //       "Explore career opportunities and choose the right path according to your interests and skills.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: TrendingUp,
// // // // // //     title: "📈 Skill Development & Training",
// // // // // //     description:
// // // // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Library,
// // // // // //     title: "📚 Stream & Subject Help",
// // // // // //     description:
// // // // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Briefcase,
// // // // // //     title: "👩‍💼 HR & Job Assistance",
// // // // // //     description:
// // // // // //       "Get job placement support with resume building and interview preparation.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Heart,
// // // // // //     title: "🧠 Psychological Support",
// // // // // //     description:
// // // // // //       "Mental health support and stress management for academic and personal challenges.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: FileText,
// // // // // //     title: "🧪 Mock Tests & Practice",
// // // // // //     description:
// // // // // //       "Practice with realistic mock tests and get detailed performance analytics.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Users,
// // // // // //     title: "🤝 One-to-One Mentorship",
// // // // // //     description:
// // // // // //       "Personalized guidance sessions with experienced mentors in your field of interest.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: BarChart3,
// // // // // //     title: "📈 Skill Development & Training",
// // // // // //     description:
// // // // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Library,
// // // // // //     title: "📚 Stream & Subject Help",
// // // // // //     description:
// // // // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // // // //   },
// // // // // // ];

// // // // // // export function Features() {
// // // // // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // // // // //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
// // // // // //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// // // // // //   // Generate boxes
// // // // // //   useEffect(() => {
// // // // // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // // // // //       id: i,
// // // // // //       description: `Learn ${i + 1}`,
// // // // // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // // // // //     }));
// // // // // //     setBoxes(items);
// // // // // //   }, []);

// // // // // //   // Auto scroll
// // // // // //   useEffect(() => {
// // // // // //     const scrollContainer = scrollRef.current;
// // // // // //     if (!scrollContainer) return;

// // // // // //     let direction = 1;
// // // // // //     const scrollStep = 1;
// // // // // //     const scrollDelay = 15;

// // // // // //     const interval = setInterval(() => {
// // // // // //       if (!scrollContainer) return;
// // // // // //       scrollContainer.scrollLeft += scrollStep * direction;

// // // // // //       if (
// // // // // //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// // // // // //         scrollContainer.scrollWidth - 1
// // // // // //       ) {
// // // // // //         direction = -1;
// // // // // //       }
// // // // // //       if (scrollContainer.scrollLeft <= 0) {
// // // // // //         direction = 1;
// // // // // //       }
// // // // // //     }, scrollDelay);

// // // // // //     return () => clearInterval(interval);
// // // // // //   }, [boxes]);

// // // // // //   // Hide scrollbar styles
// // // // // //   useEffect(() => {
// // // // // //     const styleEl = document.createElement("style");
// // // // // //     styleEl.id = "features-scrollbar-hide";
// // // // // //     styleEl.innerHTML = `
// // // // // //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// // // // // //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// // // // // //     `;
// // // // // //     document.head.appendChild(styleEl);
// // // // // //     return () => {
// // // // // //       const existing = document.getElementById("features-scrollbar-hide");
// // // // // //       if (existing) existing.remove();
// // // // // //     };
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <section id="features" className="py-20 bg-white">
// // // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // // //         {/* Section Header */}
// // // // // //         <div className="text-center mb-16">
// // // // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // // // //             Comprehensive Guidance for Every Student
// // // // // //           </h2>
// // // // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // // // //             From academic support to career planning, we provide everything you
// // // // // //             need to succeed in your educational journey.
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* Top 3 Cards */}
// // // // // //         <div className="flex flex-wrap justify-center gap-8 mb-12">
// // // // // //           {features.slice(0, 3).map((feature, index) => {
// // // // // //             const Icon = feature.icon;
// // // // // //             const bgColors = [
// // // // // //               "bg-[rgb(125,219,123)]",
// // // // // //               "bg-[rgb(255,153,153)]",
// // // // // //               "bg-[rgb(169,254,255)]",
// // // // // //             ];
            
// // // // // //             const isExpanded = expandedCard === index;

// // // // // //             return (
// // // // // //               <Card
// // // // // //                 key={index}
// // // // // //                 // यहाँ h-[320px] से बढ़कर h-[480px] हो जाएगी खुलते ही
// // // // // //                 className={`${bgColors[index]} text-black w-full md:w-[350px] shadow-md hover:shadow-lg transition-all duration-500 ease-in-out group ${
// // // // // //                   isExpanded ? "h-[480px]" : "h-[320px]"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 <CardContent className="p-6 flex flex-col h-full justify-between">
// // // // // //                   <div>
// // // // // //                     <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // // //                       <Icon className="w-8 h-8 text-black" />
// // // // // //                     </div>
// // // // // //                     <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    
// // // // // //                     {/* जब बंद रहेगा तो सिर्फ 2 लाइन दिखेगी, खुलने पर पूरा */}
// // // // // //                     <p className={`text-black/80 transition-all ${isExpanded ? "" : "line-clamp-2"}`}>
// // // // // //                       {feature.description}
// // // // // //                     </p>
// // // // // //                   </div>
                  
// // // // // //                   <button
// // // // // //                     onClick={() => setExpandedCard(isExpanded ? null : index)}
// // // // // //                     className="mt-auto w-full bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
// // // // // //                   >
// // // // // //                     {isExpanded ? "Show Less ↑" : "Learn More →"}
// // // // // //                   </button>
// // // // // //                 </CardContent>
// // // // // //               </Card>
// // // // // //             );
// // // // // //           })}
// // // // // //         </div>

// // // // // //         {/* Remaining Cards */}
// // // // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// // // // // //           {features.slice(3).map((feature, index) => {
// // // // // //             const Icon = feature.icon;
// // // // // //             const actualIndex = index + 3; 
// // // // // //             const isExpanded = expandedCard === actualIndex;

// // // // // //             return (
// // // // // //               <Card
// // // // // //                 key={actualIndex}
// // // // // //                 // यहाँ बाकी कार्ड्स की हाइट h-56 (224px) से बढ़कर सीधे h-[420px] हो जाएगी
// // // // // //                 className={`bg-slate-50 w-full shadow-md hover:shadow-lg transition-all duration-500 ease-in-out group ${
// // // // // //                   isExpanded ? "h-[420px]" : "h-56"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 <CardContent className="p-6 flex flex-col h-full justify-between">
// // // // // //                   <div>
// // // // // //                     <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // // //                       <Icon className="w-8 h-8 text-primary" />
// // // // // //                     </div>
// // // // // //                     <h3 className="text-xl font-semibold text-gray-900 mb-3">
// // // // // //                       {feature.title}
// // // // // //                     </h3>
// // // // // //                     <p className={`text-gray-600 ${isExpanded ? "" : "line-clamp-2"}`}>
// // // // // //                       {feature.description}
// // // // // //                     </p>
// // // // // //                   </div>

// // // // // //                   <button
// // // // // //                     onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// // // // // //                     className="mt-4 text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 self-start transition-colors"
// // // // // //                   >
// // // // // //                     {isExpanded ? "Show Less ↑" : "Learn More →"}
// // // // // //                   </button>
// // // // // //                 </CardContent>
// // // // // //               </Card>
// // // // // //             );
// // // // // //           })}
// // // // // //         </div>

// // // // // //         {/* Auto-scrolling boxes */}
// // // // // //         <div className="relative mb-12">
// // // // // //           <div
// // // // // //             ref={scrollRef}
// // // // // //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// // // // // //             style={{
// // // // // //               scrollBehavior: "smooth",
// // // // // //               borderRadius: "8px",
// // // // // //               overflow: "hidden",
// // // // // //             }}
// // // // // //           >
// // // // // //             {boxes.map((box) => (
// // // // // //               <div
// // // // // //                 key={box.id}
// // // // // //                 className="min-w-[200px] h-[150px] flex-shrink-0 shadow-md p-4"
// // // // // //                 style={{
// // // // // //                   backgroundColor: box.color,
// // // // // //                   borderRadius: "8px",
// // // // // //                 }}
// // // // // //               />
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }





// // // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // // import {
// // // // // //   TrendingUp,
// // // // // //   Globe,
// // // // // //   Briefcase,
// // // // // //   Heart,
// // // // // //   FileText,
// // // // // //   Users,
// // // // // //   BarChart3,
// // // // // //   Library,
// // // // // // } from "lucide-react";

// // // // // // const features = [
// // // // // //   {
// // // // // //     icon: Users,
// // // // // //     title: "🤝 1:1 Mentorship",
// // // // // //     description:
// // // // // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: FileText,
// // // // // //     title: "🧪 Mock Tests & Practice",
// // // // // //     description:
// // // // // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Heart,
// // // // // //     title: "🧠 Psychological Support",
// // // // // //     description:
// // // // // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Briefcase,
// // // // // //     title: "👩‍💼 HR & Job Assistance",
// // // // // //     description:
// // // // // //       "Get job placement support with resume building and interview preparation.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Globe,
// // // // // //     title: "🌍 Career Guidance",
// // // // // //     description:
// // // // // //       "Explore career opportunities and choose the right path according to your interests and skills.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: TrendingUp,
// // // // // //     title: "📈 Skill Development & Training",
// // // // // //     description:
// // // // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Library,
// // // // // //     title: "📚 Stream & Subject Help",
// // // // // //     description:
// // // // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Briefcase,
// // // // // //     title: "👩‍💼 HR & Job Assistance",
// // // // // //     description:
// // // // // //       "Get job placement support with resume building and interview preparation.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Heart,
// // // // // //     title: "🧠 Psychological Support",
// // // // // //     description:
// // // // // //       "Mental health support and stress management for academic and personal challenges.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: FileText,
// // // // // //     title: "🧪 Mock Tests & Practice",
// // // // // //     description:
// // // // // //       "Practice with realistic mock tests and get detailed performance analytics.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Users,
// // // // // //     title: "🤝 One-to-One Mentorship",
// // // // // //     description:
// // // // // //       "Personalized guidance sessions with experienced mentors in your field of interest.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: BarChart3,
// // // // // //     title: "📈 Skill Development & Training",
// // // // // //     description:
// // // // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: Library,
// // // // // //     title: "📚 Stream & Subject Help",
// // // // // //     description:
// // // // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // // // //   },
// // // // // // ];

// // // // // // export function Features() {
// // // // // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // // // // //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
  
// // // // // //   // 1. expandedCard स्टेट को यहाँ कॉम्पोनेंट के अंदर रखा है
// // // // // //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// // // // // //   // Generate boxes
// // // // // //   useEffect(() => {
// // // // // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // // // // //       id: i,
// // // // // //       description: `Learn ${i + 1}`,
// // // // // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // // // // //     }));
// // // // // //     setBoxes(items);
// // // // // //   }, []);

// // // // // //   // Auto scroll (reverse at ends)
// // // // // //   useEffect(() => {
// // // // // //     const scrollContainer = scrollRef.current;
// // // // // //     if (!scrollContainer) return;

// // // // // //     let direction = 1;
// // // // // //     const scrollStep = 1;
// // // // // //     const scrollDelay = 15;

// // // // // //     const interval = setInterval(() => {
// // // // // //       if (!scrollContainer) return;
// // // // // //       scrollContainer.scrollLeft += scrollStep * direction;

// // // // // //       if (
// // // // // //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// // // // // //         scrollContainer.scrollWidth - 1
// // // // // //       ) {
// // // // // //         direction = -1;
// // // // // //       }
// // // // // //       if (scrollContainer.scrollLeft <= 0) {
// // // // // //         direction = 1;
// // // // // //       }
// // // // // //     }, scrollDelay);

// // // // // //     return () => clearInterval(interval);
// // // // // //   }, [boxes]);

// // // // // //   // Hide scrollbar styles
// // // // // //   useEffect(() => {
// // // // // //     const styleEl = document.createElement("style");
// // // // // //     styleEl.id = "features-scrollbar-hide";
// // // // // //     styleEl.innerHTML = `
// // // // // //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// // // // // //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// // // // // //     `;
// // // // // //     document.head.appendChild(styleEl);
// // // // // //     return () => {
// // // // // //       const existing = document.getElementById("features-scrollbar-hide");
// // // // // //       if (existing) existing.remove();
// // // // // //     };
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <section id="features" className="py-20 bg-white">
// // // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // // //         {/* Section Header */}
// // // // // //         <div className="text-center mb-16">
// // // // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // // // //             Comprehensive Guidance for Every Student
// // // // // //           </h2>
// // // // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // // // //             From academic support to career planning, we provide everything you
// // // // // //             need to succeed in your educational journey.
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* Top 3 Cards */}
// // // // // //         <div className="flex flex-wrap justify-center gap-8 mb-12">
// // // // // //           {features.slice(0, 3).map((feature, index) => {
// // // // // //             const Icon = feature.icon;
// // // // // //             const bgColors = [
// // // // // //               "bg-[rgb(125,219,123)]",
// // // // // //               "bg-[rgb(255,153,153)]",
// // // // // //               "bg-[rgb(169,254,255)]",
// // // // // //             ];
            
// // // // // //             // चेक करें कि क्या यह कार्ड खुला हुआ है
// // // // // //             const isExpanded = expandedCard === index;

// // // // // //             return (
// // // // // //               <Card
// // // // // //                 key={index}
// // // // // //                 className={`${bgColors[index]} text-black w-full md:w-[350px] shadow-md hover:shadow-lg transition-all duration-300 group ${
// // // // // //                   isExpanded ? "h-auto" : "h-[320px]"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 <CardContent className="p-6 flex flex-col h-full justify-between">
// // // // // //                   <div>
// // // // // //                     <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // // //                       <Icon className="w-8 h-8 text-black" />
// // // // // //                     </div>
// // // // // //                     <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    
// // // // // //                     {/* अगर expanded नहीं है तो टेक्स्ट 2 लाइनों के बाद कट जाएगा */}
// // // // // //                     <p className={`text-black/80 mb-4 ${isExpanded ? "" : "line-clamp-2"}`}>
// // // // // //                       {feature.description}
// // // // // //                     </p>
// // // // // //                   </div>
                  
// // // // // //                   <button
// // // // // //                     onClick={() => setExpandedCard(isExpanded ? null : index)}
// // // // // //                     className="mt-auto w-full bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
// // // // // //                   >
// // // // // //                     {isExpanded ? "Show Less" : "Learn More"}
// // // // // //                   </button>
// // // // // //                 </CardContent>
// // // // // //               </Card>
// // // // // //             );
// // // // // //           })}
// // // // // //         </div>

// // // // // //         {/* Remaining Cards */}
// // // // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// // // // // //           {features.slice(3).map((feature, index) => {
// // // // // //             const Icon = feature.icon;
// // // // // //             const actualIndex = index + 3; // बाकी कार्ड्स के लिए unique index
// // // // // //             const isExpanded = expandedCard === actualIndex;

// // // // // //             return (
// // // // // //               <Card
// // // // // //                 key={actualIndex}
// // // // // //                 className={`bg-slate-50 w-full shadow-md hover:shadow-lg transition-all duration-300 group ${
// // // // // //                   isExpanded ? "h-auto" : "h-56"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 <CardContent className="p-6 flex flex-col h-full justify-between">
// // // // // //                   <div>
// // // // // //                     <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // // //                       <Icon className="w-8 h-8 text-primary" />
// // // // // //                     </div>
// // // // // //                     <h3 className="text-xl font-semibold text-gray-900 mb-3">
// // // // // //                       {feature.title}
// // // // // //                     </h3>
// // // // // //                     <p className={`text-gray-600 mb-4 ${isExpanded ? "" : "line-clamp-2"}`}>
// // // // // //                       {feature.description}
// // // // // //                     </p>
// // // // // //                   </div>

// // // // // //                   <button
// // // // // //                     onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// // // // // //                     className="text-sm font-medium text-[hsl(218,46%,36%)] hover:text-orange-600 self-start transition-colors"
// // // // // //                   >
// // // // // //                     {isExpanded ? "Show Less ↑" : "Learn More →"}
// // // // // //                   </button>
// // // // // //                 </CardContent>
// // // // // //               </Card>
// // // // // //             );
// // // // // //           })}
// // // // // //         </div>

// // // // // //         {/* Auto-scrolling boxes */}
// // // // // //         <div className="relative mb-12">
// // // // // //           <div
// // // // // //             ref={scrollRef}
// // // // // //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// // // // // //             style={{
// // // // // //               scrollBehavior: "smooth",
// // // // // //               borderRadius: "8px",
// // // // // //               overflow: "hidden",
// // // // // //             }}
// // // // // //           >
// // // // // //             {boxes.map((box) => (
// // // // // //               <div
// // // // // //                 key={box.id}
// // // // // //                 className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4"
// // // // // //                 style={{
// // // // // //                   backgroundColor: box.color,
// // // // // //                   borderRadius: "8px",
// // // // // //                 }}
// // // // // //               />
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }


// // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // import {
// // // // //   TrendingUp,
// // // // //   Globe,
// // // // //   Briefcase,
// // // // //   Heart,
// // // // //   FileText,
// // // // //   Users,
// // // // //   BarChart3,
// // // // //   Library,
// // // // //   BookOpen,
// // // // // } from "lucide-react";

// // // // // const features = [
// // // // //   {
// // // // //     icon: Users,
// // // // //     title: "🤝 1:1 Mentorship",
// // // // //     description:
// // // // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // // // //   },
// // // // //   {
// // // // //     icon: FileText,
// // // // //     title: "🧪 Mock Tests & Practice",
// // // // //     description:
// // // // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // // // //   },
// // // // //   {
// // // // //     icon: Heart,
// // // // //     title: "🧠 Psychological Support",
// // // // //     description:
// // // // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // // // //   },
// // // // //   {
// // // // //     icon: Briefcase,
// // // // //     title: "👩‍💼 HR & Job Assistance",
// // // // //     description:
// // // // //       "Get job placement support with resume building and interview preparation.",
// // // // //   },
// // // // //   {
// // // // //     icon: Globe,
// // // // //     title: "🌍 Career Guidance",
// // // // //     description:
// // // // //       "Explore career opportunities and choose the right path according to your interests and skills.",
// // // // //   },
// // // // //   {
// // // // //     icon: TrendingUp,
// // // // //     title: "📈 Skill Development & Training",
// // // // //     description:
// // // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // // //   },
// // // // //   {
// // // // //     icon: Library,
// // // // //     title: "📚 Stream & Subject Help",
// // // // //     description:
// // // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // // //   },
// // // // // ];

// // // // // // इमेज वाला "Personalized Study Plan" कॉम्पोनेंट
// // // // // function PersonalizedStudyPlan() {
// // // // //   return (
// // // // //     <div className="w-full mt-6 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
// // // // //       {/* Left Side: Modern Vector Illustration Recreated in CSS/SVG */}
// // // // //       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-xl overflow-hidden">
// // // // //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
// // // // //         <div className="flex items-center gap-4 z-10">
// // // // //           <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
// // // // //             <BarChart3 className="w-10 h-10" />
// // // // //           </div>
// // // // //           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
// // // // //             <FileText className="w-10 h-10" />
// // // // //           </div>
// // // // //           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
// // // // //             <TrendingUp className="w-10 h-10" />
// // // // //           </div>
// // // // //         </div>
// // // // //         {/* Abstract background shapes */}
// // // // //         <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
// // // // //         <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-50"></div>
// // // // //       </div>

// // // // //       {/* Right Side: Content */}
// // // // //       <div className="w-full md:w-1/2 flex flex-col items-start text-left">
// // // // //         <div className="flex items-center gap-2 mb-3">
// // // // //           <span className="text-2xl">📚</span>
// // // // //           <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase text-sm md:text-base">
// // // // //             Personalized Study Plan
// // // // //           </h4>
// // // // //         </div>
        
// // // // //         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
// // // // //           Weak–strong subject analysis Daily + weekly target sheet PYQ based planning (especially from NEET-UG trend)
// // // // //         </p>

// // // // //         <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
// // // // //           JOIN US
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export function Features() {
// // // // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // // // //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
// // // // //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// // // // //   // Generate boxes
// // // // //   useEffect(() => {
// // // // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // // // //       id: i,
// // // // //       description: `Learn ${i + 1}`,
// // // // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // // // //     }));
// // // // //     setBoxes(items);
// // // // //   }, []);

// // // // //   // Auto scroll
// // // // //   useEffect(() => {
// // // // //     const scrollContainer = scrollRef.current;
// // // // //     if (!scrollContainer) return;
// // // // //     let direction = 1;
// // // // //     const scrollStep = 1;
// // // // //     const scrollDelay = 15;
// // // // //     const interval = setInterval(() => {
// // // // //       if (!scrollContainer) return;
// // // // //       scrollContainer.scrollLeft += scrollStep * direction;
// // // // //       if (
// // // // //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// // // // //         scrollContainer.scrollWidth - 1
// // // // //       ) {
// // // // //         direction = -1;
// // // // //       }
// // // // //       if (scrollContainer.scrollLeft <= 0) {
// // // // //         direction = 1;
// // // // //       }
// // // // //     }, scrollDelay);
// // // // //     return () => clearInterval(interval);
// // // // //   }, [boxes]);

// // // // //   // Hide scrollbar styles
// // // // //   useEffect(() => {
// // // // //     const styleEl = document.createElement("style");
// // // // //     styleEl.id = "features-scrollbar-hide";
// // // // //     styleEl.innerHTML = `
// // // // //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// // // // //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// // // // //     `;
// // // // //     document.head.appendChild(styleEl);
// // // // //     return () => {
// // // // //       const existing = document.getElementById("features-scrollbar-hide");
// // // // //       if (existing) existing.remove();
// // // // //     };
// // // // //   }, []);

// // // // //   return (
// // // // //     <section id="features" className="py-20 bg-white">
// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// // // // //         {/* Section Header */}
// // // // //         <div className="text-center mb-16">
// // // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // // //             Comprehensive Guidance for Every Student
// // // // //           </h2>
// // // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // // //             From academic support to career planning, we provide everything you
// // // // //             need to succeed in your educational journey.
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Top 3 Cards */}
// // // // //         <div className="flex flex-col gap-4 mb-12">
// // // // //           <div className="flex flex-wrap justify-center gap-8">
// // // // //             {features.slice(0, 3).map((feature, index) => {
// // // // //               const Icon = feature.icon;
// // // // //               const bgColors = [
// // // // //                 "bg-[rgb(125,219,123)]",
// // // // //                 "bg-[rgb(255,153,153)]",
// // // // //                 "bg-[rgb(169,254,255)]",
// // // // //               ];
              
// // // // //               const isExpanded = expandedCard === index;
// // // // //               return (
// // // // //                 <div key={index} className="w-full md:w-[350px] flex flex-col">
// // // // //                   <Card
// // // // //                     className={`${bgColors[index]} text-black h-[320px] shadow-md hover:shadow-lg transition-all duration-300 group`}
// // // // //                   >
// // // // //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// // // // //                       <div>
// // // // //                         <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // //                           <Icon className="w-8 h-8 text-black" />
// // // // //                         </div>
// // // // //                         <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// // // // //                         <p className="text-black/80 mb-4 line-clamp-3">
// // // // //                           {feature.description}
// // // // //                         </p>
// // // // //                       </div>
                      
// // // // //                       <button
// // // // //                         onClick={() => setExpandedCard(isExpanded ? null : index)}
// // // // //                         className="mt-auto w-full bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium"
// // // // //                       >
// // // // //                         {isExpanded ? "Show Less" : "Learn More"}
// // // // //                       </button>
// // // // //                     </CardContent>
// // // // //                   </Card>
// // // // //                 </div>
// // // // //               );
// // // // //             })}
// // // // //           </div>
          
// // // // //           {/* अगर top 3 में से कोई कार्ड सिलेक्टेड है तो यहाँ स्टडी प्लान दिखेगा */}
// // // // //           {expandedCard !== null && expandedCard < 3 && (
// // // // //             <PersonalizedStudyPlan />
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Remaining Cards */}
// // // // //         <div className="flex flex-col gap-6 mb-16">
// // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // //             {features.slice(3).map((feature, index) => {
// // // // //               const Icon = feature.icon;
// // // // //               const actualIndex = index + 3;
// // // // //               const isExpanded = expandedCard === actualIndex;
// // // // //               return (
// // // // //                 <div key={actualIndex} className="w-full flex flex-col">
// // // // //                   <Card
// // // // //                     className="bg-slate-50 w-full h-64 shadow-md hover:shadow-lg transition-all duration-300 group"
// // // // //                   >
// // // // //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// // // // //                       <div>
// // // // //                         <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // //                           <Icon className="w-8 h-8 text-primary" />
// // // // //                         </div>
// // // // //                         <h3 className="text-xl font-semibold text-gray-900 mb-3">
// // // // //                           {feature.title}
// // // // //                         </h3>
// // // // //                         <p className="text-gray-600 mb-4 line-clamp-2">
// // // // //                           {feature.description}
// // // // //                         </p>
// // // // //                       </div>
// // // // //                       <button
// // // // //                         onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// // // // //                         className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 self-start transition-colors flex items-center gap-1"
// // // // //                       >
// // // // //                         {isExpanded ? "Show Less ↑" : "Learn More →"}
// // // // //                       </button>
// // // // //                     </CardContent>
// // // // //                   </Card>
// // // // //                 </div>
// // // // //               );
// // // // //             })}
// // // // //           </div>

// // // // //           {/* अगर नीचे की ग्रिड में से कोई कार्ड सिलेक्टेड है तो उसके ठीक नीचे स्टडी प्लान दिखेगा */}
// // // // //           {expandedCard !== null && expandedCard >= 3 && (
// // // // //             <PersonalizedStudyPlan />
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Auto-scrolling boxes */}
// // // // //         <div className="relative mb-12">
// // // // //           <div
// // // // //             ref={scrollRef}
// // // // //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// // // // //             style={{
// // // // //               scrollBehavior: "smooth",
// // // // //               borderRadius: "8px",
// // // // //               overflow: "hidden",
// // // // //             }}
// // // // //           >
// // // // //             {boxes.map((box) => (
// // // // //               <div
// // // // //                 key={box.id}
// // // // //                 className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4"
// // // // //                 style={{
// // // // //                   backgroundColor: box.color,
// // // // //                   borderRadius: "8px",
// // // // //                 }}
// // // // //               />
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }



// // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // import {
// // // // //   TrendingUp,
// // // // //   Globe,
// // // // //   Briefcase,
// // // // //   Heart,
// // // // //   FileText,
// // // // //   Users,
// // // // //   BarChart3,
// // // // //   Library,
// // // // // } from "lucide-react";

// // // // // const features = [
// // // // //   {
// // // // //     icon: Users,
// // // // //     title: "🤝 1:1 Mentorship",
// // // // //     description:
// // // // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // // // //   },
// // // // //   {
// // // // //     icon: FileText,
// // // // //     title: "🧪 Mock Tests & Practice",
// // // // //     description:
// // // // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // // // //   },
// // // // //   {
// // // // //     icon: Heart,
// // // // //     title: "🧠 Psychological Support",
// // // // //     description:
// // // // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // // // //   },
// // // // //   {
// // // // //     icon: Briefcase,
// // // // //     title: "👩‍💼 HR & Job Assistance",
// // // // //     description:
// // // // //       "Get job placement support with resume building and interview preparation.",
// // // // //   },
// // // // //   {
// // // // //     icon: Globe,
// // // // //     title: "🌍 Career Guidance",
// // // // //     description:
// // // // //       "Explore career opportunities and choose the right path according to your interests and skills.",
// // // // //   },
// // // // //   {
// // // // //     icon: TrendingUp,
// // // // //     title: "📈 Skill Development & Training",
// // // // //     description:
// // // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // // //   },
// // // // //   {
// // // // //     icon: Library,
// // // // //     title: "📚 Stream & Subject Help",
// // // // //     description:
// // // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // // //   },
// // // // // ];

// // // // // // अलग-अलग कार्ड्स के लिए अलग-अलग कंटेंट (Different Matter)
// // // // // const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
// // // // //   0: {
// // // // //     title: "Personalized Study Plan",
// // // // //     desc: "Weak–strong subject analysis Daily + weekly target sheet PYQ based planning (especially from NEET-UG trend)",
// // // // //     icon: "📚",
// // // // //   },
// // // // //   1: {
// // // // //     title: "Test Series & Evaluation",
// // // // //     desc: "All India Rank analysis, mistake log tracking, time-management sheets, and customized revision tests.",
// // // // //     icon: "🧪",
// // // // //   },
// // // // //   2: {
// // // // //     title: "Mindset & Motivation Plan",
// // // // //     desc: "Weekly stress-buster sessions, 1:1 interaction with counselors, and customized schedules to avoid burnout.",
// // // // //     icon: "🧠",
// // // // //   },
// // // // //   3: {
// // // // //     title: "Placement Preparation Toolkit",
// // // // //     desc: "Resume review, live mock HR interviews, industry-specific soft skill training, and direct referral opportunities.",
// // // // //     icon: "💼",
// // // // //   },
// // // // //   4: {
// // // // //     title: "Global Career Roadmap",
// // // // //     desc: "In-depth profile building for global markets, profile enhancement advice, and university selection support.",
// // // // //     icon: "🌍",
// // // // //   },
// // // // //   5: {
// // // // //     title: "Advanced Tech & Skills Training",
// // // // //     desc: "Hands-on capstone projects, cohort-based learning, industry mentorship, and verified portfolio building.",
// // // // //     icon: "📈",
// // // // //   },
// // // // //   6: {
// // // // //     title: "Academic Stream Roadmap",
// // // // //     desc: "Subject combination advisor, continuous track evaluation, and specific curriculum help with top faculties.",
// // // // //   },
// // // // // };

// // // // // // डायनेमिक कंटेंट वाला Study Plan बॉक्स कॉम्पोनेंट
// // // // // function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
// // // // //   // अगर उस इंडेक्स का डेटा नहीं मिलता तो डिफ़ॉल्ट डेटा दिखाएगा
// // // // //   const data = studyPlanData[activeIndex] || studyPlanData[0];

// // // // //   return (
// // // // //     <div className="w-full mt-6 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
// // // // //       {/* Left Side: Modern Interactive Vectors */}
// // // // //       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-xl overflow-hidden">
// // // // //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
// // // // //         <div className="flex items-center gap-4 z-10">
// // // // //           <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
// // // // //             <BarChart3 className="w-10 h-10" />
// // // // //           </div>
// // // // //           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
// // // // //             <FileText className="w-10 h-10" />
// // // // //           </div>
// // // // //           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
// // // // //             <TrendingUp className="w-10 h-10" />
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
// // // // //         <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-50"></div>
// // // // //       </div>

// // // // //       {/* Right Side: Dynamic Content based on active card */}
// // // // //       <div className="w-full md:w-1/2 flex flex-col items-start text-left">
// // // // //         <div className="flex items-center gap-2 mb-3">
// // // // //           <span className="text-2xl">{data.icon}</span>
// // // // //           <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase text-sm md:text-base">
// // // // //             {data.title}
// // // // //           </h4>
// // // // //         </div>
        
// // // // //         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
// // // // //           {data.desc}
// // // // //         </p>

// // // // //         <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
// // // // //           JOIN US
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export function Features() {
// // // // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // // // //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
  
// // // // //   // डिफ़ॉल्ट रूप से 0 (पहला कार्ड) ओपन रहेगा
// // // // //   const [expandedCard, setExpandedCard] = useState<number | null>(0);

// // // // //   // Generate boxes
// // // // //   useEffect(() => {
// // // // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // // // //       id: i,
// // // // //       description: `Learn ${i + 1}`,
// // // // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // // // //     }));
// // // // //     setBoxes(items);
// // // // //   }, []);

// // // // //   // Auto scroll
// // // // //   useEffect(() => {
// // // // //     const scrollContainer = scrollRef.current;
// // // // //     if (!scrollContainer) return;
// // // // //     let direction = 1;
// // // // //     const scrollStep = 1;
// // // // //     const scrollDelay = 15;
// // // // //     const interval = setInterval(() => {
// // // // //       if (!scrollContainer) return;
// // // // //       scrollContainer.scrollLeft += scrollStep * direction;
// // // // //       if (
// // // // //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// // // // //         scrollContainer.scrollWidth - 1
// // // // //       ) {
// // // // //         direction = -1;
// // // // //       }
// // // // //       if (scrollContainer.scrollLeft <= 0) {
// // // // //         direction = 1;
// // // // //       }
// // // // //     }, scrollDelay);
// // // // //     return () => clearInterval(interval);
// // // // //   }, [boxes]);

// // // // //   // Hide scrollbar styles
// // // // //   useEffect(() => {
// // // // //     const styleEl = document.createElement("style");
// // // // //     styleEl.id = "features-scrollbar-hide";
// // // // //     styleEl.innerHTML = `
// // // // //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// // // // //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// // // // //     `;
// // // // //     document.head.appendChild(styleEl);
// // // // //     return () => {
// // // // //       const existing = document.getElementById("features-scrollbar-hide");
// // // // //       if (existing) existing.remove();
// // // // //     };
// // // // //   }, []);

// // // // //   return (
// // // // //     <section id="features" className="py-20 bg-white">
// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// // // // //         {/* Section Header */}
// // // // //         <div className="text-center mb-16">
// // // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // // //             Comprehensive Guidance for Every Student
// // // // //           </h2>
// // // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // // //             From academic support to career planning, we provide everything you
// // // // //             need to succeed in your educational journey.
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Top 3 Cards Row */}
// // // // //         <div className="flex flex-col gap-4 mb-12">
// // // // //           <div className="flex flex-wrap justify-center gap-8">
// // // // //             {features.slice(0, 3).map((feature, index) => {
// // // // //               const Icon = feature.icon;
// // // // //               const bgColors = [
// // // // //                 "bg-[rgb(125,219,123)]",
// // // // //                 "bg-[rgb(255,153,153)]",
// // // // //                 "bg-[rgb(169,254,255)]",
// // // // //               ];
              
// // // // //               const isExpanded = expandedCard === index;
// // // // //               return (
// // // // //                 <div key={index} className="w-full md:w-[350px] flex flex-col">
// // // // //                   <Card
// // // // //                     className={`${bgColors[index]} text-black h-[320px] shadow-md hover:shadow-lg transition-all duration-300 group ${
// // // // //                       isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""
// // // // //                     }`}
// // // // //                   >
// // // // //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// // // // //                       <div>
// // // // //                         <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // //                           <Icon className="w-8 h-8 text-black" />
// // // // //                         </div>
// // // // //                         <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// // // // //                         <p className="text-black/80 mb-4 line-clamp-3">
// // // // //                           {feature.description}
// // // // //                         </p>
// // // // //                       </div>
                      
// // // // //                       <button
// // // // //                         onClick={() => setExpandedCard(isExpanded ? null : index)}
// // // // //                         className={`mt-auto w-full px-4 py-2 rounded-md transition-colors font-medium ${
// // // // //                           isExpanded 
// // // // //                             ? "bg-black text-white hover:bg-gray-800" 
// // // // //                             : "bg-[hsl(218,46%,36%)] text-white hover:bg-orange-600"
// // // // //                         }`}
// // // // //                       >
// // // // //                         {isExpanded ? "Show Less" : "Learn More"}
// // // // //                       </button>
// // // // //                     </CardContent>
// // // // //                   </Card>
// // // // //                 </div>
// // // // //               );
// // // // //             })}
// // // // //           </div>
          
// // // // //           {/* Top 3 में से कोई सिलेक्टेड है तो यहाँ रेंडर होगा */}
// // // // //           {expandedCard !== null && expandedCard < 3 && (
// // // // //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Remaining Cards Row */}
// // // // //         <div className="flex flex-col gap-6 mb-16">
// // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // //             {features.slice(3).map((feature, index) => {
// // // // //               const Icon = feature.icon;
// // // // //               const actualIndex = index + 3;
// // // // //               const isExpanded = expandedCard === actualIndex;
// // // // //               return (
// // // // //                 <div key={actualIndex} className="w-full flex flex-col">
// // // // //                   <Card
// // // // //                     className={`bg-slate-50 w-full h-64 shadow-md hover:shadow-lg transition-all duration-300 group ${
// // // // //                       isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""
// // // // //                     }`}
// // // // //                   >
// // // // //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// // // // //                       <div>
// // // // //                         <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // //                           <Icon className="w-8 h-8 text-primary" />
// // // // //                         </div>
// // // // //                         <h3 className="text-xl font-semibold text-gray-900 mb-3">
// // // // //                           {feature.title}
// // // // //                         </h3>
// // // // //                         <p className="text-gray-600 mb-4 line-clamp-2">
// // // // //                           {feature.description}
// // // // //                         </p>
// // // // //                       </div>
// // // // //                       <button
// // // // //                         onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// // // // //                         className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 self-start transition-colors flex items-center gap-1"
// // // // //                       >
// // // // //                         {isExpanded ? "Show Less ↑" : "Learn More →"}
// // // // //                       </button>
// // // // //                     </CardContent>
// // // // //                   </Card>
// // // // //                 </div>
// // // // //               );
// // // // //             })}
// // // // //           </div>

// // // // //           {/* नीचे वाली Row में से कोई सिलेक्टेड है तो यहाँ रेंडर होगा */}
// // // // //           {expandedCard !== null && expandedCard >= 3 && (
// // // // //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Auto-scrolling boxes */}
// // // // //         <div className="relative mb-12">
// // // // //           <div
// // // // //             ref={scrollRef}
// // // // //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// // // // //             style={{
// // // // //               scrollBehavior: "smooth",
// // // // //               borderRadius: "8px",
// // // // //               overflow: "hidden",
// // // // //             }}
// // // // //           >
// // // // //             {boxes.map((box) => (
// // // // //               <div
// // // // //                 key={box.id}
// // // // //                 className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4"
// // // // //                 style={{
// // // // //                   backgroundColor: box.color,
// // // // //                   borderRadius: "8px",
// // // // //                 }}
// // // // //               />
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }



// // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // import {
// // // // //   TrendingUp,
// // // // //   Globe,
// // // // //   Briefcase,
// // // // //   Heart,
// // // // //   FileText,
// // // // //   Users,
// // // // //   BarChart3,
// // // // //   Library,
// // // // // } from "lucide-react";

// // // // // const features = [
// // // // //   {
// // // // //     icon: Users,
// // // // //     title: "🤝 1:1 Mentorship",
// // // // //     description:
// // // // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // // // //   },
// // // // //   {
// // // // //     icon: FileText,
// // // // //     title: "🧪 Mock Tests & Practice",
// // // // //     description:
// // // // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // // // //   },
// // // // //   {
// // // // //     icon: Heart,
// // // // //     title: "🧠 Psychological Support",
// // // // //     description:
// // // // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // // // //   },
// // // // //   {
// // // // //     icon: Briefcase,
// // // // //     title: "👩‍💼 HR & Job Assistance",
// // // // //     description:
// // // // //       "Get job placement support with resume building and interview preparation.",
// // // // //   },
// // // // //   {
// // // // //     icon: Globe,
// // // // //     title: "🌍 Career Guidance",
// // // // //     description:
// // // // //       "Explore career opportunities and choose the right path according to your interests and skills.",
// // // // //   },
// // // // //   {
// // // // //     icon: TrendingUp,
// // // // //     title: "📈 Skill Development & Training",
// // // // //     description:
// // // // //       "Build industry-relevant skills with hands-on training and certification programs.",
// // // // //   },
// // // // //   {
// // // // //     icon: Library,
// // // // //     title: "📚 Stream & Subject Help",
// // // // //     description:
// // // // //       "Get expert help in specific subjects and choose the right academic stream.",
// // // // //   },
// // // // // ];


// // // // // const goals = [
// // // // //     "Learn Maths",
// // // // //     "Learn English",
// // // // //     "Science",
// // // // //     "GK",
// // // // //     "JNV Entrance",
// // // // //     "KVS",
// // // // //     "Sainik School",
// // // // //     "Olympiad",
// // // // //   ];

// // // // // // अलग-अलग कार्ड्स के लिए अलग-अलग कंटेंट (Different Matter)
// // // // // const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
// // // // //   0: {
// // // // //     title: "Personalized Study Plan",
// // // // //     desc: "Weak–strong subject analysis Daily + weekly target sheet PYQ based planning (especially from NEET-UG trend)",
// // // // //     icon: "📚",
// // // // //   },
// // // // //   1: {
// // // // //     title: "Test Series & Evaluation",
// // // // //     desc: "All India Rank analysis, mistake log tracking, time-management sheets, and customized revision tests.",
// // // // //     icon: "🧪",
// // // // //   },
// // // // //   2: {
// // // // //     title: "Mindset & Motivation Plan",
// // // // //     desc: "Weekly stress-buster sessions, 1:1 interaction with counselors, and customized schedules to avoid burnout.",
// // // // //     icon: "🧠",
// // // // //   },
// // // // //   3: {
// // // // //     title: "Placement Preparation Toolkit",
// // // // //     desc: "Resume review, live mock HR interviews, industry-specific soft skill training, and direct referral opportunities.",
// // // // //     icon: "💼",
// // // // //   },
// // // // //   4: {
// // // // //     title: "Global Career Roadmap",
// // // // //     desc: "In-depth profile building for global markets, profile enhancement advice, and university selection support.",
// // // // //     icon: "🌍",
// // // // //   },
// // // // //   5: {
// // // // //     title: "Advanced Tech & Skills Training",
// // // // //     desc: "Hands-on capstone projects, cohort-based learning, industry mentorship, and verified portfolio building.",
// // // // //     icon: "📈",
// // // // //   },
// // // // //   6: {
// // // // //     title: "Academic Stream Roadmap",
// // // // //     desc: "Subject combination advisor, continuous track evaluation, and specific curriculum help with top faculties.",
// // // // //     icon: "📚",
// // // // //   },
// // // // // };

// // // // // // डायनेमिक कंटेंट वाला Study Plan बॉक्स कॉम्पोनेंट
// // // // // function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
// // // // //   const data = studyPlanData[activeIndex] || studyPlanData[0];

// // // // //   return (
// // // // //     <div className="w-full mt-6 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
// // // // //       {/* Left Side: Modern Interactive Vectors */}
// // // // //       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-xl overflow-hidden">
// // // // //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
// // // // //         <div className="flex items-center gap-4 z-10">
// // // // //           <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
// // // // //             <BarChart3 className="w-10 h-10" />
// // // // //           </div>
// // // // //           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
// // // // //             <FileText className="w-10 h-10" />
// // // // //           </div>
// // // // //           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
// // // // //             <TrendingUp className="w-10 h-10" />
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
// // // // //         <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-50"></div>
// // // // //       </div>

// // // // //       {/* Right Side: Dynamic Content based on active card */}
// // // // //       <div className="w-full md:w-1/2 flex flex-col items-start text-left">
// // // // //         <div className="flex items-center gap-2 mb-3">
// // // // //           <span className="text-2xl">{data.icon}</span>
// // // // //           <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase text-sm md:text-base">
// // // // //             {data.title}
// // // // //           </h4>
// // // // //         </div>
        
// // // // //         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
// // // // //           {data.desc}
// // // // //         </p>

// // // // //         <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
// // // // //           JOIN US
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export function Features() {
// // // // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // // // //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
  
// // // // //   // यहाँ default वैल्यू को null सेट किया है ताकि शुरुआत में कुछ भी ओपन न रहे
// // // // //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// // // // //   // Generate boxes
// // // // //   useEffect(() => {
// // // // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // // // //       id: i,
// // // // //       description: `Learn ${i + 1}`,
// // // // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // // // //     }));
// // // // //     setBoxes(items);
// // // // //   }, []);

// // // // //   // Auto scroll
// // // // //   useEffect(() => {
// // // // //     const scrollContainer = scrollRef.current;
// // // // //     if (!scrollContainer) return;
// // // // //     let direction = 1;
// // // // //     const scrollStep = 1;
// // // // //     const scrollDelay = 15;
// // // // //     const interval = setInterval(() => {
// // // // //       if (!scrollContainer) return;
// // // // //       scrollContainer.scrollLeft += scrollStep * direction;
// // // // //       if (
// // // // //         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
// // // // //         scrollContainer.scrollWidth - 1
// // // // //       ) {
// // // // //         direction = -1;
// // // // //       }
// // // // //       if (scrollContainer.scrollLeft <= 0) {
// // // // //         direction = 1;
// // // // //       }
// // // // //     }, scrollDelay);
// // // // //     return () => clearInterval(interval);
// // // // //   }, [boxes]);

// // // // //   // Hide scrollbar styles
// // // // //   useEffect(() => {
// // // // //     const styleEl = document.createElement("style");
// // // // //     styleEl.id = "features-scrollbar-hide";
// // // // //     styleEl.innerHTML = `
// // // // //       .scrollbar-hide::-webkit-scrollbar { display: none; }
// // // // //       .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// // // // //     `;
// // // // //     document.head.appendChild(styleEl);
// // // // //     return () => {
// // // // //       const existing = document.getElementById("features-scrollbar-hide");
// // // // //       if (existing) existing.remove();
// // // // //     };
// // // // //   }, []);

// // // // //   return (
// // // // //     <section id="features" className="py-20 bg-white">
// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// // // // //         {/* Section Header */}
// // // // //         <div className="text-center mb-16">
// // // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // // //             Comprehensive Guidance for Every Student
// // // // //           </h2>
// // // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // // //             From academic support to career planning, we provide everything you
// // // // //             need to succeed in your educational journey.
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Top 3 Cards Row */}
// // // // //         <div className="flex flex-col gap-4 mb-12">
// // // // //           <div className="flex flex-wrap justify-center gap-8">
// // // // //             {features.slice(0, 3).map((feature, index) => {
// // // // //               const Icon = feature.icon;
// // // // //               const bgColors = [
// // // // //                 "bg-[rgb(125,219,123)]",
// // // // //                 "bg-[rgb(255,153,153)]",
// // // // //                 "bg-[rgb(169,254,255)]",
// // // // //               ];
              
// // // // //               const isExpanded = expandedCard === index;
// // // // //               return (
// // // // //                 <div key={index} className="w-full md:w-[350px] flex flex-col">
// // // // //                   <Card
// // // // //                     className={`${bgColors[index]} text-black h-[320px] shadow-md hover:shadow-lg transition-all duration-300 group ${
// // // // //                       isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""
// // // // //                     }`}
// // // // //                   >
// // // // //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// // // // //                       <div>
// // // // //                         <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // //                           <Icon className="w-8 h-8 text-black" />
// // // // //                         </div>
// // // // //                         <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// // // // //                         <p className="text-black/80 mb-4 line-clamp-3">
// // // // //                           {feature.description}
// // // // //                         </p>
// // // // //                       </div>
                      
// // // // //                       <button
// // // // //                         onClick={() => setExpandedCard(isExpanded ? null : index)}
// // // // //                         className={`mt-auto w-full px-4 py-2 rounded-md transition-colors font-medium ${
// // // // //                           isExpanded 
// // // // //                             ? "bg-black text-white hover:bg-gray-800" 
// // // // //                             : "bg-[hsl(218,46%,36%)] text-white hover:bg-orange-600"
// // // // //                         }`}
// // // // //                       >
// // // // //                         {isExpanded ? "Show Less" : "Learn More"}
// // // // //                       </button>
// // // // //                     </CardContent>
// // // // //                   </Card>
// // // // //                 </div>
// // // // //               );
// // // // //             })}
// // // // //           </div>
          
// // // // //           {/* सिर्फ क्लिक करने पर ही दिखेगा */}
// // // // //           {expandedCard !== null && expandedCard < 3 && (
// // // // //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Remaining Cards Row */}
// // // // //   <div style={{ display: "flex", justifyContent: "center",
// // // // //      padding: "20px" }}>
 

// // // // //       <button
// // // // //         style={{
// // // // //              width: "350px",
// // // // //           padding: "12px 24px",
// // // // //           borderRadius: "8px",
// // // // //           border: "none",
// // // // //           backgroundColor: "#5B3EC6",
// // // // //           color: "#fff",
// // // // //           cursor: "pointer",
// // // // //         }}
// // // // //       >
// // // // //       Select Your Learning Goal
// // // // //       </button>
// // // // //     </div>

// // // // //   <div className=" flex justify-center items-center p-6">
// // // // //       <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
        
// // // // //         {/* Title */}
// // // // //         <h1 className="text-3xl font-bold text-center mb-10">
// // // // //           Class 1 to 5
// // // // //         </h1>

// // // // //         {/* Cards */}
// // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // //           {goals.map((goal, index) => (
// // // // //             <div
// // // // //               key={index}
// // // // //               className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300"
// // // // //             >
// // // // //               {goal}
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Bottom Button */}
// // // // //         {/* <div className="flex justify-center mt-10">
// // // // //           <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-10 py-4 rounded-full text-lg w-full max-w-xl transition">
// // // // //             Find Your Local Tutor For Home Tuition
// // // // //           </button>
// // // // //         </div> */}
// // // // //       </div>
// // // // //     </div>

// // // // //         <div className="flex flex-col gap-6 mb-16">
// // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // //             {features.slice(3).map((feature, index) => {
// // // // //               const Icon = feature.icon;
// // // // //               const actualIndex = index + 3;
// // // // //               const isExpanded = expandedCard === actualIndex;
// // // // //               return (
// // // // //                 <div key={actualIndex} className="w-full flex flex-col">
// // // // //                   <Card
// // // // //                     className={`bg-slate-50 w-full h-64 shadow-md hover:shadow-lg transition-all duration-300 group ${
// // // // //                       isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""
// // // // //                     }`}
// // // // //                   >
// // // // //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// // // // //                       <div>
// // // // //                         <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // //                           <Icon className="w-8 h-8 text-primary" />
// // // // //                         </div>
// // // // //                         <h3 className="text-xl font-semibold text-gray-900 mb-3">
// // // // //                           {feature.title}
// // // // //                         </h3>
// // // // //                         <p className="text-gray-600 mb-4 line-clamp-2">
// // // // //                           {feature.description}
// // // // //                         </p>
// // // // //                       </div>
// // // // //                       <button
// // // // //                         onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// // // // //                         className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 self-start transition-colors flex items-center gap-1"
// // // // //                       >
// // // // //                         {isExpanded ? "Show Less ↑" : "Learn More →"}
// // // // //                       </button>
// // // // //                     </CardContent>
// // // // //                   </Card>
// // // // //                 </div>
// // // // //               );
// // // // //             })}
// // // // //           </div>

// // // // //           {/* सिर्फ क्लिक करने पर ही दिखेगा */}
// // // // //           {expandedCard !== null && expandedCard >= 3 && (
// // // // //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Auto-scrolling boxes */}
// // // // //         <div className="relative mb-12">
// // // // //           <div
// // // // //             ref={scrollRef}
// // // // //             className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
// // // // //             style={{
// // // // //               scrollBehavior: "smooth",
// // // // //               borderRadius: "8px",
// // // // //               overflow: "hidden",
// // // // //             }}
// // // // //           >
// // // // //             {boxes.map((box) => (
// // // // //               <div
// // // // //                 key={box.id}
// // // // //                 className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4"
// // // // //                 style={{
// // // // //                   backgroundColor: box.color,
// // // // //                   borderRadius: "8px",
// // // // //                 }}
// // // // //               />
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }









// // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // import {
// // // // //   TrendingUp,
// // // // //   Globe,
// // // // //   Briefcase,
// // // // //   Heart,
// // // // //   FileText,
// // // // //   Users,
// // // // //   BarChart3,
// // // // //   Library,
// // // // // } from "lucide-react";

// // // // // const features = [
// // // // //   {
// // // // //     icon: Users,
// // // // //     title: "🤝 1:1 Mentorship",
// // // // //     description:
// // // // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // // // //   },
// // // // //   {
// // // // //     icon: FileText,
// // // // //     title: "🧪 Mock Tests & Practice",
// // // // //     description:
// // // // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // // // //   },
// // // // //   {
// // // // //     icon: Heart,
// // // // //     title: "🧠 Psychological Support",
// // // // //     description:
// // // // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // // // //   },
// // // // //   {
// // // // //     icon: Briefcase,
// // // // //     title: "👩‍💼 Class 6",
// // // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // // //   },
// // // // //   {
// // // // //     icon: Globe,
// // // // //     title: "👩‍💼 Class 7",
// // // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // // //   },
// // // // //   {
// // // // //     icon: TrendingUp,
// // // // //     title: "👩‍💼 Class 8",
// // // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // // //   },
// // // // //   {
// // // // //     icon: Library,
// // // // //     title: "👩‍💼 Class 9",
// // // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // // //   },
// // // // //   {
// // // // //     icon: Library,
// // // // //     title: "👩‍💼 Class 10",
// // // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // // //   },
// // // // //   {
// // // // //     icon: Library,
// // // // //     title: "🏆 Olympiad",
// // // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // // //   },
// // // // // ];

// // // // // const goals = [
// // // // //   "Learn Maths",
// // // // //   "Learn English",
// // // // //   "Science",
// // // // //   "GK",
// // // // //   "JNV Entrance",
// // // // //   "KVS",
// // // // //   "Sainik School",
// // // // //   "Olympiad",
// // // // // ];

// // // // // const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
// // // // //   0: {
// // // // //     title: "Personalized Study Plan",
// // // // //     desc: "Weak–strong subject analysis Daily + weekly target sheet PYQ based planning (especially from NEET-UG trend)",
// // // // //     icon: "📚",
// // // // //   },
// // // // //   1: {
// // // // //     title: "Test Series & Evaluation",
// // // // //     desc: "All India Rank analysis, mistake log tracking, time-management sheets, and customized revision tests.",
// // // // //     icon: "🧪",
// // // // //   },
// // // // //   2: {
// // // // //     title: "Mindset & Motivation Plan",
// // // // //     desc: "Weekly stress-buster sessions, 1:1 interaction with counselors, and customized schedules to avoid burnout.",
// // // // //     icon: "🧠",
// // // // //   },
// // // // //   3: {
// // // // //     title: "Placement Preparation Toolkit",
// // // // //     desc: "Resume review, live mock HR interviews, industry-specific soft skill training, and direct referral opportunities.",
// // // // //     icon: "💼",
// // // // //   },
// // // // //   4: {
// // // // //     title: "Global Career Roadmap",
// // // // //     desc: "In-depth profile building for global markets, profile enhancement advice, and university selection support.",
// // // // //     icon: "🌍",
// // // // //   },
// // // // //   5: {
// // // // //     title: "Advanced Tech & Skills Training",
// // // // //     desc: "Hands-on capstone projects, cohort-based learning, industry mentorship, and verified portfolio building.",
// // // // //     icon: "📈",
// // // // //   },
// // // // //   6: {
// // // // //     title: "Academic Stream Roadmap",
// // // // //     desc: "Subject combination advisor, continuous track evaluation, and specific curriculum help with top faculties.",
// // // // //     icon: "📚",
// // // // //   },
// // // // // };

// // // // // function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
// // // // //   const data = studyPlanData[activeIndex] || studyPlanData[0];

// // // // //   return (
// // // // //     <div className="w-full mt-6 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
// // // // //       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-xl overflow-hidden">
// // // // //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
// // // // //         <div className="flex items-center gap-4 z-10">
// // // // //           <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
// // // // //             <BarChart3 className="w-10 h-10" />
// // // // //           </div>
// // // // //           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
// // // // //             <FileText className="w-10 h-10" />
// // // // //           </div>
// // // // //           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
// // // // //             <TrendingUp className="w-10 h-10" />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="w-full md:w-1/2 flex flex-col items-start text-left">
// // // // //         <div className="flex items-center gap-2 mb-3">
// // // // //           <span className="text-2xl">{data.icon}</span>
// // // // //           <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase text-sm md:text-base">
// // // // //             {data.title}
// // // // //           </h4>
// // // // //         </div>
// // // // //         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
// // // // //           {data.desc}
// // // // //         </p>
// // // // //         <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
// // // // //           JOIN US
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export function Features() {
// // // // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // // // //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
// // // // //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// // // // //   useEffect(() => {
// // // // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // // // //       id: i,
// // // // //       description: `Learn ${i + 1}`,
// // // // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // // // //     }));
// // // // //     setBoxes(items);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     const scrollContainer = scrollRef.current;
// // // // //     if (!scrollContainer) return;
// // // // //     let direction = 1;
// // // // //     const scrollStep = 1;
// // // // //     const scrollDelay = 15;
// // // // //     const interval = setInterval(() => {
// // // // //       if (!scrollContainer) return;
// // // // //       scrollContainer.scrollLeft += scrollStep * direction;
// // // // //       if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
// // // // //         direction = -1;
// // // // //       }
// // // // //       if (scrollContainer.scrollLeft <= 0) {
// // // // //         direction = 1;
// // // // //       }
// // // // //     }, scrollDelay);
// // // // //     return () => clearInterval(interval);
// // // // //   }, [boxes]);

// // // // //   return (
// // // // //     <section id="features" className="py-20 bg-white">
// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// // // // //         <div className="text-center mb-16">
// // // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // // //             Comprehensive Guidance for Every Student
// // // // //           </h2>
// // // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // // //             From academic support to career planning, we provide everything you need to succeed in your educational journey.
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Top 3 Cards Row */}
// // // // //         <div className="flex flex-col gap-4 mb-12">
// // // // //           <div className="flex flex-wrap justify-center gap-8">
// // // // //             {features.slice(0, 3).map((feature, index) => {
// // // // //               const Icon = feature.icon;
// // // // //               const bgColors = ["bg-[rgb(125,219,123)]", "bg-[rgb(255,153,153)]", "bg-[rgb(169,254,255)]"];
// // // // //               const isExpanded = expandedCard === index;
              
// // // // //               return (
// // // // //                 <div key={index} className="w-full md:w-[350px] flex flex-col">
// // // // //                   <Card className={`${bgColors[index]} text-black h-[320px] shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
// // // // //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// // // // //                       <div>
// // // // //                         <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // // //                           <Icon className="w-8 h-8 text-black" />
// // // // //                         </div>
// // // // //                         <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// // // // //                         <p className="text-black/80 mb-4 line-clamp-3 whitespace-pre-line">
// // // // //                           {feature.description}
// // // // //                         </p>
// // // // //                       </div>
// // // // //                       <button
// // // // //                         onClick={() => setExpandedCard(isExpanded ? null : index)}
// // // // //                         className={`mt-auto w-full px-4 py-2 rounded-md transition-colors font-medium ${isExpanded ? "bg-black text-white hover:bg-gray-800" : "bg-[hsl(218,46%,36%)] text-white hover:bg-orange-600"}`}
// // // // //                       >
// // // // //                         {isExpanded ? "Show Less" : "Learn More"}
// // // // //                       </button>
// // // // //                     </CardContent>
// // // // //                   </Card>
// // // // //                 </div>
// // // // //               );
// // // // //             })}
// // // // //           </div>
// // // // //           {expandedCard !== null && expandedCard < 3 && <PersonalizedStudyPlan activeIndex={expandedCard} />}
// // // // //         </div>

// // // // //         {/* Learning Goals Section */}
// // // // //         <div className="flex justify-center mb-6">
// // // // //           <button className="w-[350px] rounded-lg border-none bg-[#5B3EC6] text-white cursor-pointer py-3 px-6 font-semibold shadow-md hover:bg-[#4a30a8] transition-colors">
// // // // //             Select Your Learning Goal
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* Class 1 to 5 Box */}
// // // // //         <div className="flex justify-center items-center p-6 mb-6">
// // // // //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// // // // //             <h1 className="text-3xl font-bold text-center mb-10">Class 1 to 5</h1>
// // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // //               {goals.map((goal, index) => (
// // // // //                 <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
// // // // //                   {goal}
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Class 6 to 10 Box (Exactly Same Structure) */}
// // // // //         {/* <div className="flex justify-center items-center p-6 mb-12">
// // // // //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// // // // //             <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
// // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // //               {goals.map((goal, index) => (
// // // // //                 <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
// // // // //                   {goal}
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div> */}

// // // // //         {/* Remaining Cards Row (Class 6, 7, 8, 9, 10, Olympiad) */}

// // // // //         <div className="flex justify-center items-center p-6 mb-12">
// // // // //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// // // // //             <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
// // // // //         <div className="flex flex-col gap-6 mb-16">
// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // //             {features.slice(3).map((feature, index) => {
// // // // //               const Icon = feature.icon;
// // // // //               const actualIndex = index + 3;
// // // // //               const isExpanded = expandedCard === actualIndex;
// // // // //               return (
// // // // //                 <div key={actualIndex} className="w-full flex">
// // // // //                   <Card className={`bg-slate-50 w-full h-auto min-h-[340px] flex flex-col shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
// // // // //                     <CardContent className="p-6 flex flex-col flex-grow justify-between">
// // // // //                       <div>
// // // // //                         <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
// // // // //                           <Icon className="w-6 h-6 text-primary" />
// // // // //                         </div>
// // // // //                         <h3 className="text-xl font-bold text-gray-900 mb-3">
// // // // //                           {feature.title}
// // // // //                         </h3>
// // // // //                         <p className="text-gray-700 mb-4 text-sm whitespace-pre-line leading-relaxed font-medium bg-white/50 p-3 rounded-xl border border-gray-100">
// // // // //                           {feature.description}
// // // // //                         </p>
// // // // //                       </div>
// // // // //                       <button
// // // // //                         onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// // // // //                         className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 mt-2 transition-colors flex items-center gap-1 self-start"
// // // // //                       >
// // // // //                         {isExpanded ? "Show Less ↑" : "Learn More →"}
// // // // //                       </button>
// // // // //                     </CardContent>
// // // // //                   </Card>
// // // // //                 </div>
// // // // //               );
// // // // //             })}
// // // // //           </div>
// // // // //           </div>
// // // // //           </div>

// // // // //           {expandedCard !== null && expandedCard >= 3 && (
// // // // //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// // // // //           )}
// // // // //         </div>


// // // // // ////////class 11 to 12 box (Same Structure) *




// // // // //  {/* <div className="flex justify-center items-center p-6 mb-12">
// // // // //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// // // // //             <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
// // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // //               {goals.map((goal, index) => (
// // // // //                 <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
// // // // //                   {goal}
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>  */}
// // // // //         {/* Auto Scrolling boxes */}
// // // // //         <div className="relative mb-12">
// // // // //           <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg" style={{ scrollBehavior: "smooth" }}>
// // // // //             {boxes.map((box) => (
// // // // //               <div key={box.id} className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4" style={{ backgroundColor: box.color, borderRadius: "8px" }} />
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }






// // // // import React, { useEffect, useRef, useState } from "react";
// // // // import { Card, CardContent } from "@/components/ui/card";
// // // // import {
// // // //   TrendingUp,
// // // //   Globe,
// // // //   Briefcase,
// // // //   Heart,
// // // //   FileText,
// // // //   Users,
// // // //   BarChart3,
// // // //   Library,
// // // // } from "lucide-react";

// // // // const features = [
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
// // // //     title: "👩‍💼 Class 6",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   {
// // // //     icon: Globe,
// // // //     title: "👩‍💼 Class 7",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   {
// // // //     icon: TrendingUp,
// // // //     title: "👩‍💼 Class 8",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   {
// // // //     icon: Library,
// // // //     title: "👩‍💼 Class 9",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   {
// // // //     icon: Library,
// // // //     title: "👩‍💼 Class 10",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   {
// // // //     icon: Library,
// // // //     title: "🏆 Olympiad",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // // ];

// // // // const goals = [
// // // //   "Learn Maths",
// // // //   "Learn English",
// // // //   "Science",
// // // //   "GK",
// // // //   "JNV Entrance",
// // // //   "KVS",
// // // //   "Sainik School",
// // // //   "Olympiad",
// // // // ];

// // // // const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
// // // //   0: {
// // // //     title: "Personalized Study Plan",
// // // //     desc: "Weak–strong subject analysis Daily + weekly target sheet PYQ based planning (especially from NEET-UG trend)",
// // // //     icon: "📚",
// // // //   },
// // // //   1: {
// // // //     title: "Test Series & Evaluation",
// // // //     desc: "All India Rank analysis, mistake log tracking, time-management sheets, and customized revision tests.",
// // // //     icon: "🧪",
// // // //   },
// // // //   2: {
// // // //     title: "Mindset & Motivation Plan",
// // // //     desc: "Weekly stress-buster sessions, 1:1 interaction with counselors, and customized schedules to avoid burnout.",
// // // //     icon: "🧠",
// // // //   },
// // // //   3: {
// // // //     title: "Placement Preparation Toolkit",
// // // //     desc: "Resume review, live mock HR interviews, industry-specific soft skill training, and direct referral opportunities.",
// // // //     icon: "💼",
// // // //   },
// // // //   4: {
// // // //     title: "Global Career Roadmap",
// // // //     desc: "In-depth profile building for global markets, profile enhancement advice, and university selection support.",
// // // //     icon: "🌍",
// // // //   },
// // // //   5: {
// // // //     title: "Advanced Tech & Skills Training",
// // // //     desc: "Hands-on capstone projects, cohort-based learning, industry mentorship, and verified portfolio building.",
// // // //     icon: "📈",
// // // //   },
// // // //   6: {
// // // //     title: "Academic Stream Roadmap",
// // // //     desc: "Subject combination advisor, continuous track evaluation, and specific curriculum help with top faculties.",
// // // //     icon: "📚",
// // // //   },
// // // // };

// // // // function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
// // // //   const data = studyPlanData[activeIndex] || studyPlanData[0];

// // // //   return (
// // // //     <div className="w-full mt-6 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
// // // //       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-xl overflow-hidden">
// // // //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
// // // //         <div className="flex items-center gap-4 z-10">
// // // //           <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
// // // //             <BarChart3 className="w-10 h-10" />
// // // //           </div>
// // // //           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
// // // //             <FileText className="w-10 h-10" />
// // // //           </div>
// // // //           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
// // // //             <TrendingUp className="w-10 h-10" />
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="w-full md:w-1/2 flex flex-col items-start text-left">
// // // //         <div className="flex items-center gap-2 mb-3">
// // // //           <span className="text-2xl">{data.icon}</span>
// // // //           <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase text-sm md:text-base">
// // // //             {data.title}
// // // //           </h4>
// // // //         </div>
// // // //         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
// // // //           {data.desc}
// // // //         </p>
// // // //         <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
// // // //           JOIN US
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export function Features() {
// // // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // // //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
// // // //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// // // //   useEffect(() => {
// // // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // // //       id: i,
// // // //       description: `Learn ${i + 1}`,
// // // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // // //     }));
// // // //     setBoxes(items);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const scrollContainer = scrollRef.current;
// // // //     if (!scrollContainer) return;
// // // //     let direction = 1;
// // // //     const scrollStep = 1;
// // // //     const scrollDelay = 15;
// // // //     const interval = setInterval(() => {
// // // //       if (!scrollContainer) return;
// // // //       scrollContainer.scrollLeft += scrollStep * direction;
// // // //       if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
// // // //         direction = -1;
// // // //       }
// // // //       if (scrollContainer.scrollLeft <= 0) {
// // // //         direction = 1;
// // // //       }
// // // //     }, scrollDelay);
// // // //     return () => clearInterval(interval);
// // // //   }, [boxes]);

// // // //   return (
// // // //     <section id="features" className="py-20 bg-white">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// // // //         <div className="text-center mb-16">
// // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // //             Comprehensive Guidance for Every Student
// // // //           </h2>
// // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // //             From academic support to career planning, we provide everything you need to succeed in your educational journey.
// // // //           </p>
// // // //         </div>

// // // //         {/* Top 3 Cards Row */}
// // // //         <div className="flex flex-col gap-4 mb-12">
// // // //           <div className="flex flex-wrap justify-center gap-8">
// // // //             {features.slice(0, 3).map((feature, index) => {
// // // //               const Icon = feature.icon;
// // // //               const bgColors = ["bg-[rgb(125,219,123)]", "bg-[rgb(255,153,153)]", "bg-[rgb(169,254,255)]"];
// // // //               const isExpanded = expandedCard === index;
              
// // // //               return (
// // // //                 <div key={index} className="w-full md:w-[350px] flex flex-col">
// // // //                   <Card className={`${bgColors[index]} text-black h-[320px] shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
// // // //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// // // //                       <div>
// // // //                         <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // //                           <Icon className="w-8 h-8 text-black" />
// // // //                         </div>
// // // //                         <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// // // //                         <p className="text-black/80 mb-4 line-clamp-3 whitespace-pre-line">
// // // //                           {feature.description}
// // // //                         </p>
// // // //                       </div>
// // // //                       <button
// // // //                         onClick={() => setExpandedCard(isExpanded ? null : index)}
// // // //                         className={`mt-auto w-full px-4 py-2 rounded-md transition-colors font-medium ${isExpanded ? "bg-black text-white hover:bg-gray-800" : "bg-[hsl(218,46%,36%)] text-white hover:bg-orange-600"}`}
// // // //                       >
// // // //                         {isExpanded ? "Show Less" : "Learn More"}
// // // //                       </button>
// // // //                     </CardContent>
// // // //                   </Card>
// // // //                 </div>
// // // //               );
// // // //             })}
// // // //           </div>
// // // //           {expandedCard !== null && expandedCard < 3 && <PersonalizedStudyPlan activeIndex={expandedCard} />}
// // // //         </div>

// // // //         {/* Learning Goals Section */}
// // // //         <div className="flex justify-center mb-6">
// // // //           <button className="w-[350px] rounded-lg border-none bg-[#5B3EC6] text-white cursor-pointer py-3 px-6 font-semibold shadow-md hover:bg-[#4a30a8] transition-colors">
// // // //             Select Your Learning Goal
// // // //           </button>
// // // //         </div>

// // // //         {/* Class 1 to 5 Box */}
// // // //         <div className="flex justify-center items-center p-6 mb-6">
// // // //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// // // //             <h1 className="text-3xl font-bold text-center mb-10">Class 1 to 5</h1>
// // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // //               {goals.map((goal, index) => (
// // // //                 <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
// // // //                   {goal}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Class 6 to 10 Box (Exactly Same Structure) */}
// // // //         {/* <div className="flex justify-center items-center p-6 mb-12">
// // // //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// // // //             <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
// // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // //               {goals.map((goal, index) => (
// // // //                 <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
// // // //                   {goal}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div> */}

// // // //         {/* Remaining Cards Row (Class 6, 7, 8, 9, 10, Olympiad) */}

// // // //         <div className="flex justify-center items-center p-6 mb-12">
// // // //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// // // //             <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
// // // //         <div className="flex flex-col gap-6 mb-16">
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //             {features.slice(3).map((feature, index) => {
// // // //               const Icon = feature.icon;
// // // //               const actualIndex = index + 3;
// // // //               const isExpanded = expandedCard === actualIndex;
// // // //               return (
// // // //                 <div key={actualIndex} className="w-full flex">
// // // //                   <Card className={`bg-slate-50 w-full h-auto min-h-[340px] flex flex-col shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
// // // //                     <CardContent className="p-6 flex flex-col flex-grow justify-between">
// // // //                       <div>
// // // //                         <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
// // // //                           <Icon className="w-6 h-6 text-primary" />
// // // //                         </div>
// // // //                         <h3 className="text-xl font-bold text-gray-900 mb-3">
// // // //                           {feature.title}
// // // //                         </h3>
// // // //                         <p className="text-gray-700 mb-4 text-sm whitespace-pre-line leading-relaxed font-medium bg-white/50 p-3 rounded-xl border border-gray-100">
// // // //                           {feature.description}
// // // //                         </p>
// // // //                       </div>
// // // //                       <button
// // // //                         onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// // // //                         className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 mt-2 transition-colors flex items-center gap-1 self-start"
// // // //                       >
// // // //                         {isExpanded ? "Show Less ↑" : "Learn More →"}
// // // //                       </button>
// // // //                     </CardContent>
// // // //                   </Card>
// // // //                 </div>
// // // //               );
// // // //             })}
// // // //           </div>
// // // //           </div>
// // // //           </div>

// // // //           {expandedCard !== null && expandedCard >= 3 && (
// // // //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// // // //           )}
// // // //         </div>


// // // // ////////class 11 to 12 box (Same Structure) *




// // // //  {/* <div className="flex justify-center items-center p-6 mb-12">
// // // //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// // // //             <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
// // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // //               {goals.map((goal, index) => (
// // // //                 <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
// // // //                   {goal}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>  */}
// // // //         {/* Auto Scrolling boxes */}
// // // //         <div className="relative mb-12">
// // // //           <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg" style={{ scrollBehavior: "smooth" }}>
// // // //             {boxes.map((box) => (
// // // //               <div key={box.id} className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4" style={{ backgroundColor: box.color, borderRadius: "8px" }} />
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
// // // //   TrendingUp,
// // // //   Globe,
// // // //   Briefcase,
// // // //   Heart,
// // // //   FileText,
// // // //   Users,
// // // //   BarChart3,
// // // //   Library,
// // // //   BookOpen,
// // // //   Award,
// // // // } from "lucide-react";

// // // // // Extended features array to include Class 11, 12, and NEET/JEE details
// // // // const features = [
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
// // // //   // Class 6 to 10
// // // //   {
// // // //     icon: Briefcase,
// // // //     title: "👩‍💼 Class 6",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   {
// // // //     icon: Globe,
// // // //     title: "👩‍💼 Class 7",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   {
// // // //     icon: TrendingUp,
// // // //     title: "👩‍💼 Class 8",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   {
// // // //     icon: Library,
// // // //     title: "👩‍💼 Class 9",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   {
// // // //     icon: Library,
// // // //     title: "👩‍💼 Class 10",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   {
// // // //     icon: Library,
// // // //     title: "🏆 Olympiad",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   // Class 11 to 12 / Competitive
// // // //   {
// // // //     icon: BookOpen,
// // // //     title: "🎓 Class 11 Arts",
// // // //     description: `• JEE/NEET Foundation\n• 1500+ Physics/Chem MCQs\n• 2500+ Subjective Qs\n• 3500+ Sample Papers\n• Top Faculty Mentorship\n• 24/7 Doubt Solving`,
// // // //   },
// // // //   {
// // // //     icon: Award,
// // // //     title: "🎓 Class 11 Commerce",
// // // //     description: `• Board Exam Special Prep\n• Full Syllabus Mock Tests\n• PYQ Analysis (Last 10 Yrs)\n• 4000+ Practice Questions\n• Stress-Free Counseling\n• Career Guidance Sessions`,
// // // //   },
// // // //   {
// // // //     icon: TrendingUp,
// // // //    title: "🎓 Class 11 Science",
// // // //     description: `• All India Test Series (AITS)\n• Real-time Rank Predictor\n• Physics, Chemistry, Biology/Maths\n• Advanced Doubt Clearance\n• Personalized Weakness Tracker`,
// // // //   },
// // // // ];

// // // // const goals = [
// // // //   "Learn Maths",
// // // //   "Learn English",
// // // //   "Science",
// // // //   "GK",
// // // //   "JNV Entrance",
// // // //   "KVS",
// // // //   "Sainik School",
// // // //   "Olympiad",
// // // // ];

// // // // const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
// // // //   0: {
// // // //     title: "Personalized Study Plan",
// // // //     desc: "Weak–strong subject analysis Daily + weekly target sheet PYQ based planning (especially from NEET-UG trend)",
// // // //     icon: "📚",
// // // //   },
// // // //   1: {
// // // //     title: "Test Series & Evaluation",
// // // //     desc: "All India Rank analysis, mistake log tracking, time-management sheets, and customized revision tests.",
// // // //     icon: "🧪",
// // // //   },
// // // //   2: {
// // // //     title: "Mindset & Motivation Plan",
// // // //     desc: "Weekly stress-buster sessions, 1:1 interaction with counselors, and customized schedules to avoid burnout.",
// // // //     icon: "🧠",
// // // //   },
// // // //   3: {
// // // //     title: "Placement Preparation Toolkit",
// // // //     desc: "Resume review, live mock HR interviews, industry-specific soft skill training, and direct referral opportunities.",
// // // //     icon: "💼",
// // // //   },
// // // //   4: {
// // // //     title: "Global Career Roadmap",
// // // //     desc: "In-depth profile building for global markets, profile enhancement advice, and university selection support.",
// // // //     icon: "🌍",
// // // //   },
// // // //   5: {
// // // //     title: "Advanced Tech & Skills Training",
// // // //     desc: "Hands-on capstone projects, cohort-based learning, industry mentorship, and verified portfolio building.",
// // // //     icon: "📈",
// // // //   },
// // // //   6: {
// // // //     title: "Academic Stream Roadmap",
// // // //     desc: "Subject combination advisor, continuous track evaluation, and specific curriculum help with top faculties.",
// // // //     icon: "📚",
// // // //   },
// // // // };

// // // // function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
// // // //   // Safe fallback if activeIndex is out of predefined data keys
// // // //   const data = studyPlanData[activeIndex % 7] || studyPlanData[0];

// // // //   return (
// // // //     <div className="w-full mt-6 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
// // // //       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-xl overflow-hidden">
// // // //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
// // // //         <div className="flex items-center gap-4 z-10">
// // // //           <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
// // // //             <BarChart3 className="w-10 h-10" />
// // // //           </div>
// // // //           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
// // // //             <FileText className="w-10 h-10" />
// // // //           </div>
// // // //           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
// // // //             <TrendingUp className="w-10 h-10" />
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="w-full md:w-1/2 flex flex-col items-start text-left">
// // // //         <div className="flex items-center gap-2 mb-3">
// // // //           <span className="text-2xl">{data.icon}</span>
// // // //           <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase text-sm md:text-base">
// // // //             {data.title}
// // // //           </h4>
// // // //         </div>
// // // //         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
// // // //           {data.desc}
// // // //         </p>
// // // //         <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
// // // //           JOIN US
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export function Features() {
// // // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // // //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
// // // //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// // // //   useEffect(() => {
// // // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // // //       id: i,
// // // //       description: `Learn ${i + 1}`,
// // // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // // //     }));
// // // //     setBoxes(items);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const scrollContainer = scrollRef.current;
// // // //     if (!scrollContainer) return;
// // // //     let direction = 1;
// // // //     const scrollStep = 1;
// // // //     const scrollDelay = 15;
// // // //     const interval = setInterval(() => {
// // // //       if (!scrollContainer) return;
// // // //       scrollContainer.scrollLeft += scrollStep * direction;
// // // //       if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
// // // //         direction = -1;
// // // //       }
// // // //       if (scrollContainer.scrollLeft <= 0) {
// // // //         direction = 1;
// // // //       }
// // // //     }, scrollDelay);
// // // //     return () => clearInterval(interval);
// // // //   }, [boxes]);

// // // //   return (
// // // //     <section id="features" className="py-20 bg-white">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// // // //         <div className="text-center mb-16">
// // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // //             Comprehensive Guidance for Every Student
// // // //           </h2>
// // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // //             From academic support to career planning, we provide everything you need to succeed in your educational journey.
// // // //           </p>
// // // //         </div>

// // // //         {/* Top 3 Cards Row */}
// // // //         <div className="flex flex-col gap-4 mb-12">
// // // //           <div className="flex flex-wrap justify-center gap-8">
// // // //             {features.slice(0, 3).map((feature, index) => {
// // // //               const Icon = feature.icon;
// // // //               const bgColors = ["bg-[rgb(125,219,123)]", "bg-[rgb(255,153,153)]", "bg-[rgb(169,254,255)]"];
// // // //               const isExpanded = expandedCard === index;
              
// // // //               return (
// // // //                 <div key={index} className="w-full md:w-[350px] flex flex-col">
// // // //                   <Card className={`${bgColors[index]} text-black h-[320px] shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
// // // //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// // // //                       <div>
// // // //                         <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // //                           <Icon className="w-8 h-8 text-black" />
// // // //                         </div>
// // // //                         <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// // // //                         <p className="text-black/80 mb-4 line-clamp-3 whitespace-pre-line">
// // // //                           {feature.description}
// // // //                         </p>
// // // //                       </div>
// // // //                       <button
// // // //                         onClick={() => setExpandedCard(isExpanded ? null : index)}
// // // //                         className={`mt-auto w-full px-4 py-2 rounded-md transition-colors font-medium ${isExpanded ? "bg-black text-white hover:bg-gray-800" : "bg-[hsl(218,46%,36%)] text-white hover:bg-orange-600"}`}
// // // //                       >
// // // //                         {isExpanded ? "Show Less" : "Learn More"}
// // // //                       </button>
// // // //                     </CardContent>
// // // //                   </Card>
// // // //                 </div>
// // // //               );
// // // //             })}
// // // //           </div>
// // // //           {expandedCard !== null && expandedCard < 3 && <PersonalizedStudyPlan activeIndex={expandedCard} />}
// // // //         </div>

// // // //         {/* Learning Goals Section */}
// // // //         <div className="flex justify-center mb-6">
// // // //           <button className="w-[350px] rounded-lg border-none bg-[#5B3EC6] text-white cursor-pointer py-3 px-6 font-semibold shadow-md hover:bg-[#4a30a8] transition-colors">
// // // //             Select Your Learning Goal
// // // //           </button>
// // // //         </div>

// // // //         {/* Class 1 to 5 Box */}
// // // //         <div className="flex justify-center items-center p-6 mb-6">
// // // //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// // // //             <h1 className="text-3xl font-bold text-center mb-10">Class 1 to 5</h1>
// // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // //               {goals.map((goal, index) => (
// // // //                 <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
// // // //                   {goal}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Class 6 to 10 Box */}
// // // //         <div className="flex justify-center items-center p-6 mb-6">
// // // //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// // // //             <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
// // // //             <div className="flex flex-col gap-6">
// // // //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //                 {features.slice(3, 9).map((feature, index) => {
// // // //                   const Icon = feature.icon;
// // // //                   const actualIndex = index + 3;
// // // //                   const isExpanded = expandedCard === actualIndex;
// // // //                   return (
// // // //                     <div key={actualIndex} className="w-full flex">
// // // //                       <Card className={`bg-slate-50 w-full h-auto min-h-[340px] flex flex-col shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
// // // //                         <CardContent className="p-6 flex flex-col flex-grow justify-between">
// // // //                           <div>
// // // //                             <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
// // // //                               <Icon className="w-6 h-6 text-primary" />
// // // //                             </div>
// // // //                             <h3 className="text-xl font-bold text-gray-900 mb-3">
// // // //                               {feature.title}
// // // //                             </h3>
// // // //                             <p className="text-gray-700 mb-4 text-sm whitespace-pre-line leading-relaxed font-medium bg-white/50 p-3 rounded-xl border border-gray-100">
// // // //                               {feature.description}
// // // //                             </p>
// // // //                           </div>
// // // //                           <button
// // // //                             onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// // // //                             className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 mt-2 transition-colors flex items-center gap-1 self-start"
// // // //                           >
// // // //                             {isExpanded ? "Show Less ↑" : "Learn More →"}
// // // //                           </button>
// // // //                         </CardContent>
// // // //                       </Card>
// // // //                     </div>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Study Plan for Class 6 to 10 */}
// // // //         {expandedCard !== null && expandedCard >= 3 && expandedCard < 9 && (
// // // //           <div className="mb-12 px-6">
// // // //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// // // //           </div>
// // // //         )}

// // // //         {/* Class 11 to 12 Box (Exactly Same Structure) */}
// // // //         <div className="flex justify-center items-center p-6 mb-12">
// // // //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// // // //             <h1 className="text-3xl font-bold text-center mb-10">Class 11 to 12</h1>
// // // //             <div className="flex flex-col gap-6">
// // // //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //                 {features.slice(9).map((feature, index) => {
// // // //                   const Icon = feature.icon;
// // // //                   const actualIndex = index + 9;
// // // //                   const isExpanded = expandedCard === actualIndex;
// // // //                   return (
// // // //                     <div key={actualIndex} className="w-full flex">
// // // //                       <Card className={`bg-slate-50 w-full h-auto min-h-[340px] flex flex-col shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
// // // //                         <CardContent className="p-6 flex flex-col flex-grow justify-between">
// // // //                           <div>
// // // //                             <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
// // // //                               <Icon className="w-6 h-6 text-primary" />
// // // //                             </div>
// // // //                             <h3 className="text-xl font-bold text-gray-900 mb-3">
// // // //                               {feature.title}
// // // //                             </h3>
// // // //                             <p className="text-gray-700 mb-4 text-sm whitespace-pre-line leading-relaxed font-medium bg-white/50 p-3 rounded-xl border border-gray-100">
// // // //                               {feature.description}
// // // //                             </p>
// // // //                           </div>
// // // //                           <button
// // // //                             onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// // // //                             className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 mt-2 transition-colors flex items-center gap-1 self-start"
// // // //                           >
// // // //                             {isExpanded ? "Show Less ↑" : "Learn More →"}
// // // //                           </button>
// // // //                         </CardContent>
// // // //                       </Card>
// // // //                     </div>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Study Plan for Class 11 & 12 */}
// // // //         {expandedCard !== null && expandedCard >= 9 && (
// // // //           <div className="mb-12 px-6">
// // // //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// // // //           </div>
// // // //         )}

// // // //         {/* Auto Scrolling boxes */}
// // // //         <div className="relative mb-12">
// // // //           <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg" style={{ scrollBehavior: "smooth" }}>
// // // //             {boxes.map((box) => (
// // // //               <div key={box.id} className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4" style={{ backgroundColor: box.color, borderRadius: "8px" }} />
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
// // // //   TrendingUp,
// // // //   Globe,
// // // //   Briefcase,
// // // //   Heart,
// // // //   FileText,
// // // //   Users,
// // // //   BarChart3,
// // // //   Library,
// // // //   BookOpen,
// // // //   Award,
// // // // } from "lucide-react";

// // // // // Extended features array to include Class 11, 12, and NEET/JEE details
// // // // const features = [
// // // //   {
// // // //     icon: Users,
// // // //     // title: "🤝 1:1 Mentorship",
// // // //      title: "🤝 Evaluate",
// // // //     description:
// // // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // // //   },
// // // //   {
// // // //     icon: FileText,
// // // //     // title: "🧪 Mock Tests & Practice",
// // // //      title: "🧪 Educate",
// // // //     description:
// // // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // // //   },
// // // //   {
// // // //     icon: Heart,
// // // //     title: "🧠 Elevate",
// // // //     description:
// // // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // // //   },
// // // //   // Class 6 to 10
// // // //   {
// // // //     icon: Briefcase,
// // // //     title: "👩‍💼 Class 6",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   {
// // // //     icon: Globe,
// // // //     title: "👩‍💼 Class 7",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   {
// // // //     icon: TrendingUp,
// // // //     title: "👩‍💼 Class 8",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   {
// // // //     icon: Library,
// // // //     title: "👩‍💼 Class 9",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   {
// // // //     icon: Library,
// // // //     title: "👩‍💼 Class 10",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   {
// // // //     icon: Library,
// // // //     title: "🏆 Olympiad",
// // // //     description: `• 26 Boards\n• 1000+ MCQ\n• 2020+ Subjective Questions\n• 3000+ Model Papers\n• 500+ Mentors\n• 400+ Tutors`,
// // // //   },
// // // //   // Class 11
// // // //   {
// // // //     icon: BookOpen,
// // // //     title: "🎓 Class 11 Arts",
// // // //     description: `• JEE/NEET Foundation\n• 1500+ Physics/Chem MCQs\n• 2500+ Subjective Qs\n• 3500+ Sample Papers\n• Top Faculty Mentorship\n• 24/7 Doubt Solving`,
// // // //   },
// // // //   {
// // // //     icon: Award,
// // // //     title: "🎓 Class 11 Commerce",
// // // //     description: `• Board Exam Special Prep\n• Full Syllabus Mock Tests\n• PYQ Analysis (Last 10 Yrs)\n• 4000+ Practice Questions\n• Stress-Free Counseling\n• Career Guidance Sessions`,
// // // //   },
// // // //   {
// // // //     icon: TrendingUp,
// // // //     title: "🎓 Class 11 Science",
// // // //     description: `• All India Test Series (AITS)\n• Real-time Rank Predictor\n• Physics, Chemistry, Biology/Maths\n• Advanced Doubt Clearance\n• Personalized Weakness Tracker`,
// // // //   },
// // // //   // Class 12
// // // //   {
// // // //     icon: BookOpen,
// // // //     title: "🎓 Class 12 Arts",
// // // //     description: `• CUET & Board Integrated Prep\n• 2000+ Subjective Answers Writing\n• Last 12 Years PYQ Detailed Analysis\n• Answer Checking by Board Experts\n• Top Faculty Mentorship\n• Career Stream Guidance`,
// // // //   },
// // // //   {
// // // //     icon: Award,
// // // //     title: "🎓 Class 12 Commerce",
// // // //     description: `• Premium CA/CS Foundation Prep\n• Accounts & Eco Core Concept Booster\n• 5000+ Practice MCQs & Case Studies\n• Board Exam Mock Series (Strict Timing)\n• Stress-Free Counseling\n• Placement Seminars`,
// // // //   },
// // // //   {
// // // //     icon: TrendingUp,
// // // //     title: "🎓 Class 12 Science",
// // // //     description: `• Core JEE Main/Advanced & NEET Tracker\n• Daily Live Doubt Clearing Rooms\n• Formula Sheet & Concept Mapping Notes\n• High-Yielding All India Test Series\n• Real-Time Rank Predictor Dashboard`,
// // // //   },
// // // // ];

// // // // const goals = [
// // // //   "Learn Maths",
// // // //   "Learn English",
// // // //   "Science",
// // // //   "GK",
// // // //   "JNV Entrance",
// // // //   "KVS",
// // // //   "Sainik School",
// // // //   "Olympiad",
// // // // ];

// // // // const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
// // // //   0: {
// // // //     title: "Personalized Study Plan",
// // // //     desc: "Weak–strong subject analysis Daily + weekly target sheet PYQ based planning (especially from NEET-UG trend)",
// // // //     icon: "📚",
// // // //   },
// // // //   1: {
// // // //     title: "Test Series & Evaluation",
// // // //     desc: "All India Rank analysis, mistake log tracking, time-management sheets, and customized revision tests.",
// // // //     icon: "🧪",
// // // //   },
// // // //   2: {
// // // //     title: "Mindset & Motivation Plan",
// // // //     desc: "Weekly stress-buster sessions, 1:1 interaction with counselors, and customized schedules to avoid burnout.",
// // // //     icon: "🧠",
// // // //   },
// // // //   3: {
// // // //     title: "Placement Preparation Toolkit",
// // // //     desc: "Resume review, live mock HR interviews, industry-specific soft skill training, and direct referral opportunities.",
// // // //     icon: "💼",
// // // //   },
// // // //   4: {
// // // //     title: "Global Career Roadmap",
// // // //     desc: "In-depth profile building for global markets, profile enhancement advice, and university selection support.",
// // // //     icon: "🌍",
// // // //   },
// // // //   5: {
// // // //     title: "Advanced Tech & Skills Training",
// // // //     desc: "Hands-on capstone projects, cohort-based learning, industry mentorship, and verified portfolio building.",
// // // //     icon: "📈",
// // // //   },
// // // //   6: {
// // // //     title: "Academic Stream Roadmap",
// // // //     desc: "Subject combination advisor, continuous track evaluation, and specific curriculum help with top faculties.",
// // // //     icon: "📚",
// // // //   },
// // // // };

// // // // function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
// // // //   const data = studyPlanData[activeIndex % 7] || studyPlanData[0];

// // // //   return (
// // // //     <div className="w-full mt-6 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
// // // //       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-xl overflow-hidden">
// // // //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
// // // //         <div className="flex items-center gap-4 z-10">
// // // //           <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
// // // //             <BarChart3 className="w-10 h-10" />
// // // //           </div>
// // // //           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
// // // //             <FileText className="w-10 h-10" />
// // // //           </div>
// // // //           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
// // // //             <TrendingUp className="w-10 h-10" />
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="w-full md:w-1/2 flex flex-col items-start text-left">
// // // //         <div className="flex items-center gap-2 mb-3">
// // // //           <span className="text-2xl">{data.icon}</span>
// // // //           <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase text-sm md:text-base">
// // // //             {data.title}
// // // //           </h4>
// // // //         </div>
// // // //         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
// // // //           {data.desc}
// // // //         </p>
// // // //         <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
// // // //           JOIN US
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export function Features() {
// // // //   const scrollRef = useRef<HTMLDivElement | null>(null);
// // // //   const [boxes, setBoxes] = useState<{ id: number; description: string; color: string }[]>([]);
// // // //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// // // //   useEffect(() => {
// // // //     const items = Array.from({ length: 10 }, (_, i) => ({
// // // //       id: i,
// // // //       description: `Learn ${i + 1}`,
// // // //       color: `hsl(${i * 36}, 70%, 80%)`,
// // // //     }));
// // // //     setBoxes(items);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const scrollContainer = scrollRef.current;
// // // //     if (!scrollContainer) return;
// // // //     let direction = 1;
// // // //     const scrollStep = 1;
// // // //     const scrollDelay = 15;
// // // //     const interval = setInterval(() => {
// // // //       if (!scrollContainer) return;
// // // //       scrollContainer.scrollLeft += scrollStep * direction;
// // // //       if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
// // // //         direction = -1;
// // // //       }
// // // //       if (scrollContainer.scrollLeft <= 0) {
// // // //         direction = 1;
// // // //       }
// // // //     }, scrollDelay);
// // // //     return () => clearInterval(interval);
// // // //   }, [boxes]);

// // // //   return (
// // // //     <section id="features" className="py-20 bg-white">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// // // //         <div className="text-center mb-16">
// // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // //             Comprehensive Guidance for Every Student
// // // //           </h2>
// // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // //           Good Guiders brings together realistic Mock Tests, interactive Online Learning, and personalized Mentorship to help students learn smarter, perform better, and achieve their academic goals.
// // // //           </p>
// // // //         </div>

// // // //         {/* Top 3 Cards Row */}
// // // //         <div className="flex flex-col gap-4 mb-12">
// // // //           <div className="flex flex-wrap justify-center gap-8">
// // // //             {features.slice(0, 3).map((feature, index) => {
// // // //               const Icon = feature.icon;
// // // //               const bgColors = ["bg-[rgb(125,219,123)]", "bg-[rgb(255,153,153)]", "bg-[rgb(169,254,255)]"];
// // // //               const isExpanded = expandedCard === index;
              
// // // //               return (
// // // //                 <div key={index} className="w-full md:w-[350px] flex flex-col">
// // // //                   <Card className={`${bgColors[index]} text-black h-[320px] shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
// // // //                     <CardContent className="p-6 flex flex-col h-full justify-between">
// // // //                       <div>
// // // //                         <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // //                           <Icon className="w-8 h-8 text-black" />
// // // //                         </div>
// // // //                         <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// // // //                         <p className="text-black/80 mb-4 line-clamp-3 whitespace-pre-line">
// // // //                           {feature.description}
// // // //                         </p>
// // // //                       </div>
// // // //                       <button
// // // //                         onClick={() => setExpandedCard(isExpanded ? null : index)}
// // // //                         className={`mt-auto w-full px-4 py-2 rounded-md transition-colors font-medium ${isExpanded ? "bg-black text-white hover:bg-gray-800" : "bg-[hsl(218,46%,36%)] text-white hover:bg-orange-600"}`}
// // // //                       >
// // // //                         {isExpanded ? "Show Less" : "Learn More"}
// // // //                       </button>
// // // //                     </CardContent>
// // // //                   </Card>
// // // //                 </div>
// // // //               );
// // // //             })}
// // // //           </div>
// // // //           {expandedCard !== null && expandedCard < 3 && <PersonalizedStudyPlan activeIndex={expandedCard} />}
// // // //         </div>

// // // //         {/* Learning Goals Section */}
// // // //         <div className="flex justify-center mb-6">
// // // //           <button className="w-[350px] rounded-lg border-none bg-[#5B3EC6] text-white cursor-pointer py-3 px-6 font-semibold shadow-md hover:bg-[#4a30a8] transition-colors">
// // // //             Select Your Learning Goal
// // // //           </button>
// // // //         </div>

// // // //         {/* Class 1 to 5 Box */}
// // // //         <div className="flex justify-center items-center p-6 mb-6">
// // // //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// // // //             <h1 className="text-3xl font-bold text-center mb-10">Class 1 to 5</h1>
// // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // //               {goals.map((goal, index) => (
// // // //                 <div key={index} className="h-36 rounded-3xl border-2 border-purple-600 flex items-center justify-center text-center text-lg font-semibold cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300">
// // // //                   {goal}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Class 6 to 10 Box */}
// // // //         <div className="flex justify-center items-center p-6 mb-6">
// // // //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// // // //             <h1 className="text-3xl font-bold text-center mb-10">Class 6 to 10</h1>
// // // //             <div className="flex flex-col gap-6">
// // // //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //                 {features.slice(3, 9).map((feature, index) => {
// // // //                   const Icon = feature.icon;
// // // //                   const actualIndex = index + 3;
// // // //                   const isExpanded = expandedCard === actualIndex;
// // // //                   return (
// // // //                     <div key={actualIndex} className="w-full flex">
// // // //                       <Card className={`bg-slate-50 w-full h-auto min-h-[340px] flex flex-col shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
// // // //                         <CardContent className="p-6 flex flex-col flex-grow justify-between">
// // // //                           <div>
// // // //                             <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
// // // //                               <Icon className="w-6 h-6 text-primary" />
// // // //                             </div>
// // // //                             <h3 className="text-xl font-bold text-gray-900 mb-3">
// // // //                               {feature.title}
// // // //                             </h3>
// // // //                             <p className="text-gray-700 mb-4 text-sm whitespace-pre-line leading-relaxed font-medium bg-white/50 p-3 rounded-xl border border-gray-100">
// // // //                               {feature.description}
// // // //                             </p>
// // // //                           </div>
// // // //                           <button
// // // //                             onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// // // //                             className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 mt-2 transition-colors flex items-center gap-1 self-start"
// // // //                           >
// // // //                             {isExpanded ? "Show Less ↑" : "Learn More →"}
// // // //                           </button>
// // // //                         </CardContent>
// // // //                       </Card>
// // // //                     </div>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Study Plan for Class 6 to 10 */}
// // // //         {expandedCard !== null && expandedCard >= 3 && expandedCard < 9 && (
// // // //           <div className="mb-12 px-6">
// // // //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// // // //           </div>
// // // //         )}

// // // //         {/* Class 11 to 12 Box */}
// // // //         <div className="flex justify-center items-center p-6 mb-12">
// // // //           <div className="w-full max-w-7xl bg-white border-2 rounded-3xl p-8 shadow-lg">
// // // //             <h1 className="text-3xl font-bold text-center mb-10">Class 11 to 12</h1>
// // // //             <div className="flex flex-col gap-6">
// // // //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //                 {features.slice(9).map((feature, index) => {
// // // //                   const Icon = feature.icon;
// // // //                   const actualIndex = index + 9;
// // // //                   const isExpanded = expandedCard === actualIndex;
// // // //                   return (
// // // //                     <div key={actualIndex} className="w-full flex">
// // // //                       <Card className={`bg-slate-50 w-full h-auto min-h-[340px] flex flex-col shadow-md hover:shadow-lg transition-all duration-300 group ${isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""}`}>
// // // //                         <CardContent className="p-6 flex flex-col flex-grow justify-between">
// // // //                           <div>
// // // //                             <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
// // // //                               <Icon className="w-6 h-6 text-primary" />
// // // //                             </div>
// // // //                             <h3 className="text-xl font-bold text-gray-900 mb-3">
// // // //                               {feature.title}
// // // //                             </h3>
// // // //                             <p className="text-gray-700 mb-4 text-sm whitespace-pre-line leading-relaxed font-medium bg-white/50 p-3 rounded-xl border border-gray-100">
// // // //                               {feature.description}
// // // //                             </p>
// // // //                           </div>
// // // //                           <button
// // // //                             onClick={() => setExpandedCard(isExpanded ? null : actualIndex)}
// // // //                             className="text-sm font-semibold text-[hsl(218,46%,36%)] hover:text-orange-600 mt-2 transition-colors flex items-center gap-1 self-start"
// // // //                           >
// // // //                             {isExpanded ? "Show Less ↑" : "Learn More →"}
// // // //                           </button>
// // // //                         </CardContent>
// // // //                       </Card>
// // // //                     </div>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Study Plan for Class 11 & 12 */}
// // // //         {expandedCard !== null && expandedCard >= 9 && (
// // // //           <div className="mb-12 px-6">
// // // //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// // // //           </div>
// // // //         )}

// // // //         {/* Auto Scrolling boxes */}
// // // //         {/* <div className="relative mb-12">
// // // //           <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg" style={{ scrollBehavior: "smooth" }}>
// // // //             {boxes.map((box) => (
// // // //               <div key={box.id} className="min-w-[200px] h-[50px] flex-shrink-0 shadow-md p-4" style={{ backgroundColor: box.color, borderRadius: "8px" }} />
// // // //             ))}
// // // //           </div>
// // // //         </div> */}

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }



// // // import React, { useState } from "react";
// // // import { Card, CardContent } from "@/components/ui/card";
// // // import {
// // //   Users,
// // //   FileText,
// // //   Heart,
// // //   BarChart3,
// // //   TrendingUp,
// // //   ArrowRight,
// // //   BookOpen,
// // //   Calculator,
// // //   FlaskConical,
// // //   Globe2,
// // //   Building2,
// // //   GraduationCap,
// // //   Trophy,
// // //   Award,
// // //   Palette,
// // //   Briefcase,
// // //   Atom,
// // // } from "lucide-react";

// // // // Top 3 Features Data
// // // const topFeatures = [
// // //   {
// // //     icon: Users,
// // //     title: "🤝 Evaluate",
// // //     description:
// // //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// // //     bg: "bg-[rgb(125,219,123)]",
// // //   },
// // //   {
// // //     icon: FileText,
// // //     title: "🧪 Educate",
// // //     description:
// // //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// // //     bg: "bg-[rgb(255,153,153)]",
// // //   },
// // //   {
// // //     icon: Heart,
// // //     title: "🧠 Elevate",
// // //     description:
// // //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// // //     bg: "bg-[rgb(169,254,255)]",
// // //   },
// // // ];

// // // // Classes 1-5 Data
// // // const class1to5Data = [
// // //   {
// // //     title: "Learn",
// // //     highlight: "Maths",
// // //     icon: Calculator,
// // //     iconColor: "text-purple-600 bg-purple-100",
// // //     bgColor: "bg-purple-50/50 hover:bg-purple-50",
// // //     borderColor: "border-purple-200",
// // //     btnColor: "bg-purple-600",
// // //   },
// // //   {
// // //     title: "Learn",
// // //     highlight: "English",
// // //     icon: BookOpen,
// // //     iconColor: "text-rose-600 bg-rose-100",
// // //     bgColor: "bg-rose-50/50 hover:bg-rose-50",
// // //     borderColor: "border-rose-200",
// // //     btnColor: "bg-rose-500",
// // //   },
// // //   {
// // //     title: "",
// // //     highlight: "Science",
// // //     icon: FlaskConical,
// // //     iconColor: "text-emerald-600 bg-emerald-100",
// // //     bgColor: "bg-emerald-50/50 hover:bg-emerald-50",
// // //     borderColor: "border-emerald-200",
// // //     btnColor: "bg-emerald-600",
// // //   },
// // //   {
// // //     title: "",
// // //     highlight: "GK",
// // //     icon: Globe2,
// // //     iconColor: "text-amber-600 bg-amber-100",
// // //     bgColor: "bg-amber-50/50 hover:bg-amber-50",
// // //     borderColor: "border-amber-200",
// // //     btnColor: "bg-amber-500",
// // //   },
// // //   {
// // //     title: "",
// // //     highlight: "JNV Entrance",
// // //     icon: Building2,
// // //     iconColor: "text-blue-600 bg-blue-100",
// // //     bgColor: "bg-blue-50/50 hover:bg-blue-50",
// // //     borderColor: "border-blue-200",
// // //     btnColor: "bg-blue-600",
// // //   },
// // //   {
// // //     title: "",
// // //     highlight: "KVS",
// // //     icon: GraduationCap,
// // //     iconColor: "text-teal-600 bg-teal-100",
// // //     bgColor: "bg-teal-50/50 hover:bg-teal-50",
// // //     borderColor: "border-teal-200",
// // //     btnColor: "bg-teal-600",
// // //   },
// // //   {
// // //     title: "",
// // //     highlight: "Sainik School",
// // //     icon: Award,
// // //     iconColor: "text-orange-600 bg-orange-100",
// // //     bgColor: "bg-orange-50/50 hover:bg-orange-50",
// // //     borderColor: "border-orange-200",
// // //     btnColor: "bg-orange-600",
// // //   },
// // //   {
// // //     title: "",
// // //     highlight: "Olympiad",
// // //     icon: Trophy,
// // //     iconColor: "text-indigo-600 bg-indigo-100",
// // //     bgColor: "bg-indigo-50/50 hover:bg-indigo-50",
// // //     borderColor: "border-indigo-200",
// // //     btnColor: "bg-indigo-600",
// // //   },
// // // ];

// // // // Classes 6-10 Data
// // // const class6to10Data = [
// // //   {
// // //     id: 3,
// // //     title: "Class 6",
// // //     subtitle: "Build strong basics for a bright future",
// // //     badge: "FOUNDATION",
// // //     badgeBg: "bg-blue-100 text-blue-700",
// // //     color: "text-blue-600",
// // //     bg: "from-blue-50/60 to-white",
// // //     border: "border-blue-200",
// // //     btnBg: "bg-blue-600 hover:bg-blue-700",
// // //     tagText: "26 Boards",
// // //     icon: BookOpen,
// // //   },
// // //   {
// // //     id: 4,
// // //     title: "Class 7",
// // //     subtitle: "Strengthen concepts and skills",
// // //     badge: "FOUNDATION",
// // //     badgeBg: "bg-emerald-100 text-emerald-700",
// // //     color: "text-emerald-600",
// // //     bg: "from-emerald-50/60 to-white",
// // //     border: "border-emerald-200",
// // //     btnBg: "bg-emerald-600 hover:bg-emerald-700",
// // //     tagText: "26 Boards",
// // //     icon: FlaskConical,
// // //   },
// // //   {
// // //     id: 5,
// // //     title: "Class 8",
// // //     subtitle: "Explore, learn and excel every day",
// // //     badge: "ADVANCED",
// // //     badgeBg: "bg-amber-100 text-amber-700",
// // //     color: "text-amber-600",
// // //     bg: "from-amber-50/60 to-white",
// // //     border: "border-amber-200",
// // //     btnBg: "bg-amber-500 hover:bg-amber-600",
// // //     tagText: "26 Boards",
// // //     icon: Globe2,
// // //   },
// // //   {
// // //     id: 6,
// // //     title: "Class 9",
// // //     subtitle: "Prepare better for higher achievements",
// // //     badge: "BOARD PREP",
// // //     badgeBg: "bg-orange-100 text-orange-700",
// // //     color: "text-orange-600",
// // //     bg: "from-orange-50/60 to-white",
// // //     border: "border-orange-200",
// // //     btnBg: "bg-orange-500 hover:bg-orange-600",
// // //     tagText: "26 Boards",
// // //     icon: BookOpen,
// // //   },
// // //   {
// // //     id: 7,
// // //     title: "Class 10",
// // //     subtitle: "Master your boards with confidence",
// // //     badge: "BOARD MASTER",
// // //     badgeBg: "bg-rose-100 text-rose-700",
// // //     color: "text-rose-600",
// // //     bg: "from-rose-50/60 to-white",
// // //     border: "border-rose-200",
// // //     btnBg: "bg-rose-500 hover:bg-rose-600",
// // //     tagText: "26 Boards",
// // //     icon: Trophy,
// // //   },
// // //   {
// // //     id: 8,
// // //     title: "Olympiad",
// // //     subtitle: "Challenge yourself. Aim for excellence",
// // //     badge: "COMPETITIVE",
// // //     badgeBg: "bg-purple-100 text-purple-700",
// // //     color: "text-purple-600",
// // //     bg: "from-purple-50/60 to-white",
// // //     border: "border-purple-200",
// // //     btnBg: "bg-purple-600 hover:bg-purple-700",
// // //     tagText: "Competitive Prep",
// // //     icon: Award,
// // //   },
// // // ];

// // // // Classes 11-12 Data
// // // const class11to12Data = [
// // //   {
// // //     id: 9,
// // //     title: "Class 11",
// // //     stream: "Arts",
// // //     tagline: "Explore. Express. Excel.",
// // //     color: "text-purple-700",
// // //     bg: "from-purple-50/70 to-white",
// // //     border: "border-purple-200",
// // //     btnBg: "bg-purple-600 hover:bg-purple-700",
// // //     icon: Palette,
// // //     iconBg: "bg-purple-600 text-white",
// // //   },
// // //   {
// // //     id: 10,
// // //     title: "Class 11",
// // //     stream: "Commerce",
// // //     tagline: "Learn. Analyze. Grow.",
// // //     color: "text-emerald-700",
// // //     bg: "from-emerald-50/70 to-white",
// // //     border: "border-emerald-200",
// // //     btnBg: "bg-emerald-600 hover:bg-emerald-700",
// // //     icon: TrendingUp,
// // //     iconBg: "bg-emerald-600 text-white",
// // //   },
// // //   {
// // //     id: 11,
// // //     title: "Class 11",
// // //     stream: "Science",
// // //     tagline: "Discover. Understand. Achieve.",
// // //     color: "text-blue-700",
// // //     bg: "from-blue-50/70 to-white",
// // //     border: "border-blue-200",
// // //     btnBg: "bg-blue-600 hover:bg-blue-700",
// // //     icon: FlaskConical,
// // //     iconBg: "bg-blue-600 text-white",
// // //   },
// // //   {
// // //     id: 12,
// // //     title: "Class 12",
// // //     stream: "Arts",
// // //     tagline: "Prepare. Perform. Progress.",
// // //     color: "text-orange-700",
// // //     bg: "from-orange-50/70 to-white",
// // //     border: "border-orange-200",
// // //     btnBg: "bg-orange-500 hover:bg-orange-600",
// // //     icon: BookOpen,
// // //     iconBg: "bg-orange-500 text-white",
// // //   },
// // //   {
// // //     id: 13,
// // //     title: "Class 12",
// // //     stream: "Commerce",
// // //     tagline: "Master Concepts. Maximize Results.",
// // //     color: "text-teal-700",
// // //     bg: "from-teal-50/70 to-white",
// // //     border: "border-teal-200",
// // //     btnBg: "bg-teal-600 hover:bg-teal-700",
// // //     icon: Briefcase,
// // //     iconBg: "bg-teal-600 text-white",
// // //   },
// // //   {
// // //     id: 14,
// // //     title: "Class 12",
// // //     stream: "Science",
// // //     tagline: "Focus. Practice. Succeed.",
// // //     color: "text-blue-700",
// // //     bg: "from-sky-50/70 to-white",
// // //     border: "border-sky-200",
// // //     btnBg: "bg-blue-600 hover:bg-blue-700",
// // //     icon: Atom,
// // //     iconBg: "bg-blue-600 text-white",
// // //   },
// // // ];

// // // const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
// // //   0: {
// // //     title: "Personalized Evaluation Plan",
// // //     desc: "1:1 mentorship, skill-gap analysis, and tailored study tracking.",
// // //     icon: "🤝",
// // //   },
// // //   1: {
// // //     title: "Comprehensive Educate Module",
// // //     desc: "Mock tests, past year papers (PYQs), and real-time performance analytics.",
// // //     icon: "🧪",
// // //   },
// // //   2: {
// // //     title: "Mental Wellness & Support",
// // //     desc: "1:1 mental health support, stress management, and continuous guidance.",
// // //     icon: "🧠",
// // //   },
// // //   3: {
// // //     title: "Class 6 Foundation Plan",
// // //     desc: "26 Boards coverage, 1000+ MCQs, 2020+ Subjective Qs, and 500+ Mentors.",
// // //     icon: "🎒",
// // //   },
// // //   4: {
// // //     title: "Class 7 Concept Building",
// // //     desc: "Interactive learning, daily problem solving, and mentor doubt sessions.",
// // //     icon: "🌱",
// // //   },
// // //   5: {
// // //     title: "Class 8 Advanced Prep",
// // //     desc: "In-depth concept mastery and structured preparation for board readiness.",
// // //     icon: "🌍",
// // //   },
// // //   6: {
// // //     title: "Class 9 Board Prep",
// // //     desc: "Foundation for Class 10 boards with regular tests and PYQ analytics.",
// // //     icon: "📖",
// // //   },
// // //   7: {
// // //     title: "Class 10 Board Master",
// // //     desc: "Strict board mock test series, expert feedback, and high-yield note packs.",
// // //     icon: "🏆",
// // //   },
// // //   8: {
// // //     title: "Olympiad Excellence",
// // //     desc: "Advanced competitive training, logical reasoning focus, and top ranking guides.",
// // //     icon: "🥇",
// // //   },
// // //   9: {
// // //     title: "Class 11 Arts Stream Roadmap",
// // //     desc: "CUET foundation, subject-wise essay writing guides, and career counseling.",
// // //     icon: "🎨",
// // //   },
// // //   10: {
// // //     title: "Class 11 Commerce Booster",
// // //     desc: "CA/CS foundation, Accounts core problem drills, and Economics notes.",
// // //     icon: "📈",
// // //   },
// // //   11: {
// // //     title: "Class 11 Science (JEE/NEET)",
// // //     desc: "Physics, Chemistry & Math/Biology All India Test Series with Rank Predictor.",
// // //     icon: "🧪",
// // //   },
// // //   12: {
// // //     title: "Class 12 Arts & CUET Integrated",
// // //     desc: "Answer checking by board experts and top faculty 1:1 doubt clearance.",
// // //     icon: "📚",
// // //   },
// // //   13: {
// // //     title: "Class 12 Commerce Special",
// // //     desc: "Strictly timed mock exams, case studies, and corporate career guidance.",
// // //     icon: "💼",
// // //   },
// // //   14: {
// // //     title: "Class 12 Science Target JEE/NEET",
// // //     desc: "High-yield test series, daily live doubt rooms, and formula mapping sheets.",
// // //     icon: "🚀",
// // //   },
// // // };

// // // function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
// // //   const data = studyPlanData[activeIndex] || studyPlanData[0];

// // //   return (
// // //     <div className="w-full mt-6 bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
// // //       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-2xl overflow-hidden">
// // //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
// // //         <div className="flex items-center gap-4 z-10">
// // //           <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
// // //             <BarChart3 className="w-10 h-10" />
// // //           </div>
// // //           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
// // //             <FileText className="w-10 h-10" />
// // //           </div>
// // //           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
// // //             <TrendingUp className="w-10 h-10" />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="w-full md:w-1/2 flex flex-col items-start text-left">
// // //         <div className="flex items-center gap-2 mb-3">
// // //           <span className="text-3xl">{data.icon}</span>
// // //           <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase text-sm md:text-base">
// // //             {data.title}
// // //           </h4>
// // //         </div>
// // //         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
// // //           {data.desc}
// // //         </p>
// // //         <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 transition-all duration-200 transform hover:-translate-y-0.5">
// // //           JOIN US
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export function Features() {
// // //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// // //   return (
// // //     <section id="features" className="py-16 bg-slate-50/50">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
// // //         {/* Main Header */}
// // //         <div className="text-center max-w-3xl mx-auto">
// // //           <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
// // //             Comprehensive Guidance for Every Student
// // //           </h2>
// // //           <p className="text-lg text-gray-600">
// // //             Good Guiders brings together realistic Mock Tests, interactive Online Learning, and personalized Mentorship to help students learn smarter and achieve their goals.
// // //           </p>
// // //         </div>

// // //         {/* Top 3 Cards Row */}
// // //         <div className="flex flex-col gap-4">
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //             {topFeatures.map((feature, index) => {
// // //               const Icon = feature.icon;
// // //               const isExpanded = expandedCard === index;

// // //               return (
// // //                 <Card
// // //                   key={index}
// // //                   className={`${feature.bg} border-none text-black h-[320px] rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
// // //                     isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""
// // //                   }`}
// // //                 >
// // //                   <CardContent className="p-6 flex flex-col h-full justify-between">
// // //                     <div>
// // //                       <div className="w-16 h-16 bg-white/40 rounded-2xl flex items-center justify-center mb-6">
// // //                         <Icon className="w-8 h-8 text-black" />
// // //                       </div>
// // //                       <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
// // //                       <p className="text-black/80 font-medium leading-relaxed line-clamp-3">
// // //                         {feature.description}
// // //                       </p>
// // //                     </div>
// // //                     <button
// // //                       onClick={() => setExpandedCard(isExpanded ? null : index)}
// // //                       className={`w-full py-3 rounded-xl transition-all font-semibold shadow-sm ${
// // //                         isExpanded
// // //                           ? "bg-black text-white hover:bg-gray-800"
// // //                           : "bg-slate-900 text-white hover:bg-slate-800"
// // //                       }`}
// // //                     >
// // //                       {isExpanded ? "Show Less" : "Learn More"}
// // //                     </button>
// // //                   </CardContent>
// // //                 </Card>
// // //               );
// // //             })}
// // //           </div>
// // //           {expandedCard !== null && expandedCard < 3 && (
// // //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// // //           )}
// // //         </div>

// // //         {/* SECTION 1: CLASSES 1-5 */}
// // //         <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
// // //           <div className="text-center mb-10">
// // //             <div className="inline-flex items-center gap-2 text-purple-600 font-bold tracking-widest text-xs uppercase mb-2">
// // //               <span>—</span> <span>🎓 CLASSES 1-5</span> <span>—</span>
// // //             </div>
// // //             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // //               Explore. Learn. Grow.
// // //             </h2>
// // //             <p className="text-slate-500 text-sm md:text-base mt-2">
// // //               Fun learning for a strong foundation
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //             {class1to5Data.map((item, index) => {
// // //               const Icon = item.icon;
// // //               return (
// // //                 <div
// // //                   key={index}
// // //                   className={`p-5 rounded-2xl border ${item.borderColor} ${item.bgColor} transition-all duration-300 hover:shadow-md flex items-center justify-between group cursor-pointer`}
// // //                 >
// // //                   <div className="flex items-center gap-4">
// // //                     <div className={`p-3 rounded-2xl ${item.iconColor}`}>
// // //                       <Icon className="w-6 h-6" />
// // //                     </div>
// // //                     <div>
// // //                       {item.title && (
// // //                         <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
// // //                           {item.title}
// // //                         </p>
// // //                       )}
// // //                       <h4 className="text-lg font-bold text-slate-800">
// // //                         {item.highlight}
// // //                       </h4>
// // //                     </div>
// // //                   </div>
// // //                   <div className={`w-8 h-8 rounded-full ${item.btnColor} text-white flex items-center justify-center transform group-hover:translate-x-1 transition-transform`}>
// // //                     <ArrowRight className="w-4 h-4" />
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>

// // //         {/* SECTION 2: CLASSES 6-10 */}
// // //         <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
// // //           <div className="text-center mb-10">
// // //             <div className="inline-flex items-center gap-2 text-indigo-600 font-bold tracking-widest text-xs uppercase mb-2">
// // //               <span>🎓</span> <span>CHOOSE YOUR CLASS</span>
// // //             </div>
// // //             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // //               Personalized learning for every stage
// // //             </h2>
// // //             <p className="text-slate-500 text-sm md:text-base mt-2">
// // //               Select your class to start your structured preparation
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {class6to10Data.map((item) => {
// // //               const Icon = item.icon;
// // //               const isExpanded = expandedCard === item.id;

// // //               return (
// // //                 <Card
// // //                   key={item.id}
// // //                   className={`bg-gradient-to-b ${item.bg} border ${item.border} rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[260px] ${
// // //                     isExpanded ? "ring-4 ring-blue-400" : ""
// // //                   }`}
// // //                 >
// // //                   <CardContent className="p-6 flex flex-col justify-between h-full">
// // //                     <div>
// // //                       {/* Top Row: Badge & Icon */}
// // //                       <div className="flex items-center justify-between mb-4">
// // //                         <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wider ${item.badgeBg}`}>
// // //                           {item.badge}
// // //                         </span>
// // //                         <div className="p-2 bg-white/80 rounded-xl shadow-sm">
// // //                           <Icon className={`w-6 h-6 ${item.color}`} />
// // //                         </div>
// // //                       </div>

// // //                       <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
// // //                         {item.title}
// // //                       </h3>
// // //                       <p className="text-slate-600 text-sm font-medium leading-snug mb-6">
// // //                         {item.subtitle}
// // //                       </p>
// // //                     </div>

// // //                     {/* Bottom Row: Tag & Explore Button */}
// // //                     <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
// // //                       <span className="text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
// // //                         📖 {item.tagText}
// // //                       </span>
// // //                       <button
// // //                         onClick={() => setExpandedCard(isExpanded ? null : item.id)}
// // //                         className={`px-4 py-2 text-xs font-bold text-white rounded-xl ${item.btnBg} transition-all flex items-center gap-1 shadow-sm`}
// // //                       >
// // //                         {isExpanded ? "Close" : "Explore"} <ArrowRight className="w-3.5 h-3.5" />
// // //                       </button>
// // //                     </div>
// // //                   </CardContent>
// // //                 </Card>
// // //               );
// // //             })}
// // //           </div>

// // //           {expandedCard !== null && expandedCard >= 3 && expandedCard <= 8 && (
// // //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// // //           )}
// // //         </div>

// // //         {/* SECTION 3: CLASSES 11-12 */}
// // //         <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
// // //           <div className="text-center mb-10">
// // //             <div className="inline-flex items-center gap-2 text-purple-600 font-bold tracking-widest text-xs uppercase mb-2">
// // //               <span>—</span> <span>CLASSES 11-12</span> <span>—</span>
// // //             </div>
// // //             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // //               Choose Your Stream
// // //             </h2>
// // //             <p className="text-slate-500 text-sm md:text-base mt-2">
// // //               Pick your path. We'll guide you to success.
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {class11to12Data.map((item) => {
// // //               const Icon = item.icon;
// // //               const isExpanded = expandedCard === item.id;

// // //               return (
// // //                 <Card
// // //                   key={item.id}
// // //                   className={`bg-gradient-to-b ${item.bg} border ${item.border} rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[260px] ${
// // //                     isExpanded ? "ring-4 ring-blue-400" : ""
// // //                   }`}
// // //                 >
// // //                   <CardContent className="p-6 flex flex-col justify-between h-full">
// // //                     <div>
// // //                       {/* Top Icon Badge */}
// // //                       <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm bg-white border border-slate-100">
// // //                         <Icon className={`w-6 h-6 ${item.color}`} />
// // //                       </div>

// // //                       <div className="mb-2">
// // //                         <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">
// // //                           {item.title}
// // //                         </span>
// // //                         <h3 className={`text-2xl font-black ${item.color}`}>
// // //                           {item.stream}
// // //                         </h3>
// // //                       </div>

// // //                       <p className="text-slate-500 text-xs font-semibold mb-6">
// // //                         {item.tagline}
// // //                       </p>
// // //                     </div>

// // //                     {/* Button */}
// // //                     <div className="flex justify-end pt-4 border-t border-slate-100/60">
// // //                       <button
// // //                         onClick={() => setExpandedCard(isExpanded ? null : item.id)}
// // //                         className={`w-9 h-9 rounded-full ${item.btnBg} text-white flex items-center justify-center shadow-md hover:scale-105 transition-all`}
// // //                       >
// // //                         <ArrowRight className="w-4 h-4" />
// // //                       </button>
// // //                     </div>
// // //                   </CardContent>
// // //                 </Card>
// // //               );
// // //             })}
// // //           </div>

// // //           {expandedCard !== null && expandedCard >= 9 && (
// // //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// // //           )}
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // }




// // import React, { useState } from "react";
// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   Users,
// //   FileText,
// //   Heart,
// //   BarChart3,
// //   TrendingUp,
// //   ArrowRight,
// //   BookOpen,
// //   Calculator,
// //   FlaskConical,
// //   Globe2,
// //   Building2,
// //   GraduationCap,
// //   Trophy,
// //   Award,
// //   Palette,
// //   Briefcase,
// //   Atom,
// // } from "lucide-react";

// // // ==========================================
// // // 1. TOP 3 EVALUATE / EDUCATE / ELEVATE CARDS
// // // ==========================================
// // const topFeatures = [
// //   {
// //     id: 0,
// //     icon: Users,
// //     title: "🤝 Evaluate",
// //     description:
// //       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
// //     bg: "bg-[rgb(125,219,123)]",
// //   },
// //   {
// //     id: 1,
// //     icon: FileText,
// //     title: "🧪 Educate",
// //     description:
// //       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
// //     bg: "bg-[rgb(255,153,153)]",
// //   },
// //   {
// //     id: 2,
// //     icon: Heart,
// //     title: "🧠 Elevate",
// //     description:
// //       "Mental health support, stress management, and counseling for academic and personal challenges.",
// //     bg: "bg-[rgb(169,254,255)]",
// //   },
// // ];

// // // ==========================================
// // // 2. CLASSES 1-5 DATA (IMAGE 1 DESIGN)
// // // ==========================================
// // const class1to5Data = [
// //   {
// //     title: "Learn",
// //     highlight: "Maths",
// //     icon: Calculator,
// //     iconBg: "bg-purple-100 text-purple-600",
// //     cardBg: "bg-purple-50/40 hover:bg-purple-50/80 border-purple-100",
// //     btnBg: "bg-purple-600 hover:bg-purple-700",
// //   },
// //   {
// //     title: "Learn",
// //     highlight: "English",
// //     icon: BookOpen,
// //     iconBg: "bg-rose-100 text-rose-600",
// //     cardBg: "bg-rose-50/40 hover:bg-rose-50/80 border-rose-100",
// //     btnBg: "bg-rose-500 hover:bg-rose-600",
// //   },
// //   {
// //     title: "",
// //     highlight: "Science",
// //     icon: FlaskConical,
// //     iconBg: "bg-emerald-100 text-emerald-600",
// //     cardBg: "bg-emerald-50/40 hover:bg-emerald-50/80 border-emerald-100",
// //     btnBg: "bg-emerald-600 hover:bg-emerald-700",
// //   },
// //   {
// //     title: "",
// //     highlight: "GK",
// //     icon: Globe2,
// //     iconBg: "bg-amber-100 text-amber-600",
// //     cardBg: "bg-amber-50/40 hover:bg-amber-50/80 border-amber-100",
// //     btnBg: "bg-amber-500 hover:bg-amber-600",
// //   },
// //   {
// //     title: "",
// //     highlight: "JNV Entrance",
// //     icon: Building2,
// //     iconBg: "bg-blue-100 text-blue-600",
// //     cardBg: "bg-blue-50/40 hover:bg-blue-50/80 border-blue-100",
// //     btnBg: "bg-blue-600 hover:bg-blue-700",
// //   },
// //   {
// //     title: "",
// //     highlight: "KVS",
// //     icon: GraduationCap,
// //     iconBg: "bg-teal-100 text-teal-600",
// //     cardBg: "bg-teal-50/40 hover:bg-teal-50/80 border-teal-100",
// //     btnBg: "bg-teal-600 hover:bg-teal-700",
// //   },
// //   {
// //     title: "",
// //     highlight: "Sainik School",
// //     icon: Award,
// //     iconBg: "bg-orange-100 text-orange-600",
// //     cardBg: "bg-orange-50/40 hover:bg-orange-50/80 border-orange-100",
// //     btnBg: "bg-orange-500 hover:bg-orange-600",
// //   },
// //   {
// //     title: "",
// //     highlight: "Olympiad",
// //     icon: Trophy,
// //     iconBg: "bg-indigo-100 text-indigo-600",
// //     cardBg: "bg-indigo-50/40 hover:bg-indigo-50/80 border-indigo-100",
// //     btnBg: "bg-indigo-600 hover:bg-indigo-700",
// //   },
// // ];

// // // ==========================================
// // // 3. CLASSES 6-10 DATA (IMAGE 2 DESIGN)
// // // ==========================================
// // const class6to10Data = [
// //   {
// //     id: 3,
// //     title: "Class 6",
// //     subtitle: "Build strong basics for a bright future",
// //     badge: "FOUNDATION",
// //     badgeBg: "bg-blue-100 text-blue-700",
// //     color: "text-blue-600",
// //     bgGradient: "from-blue-50/70 via-blue-50/20 to-white",
// //     borderColor: "border-blue-200",
// //     btnBg: "bg-blue-600 hover:bg-blue-700",
// //     tagText: "26 Boards",
// //     icon: BookOpen,
// //   },
// //   {
// //     id: 4,
// //     title: "Class 7",
// //     subtitle: "Strengthen concepts and skills",
// //     badge: "FOUNDATION",
// //     badgeBg: "bg-emerald-100 text-emerald-700",
// //     color: "text-emerald-600",
// //     bgGradient: "from-emerald-50/70 via-emerald-50/20 to-white",
// //     borderColor: "border-emerald-200",
// //     btnBg: "bg-emerald-600 hover:bg-emerald-700",
// //     tagText: "26 Boards",
// //     icon: FlaskConical,
// //   },
// //   {
// //     id: 5,
// //     title: "Class 8",
// //     subtitle: "Explore, learn and excel every day",
// //     badge: "ADVANCED",
// //     badgeBg: "bg-amber-100 text-amber-700",
// //     color: "text-amber-600",
// //     bgGradient: "from-amber-50/70 via-amber-50/20 to-white",
// //     borderColor: "border-amber-200",
// //     btnBg: "bg-amber-500 hover:bg-amber-600",
// //     tagText: "26 Boards",
// //     icon: Globe2,
// //   },
// //   {
// //     id: 6,
// //     title: "Class 9",
// //     subtitle: "Prepare better for higher achievements",
// //     badge: "BOARD PREP",
// //     badgeBg: "bg-orange-100 text-orange-700",
// //     color: "text-orange-600",
// //     bgGradient: "from-orange-50/70 via-orange-50/20 to-white",
// //     borderColor: "border-orange-200",
// //     btnBg: "bg-orange-500 hover:bg-orange-600",
// //     tagText: "26 Boards",
// //     icon: BookOpen,
// //   },
// //   {
// //     id: 7,
// //     title: "Class 10",
// //     subtitle: "Master your boards with confidence",
// //     badge: "BOARD MASTER",
// //     badgeBg: "bg-rose-100 text-rose-700",
// //     color: "text-rose-600",
// //     bgGradient: "from-rose-50/70 via-rose-50/20 to-white",
// //     borderColor: "border-rose-200",
// //     btnBg: "bg-rose-500 hover:bg-rose-600",
// //     tagText: "26 Boards",
// //     icon: Trophy,
// //   },
// //   {
// //     id: 8,
// //     title: "Olympiad",
// //     subtitle: "Challenge yourself. Aim for excellence",
// //     badge: "COMPETITIVE",
// //     badgeBg: "bg-purple-100 text-purple-700",
// //     color: "text-purple-600",
// //     bgGradient: "from-purple-50/70 via-purple-50/20 to-white",
// //     borderColor: "border-purple-200",
// //     btnBg: "bg-purple-600 hover:bg-purple-700",
// //     tagText: "Competitive Prep",
// //     icon: Award,
// //   },
// // ];

// // // ==========================================
// // // 4. CLASSES 11-12 DATA (IMAGE 3 DESIGN)
// // // ==========================================
// // const class11to12Data = [
// //   {
// //     id: 9,
// //     title: "Class 11",
// //     stream: "Arts",
// //     tagline: "Explore. Express. Excel.",
// //     color: "text-purple-700",
// //     bgGradient: "from-purple-50/70 via-purple-50/20 to-white",
// //     borderColor: "border-purple-200",
// //     btnBg: "bg-purple-600 hover:bg-purple-700",
// //     icon: Palette,
// //   },
// //   {
// //     id: 10,
// //     title: "Class 11",
// //     stream: "Commerce",
// //     tagline: "Learn. Analyze. Grow.",
// //     color: "text-emerald-700",
// //     bgGradient: "from-emerald-50/70 via-emerald-50/20 to-white",
// //     borderColor: "border-emerald-200",
// //     btnBg: "bg-emerald-600 hover:bg-emerald-700",
// //     icon: TrendingUp,
// //   },
// //   {
// //     id: 11,
// //     title: "Class 11",
// //     stream: "Science",
// //     tagline: "Discover. Understand. Achieve.",
// //     color: "text-blue-700",
// //     bgGradient: "from-blue-50/70 via-blue-50/20 to-white",
// //     borderColor: "border-blue-200",
// //     btnBg: "bg-blue-600 hover:bg-blue-700",
// //     icon: FlaskConical,
// //   },
// //   {
// //     id: 12,
// //     title: "Class 12",
// //     stream: "Arts",
// //     tagline: "Prepare. Perform. Progress.",
// //     color: "text-orange-700",
// //     bgGradient: "from-orange-50/70 via-orange-50/20 to-white",
// //     borderColor: "border-orange-200",
// //     btnBg: "bg-orange-500 hover:bg-orange-600",
// //     icon: BookOpen,
// //   },
// //   {
// //     id: 13,
// //     title: "Class 12",
// //     stream: "Commerce",
// //     tagline: "Master Concepts. Maximize Results.",
// //     color: "text-teal-700",
// //     bgGradient: "from-teal-50/70 via-teal-50/20 to-white",
// //     borderColor: "border-teal-200",
// //     btnBg: "bg-teal-600 hover:bg-teal-700",
// //     icon: Briefcase,
// //   },
// //   {
// //     id: 14,
// //     title: "Class 12",
// //     stream: "Science",
// //     tagline: "Focus. Practice. Succeed.",
// //     color: "text-sky-700",
// //     bgGradient: "from-sky-50/70 via-sky-50/20 to-white",
// //     borderColor: "border-sky-200",
// //     btnBg: "bg-blue-600 hover:bg-blue-700",
// //     icon: Atom,
// //   },
// // ];

// // // ==========================================
// // // 5. STUDY PLAN DETAILS MAPPER
// // // ==========================================
// // const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
// //   0: {
// //     title: "Personalized Evaluation Plan",
// //     desc: "1:1 mentorship sessions, weak-subject analysis, target roadmap, and progress tracking.",
// //     icon: "🤝",
// //   },
// //   1: {
// //     title: "Comprehensive Educate Module",
// //     desc: "Realistic mock test series, 10+ years PYQs analysis, and detailed strength/weakness analytics.",
// //     icon: "🧪",
// //   },
// //   2: {
// //     title: "Mental Wellness & Support",
// //     desc: "Stress-management sessions, 1:1 counselor support, and exam anxiety mitigation plans.",
// //     icon: "🧠",
// //   },
// //   3: {
// //     title: "Class 6 Foundation Roadmap",
// //     desc: "26 Boards coverage, 1000+ MCQs, 2020+ Subjective Qs, 3000+ Model Papers, and top mentors.",
// //     icon: "🎒",
// //   },
// //   4: {
// //     title: "Class 7 Concept Mastery",
// //     desc: "Interactive conceptual sessions, daily practice worksheets, and 24/7 doubt resolution.",
// //     icon: "🌱",
// //   },
// //   5: {
// //     title: "Class 8 Advanced Prep",
// //     desc: "Targeted problem solving, early foundation for high school competition, and rank boosters.",
// //     icon: "🌍",
// //   },
// //   6: {
// //     title: "Class 9 Board Prep",
// //     desc: "Detailed syllabus breakdown, high-yield revision notes, and past year question practice.",
// //     icon: "📖",
// //   },
// //   7: {
// //     title: "Class 10 Board Master Series",
// //     desc: "Strictly timed mock exams, answer sheet evaluation by board experts, and formula sheets.",
// //     icon: "🏆",
// //   },
// //   8: {
// //     title: "Olympiad Competitive Mastery",
// //     desc: "Logical reasoning drills, national-level rank predictor, and high-difficulty challenge modules.",
// //     icon: "🥇",
// //   },
// //   9: {
// //     title: "Class 11 Arts Roadmap",
// //     desc: "CUET foundation, subjective essay evaluation, and comprehensive humanities stream notes.",
// //     icon: "🎨",
// //   },
// //   10: {
// //     title: "Class 11 Commerce Concept Booster",
// //     desc: "CA/CS foundation prep, Accounts & Economics core problem drills, and mock tests.",
// //     icon: "📈",
// //   },
// //   11: {
// //     title: "Class 11 Science (JEE/NEET)",
// //     desc: "AITS (All India Test Series), Physics, Chemistry, Math/Bio formula sheets, and rank tracker.",
// //     icon: "🧪",
// //   },
// //   12: {
// //     title: "Class 12 Arts & CUET Integrated",
// //     desc: "Integrated board exam prep with last 12 years PYQ detailed analysis and answer checking.",
// //     icon: "📚",
// //   },
// //   13: {
// //     title: "Class 12 Commerce Special",
// //     desc: "Premium CA/CS foundation prep, 5000+ practice MCQs & case studies, and career guidance.",
// //     icon: "💼",
// //   },
// //   14: {
// //     title: "Class 12 Science Target JEE/NEET",
// //     desc: "Daily live doubt clearing rooms, formula sheets, high-yield test series, and rank predictor.",
// //     icon: "🚀",
// //   },
// // };

// // function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
// //   const data = studyPlanData[activeIndex] || studyPlanData[0];

// //   return (
// //     <div className="w-full mt-8 bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
// //       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-2xl overflow-hidden">
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
// //         <div className="flex items-center gap-3 mb-3">
// //           <span className="text-3xl">{data.icon}</span>
// //           <h4 className="text-xl font-bold text-slate-800 uppercase tracking-wide text-sm md:text-base">
// //             {data.title}
// //           </h4>
// //         </div>
// //         <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
// //           {data.desc}
// //         </p>
// //         <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5">
// //           JOIN US NOW
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // // ==========================================
// // // MAIN FEATURES COMPONENT
// // // ==========================================
// // export function Features() {
// //   const [expandedCard, setExpandedCard] = useState<number | null>(null);

// //   const toggleExpand = (id: number) => {
// //     setExpandedCard(expandedCard === id ? null : id);
// //   };

// //   return (
// //     <section id="features" className="py-16 bg-slate-50/50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
// //         {/* Main Header */}
// //         <div className="text-center max-w-3xl mx-auto">
// //           <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
// //             Comprehensive Guidance for Every Student
// //           </h2>
// //           <p className="text-lg text-slate-600 leading-relaxed">
// //             Good Guiders brings together realistic Mock Tests, interactive Online Learning, and personalized Mentorship to help students learn smarter, perform better, and achieve their goals.
// //           </p>
// //         </div>

// //         {/* ---------------------------------------------------- */}
// //         {/* TOP ROW CARDS: Evaluate, Educate, Elevate */}
// //         {/* ---------------------------------------------------- */}
// //         <div className="flex flex-col gap-4">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {topFeatures.map((feature) => {
// //               const Icon = feature.icon;
// //               const isExpanded = expandedCard === feature.id;

// //               return (
// //                 <Card
// //                   key={feature.id}
// //                   className={`${feature.bg} border-none text-black h-[320px] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
// //                     isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""
// //                   }`}
// //                 >
// //                   <CardContent className="p-6 flex flex-col h-full justify-between">
// //                     <div>
// //                       <div className="w-16 h-16 bg-white/40 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
// //                         <Icon className="w-8 h-8 text-black" />
// //                       </div>
// //                       <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
// //                       <p className="text-black/80 font-medium leading-relaxed line-clamp-3">
// //                         {feature.description}
// //                       </p>
// //                     </div>
// //                     <button
// //                       onClick={() => toggleExpand(feature.id)}
// //                       className={`w-full py-3 rounded-xl transition-all font-semibold shadow-sm ${
// //                         isExpanded
// //                           ? "bg-black text-white hover:bg-gray-800"
// //                           : "bg-slate-900 text-white hover:bg-slate-800"
// //                       }`}
// //                     >
// //                       {isExpanded ? "Show Less" : "Learn More"}
// //                     </button>
// //                   </CardContent>
// //                 </Card>
// //               );
// //             })}
// //           </div>

// //           {expandedCard !== null && expandedCard < 3 && (
// //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// //           )}
// //         </div>

// //         {/* ---------------------------------------------------- */}
// //         {/* SECTION 1: CLASSES 1-5 (IMAGE 1 REPLICA) */}
// //         {/* ---------------------------------------------------- */}
// //         <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
// //           <div className="text-center mb-10">
// //             <div className="inline-flex items-center gap-2 text-purple-600 font-bold tracking-widest text-xs uppercase mb-2">
// //               <span>—</span> <span>🎓 CLASSES 1–5</span> <span>—</span>
// //             </div>
// //             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// //               Explore. Learn. Grow.
// //             </h2>
// //             <p className="text-slate-500 text-sm md:text-base mt-2">
// //               Fun learning for a strong foundation
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {class1to5Data.map((item, index) => {
// //               const Icon = item.icon;
// //               return (
// //                 <div
// //                   key={index}
// //                   className={`h-24 p-5 rounded-2xl border ${item.cardBg} transition-all duration-300 hover:shadow-md flex items-center justify-between group cursor-pointer`}
// //                 >
// //                   <div className="flex items-center gap-4">
// //                     <div className={`p-3 rounded-2xl ${item.iconBg} shadow-sm`}>
// //                       <Icon className="w-6 h-6" />
// //                     </div>
// //                     <div>
// //                       {item.title && (
// //                         <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
// //                           {item.title}
// //                         </p>
// //                       )}
// //                       <h4 className="text-lg font-extrabold text-slate-800">
// //                         {item.highlight}
// //                       </h4>
// //                     </div>
// //                   </div>
// //                   <div className={`w-8 h-8 rounded-full ${item.btnBg} text-white flex items-center justify-center transform group-hover:translate-x-1 transition-transform shadow-sm`}>
// //                     <ArrowRight className="w-4 h-4" />
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* ---------------------------------------------------- */}
// //         {/* SECTION 2: CLASSES 6-10 (IMAGE 2 REPLICA - SAME SIZES) */}
// //         {/* ---------------------------------------------------- */}
// //         <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
// //           <div className="text-center mb-10">
// //             <div className="inline-flex items-center gap-2 text-indigo-600 font-bold tracking-widest text-xs uppercase mb-2">
// //               <span>🎓</span> <span>CHOOSE YOUR CLASS</span>
// //             </div>
// //             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// //               Choose Your Class
// //             </h2>
// //             <p className="text-slate-500 text-sm md:text-base mt-2">
// //               Personalized learning for every stage of your academic journey
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {class6to10Data.map((item) => {
// //               const Icon = item.icon;
// //               const isExpanded = expandedCard === item.id;

// //               return (
// //                 <Card
// //                   key={item.id}
// //                   className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden h-[270px] flex flex-col justify-between ${
// //                     isExpanded ? "ring-4 ring-blue-400" : ""
// //                   }`}
// //                 >
// //                   <CardContent className="p-6 flex flex-col justify-between h-full">
// //                     <div>
// //                       {/* Top Row: Badge & Icon */}
// //                       <div className="flex items-center justify-between mb-4">
// //                         <span className={`text-[10px] font-black px-3 py-1 rounded-md tracking-wider ${item.badgeBg}`}>
// //                           {item.badge}
// //                         </span>
// //                         <div className="p-2 bg-white/90 rounded-2xl shadow-sm border border-slate-100">
// //                           <Icon className={`w-6 h-6 ${item.color}`} />
// //                         </div>
// //                       </div>

// //                       <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
// //                         {item.title}
// //                       </h3>
// //                       <p className="text-slate-600 text-sm font-medium leading-snug line-clamp-2">
// //                         {item.subtitle}
// //                       </p>
// //                     </div>

// //                     {/* Bottom Row: Tag & Explore Button */}
// //                     <div className="flex items-center justify-between pt-4 border-t border-slate-100/80 mt-auto">
// //                       <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 flex items-center gap-1.5 shadow-2xs">
// //                         📖 {item.tagText}
// //                       </span>
// //                       <button
// //                         onClick={() => toggleExpand(item.id)}
// //                         className={`px-4 py-2 text-xs font-bold text-white rounded-xl ${item.btnBg} transition-all flex items-center gap-1.5 shadow-sm hover:scale-105`}
// //                       >
// //                         {isExpanded ? "Close" : "Explore"} <ArrowRight className="w-3.5 h-3.5" />
// //                       </button>
// //                     </div>
// //                   </CardContent>
// //                 </Card>
// //               );
// //             })}
// //           </div>

// //           {expandedCard !== null && expandedCard >= 3 && expandedCard <= 8 && (
// //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// //           )}
// //         </div>

// //         {/* ---------------------------------------------------- */}
// //         {/* SECTION 3: CLASSES 11-12 (IMAGE 3 REPLICA - SAME SIZES) */}
// //         {/* ---------------------------------------------------- */}
// //         <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
// //           <div className="text-center mb-10">
// //             <div className="inline-flex items-center gap-2 text-purple-600 font-bold tracking-widest text-xs uppercase mb-2">
// //               <span>—</span> <span>CLASSES 11–12</span> <span>—</span>
// //             </div>
// //             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// //               Choose Your Stream
// //             </h2>
// //             <p className="text-slate-500 text-sm md:text-base mt-2">
// //               Pick your path. We'll guide you to success.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {class11to12Data.map((item) => {
// //               const Icon = item.icon;
// //               const isExpanded = expandedCard === item.id;

// //               return (
// //                 <Card
// //                   key={item.id}
// //                   className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-[270px] flex flex-col justify-between ${
// //                     isExpanded ? "ring-4 ring-blue-400" : ""
// //                   }`}
// //                 >
// //                   <CardContent className="p-6 flex flex-col justify-between h-full">
// //                     <div>
// //                       {/* Top Icon Badge */}
// //                       <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm bg-white border border-slate-100">
// //                         <Icon className={`w-6 h-6 ${item.color}`} />
// //                       </div>

// //                       <div className="mb-2">
// //                         <span className="text-xs font-bold text-slate-400 tracking-wider uppercase block">
// //                           {item.title}
// //                         </span>
// //                         <h3 className={`text-2xl font-black ${item.color}`}>
// //                           {item.stream}
// //                         </h3>
// //                       </div>

// //                       <p className="text-slate-500 text-xs font-semibold line-clamp-2">
// //                         {item.tagline}
// //                       </p>
// //                     </div>

// //                     {/* Bottom Action Button */}
// //                     <div className="flex justify-end pt-4 border-t border-slate-100/80 mt-auto">
// //                       <button
// //                         onClick={() => toggleExpand(item.id)}
// //                         className={`w-9 h-9 rounded-full ${item.btnBg} text-white flex items-center justify-center shadow-md hover:scale-110 transition-all`}
// //                         aria-label={`Select ${item.title} ${item.stream}`}
// //                       >
// //                         <ArrowRight className="w-4 h-4" />
// //                       </button>
// //                     </div>
// //                   </CardContent>
// //                 </Card>
// //               );
// //             })}
// //           </div>

// //           {expandedCard !== null && expandedCard >= 9 && (
// //             <PersonalizedStudyPlan activeIndex={expandedCard} />
// //           )}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }



// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Users,
//   FileText,
//   Heart,
//   BarChart3,
//   TrendingUp,
//   ArrowRight,
// } from "lucide-react";

// // ==========================================
// // 1. TOP 3 CARDS DATA
// // ==========================================
// const topFeatures = [
//   {
//     id: 0,
//     title: "🤝 Evaluate",
//     description:
//       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
//     bg: "bg-[rgb(125,219,123)]",
//     imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
//   },
//   {
//     id: 1,
//     title: "🧪 Educate",
//     description:
//       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
//     bg: "bg-[rgb(255,153,153)]",
//     imgUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=200&q=80",
//   },
//   {
//     id: 2,
//     title: "🧠 Elevate",
//     description:
//       "Mental health support, stress management, and counseling for academic and personal challenges.",
//     bg: "bg-[rgb(169,254,255)]",
//     imgUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80",
//   },
// ];

// // ==========================================
// // 2. CLASSES 1-5 DATA (IMAGE 1 VISUALS)
// // ==========================================
// const class1to5Data = [
//   {
//     title: "Learn",
//     highlight: "Maths",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3771/3771278.png",
//     cardBg: "bg-purple-50/50 hover:bg-purple-50 border-purple-100",
//     btnBg: "bg-purple-600 hover:bg-purple-700",
//   },
//   {
//     title: "Learn",
//     highlight: "English",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3389/3389011.png",
//     cardBg: "bg-rose-50/50 hover:bg-rose-50 border-rose-100",
//     btnBg: "bg-rose-500 hover:bg-rose-600",
//   },
//   {
//     title: "",
//     highlight: "Science",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
//     cardBg: "bg-emerald-50/50 hover:bg-emerald-50 border-emerald-100",
//     btnBg: "bg-emerald-600 hover:bg-emerald-700",
//   },
//   {
//     title: "",
//     highlight: "GK",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2784/2784403.png",
//     cardBg: "bg-amber-50/50 hover:bg-amber-50 border-amber-100",
//     btnBg: "bg-amber-500 hover:bg-amber-600",
//   },
//   {
//     title: "",
//     highlight: "JNV Entrance",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2231/2231605.png",
//     cardBg: "bg-blue-50/50 hover:bg-blue-50 border-blue-100",
//     btnBg: "bg-blue-600 hover:bg-blue-700",
//   },
//   {
//     title: "",
//     highlight: "KVS",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2997/2997295.png",
//     cardBg: "bg-teal-50/50 hover:bg-teal-50 border-teal-100",
//     btnBg: "bg-teal-600 hover:bg-teal-700",
//   },
//   {
//     title: "",
//     highlight: "Sainik School",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/167/167707.png",
//     cardBg: "bg-orange-50/50 hover:bg-orange-50 border-orange-100",
//     btnBg: "bg-orange-500 hover:bg-orange-600",
//   },
//   {
//     title: "",
//     highlight: "Olympiad",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png",
//     cardBg: "bg-indigo-50/50 hover:bg-indigo-50 border-indigo-100",
//     btnBg: "bg-indigo-600 hover:bg-indigo-700",
//   },
// ];

// // ==========================================
// // 3. CLASSES 6-10 DATA (IMAGE 2 VISUALS)
// // ==========================================
// const class6to10Data = [
//   {
//     id: 3,
//     title: "Class 6",
//     subtitle: "Build strong basics for a bright future",
//     badge: "FOUNDATION",
//     badgeBg: "bg-blue-100 text-blue-700",
//     color: "text-blue-600",
//     bgGradient: "from-blue-50/70 via-blue-50/20 to-white",
//     borderColor: "border-blue-200",
//     btnBg: "bg-blue-600 hover:bg-blue-700",
//     tagText: "26 Boards",
//     // Backpack visual
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2883/2883823.png",
//   },
//   {
//     id: 4,
//     title: "Class 7",
//     subtitle: "Strengthen concepts and skills",
//     badge: "FOUNDATION",
//     badgeBg: "bg-emerald-100 text-emerald-700",
//     color: "text-emerald-600",
//     bgGradient: "from-emerald-50/70 via-emerald-50/20 to-white",
//     borderColor: "border-emerald-200",
//     btnBg: "bg-emerald-600 hover:bg-emerald-700",
//     tagText: "26 Boards",
//     // Books & Plant visual
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3429/3429149.png",
//   },
//   {
//     id: 5,
//     title: "Class 8",
//     subtitle: "Explore, learn and excel every day",
//     badge: "ADVANCED",
//     badgeBg: "bg-amber-100 text-amber-700",
//     color: "text-amber-600",
//     bgGradient: "from-amber-50/70 via-amber-50/20 to-white",
//     borderColor: "border-amber-200",
//     btnBg: "bg-amber-500 hover:bg-amber-600",
//     tagText: "26 Boards",
//     // Globe & Penstand visual
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135753.png",
//   },
//   {
//     id: 6,
//     title: "Class 9",
//     subtitle: "Prepare better for higher achievements",
//     badge: "BOARD PREP",
//     badgeBg: "bg-orange-100 text-orange-700",
//     color: "text-orange-600",
//     bgGradient: "from-orange-50/70 via-orange-50/20 to-white",
//     borderColor: "border-orange-200",
//     btnBg: "bg-orange-500 hover:bg-orange-600",
//     tagText: "26 Boards",
//     // Desk lamp and book visual
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
//   },
//   {
//     id: 7,
//     title: "Class 10",
//     subtitle: "Master your boards with confidence",
//     badge: "BOARD MASTER",
//     badgeBg: "bg-rose-100 text-rose-700",
//     color: "text-rose-600",
//     bgGradient: "from-rose-50/70 via-rose-50/20 to-white",
//     borderColor: "border-rose-200",
//     btnBg: "bg-rose-500 hover:bg-rose-600",
//     tagText: "26 Boards",
//     // Trophy and books visual
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png",
//   },
//   {
//     id: 8,
//     title: "Olympiad",
//     subtitle: "Challenge yourself. Aim for excellence",
//     badge: "COMPETITIVE",
//     badgeBg: "bg-purple-100 text-purple-700",
//     color: "text-purple-600",
//     bgGradient: "from-purple-50/70 via-purple-50/20 to-white",
//     borderColor: "border-purple-200",
//     btnBg: "bg-purple-600 hover:bg-purple-700",
//     tagText: "Competitive Prep",
//     // Gold Medal visual
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2583/2583319.png",
//   },
// ];

// // ==========================================
// // 4. CLASSES 11-12 DATA (IMAGE 3 VISUALS)
// // ==========================================
// const class11to12Data = [
//   {
//     id: 9,
//     title: "Class 11",
//     stream: "Arts",
//     tagline: "Explore. Express. Excel.",
//     color: "text-purple-700",
//     bgGradient: "from-purple-50/70 via-purple-50/20 to-white",
//     borderColor: "border-purple-200",
//     btnBg: "bg-purple-600 hover:bg-purple-700",
//     // Canvas easel art visual
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
//   },
//   {
//     id: 10,
//     title: "Class 11",
//     stream: "Commerce",
//     tagline: "Learn. Analyze. Grow.",
//     color: "text-emerald-700",
//     bgGradient: "from-emerald-50/70 via-emerald-50/20 to-white",
//     borderColor: "border-emerald-200",
//     btnBg: "bg-emerald-600 hover:bg-emerald-700",
//     // Growth charts and coins visual
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2422/2422796.png",
//   },
//   {
//     id: 11,
//     title: "Class 11",
//     stream: "Science",
//     tagline: "Discover. Understand. Achieve.",
//     color: "text-blue-700",
//     bgGradient: "from-blue-50/70 via-blue-50/20 to-white",
//     borderColor: "border-blue-200",
//     btnBg: "bg-blue-600 hover:bg-blue-700",
//     // Microscope visual
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/1085/1085461.png",
//   },
//   {
//     id: 12,
//     title: "Class 12",
//     stream: "Arts",
//     tagline: "Prepare. Perform. Progress.",
//     color: "text-orange-700",
//     bgGradient: "from-orange-50/70 via-orange-50/20 to-white",
//     borderColor: "border-orange-200",
//     btnBg: "bg-orange-500 hover:bg-orange-600",
//     // Globe on books visual
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135753.png",
//   },
//   {
//     id: 13,
//     title: "Class 12",
//     stream: "Commerce",
//     tagline: "Master Concepts. Maximize Results.",
//     color: "text-teal-700",
//     bgGradient: "from-teal-50/70 via-teal-50/20 to-white",
//     borderColor: "border-teal-200",
//     btnBg: "bg-teal-600 hover:bg-teal-700",
//     // Briefcase visual
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3076/3076416.png",
//   },
//   {
//     id: 14,
//     title: "Class 12",
//     stream: "Science",
//     tagline: "Focus. Practice. Succeed.",
//     color: "text-sky-700",
//     bgGradient: "from-sky-50/70 via-sky-50/20 to-white",
//     borderColor: "border-sky-200",
//     btnBg: "bg-blue-600 hover:bg-blue-700",
//     // Rocket takeoff visual
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/1356/1356479.png",
//   },
// ];

// // ==========================================
// // 5. STUDY PLAN DETAILS MAPPER
// // ==========================================
// const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
//   0: { title: "Personalized Evaluation Plan", desc: "1:1 mentorship sessions, weak-subject analysis, target roadmap, and progress tracking.", icon: "🤝" },
//   1: { title: "Comprehensive Educate Module", desc: "Realistic mock test series, 10+ years PYQs analysis, and detailed strength/weakness analytics.", icon: "🧪" },
//   2: { title: "Mental Wellness & Support", desc: "Stress-management sessions, 1:1 counselor support, and exam anxiety mitigation plans.", icon: "🧠" },
//   3: { title: "Class 6 Foundation Roadmap", desc: "26 Boards coverage, 1000+ MCQs, 2020+ Subjective Qs, 3000+ Model Papers, and top mentors.", icon: "🎒" },
//   4: { title: "Class 7 Concept Mastery", desc: "Interactive conceptual sessions, daily practice worksheets, and 24/7 doubt resolution.", icon: "🌱" },
//   5: { title: "Class 8 Advanced Prep", desc: "Targeted problem solving, early foundation for high school competition, and rank boosters.", icon: "🌍" },
//   6: { title: "Class 9 Board Prep", desc: "Detailed syllabus breakdown, high-yield revision notes, and past year question practice.", icon: "📖" },
//   7: { title: "Class 10 Board Master Series", desc: "Strictly timed mock exams, answer sheet evaluation by board experts, and formula sheets.", icon: "🏆" },
//   8: { title: "Olympiad Competitive Mastery", desc: "Logical reasoning drills, national-level rank predictor, and high-difficulty challenge modules.", icon: "🥇" },
//   9: { title: "Class 11 Arts Roadmap", desc: "CUET foundation, subjective essay evaluation, and comprehensive humanities stream notes.", icon: "🎨" },
//   10: { title: "Class 11 Commerce Concept Booster", desc: "CA/CS foundation prep, Accounts & Economics core problem drills, and mock tests.", icon: "📈" },
//   11: { title: "Class 11 Science (JEE/NEET)", desc: "AITS (All India Test Series), Physics, Chemistry, Math/Bio formula sheets, and rank tracker.", icon: "🧪" },
//   12: { title: "Class 12 Arts & CUET Integrated", desc: "Integrated board exam prep with last 12 years PYQ detailed analysis and answer checking.", icon: "📚" },
//   13: { title: "Class 12 Commerce Special", desc: "Premium CA/CS foundation prep, 5000+ practice MCQs & case studies, and career guidance.", icon: "💼" },
//   14: { title: "Class 12 Science Target JEE/NEET", desc: "Daily live doubt clearing rooms, formula sheets, high-yield test series, and rank predictor.", icon: "🚀" },
// };

// function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
//   const data = studyPlanData[activeIndex] || studyPlanData[0];

//   return (
//     <div className="w-full mt-8 bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
//       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-2xl overflow-hidden">
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
//         <div className="flex items-center gap-3 mb-3">
//           <span className="text-3xl">{data.icon}</span>
//           <h4 className="text-xl font-bold text-slate-800 uppercase tracking-wide text-sm md:text-base">
//             {data.title}
//           </h4>
//         </div>
//         <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
//           {data.desc}
//         </p>
//         <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5">
//           JOIN US NOW
//         </button>
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // MAIN FEATURES COMPONENT
// // ==========================================
// export function Features() {
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);

//   const toggleExpand = (id: number) => {
//     setExpandedCard(expandedCard === id ? null : id);
//   };

//   return (
//     <section id="features" className="py-16 bg-slate-50/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
//         {/* Main Header */}
//         <div className="text-center max-w-3xl mx-auto">
//           <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
//             Comprehensive Guidance for Every Student
//           </h2>
//           <p className="text-lg text-slate-600 leading-relaxed">
//             Good Guiders brings together realistic Mock Tests, interactive Online Learning, and personalized Mentorship to help students learn smarter, perform better, and achieve their goals.
//           </p>
//         </div>

//         {/* ---------------------------------------------------- */}
//         {/* TOP ROW CARDS: Evaluate, Educate, Elevate */}
//         {/* ---------------------------------------------------- */}
//         <div className="flex flex-col gap-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {topFeatures.map((feature) => {
//               const isExpanded = expandedCard === feature.id;

//               return (
//                 <Card
//                   key={feature.id}
//                   className={`${feature.bg} border-none text-black h-[320px] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
//                     isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""
//                   }`}
//                 >
//                   <CardContent className="p-6 flex flex-col h-full justify-between">
//                     <div>
//                       <div className="w-16 h-16 bg-white/40 rounded-2xl flex items-center justify-center mb-6 shadow-sm overflow-hidden p-2">
//                         <img src={feature.imgUrl} alt={feature.title} className="w-full h-full object-cover rounded-xl" />
//                       </div>
//                       <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
//                       <p className="text-black/80 font-medium leading-relaxed line-clamp-3">
//                         {feature.description}
//                       </p>
//                     </div>
//                     <button
//                       onClick={() => toggleExpand(feature.id)}
//                       className={`w-full py-3 rounded-xl transition-all font-semibold shadow-sm ${
//                         isExpanded
//                           ? "bg-black text-white hover:bg-gray-800"
//                           : "bg-slate-900 text-white hover:bg-slate-800"
//                       }`}
//                     >
//                       {isExpanded ? "Show Less" : "Learn More"}
//                     </button>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>

//           {expandedCard !== null && expandedCard < 3 && (
//             <PersonalizedStudyPlan activeIndex={expandedCard} />
//           )}
//         </div>

//         {/* ---------------------------------------------------- */}
//         {/* SECTION 1: CLASSES 1-5 (IMAGE 1 REPLICA) */}
//         {/* ---------------------------------------------------- */}
//         <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 text-purple-600 font-bold tracking-widest text-xs uppercase mb-2">
//               <span>—</span> <span>🎓 CLASSES 1–5</span> <span>—</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Explore. Learn. Grow.
//             </h2>
//             <p className="text-slate-500 text-sm md:text-base mt-2">
//               Fun learning for a strong foundation
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {class1to5Data.map((item, index) => {
//               return (
//                 <div
//                   key={index}
//                   className={`h-24 p-5 rounded-2xl border ${item.cardBg} transition-all duration-300 hover:shadow-md flex items-center justify-between group cursor-pointer`}
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-2xl flex items-center justify-center p-1">
//                       <img src={item.imgUrl} alt={item.highlight} className="w-full h-full object-contain" />
//                     </div>
//                     <div>
//                       {item.title && (
//                         <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
//                           {item.title}
//                         </p>
//                       )}
//                       <h4 className="text-lg font-extrabold text-slate-800">
//                         {item.highlight}
//                       </h4>
//                     </div>
//                   </div>
//                   <div className={`w-8 h-8 rounded-full ${item.btnBg} text-white flex items-center justify-center transform group-hover:translate-x-1 transition-transform shadow-sm`}>
//                     <ArrowRight className="w-4 h-4" />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* ---------------------------------------------------- */}
//         {/* SECTION 2: CLASSES 6-10 (IMAGE 2 REPLICA - SAME SIZES) */}
//         {/* ---------------------------------------------------- */}
//         <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 text-indigo-600 font-bold tracking-widest text-xs uppercase mb-2">
//               <span>🎓</span> <span>CHOOSE YOUR CLASS</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Choose Your Class
//             </h2>
//             <p className="text-slate-500 text-sm md:text-base mt-2">
//               Personalized learning for every stage of your academic journey
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {class6to10Data.map((item) => {
//               const isExpanded = expandedCard === item.id;

//               return (
//                 <Card
//                   key={item.id}
//                   className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden h-[280px] flex flex-col justify-between ${
//                     isExpanded ? "ring-4 ring-blue-400" : ""
//                   }`}
//                 >
//                   <CardContent className="p-6 flex flex-col justify-between h-full">
//                     <div>
//                       {/* Top Row: Badge & Image Visual */}
//                       <div className="flex items-center justify-between mb-2">
//                         <span className={`text-[10px] font-black px-3 py-1 rounded-md tracking-wider ${item.badgeBg}`}>
//                           {item.badge}
//                         </span>
//                         <div className="w-20 h-20 p-2 flex items-center justify-center">
//                           <img src={item.imgUrl} alt={item.title} className="w-full h-full object-contain drop-shadow-md" />
//                         </div>
//                       </div>

//                       <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
//                         {item.title}
//                       </h3>
//                       <p className="text-slate-600 text-sm font-medium leading-snug line-clamp-2">
//                         {item.subtitle}
//                       </p>
//                     </div>

//                     {/* Bottom Row: Tag & Explore Button */}
//                     <div className="flex items-center justify-between pt-4 border-t border-slate-100/80 mt-auto">
//                       <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 flex items-center gap-1.5 shadow-2xs">
//                         📖 {item.tagText}
//                       </span>
//                       <button
//                         onClick={() => toggleExpand(item.id)}
//                         className={`px-4 py-2 text-xs font-bold text-white rounded-xl ${item.btnBg} transition-all flex items-center gap-1.5 shadow-sm hover:scale-105`}
//                       >
//                         {isExpanded ? "Close" : "Explore"} <ArrowRight className="w-3.5 h-3.5" />
//                       </button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>

//           {expandedCard !== null && expandedCard >= 3 && expandedCard <= 8 && (
//             <PersonalizedStudyPlan activeIndex={expandedCard} />
//           )}
//         </div>

//         {/* ---------------------------------------------------- */}
//         {/* SECTION 3: CLASSES 11-12 (IMAGE 3 REPLICA - SAME SIZES) */}
//         {/* ---------------------------------------------------- */}
//         <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 text-purple-600 font-bold tracking-widest text-xs uppercase mb-2">
//               <span>—</span> <span>CLASSES 11–12</span> <span>—</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Choose Your Stream
//             </h2>
//             <p className="text-slate-500 text-sm md:text-base mt-2">
//               Pick your path. We'll guide you to success.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {class11to12Data.map((item) => {
//               const isExpanded = expandedCard === item.id;

//               return (
//                 <Card
//                   key={item.id}
//                   className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-[280px] flex flex-col justify-between ${
//                     isExpanded ? "ring-4 ring-blue-400" : ""
//                   }`}
//                 >
//                   <CardContent className="p-6 flex flex-col justify-between h-full">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <span className="text-xs font-bold text-slate-400 tracking-wider uppercase block mb-1">
//                           {item.title}
//                         </span>
//                         <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
//                           {item.stream}
//                         </h3>
//                         <p className="text-slate-500 text-xs font-semibold line-clamp-2 mt-2">
//                           {item.tagline}
//                         </p>
//                       </div>

//                       {/* Visual Image */}
//                       <div className="w-20 h-20 p-2 flex items-center justify-center flex-shrink-0">
//                         <img src={item.imgUrl} alt={item.stream} className="w-full h-full object-contain drop-shadow-md" />
//                       </div>
//                     </div>

//                     {/* Bottom Action Button */}
//                     <div className="flex justify-end pt-4 border-t border-slate-100/80 mt-auto">
//                       <button
//                         onClick={() => toggleExpand(item.id)}
//                         className={`w-9 h-9 rounded-full ${item.btnBg} text-white flex items-center justify-center shadow-md hover:scale-110 transition-all`}
//                         aria-label={`Select ${item.title} ${item.stream}`}
//                       >
//                         <ArrowRight className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>

//           {expandedCard !== null && expandedCard >= 9 && (
//             <PersonalizedStudyPlan activeIndex={expandedCard} />
//           )}
//         </div>

//       </div>
//     </section>
//   );
// }




import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  FileText,
  Heart,
  BarChart3,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

// ==========================================
// 1. TOP 3 CARDS DATA
// ==========================================
const topFeatures = [
  {
    id: 0,
    title: "🤝 Evaluate",
    description:
      "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
    bg: "bg-[rgb(125,219,123)]",
    imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 1,
    title: "🧪 Educate",
    description:
      "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
    bg: "bg-[rgb(255,153,153)]",
    imgUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    title: "🧠 Elevate",
    description:
      "Mental health support, stress management, and counseling for academic and personal challenges.",
    bg: "bg-[rgb(169,254,255)]",
    imgUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80",
  },
];

// ==========================================
// 2. CLASSES 1-5 DATA (SAME BOX SIZE & STRUCTURE)
// ==========================================
const class1to5Data = [
  {
    id: 101,
    title: "Learn Maths",
    subtitle: "Build strong numbers & logic foundation",
    badge: "FOUNDATION",
    badgeBg: "bg-purple-100 text-purple-700",
    color: "text-purple-600",
    bgGradient: "from-purple-50/70 via-purple-50/20 to-white",
    borderColor: "border-purple-200",
    btnBg: "bg-purple-600 hover:bg-purple-700",
    tagText: "Interactive Maths",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3771/3771278.png",
  },
  {
    id: 102,
    title: "Learn English",
    subtitle: "Enhance vocabulary, grammar & reading skills",
    badge: "LANGUAGE",
    badgeBg: "bg-rose-100 text-rose-700",
    color: "text-rose-600",
    bgGradient: "from-rose-50/70 via-rose-50/20 to-white",
    borderColor: "border-rose-200",
    btnBg: "bg-rose-500 hover:bg-rose-600",
    tagText: "Fun English",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3389/3389011.png",
  },
  {
    id: 103,
    title: "Science",
    subtitle: "Explore natural phenomena and fun experiments",
    badge: "DISCOVERY",
    badgeBg: "bg-emerald-100 text-emerald-700",
    color: "text-emerald-600",
    bgGradient: "from-emerald-50/70 via-emerald-50/20 to-white",
    borderColor: "border-emerald-200",
    btnBg: "bg-emerald-600 hover:bg-emerald-700",
    tagText: "Basic Science",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
  },
  {
    id: 104,
    title: "General Knowledge",
    subtitle: "Discover world facts, geography & current affairs",
    badge: "AWARENESS",
    badgeBg: "bg-amber-100 text-amber-700",
    color: "text-amber-600",
    bgGradient: "from-amber-50/70 via-amber-50/20 to-white",
    borderColor: "border-amber-200",
    btnBg: "bg-amber-500 hover:bg-amber-600",
    tagText: "GK Essentials",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2784/2784403.png",
  },
  {
    id: 105,
    title: "JNV Entrance",
    subtitle: "Targeted entrance prep for Navodaya Vidyalaya",
    badge: "ENTRANCE",
    badgeBg: "bg-blue-100 text-blue-700",
    color: "text-blue-600",
    bgGradient: "from-blue-50/70 via-blue-50/20 to-white",
    borderColor: "border-blue-200",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    tagText: "JNV Special",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2231/2231605.png",
  },
  {
    id: 106,
    title: "KVS Prep",
    subtitle: "Structured learning syllabus for Kendriya Vidyalaya",
    badge: "SCHOOL PREP",
    badgeBg: "bg-teal-100 text-teal-700",
    color: "text-teal-600",
    bgGradient: "from-teal-50/70 via-teal-50/20 to-white",
    borderColor: "border-teal-200",
    btnBg: "bg-teal-600 hover:bg-teal-700",
    tagText: "KVS Curriculum",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2997/2997295.png",
  },
  {
    id: 107,
    title: "Sainik School",
    subtitle: "Comprehensive training for All India Sainik School",
    badge: "DEFENCE PREP",
    badgeBg: "bg-orange-100 text-orange-700",
    color: "text-orange-600",
    bgGradient: "from-orange-50/70 via-orange-50/20 to-white",
    borderColor: "border-orange-200",
    btnBg: "bg-orange-500 hover:bg-orange-600",
    tagText: "Sainik Entrance",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/167/167707.png",
  },
  {
    id: 108,
    title: "Olympiad",
    subtitle: "Early competitive aptitude & reasoning booster",
    badge: "COMPETITIVE",
    badgeBg: "bg-indigo-100 text-indigo-700",
    color: "text-indigo-600",
    bgGradient: "from-indigo-50/70 via-indigo-50/20 to-white",
    borderColor: "border-indigo-200",
    btnBg: "bg-indigo-600 hover:bg-indigo-700",
    tagText: "Olympiad Level",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png",
  },
];

// ==========================================
// 3. CLASSES 6-10 DATA
// ==========================================
const class6to10Data = [
  {
    id: 3,
    title: "Class 6",
    subtitle: "Build strong basics for a bright future",
    badge: "FOUNDATION",
    badgeBg: "bg-blue-100 text-blue-700",
    color: "text-blue-600",
    bgGradient: "from-blue-50/70 via-blue-50/20 to-white",
    borderColor: "border-blue-200",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    // tagText: "",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2883/2883823.png",
  },
  {
    id: 4,
    title: "Class 7",
    subtitle: "Strengthen concepts and skills",
    badge: "FOUNDATION",
    badgeBg: "bg-emerald-100 text-emerald-700",
    color: "text-emerald-600",
    bgGradient: "from-emerald-50/70 via-emerald-50/20 to-white",
    borderColor: "border-emerald-200",
    btnBg: "bg-emerald-600 hover:bg-emerald-700",
    // tagText: "26 Boards",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3429/3429149.png",
  },
  {
    id: 5,
    title: "Class 8",
    subtitle: "Explore, learn and excel every day",
    badge: "ADVANCED",
    badgeBg: "bg-amber-100 text-amber-700",
    color: "text-amber-600",
    bgGradient: "from-amber-50/70 via-amber-50/20 to-white",
    borderColor: "border-amber-200",
    btnBg: "bg-amber-500 hover:bg-amber-600",
    // tagText: "26 Boards",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135753.png",
  },
  {
    id: 6,
    title: "Class 9",
    subtitle: "Prepare better for higher achievements",
    badge: "BOARD PREP",
    badgeBg: "bg-orange-100 text-orange-700",
    color: "text-orange-600",
    bgGradient: "from-orange-50/70 via-orange-50/20 to-white",
    borderColor: "border-orange-200",
    btnBg: "bg-orange-500 hover:bg-orange-600",
    // tagText: "26 Boards",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
  },
  {
    id: 7,
    title: "Class 10",
    subtitle: "Master your boards with confidence",
    badge: "BOARD MASTER",
    badgeBg: "bg-rose-100 text-rose-700",
    color: "text-rose-600",
    bgGradient: "from-rose-50/70 via-rose-50/20 to-white",
    borderColor: "border-rose-200",
    btnBg: "bg-rose-500 hover:bg-rose-600",
    // tagText: "26 Boards",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png",
  },
  {
    id: 8,
    title: "Olympiad",
    subtitle: "Challenge yourself. Aim for excellence",
    badge: "COMPETITIVE",
    badgeBg: "bg-purple-100 text-purple-700",
    color: "text-purple-600",
    bgGradient: "from-purple-50/70 via-purple-50/20 to-white",
    borderColor: "border-purple-200",
    btnBg: "bg-purple-600 hover:bg-purple-700",
    tagText: "Competitive Prep",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2583/2583319.png",
  },
];

// ==========================================
// 4. CLASSES 11-12 DATA
// ==========================================
const class11to12Data = [
  {
    id: 9,
    title: "Class 11",
    stream: "Arts",
    tagline: "Explore. Express. Excel.",
    color: "text-purple-700",
    bgGradient: "from-purple-50/70 via-purple-50/20 to-white",
    borderColor: "border-purple-200",
    btnBg: "bg-purple-600 hover:bg-purple-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  },
  {
    id: 10,
    title: "Class 11",
    stream: "Commerce",
    tagline: "Learn. Analyze. Grow.",
    color: "text-emerald-700",
    bgGradient: "from-emerald-50/70 via-emerald-50/20 to-white",
    borderColor: "border-emerald-200",
    btnBg: "bg-emerald-600 hover:bg-emerald-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2422/2422796.png",
  },
  {
    id: 11,
    title: "Class 11",
    stream: "Science",
    tagline: "Discover. Understand. Achieve.",
    color: "text-blue-700",
    bgGradient: "from-blue-50/70 via-blue-50/20 to-white",
    borderColor: "border-blue-200",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1085/1085461.png",
  },
  {
    id: 12,
    title: "Class 12",
    stream: "Arts",
    tagline: "Prepare. Perform. Progress.",
    color: "text-orange-700",
    bgGradient: "from-orange-50/70 via-orange-50/20 to-white",
    borderColor: "border-orange-200",
    btnBg: "bg-orange-500 hover:bg-orange-600",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135753.png",
  },
  {
    id: 13,
    title: "Class 12",
    stream: "Commerce",
    tagline: "Master Concepts. Maximize Results.",
    color: "text-teal-700",
    bgGradient: "from-teal-50/70 via-teal-50/20 to-white",
    borderColor: "border-teal-200",
    btnBg: "bg-teal-600 hover:bg-teal-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3076/3076416.png",
  },
  {
    id: 14,
    title: "Class 12",
    stream: "Science",
    tagline: "Focus. Practice. Succeed.",
    color: "text-sky-700",
    bgGradient: "from-sky-50/70 via-sky-50/20 to-white",
    borderColor: "border-sky-200",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1356/1356479.png",
  },
];

// ==========================================
// 5. STUDY PLAN DETAILS MAPPER
// ==========================================
const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
  0: { title: "Personalized Evaluation Plan", desc: "1:1 mentorship sessions, weak-subject analysis, target roadmap, and progress tracking.", icon: "🤝" },
  1: { title: "Comprehensive Educate Module", desc: "Realistic mock test series, 10+ years PYQs analysis, and detailed strength/weakness analytics.", icon: "🧪" },
  2: { title: "Mental Wellness & Support", desc: "Stress-management sessions, 1:1 counselor support, and exam anxiety mitigation plans.", icon: "🧠" },

  // Classes 1-5 Custom Plan Details
  101: { title: "Learn Maths Plan", desc: "Interactive math games, counting drills, basic geometry, and speed math tricks.", icon: "🔢" },
  102: { title: "Learn English Plan", desc: "Phonics training, story-based reading practice, basic grammar, and spelling games.", icon: "📚" },
  103: { title: "Science Discovery Plan", desc: "Interactive nature videos, basic science experiments, and fun quizzes.", icon: "🔬" },
  104: { title: "GK Essentials Plan", desc: "Daily quiz cards, current events for kids, and world map exploration.", icon: "🌍" },
  105: { title: "JNV Entrance Preparation", desc: "Targeted mental ability tests, language comprehension, and mock papers for JNV.", icon: "🏛️" },
  106: { title: "KVS School Prep Module", desc: "Structured syllabus coverage as per KVS primary guidelines with fun worksheets.", icon: "🏫" },
  107: { title: "Sainik School Entrance Module", desc: "Early aptitude drills, intelligence test practice, and mock exams for Sainik School.", icon: "🎖️" },
  108: { title: "Olympiad Level Primary Prep", desc: "Logical reasoning workouts, mathematics and science olympiad test series.", icon: "🏆" },

  // Classes 6-10
  3: { title: "Class 6 Foundation Roadmap", desc: "26 Boards coverage, 1000+ MCQs, 2020+ Subjective Qs, 3000+ Model Papers, and top mentors.", icon: "🎒" },
  4: { title: "Class 7 Concept Mastery", desc: "Interactive conceptual sessions, daily practice worksheets, and 24/7 doubt resolution.", icon: "🌱" },
  5: { title: "Class 8 Advanced Prep", desc: "Targeted problem solving, early foundation for high school competition, and rank boosters.", icon: "🌍" },
  6: { title: "Class 9 Board Prep", desc: "Detailed syllabus breakdown, high-yield revision notes, and past year question practice.", icon: "📖" },
  7: { title: "Class 10 Board Master Series", desc: "Strictly timed mock exams, answer sheet evaluation by board experts, and formula sheets.", icon: "🏆" },
  8: { title: "Olympiad Competitive Mastery", desc: "Logical reasoning drills, national-level rank predictor, and high-difficulty challenge modules.", icon: "🥇" },

  // Classes 11-12
  9: { title: "Class 11 Arts Roadmap", desc: "CUET foundation, subjective essay evaluation, and comprehensive humanities stream notes.", icon: "🎨" },
  10: { title: "Class 11 Commerce Concept Booster", desc: "CA/CS foundation prep, Accounts & Economics core problem drills, and mock tests.", icon: "📈" },
  11: { title: "Class 11 Science (JEE/NEET)", desc: "AITS (All India Test Series), Physics, Chemistry, Math/Bio formula sheets, and rank tracker.", icon: "🧪" },
  12: { title: "Class 12 Arts & CUET Integrated", desc: "Integrated board exam prep with last 12 years PYQ detailed analysis and answer checking.", icon: "📚" },
  13: { title: "Class 12 Commerce Special", desc: "Premium CA/CS foundation prep, 5000+ practice MCQs & case studies, and career guidance.", icon: "💼" },
  14: { title: "Class 12 Science Target JEE/NEET", desc: "Daily live doubt clearing rooms, formula sheets, high-yield test series, and rank predictor.", icon: "🚀" },
};

function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
  const data = studyPlanData[activeIndex] || studyPlanData[0];

  return (
    <div className="w-full mt-8 bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-2xl overflow-hidden">
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
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{data.icon}</span>
          <h4 className="text-xl font-bold text-slate-800 uppercase tracking-wide text-sm md:text-base">
            {data.title}
          </h4>
        </div>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
          {data.desc}
        </p>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5">
          JOIN US NOW
        </button>
      </div>
    </div>
  );
}

// ==========================================
// MAIN FEATURES COMPONENT
// ==========================================
export function Features() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="features" className="py-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Comprehensive Guidance for Every Student
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Good Guiders brings together realistic Mock Tests, interactive Online Learning, and personalized Mentorship to help students learn smarter, perform better, and achieve their goals.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* TOP ROW CARDS: Evaluate, Educate, Elevate */}
        {/* ---------------------------------------------------- */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topFeatures.map((feature) => {
              const isExpanded = expandedCard === feature.id;

              return (
                <Card
                  key={feature.id}
                  className={`${feature.bg} border-none text-black h-[320px] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                    isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""
                  }`}
                >
                  <CardContent className="p-6 flex flex-col h-full justify-between">
                    <div>
                      <div className="w-16 h-16 bg-white/40 rounded-2xl flex items-center justify-center mb-6 shadow-sm overflow-hidden p-2">
                        <img src={feature.imgUrl} alt={feature.title} className="w-full h-full object-cover rounded-xl" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-black/80 font-medium leading-relaxed line-clamp-3">
                        {feature.description}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleExpand(feature.id)}
                      className={`w-full py-3 rounded-xl transition-all font-semibold shadow-sm ${
                        isExpanded
                          ? "bg-black text-white hover:bg-gray-800"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                      }`}
                    >
                      {isExpanded ? "Show Less" : "Learn More"}
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {expandedCard !== null && expandedCard < 3 && (
            <PersonalizedStudyPlan activeIndex={expandedCard} />
          )}
        </div>

        {/* ---------------------------------------------------- */}
        {/* SECTION 1: CLASSES 1-5 (UNIFORM SIZE & DESIGN) */}
        {/* ---------------------------------------------------- */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="text-center mb-10">
            {/* <div className="inline-flex items-center gap-2 text-purple-600 font-bold tracking-widest text-xs uppercase mb-2">
              <span>—</span> <span>🎓 CLASSES 1–5</span> <span>—</span>
            </div> */}
            <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-widest text-xl uppercase mb-2">

  <span>🎓 CLASSES 1–5</span>

</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore. Learn. Grow.
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-2">
              Fun learning for a strong foundation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {class1to5Data.map((item) => {
              const isExpanded = expandedCard === item.id;

              return (
                <Card
                  key={item.id}
                  className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden h-[280px] flex flex-col justify-between ${
                    isExpanded ? "ring-4 ring-blue-400" : ""
                  }`}
                >
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Row: Badge & Image Visual */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-black px-3 py-1 rounded-md tracking-wider ${item.badgeBg}`}>
                          {item.badge}
                        </span>
                        <div className="w-16 h-16 p-2 flex items-center justify-center">
                          <img src={item.imgUrl} alt={item.title} className="w-full h-full object-contain drop-shadow-md" />
                        </div>
                      </div>

                      <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-medium leading-snug line-clamp-2">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Bottom Row: Tag & Explore Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100/80 mt-auto">
                      <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 flex items-center gap-1.5 shadow-2xs">
                        📖 {item.tagText}
                      </span>
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className={`px-4 py-2 text-xs font-bold text-white rounded-xl ${item.btnBg} transition-all flex items-center gap-1.5 shadow-sm hover:scale-105`}
                      >
                        {isExpanded ? "Close" : "Explore"} <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {expandedCard !== null && expandedCard >= 101 && expandedCard <= 108 && (
            <PersonalizedStudyPlan activeIndex={expandedCard} />
          )}
        </div>

        {/* ---------------------------------------------------- */}
        {/* SECTION 2: CLASSES 6-10 (UNIFORM SIZE & DESIGN) */}
        {/* ---------------------------------------------------- */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-widest text-xl uppercase mb-2">
              <span>🎓</span> <span>CHOOSE YOUR CLASS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Choose Your Class
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-2">
              Personalized learning for every stage of your academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {class6to10Data.map((item) => {
              const isExpanded = expandedCard === item.id;

              return (
                <Card
                  key={item.id}
                  className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden h-[280px] flex flex-col justify-between ${
                    isExpanded ? "ring-4 ring-blue-400" : ""
                  }`}
                >
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Row: Badge & Image Visual */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-black px-3 py-1 rounded-md tracking-wider ${item.badgeBg}`}>
                          {item.badge}
                        </span>
                        <div className="w-20 h-20 p-2 flex items-center justify-center">
                          <img src={item.imgUrl} alt={item.title} className="w-full h-full object-contain drop-shadow-md" />
                        </div>
                      </div>

                      <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-medium leading-snug line-clamp-2">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Bottom Row: Tag & Explore Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100/80 mt-auto">
                      <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 flex items-center gap-1.5 shadow-2xs">
                        📖 {item.tagText}
                      </span>
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className={`px-4 py-2 text-xs font-bold text-white rounded-xl ${item.btnBg} transition-all flex items-center gap-1.5 shadow-sm hover:scale-105`}
                      >
                        {isExpanded ? "Close" : "Explore"} <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {expandedCard !== null && expandedCard >= 3 && expandedCard <= 8 && (
            <PersonalizedStudyPlan activeIndex={expandedCard} />
          )}
        </div>

        {/* ---------------------------------------------------- */}
        {/* SECTION 3: CLASSES 11-12 (UNIFORM SIZE & DESIGN) */}
        {/* ---------------------------------------------------- */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-widest text-xl uppercase mb-2">
               <span>CLASSES 11–12</span> 
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Choose Your Stream
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-2">
              Pick your path. We'll guide you to success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {class11to12Data.map((item) => {
              const isExpanded = expandedCard === item.id;

              return (
                <Card
                  key={item.id}
                  className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-[280px] flex flex-col justify-between ${
                    isExpanded ? "ring-4 ring-blue-400" : ""
                  }`}
                >
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-slate-400 tracking-wider uppercase block mb-1">
                          {item.title}
                        </span>
                        <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
                          {item.stream}
                        </h3>
                        <p className="text-slate-500 text-xs font-semibold line-clamp-2 mt-2">
                          {item.tagline}
                        </p>
                      </div>

                      {/* Visual Image */}
                      <div className="w-20 h-20 p-2 flex items-center justify-center flex-shrink-0">
                        <img src={item.imgUrl} alt={item.stream} className="w-full h-full object-contain drop-shadow-md" />
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="flex justify-end pt-4 border-t border-slate-100/80 mt-auto">
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className={`w-9 h-9 rounded-full ${item.btnBg} text-white flex items-center justify-center shadow-md hover:scale-110 transition-all`}
                        aria-label={`Select ${item.title} ${item.stream}`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {expandedCard !== null && expandedCard >= 9 && (
            <PersonalizedStudyPlan activeIndex={expandedCard} />
          )}
        </div>

      </div>
    </section>
  );
}