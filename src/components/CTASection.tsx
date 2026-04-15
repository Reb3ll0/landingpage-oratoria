import { motion } from "framer-motion";
import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.open(`https://wa.me/5511999999999?text=Olá! Gostaria de me inscrever na próxima turma. Meu e-mail: ${encodeURIComponent(email)}`, "_blank");
    }
  };

  return (
    <section className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-surface-dark text-surface-dark-foreground rounded-2xl p-8 md:p-12"
      >
        <h2 className="text-2xl md:text-3xl tracking-tight mb-3">
          Garanta sua vaga na próxima turma
        </h2>
        <p className="text-surface-dark-foreground/70 font-body text-base mb-8">
          Inscreva-se para receber informações sobre datas, investimento e processo seletivo.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-surface-dark-foreground/10 border border-surface-dark-foreground/20 text-surface-dark-foreground placeholder:text-surface-dark-foreground/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-cobalt"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-cobalt text-cobalt-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Quero me inscrever
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default CTASection;
