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


// // // // const features = [
// // // //   {
// // // //     icon: BookOpen,
// // // //     title: "",
// // // //     description: "",
// // // //   },
// // // //   {
// // // //     icon: TrendingUp,
// // // //     title: "",
// // // //     description: "",
// // // //   },
// // // //   {
// // // //     icon: Globe,
// // // //     title: "",
// // // //     description: "",
// // // //   },
// // // //   {
// // // //     icon: Briefcase,
// // // //     title: "👩‍💼 HR & Job Assistance",
// // // //     description: "Get job placement support with resume building and interview preparation.",
// // // //   },
// // // //   {
// // // //     icon: Heart,
// // // //     title: "🧠 Psychological Support",
// // // //     description: "Mental health support and stress management for academic and personal challenges.",
// // // //   },
// // // //   {
// // // //     icon: FileText,
// // // //     title: "🧪 Mock Tests & Practice",
// // // //     description: "Practice with realistic mock tests and get detailed performance analytics.",
// // // //   },
// // // //   {
// // // //     icon: Users,
// // // //     title: "🤝 One-to-One Mentorship",
// // // //     description: "Personalized guidance sessions with experienced mentors in your field of interest.",
// // // //   },
// // // //   {
// // // //     icon: BarChart3,
// // // //     title: "📈 Skill Development & Training",
// // // //     description: "Build industry-relevant skills with hands-on training and certification programs.",
// // // //   },
// // // //   {
// // // //     icon: Library,
// // // //     title: "📚 Stream & Subject Help",
// // // //     description: "Get expert help in specific subjects and choose the right academic stream.",
// // // //   },
// // // // ];

// // // // export function Features() {
// // // //   return (
// // // //     <section id="features" className="py-20 bg-white">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         <div className="text-center mb-16">
// // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // //             Comprehensive Guidance for Every Student
// // // //           </h2>
// // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // //             From academic support to career planning, we provide everything you
// // // //             need to succeed in your educational journey.
// // // //           </p>
// // // //         </div>

// // // //         {/* Top 3 Cards Centered with Buttons */}
// // // //         <div className="flex flex-wrap justify-center gap-8 mb-12">
// // // //           {features.slice(0, 3).map((feature, index) => {
// // // //             const Icon = feature.icon;
// // // //             const bgColors = [
// // // //               "bg-[rgb(125,219,123)]", // Light green
// // // //               "bg-[rgb(255,153,153)]", // Light pink
// // // //               "bg-[rgb(169,254,255)]", // Light cyan
// // // //             ];
// // // //             return (
// // // //               <Card
// // // //                 key={index}
// // // //                 className={`${bgColors[index]} text-black h-auto w-full md:w-[350px] shadow-[0_4px_20px_rgba(34,197,94,0.2)] hover:shadow-[0_6px_30px_rgba(34,197,94,0.3)] transition-shadow group`}
// // // //               >
// // // //                 <CardContent className="p-6 flex flex-col h-full">
// // // //                   <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // // //                     <Icon className="w-8 h-8 text-black" />
// // // //                   </div>
// // // //                   <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// // // //                   <p className="text-black/80 mb-4">{feature.description}</p>
// // // //                   <button className="mt-auto bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
// // // //                     Learn More
// // // //                   </button>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             );
// // // //           })}
// // // //         </div>

// // // //         {/* Remaining 6 Cards in Grid */}
// // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //           {features.slice(3).map((feature, index) => {
// // // //             const Icon = feature.icon;
// // // //             return (
// // // //               <Card
// // // //                 key={index + 3}
// // // //                 className="bg-slate-50 h-56 w-full shadow-[0_4px_20px_rgba(34,197,94,0.2)] hover:shadow-[0_6px_30px_rgba(34,197,94,0.3)] transition-shadow group"
// // // //               >
// // // //                 <CardContent className="p-3">
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
// // // //       </div>












// // // // <div className="flex flex-nowrap justify-start gap-8 mb-12 overflow-x-auto custom-padding"style={{ boxShadow: '0 10px 25px rgba(213, 249, 214, 1)' }}>



// // // //   {features.slice(0, 6).map((feature, index) => {
// // // //     const Icon = feature.icon;
// // // //     const bgColors = [
// // // //       "bg-[rgb(125,219,123)]", // Light green
// // // //       "bg-[rgb(255,153,153)]", // Light pink
// // // //       "bg-[rgb(169,254,255)]", // Light cyan
// // // //       "bg-[rgb(255,230,153)]", // Light yellow
// // // //       "bg-[rgb(204,153,255)]", // Light purple
// // // //       "bg-[rgb(153,204,255)]", // Light blue
// // // //     ];

