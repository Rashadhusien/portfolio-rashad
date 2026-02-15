"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
interface IProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  githubLink: string;
}
export default function ThreeDCardProject({
  imageSrc,
  title,
  description,
  link,
  githubLink,
}: IProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="w-[400px] h-[200px] md:w-[600px] md:h-[400px] relative ">
        <Image
          src={imageSrc}
          height="600"
          width="600"
          className=" w-full object-cover rounded-xl  "
          alt="thumbnail"
        />
        <CardItem
          translateZ="50"
          className="text-md font-bold text-white absolute top-5 left-5 bg-secondary/40 p-2 rounded-[6px] "
        >
          {title}
        </CardItem>
        <CardItem
          as="a"
          href={link}
          translateZ="60"
          target="_blank"
          aria-label="Live Preview"
          className=" text-sm max-w-sm mt-2 text-white absolute top-5 right-5 bg-secondary/40 p-2 rounded-[6px] "
        >
          <ArrowUpRight />
        </CardItem>
        <CardItem
          as="a"
          href={githubLink}
          translateZ="60"
          target="_blank"
          aria-label="GitHub Repository"
          className=" text-sm max-w-sm mt-2 text-white absolute top-5 right-20 bg-secondary/40 p-2 rounded-[6px] "
        >
          <Github />
        </CardItem>
        <CardItem
          as="p"
          translateZ="90"
          className=" text-sm max-w-sm mt-2 text-white absolute -bottom-10 md:bottom-10 left-5 bg-secondary/40 p-2 rounded-[6px] "
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
