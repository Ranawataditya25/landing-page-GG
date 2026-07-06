// // // // import { Newspaper, Search } from "lucide-react";

// // // // const newsData = [
// // // //   {
// // // //     date: "30/06/2026",
// // // //     title:
// // // //       "Appointment Letter Regarding Direct Recruitment of Fourth Class Employee -2024 (RPSC)",
// // // //   },
// // // //   {
// // // //     date: "30/06/2026",
// // // //     title:
// // // //       "Interview Letter for the post of Assistant Professor-Cardiology (S.S.), Medical Education Deptt. (Adv. No. 23/2024-25 Date 11-12-2024)",
// // // //   },
// // // //   {
// // // //     date: "30/06/2026",
// // // //     title:
// // // //       "Interview Letter for the post of Assistant Professor-Anatomy (Medical Education)",
// // // //   },
// // // //   {
// // // //     date: "30/06/2026",
// // // //     title:
// // // //       "Final Selection List for Various Government Posts Released.",
// // // //   },
// // // // ];

// // // // export default function News() {
// // // //   return (
// // // //     <section className="py-16 bg-gray-50">
// // // //       <div className="max-w-6xl mx-auto">

// // // //         {/* Heading */}
// // // //         <div className="bg-yellow-500 rounded-t-xl py-5 text-center">
// // // //           <h2 className="text-5xl font-bold flex justify-center items-center gap-4 text-gray-900">
// // // //             <Newspaper size={45} />
// // // //             News and Events
// // // //           </h2>
// // // //         </div>

// // // //         {/* Box */}
// // // //         <div className="border-4 border-yellow-500 rounded-b-xl bg-white p-8">

// // // //           {/* Scroll Area */}
// // // //           <div className="h-[430px] overflow-y-auto space-y-5 pr-2">

// // // //             {newsData.map((item, index) => (
// // // //               <div
// // // //                 key={index}
// // // //                 className="border rounded-xl p-5 hover:bg-gray-50 transition shadow-sm"
// // // //               >
// // // //                 <div className="flex items-start gap-4">

// // // //                   {/* NEW */}
// // // //                   <img
// // // //                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/New_icon_red.svg/120px-New_icon_red.svg.png"
// // // //                     alt="new"
// // // //                     className="w-14 h-14 object-contain"
// // // //                   />

// // // //                   {/* Date */}
// // // //                   <div className="border-4 border-black rounded-xl px-5 py-2 font-bold text-3xl whitespace-nowrap">
// // // //                     {item.date}
// // // //                   </div>

// // // //                   {/* Title */}
// // // //                   <h3 className="text-3xl font-medium text-gray-800 leading-relaxed">
// // // //                     {item.title}
// // // //                   </h3>

// // // //                 </div>
// // // //               </div>
// // // //             ))}

// // // //           </div>

// // // //           {/* Bottom */}
// // // //           <div className="flex justify-end mt-8">
// // // //             <button className="flex items-center gap-2 text-4xl font-semibold hover:text-blue-700">
// // // //               <Search size={38} />
// // // //               View all
// // // //             </button>
// // // //           </div>

// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }



// // // import { Newspaper, Search } from "lucide-react";

// // // const news = [
// // //   {
// // //     date: "30/06/2026",
// // //     title:
// // //       "Appointment Letter Regarding Direct Recruitment of Fourth Class Employee -2024 (RPSC)",
// // //   },
// // //   {
// // //     date: "30/06/2026",
// // //     title:
// // //       "Interview Letter for Assistant Professor Cardiology Medical Education Dept.",
// // //   },
// // //   {
// // //     date: "30/06/2026",
// // //     title:
// // //       "Final Selection List Released for Various Government Posts.",
// // //   },
// // //   {
// // //     date: "30/06/2026",
// // //     title:
// // //       "New Recruitment Notification Released for 2026.",
// // //   },
// // // ];

// // // export default function News() {
// // //   return (
// // //     <>
// // //       <style>{`
// // //         .marquee{
// // //           display:flex;
// // //           width:max-content;
// // //           animation:marquee 18s linear infinite;
// // //         }

