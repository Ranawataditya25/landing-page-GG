

// // // import { useState, useEffect } from "react";
// // // import { Newspaper, Search, X, RefreshCw } from "lucide-react";

// // // interface NewsItem {
// // //   date?: string;
// // //   title?: string;
// // // }

// // // export default function News() {
// // //   const [news, setNews] = useState<NewsItem[]>([]);
// // //   const [loading, setLoading] = useState<boolean>(true);
// // //   const [error, setError] = useState<string | null>(null);
// // //   const [showModal, setShowModal] = useState<boolean>(false);

// // //   const fetchNews = async () => {
// // //   setLoading(true);
// // //   setError(null);

// // //   try {
// // //     const apiUrl =
// // //       import.meta.env.VITE_NEWS_API_URL ||
// // //       "https://api.goodguiders.com/api/news";

// // //     console.log("Fetching from:", apiUrl);

// // //     const response = await fetch(apiUrl, {
// // //       method: "GET",
// // //       headers: {
// // //         "Content-Type": "application/json",
// // //       },
// // //     });

// // //     console.log("Response status:", response.status);

// // //     if (!response.ok) {
// // //       throw new Error(`Failed to load news. Status: ${response.status}`);
// // //     }

// // //     const responseData = await response.json();
// // //     console.log("API Response data:", responseData);

// // //     const newsArray =
// // //       responseData.data && Array.isArray(responseData.data)
// // //         ? responseData.data
// // //         : Array.isArray(responseData)
// // //         ? responseData
// // //         : [];

// // //     setNews(newsArray);
// // //   } catch (err: any) {
// // //     console.error("Fetch error:", err);
// // //     setError("Failed to fetch news. Please try again.");
// // //   } finally {
// // //     setLoading(false);
// // //   }
// // // };

// // //   useEffect(() => {
// // //     fetchNews();
// // //   }, []);

// // //   return (
// // //     <>
// // //       <style>{`
// // //         .news-container { height: 280px; overflow: hidden; position: relative; }
// // //         .news-scroll { animation: scrollUp 18s linear infinite; }
// // //         .news-scroll:hover { animation-play-state: paused; }
// // //         @keyframes scrollUp { 0% { transform: translateY(100%); } 100% { transform: translateY(-100%); } }
// // //       `}</style>

// // //       <section className="py-10 bg-gray-100">
// // //         <div className="max-w-5xl mx-auto bg-white rounded-xl border-2 border-yellow-500 shadow-lg overflow-hidden">
          
// // //           {/* Header */}
// // //           <div className="bg-yellow-500 py-3">
// // //             <h2 className="flex justify-center items-center gap-2 text-3xl font-bold text-black">
// // //               <Newspaper size={30} />
// // //               News & Events
// // //             </h2>
// // //           </div>

// // //           {/* Main Content Area */}
// // //           <div className="news-container p-4">
// // //             {loading && (
// // //               <div className="flex justify-center items-center h-full text-gray-500 font-semibold gap-2">
// // //                 <RefreshCw className="animate-spin" size={20} />
// // //                 Loading News from Server...
// // //               </div>
// // //             )}

// // //             {error && (
// // //               <div className="flex flex-col justify-center items-center h-full text-center p-4">
// // //                 <p className="text-red-500 font-semibold mb-3">{error}</p>
// // //                 <button 
// // //                   onClick={fetchNews}
// // //                   className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-bold text-sm shadow"
// // //                 >
// // //                   <RefreshCw size={16} /> Try Again
// // //                 </button>
// // //               </div>
// // //             )}

// // //             {!loading && !error && news.length === 0 && (
// // //               <div className="flex justify-center items-center h-full text-gray-500 font-semibold">
// // //                 No News Available.
// // //               </div>
// // //             )}

