import { MotionProvider } from "../components/ui/MotionProvider";
import { Nav } from "../components/sections/Nav";
import { Hero } from "../components/sections/Hero";
import { Ecosystem } from "../components/sections/Ecosystem";
import { Services } from "../components/sections/Services";
import { Work } from "../components/sections/Work";
import { Transformation } from "../components/sections/Transformation";
import { Process } from "../components/sections/Process";
import { Films } from "../components/sections/Films";
import { Why } from "../components/sections/Why";
import { Testimonials } from "../components/sections/Testimonials";
import { Packages } from "../components/sections/Packages";
import { FAQ } from "../components/sections/FAQ";
import { FinalCTA } from "../components/sections/FinalCTA";
import { WhatsAppFab } from "../components/ui/WhatsAppFab";
import { Footer } from "../components/sections/Footer";

export default function Home() {
  return (
    <MotionProvider>
      <a href="#main" className="skip">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Ecosystem />
        <Services />
        <Work />
        <Transformation />
        <Process />
        <Films />
        <Why />
        <Testimonials />
        <Packages />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </MotionProvider>
  );
}
