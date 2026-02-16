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
}

export interface AboutData {
  title: string;
  firstDescription: string;
  secondDescription: string;
}
