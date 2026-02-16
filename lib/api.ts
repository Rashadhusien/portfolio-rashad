import {
  aboutQuery,
  footerQuery,
  heroQuery,
  projectsQuery,
  skillsQuery,
  socialQuery,
  experincesQuery,
} from "./queries";
import { client } from "./sanity";

export const revalidate = 60;

export async function getHero() {
  return client.fetch(heroQuery);
}

export async function getAbout() {
  return client.fetch(aboutQuery);
}

export async function getSkills() {
  return client.fetch(skillsQuery);
}

export async function getProjects() {
  return client.fetch(projectsQuery);
}

export async function getFooter() {
  return client.fetch(footerQuery);
}

export async function getSocial() {
  return client.fetch(socialQuery);
}

export async function getExperinces() {
  return client.fetch(experincesQuery);
}
