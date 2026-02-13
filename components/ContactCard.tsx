import React from "react";
import { Button } from "./ui/button";

interface IProps {
  icon: React.ReactNode;
  text: string;
  buttonText: string;
  link: string;
  description: string;
}

const ContactCard = ({ icon, text, buttonText, link, description }: IProps) => {
  return (
    <div className="contact-card max-w-md p-8 bg-linear-to-br from-primary/10 to-secondary/10 rounded-lg border border-border hover:border-accent transition-colors">
      <a href={link}>
        <Button variant="outline" className="w-full  bg-gray-50">
          {/* <Mail className="w-4 h-4 ml-2" /> */}
          {buttonText}
        </Button>
      </a>
    </div>
  );
};

export default ContactCard;