// // //             {!loading && !error && news.length > 0 && (
// // //               <div className="news-scroll space-y-3">
// // //                 {[...news, ...news].map((item, index) => (
// // //                   <div key={index} className="flex items-center gap-3 border rounded-lg p-3 bg-white hover:bg-gray-50">
// // //                     <img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" alt="new" className="w-8 h-8" />
// // //                     <div className="border-2 border-black rounded-md px-3 py-1 font-bold text-sm whitespace-nowrap">
// // //                       {item?.date || "N/A"}
// // //                     </div>
// // //                     <p className="text-gray-800 text-sm">{item?.title || "No Title"}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </div>

// // //           {/* Modal */}
// // //           {showModal && (
// // //             <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
// // //               <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl">
// // //                 <div className="bg-yellow-500 px-5 py-4 flex justify-between items-center rounded-t-xl">
// // //                   <h2 className="text-2xl font-bold flex items-center gap-2 text-black"><Newspaper size={26} />All News & Events</h2>
// // //                   <button onClick={() => setShowModal(false)} className="hover:bg-white/30 p-2 rounded-full text-black"><X size={28} /></button>
// // //                 </div>
// // //                 <div className="max-h-[70vh] overflow-y-auto p-5 space-y-4">
// // //                   {news.map((item, index) => (
// // //                     <div key={index} className="flex gap-3 border rounded-lg p-4 hover:bg-gray-50">
// // //                       <img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" className="w-8 h-8 mt-1" alt="icon" />
// // //                       <div>
// // //                         <span className="border-2 border-black rounded-md px-3 py-1 text-sm font-bold inline-block mb-2">{item?.date || "N/A"}</span>
// // //                         <p className="text-gray-800 leading-7">{item?.title || "No Title"}</p>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //                 <div className="border-t p-4 flex justify-end">
// // //                   <button onClick={() => setShowModal(false)} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold">Close</button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Footer */}
// // //           <div className="border-t p-4 flex justify-end">
// // //             <button
// // //               onClick={() => setShowModal(true)}
// // //               disabled={loading || news.length === 0}
// // //               className={`flex items-center gap-2 font-semibold ${loading || news.length === 0 ? "text-gray-400 cursor-not-allowed" : "text-blue-700 hover:underline"}`}
// // //             >
// // //               <Search size={18} /> View All
// // //             </button>
// // //           </div>

// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // }





// // import { useState, useEffect } from "react";
// // import { Newspaper, Search, X, RefreshCw } from "lucide-react";

// // interface NewsItem {
// //   date?: string;
// //   title?: string;
// // }

// // export default function News() {
// //   const [news, setNews] = useState<NewsItem[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string | null>(null);
// //   const [showModal, setShowModal] = useState<boolean>(false);

// //   // Fungsi untuk mengubah format ISO string menjadi "DD MMM YYYY"
// //   const formatDate = (dateString?: string) => {
// //     if (!dateString) return "N/A";
// //     try {
// //       const date = new Date(dateString);
// //       // Validasi apakah string tanggal valid
// //       if (isNaN(date.getTime())) return dateString;

// //       return new Intl.DateTimeFormat("en-GB", {
// //         day: "2-digit",
// //         month: "short",
// //         year: "numeric",
// //       }).format(date); // Output Contoh: "09 Jul 2026"
// //     } catch (e) {
// //       return dateString || "N/A";
// //     }
// //   };

// //   const fetchNews = async () => {
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const apiUrl =
// //         import.meta.env.VITE_NEWS_API_URL ||
// //         "https://api.goodguiders.com/api/news";

// //       console.log("Fetching from:", apiUrl);

// //       const response = await fetch(apiUrl, {
// //         method: "GET",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       });

// //       console.log("Response status:", response.status);

// //       if (!response.ok) {
// //         throw new Error(`Failed to load news. Status: ${response.status}`);
// //       }

// //       const responseData = await response.json();
// //       console.log("API Response data:", responseData);

// //       const newsArray =
// //         responseData.data && Array.isArray(responseData.data)
// //           ? responseData.data
// //           : Array.isArray(responseData)
// //           ? responseData
// //           : [];

// //       setNews(newsArray);
// //     } catch (err: any) {
// //       console.error("Fetch error:", err);
// //       setError("Failed to fetch news. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchNews();
// //   }, []);

