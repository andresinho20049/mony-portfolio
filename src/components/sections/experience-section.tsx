type Experiencia = {
  periodo: string;
  cargo: string;
  empresa: string;
  descricao: string;
  pontos: string[];
  skills: string[];
  categoria:
    | 'Atendimento & Operação'
    | 'Gastronomia & Produção'
    | 'Gestão de Linha de Frente';
  destaque?: string;
  informal?: boolean;
};

const experiencias: Experiencia[] = [
  {
    periodo: '2016 — 2020',
    cargo: 'Operadora de Caixa, Multifuncional & Instrutora',
    empresa: 'Kalles Comércios (Giraffas — Hipermercado Extra Taboão)',
    categoria: 'Atendimento & Operação',
    destaque:
      '4 anos lidando com alto fluxo e treinamento de novos contratados',
    descricao:
      'Quatro anos de intenso aprendizado em uma das praças de alimentação mais movimentadas da região. Período de grande amadurecimento encarando picos diários, horário de almoço do hipermercado, Black Friday e Aniversários da Rede e da Sede.',
    pontos: [
      'Preparação e Treinamento de Equipes: Participação ativa e atuações diretas no treinamento, acompanhamento e integração de novos colaboradores contratados.',
      'Rotatividade e Flexibilidade Operacional: Rotação constante de funções como Operadora de Caixa, Chapeira, Cozinha e Balcão (atendimento, montagem de bandejas e sobremesas).',
      'Gestão de Fluxo e Calma sob Pressão: Agilidade no caixa e organização conjunta com a equipe para manter a qualidade no atendimento nos dias de maior correria.',
      'Atendimento Receptivo: Condução de situações difíceis no balcão com paciência, auxílio na organização das filas e apresentação ativa das sugestões do dia.',
    ],
    skills: [
      'Operação de Caixa & Valores',
      'Treinamento de Novos Funcionários',
      'Atendimento Receptivo ao Cliente',
      'Resiliência sob Pressão (Black Friday)',
      'Trabalho em Equipe',
    ],
  },
  {
    periodo: '2025',
    cargo: 'Auxiliar de Cozinha de Alta Demanda',
    empresa: 'Padaria & Restaurante Pag&Pão (Unidade Gaivotas)',
    categoria: 'Gastronomia & Produção',
    destaque: 'Atuação na Inauguração da Sede com filas de quarteirão',
    descricao:
      'Experiência marcante de trabalho focado na cozinha durante a inauguração do local. Responsável pela rotação entre praças e pela entrega de comida caseira de qualidade.',
    pontos: [
      'Domínio de Diferentes Praças: Rotação ágil entre preparação de saladas, operação de chapa, corte de carnes/insumos e montagem de pratos.',
      'Diversidade de Cardápio: Preparo de pratos comerciais (PF, à la carte e self-service), variando entre culinária nordestina, feijoada e frutos do mar (peixe assado/frito e lula).',
      'Agilidade em Reposição: Manutenção do padrão visual, frescor e agilidade na reposição das travessas nos horários de maior pico de clientes.',
    ],
    skills: [
      'Rotação de Praças na Cozinha',
      'Culinária Caseira & Frutos do Mar',
      'Higiene e Segurança Alimentar',
      'Agilidade em Grandes Eventos',
    ],
  },
  {
    periodo: '2025 - 2026',
    cargo: 'Liderança de Balcão & Gestão de Quiosque',
    empresa: 'Restaurante Bom Ambiente & Quiosque (Praia do Cibratel I)',
    categoria: 'Gestão de Linha de Frente',
    destaque: 'Responsável direta na ausência da liderança superior',
    descricao:
      'Atuação prática em ambiente familiar praiano. Período em que desenvolvi forte senso de responsabilidade, assumindo o quiosque e cuidando da linha de frente.',
    pontos: [
      'Responsável pelo Local: Gestão presencial do quiosque quando a superior não estava presente, assumindo o balcão e a coordenação geral do ambiente.',
      'Distribuição de Atividades: Organização das tarefas diárias da equipe de apoio e controle dos pedidos e comandas de mesas.',
      'Atendimento e Fechamento de Contas: Atendimento direto aos clientes no balcão e atendimento na areia quando necessário para cobrança e fechamento de comanda.',
    ],
    skills: [
      'Liderança de Equipe Prática',
      'Gerenciamento de Pedidos & Mesas',
      'Cobrança & Fechamento de Contas',
      'Proatividade e Autonomia',
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
            encarar o alto fluxo e compromisso para liderar pelo exemplo."
          </p>
          <p>
            Minha caminhada reúne a resiliência de quem trabalhou anos em praças
            de alimentação movimentadas, a versatilidade de gerenciar rotinas de
            cozinha e o preparo para liderar, treinar novos colegas e garantir o
            melhor atendimento.
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
              <h3 className='text-xl font-bold text-foreground transition-colors group-hover:text-primary'>
                {exp.cargo}
              </h3>
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
