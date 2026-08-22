import { Photo } from '@/components/photo';
import { PerfilTabs } from '@/components/perfil-tabs';
import { ExperienceSection } from '@/components/sections/experience-section';
import { EducationSection } from '@/components/sections/education-section';
import { ThemeToggle } from '@/components/toggle-theme';

const WHATSAPP =
  'https://wa.me/5513991270376?text=Ol%C3%A1%20Monique%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.';

export default function Page() {
  return (
    <main className='min-h-screen'>
      {/* HERO */}
      <section className='relative overflow-hidden bg-ink text-primary-foreground'>
        <div className='surface-pastel absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-20 blur-3xl' />
        <div className='relative mx-auto grid max-w-6xl gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28'>
          <div>
            <span className='caption text-nude/80 max-sm:text-center'>
              Itanhaém — SP
            </span>
            <h1 className='mt-6 text-start text-nude'>
              Monique da Silva Martins
            </h1>
            <p className='mt-5 text-center text-rose-soft'>
              Recepcionista · Atendimento ao Cliente · Paixão por Gastronomia
            </p>
            <p className='mt-8 max-w-xl text-left font-display text-2xl leading-snug text-nude md:text-3xl'>
              “Conectando pessoas, oferecendo suporte e entregando excelência —
              seja na linha de frente do atendimento ou à mesa, com comida que
              aconchega.”
            </p>
            <div className='mt-10 flex flex-wrap gap-3'>
              <a
                href={WHATSAPP}
                target='_blank'
                rel='noopener noreferrer'
                className='primary-button'
              >
                Falar no WhatsApp
              </a>
              <a href='#perfil' className='secondary-button'>
                Ver perfis
              </a>
            </div>
          </div>
          <Photo
            src='/photos/0016D70A-0015.jpg'
            alt='Monique da Silva Martins em retrato profissional'
            className='shadow-elegant aspect-[4/5] w-full'
          />
        </div>
      </section>

      {/* SOBRE / TABS DE PERFIL */}
      <section id='perfil' className='mx-auto max-w-6xl py-20 md:py-28'>
        <div className='text-center'>
          <span className='caption'>Do atendimento à gastronomia</span>
          <h2 className='mx-auto mt-4 max-w-2xl text-center'>
            Duas vertentes, uma mesma essência: cuidar de pessoas
          </h2>
        </div>
        <PerfilTabs />
      </section>

      {/* GALERIA GASTRONÔMICA */}
      <section className='bg-secondary/60 py-20 md:py-24'>
        <div className='mx-auto max-w-6xl'>
          <div className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end'>
            <div className='rule-line'>
              <h2>À mesa com a Monique</h2>
              <p className='mt-3 text-left'>
                Momentos doces, salgados e cheios de afeto — a gastronomia como
                extensão do cuidado com as pessoas.
              </p>
            </div>
          </div>

          <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <Photo
              src='/photos/20230730_223003.jpg'
              alt='Momento em família com travessa de brownies caseiros'
              className='shadow-elegant aspect-[4/3]'
              caption='Brownies caseiros em família'
            />
            <Photo
              src='/photos/20211106_225938.jpg'
              alt='Doces artesanais decorados com estrelas e corações'
              className='shadow-elegant aspect-[4/3]'
              caption='Doces artesanais decorados'
            />
            <Photo
              src='/photos/20210509_145235.jpg'
              alt='Monique na cozinha preparando sobremesas com um sorriso acolhedor'
              className='shadow-elegant aspect-[4/3]'
              caption='Na cozinha, com sorriso e carinho'
            />
          </div>
        </div>
      </section>

      {/* GALERIA PESSOAL */}
      <section className='py-20 md:py-24'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='rule-line'>Um pouco de mim</h2>
          <div className='mt-10 grid gap-6 sm:grid-cols-2'>
            <Photo
              src='/photos/0016D6FD-0002.jpg'
              alt='Monique em ensaio pessoal ao lado da família'
              className='shadow-elegant aspect-[4/3]'
              caption='Família'
            />
            <div className='space-y-5'>
              <p>
                Por trás de cada conquista e de cada jornada diária, existe a
                minha maior força:
                <strong> a minha família</strong>. Me sinto uma mãe
                profundamente realizada e tenho um orgulho imenso do meu marido.
                Essa rede de amor e parceria é o motor que me impulsiona a
                crescer, evoluir e buscar sempre a minha melhor versão.
              </p>
              <p>
                Para mim, cuidar das pessoas vai muito além da rotina
                profissional — é uma vocação de vida. Seja reunindo a família ao
                redor da mesa para preparar refeições afetuosas e cheias de
                sabor, ou alimentando a vontade contínua de aprender, o cuidado
                é a minha principal marca.
              </p>
              <p>
                É movida por esse propósito que nutro um grande sonho para o
                futuro: cursar a faculdade de <strong>Podologia</strong>, com
                foco especial na <strong>Podologia Infantil</strong>. Unir a
                atenção à saúde, a delicadeza no tratamento e o carinho com os
                pequenos é o caminho onde enxergo o próximo capítulo da minha
                missão de servir.
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
      <section id='contato' className='mx-auto max-w-6xl py-20 md:py-28'>
        <div className='surface-pastel rounded-3xl p-10 md:p-16'>
          <h2 className='text-ink'>Vamos conversar</h2>
          <p className='text-ink/70 mt-4 max-w-lg'>
            Disponível para oportunidades em recepção, atendimento ao cliente e
            gastronomia na Baixada Santista.
          </p>
          <div className='flex w-full justify-end'>
            <a
              href={WHATSAPP}
              target='_blank'
              rel='noopener noreferrer'
              className='flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110'
              aria-label='Contato via WhatsApp'
            >
              <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M20.52 3.48A11.92 11.92 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.12 1.6 5.91L0 24l6.27-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.1-1.39l-.36-.21-3.72.96.99-3.63-.24-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.27-7.05c-.29-.14-1.72-.84-1.98-.94-.27-.1-.47-.14-.66.14-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.14-1.24-.46-2.37-1.47a8.77 8.77 0 0 1-1.63-2.03c-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.2-.29.29-.48.1-.2.05-.37-.02-.51-.07-.14-.66-1.59-.9-2.18-.24-.57-.49-.49-.66-.5h-.56c-.2 0-.52.07-.8.37-.29.29-1.04 1.02-1.04 2.48 0 1.45 1.06 2.85 1.2 3.05.14.2 2.1 3.21 5.09 4.5.71.31 1.26.5 1.69.64.71.22 1.36.19 1.87.12.57-.08 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.37-.07-.14-.26-.2-.55-.34z' />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className='border-t border-border py-10'>
        <div className='mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm sm:flex-row sm:items-center sm:justify-between'>
          <p>Monique da Silva Martins</p>
          <span>Recepcionista · Atendimento · Gastronomia · Itanhaém — SP</span>
        </div>
      </footer>
    </main>
  );
}
