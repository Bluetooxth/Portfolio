import React from "react";
import skills from "@/data/Skills";

const Skills = () => {
  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-start space-y-4 container lg:w-[65vw] px-5">
        <div className="flex flex-wrap justify-start items-start gap-5 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center items-center"
            >
              <p className="text-lg lg:text-xl font-medium flex gap-2 items-center px-3 py-2 skills cursor-pointer">
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