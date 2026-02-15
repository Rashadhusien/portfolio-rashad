import Image from "next/image";
import { Highlighter } from "@/components/highlighter";
import AnimatedWords from "@/components/AnimatedWord";
import RotatingBorder from "@/components/RotatingBorder";
import Link from "next/link";
import { SOCIAL_LINKS } from "../app/constants";
import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/FloatingShapes";

const Hero = () => {
  return (
    <section
      id="hero"
      className="container  mx-auto flex justify-center items-center h-[calc(100vh-87px)] relative z-20  "
    >
      <div className="absolute inset-0 -z-10 hidden sm:block">
        <FloatingShapes />
      </div>
      <div className="h-full text-center ">
        <div className="relative mx-auto mt-4 sm:mt-14 h-[120px] w-[120px]">
          <RotatingBorder />

          <div className="p-2 flex justify-center items-center h-full w-full rounded-full">
            <Image
              src={"/my-face.png"}
              alt="my face"
              width={100}
              height={100}
              className="rounded-full mx-auto w-[100px] h-[100px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-4">
          <div className="flex items-center justify-center gap-2 w-full">
            <span className="text-start text-lg font-bold py-2 px-4 bg-secondary/50 w-fit rounded-full">
              Hi, I&apos;m{" "}
              <Highlighter color="#8c5cff" action="underline">
                Rashad
              </Highlighter>
            </span>
          </div>
          <h2 className="text-5xl font-bold mt-3">
            Web{" "}
            <Highlighter color="#8c5cff" action="box">
              Developer
            </Highlighter>
          </h2>
          <p className="mt-4">
            <AnimatedWords />
          </p>

          <div className="flex items-center gap-4 mt-4">
            {SOCIAL_LINKS.map((link) => (
              <Link href={link.url} target="_blank" key={link.title}>
                <Button
                  aria-label={link.title}
                  className=" text-lg tracking-wider bg-transparent border-b border-primary rounded-none "
                >
                  {link.icon}
                </Button>
              </Link>
            ))}
          </div>

          <button
            aria-label="Contact Me"
            className="hero-button text-lg tracking-wider "
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