// // //         @keyframes marquee{
// // //           from{
// // //             transform:translateX(0);
// // //           }
// // //           to{
// // //             transform:translateX(-50%);
// // //           }
// // //         }

// // //         .marquee:hover{
// // //           animation-play-state:paused;
// // //         }
// // //       `}</style>

// // //       <section className="py-10 bg-gray-100">

// // //         <div className="max-w-6xl mx-auto bg-white rounded-xl border-2 border-yellow-500 overflow-hidden shadow">

// // //           {/* Heading */}

// // //           <div className="bg-yellow-500 py-3">
// // //             <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
// // //               <Newspaper size={30}/>
// // //               News & Events
// // //             </h2>
// // //           </div>

// // //           {/* News */}

// // //           <div className="p-4 space-y-3">

// // //             {news.map((item,index)=>(
// // //               <div
// // //                 key={index}
// // //                 className="flex items-center border rounded-lg px-3 py-2 hover:bg-gray-50"
// // //               >

// // //                 <img
// // //                   src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png"
// // //                   className="w-8 h-8 mr-3"
// // //                 />

// // //                 <div className="border-2 border-black rounded-md px-3 py-1 font-bold text-sm mr-4">
// // //                   {item.date}
// // //                 </div>

// // //                 {/* Horizontal Scroll */}

// // //                 <div className="overflow-hidden flex-1">

// // //                   <div className="marquee">

// // //                     {[...Array(2)].map((_,i)=>(
// // //                       <span
// // //                         key={i}
// // //                         className="text-gray-800 font-medium text-base whitespace-nowrap mr-20"
// // //                       >
// // //                         {item.title}
// // //                       </span>
// // //                     ))}

// // //                   </div>

// // //                 </div>

// // //               </div>
// // //             ))}

// // //           </div>

// // //           {/* Footer */}

// // //           <div className="flex justify-end items-center p-4 border-t">

// // //             <button className="flex items-center gap-2 text-blue-700 hover:underline font-semibold">
// // //               <Search size={18}/>
// // //               View All
// // //             </button>

// // //           </div>

// // //         </div>

// // //       </section>
// // //     </>
// // //   );
// // // }



// // import { Newspaper, Search } from "lucide-react";

// // const news = [
// //   {
// //     date: "30/06/2026",
// //     title:
// //       "Appointment Letter Regarding Direct Recruitment of Fourth Class Employee -2024 (RPSC)",
// //   },
// //   {
// //     date: "30/06/2026",
// //     title:
// //       "Interview Letter for Assistant Professor Cardiology Medical Education Department.",
// //   },
// //   {
// //     date: "30/06/2026",
// //     title:
// //       "Final Selection List Released for Various Government Posts.",
// //   },
// //   {
// //     date: "30/06/2026",
// //     title:
// //       "New Recruitment Notification Released for 2026.",
// //   },
// //   {
// //     date: "30/06/2026",
// //     title:
// //       "Rajasthan Government Latest Vacancy Notification.",
// //   },
// // ];

// // export default function News() {
// //   return (
// //     <>
// //       <style>{`
// //         .news-container{
// //           height:280px;
// //           overflow:hidden;
// //           position:relative;
// //         }

// //         .news-scroll{
// //           animation:scrollUp 18s linear infinite;
// //         }

// //         .news-scroll:hover{
// //           animation-play-state:paused;
// //         }

// //         @keyframes scrollUp{
// //           0%{
// //             transform:translateY(100%);
// //           }
// //           100%{
// //             transform:translateY(-100%);
// //           }
// //         }
// //       `}</style>

// //       <section className="py-10 bg-gray-100">

// //         <div className="max-w-5xl mx-auto bg-white rounded-xl border-2 border-yellow-500 shadow-lg overflow-hidden">

// //           {/* Header */}

// //           <div className="bg-yellow-500 py-3">
// //             <h2 className="flex justify-center items-center gap-2 text-3xl font-bold">
// //               <Newspaper size={30} />
// //               News & Events
// //             </h2>
// //           </div>

// //           {/* News */}

// //           <div className="news-container p-4">

// //             <div className="news-scroll space-y-3">