// //   return (
// //     <>
// //       <style>{`
// //         .news-container { height: 280px; overflow: hidden; position: relative; }
// //         .news-scroll { animation: scrollUp 18s linear infinite; }
// //         .news-scroll:hover { animation-play-state: paused; }
// //         @keyframes scrollUp { 0% { transform: translateY(100%); } 100% { transform: translateY(-100%); } }
// //       `}</style>

// //       <section className="py-10 bg-gray-100">
// //         <div className="max-w-5xl mx-auto bg-white rounded-xl border-2 border-yellow-500 shadow-lg overflow-hidden">
          
// //           {/* Header */}
// //           <div className="bg-yellow-500 py-3">
// //             <h2 className="flex justify-center items-center gap-2 text-3xl font-bold text-black">
// //               <Newspaper size={30} />
// //               News & Events
// //             </h2>
// //           </div>

// //           {/* Main Content Area */}
// //           <div className="news-container p-4">
// //             {loading && (
// //               <div className="flex justify-center items-center h-full text-gray-500 font-semibold gap-2">
// //                 <RefreshCw className="animate-spin" size={20} />
// //                 Loading News from Server...
// //               </div>
// //             )}

// //             {error && (
// //               <div className="flex flex-col justify-center items-center h-full text-center p-4">
// //                 <p className="text-red-500 font-semibold mb-3">{error}</p>
// //                 <button 
// //                   onClick={fetchNews}
// //                   className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-bold text-sm shadow"
// //                 >
// //                   <RefreshCw size={16} /> Try Again
// //                 </button>
// //               </div>
// //             )}

// //             {!loading && !error && news.length === 0 && (
// //               <div className="flex justify-center items-center h-full text-gray-500 font-semibold">
// //                 No News Available.
// //               </div>
// //             )}

// //             {!loading && !error && news.length > 0 && (
// //               <div className="news-scroll space-y-3">
// //                 {[...news, ...news].map((item, index) => (
// //                   <div key={index} className="flex items-center gap-3 border rounded-lg p-3 bg-white hover:bg-gray-50">
// //                     <img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" alt="new" className="w-8 h-8" />
// //                     <div className="border-2 border-black rounded-md px-3 py-1 font-bold text-sm whitespace-nowrap">
// //                       {formatDate(item?.date)}
// //                     </div>
// //                     <p className="text-gray-800 text-sm">{item?.title || "No Title"}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>

// //           {/* Modal */}
// //           {showModal && (
// //             <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
// //               <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl">
// //                 <div className="bg-yellow-500 px-5 py-4 flex justify-between items-center rounded-t-xl">
// //                   <h2 className="text-2xl font-bold flex items-center gap-2 text-black"><Newspaper size={26} />All News & Events</h2>
// //                   <button onClick={() => setShowModal(false)} className="hover:bg-white/30 p-2 rounded-full text-black"><X size={28} /></button>
// //                 </div>
// //                 <div className="max-h-[70vh] overflow-y-auto p-5 space-y-4">
// //                   {news.map((item, index) => (
// //                     <div key={index} className="flex gap-3 border rounded-lg p-4 hover:bg-gray-50">
// //                       <img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" className="w-8 h-8 mt-1" alt="icon" />
// //                       <div>
// //                         <span className="border-2 border-black rounded-md px-3 py-1 text-sm font-bold inline-block mb-2">
// //                           {formatDate(item?.date)}
// //                         </span>
// //                         <p className="text-gray-800 leading-7">{item?.title || "No Title"}</p>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //                 <div className="border-t p-4 flex justify-end">
// //                   <button onClick={() => setShowModal(false)} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold">Close</button>
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           {/* Footer */}
// //           <div className="border-t p-4 flex justify-end">
// //             <button
// //               onClick={() => setShowModal(true)}
// //               disabled={loading || news.length === 0}
// //               className={`flex items-center gap-2 font-semibold ${loading || news.length === 0 ? "text-gray-400 cursor-not-allowed" : "text-blue-700 hover:underline"}`}
// //             >
// //               <Search size={18} /> View All
// //             </button>
// //           </div>