// // // //     return (
// // // //       <div
// // // //         key={index}
// // // //         className={`w-72 min-w-[18rem] flex-shrink-0 p-6 rounded-xl shadow-md text-center ${bgColors[index % bgColors.length]}`}
// // // //       >
// // // //         <div className="flex justify-center mb-4">
// // // //           {/* <Icon className="w-12 h-12 text-gray-700" /> */}
// // // //         </div>
// // // //         <h3 className="text-xl font-semibold mb-2"></h3>
// // // //         <p className="text-gray-700 mb-4"></p>
// // // //         <button className="px-4 py-2 bg-white text-gray-800 rounded shadow hover:bg-gray-100 transition">
// // // //           Learn More
// // // //         </button>
// // // //       </div>
// // // //     );
// // // //   })}
// // // // </div>


// // // // {/* /////////change code//////////////////// */}

// // // // <div className="flex flex-nowrap justify-start gap-8 mb-12 overflow-x-auto cus-pd"style={{ boxShadow: '0 10px 25px rgba(213, 249, 214, 1)' }}>
// // // //   {features.slice(0, 6).map((feature, index) => {
// // // //     // const Icon = feature.icon;
// // // //     const bgColors = [
// // // //       "bg-[rgb(125,219,123)]", // Light green
// // // //       "bg-[rgb(255,153,153)]", // Light pink
// // // //       "bg-[rgb(169,254,255)]", // Light cyan
// // // //       "bg-[rgb(255,230,153)]", // Light yellow
// // // //       "bg-[rgb(204,153,255)]", // Light purple
// // // //       "bg-[rgb(153,204,255)]", // Light blue
// // // //     ];

// // // //     return (
// // // //       <div
// // // //         key={index}
// // // //         className={`w-72 min-w-[18rem] flex-shrink-0 p-6 rounded-xl shadow-md text-center ${bgColors[index % bgColors.length]}`}
// // // //       >
// // // //         <div className="flex justify-center mb-4">
// // // //           {/* <Icon className="w-12 h-12 text-gray-700" /> */}
// // // //         </div>
// // // //         <h3 className="text-xl font-semibold mb-2"></h3>
// // // //         <p className="text-gray-700 mb-4"></p>
// // // //         <button className="px-4 py-2 bg-white text-gray-800 rounded shadow hover:bg-gray-100 transition">
// // // //           Learn More
// // // //         </button>
// // // //       </div>
// // // //     );
// // // //   })}
// // // // </div>

// // // // {/* /////////change code//////////////////// */}

// // // //     </section>
// // // //   );
// // // // }
  





// // //  import React, { useEffect, useRef, useState } from 'react';

// // // import { Card, CardContent } from "@/components/ui/card";
// // // import {
// // //   BookOpen,
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
// // //     icon: BookOpen,
// // //     title: "",
// // //     description: "",
// // //   },
// // //   {
// // //     icon: TrendingUp,
// // //     title: "",
// // //     description: "",
// // //   },
// // //   {
// // //     icon: Globe,
// // //     title: "",
// // //     description: "",
// // //   },
// // //   {
// // //     icon: Briefcase,
// // //     title: "👩‍💼 HR & Job Assistance",
// // //     description: "Get job placement support with resume building and interview preparation.",
// // //   },
// // //   {
// // //     icon: Heart,
// // //     title: "🧠 Psychological Support",
// // //     description: "Mental health support and stress management for academic and personal challenges.",
// // //   },
// // //   {
// // //     icon: FileText,
// // //     title: "🧪 Mock Tests & Practice",
// // //     description: "Practice with realistic mock tests and get detailed performance analytics.",
// // //   },
// // //   {
// // //     icon: Users,
// // //     title: "🤝 One-to-One Mentorship",
// // //     description: "Personalized guidance sessions with experienced mentors in your field of interest.",
// // //   },
// // //   {
// // //     icon: BarChart3,
// // //     title: "📈 Skill Development & Training",
// // //     description: "Build industry-relevant skills with hands-on training and certification programs.",
// // //   },
// // //   {
// // //     icon: Library,
// // //     title: "📚 Stream & Subject Help",
// // //     description: "Get expert help in specific subjects and choose the right academic stream.",
// // //   },
// // // ];





// // // export function Features() {


// // //     const scrollRef = useRef(null);
// // //   const [images, setImages] = useState([]);

// // //     useEffect(() => {
// // //     const fetchImages = () => {
// // //       const imgs = Array.from({ length: 10 }, (_, i) => ({
// // //         id: i,
// // //         url: https://picsum.photos/200/150?random=${i + 1},
// // //       }));
// // //       setImages(imgs);
// // //     };
// // //     fetchImages();
// // //   }, []);



// // //     const scrollLeft = () => {
// // //     if (scrollRef.current) {
// // //       scrollRef.current.scrollBy({
// // //         left: -220,
// // //         behavior: 'smooth',
// // //       });
// // //     }
// // //   };

