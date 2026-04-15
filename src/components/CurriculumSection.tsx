import { motion } from "framer-motion";

const modules = [
  { num: "01", title: "A Lógica do Impacto", desc: "Fundamentos de Retórica e Credibilidade." },
  { num: "02", title: "Raciocínio Sob Pressão", desc: "Estruturação de pensamentos e improviso." },
  { num: "03", title: "Presença Executiva", desc: "Linguagem não-verbal, voz e domínio de palco." },
  { num: "04", title: "A Engenharia do Discurso", desc: "Como transformar dados técnicos em significado." },
  { num: "05", title: "Persuasão de Alto Nível", desc: "Como vencer objeções e mover pessoas." },
  { num: "06", title: "Refinamento de Estilo", desc: "O polimento final dos grandes oradores." },
];

const CurriculumSection = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-4">
            O Programa
          </h2>
          <p className="text-muted-foreground font-card text-lg">
            6 módulos desenhados para construir autoridade progressiva.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-card border border-card-border rounded-xl p-7 hover:shadow-md transition-shadow"
            >
              <span className="inline-block mb-3 px-2.5 py-0.5 rounded text-xs font-body font-bold tracking-wider bg-cobalt text-cobalt-foreground">
                Módulo {mod.num}
              </span>
              <h3 className="text-lg font-heading text-foreground mb-2">{mod.title}</h3>
              <p className="text-muted-foreground font-card text-sm leading-relaxed">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
