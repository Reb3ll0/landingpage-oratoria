import { motion } from "framer-motion";

const paragraphs = [
  "O mercado não remunera apenas o conhecimento, mas a capacidade de defendê-lo. No ambiente corporativo, quem não é ouvido, não é promovido.",
  "Aprenda a dominar a retórica clássica aplicada à velocidade das decisões modernas.",
];

const StorytellingSection = () => {
  return (
    <section className="px-6 py-8">
      <div className="max-w-2xl mx-auto text-center space-y-3">
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-foreground/80 font-card text-sm md:text-base leading-relaxed"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default StorytellingSection;
