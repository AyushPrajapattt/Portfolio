import { experience } from "@/lib/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Journey</span>
          <h2 className="section__title">Experience &amp; education</h2>
        </div>

        <ul className="timeline">
          {experience.map((item, i) => (
            <Reveal as="li" key={`${item.role}-${item.org}`} delay={i * 80}>
              <div className="timeline__item">
                <div className="timeline__period">
                  {item.period}
                  <span className="chip chip--outline timeline__kind">
                    {item.kind === "education" ? "Education" : "Work"}
                  </span>
                </div>
                <h3 className="timeline__role">{item.role}</h3>
                <p className="timeline__org">{item.org}</p>
                <p className="timeline__summary">{item.summary}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
