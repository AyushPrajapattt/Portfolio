import { site } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "@/lib/icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="contact">
            <span className="section__eyebrow">Contact</span>
            <h2 className="contact__title">Let&apos;s build something</h2>
            <p className="contact__text">
              I&apos;m open to internships, freelance work, and collaboration on
              interesting AI/ML and full-stack projects. The fastest way to
              reach me is email.
            </p>

            <div className="contact__actions">
              <a href={`mailto:${site.email}`} className="btn btn--primary">
                <MailIcon width={18} height={18} />
                {site.email}
              </a>
              <a href={`tel:${site.phone}`} className="btn btn--ghost">
                <PhoneIcon width={18} height={18} />
                {site.phoneDisplay}
              </a>
              <a
                href={site.socials.github}
                className="btn btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon width={18} height={18} />
                GitHub
              </a>
              <a
                href={site.socials.linkedin}
                className="btn btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon width={18} height={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
