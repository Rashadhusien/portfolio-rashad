export interface SocialLink {
  buttonText: string;
  description: string;
  title: string;
  url: string;
  _key?: string;
}

export interface HeroData {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "hero";
  contactButtonLink: string;
  contactButtonText: string;
  image: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    _type: "image";
  } | null;
  loopWords: string[];
  smallText: string;
  socialLinks: SocialLink[];
  title: string;
  highlightedTitle: string;
}

export interface AboutData {
  title: string;
  firstDescription: string;
  secondDescription: string;
}

export interface Skill {
  _key: string;
  name: string;
  image: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    _type: "image";
  };
}

export interface SkillsData {
  _id: string;
  title: string;
  category: "main" | "framework" | "tool" | "database";
  skills: Skill[];
}

export interface ProjectData {
  _id: string;
  title: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    _type: "image";
  };
  githubLink: string;
  liveLink: string;
}
