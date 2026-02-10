import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="pt-20 ">
      <Navbar />
      <Hero />
    </main>
  );
}
