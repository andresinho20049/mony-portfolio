type Experiencia = {
  periodo: string;
  cargo: string;
  empresa: string;
  descricao: string;
  pontos: string[];
  skills: string[];
  categoria:
    'Atendimento & Operação' | 'Gastronomia & Produção' | 'Atendimento & Caixa';
  destaque?: string;
  informal?: boolean;
};

const experiencias: Experiencia[] = [
  {
    periodo: '2016 — 2020',
    cargo: 'Operadora de Caixa & Atendimento Multifuncional',
    empresa: 'Kalles Comércios (Giraffas — Hipermercado Extra Taboão)',
    categoria: 'Atendimento & Operação',
    destaque:
      '4 anos lidando com alto fluxo diário e picos intensos de praça de alimentação',
    descricao:
      'Quatro anos de intenso aprendizado em uma das praças de alimentação mais movimentadas da região. Vivência prática encarando com calma e agilidade picos diários no horário de almoço, Black Friday e comemorações de Aniversário da Sede.',
    pontos: [
      'Operação e Agilidade no Caixa: Registros rápidos, controle de valores, recebimentos e atendimento cortês garantindo a satisfação do cliente mesmo sob forte pressão.',
      'Rotatividade Operacional: Facilidade para atuar onde a demanda exigia, transitando entre caixa, balcão de atendimento, montagem de bandejas e apoio no preparo de pratos e sobremesas.',
      'Resiliência em Dias Caóticos: Manutenção da organização, calma e ritmo acelerado durante picos de vendas e grandes datas promocionais de shopping.',
      'Acolhimento e Empatia: Atendimento humanizado no balcão, orientando clientes na escolha dos pedidos e auxiliando na organização ágil das filas.',
    ],
    skills: [
      'Operação de Caixa & Abertura/Fechamento',
      'Atendimento Receptivo ao Cliente',
      'Agilidade sob Pressão (Black Friday)',
      'Versatilidade Operacional',
      'Trabalho em Equipe & Harmonia',
    ],
  },
  {
    periodo: '2025',
    cargo: 'Auxiliar de Cozinha & Preparo Gastronômico',
    empresa: 'Padaria & Restaurante Pag&Pão (Unidade Gaivotas)',
    categoria: 'Gastronomia & Produção',
    destaque: 'Vivência prática na Inauguração da Sede com filas de quarteirão',
    descricao:
      'Experiência marcante e intensa na cozinha durante a inauguração do restaurante. Trabalho focado na agilidade das praças e no cuidado com a entrega do tempero caseiro.',
    pontos: [
      'Atuação Rotativa em Praças: Preparo e organização de saladas, operação de chapa, corte de carnes e insumos e montagem caprichada dos pratos.',
      'Variedade e Culinária Afetiva: Apoio no preparo de cardápios comerciais (PF, self-service e à la carte), incluindo feijoada, comida nordestina e frutos do mar (peixes e lula).',
      'Ritmo e Reposição Contínua: Agilidade e olhar atento para a reposição rápida das travessas no buffet, garantindo o padrão visual e frescor durante o alto movimento.',
    ],
    skills: [
      'Preparo & Montagem de Pratos',
      'Atuação Multipraças na Cozinha',
      'Tempero Caseiro & Frutos do Mar',
      'Higiene & Organização Alimentar',
    ],
  },
  {
    periodo: '2025 - 2026',
    cargo: 'Operadora de Balcão, Caixa & Atendimento',
    empresa: 'Restaurante Bom Ambiente & Quiosque (Praia do Cibratel I)',
    categoria: 'Atendimento & Caixa',
    destaque: 'Experiência prática e autônoma de alta temporada na praia',
    descricao:
      'Vivência prática e marcante em ambiente praiano de grande rotação. Período em que assumi com responsabilidade a linha de frente, garantindo o fluxo contínuo de pedidos e o bom atendimento aos clientes.',
    pontos: [
      'Gerenciamento de Balcão e Caixa: Responsabilidade total pelo fechamento de comandas, cobrança e organização direta do balcão de atendimento.',
      'Atendimento e Apoio na Areia: Atenção aos clientes do quiosque, organização dos pedidos de mesas e cobranças externas com agilidade e simpatia.',
      'Rotina e Organização Diária: Autonomia para manter o ambiente sempre pronto, limpo e abastecido para encarar os picos do final de ano e alta temporada.',
    ],
    skills: [
      'Gerenciamento de Balcão & Caixa',
      'Atendimento de Alta Temporada',
      'Abertura & Fechamento de Comandas',
      'Autonomia e Pontualidade',
    ],
    informal: true,
  },
];

