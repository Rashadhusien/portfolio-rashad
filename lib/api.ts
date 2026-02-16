import { aboutQuery, heroQuery, projectsQuery, skillsQuery } from "./queries";
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
