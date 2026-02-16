export const heroQuery = `
*[_type == "hero"][0]{
  smallText,
  title,
  highlightedTitle,
  loopWords,
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

export const experincesQuery = `
*[_type == "experinces"][0]{
  title,
  experinces[]
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

export const footerQuery = `
*[_type == "footer"][0]{
  title
}
`;

export const socialQuery = `
*[_type == "social"][0]{
  socialLinks
}
`;