// // //   const scrollRight = () => {
// // //     if (scrollRef.current) {
// // //       scrollRef.current.scrollBy({
// // //         left: 220,
// // //         behavior: 'smooth',
// // //       });
// // //     }
// // //   };



// // //   return (
// // //     <section id="features" className="py-20 bg-white">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // //             Comprehensive Guidance for Every Student
// // //           </h2>
// // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // //             From academic support to career planning, we provide everything you
// // //             need to succeed in your educational journey.
// // //           </p>
// // //         </div>

// // //         {/* Top 3 Cards Centered with Buttons */}
// // //         <div className="flex flex-wrap justify-center gap-8 mb-12">
// // //           {features.slice(0, 3).map((feature, index) => {
// // //             const Icon = feature.icon;
// // //             const bgColors = [
// // //               "bg-[rgb(125,219,123)]", // Light green
// // //               "bg-[rgb(255,153,153)]", // Light pink
// // //               "bg-[rgb(169,254,255)]", // Light cyan
// // //             ];
// // //             return (
// // //               <Card
// // //                 key={index}
// // //                 className={`${bgColors[index]} text-black h-auto w-full md:w-[350px] shadow-[0_4px_20px_rgba(34,197,94,0.2)] hover:shadow-[0_6px_30px_rgba(34,197,94,0.3)] transition-shadow group`}
// // //               >
// // //                 <CardContent className="p-6 flex flex-col h-full">
// // //                   <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // //                     <Icon className="w-8 h-8 text-black" />
// // //                   </div>
// // //                   <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// // //                   <p className="text-black/80 mb-4">{feature.description}</p>
// // //                   <button className="mt-auto bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
// // //                     Learn More
// // //                   </button>
// // //                 </CardContent>
// // //               </Card>
// // //             );
// // //           })}
// // //         </div>

// // //         {/* Remaining 6 Cards in Grid */}
// // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //           {features.slice(3).map((feature, index) => {
// // //             const Icon = feature.icon;
// // //             return (
// // //               <Card
// // //                 key={index + 3}
// // //                 className="bg-slate-50 h-56 w-full shadow-[0_4px_20px_rgba(34,197,94,0.2)] hover:shadow-[0_6px_30px_rgba(34,197,94,0.3)] transition-shadow group"
// // //               >
// // //                 <CardContent className="p-3">
// // //                   <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// // //                     <Icon className="w-8 h-8 text-primary" />
// // //                   </div>
// // //                   <h3 className="text-xl font-semibold text-gray-900 mb-3">
// // //                     {feature.title}
// // //                   </h3>
// // //                   <p className="text-gray-600">{feature.description}</p>
// // //                 </CardContent>
// // //               </Card>
// // //             );
// // //           })}
// // //         </div>  
// // //       </div>



// // //    <div className="scroll-container" ref={scrollRef}>
// // //         {images.map((img) => (
// // //           <div className="image-box" key={img.id}>
// // //             <img src={img.url} alt={Image ${img.id}} />
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <div className="button-container">
// // //         <button onClick={scrollLeft}>⬅ Scroll Left</button>
// // //         <button onClick={scrollRight}>➡ Scroll Right</button>
// // //       </div>









// // // <div className="flex flex-nowrap justify-start gap-8 mb-12 overflow-x-auto custom-padding"style={{ boxShadow: '0 10px 25px rgba(213, 249, 214, 1)' }}>



// // //   {features.slice(0, 6).map((feature, index) => {
// // //     const Icon = feature.icon;
// // //     const bgColors = [
// // //       "bg-[rgb(125,219,123)]", // Light green
// // //       "bg-[rgb(255,153,153)]", // Light pink
// // //       "bg-[rgb(169,254,255)]", // Light cyan
// // //       "bg-[rgb(255,230,153)]", // Light yellow
// // //       "bg-[rgb(204,153,255)]", // Light purple
// // //       "bg-[rgb(153,204,255)]", // Light blue
// // //     ];

// // //     return (
// // //       <div
// // //         key={index}
// // //         className={`w-72 min-w-[18rem] flex-shrink-0 p-6 rounded-xl shadow-md text-center ${bgColors[index % bgColors.length]}`}
// // //       >
// // //         <div className="flex justify-center mb-4">
// // //           {/* <Icon className="w-12 h-12 text-gray-700" /> */}
// // //         </div>
// // //         <h3 className="text-xl font-semibold mb-2"></h3>
// // //         <p className="text-gray-700 mb-4"></p>
// // //         <button className="px-4 py-2 bg-white text-gray-800 rounded shadow hover:bg-gray-100 transition">
// // //           Learn More
// // //         </button>
// // //       </div>
// // //     );
// // //   })}
// // // </div>


// // // {/* /////////change code//////////////////// */}