// //         </div>
// //       </section>
// //     </>
// //   );
// // }




// import { useState, useEffect } from "react";
// import { Newspaper, Search, X, RefreshCw } from "lucide-react";

// interface NewsItem {
//   date?: string;
//   title?: string;
// }

// export default function News() {
//   const [news, setNews] = useState<NewsItem[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [showModal, setShowModal] = useState<boolean>(false);

//   // Fungsi untuk mengubah format ISO string menjadi "DD MMM YYYY"
//   const formatDate = (dateString?: string) => {
//     if (!dateString) return "N/A";
//     try {
//       const date = new Date(dateString);
//       if (isNaN(date.getTime())) return dateString;

//       return new Intl.DateTimeFormat("en-GB", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       }).format(date);
//     } catch (e) {
//       return dateString || "N/A";
//     }
//   };

//   const fetchNews = async () => {
//     setLoading(true);
//     setError(null);
//     setNews([]); // Kosongkan state sebelum fetch baru

//     try {
//       const apiUrl =
//         import.meta.env.VITE_NEWS_API_URL ||
//         "https://api.goodguiders.com/api/news";

//       console.log("Fetching from:", apiUrl);

//       const response = await fetch(apiUrl, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       console.log("Response status:", response.status);

//       if (!response.ok) {
//         throw new Error(`Failed to load news. Status: ${response.status}`);
//       }

//       const responseData = await response.json();
//       console.log("API Response data:", responseData);

//       // Validasi struktur data dari API secara aman
//       let newsArray: NewsItem[] = [];
//       if (responseData && responseData.data && Array.isArray(responseData.data)) {
//         newsArray = responseData.data;
//       } else if (Array.isArray(responseData)) {
//         newsArray = responseData;
//       }

//       setNews(newsArray);
//     } catch (err: any) {
//       console.error("Fetch error:", err);
//       setError("Failed to fetch news. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   return (
//     <>
//       <style>{`
//         .news-container { height: 280px; overflow: hidden; position: relative; }
//         .news-scroll { animation: scrollUp 18s linear infinite; }
//         .news-scroll:hover { animation-play-state: paused; }
//         @keyframes scrollUp { 0% { transform: translateY(100%); } 100% { transform: translateY(-100%); } }
//       `}</style>

//       <section className="py-10 bg-gray-100">
//         <div className="max-w-5xl mx-auto bg-white rounded-xl border-2 border-yellow-500 shadow-lg overflow-hidden">
          
//           {/* Header */}
//           <div className="bg-yellow-500 py-3">
//             <h2 className="flex justify-center items-center gap-2 text-3xl font-bold text-black">
//               <Newspaper size={30} />
//               News 
//             </h2>
//           </div>

//           {/* Main Content Area */}
//           <div className="news-container p-4">
//             {loading && (
//               <div className="flex justify-center items-center h-full text-gray-500 font-semibold gap-2">
//                 <RefreshCw className="animate-spin" size={20} />
//                 Loading News from Server...
//               </div>
//             )}

//             {/* JIKA TERJADI ERROR (Gagal Fetch / Server Mati) */}
//             {!loading && error && (
//               <div className="flex flex-col justify-center items-center h-full text-center p-4">
//                 <p className="text-red-500 font-semibold mb-3">{error}</p>
//                 <button 
//                   onClick={fetchNews}
//                   className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-bold text-sm shadow"
//                 >
//                   <RefreshCw size={16} /> Try Again
//                 </button>
//               </div>
//             )}

//             {/* JIKA BERHASIL CONNECT TAPI DATA BERITA KOSONG [] */}
//             {!loading && !error && news.length === 0 && (
//               <div className="flex justify-center items-center h-full text-gray-500 font-semibold">
//                 No News Available.
//               </div>
//             )}

