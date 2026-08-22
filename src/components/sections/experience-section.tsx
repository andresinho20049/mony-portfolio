type Experiencia = {
  periodo: string;
  cargo: string;
  empresa: string;
  descricao: string;
  pontos: string[];
  skills: string[];
  categoria: 'Atendimento & Operação' | 'Gastronomia & Produção';
};

const experiencias: Experiencia[] = [
  {
    periodo: '2025',
    cargo: 'Auxiliar de Cozinha',
    empresa: 'Padaria & Restaurante Peg Pão',
    categoria: 'Gastronomia & Produção',
    descricao:
      'Atuação versátil na rotina de cozinha comercial (prato feito, à la carte e self-service), preparando refeições com sabor de comida caseira, riqueza cultural e alto padrão de carinho.',
    pontos: [
      'Versatilidade em sub-áreas da cozinha: rotação contínua entre preparação de saladas, operação de chapa, corte e pré-preparo de alimentos com alta eficiência.',
      'Diversidade gastronômica: elaboração de cardápios variados que iam da comida típica nordestina a frutos do mar (feijoada, baião de dois, peixe assado/frito/cozido e lula).',
      'Garantia de padrão e frescor diário nas ilhas de self-service, equilibrando agilidade na reposição e cuidado na apresentação visual dos pratos.',
    ],
    skills: [
      'Culinária Brasileira & Frutos do Mar',
      'Rotação de Praças / Estações',
      'Segurança e Higiene Alimentar',
      'Preparo de Comida Caseira',
      'Trabalho sob Pressão',
    ],
  },
  {
    periodo: '2016 — 2020',
    cargo: 'Operadora de Caixa & Multifuncional',
    empresa:
      'Kalles Comércios de Multialimentos LTDA (Giraffas - Hipermercado Extra Taboão)',
    categoria: 'Atendimento & Operação',
    descricao:
      'Jornada de 4 anos enfrentando o desafio diário de alto fluxo de clientes em praça de alimentação de hipermercado, desenvolvendo dinamismo, constância e domínio de processos.',
    pontos: [
      'Atuação multifuncional e versátil: rotação entre Operadora de Caixa, Chapeira, Cozinha e Balcão (suporte no atendimento, montagem de bandejas e sobremesas).',
      'Gestão de alto fluxo e fluidez: organização em equipe para garantir velocidade no atendimento e satisfação do cliente nos horários de pico.',
      'Aprendizado técnico gastronômico: porcionamento preciso de alimentos, organização operacional rigorosa, agilidade comercial e cumprimento de normas sanitárias.',
      'Atendimento receptivo e comercial: condução de situações no balcão, suporte na organização do fluxo e apresentação ativa das sugestões e promoções do dia.',
    ],
    skills: [
      'Gestão de Alto Fluxo',
      'Operação Multifuncional',
      'Porcionamento & Controle',
      'Atendimento Receptivo',
      'Consistência & Processos',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id='experiencia' className='mx-auto max-w-6xl py-20 md:py-28'>
      <div className='rule-line mb-10'>
        <h2>Trajetória, Versatilidade & Processos</h2>
        <div className='mt-4 max-w-3xl space-y-3'>
          <p className='font-medium italic'>
            "Servir bem é uma questão de atitude; alimentar bem é uma vocação de
            afeto."
          </p>
          <p>
            Minha trajetória combina a disciplina de quem encara o alto fluxo
            com sorriso no rosto e a sensibilidade de quem transforma
            ingredientes em momentos de união. Seja gerenciando processos com
            precisão ou temperando a vida com sabor, entrego sempre o meu
            melhor.
          </p>
        </div>
      </div>

      <div className='mt-12 space-y-8'>
        {experiencias.map((exp) => (
          <article
            key={`${exp.cargo}-${exp.empresa}`}
            className='hover:border-border/80 group relative grid gap-6 rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg md:grid-cols-[180px_1fr]'
          >
            <div className='border-border/50 flex flex-col justify-between gap-2 border-b pb-4 md:border-b-0 md:pb-0'>
              <span className='caption my-0'>{exp.periodo}</span>
              <span className='inline-self-start rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground md:mt-2'>
                {exp.categoria}
              </span>
            </div>

            <div>
              <h3>{exp.cargo}</h3>
              <p className='mt-1 text-sm font-medium'>{exp.empresa}</p>
              <p className='mt-4 text-sm font-normal italic'>
                "{exp.descricao}"
              </p>

              <ul className='mt-5 space-y-2.5 text-sm'>
                {exp.pontos.map((ponto, idx) => (
                  <li key={idx} className='flex items-start gap-3'>
                    <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-soft' />
                    <span>{ponto}</span>
                  </li>
                ))}
              </ul>

              <div className='border-border/40 mt-6 border-t pt-4'>
                <span className='caption'>Skills & Competências Chave:</span>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className='rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium transition-colors hover:bg-accent'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
