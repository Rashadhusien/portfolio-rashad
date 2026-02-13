import React from "react";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="container  mx-auto    ">
      <SectionTitle
        spanTitle="contact"
        title="Contact Me"
        description="Get In Touch"
      />
      <div className="flex justify-center items-center">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
