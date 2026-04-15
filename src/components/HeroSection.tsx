import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border text-sm font-body text-muted-foreground tracking-wide uppercase">
          Programa Executivo
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground mb-6">
          A Habilidade Mais Valiosa do Mercado: Domine a Oratória e a Retórica Clássica
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body font-normal max-w-2xl mx-auto leading-relaxed">
          Do improviso à persuasão: um treinamento técnico e prático para profissionais que buscam presença executiva e clareza de pensamento.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
