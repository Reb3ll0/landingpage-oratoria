import { motion } from "framer-motion";

const modules = [
  {
    num: "01",
    title: "Introdução",
    topics: [
      "Retórica e o que faz um bom orador",
      "As 5 Ferramentas da Retórica",
      "Escrita vs Fala",
      "Escrever para Ler vs Falar",
      "Como nós Falamos",
      "Como Facilitar o Entendimento do Público",
    ],
  },
  {
    num: "02",
    title: "Construção de Discurso Improvisado",
    topics: [
      "Construção de Discurso Improvisado",
      "Avaliação de Discurso Improvisado",
      "Resultado de Discurso Improvisado",
      "Extraindo Informações de Discursos",
      "Como Estruturar um Argumento",
      "Como Criar Afirmações",
      "Organizando Afirmações",
      "Estruturando Afirmações",
      "Como Construir Evidências",
    ],
  },
  {
    num: "03",
    title: "Entrega Discurso Improvisado",
    topics: [
      "Os Quatro Passos da Entrega",
      "Como Defender Posicionamento Contrariamente",
      "Construindo Introdução",
      "Transições e Conclusão",
      "Medo de Falar em Público",
      "Exemplo de Discurso Ruim",
      "Boas Práticas para Respiração",
      "Ritmo de Fala",
      "Gestos e Movimentos",
    ],
  },
  {
    num: "04",
    title: "Introdução ao Discurso Informativo",
    topics: [
      "Diferença Discurso Informativo vs Improvisado",
      "Rubrica do Discurso Informativo",
      "Composição do Discurso Informativo",
      "Planejamento de Discurso Informativo",
      "Construção do Tema do Discurso",
      "Definindo o Objetivo do Discurso",
    ],
  },
  {
    num: "05",
    title: "Construção de Discurso Informativo",
    topics: [
      "Rubrica do Discurso Informativo",
      "Gerando Ideias",
      "Organizando Ideias",
      "Simplificar Discurso Informativo",
      "Arranjo do Discurso Informativo",
      "Desenvolvendo Evidências",
      "Informação vs Significado",
    ],
  },
  {
    num: "06",
    title: "Entrega de Discurso Informativo",
    topics: [
      "Introdução e Conclusão",
      "Como Gerar Credibilidade",
      "Ferramentas de Credibilidade",
      "Citações e Anotações",
      "Os Três Tipos de Anotações",
      "Pausas na Entrega",
      "Variedade Vocal",
      "Controle Corporal",
    ],
  },
  {
    num: "07",
    title: "Discurso Persuasivo",
    topics: [
      "Introdução",
      "Construindo Rubrica",
      "Status Quo e Ônus da Prova",
      "Problema e Culpa",
      "Cura e Consequência",
      "Contra Argumentação",
      "Pontos de Discordância",
      "Respondendo Contra-argumentos",
      "Chamada para Ação",
      "Arranjo Persuasivo",
      "Congruência da Argumentação",
      "Utilizando Evidências",
      "Falácias no Discurso",
      "Falácias de Raciocínio e Resposta",
    ],
  },
  {
    num: "08",
    title: "Entrega Discurso Persuasivo",
    topics: [
      "Enquadrar Discurso Com Público",
      "Tema e Público",
      "Recursos de Estilo I",
      "Recursos de Estilo II",
      "Recursos de Estilo III",
      "Integração Estilo e Entrega",
      "Projeção Vocal",
      "Saúde Vocal",
    ],
  },
];

const CurriculumSection = () => {
  return (
    <section className="px-6 py-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <h2 className="text-2xl md:text-3xl tracking-tight text-foreground mb-1">
            O Programa
          </h2>
          <p className="text-muted-foreground font-card text-sm">
            8 módulos desenhados para construir autoridade progressiva.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="bg-card border border-card-border rounded-lg p-5 hover:shadow-sm transition-shadow"
            >
              <span className="inline-block mb-1.5 px-2 py-0.5 rounded text-xs font-body font-bold tracking-wider bg-cobalt text-cobalt-foreground">
                Módulo {mod.num}
              </span>
              <h3 className="text-sm font-body font-bold text-foreground mb-2">
                {mod.title}
              </h3>
              <ul className="space-y-1">
                {mod.topics.map((topic) => (
                  <li
                    key={topic}
                    className="text-muted-foreground font-card text-xs leading-relaxed flex gap-1.5"
                  >
                    <span className="text-cobalt mt-0.5">·</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