// // // <div className="flex flex-nowrap justify-start gap-8 mb-12 overflow-x-auto cus-pd"style={{ boxShadow: '0 10px 25px rgba(213, 249, 214, 1)' }}>
// // //   {features.slice(0, 6).map((feature, index) => {
// // //     // const Icon = feature.icon;
// // //     const bgColors = [
// // //       "bg-[rgb(125,219,123)]", // Light green
// // //       "bg-[rgb(255,153,153)]", // Light pink
// // //       "bg-[rgb(169,254,255)]", // Light cyan
// // //       "bg-[rgb(255,230,153)]", // Light yellow
// // //       "bg-[rgb(204,153,255)]", // Light purple
// // //       "bg-[rgb(153,204,255)]", // Light blue
// // //     ];

// // //     return (
// // //       <div
// // //         key={index}
// // //         className={`w-72 min-w-[18rem] flex-shrink-0 p-6 rounded-xl shadow-md text-center ${bgColors[index % bgColors.length]}`}
// // //       >
// // //         <div className="flex justify-center mb-4">
// // //           {/* <Icon className="w-12 h-12 text-gray-700" /> */}
// // //         </div>
// // //         <h3 className="text-xl font-semibold mb-2"></h3>
// // //         <p className="text-gray-700 mb-4"></p>

// // //         <button className="px-4 py-2 bg-white text-gray-800 rounded shadow hover:bg-gray-100 transition">
// // //           Learn More
// // //         </button>
// // //       </div>
// // //     );
// // //   })}
// // // </div>

// // // {/* /////////change code//////////////////// */}

// // //     </section>
// // //   );
// // // }
  





// // // // import React, { useEffect, useRef, useState } from 'react';
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

// // // // // Features list
// // // // const features = [
// // // //   {
// // // //     icon: BookOpen,
// // // //     title: "📘 Learning Resources",
// // // //     description: "Access curated learning materials tailored to your subjects and interests.",
// // // //   },
// // // //   {
// // // //     icon: TrendingUp,
// // // //     title: "📊 Academic Progress",
// // // //     description: "Track your learning and performance to stay on top of your goals.",
// // // //   },
// // // //   {
// // // //     icon: Globe,
// // // //     title: "🌍 Global Exposure",
// // // //     description: "Connect with global learning communities and stay updated.",
// // // //   },
// // // //   {
// // // //     icon: Briefcase,
// // // //     title: "👩‍💼 HR & Job Assistance",
// // // //     description: "Get job placement support with resume building and interview preparation.",
// // // //   },
// // // //   {
// // // //     icon: Heart,
// // // //     title: "🧠 Psychological Support",
// // // //     description: "Mental health support and stress management for academic and personal challenges.",
// // // //   },
// // // //   {
// // // //     icon: FileText,
// // // //     title: "🧪 Mock Tests & Practice",
// // // //     description: "Practice with realistic mock tests and get detailed performance analytics.",
// // // //   },
// // // //   {
// // // //     icon: Users,
// // // //     title: "🤝 One-to-One Mentorship",
// // // //     description: "Personalized guidance sessions with experienced mentors in your field of interest.",
// // // //   },
// // // //   {
// // // //     icon: BarChart3,
// // // //     title: "📈 Skill Development & Training",
// // // //     description: "Build industry-relevant skills with hands-on training and certification programs.",
// // // //   },
// // // //   {
// // // //     icon: Library,
// // // //     title: "📚 Stream & Subject Help",
// // // //     description: "Get expert help in specific subjects and choose the right academic stream.",
// // // //   },
// // // // ];

// // // // export function Features() {
// // // //   const scrollRef = useRef(null);
// // // //   const [images, setImages] = useState([]);

// // // //   useEffect(() => {
// // // //     const imgs = Array.from({ length: 10 }, (_, i) => ({
// // // //       id: i,
// // // //       url: `https://picsum.photos/200/150?random=${i + 1}`,
// // // //     }));
// // // //     setImages(imgs);
// // // //   }, []);

// // // //   const scrollLeft = () => {
// // // //     scrollRef.current?.scrollBy({ left: -220, behavior: 'smooth' });
// // // //   };

// // // //   const scrollRight = () => {
// // // //     scrollRef.current?.scrollBy({ left: 220, behavior: 'smooth' });
// // // //   };

// // // //   return (
// // // //     <section className="py-20 bg-white">
// // // //       <div className="max-w-7xl mx-auto px-4">
// // // //         <div className="text-center mb-16">
// // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // // //             Comprehensive Guidance for Every Student
// // // //           </h2>
// // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // //             From academic support to career planning, we provide everything you need to succeed.
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
// // // //               <Card key={index} className={`${bgColors[index]} w-full md:w-[350px] shadow-lg`}>
// // // //                 <CardContent className="p-6 flex flex-col h-full">
// // // //                   <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
// // // //                     <Icon className="w-8 h-8 text-black" />
// // // //                   </div>
// // // //                   <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// // // //                   <p className="text-black/80 mb-4">{feature.description}</p>
// // // //                   <button className="mt-auto bg-green-700 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
// // // //                     Learn More
// // // //                   </button>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             );
// // // //           })}
// // // //         </div>

