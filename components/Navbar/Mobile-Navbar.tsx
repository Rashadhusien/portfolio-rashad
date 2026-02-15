import { useState } from "react";
import { NAV_LINKS } from "@/app/constants";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function MobileNavbar() {
  const [open, setOpen] = useState(false);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      const textElements = gsap.utils.toArray(".text") as HTMLElement[];

      textElements.forEach((text) => {
        gsap.to(text, {
          backgroundSize: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: text,
            start: "center 80%",
            end: "center 20%",
            scrub: true,
          },
        });
      });
    });

    return () => mm.revert();
  });

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
  ) => {
    e.preventDefault();
    const id = url.replace("#", "");
    const smoother = ScrollSmoother.get();

    setOpen(false);

    // allow drawer to close before scrolling
    setTimeout(() => {
      if (url === "/") {
        if (smoother) {
          smoother.scrollTo(0, true);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      if (smoother) {
        smoother.scrollTo(`#${id}`, true, "top top");
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 300);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Drawer direction={"top"} open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="capitalize rounded-full h-10 w-10 shadow-none"
            aria-label="Open menu"
          >
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="data-[vaul-drawer-direction=bottom]:max-h-[70vh] data-[vaul-drawer-direction=top]:max-h-[70vh] py-4"
        >
          <DrawerHeader>
            <DrawerTitle className=" flex items-center justify-between">
              <span className="text-2xl font-bold">Menu</span>
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="rounded-full h-10 w-10 shadow-none"
                  aria-label="Close menu"
                >
                  <X />
                </Button>
              </DrawerClose>
            </DrawerTitle>
          </DrawerHeader>
          <div className="no-scrollbar overflow-y-auto px-4">
            <ul className="flex flex-col items-start gap-4 ">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.title}
                  className="w-full text py-2 rounded-[12px]"
                >
                  <a
                    href={link.url}
                    onClick={(e) => handleScroll(e, link.url)}
                    className="text-link py-2transition-colors hover:text-primary text-2xl font-bold w-full"
                  >
                    {link.title}
                  </a>
                  <a
                    href={link.url}
                    onClick={(e) => handleScroll(e, link.url)}
                    className=" transition-colors px-2 hover:text-primary text-2xl font-bold w-full"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default MobileNavbar;
