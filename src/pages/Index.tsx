import Icon from '@/components/ui/icon';

const benefits = [
  {
    icon: 'FileText',
    title: 'Детальный отчёт',
    text: 'Подборка объектов под ваши индивидуальные требования. Каждый объект сопровождается прямыми ссылками и информацией о застройщике.',
  },
  {
    icon: 'Percent',
    title: 'Финансовые условия',
    text: 'Актуальные данные об ипотеке, программах рассрочки и спецпредложениях в каждом ЖК — адаптированные под ваш запрос.',
  },
  {
    icon: 'MessageCircleQuestion',
    title: 'Ответы на любые вопросы',
    text: 'Ответим на любые, даже самые нестандартные вопросы в сфере недвижимости, которые вы, возможно, стеснялись задать.',
  },
];

const steps = [
  { n: '01', title: 'Разбор ситуации', text: 'Помогаем вам разобраться в вашей ситуации.' },
  { n: '02', title: 'Структура запроса', text: 'Структурируем запрос на составные части.' },
  { n: '03', title: 'Подборка', text: 'Готовим отчёт с объектами и условиями под вас.' },
  { n: '04', title: 'Решение', text: 'Находим оптимальное решение в кратчайшие сроки.' },
];

const guarantees = [
  'Не накладываем обязательств',
  'Не запрашиваем личные данные',
  'Без холодных звонков',
  'Без навязчивого обзвона',
];

