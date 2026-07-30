


// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { ReferralModal } from "./ReferralModal";

// export function ReferEarn() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Image Table Data (Updated from Screenshot 2026-06-29 at 8.46.33 PM.jpg)
//   const comparisonData = [
//     {
//       criterion: "Learning Architecture",
//       goodGuiders: "Fully integrated 3-Step ecosystem: Evaluate, Educate, and Elevate.",
//       goodGuidersIcon: "🧩",
//       others: "Disorganized learning without a clear strategy or personal mentorship.",
//       othersIcon: "❌",
//     },
//     {
//       criterion: "Affordability",
//       goodGuiders: "Most Affordable Platform. Premium quality education and guidance at the lowest price in the market.",
//       goodGuidersIcon: "💰",
//       others: "Highly expensive subscription plans and hidden coaching charges.",
//       othersIcon: "❌",
//     },
//     {
//       criterion: "Elite NEET/JEE Mentors",
//       goodGuiders: "Guided by champions. Mentors who have already cracked NEET & JEE will guide you 1-on-1.",
//       goodGuidersIcon: "🎓",
//       others: "Mentors with no real exam-cracking experience or generic counselors.",
//       othersIcon: "👎",
//     },
//     {
//       criterion: "Psychological Support",
//       goodGuiders: "Dedicated Psychological Mentors to help you handle exam stress, anxiety, and depression.",
//       goodGuidersIcon: "🧠",
//       others: "No mental health or emotional support; heavy focus only on marks and syllabus.",
//       othersIcon: "❌",
//     },
//     {
//       criterion: "1-on-1 Recorded Mentorship",
//       goodGuiders: "Connect via 1-on-1 Live Video Calls. Sessions are automatically saved in your profile for lifetime revision.",
//       goodGuidersIcon: "📹",
//       others: "No video mentorship, or live calls that are never recorded for future reference.",
//       othersIcon: "❌",
//     },
//     {
//       criterion: "Subjective Evaluation",
//       goodGuiders: "Upload photos of your handwritten answer sheets to get them evaluated and checked by expert teachers.",
//       goodGuidersIcon: "📸",
//       others: "Only computer-generated MCQ checking; no feedback on long theory answers.",
//       othersIcon: "👎",
//     },
//     {
//       criterion: "Personalized Test Maker",
//       goodGuiders: "Your personal tutor or mentor creates customized tests tailored specifically to your weak areas and speed.",
//       goodGuidersIcon: "🎯",
//       others: "Generic common tests for all students, completely ignoring individual student gaps.",
//       othersIcon: "❌",
//     },
//     {
//       criterion: "Tutor Options",
//       goodGuiders: "Dual availability: Flexible Live Online Classes and Verified Local Home Tutors.",
//       goodGuidersIcon: "🧑‍🏫",
//       others: "Only online video recordings or expensive localized coaching options.",
//       othersIcon: "❌",
//     },
//     {
//       criterion: "Proximity Matching",
//       goodGuiders: "Precise Distance-Based local tutor discovery sorted instantly by pincode.",
//       goodGuidersIcon: "📍",
//       others: "Hard to find nearby verified teachers without physical market searching.",
//       othersIcon: "👎",
//     },
//   ];

//   // Features list structured as horizontal bars
//   const features = [
//     {
//       icon: (
//         <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2z" />
//         </svg>
//       ),
//       label: 'Live class recordings'
//     },
//     {
//       icon: (
//         <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       label: 'Doubt resolution'
//     },
//     {
//       icon: (
//         <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//         </svg>
//       ),
//       label: 'Downloadable study notes'
//     },
//     {
//       icon: (
//         <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
//         </svg>
//       ),
//       label: 'Practice workouts'
//     },
//     {
//       icon: (
//         <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//         </svg>
//       ),
//       label: 'Solution to questions'
//     },
//     {
//       icon: (
//         <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//         </svg>
//       ),
//       label: 'Progress tracking'
//     },
//   ];

//   return (
//     <>
//       {/* SECTION 1: Program Comparison Table (Image Section) */}
//       <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="text-center mb-6 md:mb-10">
//             <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
//               HOW OUR PROGRAM COMPARES
//             </span>
//             <h2 className="text-xl sm:text-3xl md:text-4xl font-black mt-1 text-slate-900 leading-tight">
//               What sets this <span className="text-blue-600">program apart?</span>
//             </h2>
//           </div>

