import { motion } from "framer-motion";

const modules = [
  { num: "01", title: "Fundamentos da Retórica", desc: "A ciência por trás do orador." },
  { num: "02", title: "Discurso Improvisado", desc: "Teses, evidências e estruturação rápida." },
  { num: "03", title: "Entrega e Performance", desc: "Respiração diafragmática, ritmo e medo de falar em público." },
  { num: "04", title: "Discursos Informativos", desc: "Planejamento, credibilidade e expertise." },
  { num: "05", title: "Construção de Significado", desc: "Transformando dados e estatísticas em narrativas." },
  { num: "06", title: "Voz e Presença Corporal", desc: "Projeção vocal, saúde vocal e gestos eficazes." },
  { num: "07", title: "Oratória Persuasiva", desc: "Status Quo, ônus da prova, cura e contra-argumentação." },
  { num: "08", title: "Estilo e Refinamento", desc: "Figuras de linguagem (Anáfora, Antítese) e coerência emocional." },
];

const CurriculumSection = () => {
  return (
    <section className="px-6 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-4">
            Grade Curricular
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            8 módulos desenhados para construir domínio progressivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="inline-block mb-3 px-2.5 py-0.5 rounded text-xs font-body font-bold tracking-wider bg-cobalt text-cobalt-foreground">
                Módulo {mod.num}
              </span>
              <h3 className="text-lg font-heading text-foreground mb-2">{mod.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
