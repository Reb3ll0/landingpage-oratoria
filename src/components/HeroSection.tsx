import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { openExternal } from "@/lib/openExternal";

const HeroSection = () => {
  return (
    <section className="px-6 pt-14 pb-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground mb-4"
        >
          Sua palavra vale milhões.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed mb-8"
        >
          No alto escalão, sua comunicação é seu maior ativo. Transforme sua oratória em influência e autoridade executiva.
        </motion.p>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="aspect-video rounded-lg overflow-hidden bg-muted mb-6"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/s_cVEI_kTjA?rel=0&modestbranding=1"
            title="Vídeo de apresentação"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>

        {/* CTA Primário */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <a
            href="https://wa.me/555182576087?text=Olá!%20Quero%20saber%20mais"
            target="_blank"
            rel="noopener noreferrer nofollow"
            onClick={(e) => {
              e.preventDefault();
              openExternal("https://wa.me/555182576087?text=Olá!%20Quero%20saber%20mais");
            }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-cobalt text-cobalt-foreground font-body font-bold text-base uppercase tracking-wider shadow-md animate-pulse-cobalt hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            Comece Já
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