// // // //         {/* Grid of Remaining Cards */}
// // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// // // //           {features.slice(3).map((feature, index) => {
// // // //             const Icon = feature.icon;
// // // //             return (
// // // //               <Card key={index + 3} className="bg-slate-50 h-56 w-full shadow-md hover:shadow-lg transition group">
// // // //                 <CardContent className="p-4">
// // // //                   <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
// // // //                     <Icon className="w-8 h-8 text-green-700" />
// // // //                   </div>
// // // //                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
// // // //                   <p className="text-gray-600">{feature.description}</p>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             );
// // // //           })}
// // // //         </div>

// // // //         {/* Scrollable Image Section */}
// // // //         <div className="relative mb-12">
// // // //           <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-4">
// // // //             {images.map((img) => (
// // // //               <div key={img.id} className="min-w-[200px] flex-shrink-0">
// // // //                 <img src={img.url} alt={`Image ${img.id}`} className="rounded shadow-md" />
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //           <div className="flex justify-center mt-4 gap-4">
// // // //             <button onClick={scrollLeft} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">⬅ Left</button>
// // // //             <button onClick={scrollRight} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Right ➡</button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }



// //  import React, { useEffect, useRef, useState } from 'react';
// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   BookOpen,
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
// //     icon: BookOpen,
// //     title: "📘 Learning Resources",
// //     description: "Access curated learning materials tailored to your subjects and interests.",
// //   },
// //   {
// //     icon: TrendingUp,
// //     title: "📊 Academic Progress",
// //     description: "Track your learning and performance to stay on top of your goals.",
// //   },
// //   {
// //     icon: Globe,
// //     title: "🌍 Global Exposure",
// //     description: "Connect with global learning communities and stay updated.",
// //   },
// //   {
// //     icon: Briefcase,
// //     title: "👩‍💼 HR & Job Assistance",
// //     description: "Get job placement support with resume building and interview preparation.",
// //   },
// //   {
// //     icon: Heart,
// //     title: "🧠 Psychological Support",
// //     description: "Mental health support and stress management for academic and personal challenges.",
// //   },
// //   {
// //     icon: FileText,
// //     title: "🧪 Mock Tests & Practice",
// //     description: "Practice with realistic mock tests and get detailed performance analytics.",
// //   },
// //   {
// //     icon: Users,
// //     title: "🤝 One-to-One Mentorship",
// //     description: "Personalized guidance sessions with experienced mentors in your field of interest.",
// //   },
// //   {
// //     icon: BarChart3,
// //     title: "📈 Skill Development & Training",
// //     description: "Build industry-relevant skills with hands-on training and certification programs.",
// //   },
// //   {
// //     icon: Library,
// //     title: "📚 Stream & Subject Help",
// //     description: "Get expert help in specific subjects and choose the right academic stream.",
// //   },
// // ];

// // export function Features() {
// //   const scrollRef = useRef(null);
// //   const [images, setImages] = useState([]);

// //   useEffect(() => {
// //     const fetchImages = () => {
// //       const imgs = Array.from({ length: 10 }, (_, i) => ({
// //         id: i,
// //         url: `https://picsum.photos/200/150?random=${i + 1}`,
// //       }));
// //       setImages(imgs);
// //     };
// //     fetchImages();
// //   }, []);

// //   const scrollLeft = () => {
// //     scrollRef.current?.scrollBy({ left: -220, behavior: 'smooth' });
// //   };

// //   const scrollRight = () => {
// //     scrollRef.current?.scrollBy({ left: 220, behavior: 'smooth' });
// //   };

// //   return (
// //     <section id="features" className="py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// //             Comprehensive Guidance for Every Student
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             From academic support to career planning, we provide everything you need to succeed.
// //           </p>
// //         </div>

// //         {/* Top 3 Feature Cards */}
// //         <div className="flex flex-wrap justify-center gap-8 mb-12">
// //           {features.slice(0, 3).map((feature, index) => {
// //             const Icon = feature.icon;
// //             const bgColors = [
// //               "bg-[rgb(125,219,123)]",
// //               "bg-[rgb(255,153,153)]",
// //               "bg-[rgb(169,254,255)]",
// //             ];
// //             return (
// //               <Card key={index} className={`${bgColors[index]} w-full md:w-[350px] shadow-lg`}>
// //                 <CardContent className="p-6 flex flex-col h-full">
// //                   <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
// //                     <Icon className="w-8 h-8 text-black" />
// //                   </div>
// //                   <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// //                   <p className="text-black/80 mb-4">{feature.description}</p>
// //                   <button className="mt-auto bg-green-700 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
// //                     Learn More
// //                   </button>
// //                 </CardContent>
// //               </Card>
// //             );
// //           })}
// //         </div>

