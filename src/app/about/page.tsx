"use client";
import ServiceCard from "@/components/ServiceCard";
import React, { useEffect } from "react";
import { services } from "../../libs/ServiceData.js";
import IconCloud from "@/components/magicui/icon-cloud.tsx";

const About = () => {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
  return (
    <div className="p-6 flex flex-col flex-auto gap-2">
      <div className="heading">
        <h1 className=" font-black text-3xl relative about">About</h1>
        {/* <h1>About</h1> */}
        <div className="line max-w-[100px] "></div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        quibusdam iusto itaque commodi laborum ad exercitationem dolore
        excepturi autem at, mollitia saepe possimus ea eaque architecto facere
        ipsum doloribus veritatis. Incidunt asperiores amet rem? Voluptates sed
        magni molestias illum quos repudiandae deleniti, dolorum suscipit?
        Dolorem reprehenderit aliquam, iste corrupti numquam fugiat dicta fugit
        dolores commodi deleniti delectus amet, modi necessitatibus quo ullam
        repellendus et nemo tempora.
      </div>
      <h2 className=" font-extrabold text-2xl mb-2">What I Do!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard service={service} index={index} key={index} />
        ))}
      </div>
      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
};

export default About;
