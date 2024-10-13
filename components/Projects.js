import React from "react";
import projexts from "@/data/Projects";
import Link from "next/link";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

const Projects = () => {
  const projects = projexts.slice(0, 3);

  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-start gap-4 w-[95vw] lg:container">
        <h2 data-aos="zoom-in" className="text-3xl font-medium">
          Projects i worked on
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-5 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="flex justify-start items-start w-full"
            >
              <div className="flex flex-col justify-between items-start gap-2 w-full h-full p-5 cursor-pointer rounded-xl card">
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                  <h2 className="text-2xl font-medium text-slate-100">
                    {project.name}
                  </h2>
                  <p className="text-xl font-medium text-slate-200">
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-col justify-start items-start gap-2 mt-3">
                  <p className="text-2xl font-medium flex flex-wrap items-center justify-start gap-3 text-slate-300">
                    {project.tech.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </p>
                  <div className="flex flex-wrap justify-start items-start gap-3 mt-2">
                    <Link
                      href={project.link ?? ""}
                      className="text-xl font-medium px-4 py-1 rounded-lg btn flex items-center gap-2"
                    >
                      Live <RiExternalLinkFill />
                    </Link>
                    <Link
                      href={project.github}
                      className="text-xl font-medium px-4 py-1 rounded-lg btn flex items-center gap-2"
                    >
                      Github <FaGithub />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link data-aos="fade-up" href="/projects" className="self-center">
          <p className="text-xl font-medium px-4 py-2 rounded-lg btn self-center mt-5 flex items-center gap-2">
            View all Projects <MdArrowForward className="text-2xl"/>
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Projects;