const pillars = [
  {
    icon: 'Palette',
    title: 'Цвет и свет',
    text: 'Спокойные пастельные тона способствуют релаксации, насыщенные — заряжают энергией. Естественное освещение оживляет пространство, делая его просторным и приятным.',
  },
  {
    icon: 'Layers',
    title: 'Материалы и текстуры',
    text: 'Дерево, камень, хлопок, лён — натуральные материалы придают тактильность и теплоту, создавая ощущение связи с природой. Каждый элемент подбирается тщательно.',
  },
  {
    icon: 'Minimize2',
    title: 'Порядок и минимализм',
    text: 'Чистота и организованность способствуют ясности ума. Уберите лишнее — и пространство заговорит. Хранение продумано так, чтобы нужное было под рукой.',
  },
  {
    icon: 'Heart',
    title: 'Личная история',
    text: 'Семейные фотографии, сувениры, предметы ручной работы — всё это придаёт интерьеру глубину и индивидуальность, превращая дом в место, наполненное смыслом.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[hsl(var(--estate-ink))] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl animate-fade-in space-y-5">

        {/* Карточка — сервис */}
        <article className="relative overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)]">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[hsl(var(--estate))]/10 blur-2xl" />

          <header className="relative px-8 pt-10 pb-8 sm:px-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--estate))]/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--estate))]">
              <Icon name="Sparkles" size={14} />
              Бесплатный подбор
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl font-semibold leading-[0.95]">
              Шаг навстречу <span className="italic text-[hsl(var(--estate))]">светлому горизонту</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-black/55 max-w-md">
              Сервис бесплатного поиска недвижимости. Наша миссия — лучший выбор жилья по самым выгодным ценам и полный спектр финансовых решений для частных лиц и предпринимателей.
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
            <h2 className="font-display text-2xl font-semibold mb-6">Наша цель — помочь вам</h2>
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
              Мы заботимся о вашем спокойствии и комфорте, чтобы вы чувствовали себя уверенно на каждом этапе нашего сотрудничества. С нами сделки с недвижимостью становятся проще.
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
              Узнать больше о нашей компании и принципах работы — на официальном сайте. Структура деятельности изложена максимально просто и понятно.
            </p>
          </footer>
        </article>

        {/* Блок — что такое гармония */}
        <article className="relative overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.12)] px-8 py-9 sm:px-12">
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[hsl(var(--estate))]/8 blur-2xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--estate))]/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--estate))] mb-5">
              <Icon name="Home" size={14} />
              Гармония пространства
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-4">
              Больше, чем просто интерьер
            </h2>
            <p className="text-[15px] leading-relaxed text-black/65 mb-4">
              Гармония пространства — это глубокое, интуитивное ощущение благополучия, которое пронизывает каждый уголок нашего дома и, как следствие, нашей души. Это место, где мы чувствуем себя в безопасности, где можем полностью расслабиться и восстановить силы, где вдохновение находит плодородную почву.
            </p>
            <p className="text-[15px] leading-relaxed text-black/65">
              Создание такой гармонии — это искусство, требующее вдумчивого подхода и понимания того, как окружающая среда влияет на наше психоэмоциональное состояние. Первый шаг — осознание своих потребностей. Ваш дом должен отражать вашу индивидуальность, ваши ценности и образ жизни.
            </p>
          </div>
        </article>

        {/* Блок — четыре принципа */}
        <article className="relative overflow-hidden rounded-[28px] bg-[hsl(var(--estate-ink))] border border-black/5 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.2)] px-8 py-9 sm:px-12">
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[hsl(var(--estate))]/20 blur-2xl" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-white mb-2">
              Четыре опоры уюта
            </h2>
            <p className="text-sm text-white/50 mb-7">Из чего складывается пространство мечты</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-3 group">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[hsl(var(--estate))] transition-colors group-hover:bg-[hsl(var(--estate))] group-hover:text-white">
                    <Icon name={p.icon} size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[14px] text-white">{p.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/55">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Блок — функциональность и здоровье */}
        <article className="relative overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.12)]">
          <div className="relative bg-[#FAF8F4] px-8 py-9 sm:px-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-4">
              Функциональность — часть <span className="italic text-[hsl(var(--estate))]">красоты</span>
            </h2>
            <p className="text-[15px] leading-relaxed text-black/65">
              Гармоничное пространство должно не только радовать глаз, но и быть удобным для жизни. Продуманная планировка, эргономика мебели, достаточное количество мест для хранения — когда каждая вещь на своём месте, вы чувствуете себя более собранным и продуктивным. Функциональность не противоречит эстетике, она является её неотъемлемой частью.
            </p>
          </div>
          <div className="relative px-8 sm:px-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
          </div>
          <div className="relative px-8 py-9 sm:px-12">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[hsl(var(--estate))]/10 text-[hsl(var(--estate))]">
                <Icon name="Brain" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-[15px] mb-2">Влияние на здоровье</h3>
                <p className="text-sm leading-relaxed text-black/60">
                  Влияние гармоничного пространства на физическое и ментальное здоровье неоспоримо. Дом, где царит уют и порядок, снижает уровень стресса, улучшает сон и повышает общую удовлетворённость жизнью. Наше подсознание реагирует на окружающую среду — и гармоничное пространство посылает позитивные сигналы, способствуя внутреннему равновесию.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Блок — финал */}
        <article className="relative overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.12)] px-8 py-9 sm:px-12">
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[hsl(var(--estate))]/8 blur-2xl" />
          <div className="relative">
            <Icon name="Compass" size={28} className="text-[hsl(var(--estate))]/60 mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-4">
              Путешествие к себе
            </h2>
            <p className="text-[15px] leading-relaxed text-black/65 mb-4">
              Мудрость в создании гармонии — в умении остановиться и насладиться процессом. Не стремитесь к идеалу за один день. Пусть ваш дом развивается вместе с вами, отражая ваши изменения и рост. Каждый новый элемент — это шаг к более совершенному отражению вашей личности.
            </p>
            <p className="text-[15px] leading-relaxed text-black/65 mb-7">
              В конечном итоге, создание гармоничного пространства — это путешествие к самопознанию. Ваш дом становится зеркалом вашей души, местом, где вы пребываете в полной аутентичности. Убежище, где каждая деталь способствует вашему спокойствию, вдохновению и счастью.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--estate))]">
              <Icon name="Star" size={15} />
              Это самая важная инвестиция в ваше собственное благополучие
            </div>
          </div>
        </article>

      </div>
    </div>
  );
};

export default Index;
