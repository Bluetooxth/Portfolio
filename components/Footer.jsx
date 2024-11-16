import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full bg-zinc-900">
      <div className="flex justify-between items-center w-[95vw] lg:w-[65vw] md:w-[75vw] py-2 px-5">
        <p className="text-sm font-medium text-zinc-300">
          &copy; {new Date().getFullYear()} Priyanshu Chahar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