// //               {[...news, ...news].map((item, index) => (

// //                 <div
// //                   key={index}
// //                   className="flex items-center gap-3 border rounded-lg p-3 bg-white hover:bg-gray-50"
// //                 >

// //                   <img
// //                     src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png"
// //                     alt="new"
// //                     className="w-8 h-8"
// //                   />

// //                   <div className="border-2 border-black rounded-md px-3 py-1 font-bold text-sm whitespace-nowrap">
// //                     {item.date}
// //                   </div>

// //                   <p className="text-gray-800 text-sm">
// //                     {item.title}
// //                   </p>

// //                 </div>

// //               ))}

// //             </div>

// //           </div>

// //           {/* Footer */}

// //           <div className="border-t p-4 flex justify-end">

// //             <button className="flex items-center gap-2 text-blue-700 hover:underline font-semibold">
// //               <Search size={18} />
// //               View All
// //             </button>

// //           </div>

// //         </div>

// //       </section>
// //     </>
// //   );
// // }



// // // import { Newspaper, Search } from "lucide-react";

// // // const newsData = [
// // //   {
// // //     date: "30/06/2026",
// // //     title:
// // //       "Appointment Letter Regarding Direct Recruitment of Fourth Class Employee -2024 (RPSC)",
// // //   },
// // //   {
// // //     date: "30/06/2026",
// // //     title:
// // //       "Interview Letter for the post of Assistant Professor-Cardiology (S.S.), Medical Education Deptt. (Adv. No. 23/2024-25 Date 11-12-2024)",
// // //   },
// // //   {
// // //     date: "30/06/2026",
// // //     title:
// // //       "Interview Letter for the post of Assistant Professor-Anatomy (Medical Education)",
// // //   },
// // //   {
// // //     date: "30/06/2026",
// // //     title:
// // //       "Final Selection List for Various Government Posts Released.",
// // //   },
// // // ];

// // // export default function News() {
// // //   return (
// // //     <section className="py-16 bg-gray-50">
// // //       <div className="max-w-6xl mx-auto">

// // //         {/* Heading */}
// // //         <div className="bg-yellow-500 rounded-t-xl py-5 text-center">
// // //           <h2 className="text-5xl font-bold flex justify-center items-center gap-4 text-gray-900">
// // //             <Newspaper size={45} />
// // //             News and Events
// // //           </h2>
// // //         </div>

// // //         {/* Box */}
// // //         <div className="border-4 border-yellow-500 rounded-b-xl bg-white p-8">

// // //           {/* Scroll Area */}
// // //           <div className="h-[430px] overflow-y-auto space-y-5 pr-2">

// // //             {newsData.map((item, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="border rounded-xl p-5 hover:bg-gray-50 transition shadow-sm"
// // //               >
// // //                 <div className="flex items-start gap-4">

// // //                   {/* NEW */}
// // //                   <img
// // //                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/New_icon_red.svg/120px-New_icon_red.svg.png"
// // //                     alt="new"
// // //                     className="w-14 h-14 object-contain"
// // //                   />

// // //                   {/* Date */}
// // //                   <div className="border-4 border-black rounded-xl px-5 py-2 font-bold text-3xl whitespace-nowrap">
// // //                     {item.date}
// // //                   </div>

// // //                   {/* Title */}
// // //                   <h3 className="text-3xl font-medium text-gray-800 leading-relaxed">
// // //                     {item.title}
// // //                   </h3>

// // //                 </div>
// // //               </div>
// // //             ))}

// // //           </div>

// // //           {/* Bottom */}
// // //           <div className="flex justify-end mt-8">
// // //             <button className="flex items-center gap-2 text-4xl font-semibold hover:text-blue-700">
// // //               <Search size={38} />
// // //               View all
// // //             </button>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }



// // import { Newspaper, Search } from "lucide-react";