// //         {/* Remaining Features in Grid */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// //           {features.slice(3).map((feature, index) => {
// //             const Icon = feature.icon;
// //             return (
// //               <Card key={index + 3} className="bg-slate-50 h-56 w-full shadow-md hover:shadow-lg transition group">
// //                 <CardContent className="p-4">
// //                   <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
// //                     <Icon className="w-8 h-8 text-green-700" />
// //                   </div>
// //                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
// //                   <p className="text-gray-600">{feature.description}</p>
// //                 </CardContent>
// //               </Card>
// //             );
// //           })}
// //         </div>

// //         {/* ✅ Image Scroll Carousel Section */}
// //         <div className="relative mb-12">
// //           <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-4">
// //             {images.map((img) => (
// //               <div key={img.id} className="min-w-[200px] flex-shrink-0">
// //                 <img src={img.url} alt={`Image ${img.id}`} className="rounded shadow-md" />
// //               </div>
// //             ))}
// //           </div>
// //           <div className="flex justify-center mt-4 gap-4">
// //             <button onClick={scrollLeft} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">⬅ Left</button>
// //             <button onClick={scrollRight} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Right ➡</button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }





// // import React, { useEffect, useRef, useState } from 'react';

// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   BookOpen,
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
// //   { icon: BookOpen, title: "", description: "" },
// //   { icon: TrendingUp, title: "", description: "" },
// //   { icon: Globe, title: "", description: "" },
// //   {
// //     icon: Briefcase,
// //     title: "👩‍💼 HR & Job Assistance",
// //     description: "Get job placement support with resume building and interview preparation.",
// //   },
// //   {
// //     icon: Heart,
// //     title: "🧠 Psychological Support",
// //     description: "Mental health support and stress management for academic and personal challenges.",
// //   },
// //   {
// //     icon: FileText,
// //     title: "🧪 Mock Tests & Practice",
// //     description: "Practice with realistic mock tests and get detailed performance analytics.",
// //   },
// //   {
// //     icon: Users,
// //     title: "🤝 One-to-One Mentorship",
// //     description: "Personalized guidance sessions with experienced mentors in your field of interest.",
// //   },
// //   {
// //     icon: BarChart3,
// //     title: "📈 Skill Development & Training",
// //     description: "Build industry-relevant skills with hands-on training and certification programs.",
// //   },
// //   {
// //     icon: Library,
// //     title: "📚 Stream & Subject Help",
// //     description: "Get expert help in specific subjects and choose the right academic stream.",
// //   },
// // ];

// // export function Features() {
// //   const scrollRef = useRef(null);
// //   const [boxes, setBoxes] = useState([]);

// //   useEffect(() => {
// //     const generateBoxes = () => {
// //       const items = Array.from({ length: 10 }, (_, i) => ({
// //         id: i,
// //         // title: `Box ${i + 1}`,
// //         description: `Learn ${i + 1}`,
// //         color: `hsl(${i * 36}, 70%, 80%)`, 
// //       }));
// //       setBoxes(items);
// //     };
// //     generateBoxes();
// //   }, []);

// //   const scrollLeft = () => {
// //     if (scrollRef.current) {
// //       scrollRef.current.scrollBy({ left: -220, behavior: 'smooth' });
// //     }
// //   };

// //   const scrollRight = () => {
// //     if (scrollRef.current) {
// //       scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
// //     }
// //   };

// //   return (
// //     <section id="features" className="py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Section Header */}
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// //             Comprehensive Guidance for Every Student
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             From academic support to career planning, we provide everything you need to succeed in your educational journey.
// //           </p>
// //         </div>

// //         {/* Top 3 Cards */}
// //         <div className="flex flex-wrap justify-center gap-8 mb-12">
// //           {features.slice(0, 3).map((feature, index) => {
// //             const Icon = feature.icon;
// //             const bgColors = [
// //               "bg-[rgb(125,219,123)]",
// //               "bg-[rgb(255,153,153)]",
// //               "bg-[rgb(169,254,255)]",
// //             ];
// //             return (
// //               <Card
// //                 key={index}
// //                 className={`${bgColors[index]} text-black h-auto w-full md:w-[350px] shadow-md hover:shadow-lg transition-shadow group`}
// //               >
// //                 <CardContent className="p-6 flex flex-col h-full">
// //                   <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
// //                     <Icon className="w-8 h-8 text-black" />
// //                   </div>
// //                   <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
// //                   <p className="text-black/80 mb-4">{feature.description}</p>
// //                   <button className="mt-auto bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
// //                     Learn More
// //                   </button>
// //                 </CardContent>
// //               </Card>
// //             );
// //           })}
// //         </div>

