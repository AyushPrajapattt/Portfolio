import { contributions } from "@/lib/content";
import { ArrowUpRightIcon, GitHubIcon } from "@/lib/icons";
import Reveal from "./Reveal";

export default function Contributions() {
  return (
    <section id="contributions" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Open source</span>
          <h2 className="section__title">Contributions</h2>
          <p className="section__subtitle">
            Giving back to the community through open-source work.
          </p>
        </div>

        <div className="grid">
          {contributions.map((c, i) => (
            <Reveal key={c.project} delay={i * 80}>
              <article className="card">
                <div className="card__head">
                  <h3 className="card__title">{c.project}</h3>
                  <GitHubIcon />
                </div>
                <p className="card__desc">{c.description}</p>
                <div className="card__links">
                  <a
                    href={c.href}
                    className="card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRightIcon />
                    View repository
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
