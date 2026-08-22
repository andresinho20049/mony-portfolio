const cursos = [
  { nome: 'Gestão Empresarial', inst: 'All Net' },
  { nome: 'Informática Empresarial', inst: 'All Net' },
  { nome: 'Recepcionista', inst: 'Cursa / ABED' },
  { nome: 'Excel Básico', inst: 'Cursa / ABED' },
];

export function EducationSection() {
  return (
    <section id='formacao' className='mx-auto max-w-6xl py-20 md:py-28'>
      <div className='grid gap-14 md:grid-cols-2'>
        <div>
          <h2>Formação</h2>
          <div className='mt-8 rounded-2xl border border-border p-6'>
            <p className='text-lg font-medium'>Ensino Médio Completo</p>

            <span>E.E. Dr. Carlos Koch</span>
          </div>
        </div>
        <div>
          <h2>Cursos complementares</h2>
          <ul className='mt-8 space-y-4'>
            {cursos.map((c) => (
              <li
                key={c.nome}
                className='flex items-baseline justify-between gap-4 border-b border-border pb-4'
              >
                <span>{c.nome}</span>
                <span className='text-sm'>{c.inst}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
