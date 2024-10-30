import React from "react";

const Hero = () => {

  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-start container lg:w-[65vw] px-5">
        <p
          className="text-xl lg:text-2xl font-medium"
        >{`Hi I'm`}</p>
        <h1
          className="text-4xl font-medium mb-1"
        >{`Priyanshu Chahar`}</h1>
        <p
          className="text-xl lg:text-2xl font-medium flex flex-col space-y-1"
        >
          <span>{`Programmer and a developer`}</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;