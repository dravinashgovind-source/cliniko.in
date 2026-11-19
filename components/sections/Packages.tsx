import { packages } from "../../content/site";
import { Accent, Eyebrow, Reveal } from "../ui/Reveal";
import { ArrowRight, Check } from "../ui/Icons";

export function Packages() {
  return (
    <section className="section packages" id="packages" aria-labelledby="packages-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <Eyebrow>Packages</Eyebrow>
          <h2 id="packages-title" className="h2">Choose where to <Accent>begin.</Accent></h2>
          <p className="lead">Flexible engagements that grow with your practice. Every plan starts with a free strategy conversation.</p>
        </Reveal>

        <div className="plans">
          {packages.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className={`plan${p.featured ? " plan--featured" : ""}`}>
              {p.featured && <span className="plan__badge">Most chosen</span>}
              <h3 className="plan__name">{p.name}</h3>
              <p className="plan__summary">{p.summary}</p>
              <p className="plan__price">
                {p.price ? (<><b>{p.price}</b><span>{p.cadence}</span></>) : (<><b>Tailored quote</b><span>{p.cadence}</span></>)}
              </p>
              <a href="#contact" className={`btn ${p.featured ? "btn--light" : "btn--outline"} plan__cta`}>
                Get a proposal <ArrowRight />
              </a>
              <ul className="plan__list">
                {p.includes.map((f) => <li key={f}><Check width={15} height={15} /> {f}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="custom-plan">
          <div>
            <p className="custom-plan__title">Need something specific?</p>
            <p className="custom-plan__text">Hospitals, multi-location groups and new clinic launches get a custom plan built around their goals.</p>
          </div>
          <a href="#contact" className="btn btn--primary">Build a custom plan <ArrowRight /></a>
        </Reveal>
      </div>
    </section>
  );
}
