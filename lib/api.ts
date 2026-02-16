import { aboutQuery, heroQuery } from "./queries";
import { client } from "./sanity";

export const revalidate = 60;

export async function getHero() {
  return client.fetch(heroQuery);
}

export async function getAbout() {
  return client.fetch(aboutQuery);
}
