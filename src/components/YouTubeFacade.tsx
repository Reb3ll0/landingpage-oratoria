import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeFacadeProps {
  videoId: string;
  title?: string;
}

/**
 * Lightweight YouTube facade: renders a thumbnail until the user clicks play.
 * Avoids loading the heavy YouTube iframe (and its many requests) on initial page load.
 */
const YouTubeFacade = ({ videoId, title = "Vídeo" }: YouTubeFacadeProps) => {
  const [activated, setActivated] = useState(false);

  if (activated) {
    return (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      className="relative w-full h-full group cursor-pointer"
      aria-label={`Reproduzir ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
        <span className="w-16 h-16 rounded-full bg-cobalt text-cobalt-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="w-7 h-7 ml-1" fill="currentColor" />
        </span>
      </span>
    </button>
  );
};

export default YouTubeFacade;
