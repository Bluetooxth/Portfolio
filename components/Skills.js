import React from "react";
import skills from "@/data/Skills";

const Skills = () => {
  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-start space-y-4 w-[95vw] lg:container">
        <h2 data-aos="zoom-in" className="text-3xl font-medium">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-start items-start gap-5 w-full">
          {skills.map((skill, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="flex justify-center items-center"
            >
              <p className="text-xl font-medium flex gap-2 items-center text-slate-200 px-4 py-2 skills rounded-md cursor-pointer">
                <span>{React.createElement(skill.skillIcon)}</span>
                <span>{skill.skillName}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;