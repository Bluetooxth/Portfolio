import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 justify-start items-start w-[95vw] lg:w-[65vw] md:w-[75vw]">
        <div className="flex flex-col justify-start items-start gap-1">
          <p className="text-xl font-medium text-cyan-500 mt-5 md:mt-0">
            {`Hello I'm`}
          </p>
          <h2 className="text-3xl font-medium text-zinc-200">
            Priyanshu Chahar
          </h2>
          <p className="text-lg font-medium text-zinc-300">
            Developer and Programmer
          </p>
          <p className="text-md text-zinc-300 bg-transparent py-1 rounded-md relative">
            {`3rd Year CSE(AIML)`}
            <span className="absolute inset-x-0 bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
            <span className="absolute inset-x-0 bottom-0 h-[2px] blur-md w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
          </p>
        </div>
        <div className="flex justify-start items-center">
          <Image
            src={`https://avatars.githubusercontent.com/u/165533860?v=4`}
            alt=""
            height={200}
            width={200}
            className="h-[200px] w-[200px] rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
