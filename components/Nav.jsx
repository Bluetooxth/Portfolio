import React from "react";
import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { GrLink } from "react-icons/gr";

const Nav = () => {
  const docIcons = [
    {
      name: "Home",
      link: "/",
      icon: <MdOutlineHome />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <AiOutlineCode />,
    },
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
    {
      name: "Links",
      link: "/links",
      icon: <GrLink />,
    },
  ];

  return (
    <section className="flex justify-center items-center w-full bg-zinc-900 bg-opacity-20 fixed bottom-3 z-10">
      <div className="flex justify-center items-center gap-10 py-3 md:py-4 px-7 rounded-full backdrop-blur-lg relative">
        {docIcons.map((icon, index) => (
          <Link key={index} href={icon.link} target="">
            <span className="relative flex flex-col items-center group text-2xl md:text-3xl text-zinc-300 slow">
              {icon.icon}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm bg-zinc-800 text-white px-3 py-1 rounded-lg absolute -top-10">
                {icon.name}
              </span>
            </span>
          </Link>
        ))}
        <span className="absolute inset-x-0 bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
        <span className="absolute inset-x-0 bottom-0 h-[2px] blur-md w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
        {/* <span className="absolute inset-x-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
        <span className="absolute inset-x-0 top-0 h-[2px] blur-md w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span> */}
      </div>
    </section>
  );
};

export default Nav;
