import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
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
    <header className='flex justify-center items-center w-full navbar sticky top-0'>
        <div className='flex justify-start items-start container lg:w-[65vw] py-3 px-5'>
        <div
          className="flex justify-start items-center gap-5"
        >
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              className="md:text-3xl text-xl"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        </div>
    </header>
  )
}

export default Nav