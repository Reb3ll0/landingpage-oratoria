import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground mb-6">
          Sua palavra vale milhões.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body font-normal max-w-2xl mx-auto leading-relaxed">
          No alto escalão, a diferença entre o sim e o não é a sua capacidade de comunicar. Transforme sua oratória no seu maior ativo de influência e autoridade profissional.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
