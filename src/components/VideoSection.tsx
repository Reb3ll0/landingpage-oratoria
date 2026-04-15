import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-video rounded-2xl overflow-hidden border border-border shadow-lg bg-muted flex items-center justify-center"
        >
          {/* Replace src with actual video embed */}
          <div className="text-muted-foreground font-body text-sm text-center px-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cobalt/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-cobalt" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            Insira aqui o vídeo de apresentação
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o programa de Oratória."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-cobalt text-cobalt-foreground font-body font-semibold text-base shadow-md animate-pulse-cobalt hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com um consultor agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
