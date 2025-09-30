import './App.css';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Over mij', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projecten', href: '#projects' },
  { label: 'Opleiding', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const heroStats = [
  { label: 'Projecten', value: '6+' },
  
  { label: 'Teamlid', value: 'Scrum & DevOps' },
];

const focusAreas = [
  {
    title: 'Full-stack denken',
    description: 'Van scherm tot database: ik lever features die meteen bruikbaar zijn.',
  },
  {
    title: 'Snelle iteraties',
    description: 'Ik test snel, lever elke sprint op en vraag actief feedback.',
  },
  {
    title: 'Slimme tooling',
    description: 'Ik automatiseer processen en zet CI/CD neer voor snelle releases.',
  },
];

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Vite', 'TypeScript', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST API ontwerp', 'PHP', 'MySQL', 'Docker'],
  },
  {
    category: 'Mobile',
    items: ['Swift (iOS)', 'React Native (Android)'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Git & GitHub', 'Scrum', 'CI/CD', 'Figma', 'Trello'],
  },
];

const projects = [
  {
    title: 'Café 8',
    tagline: 'Mobiel vriendelijke menubeleving',
    description:
      'Responsive website die content uit JSON haalt, geoptimaliseerde foto’s toont en een QR-menu biedt voor snelle toegang in het café.',
    role: 'Frontend developer (klantenproject)',
    result: 'Gasten scannen de QR-code en zien direct een lichtgewicht menu.',
    tech: ['HTML', 'CSS', 'JavaScript', 'JSON'],
    link: 'https://cafe8.nl/',
    linkLabel: 'Project bekijken',
  },
  {
    title: 'Rijschool Flow',
    tagline: 'Planningstool voor rijscholen',
    description:
      'Groeiend platform dat lessen plant, instructeurs koppelt en administratie automatiseert voor rijscholen.',
    role: 'Full-stack developer solo project',
    result: 'Eerste klant bespaart wekelijks tijd op planning en opvolging.',
    tech: ['Node.js', 'firebase', 'swift (iOS)', 'React Native (Android)'],
    link: 'https://github.com/efoztas087/Rijscholenapp',
    linkLabel: 'In ontwikkeling',
  },
  {
    title: 'Bo-opdracht',
    tagline: 'Muntgeld sorteermachine',
    description:
      'Een sorteer machine die muntgeld sorteert en in een dashboard het totale bedrag weergeeft die je erin gooit.',
    role: 'Robotica developer met een collega',
    result: 'Een muntgeld sorteermachine.',
    tech: ['Arduino', 'Sensors', 'IoT', 'dashboard'],
    link: 'https://github.com/efoztas087/boopdracht',
    linkLabel: 'Arduino code bekijken',
  },
];

const education = [
  {
    year: '2023',
    title: 'Software Development',
    place: 'MBO opleiding eerste jaar ',
    description: 'De basis codes voor een software developer.',
  },
  {
    year: '2024',
    title: 'Software development',
    place: 'Tech startup tweede jaar',
    description: 'Meegebouwd aan een webplatform: features opgezet en getest.',
  },
];

const highlights = [
  {
    label: 'Praktijkervaring',
    detail: 'Website gebouwd voor lokaal café',
  },
  {
    label: 'Leerdoelen',
    detail: 'Verder groeien in backend, devops en mobile (iOS/Android)',
  },
  {
    label: 'Interesses',
    detail: 'Slimme campusoplossingen, automatisering en ideeën die de maatschappij helpen',
  },
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <header>
        <div className="project-card__title">
          <h3>{project.title}</h3>
          <span>{project.tagline}</span>
        </div>
        <a className="project-card__link" href={project.link}>
          {project.linkLabel}
        </a>
      </header>
      <p className="project-card__description">{project.description}</p>
      <div className="project-card__meta">
        <div>
          <strong>Rol</strong>
          <p>{project.role}</p>
        </div>
        <div>
          <strong>Resultaat</strong>
          <p>{project.result}</p>
        </div>
      </div>
      <ul className="project-card__tags">
        {project.tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <span className="logo">Efe Öztaş</span>
        <nav>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="cta" href="mailto:efe.softwaredev@gmail.com">
          Contact
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero__content">
            <p className="hero__eyebrow">Software Development Student</p>
            <h1>
              Hey, ik ben <span>Efe</span>.
              <br />
              Ik bouw digitale ervaringen die teams vooruit helpen.
            </h1>
            <p className="hero__lede">
              Derdejaars software developer die scherpe interfaces en stabiele backends combineert. Ik leer door
              te bouwen, testen en direct met feedback aan de slag te gaan.
            </p>
            <div className="hero__buttons">
              <a className="button" href="#projects">
                Bekijk projecten
              </a>
              <a className="button button--ghost" href="#contact">
                Plan een kennismaking
              </a>
            </div>
          </div>
          <div className="hero__panel">
            <div className="hero__badge"></div>
            <div className="hero__highlights">
              <h2>Waar ik energie van krijg</h2>
              <ul>
                {highlights.map((highlight) => (
                  <li key={highlight.label}>
                    <span>{highlight.label}</span>
                    <p>{highlight.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hero__stats">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section__intro">
            <span>Over mij</span>
            <h2>Nieuwsgierig en hands-on</h2>
            <p>
              Ik vertaal ideeën snel naar prototypes die je kunt testen met gebruikers. Ik werk gestructureerd, communiceer
              helder en organiseer mijn projecten in Trello. Ik leer nu Swift en React Native om apps voor iOS en Android
              te bouwen en ben steeds op zoek naar nieuwe oplossingen die het leven voor mensen makkelijker maken.
            </p>
          </div>
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <div key={area.title} className="focus-card">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section__title">
            <span>Skills</span>
            <h2>Stack waar ik resultaat mee boek</h2>
          </div>
          <div className="skills">
            {skills.map((group) => (
              <div key={group.category} className="skills__card">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section section--projects">
          <div className="section__title">
            <span>Projecten</span>
            <h2>Werk waar ik trots op ben</h2>
            <p className="section__subtitle">Impactvolle cases die laten zien hoe ik werk.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section__title">
            <span>Opleiding</span>
            <h2>Blijven groeien als software developer</h2>
          </div>
          <div className="timeline">
            {education.map((item) => (
              <div key={item.title} className="timeline__item">
                <span className="timeline__year">{item.year}</span>
                <div className="timeline__body">
                  <h3>{item.title}</h3>
                  <span className="timeline__place">{item.place}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact__content">
            <span>Contact</span>
            <h2>Klaar voor stage!</h2>
            <p>
              ik zou heel graag stage willen lopen bij een bedrijf waar ik mijn kennis kan uitbreiden en ervaring kan opdoen in de
              praktijk.
            </p>
            <div className="contact__buttons">
              <a className="button" href="mailto:#">
                Stuur een e-mail
              </a>
              <a className="button button--ghost" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="button button--ghost" href="https://github.com/efoztas087" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Efe Öztaş. Gemaakt met React en Vite.</p>
      </footer>
    </div>
  );
}

export default App;