//           {/* DESKTOP VIEW (Visible on MD and larger screens) */}
//           <div className="hidden md:block overflow-x-auto">
//             <table className="w-full table-fixed border-separate border-spacing-x-4 border-spacing-y-2">
//               <thead>
//                 <tr>
//                   <th className="w-[28%] text-left p-4"></th>
//                   <th className="w-[38%] text-center text-xl font-black text-blue-600 bg-white border border-blue-200 rounded-t-2xl shadow-sm p-4">
//                     Good Guiders
//                   </th>
//                   <th className="w-[34%] text-center text-lg font-bold text-slate-700 p-4">
//                     Other Platforms
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {comparisonData.map((row, index) => (
//                   <tr key={index} className="align-middle">
//                     <td className="p-4 font-bold text-slate-800 text-sm md:text-base">
//                       {row.criterion}
//                     </td>
//                     <td className={`p-4 bg-white border-x ${index === 0 ? 'border-t rounded-t-2xl' : ''} ${index === comparisonData.length - 1 ? 'border-b rounded-b-2xl shadow-md' : ''} border-blue-200 text-slate-700 text-sm font-semibold`}>
//                       <div className="flex items-start gap-2.5">
//                         <span className="text-lg flex-shrink-0 mt-0.5">{row.goodGuidersIcon}</span>
//                         <span>{row.goodGuiders}</span>
//                       </div>
//                     </td>
//                     <td className="p-4 text-slate-500 text-sm">
//                       <div className="flex items-start gap-2.5 opacity-85">
//                         <span className="text-lg flex-shrink-0 mt-0.5">{row.othersIcon}</span>
//                         <span>{row.others}</span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* MOBILE VIEW (Perfectly optimized card stack layout for small mobile screens) */}
//           <div className="block md:hidden space-y-4">
//             {comparisonData.map((row, index) => (
//               <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 space-y-3">
//                 <h4 className="font-bold text-slate-900 text-sm sm:text-base border-b border-slate-100 pb-1.5">
//                   {row.criterion}
//                 </h4>
                
//                 {/* Mobile Good Guiders Row */}
//                 <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-3">
//                   <div className="flex items-center gap-1.5 text-xs font-black text-blue-600 mb-1.5">
//                     <span>{row.goodGuidersIcon}</span>
//                     <span>Good Guiders</span>
//                   </div>
//                   <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
//                     {row.goodGuiders}
//                   </p>
//                 </div>

//                 {/* Mobile Other Platforms Row */}
//                 <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
//                   <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1.5">
//                     <span>{row.othersIcon}</span>
//                     <span>Other Platforms</span>
//                   </div>
//                   <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
//                     {row.others}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>


//       {/* SECTION 2: Good Guiders Features & Devices */}
//       <section className="py-12 md:py-20 bg-gradient-to-r from-secondary to-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* Header Titles */}
//           <div className="text-black mb-8 md:mb-12 text-center lg:text-left">
//             <h3 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight">
//               <span className="text-slate-900">Good Guiders </span>
//               <span className="text-blue-600">app features</span>
//             </h3>
//           </div>

//           {/* Same Row Content Split Layout */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-32 items-stretch">
            
//             {/* Left Column: Features Bars + Download Button */}
//             <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 order-1">
//               <div className="space-y-2.5 sm:space-y-3">
//                 {features.map((feature, index) => (
//                   <div 
//                     key={index} 
//                     className="bg-white px-4 py-3.5 md:px-5 md:py-4 rounded-xl md:rounded-2xl border border-slate-100 flex items-center gap-3 md:gap-4 shadow-sm transition-all hover:shadow-md"
//                   >
//                     <div className="bg-amber-50 p-2 rounded-lg md:p-2.5 md:rounded-xl flex-shrink-0">
//                       {feature.icon}
//                     </div>
//                     <span className="text-xs sm:text-sm md:text-base font-bold text-slate-800 capitalize">
//                       {feature.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               {/* Download App Button */}
//               <div className="flex justify-center w-full pt-4 lg:pt-0">
//                 <Button
//                   variant="default"
//                   className="text-white px-8 py-5 md:py-6 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto min-w-[260px] max-w-[320px]"
//                   style={{ backgroundColor: '#05306c' }}
//                 >
//                   Download App 
//                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                   </svg>
//                 </Button>
//               </div>
//             </div>

//             {/* Right Column: Mobile Devices + Refer Now Button */}
//             <div className="lg:col-span-6 flex flex-col justify-between h-full items-center gap-6 order-2 mt-8 lg:mt-0">
              
//               {/* Phones Flex Container (Grid layout for flawless alignment on mobile) */}
//               <div className="grid grid-cols-1 sm:flex sm:flex-row items-center justify-center gap-6 w-full my-auto justify-items-center">
                
//                 {/* Device 1: Content UI View */}
//                 <div className="w-[230px] sm:w-[250px] h-[460px] sm:h-[495px] bg-white rounded-[32px] shadow-2xl border-[6px] border-slate-900 relative overflow-hidden flex flex-col text-slate-800 flex-shrink-0">
//                   <div className="h-5 bg-slate-50 border-b border-slate-100 flex items-center justify-between px-5 text-[9px] text-slate-400 font-medium">
//                     <span>10:44</span>
//                     <span>📶 🔋</span>
//                   </div>

//                   <div className="p-3 border-b border-slate-100 flex items-center gap-2">
//                     <span className="text-base text-slate-600">☲</span>
//                     <span className="font-extrabold text-xs text-blue-600">NEET - Grade 12</span>
//                   </div>

//                   <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-slate-50">
//                     <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100 text-center relative">
//                       <div className="absolute top-1.5 right-1.5 bg-amber-100 text-amber-700 text-[9px] font-bold px-1 rounded">★ 305</div>
//                       <div className="w-14 h-14 sm:w-16 sm:h-16 bg-sky-100 rounded-full mx-auto mb-2 flex items-end justify-center overflow-hidden border border-slate-100">
//                         <div className="w-10 h-12 bg-blue-500 rounded-t-full"></div>
//                       </div>
//                       <span className="text-[9px] bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full font-bold">Chemistry</span>
//                       <h5 className="font-bold text-xs mt-1 text-slate-800 leading-tight">Complete Organic Chemistry</h5>
//                       <p className="text-[10px] text-slate-400">Sheik Sarfaraz</p>
//                       <button className="w-full mt-2 bg-blue-500 text-white text-[10px] font-bold py-1.5 rounded-md">
//                         WATCH NOW
//                       </button>
//                     </div>

//                     <div className="bg-purple-50 rounded-xl p-3 border border-purple-100">
//                       <h5 className="font-bold text-xs text-purple-900">Create your own tests</h5>
//                       <p className="text-[10px] text-purple-600 mt-0.5 leading-tight">Explore interactive conceptual paths</p>
//                       <button className="mt-2 bg-purple-700 text-white text-[9px] font-bold px-2 py-1 rounded-md">
//                         Create Now
//                       </button>
//                     </div>
//                   </div>

//                   <div className="border-t border-slate-100 bg-white grid grid-cols-5 py-1.5 text-center text-[8px] font-medium text-slate-400">
//                     <div>🏠<br/>Home</div>
//                     <div>📖<br/>Selflearn</div>
//                     <div>📝<br/>Tests</div>
//                     <div>📺<br/>Live</div>
//                     <div>❓<br/>Doubts</div>
//                   </div>
//                 </div>

//                 {/* Device 2: Conversational AI Engine */}
//                 <div className="w-[230px] sm:w-[250px] h-[460px] sm:h-[495px] bg-[#0c0827] rounded-[32px] shadow-2xl border-[6px] border-slate-900 relative overflow-hidden flex flex-col justify-between p-5 text-white text-center flex-shrink-0">
//                   <div className="text-left font-black tracking-tight text-[10px] opacity-70">
//                     infinity<span className="text-blue-400">learn</span>
//                   </div>

//                   <div className="my-auto space-y-4">
//                     <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto flex items-center justify-center">
//                       <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse"></div>
//                       <div className="absolute inset-2 border border-blue-500/30 rounded-full"></div>
//                       <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full overflow-hidden border border-white/60 flex items-end justify-center">
//                         <div className="w-10 h-14 bg-slate-900 rounded-t-full"></div>
//                       </div>
//                     </div>

//                     <div className="space-y-1">
//                       <h5 className="text-xs sm:text-sm font-bold leading-tight">
//                         Meet AINA — <br />
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-black">Your AI Mentor</span>
//                       </h5>
//                       <p className="text-[9px] text-slate-300 leading-relaxed font-light px-1">
//                         Ask me anything — doubts, prep tips or even help deciding <span className="text-blue-300 font-normal">preparing for NEET/JEE.</span>
//                       </p>
//                     </div>
//                   </div>

//                   <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-[11px] py-2.5 rounded-xl">
//                     Let's start →
//                   </button>
//                 </div>

//               </div>

//               {/* Refer Now Button */}
//               <div className="flex justify-center w-full pt-4 lg:pt-0">
//                 <Button
//                   onClick={() => setIsModalOpen(true)}
//                   variant="outline"
//                   className="text-white px-8 py-5 md:py-6 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-lg w-full sm:w-auto min-w-[260px] max-w-[320px]"
//                   style={{ backgroundColor: 'hsl(0, 62.8%, 30.6%)' }}
//                 >
//                   Refer Earn
//                 </Button>
//               </div>

//             </div>

//           </div>

//         </div>
//       </section>

//       <ReferralModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </>
//   );
// }







import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ReferralModal } from "./ReferralModal";

export function ReferEarn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Image Table Data (Updated from Screenshot 2026-06-29 at 8.46.33 PM.jpg)
  const comparisonData = [
    {
      criterion: "Learning Architecture",
      goodGuiders: "Fully integrated 3-Step ecosystem: Evaluate, Educate, and Elevate.",
      goodGuidersIcon: "🧩",
      others: "Disorganized learning without a clear strategy or personal mentorship.",
      othersIcon: "❌",
    },
    {
      criterion: "Affordability",
      goodGuiders: "Most Affordable Platform. Premium quality education and guidance at the lowest price in the market.",
      goodGuidersIcon: "💰",
      others: "Highly expensive subscription plans and hidden coaching charges.",
      othersIcon: "❌",
    },
    {
      criterion: "Elite NEET/JEE Mentors",
      goodGuiders: "Guided by champions. Mentors who have already cracked NEET & JEE will guide you 1-on-1.",
      goodGuidersIcon: "🎓",
      others: "Mentors with no real exam-cracking experience or generic counselors.",
      othersIcon: "👎",
    },
    {
      criterion: "Psychological Support",
      goodGuiders: "Dedicated Psychological Mentors to help you handle exam stress, anxiety, and depression.",
      goodGuidersIcon: "🧠",
      others: "No mental health or emotional support; heavy focus only on marks and syllabus.",
      othersIcon: "❌",
    },
    {
      criterion: "1-on-1 Recorded Mentorship",
      goodGuiders: "Connect via 1-on-1 Live Video Calls. Sessions are automatically saved in your profile for lifetime revision.",
      goodGuidersIcon: "📹",
      others: "No video mentorship, or live calls that are never recorded for future reference.",
      othersIcon: "❌",
    },
    {
      criterion: "Subjective Evaluation",
      goodGuiders: "Upload photos of your handwritten answer sheets to get them evaluated and checked by expert teachers.",
      goodGuidersIcon: "📸",
      others: "Only computer-generated MCQ checking; no feedback on long theory answers.",
      othersIcon: "👎",
    },
    {
      criterion: "Personalized Test Maker",
      goodGuiders: "Your personal tutor or mentor creates customized tests tailored specifically to your weak areas and speed.",
      goodGuidersIcon: "🎯",
      others: "Generic common tests for all students, completely ignoring individual student gaps.",
      othersIcon: "❌",
    },
    {
      criterion: "Tutor Options",
      goodGuiders: "Dual availability: Flexible Live Online Classes and Verified Local Home Tutors.",
      goodGuidersIcon: "🧑‍🏫",
      others: "Only online video recordings or expensive localized coaching options.",
      othersIcon: "❌",
    },
    {
      criterion: "Proximity Matching",
      goodGuiders: "Precise Distance-Based local tutor discovery sorted instantly by pincode.",
      goodGuidersIcon: "📍",
      others: "Hard to find nearby verified teachers without physical market searching.",
      othersIcon: "👎",
    },
  ];

  // Features list structured as horizontal bars
  const features = [
    {
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2z" />
        </svg>
      ),
      label: 'Live class recordings'
    },
    {
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Doubt resolution'
    },
    {
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      label: 'Downloadable study notes'
    },
    {
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      label: 'Practice workouts'
    },
    {
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      label: 'Solution to questions'
    },
    {
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      label: 'Progress tracking'
    },
  ];

  return (
    <>
      {/* SECTION 1: Program Comparison Table (Image Section) */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-6 md:mb-10">
            <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
              HOW OUR PROGRAM COMPARES
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-black mt-1 text-slate-900 leading-tight">
              What sets this <span className="text-blue-600">program apart?</span>
            </h2>
          </div>

          {/* DESKTOP VIEW (Visible on MD and larger screens) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full table-fixed border-separate border-spacing-x-4 border-spacing-y-2">
              <thead>
                <tr>
                  <th className="w-[28%] text-left p-4"></th>
                  <th className="w-[38%] text-center text-xl font-black text-blue-600 bg-white border border-blue-200 rounded-t-2xl shadow-sm p-4">
                    Good Guiders
                  </th>
                  <th className="w-[34%] text-center text-lg font-bold text-slate-700 p-4">
                    Other Platforms
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="align-middle">
                    <td className="p-4 font-bold text-slate-800 text-sm md:text-base">
                      {row.criterion}
                    </td>
                    <td className={`p-4 bg-white border-x ${index === 0 ? 'border-t rounded-t-2xl' : ''} ${index === comparisonData.length - 1 ? 'border-b rounded-b-2xl shadow-md' : ''} border-blue-200 text-slate-700 text-sm font-semibold`}>
                      <div className="flex items-start gap-2.5">
                        <span className="text-lg flex-shrink-0 mt-0.5">{row.goodGuidersIcon}</span>
                        <span>{row.goodGuiders}</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-500 text-sm">
                      <div className="flex items-start gap-2.5 opacity-85">
                        <span className="text-lg flex-shrink-0 mt-0.5">{row.othersIcon}</span>
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE VIEW (Perfectly optimized card stack layout for small mobile screens) */}
          <div className="block md:hidden space-y-4">
            {comparisonData.map((row, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base border-b border-slate-100 pb-1.5">
                  {row.criterion}
                </h4>
                
                {/* Mobile Good Guiders Row */}
                <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-3">
                  <div className="flex items-center gap-1.5 text-xs font-black text-blue-600 mb-1.5">
                    <span>{row.goodGuidersIcon}</span>
                    <span>Good Guiders</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {row.goodGuiders}
                  </p>
                </div>

                {/* Mobile Other Platforms Row */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1.5">
                    <span>{row.othersIcon}</span>
                    <span>Other Platforms</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {row.others}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 2: Good Guiders Features & Devices */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-secondary to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Titles */}
          <div className="text-black mb-8 md:mb-12 text-center lg:text-left">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight">
              <span className="text-slate-900">Good Guiders </span>
              <span className="text-blue-600">app features</span>
            </h3>
          </div>

          {/* Same Row Content Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-32 items-stretch">
            
            {/* Left Column: Features Bars + Download Button */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 order-1">
              <div className="space-y-2.5 sm:space-y-3">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-white px-4 py-3.5 md:px-5 md:py-4 rounded-xl md:rounded-2xl border border-slate-100 flex items-center gap-3 md:gap-4 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="bg-amber-50 p-2 rounded-lg md:p-2.5 md:rounded-xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-xs sm:text-sm md:text-base font-bold text-slate-800 capitalize">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Download App Button */}
              <div className="flex justify-center w-full pt-4 lg:pt-0">
                <Button
                  variant="default"
                  className="text-white px-8 py-5 md:py-6 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto min-w-[260px] max-w-[320px]"
                  style={{ backgroundColor: '#05306c' }}
                >
                  Download App 
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Right Column: Mobile Devices + Refer Now Button */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full items-center gap-6 order-2 mt-8 lg:mt-0">
              
              {/* Phones Flex Container (Grid layout for flawless alignment on mobile) */}
              <div className="grid grid-cols-1 sm:flex sm:flex-row items-center justify-center gap-6 w-full my-auto justify-items-center">
                
                {/* Device 1: Content UI View */}
                <div className="w-[230px] sm:w-[250px] h-[460px] sm:h-[495px] bg-white rounded-[32px] shadow-2xl border-[6px] border-slate-900 relative overflow-hidden flex flex-col text-slate-800 flex-shrink-0">
                  <div className="h-5 bg-slate-50 border-b border-slate-100 flex items-center justify-between px-5 text-[9px] text-slate-400 font-medium">
                    <span>10:44</span>
                    <span>📶 🔋</span>
                  </div>

                  <div className="p-3 border-b border-slate-100 flex items-center gap-2">
                    <span className="text-base text-slate-600">☲</span>
                    <span className="font-extrabold text-xs text-blue-600">NEET - Grade 12</span>
                  </div>

                  <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-slate-50">
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100 text-center relative">
                      <div className="absolute top-1.5 right-1.5 bg-amber-100 text-amber-700 text-[9px] font-bold px-1 rounded">★ 305</div>
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-sky-100 rounded-full mx-auto mb-2 flex items-end justify-center overflow-hidden border border-slate-100">
                        <div className="w-10 h-12 bg-blue-500 rounded-t-full"></div>
                      </div>
                      <span className="text-[9px] bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full font-bold">Chemistry</span>
                      <h5 className="font-bold text-xs mt-1 text-slate-800 leading-tight">Complete Organic Chemistry</h5>
                      <p className="text-[10px] text-slate-400">Sheik Sarfaraz</p>
                      <button className="w-full mt-2 bg-blue-500 text-white text-[10px] font-bold py-1.5 rounded-md">
                        WATCH NOW
                      </button>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-3 border border-purple-100">
                      <h5 className="font-bold text-xs text-purple-900">Create your own tests</h5>
                      <p className="text-[10px] text-purple-600 mt-0.5 leading-tight">Explore interactive conceptual paths</p>
                      <button className="mt-2 bg-purple-700 text-white text-[9px] font-bold px-2 py-1 rounded-md">
                        Create Now
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 bg-white grid grid-cols-5 py-1.5 text-center text-[8px] font-medium text-slate-400">
                    <div>🏠<br/>Home</div>
                    <div>📖<br/>Selflearn</div>
                    <div>📝<br/>Tests</div>
                    <div>📺<br/>Live</div>
                    <div>❓<br/>Doubts</div>
                  </div>
                </div>

                {/* Device 2: Conversational AI Engine */}
                <div className="w-[230px] sm:w-[250px] h-[460px] sm:h-[495px] bg-[#0c0827] rounded-[32px] shadow-2xl border-[6px] border-slate-900 relative overflow-hidden flex flex-col justify-between p-5 text-white text-center flex-shrink-0">
                  <div className="text-left font-black tracking-tight text-[10px] opacity-70">
                    infinity<span className="text-blue-400">learn</span>
                  </div>

                  <div className="my-auto space-y-4">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto flex items-center justify-center">
                      <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse"></div>
                      <div className="absolute inset-2 border border-blue-500/30 rounded-full"></div>
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full overflow-hidden border border-white/60 flex items-end justify-center">
                        <div className="w-10 h-14 bg-slate-900 rounded-t-full"></div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h5 className="text-xs sm:text-sm font-bold leading-tight">
                        Meet AINA — <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-black">Your AI Mentor</span>
                      </h5>
                      <p className="text-[9px] text-slate-300 leading-relaxed font-light px-1">
                        Ask me anything — doubts, prep tips or even help deciding <span className="text-blue-300 font-normal">preparing for NEET/JEE.</span>
                      </p>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-[11px] py-2.5 rounded-xl">
                    Let's start →
                  </button>
                </div>

              </div>

              {/* Refer Now Button */}
              <div className="flex justify-center w-full pt-4 lg:pt-0">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  variant="outline"
                  className="text-white px-8 py-5 md:py-6 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-lg w-full sm:w-auto min-w-[260px] max-w-[320px]"
                  style={{ backgroundColor: 'hsl(0, 62.8%, 30.6%)' }}
                >
                  Refer Earn
                </Button>
              </div>

            </div>

          </div>

        </div>
      </section>

      <ReferralModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}