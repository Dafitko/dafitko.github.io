import './App.css'

const STAR_COUNT = 400

const stars = Array.from({ length: STAR_COUNT }).map((_, i) => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 1.6 + 1,
  duration: 3 + Math.random() * 5,
  delay: Math.random() * 5,
  opacity: 0.2 + Math.random() * 0.6,
  key: i,
}))

const experience = [
  {
    title: 'Languages',
    items: ['JavaScript, Python, SQL, C, PHP, Google Apps Script'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React, Node.js, Next.js, Flask, Django'],
  },
  {
    title: 'Developer Tools & Platforms',
    items: ['Git, Linux, GitHub, Docker'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL, SQLite, MongoDB, MySQL, MariaDB'],
  },
  {
    title: 'Currently Learning',
    items: ['TypeScript, React'],
  },
]

const projects = [
  {
    name: 'Commerce Auction App',
    description:
      'An eBay-style auction platform where users can create listings, place bids, watch items, and comment. Built with Django and deployed on Railway.',
    credentials: 'username: harry / password: test',
    href: 'https://commerce.pirchaladavid.dev/',
    github: 'https://github.com/Dafitko/commerce-auction-app',
    stack: ['Django', 'Python', 'SQLite'],
  },
  {
    name: 'Mail Client',
    description:
      'A single-page email client designed to manage mail inbox, sent messages, and archives. Interacts dynamically with a custom Django email API for real-time updates.',
    stack: ['React', 'Vanilla JS', 'Django', 'Bootstrap 4'],
    status: 'in-progress',
  },
]

function App() {
  return (
    <>
      <div className="stars" aria-hidden="true">
        {stars.map((s) => (
          <span
            key={s.key}
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              '--o': s.opacity,
              '--d': `${s.duration}s`,
              '--delay': `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="page">
        <section className="hero">
          <h1>
            Dávid Pirchala
          </h1>
          <p>
            Full-Stack Developer and Computer Science student at Masaryk University with a few months of
            practical experience designing, building, deploying, and iterating on web applications.
          </p>

          <section className="section" id="contact">
            <div className="contact-links">
              <a href="https://github.com/dafitko" target="_blank" rel="noreferrer">
                <svg className="link-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.1.82-.26.82-.58v-2.2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.37-1.33-1.74-1.33-1.74-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.24 1.83 1.24 1.07 1.82 2.8 1.3 3.48 1 .1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .3Z" />
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/david-pirchala/" target="_blank" rel="noreferrer">
                <svg className="link-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                </svg>
                LinkedIn
              </a>
              <a href="https://www.instagram.com/pirchala.david/" target="_blank" rel="noreferrer">
                <svg className="link-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .62 4.15C.32 4.9.12 5.77.06 7.05.01 8.33 0 8.74 0 12s.01 3.67.06 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.06c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.39 5.9 5.9 0 0 0 1.39-2.13c.3-.76.5-1.63.56-2.91.05-1.28.06-1.69.06-4.95s-.01-3.67-.06-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.39-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
                </svg>
                Instagram
              </a>
            </div>

            <a className="resume-btn" href="https://docs.google.com/viewerng/viewer?url=https://docs.google.com/document/d/1zafzDpy55fnDfnRKz9yxsvspaPQ_pc2wjKyIH_TAGwM/export?format%3Dpdf" target="_blank">
              <svg className="link-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v11.59l3.3-3.3 1.4 1.42L12 17.83l-4.7-4.7 1.4-1.42 3.3 3.3V3h2ZM5 19h14v2H5v-2Z" />
              </svg>
              Download Resume
            </a>
          </section>

        </section>

        <section className="section" id="projects">
          <h2>Projects</h2>
          <div className="projects">
            {projects.map((p) => {
              const isClickable = !!p.href;
              return (
                <div
                  className={`project ${!isClickable ? 'project-in-progress' : ''}`}
                  key={p.name}
                  onClick={
                    isClickable
                      ? (e) => {
                        if (e.target.closest('.project-github-link')) {
                          return
                        }
                        window.open(p.href, '_blank', 'noreferrer')
                      }
                      : undefined
                  }
                  style={isClickable ? { cursor: 'pointer' } : { cursor: 'default' }}
                >
                  <div className="project-top">
                    <h3>{p.name}</h3>
                    {isClickable && <span className="arrow">→</span>}
                  </div>
                  <p>{p.description}</p>
                  {p.credentials && <p className="credentials">{p.credentials}</p>}
                  <div className="project-bottom">
                    <div className="stack">
                      {p.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                    {isClickable ? (
                      p.github && (
                        <a
                          className="project-github-link"
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          title="View Source Code"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="link-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.1.82-.26.82-.58v-2.2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.37-1.33-1.74-1.33-1.74-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.24 1.83 1.24 1.07 1.82 2.8 1.3 3.48 1 .1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .3Z" />
                          </svg>
                          <span>GitHub</span>
                        </a>
                      )
                    ) : (
                      <span className="status-badge">
                        <span className="status-dot" />
                        In Progress
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section" id="experience">
          <h2>Experience</h2>
          <div className="experience-grid">
            {experience.map((group) => (
              <div className="experience-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <h2>About</h2>
          <p className="about-text">
            I started programming in 2015 just before high school.
            After a brief peek into digital marketing, I came back to programming and worked full-time as a Full-Stack Developer for a few months.
            Along the way, I created several side projects using Django, React, Next.js, and Node.js.
            I am currently studying at{' '}
            <a href="https://www.fi.muni.cz/" target="_blank" rel="noreferrer">
              FI MUNI
            </a>
            .
          </p>
        </section>
      </div>
    </>
  )
}

export default App
