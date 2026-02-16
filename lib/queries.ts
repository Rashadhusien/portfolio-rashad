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
