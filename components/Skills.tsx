import { skills } from "@/lib/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Toolbox</span>
          <h2 className="section__title">Skills &amp; technologies</h2>
          <p className="section__subtitle">
            The languages, frameworks, and tools I reach for most.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 70}>
              <div className="skill-group">
                <h3 className="skill-group__title">{group.category}</h3>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
