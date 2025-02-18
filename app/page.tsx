import Hero from "./components/Hero";
import Packages from "./components/Packages";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Packages />
      <About />
      <Testimonials/>
      <Contact />
    </>
  );
}