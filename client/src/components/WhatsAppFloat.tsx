import { MessageSquare } from "lucide-react";

export function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Team%20GoodGuiders";

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-2xl hover:bg-orange-600 transition-all duration-300 hover:scale-110 z-50"

      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
    </a>
  );
}
