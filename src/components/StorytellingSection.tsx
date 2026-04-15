import { motion } from "framer-motion";

const quotes = [
  "Ideias brilhantes morrem no silêncio ou na má explicação. O mercado não remunera apenas quem sabe, mas quem sabe convencer.",
  "Domine a estrutura de pensamento das mentes mais influentes e pare de deixar oportunidades na mesa por falta de clareza ou segurança.",
  "Este não é um curso de 'falar bem'. É um treinamento para quem entende que a comunicação é a ferramenta de alavancagem mais poderosa da carreira.",
];

const StorytellingSection = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-2xl mx-auto space-y-8">
        {quotes.map((quote, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-foreground/80 font-card text-base md:text-lg leading-relaxed"
          >
            {quote}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default StorytellingSection;
