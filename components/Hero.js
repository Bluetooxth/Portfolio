import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  const socials = [
    {
      name: "Github",
      link: "https://github.com/Bluetooxth",
      icon: <FaGithub />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/Bluetooxth",
      icon: <FaSquareXTwitter />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/priyannxhuu/",
      icon: <FaLinkedin />,
    },
    {
      name: "Portfolio",
      link: "https://bluetooxth.vercel.app/",
      icon: <FaExternalLinkAlt />,
    },
  ];

  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] lg:container">
        <p
          data-aos="zoom-in"
          className="text-2xl font-medium text-zinc-400"
        >{`Hi I'm`}</p>
        <h1
          data-aos="zoom-in"
          className="text-4xl font-medium text-zinc-300 mb-1"
        >{`Priyanshu Chahar`}</h1>
        <p
          data-aos="zoom-in"
          className="text-2xl font-medium flex flex-col space-y-1 text-zinc-400"
        >
          <span>{`Programmer and a developer`}</span>
        </p>
        <div
          data-aos="zoom-in"
          className="flex flex-wrap justify-start items-center gap-5 mt-4"
        >
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              className="text-3xl text-zinc-400"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;