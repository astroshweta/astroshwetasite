import Hero from "./components/sections/Hero";
import Packages from "./components/sections/Packages";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Testimonials from "./components/sections/Testimonials";

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