// // const news = [
// //   {
// //     date: "30/06/2026",
// //     title:
// //       "Appointment Letter Regarding Direct Recruitment of Fourth Class Employee -2024 (RPSC)",
// //   },
// //   {
// //     date: "30/06/2026",
// //     title:
// //       "Interview Letter for Assistant Professor Cardiology Medical Education Dept.",
// //   },
// //   {
// //     date: "30/06/2026",
// //     title:
// //       "Final Selection List Released for Various Government Posts.",
// //   },
// //   {
// //     date: "30/06/2026",
// //     title:
// //       "New Recruitment Notification Released for 2026.",
// //   },
// // ];

// // export default function News() {
// //   return (
// //     <>
// //       <style>{`
// //         .marquee{
// //           display:flex;
// //           width:max-content;
// //           animation:marquee 18s linear infinite;
// //         }

// //         @keyframes marquee{
// //           from{
// //             transform:translateX(0);
// //           }
// //           to{
// //             transform:translateX(-50%);
// //           }
// //         }

// //         .marquee:hover{
// //           animation-play-state:paused;
// //         }
// //       `}</style>

// //       <section className="py-10 bg-gray-100">

// //         <div className="max-w-6xl mx-auto bg-white rounded-xl border-2 border-yellow-500 overflow-hidden shadow">

// //           {/* Heading */}

// //           <div className="bg-yellow-500 py-3">
// //             <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
// //               <Newspaper size={30}/>
// //               News & Events
// //             </h2>
// //           </div>

// //           {/* News */}

// //           <div className="p-4 space-y-3">

// //             {news.map((item,index)=>(
// //               <div
// //                 key={index}
// //                 className="flex items-center border rounded-lg px-3 py-2 hover:bg-gray-50"
// //               >

// //                 <img
// //                   src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png"
// //                   className="w-8 h-8 mr-3"
// //                 />

// //                 <div className="border-2 border-black rounded-md px-3 py-1 font-bold text-sm mr-4">
// //                   {item.date}
// //                 </div>

// //                 {/* Horizontal Scroll */}

// //                 <div className="overflow-hidden flex-1">

// //                   <div className="marquee">

// //                     {[...Array(2)].map((_,i)=>(
// //                       <span
// //                         key={i}
// //                         className="text-gray-800 font-medium text-base whitespace-nowrap mr-20"
// //                       >
// //                         {item.title}
// //                       </span>
// //                     ))}

// //                   </div>

// //                 </div>

// //               </div>
// //             ))}

// //           </div>

// //           {/* Footer */}

// //           <div className="flex justify-end items-center p-4 border-t">

// //             <button className="flex items-center gap-2 text-blue-700 hover:underline font-semibold">
// //               <Search size={18}/>
// //               View All
// //             </button>

// //           </div>

// //         </div>

// //       </section>
// //     </>
// //   );
// // }



// // import { useState } from "react";
// // import { Newspaper, Search, X } from "lucide-react";

// // const news = [
// //   {
// //     date: "30/06/2026",
// //     title:
// //       "Appointment Letter Regarding Direct Recruitment of Fourth Class Employee -2024 (RPSC)",
// //   },
// //   {
// //     date: "30/06/2026",
// //     title:
// //       "Interview Letter for Assistant Professor Cardiology Medical Education Department.",
// //   },
// //   {
// //     date: "30/06/2026",
// //     title:
// //       "Final Selection List Released for Various Government Posts.",
// //   },
// //   {
// //     date: "30/06/2026",
// //     title:
// //       "New Recruitment Notification Released for 2026.",
// //   },
// //   {
// //     date: "30/06/2026",
// //     title:
// //       "Rajasthan Government Latest Vacancy Notification.",
// //   },
// // ];

// // export default function News() {
// //     const [showModal, setShowModal] = useState(false);
// //   return (
// //     <>
// //       <style>{`
// //         .news-container{
// //           height:280px;
// //           overflow:hidden;
// //           position:relative;
// //         }

// //         .news-scroll{
// //           animation:scrollUp 18s linear infinite;
// //         }

// //         .news-scroll:hover{
// //           animation-play-state:paused;
// //         }

// //         @keyframes scrollUp{
// //           0%{
// //             transform:translateY(100%);
// //           }
// //           100%{
// //             transform:translateY(-100%);
// //           }
// //         }
// //       `}</style>

// //       <section className="py-10 bg-gray-100">