//             {/* JIKA DATA BERITA ADA */}
//             {!loading && !error && news.length > 0 && (
//               <div className="news-scroll space-y-3">
//                 {[...news, ...news].map((item, index) => (
//                   <div key={index} className="flex items-center gap-3 border rounded-lg p-3 bg-white hover:bg-gray-50">
//                     <img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" alt="new" className="w-8 h-8" />
//                     <div className="border-2 border-black rounded-md px-3 py-1 font-bold text-sm whitespace-nowrap">
//                       {formatDate(item?.date)}
//                     </div>
//                     <p className="text-gray-800 text-sm">{item?.title || "No Title"}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Modal */}
//           {showModal && (
//             <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
//               <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl">
//                 <div className="bg-yellow-500 px-5 py-4 flex justify-between items-center rounded-t-xl">
//                   <h2 className="text-2xl font-bold flex items-center gap-2 text-black"><Newspaper size={26} />All News</h2>
//                   <button onClick={() => setShowModal(false)} className="hover:bg-white/30 p-2 rounded-full text-black"><X size={28} /></button>
//                 </div>
//                 <div className="max-h-[70vh] overflow-y-auto p-5 space-y-4">
//                   {news.map((item, index) => (
//                     <div key={index} className="flex gap-3 border rounded-lg p-4 hover:bg-gray-50">
//                       <img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" className="w-8 h-8 mt-1" alt="icon" />
//                       <div>
//                         <span className="border-2 border-black rounded-md px-3 py-1 text-sm font-bold inline-block mb-2">
//                           {formatDate(item?.date)}
//                         </span>
//                         <p className="text-gray-800 leading-7">{item?.title || "No Title"}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="border-t p-4 flex justify-end">
//                   <button onClick={() => setShowModal(false)} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold">Close</button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Footer */}
//           <div className="border-t p-4 flex justify-end">
//             <button
//               onClick={() => setShowModal(true)}
//               disabled={loading || news.length === 0}
//               className={`flex items-center gap-2 font-semibold ${loading || news.length === 0 ? "text-gray-400 cursor-not-allowed" : "text-blue-700 hover:underline"}`}
//             >
//               <Search size={18} /> View All
//             </button>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }




//////updated //////





import { useState, useEffect } from "react";
import { Newspaper, RefreshCw, Calendar, ExternalLink, X } from "lucide-react";

