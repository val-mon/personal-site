import './App.css'

const education = [
  {
    title: 'BSc — Computer Science and Communication Systems',
    sub: 'HES-SO Valais-Wallis, Sion, CH',
    detail: 'Data engineering: big data, AI, machine learning, DevOps',
    date: '2024 — 2027',
  },
  {
    title: 'BSc — Systems Engineering',
    sub: 'HES-SO Valais-Wallis, Sion, CH',
    detail: 'First semester completed, transferred to computer science',
    date: '2021 — 2022',
  },
  {
    title: 'Federal Certificate of Competence — Electronics',
    sub: 'Campus EPTM, Sion, CH',
    detail: 'Four-year apprenticeship with Federal Vocational Baccalaureate',
    date: '2017 — 2021',
  },
]

const skills = [
  {
    emoji: '🌐',
    group: 'Systems and infrastructure',
    items: ['Linux', 'Docker', 'nginx', 'Git', 'CI/CD', 'TCP/IP networking'],
  },
  {
    emoji: '🧑🏻‍💻',
    group: 'Development',
    items: [
      'Python',
      'Scala',
      'Julia',
      'Java',
      'C++',
      'Full-stack web',
      'Concurrent and functional programming',
      'Algorithms',
    ],
  },
  {
    emoji: '📊',
    group: 'Data and AI',
    items: [
      'Computer vision',
      'Natural language processing',
      'Linear algebra',
      'Calculus',
      'Probability and statistics',
    ],
  },
  {
    emoji: '⚡',
    group: 'Electronics',
    items: [
      'Soldering',
      'Wiring',
      'Schematic reading',
      'Measurement',
      'Prototyping',
      'Microcontrollers',
    ],
  },
]

const projects = [
  {
    title: 'Personal server',
    description:
      'Hosts my website and an AI automation agent',
  },
  {
    title: 'Puzzle solver',
    description: 'Computer vision',
    href: 'https://github.com/isc-hei-classrooms/project2-valcar',
  },
  {
    title: 'Chess bot',
    description: 'Search and optimisation algorithms',
    href: 'https://github.com/val-mon/isc-chess',
  },
  {
    title: 'StudyUp',
    description: 'Full-stack productivity web app',
    href: 'https://github.com/val-mon/study-up',
  },
  {
    title: 'Scala Compiler',
    description: 'Lexical and syntactic analysis',
    href: 'https://github.com/val-mon/yafl',
  },
]

// Shown on the card in place of the raw URL.
const linkLabel = (href) =>
  href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

const interests = ['AI', 'Sport', 'Technology', 'Motorcycling']

function App() {
  return (
    <>
      <main>
        <div className="wrap">
          <section id="top" className="hero">
            <img src="/pp.webp" alt="Valentin Monod" className="avatar" />
            <div>
              <h1>Valentin Monod</h1>
              <p className="tagline">Future computer science engineer</p>
            </div>
          </section>

          <section id="education">
            <h2>Education</h2>
            <div className="timeline">
              {education.map((item) => (
                <div className="item" key={item.title}>
                  <div className="item-main">
                    <span className="item-title">{item.title}</span>
                    <span className="item-sub">{item.sub}</span>
                    <span className="item-detail">{item.detail}</span>
                  </div>
                  <span className="item-date">{item.date}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="skills">
            <h2>Skills</h2>
            <div className="cards">
              {skills.map((group) => (
                <div className="card skill-card" key={group.group}>
                  <h3 className="skill-group">
                    <span className="skill-emoji" aria-hidden="true">
                      {group.emoji}
                    </span>
                    {group.group}
                  </h3>
                  <div className="tags">
                    {group.items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects">
            <h2>Projects</h2>
            <div className="cards">
              {projects.map((project) => (
                <article
                  className={project.href ? 'card card-clickable' : 'card'}
                  key={project.title}
                >
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.description}</p>
                  {project.href && (
                    <a
                      className="card-link"
                      href={project.href}
                      target="_blank"
                      rel="noopener"
                    >
                      {linkLabel(project.href)}
                      <span className="card-arrow" aria-hidden="true">
                        &rarr;
                      </span>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section id="interests">
            <h2>Interests</h2>
            <div className="tags">
              {interests.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section id="contact" className="connect">
            <h2>Contact</h2>
            <div className="connect-links">
              <a href="mailto:contact@val-mon.com">
                <span className="icon mail">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 6-10 7L2 6"></path>
                  </svg>
                </span>
                <span className="label-col">
                  <span className="label-small">Email</span>
                  <span className="label-value">contact@val-mon.com</span>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/val-mon/"
                target="_blank"
                rel="noopener"
              >
                <span className="icon linkedin">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"></path>
                  </svg>
                </span>
                <span className="label-col">
                  <span className="label-small">LinkedIn</span>
                  <span className="label-value">linkedin.com/in/val-mon</span>
                </span>
              </a>
              <a
                href="https://github.com/val-mon"
                target="_blank"
                rel="noopener"
              >
                <span className="icon github">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.61-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2z"></path>
                  </svg>
                </span>
                <span className="label-col">
                  <span className="label-small">GitHub</span>
                  <span className="label-value">github.com/val-mon</span>
                </span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="wrap">&copy; 2026 Valentin Monod</div>
      </footer>
    </>
  )
}

export default App
