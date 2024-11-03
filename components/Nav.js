import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Nav = () => {
  const socials = [
    {
      name: "Github",
      link: "https://github.com/Bluetooxth",
      icon: <FaGithub />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/Bluetooxth",
      icon: <FaXTwitter />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/priyannxhuu/",
      icon: <FaLinkedinIn />,
    },
  ];

  return (
    <header className="flex justify-center items-center w-full navbar sticky top-0">
      <div className="flex justify-between items-start container lg:w-[65vw] py-3 px-5">
        <div className="flex justify-start items-center gap-5">
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              className="md:text-2xl text-xl"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <div className="text-lg font-medium">
          <Link href={"/links"}>{`/links`}</Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
