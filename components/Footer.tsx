import Image from "next/image";
import Link from "next/link";
import { FooterData, SocialData } from "@/lib/types";
import { ICON_MAP } from "@/app/constants";

const Footer = ({
  footer,
  social,
}: {
  footer: FooterData;
  social: SocialData;
}) => {
  return (
    <footer className="h-[50vh] sm:h-[80vh] mt-20 relative z-10 bg-primary">
      <div className="size-full">
        <div className="container mx-auto  pt-14 sm:pt-32">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl sm:text-4xl font-bold text-white text-center w-full">
              {footer.title}
            </h1>
            <ul className="flex items-center justify-center gap-10 mt-10 ">
              {social.socialLinks.map((link) => (
                <li
                  key={link.title}
                  className="cursor-pointer bg-transparent hover:bg-secondary p-1 sm:p-2 border-b-2 border-secondary  transition-all duration-300"
                >
                  <Link href={link.url}>
                    {
                      ICON_MAP[
                        link.title.toLowerCase() as keyof typeof ICON_MAP
                      ]
                    }
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-white mt-10 text-center">
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
