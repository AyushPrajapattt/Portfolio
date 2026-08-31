import { achievements } from "@/lib/content";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Highlights</span>
          <h2 className="section__title">Achievements</h2>
        </div>

        <div className="ach-list">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 80}>
              <div className="ach">
                <div className="ach__badge" aria-hidden>
                  ★
                </div>
                <div>
                  <h3 className="ach__title">{a.title}</h3>
                  <p className="ach__detail">{a.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
