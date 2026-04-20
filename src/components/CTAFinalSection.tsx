import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { openExternal } from "@/lib/openExternal";

const WHATSAPP_URL = "https://wa.me/555182576087?text=Olá!%20Quero%20saber%20mais";

const CTAFinalSection = () => {
  return (
    <section className="px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-surface-dark text-surface-dark-foreground rounded-2xl p-8 md:p-10 text-center"
      >
        <h2 className="text-xl md:text-2xl tracking-tight mb-3">
          Sua evolução começa agora
        </h2>
        <p className="font-card text-sm text-surface-dark-foreground/70 mb-6 max-w-md mx-auto">
          Vagas limitadas para manter a qualidade do treinamento. Fale com nosso time agora.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          onClick={(e) => {
            e.preventDefault();
            openExternal(WHATSAPP_URL);
          }}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-cobalt text-cobalt-foreground font-body font-bold text-base uppercase tracking-wider shadow-md animate-pulse-cobalt hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-5 h-5" />
          Quero Saber Mais
        </a>
      </motion.div>
    </section>
  );
};

export default CTAFinalSection;
