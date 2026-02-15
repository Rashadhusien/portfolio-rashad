import { SOCIAL_LINKS } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-[50vh] sm:h-[80vh] mt-20 relative z-10 bg-primary">
      <div className="size-full">
        <div className="container mx-auto  pt-20 sm:pt-32">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl sm:text-4xl font-bold text-white text-center w-full">
              Feel free to connect on social media.
            </h1>
            <ul className="flex items-center justify-center gap-10 mt-10">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.title} className="cursor-pointer">
                  <Link href={link.url}>{link.icon}</Link>
                </li>
              ))}
            </ul>
            <p className="text-white mt-10 ">
              Developed with <span className=" animate-pulse">❤️</span> by
              Rashad
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/footer-curve.svg"
        alt="footer-curve"
        width={1440}
        height={275}
        className="absolute bottom-0 left-0 w-full h-auto rotate-180"
      />
    </footer>
  );
};

export default Footer;
