import { motion } from "framer-motion";

const MethodSection = () => {
  return (
    <section className="px-6 py-24 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 px-3 py-1 rounded bg-cobalt text-cobalt-foreground text-xs font-body font-semibold tracking-wider uppercase">
            O Método
          </span>
          <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-6">
            Da escrita para a fala
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
            Nosso método é fundamentado nos cinco cânones clássicos da Retórica — <strong className="text-foreground">Invenção, Organização, Estilo, Memória e Entrega</strong> — adaptados para o ambiente corporativo contemporâneo.
          </p>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            A transição da escrita para a fala é o eixo central do treinamento. Você aprenderá a estruturar ideias com rigor e transmiti-las com presença, clareza e impacto.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
