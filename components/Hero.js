import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
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
      icon: <FaLink />,
    },
  ];

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
        <div
          className="flex flex-wrap justify-start items-center gap-5 mt-4"
        >
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              className="text-3xl"
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