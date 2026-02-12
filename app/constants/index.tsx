import { Github, Linkedin, MessageCircle } from "lucide-react";

export const PHONE_NUMBER = "+201110105367";

export const NAV_LINKS = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Projects",
    url: "#projects",
  },
  {
    title: "Contact",
    url: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    title: "GitHub",
    url: "https://github.com/Rashadhusien",
    icon: <Github />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/rashad-al-rifai-2770622aa/",
    icon: <Linkedin />,
  },
  {
    title: "message",
    url: `https://wa.me/${PHONE_NUMBER}`,
    icon: <MessageCircle />,
  },
];

export const EXPERTISE_AREAS = [
  "Web Development",
  "Agile Methodologies",
  "Cloud Computing",
  "Problem Solving",
  "Team Collaboration",
  "Continuous Learning",
];
