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
      <div className="flex flex-col justify-start items-center w-[95vw]">
        <h2 className="text-3xl font-medium text-zinc-200">Find me on</h2>
        <div className="flex flex-col gap-3 justify-start items-center mt-5 w-full max-w-[600px]">
          {links.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              target="_blank"
              className="flex justify-between items-center bg-transparent border-2 border-zinc-700 hover:border-cyan-700 cursor-pointer px-3 py-2 text-lg font-medium text-zinc-300 rounded-md slow w-full"
            >
              <span className="text-2xl">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
