'use client';

import { useState } from 'react';

const perfilTabs = [
  { id: 'profissional', label: 'Perfil Profissional' },
  { id: 'gastronomia', label: 'Paixão por Comida' },
] as const;

type TabId = (typeof perfilTabs)[number]['id'];

export function PerfilTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('profissional');

  return (
    <div className='mt-12'>
      {/* Controles das Tabs */}
      <div className='flex justify-center'>
        <div className='inline-flex rounded-full border border-border bg-muted p-1.5'>
          {perfilTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={
                'rounded-full px-6 py-3 text-sm font-medium transition-all ' +
                (activeTab === tab.id
                  ? 'bg-ink text-primary shadow-sm'
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
        <div className='mt-14 grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-start'>
          <div className='surface-pastel rounded-3xl p-8'>
            <span className='caption text-ink/60'>Perfil Profissional</span>
            <ul className='mt-6 space-y-4 text-ink'>
              <li className='border-ink/10 border-b pb-4'>
                Gestão de fluxo de pessoas em ambientes de alta demanda
              </li>
              <li className='border-ink/10 border-b pb-4'>
                Escuta ativa e resolução de conflitos com postura calma
              </li>
              <li className='border-ink/10 border-b pb-4'>
                Organização administrativa e atenção aos detalhes
              </li>
              <li>Postura acolhedora e ética na linha de frente</li>
            </ul>
          </div>
          <div className='rule-line'>
            <h2>Excelência no atendimento</h2>
            <div className='mt-6 space-y-5'>
              <p>
                Sou uma profissional adaptável, flexível e com muita facilidade
                de aprendizado. Gosto de ambientes onde o contato com pessoas é
                o centro do trabalho — é ali que consigo unir organização e
                cuidado no atendimento.
              </p>
              <p>
                Foram <strong>quatro anos na rede Giraffas</strong>, onde
                desenvolvi versatilidade na rotina diária: circulei por
                diferentes funções, aprendi a gerenciar o fluxo de clientes em
                horários de pico e a manter a comunicação alinhada entre equipe
                e público.
              </p>
              <p>
                Hoje direciono essa bagagem para a recepção e o atendimento ao
                cliente, onde receber bem, resolver com agilidade e manter tudo
                organizado fazem toda a diferença.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Conteúdo Tab Gastronomia */}
      {activeTab === 'gastronomia' && (
        <div className='mt-14 grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-start'>
          <div className='rule-line md:order-1'>
            <h2>Comida que aconchega</h2>
            <div className='mt-6 space-y-5'>
              <p>
                A cozinha é um lugar de encontro. É onde a prática se transforma
                em afeto, onde cada ingrediente carrega cuidado e onde a mesa
                vira cenário de união. Essa é a forma que encontro de servir:
                com presença, autenticidade e carinho.
              </p>
              <p>
                Minha trajetória no setor gastronômico começou na{' '}
                <strong>rede Giraffas</strong>, circulando por funções no salão
                e entendendo o ritmo de um restaurante de alto movimento.
                Depois, como{' '}
                <strong>Auxiliar de Cozinha na Padaria Peg Pão</strong>,
                aperfeiçoei a organização da produção, os padrões de higiene e a
                comunicação constante com o balcão.
              </p>
              <p>
                Seja preparando doces delicados ou pratos salgados cheios de
                tempero, levo para a cozinha a mesma essência que levo ao
                atendimento: a de cuidar bem das pessoas.
              </p>
            </div>
          </div>
          <div className='surface-pastel rounded-3xl p-8 md:order-2'>
            <span className='caption text-ink/60'>Paixão por Comida</span>
            <ul className='mt-6 space-y-4 text-ink'>
              <li className='border-ink/10 border-b pb-4'>
                Versatilidade entre doces delicados e salgados cheios de
                personalidade
              </li>
              <li className='border-ink/10 border-b pb-4'>
                Experiência prática em produção de padaria e restaurante
              </li>
              <li className='border-ink/10 border-b pb-4'>
                Preparo com atenção à higiene, apresentação e sabor
              </li>
              <li>Comida feita para reunir, aconchegar e criar memórias</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
