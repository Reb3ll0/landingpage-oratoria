import { motion } from "framer-motion";

const InstructorSection = () => {
  return (
    <section className="px-6 py-10 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-card-border rounded-lg p-7 md:p-10 flex flex-col md:flex-row gap-6 items-center"
        >
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-lg bg-muted border border-border flex-shrink-0 flex items-center justify-center overflow-hidden">
            <div className="text-muted-foreground text-xs font-body text-center px-4">
              Foto do instrutor
            </div>
          </div>
          <div>
            <span className="inline-block mb-2 px-3 py-1 rounded bg-cobalt text-cobalt-foreground text-xs font-body font-semibold tracking-wider uppercase">
              Sobre o Instrutor
            </span>
            <h2 className="text-xl md:text-2xl tracking-tight text-foreground mb-3">
              Perfil Técnico e Prático
            </h2>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-2">
              Formação em comunicação estratégica com experiência em treinamento executivo para lideranças de grandes corporações e instituições financeiras.
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Especialista em retórica clássica aplicada ao ambiente corporativo, com foco em apresentações de alto impacto e comunicação persuasiva.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorSection;
