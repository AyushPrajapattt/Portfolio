import { site } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "@/lib/icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © 2026 {site.name}. Built with Next.js.
        </p>
        <div className="footer__socials">
          <a
            href={site.socials.github}
            className="icon-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon width={18} height={18} />
          </a>
          <a
            href={site.socials.linkedin}
            className="icon-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon width={18} height={18} />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="icon-btn"
            aria-label="Email"
          >
            <MailIcon width={18} height={18} />
          </a>
          <a
            href={`tel:${site.phone}`}
            className="icon-btn"
            aria-label="Phone"
          >
            <PhoneIcon width={18} height={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
