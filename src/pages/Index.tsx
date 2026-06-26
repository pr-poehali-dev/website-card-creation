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

        {/* Блок — о компании */}
        <article className="relative overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.12)] px-8 py-9 sm:px-12">
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[hsl(var(--estate))]/8 blur-2xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--estate))]/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--estate))] mb-5">
              <Icon name="Building2" size={14} />
              О компании
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
              Дом Мечты — <span className="italic text-[hsl(var(--estate))]">ваш надёжный партнёр</span>
            </h2>
            <p className="text-[15px] leading-relaxed text-black/65 mb-4">
              Мы — динамично развивающаяся организация, работающая на рынке услуг по подбору недвижимости с 2025 года. За это время мы успешно реализовали множество проектов разного масштаба и уровня сложности.
            </p>
            <p className="text-[15px] leading-relaxed text-black/65 mb-6">
              Образование компании стало логическим продолжением успешного завершения финансовых сделок группой специалистов, составивших основу нашей профессиональной деятельности.
            </p>
            <div className="rounded-2xl bg-[#FAF8F4] border border-black/5 px-6 py-5">
              <p className="text-[15px] leading-relaxed text-black/70">
                Компания <span className="font-semibold text-[hsl(var(--estate-ink))]">«Дом Мечты»</span> — это команда, поставившая своей целью решать все возникающие вопросы, связанные с приобретением недвижимости. Мы готовы помочь вам принять верное решение и подобрать наилучшие условия именно для вас.
              </p>
            </div>
          </div>
        </article>

        {/* Блок 1 — что такое гармония */}
        <article className="relative overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.12)] px-8 py-9 sm:px-12">
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[hsl(var(--estate))]/8 blur-2xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--estate))]/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--estate))] mb-5">
              <Icon name="Home" size={14} />
              Гармония пространства
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
              Больше, чем просто интерьер
            </h2>
            <p className="text-[15px] leading-relaxed text-black/65 mb-4">
              Гармония пространства нашей жизни – это нечто большее, чем просто эстетически приятный интерьер. Это глубокое, интуитивное ощущение благополучия, которое пронизывает каждый уголок нашего дома и, как следствие, нашей души. Это место, где мы чувствуем себя в безопасности, где можем полностью расслабиться и восстановить силы, где вдохновение находит плодородную почву для своего развития. Создание такой гармонии – это искусство, требующее вдумчивого подхода и понимания того, как окружающая среда влияет на наше психоэмоциональное состояние.
            </p>
            <p className="text-[15px] leading-relaxed text-black/65">
              Первый шаг на пути к гармонии – это осознание своих потребностей и желаний. Ваш дом должен отражать вашу индивидуальность, ваши ценности и ваш образ жизни. Задайте себе вопросы: что для вас важно? Какие ощущения вы хотите испытывать, находясь дома? Нужен ли вам тихий уголок для чтения, просторное место для встреч с друзьями, или, быть может, функциональное пространство для творчества? Ответы на эти вопросы станут фундаментом для дальнейших решений, от выбора цветовой гаммы до расстановки мебели.
            </p>
          </div>
        </article>

        {/* Блок 2 — цвет, материалы */}
        <article className="relative overflow-hidden rounded-[28px] bg-[hsl(var(--estate-ink))] border border-black/5 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.2)] px-8 py-9 sm:px-12">
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[hsl(var(--estate))]/20 blur-2xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/60 mb-5">
              <Icon name="Palette" size={14} />
              Атмосфера
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-white mb-5">
              Цвет, свет и материалы
            </h2>
            <p className="text-[15px] leading-relaxed text-white/65 mb-4">
              Цвет играет ключевую роль в создании атмосферы. Спокойные, приглушенные тона, такие как пастельные оттенки, серый, бежевый, могут способствовать релаксации и умиротворению. Яркие, насыщенные цвета, напротив, способны зарядить энергией и стимулировать активность. Важно найти баланс, подобрать сочетания, которые будут резонировать с вашим внутренним миром и создавать желаемое настроение в каждой комнате. Естественное освещение также имеет огромное значение – оно оживляет пространство, делает его более просторным и приятным.
            </p>
            <p className="text-[15px] leading-relaxed text-white/65">
              Материалы и текстуры также вносят свой вклад в общую гармонию. Натуральные материалы – дерево, камень, хлопок, лен – придают интерьеру тактильность и теплоту, создавая ощущение связи с природой. Грубая текстура может добавить уюта, гладкая – элегантности. Не бойтесь экспериментировать, смешивая разные фактуры, чтобы создать многогранный и интересный интерьер. Каждый элемент, от дивана до декоративных подушек, должен быть тщательно подобран, чтобы гармонично вписаться в общую концепцию.
            </p>
          </div>
        </article>

        {/* Блок 3 — порядок и личность */}
        <article className="relative overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.12)] px-8 py-9 sm:px-12">
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[hsl(var(--estate))]/8 blur-2xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--estate))]/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--estate))] mb-5">
              <Icon name="Minimize2" size={14} />
              Порядок и душа
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
              Минимализм и личная история
            </h2>
            <p className="text-[15px] leading-relaxed text-black/65 mb-4">
              Наконец, гармония достигается через порядок и минимализм. Избавьтесь от лишних вещей, которые создают визуальный шум и перегружают пространство. Организуйте хранение так, чтобы все необходимое было под рукой, но при этом не бросалось в глаза. Чистота и организованность способствуют ясности ума и спокойствию. Когда ваш дом – это отражение вашей внутренней гармонии, он становится не просто местом проживания, а настоящим убежищем, где вы можете быть самим собой.
            </p>
            <p className="text-[15px] leading-relaxed text-black/65">
              Воображение – это наш главный инструмент в создании жилого пространства, которое будет не просто оболочкой, но и продолжением нашей сущности. Когда мы наполняем дом не только мебелью и декором, но и личными историями, воспоминаниями, предметами, несущими особый смысл, он обретает душу. Семейные фотографии, сувениры из путешествий, предметы ручной работы – все это рассказывает нашу уникальную историю, делая дом по-настоящему вашим. Эти элементы придают интерьеру глубину и индивидуальность, превращая его из стандартного набора элементов в место, наполненное эмоциями и смыслом.
            </p>
          </div>
        </article>

        {/* Блок 4 — функциональность и здоровье */}
        <article className="relative overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.12)]">
          <div className="relative bg-[#FAF8F4] px-8 py-9 sm:px-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--estate))]/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--estate))] mb-5">
              <Icon name="LayoutDashboard" size={14} />
              Функциональность
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
              Красота, которая удобна
            </h2>
            <p className="text-[15px] leading-relaxed text-black/65">
              Не менее важен аспект функциональности. Гармоничное пространство должно не только радовать глаз, но и быть удобным для жизни. Это означает продуманную планировку, эргономику мебели, достаточное количество мест для хранения и легкий доступ ко всему необходимому. Когда каждая вещь на своем месте, а зонирование пространства соответствует вашим ежедневным ритуалам, вы чувствуете себя более собранным и продуктивным. Функциональность не противоречит эстетике; напротив, она является ее неотъемлемой частью, позволяя красоте быть еще и практичной.
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
                <p className="text-[15px] leading-relaxed text-black/65">
                  Влияние гармоничного пространства на наше физическое и ментальное здоровье неоспоримо. Дом, где царит уют и порядок, где каждый элемент подобран с любовью и заботой, становится настоящим источником силы и восстановления. Снижается уровень стресса, улучшается сон, повышается общая удовлетворенность жизнью. Это происходит потому, что наше подсознание реагирует на окружающую среду, и гармоничное пространство посылает позитивные сигналы, способствуя внутреннему равновесию.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Блок 5 — финал */}
        <article className="relative overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.12)] px-8 py-9 sm:px-12">
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[hsl(var(--estate))]/8 blur-2xl" />
          <div className="relative">
            <Icon name="Compass" size={28} className="text-[hsl(var(--estate))]/60 mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
              Путешествие к самопознанию
            </h2>
            <p className="text-[15px] leading-relaxed text-black/65 mb-4">
              Мудрость в создании гармонии заключается в умении остановиться и насладиться процессом. Не стремитесь к идеалу за один день. Пусть ваш дом развивается вместе с вами, отражая ваши изменения и рост. Каждый новый элемент, каждое изменение в интерьере – это шаг к более совершенному отражению вашей личности. Позвольте себе быть гибкими, экспериментировать, но всегда возвращайтесь к основополагающим принципам – вашим потребностям, вашим ценностям и вашему стремлению к благополучию.
            </p>
            <p className="text-[15px] leading-relaxed text-black/65 mb-7">
              В конечном итоге, создание гармоничного пространства – это путешествие к самопознанию. Ваш дом становится зеркалом вашей души, местом, где вы можете пребывать в полной аутентичности. Это убежище, где каждая деталь способствует вашему спокойствию, вдохновению и счастью. И это, пожалуй, самая важная инвестиция, которую вы можете сделать в свое собственное благополучие.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--estate))]">
              <Icon name="Star" size={15} />
              Самая важная инвестиция в ваше собственное благополучие
            </div>
          </div>
        </article>

      </div>
    </div>
  );
};

export default Index;