export function ExperienceSection() {
  return (
    <section id='experiencia' className='mx-auto max-w-6xl px-6 py-20 md:py-28'>
      <div className='rule-line mb-12'>
        <h2 className='text-3xl font-bold tracking-tight text-foreground md:text-4xl'>
          Trajetória, Resiliência e Experiência Prática
        </h2>
        <div className='mt-4 space-y-3 text-muted-foreground'>
          <p className='text-center text-lg font-medium italic tracking-tighter text-foreground'>
            "Experiência adquirida no ritmo real da linha de frente: garra para
            encarar o alto fluxo e dedicação a cada atendimento."
          </p>
          <p>
            Minha caminhada reúne a resiliência de quem atuou anos em praças de
            alimentação movimentadas, a versatilidade operacional na cozinha e a
            agilidade prática no gerenciamento de balcão e caixa em momentos de
            alto movimento.
          </p>
        </div>
      </div>

      <div className='space-y-8'>
        {experiencias.map((exp) => (
          <article
            key={`${exp.cargo}-${exp.empresa}`}
            className={`hover:border-primary/50 group relative grid gap-6 rounded-2xl border border-border ${exp.informal ? 'bg-card-secondary' : 'bg-card'} p-6 transition-all hover:shadow-md md:grid-cols-[200px_1fr] md:p-8`}
          >
            {/* Esquerda: Período e Badges */}
            <div className='border-border/60 flex flex-col justify-between gap-3 border-b pb-4 md:border-b-0 md:pb-0'>
              <div>
                <span className='caption my-0 font-bold text-foreground'>
                  {exp.periodo}
                </span>
                <span className='mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground'>
                  {exp.categoria}
                </span>
              </div>
              {exp.destaque && (
                <span className='rounded-lg border border-rose-200 bg-rose-50 p-2 text-xs font-medium text-rose-600 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-300'>
                  ⭐ {exp.destaque}
                </span>
              )}
            </div>

            {/* Direita: Conteúdo */}
            <div>
              <div className='flex flex-wrap items-center gap-2'>
                <h3 className='text-xl font-bold text-foreground transition-colors group-hover:text-primary'>
                  {exp.cargo}
                </h3>
                {exp.informal && (
                  <span className='bg-muted/60 rounded-md border border-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground'>
                    Vivência Prática de Mercado
                  </span>
                )}
              </div>
              <p className='mt-1 text-sm font-semibold text-muted-foreground'>
                {exp.empresa}
              </p>

              <p className='text-foreground/80 bg-accent/30 mt-3 rounded-lg border-l-2 border-primary p-3 text-sm italic leading-relaxed'>
                "{exp.descricao}"
              </p>

              <ul className='mt-4 space-y-2.5 text-sm text-muted-foreground'>
                {exp.pontos.map((ponto, idx) => (
                  <li key={idx} className='flex items-start gap-2.5'>
                    <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary' />
                    <span>{ponto}</span>
                  </li>
                ))}
              </ul>

              <div className='border-border/60 mt-6 border-t pt-4'>
                <span className='mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground'>
                  Principais Competências Aplicadas:
                </span>
                <div className='flex flex-wrap gap-2'>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className='rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-secondary'
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
