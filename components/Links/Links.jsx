import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Links = () => {
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
    {
      name: "Discord",
      link: "https://discord.com/users/bluetooxth",
      icon: <FaDiscord />,
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@bluetooxth",
      icon: <FaYoutube />,
    },
  ];

  return (
    <section className="flex justify-center items-start w-full min-h-screen">
      <div className="flex flex-col justify-start items-center w-[95vw] lg:w-[65vw] md:w-[75vw]">
        <h2 className="text-3xl font-medium text-zinc-200">Find me on</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-7 justify-start items-stretch">
          {links.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              target="_blank"
              className="flex justify-center items-center bg-zinc-900 hover:bg-zinc-950 border-[3px] border-zinc-700 hover:border-cyan-700 cursor-pointer p-7 rounded-md slow"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