// //         {/* Remaining Cards */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// //           {features.slice(3).map((feature, index) => {
// //             const Icon = feature.icon;
// //             return (
// //               <Card
// //                 key={index + 3}
// //                 className="bg-slate-50 h-56 w-full shadow-md hover:shadow-lg transition-shadow group"
// //               >
// //                 <CardContent className="p-4">
// //                   <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
// //                     <Icon className="w-8 h-8 text-primary" />
// //                   </div>
// //                   <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
// //                   <p className="text-gray-600">{feature.description}</p>
// //                 </CardContent>
// //               </Card>
// //             );
// //           })}
// //         </div>

// //         {/* Scrollable Colored Boxes */}
// //         <div className="relative mb-12">
// //           <div
// //             ref={scrollRef}
// //             className="flex overflow-x-auto gap-4 pb-4"
// //             style={{ scrollBehavior: 'smooth',  }}
// //           >
// //             {boxes.map((box) => (
// //               <div
// //                 key={box.id}
// //                 className="min-w-[200px] h-[150px] flex-shrink-0 rounded shadow-md p-4"
// //                 style={{ backgroundColor: box.color }}
// //               >
// //                 <h4 className="text-lg font-semibold">{box.title}</h4>
// //                 <p className="text-sm text-gray-700">{box.description}</p>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="flex justify-center mt-4 gap-4">
// //             <button
// //               onClick={scrollLeft}
// //               className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
// //             >
// //               ⬅ Left
// //             </button>
// //             <button
// //               onClick={scrollRight}
// //               className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
// //             >
// //               Right ➡
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

 






// import React, { useEffect, useRef, useState } from 'react';

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   BookOpen,
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
//   { icon: BookOpen, title: "", description: "" },
//   { icon: TrendingUp, title: "", description: "" },
//   { icon: Globe, title: "", description: "" },
//   {
//     icon: Briefcase,
//     title: "👩‍💼 HR & Job Assistance",
//     description: "Get job placement support with resume building and interview preparation.",
//   },
//   {
//     icon: Heart,
//     title: "🧠 Psychological Support",
//     description: "Mental health support and stress management for academic and personal challenges.",
//   },
//   {
//     icon: FileText,
//     title: "🧪 Mock Tests & Practice",
//     description: "Practice with realistic mock tests and get detailed performance analytics.",
//   },
//   {
//     icon: Users,
//     title: "🤝 One-to-One Mentorship",
//     description: "Personalized guidance sessions with experienced mentors in your field of interest.",
//   },
//   {
//     icon: BarChart3,
//     title: "📈 Skill Development & Training",
//     description: "Build industry-relevant skills with hands-on training and certification programs.",
//   },
//   {
//     icon: Library,
//     title: "📚 Stream & Subject Help",
//     description: "Get expert help in specific subjects and choose the right academic stream.",
//   },
// ];

// export function Features() {
//   const scrollRef = useRef(null);
//   const [boxes, setBoxes] = useState([]);

//   useEffect(() => {
//     const generateBoxes = () => {
//       const items = Array.from({ length: 10 }, (_, i) => ({
//         id: i,
//         // title: `Box ${i + 1}`,
//         description: `Learn ${i + 1}`,
//         color: `hsl(${i * 36}, 70%, 80%)`, 
//       }));
//       setBoxes(items);
//     };
//     generateBoxes();
//   }, []);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -220, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
//     }
//   };



  
//   return (
//     <section id="features" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Comprehensive Guidance for Every Student
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             From academic support to career planning, we provide everything you need to succeed in your educational journey.
//           </p>
//         </div>

//         {/* Top 3 Cards */}
//         <div className="flex flex-wrap justify-center gap-8 mb-12">
//           {features.slice(0, 3).map((feature, index) => {
//             const Icon = feature.icon;
//             const bgColors = [
//               "bg-[rgb(125,219,123)]",
//               "bg-[rgb(255,153,153)]",
//               "bg-[rgb(169,254,255)]",
//             ];
//             return (
//               <Card
//                 key={index}
//                 className={`${bgColors[index]} text-black h-auto w-full md:w-[350px] shadow-md hover:shadow-lg transition-shadow group`}
//               >
//                 <CardContent className="p-6 flex flex-col h-full">
//                   <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
//                     <Icon className="w-8 h-8 text-black" />
//                   </div>
//                   <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
//                   <p className="text-black/80 mb-4">{feature.description}</p>
//                   <button className="mt-auto bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
//                     Learn More
//                   </button>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         {/* Remaining Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {features.slice(3).map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <Card
//                 key={index + 3}
//                 className="bg-slate-50 h-56 w-full shadow-md hover:shadow-lg transition-shadow group"
//               >
//                 <CardContent className="p-4">
//                   <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
//                     <Icon className="w-8 h-8 text-primary" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
//                   <p className="text-gray-600">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         {/* Scrollable Colored Boxes */}
//         <div className="relative mb-12">
//           <div
//             ref={scrollRef}
//             className="flex overflow-x-auto gap-4 pb-4,"
//             style={{ scrollBehavior: 'smooth',  }}
//           >
//             {boxes.map((box) => (
//               <div
//                 key={box.id}
//                 className="min-w-[200px] h-[150px] flex-shrink-0 rounded shadow-md p-4"
//                 style={{ backgroundColor: box.color }}
//               >
//                 <h4 className="text-lg font-semibold">{box.title}</h4>
//                 <p className="text-sm text-gray-700">{box.description}</p>
//               </div>
//             ))}
//           </div>

