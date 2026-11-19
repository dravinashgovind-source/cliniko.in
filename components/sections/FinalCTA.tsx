import { site } from "../../content/site";
import { Accent, Reveal } from "../ui/Reveal";
import { ArrowRight } from "../ui/Icons";
import { LogoMark } from "../ui/Logo";

export function FinalCTA() {
  return (
    <section className="cta" id="contact" aria-labelledby="cta-title">
      <div className="cta__glow" aria-hidden="true" />
      <svg className="cta__arcs" viewBox="0 0 600 600" aria-hidden="true">
        <circle cx="300" cy="300" r="180" />
        <circle cx="300" cy="300" r="250" />
        <circle cx="300" cy="300" r="320" />
      </svg>
      <div className="container cta__inner">
        <Reveal className="cta__copy">
          <h2 id="cta-title" className="cta__title">
            Your expertise is real.<br />Let the world <Accent>see it.</Accent>
          </h2>
          <p className="cta__lead">Partner with Cliniko to build a powerful digital presence for your practice.</p>
          <div className="cta__actions">
            <a className="btn btn--light btn--lg" href={`mailto:${site.contactEmail}?subject=Let%E2%80%99s%20grow%20together`}>
              Let&rsquo;s grow together <ArrowRight />
            </a>
            <a className="cta__mail" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
          </div>
        </Reveal>
        <Reveal className="cta__mark" delay={0.15} aria-hidden="true">
          <LogoMark size={180} />
        </Reveal>
      </div>
    </section>
  );
}
