import React from "react";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";
import TechIconCloud from "./TechIconCloud";

const Contact = () => {
  return (
    <section id="contact" className="container  mx-auto    ">
      <SectionTitle
        spanTitle="contact"
        title="Contact Me"
        description="Get In Touch"
      />
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center flex-1">
          <ContactForm />
        </div>
        <div className="hidden md:block   flex-1">
          <TechIconCloud />
        </div>
      </div>
    </section>
  );
};

export default Contact;