// //         <div className="max-w-5xl mx-auto bg-white rounded-xl border-2 border-yellow-500 shadow-lg overflow-hidden">

// //           {/* Header */}

// //           <div className="bg-yellow-500 py-3">
// //             <h2 className="flex justify-center items-center gap-2 text-3xl font-bold">
// //               <Newspaper size={30} />
// //               News & Events
// //             </h2>
// //           </div>

// //           {/* News */}

// //           <div className="news-container p-4">

// //             <div className="news-scroll space-y-3">

// //               {[...news, ...news].map((item, index) => (

// //                 <div
// //                   key={index}
// //                   className="flex items-center gap-3 border rounded-lg p-3 bg-white hover:bg-gray-50"
// //                 >

// //                   <img
// //                     src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png"
// //                     alt="new"
// //                     className="w-8 h-8"
// //                   />

// //                   <div className="border-2 border-black rounded-md px-3 py-1 font-bold text-sm whitespace-nowrap">
// //                     {item.date}
// //                   </div>

// //                   <p className="text-gray-800 text-sm">
// //                     {item.title}
// //                   </p>

// //                 </div>

// //               ))}

// //             </div>

// //           </div>

// //           {/* Footer */}

// //           {showModal && (
// //   <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">

// //     <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl">

// //       {/* Header */}

// //       <div className="bg-yellow-500 px-5 py-4 flex justify-between items-center rounded-t-xl">

// //         <h2 className="text-2xl font-bold flex items-center gap-2">
// //           <Newspaper size={26} />
// //           All News & Events
// //         </h2>

// //         <button
// //           onClick={() => setShowModal(false)}
// //           className="hover:bg-white/30 p-2 rounded-full"
// //         >
// //           <X size={28} />
// //         </button>

// //       </div>

// //       {/* Body */}

// //       <div className="max-h-[70vh] overflow-y-auto p-5 space-y-4">

// //         {news.map((item, index) => (

// //           <div
// //             key={index}
// //             className="flex gap-3 border rounded-lg p-4 hover:bg-gray-50"
// //           >

// //             <img
// //               src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png"
// //               className="w-8 h-8 mt-1"
// //             />

// //             <div>

// //               <span className="border-2 border-black rounded-md px-3 py-1 text-sm font-bold inline-block mb-2">
// //                 {item.date}
// //               </span>

// //               <p className="text-gray-800 leading-7">
// //                 {item.title}
// //               </p>

// //             </div>

// //           </div>

// //         ))}

// //       </div>

// //       {/* Footer */}

// //       <div className="border-t p-4 flex justify-end">

// //         <button
// //           onClick={() => setShowModal(false)}
// //           className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
// //         >
// //           Close
// //         </button>

// //       </div>

// //     </div>

// //   </div>
// // )}

// //         <div className="border-t p-4 flex justify-end">

// //   <button
// //     onClick={() => setShowModal(true)}
// //     className="flex items-center gap-2 text-blue-700 hover:underline font-semibold"
// //   >
// //     <Search size={18} />
// //     View All
// //   </button>

// // </div>

// //         </div>

// //       </section>
// //     </>
// //   );
// // }


// import { useState, useEffect } from "react";
// import { Newspaper, Search, X } from "lucide-react";

// // 1. TypeScript के लिए Type Interface डिफाइन किया (ताकि लाल लाइन एरर न आए)
// interface NewsItem {
//   date?: string;
//   title?: string;
// }

// export default function News() {
//   // 2. useState में <NewsItem[]> टाइप असाइन किया
//   const [news, setNews] = useState<NewsItem[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [showModal, setShowModal] = useState<boolean>(false);

//   // API से डेटा Fetch करने के लिए useEffect हुक
//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch("https://goodguiders-maxbrain.onrender.com/api/news");
//         if (!response.ok) {
//           throw new Error("डेटा लोड करने में समस्या आ रही है!");
//         }
//         const data = await response.json();
//         setNews(Array.isArray(data) ? data : []);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <>
//       <style>{`
//         .news-container {
//           height: 280px;
//           overflow: hidden;
//           position: relative;
//         }

//         .news-scroll {
//           animation: scrollUp 18s linear infinite;
//         }

