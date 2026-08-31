import { projects } from "@/lib/content";
import { ArrowUpRightIcon, GitHubIcon } from "@/lib/icons";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Work</span>
          <h2 className="section__title">Featured projects</h2>
          <p className="section__subtitle">
            A selection of things I&apos;ve built — from RAG systems and
            full-stack apps to data analysis and ML.
          </p>
        </div>

        <div className="grid">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 80}>
              <article className="card">
                <div className="card__head">
                  <h3 className="card__title">{p.name}</h3>
                </div>
                <p className="card__desc">{p.description}</p>

                <div className="card__tech tag-row">
                  {p.tech.map((t) => (
                    <span key={t} className="chip chip--outline">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="card__links">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label === "GitHub" ? (
                        <GitHubIcon />
                      ) : (
                        <ArrowUpRightIcon />
                      )}
                      {l.label}
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
