import React from "react";
import projexts from "@/data/Projects";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const Projects = () => {
  return (
    <section className="flex justify-center items-start min-h-screen w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] lg:w-[65vw] md:w-[75vw]">
        <h2 className="text-3xl font-medium text-zinc-200">
          Projetcs i worked on
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-start items-stretch gap-5 mt-5">
          {projexts.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-start gap-3 bg-transparent border-2 border-zinc-700 cursor-pointer p-5 rounded-lg slow relative"
            >
              <div className="flex flex-col justify-start items-start gap-1">
                <h3 className="text-2xl font-medium text-zinc-300">
                  {project.name}
                </h3>
                <p className="text-lg font-medium text-zinc-300">
                  {project.desc}
                </p>
              </div>
              <div className="flex flex-col justify-start items-start gap-3 mt-3">
                <div className="flex flex-wrap justify-start items-center gap-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xl font-medium text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-start items-center gap-3 mt-2">
                  <Link
                    href={project.link ?? ""}
                    className="text-lg font-medium flex gap-2 items-center px-3 py-1 border-2 border-zinc-700  cursor-pointer bg-zinc-900  rounded-md slow text-zinc-300 relative"
                  >
                    Live Demo <AiOutlineGlobal className="inline-block" />
                    <span className="absolute inset-x-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
                    <span className="absolute inset-x-0 top-0 h-[2px] blur-md w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
                  </Link>
                  <Link
                    href={project.github ?? ""}
                    className="text-lg font-medium flex gap-2 items-center px-3 py-1 border-2 border-zinc-700  cursor-pointer bg-zinc-900  rounded-md slow text-zinc-300 relative"
                  >
                    Github <FaGithub className="inline-block" />
                    <span className="absolute inset-x-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
                    <span className="absolute inset-x-0 top-0 h-[2px] blur-md w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
                  </Link>
                </div>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
              <span className="absolute inset-x-0 bottom-0 h-[2px] blur-md w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
