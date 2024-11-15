import React from "react";
import skills from "@/data/Skills";

const Skills = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] lg:w-[65vw] md:w-[75vw]">
        <h2 className="text-3xl font-medium text-zinc-200">What I know</h2>
        <div className="flex flex-wrap justify-start items-start gap-3 mt-3">
          {skills.map((skill, index) => (
            <p
              key={index}
              className="text-lg font-medium flex gap-2 items-center px-3 py-1 border-2 border-zinc-700 hover:border-cyan-700 cursor-pointer bg-zinc-900 hover:bg-zinc-950 rounded-md text-zinc-300 slow"
            >
              <span>{skill.skillName}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
