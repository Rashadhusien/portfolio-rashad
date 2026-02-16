import About from "@/components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import dynamic from "next/dynamic";
import {
  getAbout,
  getHero,
  getProjects,
  getSkills,
  getFooter,
  getSocial,
  getExperinces,
} from "@/lib/api";

const Projects = dynamic(() => import("@/components/Projects"));
const Skills = dynamic(() => import("@/components/Skills"));
const Text = dynamic(() => import("@/components/Text"));
const Contact = dynamic(() => import("@/components/Contact"));
const Experinces = dynamic(() => import("@/components/Experinces"));
// const ScrollBasedVelocity = dynamic(
//   () => import("@/components/ScrollBasedVelocity"),
// );
const Footer = dynamic(() => import("@/components/Footer"));

export default async function Home() {
  const hero = await getHero();
  const about = await getAbout();
  const skills = await getSkills();
  const projects = await getProjects();
  const footer = await getFooter();
  const social = await getSocial();
  const experinces = await getExperinces();
  return (
    <main className=" relative  z-10 ">
      <Navbar />
      <Hero hero={hero} social={social} />
      <About about={about} />
      <Skills skills={skills} />
      <Text />
      <Projects projects={projects} />
      <Experinces experinces={experinces} />
      {/* <ScrollBasedVelocity /> */}
      <Contact />
      <Footer footer={footer} social={social} />
    </main>
  );
}
