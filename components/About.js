import React from "react";

const AboutMe = () => {
  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-start space-y-4 w-[95vw] lg:container">
        <h2 data-aos="zoom-in" className="text-3xl font-medium text-zinc-200">
          About me
        </h2>
        <div
          data-aos="fade-up"
          className="flex justify-start items-start w-full"
        >
          <div className="flex flex-col justify-start items-start space-y-3 p-5 cursor-pointer rounded-lg text-zinc-400 card w-full">
            <p className="text-xl font-medium">{`Hello I'm Priyanshu Chahar, a self-taught programmer passionate about coding and technology. I specialize in web development, building scalable web applications using MongoDB, Express, React, Next.js, and Node.js. I also have experience with languages like Javascript, Golang and Python`}</p>
            <p className="text-xl font-medium">{`I enjoy solving complex problems through competitive programming and continuously strive to improve my skills and create innovative solutions.`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;