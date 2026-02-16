export const heroQuery = `
*[_type == "hero"][0]{
  smallText,
  title,
  loopWords,
  socialLinks,
  contactButtonText,
  contactButtonLink,
  image
}
`;

export const aboutQuery = `
*[_type == "about"][0]{
  title,
  firstDescription,
  secondDescription
}
`;

export const skillsQuery = `
*[_type == "skills"]{
  title,
  category,
  skills[]
}
`;

export const projectsQuery = `
*[_type == "projects"]{
  title,
  description,
  image,
  githubLink,
  liveLink
}
`;