interface NewsItem {
  _id?: string | number;
  id?: string | number;
  date?: string;
  title?: string;
  name?: string;
  image?: string;
  imageUrl?: string;
  img?: string;
  description?: string;
  link?: string;
  url?: string;
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const apiUrl =
        import.meta.env.VITE_NEWS_API_URL ||
        "https://api.goodguiders.com/api/news";

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to load news. Status: ${response.status}`);
      }

      const responseData = await response.json();

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

  const getTitle = (item: NewsItem) => item.title || item.name || "Untitled News";

  const formatDate = (rawDate?: string): string => {
    if (!rawDate) return "N/A";
    const str = rawDate.trim();

    if (/^\d{2}\/\d{2}\/\d{4}$/.test(str)) {
      return str;
    }

    if (str.includes("-")) {
      const dateOnly = str.split("T")[0];
      const parts = dateOnly.split("-");
      if (parts.length === 3 && parts[0].length === 4) {
        const [year, month, day] = parts;
        return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
      }
    }

    const d = new Date(str);
    if (!isNaN(d.getTime())) {
      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    }

    return str;
  };

  const getDate = (item: NewsItem) => formatDate(item.date);
  const getImage = (item: NewsItem) => item.image || item.imageUrl || item.img || "";

  // Continuous infinite scroll ke liye double array (agar items extra hain)
  const displayNews = news.length > 0 ? [...news, ...news] : [];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      {/* Custom Keyframe CSS for Infinite Continuous Auto-Scroll */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto bg-white rounded-2xl border-2 border-yellow-500 shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-yellow-500 py-4 px-6 text-center">
          <h2 className="flex justify-center items-center gap-3 text-3xl md:text-4xl font-bold text-black">
            <Newspaper size={34} />
            News & Events
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="p-6 min-h-[350px] flex flex-col justify-center">
          {loading && (
            <div className="flex justify-center items-center py-16 text-gray-500 font-semibold gap-3">
              <RefreshCw className="animate-spin text-yellow-600" size={24} />
              <span>Loading News...</span>
            </div>
          )}

          {error && (
            <div className="flex flex-col justify-center items-center py-12 text-center p-4">
              <p className="text-red-500 font-semibold mb-4">{error}</p>
              <button 
                onClick={fetchNews}
                className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2.5 rounded-lg font-bold text-sm shadow transition"
              >
                <RefreshCw size={18} /> Try Again
              </button>
            </div>
          )}

          {!loading && !error && news.length === 0 && (
            <div className="flex justify-center items-center py-16 text-gray-500 font-semibold">
              No News Available.
            </div>
          )}

          {/* Automatic Horizontal Scrolling Container */}
          {!loading && !error && news.length > 0 && (
            <div className="relative w-full overflow-hidden py-2">
              <div className="animate-marquee gap-6 flex">
                {displayNews.map((item, index) => (
                  <div
                    key={`${item._id || item.id || index}-${index}`}
                    onClick={() => setSelectedNews(item)}
                    className="w-72 md:w-80 flex-shrink-0 cursor-pointer group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
                  >
                    {/* Card Image Container */}
                    <div className="relative w-full h-48 bg-gradient-to-br from-yellow-50 to-amber-100 overflow-hidden">
                      {getImage(item) ? (
                        <img
                          src={getImage(item)}
                          alt={getTitle(item)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                            const parent = (e.target as HTMLElement).parentElement;
                            if (parent) {
                              const fallback = parent.querySelector(".image-fallback");
                              if (fallback) fallback.classList.remove("hidden");
                            }
                          }}
                        />
                      ) : null}

                      {/* Fallback pattern */}
                      <div className={`image-fallback w-full h-full flex flex-col items-center justify-center text-amber-700 p-4 text-center ${getImage(item) ? "hidden" : ""}`}>
                        <Newspaper size={44} className="opacity-40 mb-2" />
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-800/60">GoodGuiders Updates</span>
                      </div>

                      {/* Date Badge */}
                      <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-sm text-yellow-400 border border-yellow-500/40 rounded-md px-3 py-1 text-xs font-bold flex items-center gap-1.5 shadow-md">
                        <Calendar size={13} />
                        <span>{getDate(item)}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                      <div>
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                          {getTitle(item)}
                        </h3>
                        {item.description && (
                          <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <div className="mt-4 text-xs font-semibold text-amber-600 group-hover:underline flex items-center gap-1">
                        Click to view details →
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Single News Detail Popup Modal */}
      {selectedNews && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedNews(null)}
        >
          <div 
            className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Modal content click won't close modal
          >
            {/* Modal Header */}
            <div className="bg-yellow-500 px-6 py-4 flex justify-between items-center border-b border-yellow-600">
              <h3 className="text-xl font-bold flex items-center gap-2 text-black line-clamp-1">
                <Newspaper size={24} />
                {getTitle(selectedNews)}
              </h3>
              <button
                onClick={() => setSelectedNews(null)}
                className="hover:bg-black/10 p-1.5 rounded-full text-black transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              {getImage(selectedNews) && (
                <div className="relative w-full h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={getImage(selectedNews)}
                    alt={getTitle(selectedNews)}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex items-center gap-2 text-sm font-semibold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg w-fit">
                <Calendar size={16} />
                <span>Date: {getDate(selectedNews)}</span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {getTitle(selectedNews)}
                </h4>
                <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                  {selectedNews.description || "No full description available for this update."}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t bg-gray-50 p-4 flex justify-between items-center">
              {(selectedNews.link || selectedNews.url) ? (
                <a
                  href={selectedNews.link || selectedNews.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-bold text-sm shadow transition"
                >
                  Visit Official Link <ExternalLink size={16} />
                </a>
              ) : <div />}

              <button
                onClick={() => setSelectedNews(null)}
                className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg font-semibold text-sm transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}