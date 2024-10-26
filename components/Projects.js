import React from "react";
import projexts from "@/data/Projects";
import Link from "next/link";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Projects = () => {

  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-start gap-4  container lg:w-[65vw] px-5">
        <h2 className="text-3xl font-medium mb-2">
          Projects i worked on
        </h2>
        <div className="grid grid-cols-1 justify-start items-stretch gap-5 w-full">
          {projexts.map((project, index) => (
            <div
              key={index}
              className="flex justify-start items-start w-full"
            >
              <div className="flex flex-col justify-between items-start gap-1 w-full h-full py-3 px-5 cursor-pointer   card">
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                  <h2 className="text-2xl font-medium">
                    {project.name}
                  </h2>
                  <p className="text-lg lg:text-xl font-medium">
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-col justify-start items-start gap-2 mt-3">
                  <p className="text-2xl font-medium flex flex-wrap items-center justify-start gap-3">
                    {project.tech.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </p>
                  <div className="flex flex-wrap justify-start items-start gap-3 mt-2">
                    <Link
                      href={project.link ?? ""}
                      className="text-lg lg:text-xl font-medium flex items-center gap-2 py-1 px-3 btn "
                    >
                      Live <RiExternalLinkFill />
                    </Link>
                    <Link
                      href={project.github}
                      className="text-lg lg:text-xl font-medium flex items-center gap-2 py-1 px-3 btn "
                    >
                      Github <FaGithub />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;