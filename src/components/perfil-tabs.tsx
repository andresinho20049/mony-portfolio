'use client';

import { useState } from 'react';

const perfilTabs = [
  { id: 'profissional', label: 'Postura Profissional & Liderança' },
  { id: 'gastronomia', label: 'Cozinha, Ritmo & Excelência' },
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
              Força, Afeto & Presença
            </span>
            <ul className='text-foreground/90 mt-4 space-y-4 text-sm font-medium md:text-base'>
              <li className='border-border/60 flex items-start gap-2.5 border-b pb-3'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  <strong>Acolhimento com autoridade:</strong> gentileza que
                  cativa o cliente e firmeza que segura a operação.
                </span>
              </li>
              <li className='border-border/60 flex items-start gap-2.5 border-b pb-3'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  <strong>Firmeza:</strong> serenidade e pulso firme para manter
                  a ordem quando a demanda transborda.
                </span>
              </li>
              <li className='border-border/60 flex items-start gap-2.5 border-b pb-3'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  <strong>Liderança pelo Exemplo:</strong> a humildade de quem
                  domina o chão de fábrica e a garra de quem ensina fazendo.
                </span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  <strong>O Cuidado como Padrão:</strong> o amor dedicado no lar
                  elevado ao nível máximo de excelência profissional.
                </span>
              </li>
            </ul>
          </div>

          <div className='rule-line'>
            <h2 className='text-2xl font-bold leading-tight text-foreground md:text-3xl'>
              A doçura de uma mãe que cuida, a garra de uma mulher que realiza
            </h2>
            <div className='mt-6 space-y-4 text-base leading-relaxed text-muted-foreground'>
              <p>
                Existe um pêndulo natural na minha vida: de um lado, a mãe doce,
                atenciosa e apaixonada por reunir a família ao redor da mesa com
                refeições feitas com afeto; do outro, a mulher guerreira,
                autêntica e de postura firme no mercado de trabalho. Uma faceta
                alimenta a outra.
              </p>
              <p>
                A mesma dedicação que coloco ao preparar cada refeição em casa é
                a que levo para o atendimento ao cliente e para a cozinha
                comercial. Foram{' '}
                <strong>quatro anos de Giraffas (Extra Taboão)</strong>,
                enfrentando picos de Black Friday, inaugurações e filas imensas.
                Aprendi no dia a dia o valor da humildade, do respeito e da
                união de equipe.
              </p>
              <p>
                Servir bem é uma vocação de carinho, mas gerenciar a linha de
                frente exige coragem e determinação. Seja no balcão, no caixa ou
                no comando da cozinha, entrego uma presença marcante: educada
                com as pessoas, comprometida com o trabalho e firme diante de
                qualquer desafio.
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
              Agilidade de cozinha industrial com a dedicação da culinária feita
              com propósito
            </h2>
            <div className='mt-6 space-y-4 text-base leading-relaxed text-muted-foreground'>
              <p>
                Cozinhar em casa para minha família é a minha paixão e expressão
                máxima de afeto. Levei essa mesma seriedade para a cozinha
                comercial, transformando o ato de preparar refeições em um
                compromisso diário com a excelência e o padrão de entrega.
              </p>
              <p>
                Na <strong>Pag&Pão (Unidade Gaivotas)</strong>, atuei sob a
                pressão real de uma inauguração com o quarteirão em fila. Fui o
                pilar operacional da cozinha, transitando com total agilidade
                entre todas as praças: salada, chapa, cortes e montagem diária
                do buffet e pedidos à la carte.
              </p>
              <p>
                Tenho pulso firme para manter a ordem, higienização rigorosa e
                sincronia absoluta com a equipe, garantindo pratos saborosos com
                o aconchego do tempero caseiro sem perder o ritmo exigido por um
                ambiente de alta rotação.
              </p>
            </div>
          </div>

          <div className='surface-pastel border-border/50 rounded-3xl border p-8 shadow-sm md:order-2'>
            <span className='caption mb-2 block font-bold uppercase tracking-wider text-primary'>
              Competência Técnica & Gestão de Praça
            </span>
            <ul className='text-foreground/90 mt-4 space-y-4 text-sm font-medium md:text-base'>
              <li className='border-border/60 flex items-start gap-2.5 border-b pb-3'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  Domínio pleno e rotativo de estações de produção e pré-preparo
                </span>
              </li>
              <li className='border-border/60 flex items-start gap-2.5 border-b pb-3'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  Raciocínio rápido e agilidade para reposições em horários de
                  pico
                </span>
              </li>
              <li className='border-border/60 flex items-start gap-2.5 border-b pb-3'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  Extrema disciplina com biossegurança, higienização e
                  desperdício zero
                </span>
              </li>
              <li className='flex items-start gap-2.5'>
                <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-primary' />
                <span>
                  Diversidade gastronômica com um repertório variado de pratos e
                  técnicas
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
