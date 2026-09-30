'use client';

import { useState } from 'react';

const perfilTabs = [
  { id: 'profissional', label: 'Postura Profissional & Adaptação' },
  { id: 'gastronomia', label: 'Cozinha, Ritmo & Paixão Culinária' },
] as const;

type TabId = (typeof perfilTabs)[number]['id'];

export function PerfilTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('profissional');

  return (
    <div className='mt-12'>
      {/* Controles das Tabs */}
      <div className='flex justify-center'>
        <div className='inline-flex rounded-full border border-border bg-muted p-1.5 shadow-inner'>
          {perfilTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={
                'rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ' +
                (activeTab === tab.id
                  ? 'bg-ink text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground')
              }
              aria-pressed={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Conteúdo Tab Profissional */}
      {activeTab === 'profissional' && (
        <div className='mt-14 grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start'>
          <div className='surface-pastel border-border/50 rounded-3xl border p-8 shadow-sm'>
            <span className='caption mb-2 block font-bold uppercase tracking-wider text-primary'>
              Força, Acolhimento & Compromisso
            </span>
            <ul className='text-foreground/90 mt-4 space-y-4 text-sm font-medium md:text-base'>
              <li className='border-border/60 flex items-start gap-2.5 border-b pb-3'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  <strong>Acolhimento com Presença:</strong> gentileza genuína
                  no atendimento e responsabilidade no fluxo diário.
                </span>
              </li>
              <li className='border-border/60 flex items-start gap-2.5 border-b pb-3'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  <strong>Adaptabilidade Versátil:</strong> facilidade para
                  integrar-se rapidamente a diferentes ambientes e equipes.
                </span>
              </li>
              <li className='border-border/60 flex items-start gap-2.5 border-b pb-3'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  <strong>Trabalho em Equipe:</strong> espírito colaborativo e
                  respeito mútuo em dias de ritmo intenso.
                </span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  <strong>Responsabilidade Total:</strong> atenção minuciosa na
                  operação de caixa e organização do ambiente.
                </span>
              </li>
            </ul>
          </div>

          <div className='rule-line'>
            <h2 className='text-2xl font-bold leading-tight text-foreground md:text-3xl'>
              A doçura de uma mãe que cuida, a dedicação de uma mulher que
              realiza
            </h2>
            <div className='mt-6 space-y-4 text-base leading-relaxed text-muted-foreground'>
              <p>
                Existe um equilíbrio natural na minha vida: de um lado, a mãe
                doce e dedicada; do outro, a mulher autêntica, responsável e
                muito comprometida no ambiente de trabalho. Essa união traz
                sensibilidade e firmeza para tudo o que faço.
              </p>
              <p>
                No{' '}
                <strong>
                  Restaurante Bom Ambiente & Quiosque (Praia do Cibratel I)
                </strong>
                , vivenciei uma das experiências mais marcantes da minha
                trajetória, onde assumi com total autonomia o gerenciamento do
                balcão e o controle rigoroso de caixa. Essa vivência reforçou
                minha atenção aos detalhes e o amor pelo contato direto com o
                público.
              </p>
              <p>
                Com passagem marcante pelo{' '}
                <strong>Giraffas (Extra Taboão)</strong> e facilidade em me
                adaptar a diferentes dinâmicas de time, levo um sorriso sincero,
                postura ética e prontidão para somar com qualquer equipe em dias
                de ritmo acelerado.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Conteúdo Tab Gastronomia */}
      {activeTab === 'gastronomia' && (
        <div className='mt-14 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start'>
          <div className='rule-line md:order-1'>
            <h2 className='text-2xl font-bold leading-tight text-foreground md:text-3xl'>
              Talento culinário, tempero afetivo e dedicação a cada preparo
            </h2>
            <div className='mt-6 space-y-4 text-base leading-relaxed text-muted-foreground'>
              <p>
                Cozinhar em casa para minha família é minha paixão e expressão
                máxima de afeto. Levo esse dom e amor pela gastronomia para a
                cozinha comercial, unindo o carinho do tempero caseiro à
                agilidade necessária do setor.
              </p>
              <p>
                Na <strong>Pag&Pão (Unidade Gaivotas)</strong>, demonstrei total
                versatilidade operacional ao atuar nas praças de salada, chapa,
                cortes e montagem diária do buffet e pedidos à la carte, sempre
                mantendo a harmonia e o trabalho alinhado com a equipe.
              </p>
              <p>
                Tenho facilidade para me adaptar a diferentes cozinhas e ritmos
                de trabalho, priorizando a higienização rigorosa, a apresentação
                cuidadosa dos pratos e o prazer de oferecer uma refeição
                saborosa e reconfortante.
              </p>
            </div>
          </div>

          <div className='surface-pastel border-border/50 rounded-3xl border p-8 shadow-sm md:order-2'>
            <span className='caption mb-2 block font-bold uppercase tracking-wider text-primary'>
              Aptidão Gastronômica & Ritmo
            </span>
            <ul className='text-foreground/90 mt-4 space-y-4 text-sm font-medium md:text-base'>
              <li className='border-border/60 flex items-start gap-2.5 border-b pb-3'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  Prática e agilidade no pré-preparo e rotatividade de estações
                </span>
              </li>
              <li className='border-border/60 flex items-start gap-2.5 border-b pb-3'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  Talento natural para o tempero caseiro e apresentação dos
                  pratos
                </span>
              </li>
              <li className='border-border/60 flex items-start gap-2.5 border-b pb-3'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  Extrema disciplina com biossegurança, higienização e
                  organização
                </span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  Facilidade para aprender novas receitas e integrar-se à rotina
                  da equipe
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
