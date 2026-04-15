import { motion } from "framer-motion";

const InstructorSection = () => {
  return (
    <section className="px-6 py-24 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-lg bg-muted border border-border flex-shrink-0 flex items-center justify-center overflow-hidden">
            <div className="text-muted-foreground text-xs font-body text-center px-4">
              Foto do instrutor
            </div>
          </div>
          <div>
            <span className="inline-block mb-3 px-3 py-1 rounded bg-cobalt text-cobalt-foreground text-xs font-body font-semibold tracking-wider uppercase">
              Sobre o Instrutor
            </span>
            <h2 className="text-2xl md:text-3xl tracking-tight text-foreground mb-4">
              Perfil Técnico e Prático
            </h2>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-3">
              Formação em comunicação estratégica com experiência em treinamento executivo para lideranças de grandes corporações e instituições financeiras.
            </p>
            <p className="text-muted-foreground font-body text-base leading-relaxed">
              Especialista em retórica clássica aplicada ao ambiente corporativo, com foco em apresentações de alto impacto e comunicação persuasiva.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorSection;
