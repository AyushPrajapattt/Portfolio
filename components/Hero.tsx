import { site } from "@/lib/content";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
} from "@/lib/icons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="about" className="section hero">
      <div className="container">
        <Reveal>
          <span className="hero__available">
            <span className="dot" aria-hidden />
            Open to internships &amp; collaborations
          </span>

          <h1 className="hero__title">
            Hi, I&apos;m <span className="accent">Ayush</span>.
          </h1>
          <p className="hero__role">{site.title}</p>
          <p className="hero__bio">{site.bio}</p>

          <p className="hero__meta">
            <LocationIcon width={18} height={18} />
            {site.location}
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View my work
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
            <a
              href={`mailto:${site.email}`}
              className="btn btn--ghost"
            >
              <MailIcon width={18} height={18} />
              Email me
            </a>
          </div>

          <div className="hero__socials">
            <a
              href={site.socials.github}
              className="icon-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <GitHubIcon />
            </a>
            <a
              href={site.socials.linkedin}
              className="icon-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