//       </div>

//       </div>
      
//     </section>
//   );



  
// }





import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  TrendingUp,
  Globe,
  Briefcase,
  Heart,
  FileText,
  Users,
  BarChart3,
  Library,
} from "lucide-react";

const features = [
  { icon: BookOpen, title: "", description: "" },
  { icon: TrendingUp, title: "", description: "" },
  { icon: Globe, title: "", description: "" },
  {
    icon: Briefcase,
    title: "👩‍💼 HR & Job Assistance",
    description:
      "Get job placement support with resume building and interview preparation.",
  },
  {
    icon: Heart,
    title: "🧠 Psychological Support",
    description:
      "Mental health support and stress management for academic and personal challenges.",
  },
  {
    icon: FileText,
    title: "🧪 Mock Tests & Practice",
    description:
      "Practice with realistic mock tests and get detailed performance analytics.",
  },
  {
    icon: Users,
    title: "🤝 One-to-One Mentorship",
    description:
      "Personalized guidance sessions with experienced mentors in your field of interest.",
  },
  {
    icon: BarChart3,
    title: "📈 Skill Development & Training",
    description:
      "Build industry-relevant skills with hands-on training and certification programs.",
  },
  {
    icon: Library,
    title: "📚 Stream & Subject Help",
    description:
      "Get expert help in specific subjects and choose the right academic stream.",
  },
];

export function Features() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [boxes, setBoxes] = useState<
    { id: number; description: string; color: string }[]
  >([]);

  // Generate boxes
  useEffect(() => {
    const items = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      description: `Learn ${i + 1}`,
      color: `hsl(${i * 36}, 70%, 80%)`,
    }));
    setBoxes(items);
  }, []);

  // Auto scroll (reverse at ends)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let direction = 1;
    const scrollStep = 1;
    const scrollDelay = 15;

    const interval = setInterval(() => {
      if (!scrollContainer) return;
      scrollContainer.scrollLeft += scrollStep * direction;

      // reverse at ends
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth - 1
      ) {
        direction = -1;
      }
      if (scrollContainer.scrollLeft <= 0) {
        direction = 1;
      }
    }, scrollDelay);

    return () => clearInterval(interval);
  }, [boxes]);

  // Hide scrollbar styles
  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.id = "features-scrollbar-hide";
    styleEl.innerHTML = `
      /* Hide scrollbar for WebKit browsers (Chrome, Safari, Edge) */
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      /* Hide scrollbar for Firefox */
      .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
    `;
    document.head.appendChild(styleEl);
    return () => {
      const existing = document.getElementById("features-scrollbar-hide");
      if (existing) existing.remove();
    };
  }, []);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Guidance for Every Student
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From academic support to career planning, we provide everything you
            need to succeed in your educational journey.
          </p>
        </div>

        {/* Top 3 Cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {features.slice(0, 3).map((feature, index) => {
            const Icon = feature.icon;
            const bgColors = [
              "bg-[rgb(125,219,123)]",
              "bg-[rgb(255,153,153)]",
              "bg-[rgb(169,254,255)]",
            ];
            return (
              <Card
                key={index}
                className={`${bgColors[index]} text-black h-auto w-full md:w-[350px] shadow-md hover:shadow-lg transition-shadow group`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-16 h-16 bg-white/40 group-hover:bg-white/60 rounded-lg flex items-center justify-center mb-6 transition-colors">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-black/80 mb-4">{feature.description}</p>
                  <button className="mt-auto bg-[hsl(218,46%,36%)] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
                    Learn More
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Remaining Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.slice(3).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index + 3}
                className="bg-slate-50 h-56 w-full shadow-md hover:shadow-lg transition-shadow group"
              >
                <CardContent className="p-4">
                  <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Auto-scrolling boxes */}
        <div className="relative mb-12">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide rounded-lg"
            style={{
              scrollBehavior: "smooth",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {boxes.map((box) => (
              <div
                key={box.id}
                className="min-w-[200px] h-[150px] flex-shrink-0 shadow-md p-4"
                style={{
                  backgroundColor: box.color,
                  borderRadius: "8px",
                }}
              >
                {/* <h4 className="text-lg font-semibold">{box.title}</h4>
                <p className="text-sm text-gray-700">{box.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