//         .news-scroll:hover {
//           animation-play-state: paused;
//         }

//         @keyframes scrollUp {
//           0% {
//             transform: translateY(100%);
//           }
//           100% {
//             transform: translateY(-100%);
//           }
//         }
//       `}</style>

//       <section className="py-10 bg-gray-100">
//         <div className="max-w-5xl mx-auto bg-white rounded-xl border-2 border-yellow-500 shadow-lg overflow-hidden">
          
//           {/* Header Section */}
//           <div className="bg-yellow-500 py-3">
//             <h2 className="flex justify-center items-center gap-2 text-3xl font-bold text-black">
//               <Newspaper size={30} />
//               News & Events
//             </h2>
//           </div>

//           {/* Main News Container */}
//           <div className="news-container p-4">
//             {loading && (
//               <div className="flex justify-center items-center h-full text-gray-500 font-semibold">
//                 Loading News...
//               </div>
//             )}

//             {error && (
//               <div className="flex justify-center items-center h-full text-red-500 font-semibold">
//                 {error}
//               </div>
//             )}

//             {!loading && !error && news.length === 0 && (
//               <div className="flex justify-center items-center h-full text-gray-500 font-semibold">
//                 No News Available.
//               </div>
//             )}

//             {/* स्क्रॉल होने वाली न्यूज़ लिस्ट */}
//             {!loading && !error && news.length > 0 && (
//               <div className="news-scroll space-y-3">
//                 {[...news, ...news].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3 border rounded-lg p-3 bg-white hover:bg-gray-50"
//                   >
//                     <img
//                       src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png"
//                       alt="new"
//                       className="w-8 h-8"
//                     />

//                     <div className="border-2 border-black rounded-md px-3 py-1 font-bold text-sm whitespace-nowrap">
//                       {item?.date || "N/A"}
//                     </div>

//                     <p className="text-gray-800 text-sm">
//                       {item?.title || "No Title Available"}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Modal / Popup Section (View All पर क्लिक करने पर खुलेगा) */}
//           {showModal && (
//             <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
//               <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl">
                
//                 {/* Modal Header */}
//                 <div className="bg-yellow-500 px-5 py-4 flex justify-between items-center rounded-t-xl">
//                   <h2 className="text-2xl font-bold flex items-center gap-2 text-black">
//                     <Newspaper size={26} />
//                     All News & Events
//                   </h2>
//                   <button
//                     onClick={() => setShowModal(false)}
//                     className="hover:bg-white/30 p-2 rounded-full text-black"
//                   >
//                     <X size={28} />
//                   </button>
//                 </div>

//                 {/* Modal Body */}
//                 <div className="max-h-[70vh] overflow-y-auto p-5 space-y-4">
//                   {news.map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex gap-3 border rounded-lg p-4 hover:bg-gray-50"
//                     >
//                       <img
//                         src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png"
//                         className="w-8 h-8 mt-1"
//                         alt="icon"
//                       />
//                       <div>
//                         <span className="border-2 border-black rounded-md px-3 py-1 text-sm font-bold inline-block mb-2">
//                           {item?.date || "N/A"}
//                         </span>
//                         <p className="text-gray-800 leading-7">
//                           {item?.title || "No Title Available"}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Modal Footer */}
//                 <div className="border-t p-4 flex justify-end">
//                   <button
//                     onClick={() => setShowModal(false)}
//                     className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold"
//                   >
//                     Close
//                   </button>
//                 </div>

//               </div>
//             </div>
//           )}

//           {/* Main Card Footer (View All Button) */}
//           <div className="border-t p-4 flex justify-end">
//             <button
//               onClick={() => setShowModal(true)}
//               disabled={loading || news.length === 0}
//               className={`flex items-center gap-2 font-semibold ${
//                 loading || news.length === 0 
//                   ? "text-gray-400 cursor-not-allowed" 
//                   : "text-blue-700 hover:underline"
//               }`}
//             >
//               <Search size={18} />
//               View All
//             </button>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }



import { useState, useEffect } from "react";
import { Newspaper, Search, X, RefreshCw } from "lucide-react";

