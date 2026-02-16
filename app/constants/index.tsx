import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";

export const PHONE_NUMBER = "+201110105367";
export const MAIL = "rashadhusein440@gmail.com";

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
    buttonText: "GitHub",
    icon: <Github />,
    description: "Explore my projects and contributions on GitHub",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/rashad-al-rifai-2770622aa/",
    buttonText: "LinkedIn",
    icon: <Linkedin />,
    description: "Connect with me on LinkedIn",
  },
  {
    title: "message",
    url: `https://wa.me/${PHONE_NUMBER}`,
    buttonText: PHONE_NUMBER,
    icon: <MessageCircle />,
    description: "Contact us directly via WhatsApp for a quick answer",
  },
  {
    title: "Email",
    url: `mailto:${MAIL}`,
    buttonText: MAIL,
    icon: <Mail />,
    description: "mail me for a quick answer",
  },
];
export const ICON_MAP = {
  github: <Github />,
  linkedin: <Linkedin />,
  whatsapp: <MessageCircle />,
  message: <MessageCircle />,
  mail: <Mail />,
  email: <Mail />,
};

export const EXPERTISE_AREAS = [
  "Web Development",
  "Agile Methodologies",
  "Cloud Computing",
  "Problem Solving",
  "Team Collaboration",
  "Continuous Learning",
];

export const SKILLS_AREAS = [
  {
    title: "Languages & Tools",
    skills: [
      "html",
      "css",
      "js",
      "ts",
      "sass",
      "webpack",
      "vite",
      "firebase",
      "figma",
      "tanstack",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["react", "next", "node", "tailwind", "shakra"],
  },
];
export const TOOLS_AREAS = [
  {
    title: "Tools & Platforms",
    skills: ["git", "cursor"],
  },
];

export const DATABASES_AREAS = [
  {
    title: "Databases",
    skills: ["mongo", "sql"],
  },
];

export const EXPERINCES_CONTENT = [
  {
    title: "Space Environment & Space Weather Trainee",
    description:
      "Completed a 4-week intensive training program at the Egyptian Space Agency focused on space environment and space weather. Gained hands-on experience using Python for space data analysis and modeling.",
    content: (
      <div className="flex justify-center items-center h-full text-center">
        <h5 className="text-2xl font-bold text-slate-100">
          Egyptian Space Academy
        </h5>
      </div>
    ),
  },
  {
    title: "Frontend Developer",
    description:
      "Worked in an Agile, cross-functional team to build and improve real product features. Developed responsive UI components using React, JavaScript, HTML, and CSS. Collaborated with designers and backend developers to turn UI/UX designs into functional interfaces.",
    content: (
      <div className="flex justify-center items-center h-full text-center">
        <h5 className="text-2xl font-bold text-slate-100">
          Huma-Volve Company
        </h5>
      </div>
    ),
  },
  {
    title: "AI Tools for Workplace Productivity",
    description:
      "Completed a professional training program under the patronage of the Ministry of Youth & Sports and the Ministry of Manpower, in collaboration with IOM (UN Migration) and Ta’heal Egypt.",
    content: (
      <div className="flex justify-center items-center h-full text-center">
        <h5 className="text-2xl font-bold text-slate-100">
          Ministry of Youth & Sports
        </h5>
      </div>
    ),
  },
];
