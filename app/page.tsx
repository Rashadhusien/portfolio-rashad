import About from "@/components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import dynamic from "next/dynamic";
import { getAbout, getHero, getProjects, getSkills } from "@/lib/api";

const Projects = dynamic(() => import("@/components/Projects"));
const Skills = dynamic(() => import("@/components/Skills"));
const Text = dynamic(() => import("@/components/Text"));
const Contact = dynamic(() => import("@/components/Contact"));
const Experinces = dynamic(() => import("@/components/Experinces"));
const ScrollBasedVelocity = dynamic(
  () => import("@/components/ScrollBasedVelocity"),
);
const Footer = dynamic(() => import("@/components/Footer"));

export default async function Home() {
  const hero = await getHero();
  const about = await getAbout();
  const skills = await getSkills();
  const projects = await getProjects();

  return (
    <main className=" relative  z-10 ">
      <Navbar />
      <Hero hero={hero} />
      <About about={about} />
      <Skills skills={skills} />
      <Text />
      <Projects projects={projects} />
      <Experinces />
      <ScrollBasedVelocity />
      <Contact />
      <Footer />
    </main>
  );
}
