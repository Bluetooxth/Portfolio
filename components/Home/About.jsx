import React from "react";

const About = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] lg:w-[65vw] md:w-[75vw]">
        <h2 className="text-3xl font-medium text-zinc-300">About me</h2>
        <div className="flex flex-col justify-start items-start gap-1 mt-3">
          <p className="text-lg font-medium text-zinc-300">
            {`Hello I'm Priyanshu Chahar, a self-taught programmer passionate about coding and technology. I specialize in web development, building scalable web applications using MongoDB, PostgreSQL, Express, React, Next.js, and Node.js. I also have experience with languages like Javascript, Golang and C`}
          </p>
          <p className="text-lg font-medium text-zinc-300">
            {`I enjoy solving complex problems through competitive programming and continuously strive to improve my skills and create innovative solutions.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
