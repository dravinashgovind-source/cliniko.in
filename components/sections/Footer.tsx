import { nav, site } from "../../content/site";
import { Logo } from "../ui/Logo";
import { InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from "../ui/Icons";

export function Footer() {
  const socials = [
    { label: "YouTube", href: site.socials.youtube, Icon: YouTubeIcon },
    { label: "Instagram", href: site.socials.instagram, Icon: InstagramIcon },
    { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
    { label: "X", href: site.socials.x, Icon: XIcon },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p>{site.descriptor}</p>
          </div>
          <nav aria-label="Footer" className="footer__nav">
            {[...nav, { label: "Contact", href: "#contact" }].map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          </nav>
          <div className="footer__social">
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} aria-label={label}><Icon /></a>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Cliniko. All rights reserved.</p>
          <p className="footer__tag"><span />{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
