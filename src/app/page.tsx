import { Photo } from '@/components/photo';
import { PerfilTabs } from '@/components/perfil-tabs';
import { ExperienceSection } from '@/components/sections/experience-section';
import { EducationSection } from '@/components/sections/education-section';

const WHATSAPP =
  'https://wa.me/5513991270376?text=Ol%C3%A1%20Monique%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.';

export default function Page() {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      {/* HERO SECTION */}
      <section className='relative overflow-hidden bg-ink text-primary-foreground'>
        <div className='surface-pastel absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-20 blur-3xl' />
        <div className='relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28'>
          <div>
            <span className='caption text-nude/80 block max-sm:text-center'>
              Itanhaém — SP · Baixada Santista
            </span>
            <h1 className='mt-4 text-start text-4xl font-bold tracking-tight text-nude sm:text-5xl'>
              Monique da Silva Martins
            </h1>
            <p className='mt-3 text-start text-lg font-medium text-rose-soft'>
              Atendimento ao Cliente · Operação sob Alta Demanda · Gastronomia
            </p>
            <p className='text-nude/90 mt-6 max-w-xl text-left font-display text-xl leading-relaxed md:text-2xl'>
              “Amo cuidar da minha família e esse zelo se reflete diretamente na
              forma como trabalho. Quando falamos de atendimento ao cliente, o
              cuidado genuíno e a dedicação são os maiores diferenciais.”
            </p>
            <div className='mt-8 flex flex-wrap gap-4'>
              <a href='#perfil' className='primary-button'>
                Conhecer minha trajetória
              </a>
              <a
                href={WHATSAPP}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-3 rounded-full bg-green-600 px-6 py-3 font-medium text-white no-underline shadow-md transition-all hover:bg-green-700 hover:no-underline hover:shadow-lg'
              >
                <svg className='h-5 w-5 fill-current' viewBox='0 0 24 24'>
                  <path d='M20.52 3.48A11.92 11.92 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.12 1.6 5.91L0 24l6.27-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.1-1.39l-.36-.21-3.72.96.99-3.63-.24-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10zm5.27-7.05c-.29-.14-1.72-.84-1.98-.94-.27-.1-.47-.14-.66.14-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.14-1.24-.46-2.37-1.47a8.77 8.77 0 0 1-1.63-2.03c-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.2-.34.29-.48.1-.2.05-.37-.02-.51-.07-.14-.66-1.59-.9-2.18-.24-.57-.49-.49-.66-.5h-.56c-.2 0-.52.07-.8.37-.29.29-1.04 1.02-1.04 2.48 0 1.45 1.06 2.85 1.2 3.05.14.2 2.1 3.21 5.09 4.5.71.31 1.26.5 1.69.64.71.22 1.36.19 1.87.12.57-.08 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.37-.07-.14-.26-.2-.55-.34z' />
                </svg>
                <span className='no-underline'>WhatsApp</span>
              </a>
            </div>
          </div>
          <Photo
            src='/photos/0016D70A-0015.jpg'
            alt='Monique da Silva Martins em retrato profissional'
            className='shadow-elegant aspect-[4/5] w-full rounded-2xl object-cover'
          />
        </div>
      </section>

      {/* SOBRE / TABS DE PERFIL */}
      <section id='perfil' className='mx-auto max-w-6xl px-6 py-20 md:py-28'>
        <div className='text-center'>
          <span className='caption font-semibold uppercase tracking-wider text-primary'>
            Resiliência, Trabalho em Equipe & Potencial de Gestão
          </span>
          <h2 className='mx-auto mt-3 max-w-4xl text-center text-4xl font-bold tracking-wider md:text-5xl'>
            Duas vertentes, uma mesma essência: cuidar de pessoas
          </h2>
        </div>
        <PerfilTabs />
      </section>

      {/* GALERIA GASTRONÔMICA */}
      <section className='bg-secondary/40 px-6 py-20 md:py-24'>
        <div className='mx-auto max-w-6xl'>
          <div className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end'>
            <div className='rule-line max-w-2xl'>
              <h2 className='text-3xl font-bold md:text-4xl'>
                À mesa com a Monique
              </h2>
              <p className='mt-3 text-left text-muted-foreground'>
                Em casa, cozinhar para minha família é minha paixão e hobbie. No
                trabalho, essa mesma dedicação se traduz em capricho, agilidade
                e tempero marcante.
              </p>
            </div>
          </div>

          <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <Photo
              src='/photos/20230730_223003.jpg'
              alt='Momento em família com travessa de brownies caseiros'
              className='shadow-elegant aspect-[4/3] rounded-xl'
              caption='Brownies caseiros preparados com carinho'
            />
            <Photo
              src='/photos/20211106_225938.jpg'
              alt='Doces artesanais decorados com estrelas e corações'
              className='shadow-elegant aspect-[4/3] rounded-xl'
              caption='Atenção aos detalhes em doces decorados'
            />
            <Photo
              src='/photos/20210509_145235.jpg'
              alt='Monique na cozinha preparando sobremesas com um sorriso acolhedor'
              className='shadow-elegant aspect-[4/3] rounded-xl'
              caption='Na cozinha, unindo sorriso, agilidade e dedicação'
            />
          </div>
        </div>
      </section>

      {/* HISTÓRIA, FAMÍLIA E UNIVERSO DE IDEIAS */}
      <section className='px-6 py-20 md:py-24'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='rule-line mb-10 text-3xl font-bold md:text-4xl'>
            Minha Base, Nossas Raízes e o Futuro
          </h2>
          <div className='grid items-center gap-10 lg:grid-cols-2'>
            <Photo
              src='/photos/0016D6FD-0002.jpg'
              alt='Monique em ensaio pessoal ao lado da família'
              className='shadow-elegant aspect-[4/4] w-full rounded-2xl'
              caption='A little bit about me'
            />
            <div className='space-y-5 text-base leading-relaxed text-muted-foreground'>
              <p>
                Abrir meu coração sobre quem sou exige coragem, mas minha
                verdadeira força vem da minha vulnerabilidade e da minha base.
                Me sinto uma mãe profundamente realizada e tenho um orgulho
                imenso da história que construí com meu esposo. Ele é um{' '}
                <strong className='text-foreground'>Software Engineer</strong>{' '}
                e, na nossa rotina diária, a curiosidade dele me contagiou.
                Adoro me perder nas nossas conversas sobre o "universo da TI" —
                navegando por design, áudio & visual e o complexo mundo dos
                bastidores que ele chama de <em>back-end</em>. Essa troca
                constante me ensinou a ver novos olhares, me encantei pelo mundo
                do videomaker.
              </p>
              <p>
                Encarar a vida real e o ritmo acelerado das operações nunca foi
                fácil, mas me trouxe algo precioso: a sabedoria da resiliência.
                Aprendi a transformar a correria em calmaria interior, mantendo
                a cabeça erguida, o sorriso sincero e o olhar humanizado para
                cada pessoa que cruza meu caminho.
              </p>
              <p>
                Movida por essa essência de servir e cuidar com integridade,
                guardo no peito um grande sonho: cursar a faculdade de{' '}
                <strong className='text-foreground'>Podologia</strong>, com foco
                em{' '}
                <strong className='text-foreground'>Podologia Infantil</strong>.
                Unir o conhecimento técnico, a saúde e o afeto no cuidado com os
                pequenos é o próximo capítulo onde quero colocar toda a minha
                dedicação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <ExperienceSection />

      {/* FORMAÇÃO */}
      <EducationSection />

      {/* CONTATO */}
      <section id='contato' className='mx-auto max-w-6xl px-6 py-20 md:py-28'>
        <div className='surface-pastel rounded-3xl border border-border bg-card p-8 shadow-sm md:p-14'>
          <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
            <div>
              <h2 className='text-3xl font-bold text-ink'>Vamos conversar?</h2>
              <p className='text-ink/80 mt-2 max-w-lg'>
                Disponível para oportunidades em Recepção, Atendimento ao
                Cliente, Operação de Balcão e Gastronomia na Baixada Santista.
              </p>
            </div>
            <a
              href={WHATSAPP}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-3 rounded-full bg-green-600 px-6 py-3 font-medium text-white no-underline shadow-md transition-all hover:bg-green-700 hover:no-underline hover:shadow-lg'
            >
              <svg className='h-5 w-5 fill-current' viewBox='0 0 24 24'>
                <path d='M20.52 3.48A11.92 11.92 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.12 1.6 5.91L0 24l6.27-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.1-1.39l-.36-.21-3.72.96.99-3.63-.24-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10zm5.27-7.05c-.29-.14-1.72-.84-1.98-.94-.27-.1-.47-.14-.66.14-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.14-1.24-.46-2.37-1.47a8.77 8.77 0 0 1-1.63-2.03c-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.2-.34.29-.48.1-.2.05-.37-.02-.51-.07-.14-.66-1.59-.9-2.18-.24-.57-.49-.49-.66-.5h-.56c-.2 0-.52.07-.8.37-.29.29-1.04 1.02-1.04 2.48 0 1.45 1.06 2.85 1.2 3.05.14.2 2.1 3.21 5.09 4.5.71.31 1.26.5 1.69.64.71.22 1.36.19 1.87.12.57-.08 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.37-.07-.14-.26-.2-.55-.34z' />
              </svg>
              <span className='no-underline'>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <footer className='bg-card/50 border-t border-border py-8'>
        <div className='mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between'>
          <p className='font-semibold text-foreground'>
            Monique da Silva Martins
          </p>
          <span>Atendimento ao Cliente · Gastronomia · Itanhaém — SP</span>
        </div>
      </footer>
    </main>
  );
}
