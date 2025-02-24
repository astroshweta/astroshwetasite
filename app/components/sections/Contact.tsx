"use client";
import { useRef } from "react";
import SectionTitle from "../ui/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faPhone,
  faEnvelope,
  faUser,
  faFileText,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../ui/CustomButton";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  interface EmailFormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    email: HTMLInputElement;
    phone_number: HTMLInputElement;
    subject: HTMLInputElement;
    message: HTMLTextAreaElement;
  }

  interface EmailForm extends HTMLFormElement {
    readonly elements: EmailFormElements;
  }

  const sendEmail = (e: React.FormEvent<EmailForm>) => {
    e.preventDefault();
    console.log(formRef.current);

    if (!formRef.current) return;

    emailjs
      .sendForm("service_4o22fqn", "template_k1u5cz7", formRef.current, {
        publicKey: "_MmFclmNrnK7XW3Xq",
      })
      .then(
        () => {
          alert("SUCCESS! We will contact You");
          formRef.current?.reset();
        },
        (error : any) => {
          alert("Something went wrong please try later..");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="pt-[140px]">
      <div className="container">
        <div className="grid lg:grid-cols-[33%_auto] grid-cols-1 gap-7.5">
          <div className="col-lg-4">
            <div className="contact-content-part pt-5 rpt-0 rmb-25 wow fadeInUp delay-0-2s">
              <SectionTitle className="mb-10">
                <SectionTitle.Title>Contact me</SectionTitle.Title>
                <SectionTitle.Title>
                  Let’s Talk About your{" "}
                  <span className="text-[#e8c83e]">Future</span>
                </SectionTitle.Title>
                <SectionTitle.Description>
                  It is a long-known fact that the stars can guide us, helping
                  us understand life and what’s coming next.
                </SectionTitle.Description>
              </SectionTitle>

              <span className="flex items-center gap-3 pb-10">
                <FontAwesomeIcon
                  icon={faMap}
                  style={{ color: "#FFD43B" }}
                  size="xl"
                />
                <div>
                  <strong className="text-lg text-white font-medium capitalize">
                    our office:
                  </strong>
                  <p>Noida, India</p>
                </div>
              </span>

              <span className="flex items-center gap-3 pb-10">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "#FFD43B" }}
                  size="xl"
                />
                <div>
                  <strong className="text-lg text-white font-medium capitalize">
                    contact number:
                  </strong>
                  <p>+91 80957 07975</p>
                </div>
              </span>

              <span className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#FFD43B" }}
                  size="xl"
                />
                <div>
                  <strong className="text-lg text-white font-medium capitalize">
                    Email us:
                  </strong>
                  <p>work@work.com</p>
                </div>
              </span>
            </div>
          </div>

          <div className="col-lg-8">
            <span className="contact-form contact-form-area overflow-hidden">
              <form
                ref={formRef}
                onSubmit={sendEmail} // Changed here to use onSubmit on the form
                className="contactForm"
                name="contactForm"
              >
                <div className="grid md:grid-cols-2 grid-cols-1 gap-7.5">
                  <div className="relative p-4">
                    <label
                      htmlFor="name"
                      className="text-white text-lg font-DM-Sans mb-[18px] block"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="p-2 w-full bg-white py-[19px] pl-7.5 pr-11 outline-none focus:border-[#e8c83e] focus:border border-transparent border"
                      placeholder="Name"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute top-1/2 translate-y-1/2 right-8"
                    >
                      <FontAwesomeIcon icon={faUser} />
                    </label>
                  </div>

                  <div className="relative p-4">
                    <label
                      htmlFor="email"
                      className="text-white text-lg font-DM-Sans mb-[18px] block"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="p-2 w-full bg-white py-[19px] pl-7.5 pr-11 outline-none focus:border-[#e8c83e] focus:border border-transparent border"
                      placeholder="Email"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute top-1/2 translate-y-1/2 right-8"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </label>
                  </div>

                  <div className="relative p-4">
                    <label
                      htmlFor="phone_number"
                      className="text-white text-lg font-DM-Sans mb-[18px] block"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      maxLength={10}
                      className="p-2 w-full bg-white py-[19px] pl-7.5 pr-11 outline-none focus:border-[#e8c83e] focus:border border-transparent border"
                      placeholder="Phone number"
                      required
                    />
                    <label
                      htmlFor="phone_number"
                      className="absolute top-1/2 translate-y-1/2 right-8"
                    >
                      <FontAwesomeIcon icon={faPhone} />
                    </label>
                  </div>

                  <div className="relative p-4">
                    <label
                      htmlFor="subject"
                      className="text-white text-lg font-DM-Sans mb-[18px] block"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="p-2 w-full bg-white py-[19px] pl-7.5 pr-11 outline-none focus:border-[#e8c83e] focus:border border-transparent border"
                      placeholder="Subject"
                      required
                    />
                    <label
                      htmlFor="subject"
                      className="absolute top-1/2 translate-y-1/2 right-8"
                    >
                      <FontAwesomeIcon icon={faFileText} />
                    </label>
                  </div>

                  <div className="md:col-span-2 col-auto">
                    <div className="relative p-4">
                      <label
                        htmlFor="message"
                        className="text-white text-lg font-DM-Sans mb-[18px] block"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="p-2 w-full bg-white py-[19px] pl-7.5 pr-11 outline-none focus:border-[#e8c83e] focus:border border-transparent border"
                        rows={4}
                        placeholder="Write Your message"
                        required
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2 col-auto ml-2">
                    <div className="relative mb-0">
                      <CustomButton type="submit">
                        Send Me Message{" "}
                        <FontAwesomeIcon icon={faAngleRight} fontSize={14} />
                      </CustomButton>
                    </div>
                  </div>
                </div>
              </form>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
