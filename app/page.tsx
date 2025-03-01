import Packages from "./components/sections/Packages";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Testimonials from "./components/sections/Testimonials";
import FAQSection from "./components/sections/FAQs";
import Navbar from "./components/sections/Navbar";
import Image from "next/image";
import { Container } from "@mui/material";
import Footer from "./components/sections/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden flex items-center mx-4 sm:mx-8 md:px-0 py-10 md:py-0 md:h-screen">
        <div className="container relative mx-auto px-6 md:px-20">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-8">
            <div className="text-center md:text-start z-10">
              <h5 className="font-semibold text-lg sm:text-xl">
                Hi, I am{" "}
                <span className="text-[#e8c83e] text-3xl sm:text-4xl">
                  Shweta
                </span>
              </h5>

              <h5 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight md:leading-normal mt-2">
              Your Trusted <br /> Astrology Consultant <br /> & Spiritual Guide.
              </h5>
              <div className="absolute left-[5%] top-[28%] rotated_circle">
                <Image src="/dot.png" alt="Shape" />
              </div>
              <div className="absolute right-[55%] top-[60%] rotated_circle">
                <Image src="/dot.png" alt="Shape" />
              </div>
              <p className="text-slate-400 dark:text-white/60 text-base sm:text-lg max-w-xl mt-3">
              Offering personalized readings and deep insights to bring clarity, direction, and success into your life. Unlock your true potential and navigate life’s journey with confidence.
              </p>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div className="relative lg:ms-1 before:content-[''] before:absolute before:start-1/2 before:-translate-x-1/2 rtl:before:translate-x-1/2 before:bottom-1/2 before:translate-y-1/2 before:w-[85vw] sm:before:w-[65vw] md:before:w-[48rem] before:h-[40vw] sm:before:h-[30vw] md:before:h-[20rem] before:rounded-[18rem] before:rotate-[135deg] before:bg-[#e8c83e] dark:before:bg-[#e8c83e] before:z-0">
                <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <Image
  src="/author.png"
  width={0}
  height={0}
  sizes="100vw"
  className="w-full object-cover rounded-lg md:h-[550px] lg:h-[700px] md:-mt-10 lg:-mt-16"
  alt="Astrologer Shweta"
/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden md:py-24 py-16">
        <Container sx={{ mt: 2 }}>
          <Packages />
          <About />
          <Testimonials />
          <Contact />
          <FAQSection/>
          <Footer />
        </Container>
        
      </section>
    </>
  );
}


/*
removing this part for now. will think about it.
<div className="absolute top-24 sm:top-28 md:top-20 -end-2 sm:-end-6 md:-end-10 p-4 rounded-lg shadow-md dark:shadow-[#e8c83e] bg-white dark:bg-background w-40 sm:w-44 text-center">
                    <h6 className="font-semibold">Discover</h6>
                    <h6 className="text-sm text-slate-400 mt-1">
                    Your Destiny
                    </h6>
                  </div>


*/