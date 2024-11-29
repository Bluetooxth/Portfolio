import React from "react";
import skills from "@/data/Skills";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] lg:w-[65vw] md:w-[75vw]">
        <h2 className="text-3xl font-medium text-zinc-200">What I know</h2>
        <div className="flex flex-wrap justify-start items-start gap-3 mt-3">
          {skills.map((skill, index) => (
            <p
              key={index}
              className="text-lg font-medium flex gap-2 items-center px-3 py-1 border-2 border-zinc-700 cursor-pointer bg-transparent rounded-md text-zinc-300 slow relative"
            >
              <span>
                <Image
                  src={`https://skillicons.dev/icons?i=${skill.skillDev}`}
                  height={24}
                  width={24}
                  alt={skill.skillName}
                />
              </span>
              <span>{skill.skillName}</span>
              <span className="absolute inset-x-0 bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
              <span className="absolute inset-x-0 bottom-0 h-[2px] blur-md w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
