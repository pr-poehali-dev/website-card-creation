import Icon from '@/components/ui/icon';

const benefits = [
  {
    icon: 'FileText',
    title: 'Персональная подборка',
    text: 'Файл с объектами под ваш запрос — ссылки на каждый объект и информация о застройщике.',
  },
  {
    icon: 'Percent',
    title: 'Условия по финансам',
    text: 'Актуальная информация по ипотеке, рассрочке и акциям индивидуально по каждому ЖК.',
  },
  {
    icon: 'MessageCircleQuestion',
    title: 'Ответы на вопросы',
    text: 'Всё, что вы хотели знать о недвижимости, но боялись спросить. У нас есть ответы.',
  },
];

const steps = [
  { n: '01', title: 'Запрос', text: 'Вы рассказываете о своей задаче и пожеланиях.' },
  { n: '02', title: 'Разбор', text: 'Раскладываем ситуацию на составные части.' },
  { n: '03', title: 'Подборка', text: 'Готовим файл с объектами и условиями под вас.' },
  { n: '04', title: 'Решение', text: 'Приходим к логичному результату в кратчайший срок.' },
];

const guarantees = [
  'Ни к чему не обязываем',
  'Не собираем персональные данные',
  'Без холодных звонков',
  'Без навязчивого обзвона',
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[hsl(var(--estate-ink))] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl animate-fade-in">
        <article className="relative overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)]">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[hsl(var(--estate))]/10 blur-2xl" />

          <header className="relative px-8 pt-10 pb-8 sm:px-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--estate))]/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--estate))]">
              <Icon name="Sparkles" size={14} />
              Бесплатный подбор
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl font-semibold leading-[0.95]">
              Ваша недвижимость <span className="italic text-[hsl(var(--estate))]">здесь</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-black/55 max-w-md">
              Недвижимость для всего по лучшим ценам. Все виды финансовых услуг для вас и вашего бизнеса.
            </p>
          </header>

          <div className="relative px-8 sm:px-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
          </div>

          <section className="relative px-8 py-9 sm:px-12">
            <h2 className="font-display text-2xl font-semibold mb-6">Что вы получите</h2>
            <div className="space-y-5">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 group">
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[hsl(var(--estate))]/10 text-[hsl(var(--estate))] transition-colors group-hover:bg-[hsl(var(--estate))] group-hover:text-white">
                    <Icon name={b.icon} size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[15px]">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-black/55">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="relative bg-[#FAF8F4] px-8 py-9 sm:px-12">
            <h2 className="font-display text-2xl font-semibold mb-6">Как мы работаем</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              {steps.map((s) => (
                <div key={s.n}>
                  <span className="font-display text-3xl font-semibold text-[hsl(var(--estate))]/40">{s.n}</span>
                  <h3 className="mt-1 font-semibold text-[15px]">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-black/55">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm leading-relaxed text-black/60">
              Мы делаем всё для вашего спокойствия и комфорта, чтобы вы чувствовали себя уверенно на каждом этапе работы с нами. Недвижимость с нами — это просто.
            </p>
          </section>

          <section className="relative px-8 py-8 sm:px-12">
            <div className="flex flex-wrap gap-2.5">
              {guarantees.map((g) => (
                <span
                  key={g}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/8 bg-white px-3.5 py-1.5 text-[13px] font-medium text-black/65"
                >
                  <Icon name="Check" size={14} className="text-[hsl(var(--estate))]" />
                  {g}
                </span>
              ))}
            </div>
          </section>

          <footer className="relative px-8 pb-10 sm:px-12">
            <button className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[hsl(var(--estate-ink))] px-6 py-4 text-base font-semibold text-white transition-all hover:bg-[hsl(var(--estate))] hover:shadow-[0_16px_40px_-12px_hsl(var(--estate)/0.6)]">
              Заказать бесплатную подборку
              <Icon name="ArrowRight" size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-3 text-center text-xs text-black/40">
              Подробнее о нас — на нашем сайте. Структура работы изложена простым языком.
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Index;
