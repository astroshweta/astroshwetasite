"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How does an astrology consultation work?",
    answer:
      "In a consultation, we analyze your birth chart, discuss planetary influences, and provide insights tailored to your questions and concerns.",
  },
  {
    question: "What details do I need to provide for a reading?",
    answer:
      "You'll need to provide your date, time, and place of birth for an accurate reading.",
  },
  {
    question: "Can I ask specific questions during the session?",
    answer:
      "Absolutely! You can ask about career, relationships, health, or any other area where you seek guidance.",
  },
  {
    question: "How long does a consultation last?",
    answer:
      "A typical session lasts on average 30 minutes, depending on the package you choose.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Yes, all consultations are completely private and confidential.",
  },
  {
    question: "What if I missed my scheduled consultation ?",
    answer:
      "If you miss your scheduled consultation, you will not be able to reschedule or claim a refund. I will wait for 5 minutes for you to join. We expect you to respect our time and be punctual.",
  },
  {
    question : "How will the consultation be conducted ?",
    answer : "Consultations are conducted via Google Meet or Whatsapp Call. Upon booking, you'll receive detailed instructions and the meeting link via email."
  },
  {
    question: "How can I provide feedback about the session",
    answer: "We value your feedback! Please feel free to share your experience via email or through our Instagram or Whatsapp to help us continue improving our services.",
  }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section id="faq" className="py-16  text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#e8c83e]">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg p-4 transition-all duration-300"
            >
              <button
                className="flex justify-between w-full text-lg font-semibold focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-[#e8c83e]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
