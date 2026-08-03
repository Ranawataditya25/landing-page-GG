import { useState, useEffect, useRef } from "react";
import { Newspaper, RefreshCw, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track scroll position to freeze Left button when at 0
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const handleContainerScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
    }
  };

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

  // Listen to scroll & window resize events to update the scroll state
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleContainerScroll);
      window.addEventListener("resize", handleContainerScroll);
      // Run once initially (after a small timeout to let the DOM settle)
      const timeout = setTimeout(handleContainerScroll, 200);
      return () => {
        container.removeEventListener("scroll", handleContainerScroll);
        window.removeEventListener("resize", handleContainerScroll);
        clearTimeout(timeout);
      };
    }
  }, [news, loading]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const maxScrollVal = scrollWidth - clientWidth;
      const scrollAmount = 320; // Scroll by roughly one card width

      if (direction === "left") {
        const targetScroll = Math.max(0, scrollLeft - scrollAmount);
        scrollRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
      } else {
        // If at the end, scroll back to 0 automatically
        if (scrollLeft >= maxScrollVal - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const targetScroll = Math.min(maxScrollVal, scrollLeft + scrollAmount);
          scrollRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
        }
      }
    }
  };

  // Modal navigation index check
  const currentNewsIndex = selectedNews 
    ? news.findIndex((item) => (item._id || item.id) === (selectedNews._id || selectedNews.id))
    : -1;

  // Modal navigation functions
  const handlePrevNews = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentNewsIndex > 0) {
      setSelectedNews(news[currentNewsIndex - 1]);
    }
  };

  const handleNextNews = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentNewsIndex !== -1 && currentNewsIndex < news.length - 1) {
      setSelectedNews(news[currentNewsIndex + 1]);
    }
  };

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

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      {/* Hide scrollbar for a clean design */}
      <style>{`
        .news-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .news-scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
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

          {/* Horizontal scrolling news container with left/right buttons */}
          {!loading && !error && news.length > 0 && (
            <div className="relative w-full py-2">
              {/* Left Scroll Button */}
              <button
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full shadow-lg transition duration-200 border hidden md:flex items-center justify-center ${
                  !canScrollLeft
                    ? "bg-gray-300 text-gray-400 border-gray-400 cursor-not-allowed opacity-50"
                    : "bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-600"
                }`}
                aria-label="Scroll Left"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Right Scroll Button */}
              <button
                onClick={() => handleScroll("right")}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 hover:bg-yellow-600 text-black p-2.5 rounded-full shadow-lg transition duration-200 hidden md:flex items-center justify-center border border-yellow-600"
                aria-label="Scroll Right"
              >
                <ChevronRight size={24} />
              </button>

              <div 
                ref={scrollRef}
                onScroll={handleContainerScroll}
                className="news-scroll-container flex gap-6 overflow-x-auto pb-4 justify-start px-12 scroll-smooth"
              >
                {news.map((item, index) => (
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
            className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Modal content click won't close modal
          >
            {/* Modal Left Navigation Button */}
            <button
              onClick={handlePrevNews}
              disabled={currentNewsIndex === 0}
              className={`absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full shadow-lg transition duration-200 border flex items-center justify-center ${
                currentNewsIndex === 0
                  ? "bg-gray-300 text-gray-400 border-gray-400 cursor-not-allowed opacity-50"
                  : "bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-600"
              }`}
              aria-label="Previous News"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Modal Right Navigation Button */}
            <button
              onClick={handleNextNews}
              disabled={currentNewsIndex === news.length - 1}
              className={`absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full shadow-lg transition duration-200 border flex items-center justify-center ${
                currentNewsIndex === news.length - 1
                  ? "bg-gray-300 text-gray-400 border-gray-400 cursor-not-allowed opacity-50"
                  : "bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-600"
              }`}
              aria-label="Next News"
            >
              <ChevronRight size={20} />
            </button>

            {/* Modal Header */}
            <div className="bg-yellow-500 px-14 md:px-16 py-4 flex justify-between items-center border-b border-yellow-600">
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
            <div className="px-14 md:px-16 py-6 overflow-y-auto space-y-4">
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
            <div className="border-t bg-gray-50 p-4 px-14 md:px-16 flex justify-end">
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