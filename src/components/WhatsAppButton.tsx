import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, handleExternalClick } from "@/lib/openExternal";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={handleExternalClick(WHATSAPP_URL)}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-cobalt text-cobalt-foreground flex items-center justify-center shadow-lg animate-pulse-cobalt hover:scale-105 transition-transform"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