interface NewsItem {
  date?: string;
  title?: string;
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const fetchNews = async () => {
  setLoading(true);
  setError(null);

  try {
    const apiUrl =
      import.meta.env.VITE_NEWS_API_URL ||
      "https://api.goodguiders.com/api/news";

    console.log("Fetching from:", apiUrl);

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`Failed to load news. Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("API Response data:", responseData);

    const newsArray =
      responseData.data && Array.isArray(responseData.data)
        ? responseData.data
        : Array.isArray(responseData)
        ? responseData
        : [];

    setNews(newsArray);
  } catch (err: any) {
    console.error("Fetch error:", err);
    setError("Failed to fetch news. Please try again.");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <style>{`
        .news-container { height: 280px; overflow: hidden; position: relative; }
        .news-scroll { animation: scrollUp 18s linear infinite; }
        .news-scroll:hover { animation-play-state: paused; }
        @keyframes scrollUp { 0% { transform: translateY(100%); } 100% { transform: translateY(-100%); } }
      `}</style>

      <section className="py-10 bg-gray-100">
        <div className="max-w-5xl mx-auto bg-white rounded-xl border-2 border-yellow-500 shadow-lg overflow-hidden">
          
          {/* Header */}
          <div className="bg-yellow-500 py-3">
            <h2 className="flex justify-center items-center gap-2 text-3xl font-bold text-black">
              <Newspaper size={30} />
              News & Events
            </h2>
          </div>

          {/* Main Content Area */}
          <div className="news-container p-4">
            {loading && (
              <div className="flex justify-center items-center h-full text-gray-500 font-semibold gap-2">
                <RefreshCw className="animate-spin" size={20} />
                Loading News from Server...
              </div>
            )}

            {error && (
              <div className="flex flex-col justify-center items-center h-full text-center p-4">
                <p className="text-red-500 font-semibold mb-3">{error}</p>
                <button 
                  onClick={fetchNews}
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-bold text-sm shadow"
                >
                  <RefreshCw size={16} /> Try Again
                </button>
              </div>
            )}

            {!loading && !error && news.length === 0 && (
              <div className="flex justify-center items-center h-full text-gray-500 font-semibold">
                No News Available.
              </div>
            )}

            {!loading && !error && news.length > 0 && (
              <div className="news-scroll space-y-3">
                {[...news, ...news].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 border rounded-lg p-3 bg-white hover:bg-gray-50">
                    <img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" alt="new" className="w-8 h-8" />
                    <div className="border-2 border-black rounded-md px-3 py-1 font-bold text-sm whitespace-nowrap">
                      {item?.date || "N/A"}
                    </div>
                    <p className="text-gray-800 text-sm">{item?.title || "No Title"}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
              <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl">
                <div className="bg-yellow-500 px-5 py-4 flex justify-between items-center rounded-t-xl">
                  <h2 className="text-2xl font-bold flex items-center gap-2 text-black"><Newspaper size={26} />All News & Events</h2>
                  <button onClick={() => setShowModal(false)} className="hover:bg-white/30 p-2 rounded-full text-black"><X size={28} /></button>
                </div>
                <div className="max-h-[70vh] overflow-y-auto p-5 space-y-4">
                  {news.map((item, index) => (
                    <div key={index} className="flex gap-3 border rounded-lg p-4 hover:bg-gray-50">
                      <img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" className="w-8 h-8 mt-1" alt="icon" />
                      <div>
                        <span className="border-2 border-black rounded-md px-3 py-1 text-sm font-bold inline-block mb-2">{item?.date || "N/A"}</span>
                        <p className="text-gray-800 leading-7">{item?.title || "No Title"}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t p-4 flex justify-end">
                  <button onClick={() => setShowModal(false)} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold">Close</button>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="border-t p-4 flex justify-end">
            <button
              onClick={() => setShowModal(true)}
              disabled={loading || news.length === 0}
              className={`flex items-center gap-2 font-semibold ${loading || news.length === 0 ? "text-gray-400 cursor-not-allowed" : "text-blue-700 hover:underline"}`}
            >
              <Search size={18} /> View All
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
