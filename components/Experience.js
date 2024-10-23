import React from "react";
import experience from "@/data/Exp";

const Experience = () => {
  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-start space-y-4 w-[95vw] lg:container">
        <h2 data-aos="zoom-in" className="text-3xl font-medium text-zinc-200">
          Experience
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-start items-stretch gap-5 w-full">
          {experience.map((exp, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="flex flex-col justify-start items-start w-full"
            >
              <div className="flex flex-col justify-start items-start gap-2 w-full p-5 cursor-pointer rounded-lg card">
                <h2 className="text-2xl font-medium text-zinc-300">
                  {exp.company}
                </h2>
                <p className="text-lg lg:text-xl font-medium text-zinc-400">
                  {exp.title}
                </p>
                <p className="text-lg lg:text-xl font-medium text-zinc-400">{exp.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;