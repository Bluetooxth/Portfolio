import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  const links = [
    {
      name: "Github",
      link: "https://github.com/bluetooxth",
      icon: <FaGithub />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/bluetooxth",
      icon: <FaXTwitter />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/priyannxhuu",
      icon: <FaLinkedinIn />,
    },
  ];

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 justify-start items-start w-[95vw] lg:w-[65vw] md:w-[75vw]">
        <div className="flex flex-col justify-start items-start gap-1">
          <p className="text-lg font-medium text-cyan-600 mt-5 md:mt-0">
            {`Hello I'm`}
          </p>
          <h2 className="text-3xl font-medium text-zinc-200">
            Priyanshu Chahar
          </h2>
          <p className="text-lg font-medium text-zinc-300">
            Developer and Programmer
          </p>
          <p className="text-lg font-medium text-zinc-300">{`UTC+05:30, India`}</p>
          <div className="flex flex-wrap justify-start items-center gap-3 mt-2">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                target="_blank"
                className="text-2xl text-zinc-300"
              >
                <span>{link.icon}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-start items-center">
          <img
            src="https://avatars.githubusercontent.com/u/165533860?v=4"
            alt=""
            className="h-[200px] w-[200px] rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
