import SectionTitle from "../ui/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { services } from "@/app/utils/constants";

const About = () => {
  return (
    <section id="about" className="mt-[140px]">
      <div className="container">
        <div className="flex lg:flex-row flex-col gap-25 items-center">
          <div className="lg:w-[40%] w-full flex-shrink flex-grow-0 basis-auto">
            <div>
              <div className="about-image-part relative">
                <img src="/me.png" alt="About Me" className="rounded-[35px]" />
                <div className="flex items-center rounded-[32px] bg-primary py-2.5 pr-[25px] pl-[15px] absolute left-[25%] bottom-[25%]">
                  <h6 className="font-bold text-black">Available for Work</h6>
                  <div className="w-[15px] h-[15px] rounded-full bg-[#19461a] ml-3 pulse" />
                </div>
                <div className="absolute -left-[10%] top-[25%] rotated_circle">
                  <img src="/dot.png" alt="Shape" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[58%] w-full flex-shrink flex-grow-0 basis-auto m-10">
            <div className="about-content-part rel z-2 rmb-55">
              <SectionTitle className="mb-35">
                <SectionTitle.Name className="text-white">
                  About Me
                </SectionTitle.Name>
                <SectionTitle.Title>
                  {" "}
                  Guiding lives through the{" "}
                  <span className="text-[#e8c83e]">wisdom</span> wisdom of the
                  stars and ancient{" "}
                  <span className="text-[#e8c83e]"> Vedic astrology.</span>
                </SectionTitle.Title>
                <SectionTitle.Description>
                  Hello! I’m  <span className="text-[#e8c83e]">Swetha</span>, a dedicated astrologer with over fifteen
                  years of experience in Vedic astrology, palmistry, and
                  numerology. My journey began as a deep personal passion, which
                  evolved into helping individuals find clarity, purpose, and
                  success through celestial insights.
                </SectionTitle.Description>
              </SectionTitle>
              <>
                <ul className="grid sm:grid-cols-2 grid-cols-1 flex-wrap gap-y-5 mt-9">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      className="text-white text-xl flex items-center gap-3"
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-[#e8c83e]"
                      />{" "}
                      {service}
                    </li>
                  ))}
                </ul>
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
