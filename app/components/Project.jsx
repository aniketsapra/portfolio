"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ThriftBazaar",
    description: "Frontend for ThriftBazaar(e-commerce website)",
    image: "/assets/thriftbazaar.png",
    gitUrl: "https://github.com/aniketsapra/thriftbazaar",
    previewUrl: "https://thriftbazaar.vercel.app/",
  },
  {
    id: 2,
    title: "Sapra Designs.",
    description: "Frontend for Sapra Designs(interior design business)",
    image: "/assets/sapradesigns.png",
    gitUrl: "https://github.com/aniketsapra/interior-design-webpage",
    previewUrl: "https://sapradesigns.netlify.app/",
  },
  {
    id: 3,
    title: "Nike-Copy",
    description: "Crafted the front-end for the Nike Shoes website",
    image: '/assets/Nike.png',
    gitUrl: "https://github.com/aniketsapra/nike-copy",
    previewUrl: "https://nikeshoescopy.netlify.app/",
  },
  {
    id: 4,
    title: "Pedro's Pizzaria",
    description: "Front-end interface for Pedro’s Pizzari",
    image: "/assets/pizza.png",
    gitUrl: "https://github.com/aniketsapra/pedro-pizzaria",
    previewUrl: "https://pizzapedro.netlify.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-5xl font-poiretfont font-extrabold text-customgreen mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 font-monsfont">
        {projectsData.map((project, index) => (
             <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
        ))}   
          
      </ul>
    </section>
  );
};

export default ProjectsSection;