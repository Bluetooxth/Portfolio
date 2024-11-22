import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <section className="flex justify-center items-center w-full bg-zinc-900 bg-opacity-20 sticky top-0 backdrop-blur-lg">
      <div className="flex justify-between items-center w-[95vw] lg:w-[65vw] md:w-[75vw] py-3 px-5">
        <div className="">
          <h2 className="text-2xl font-medium text-zinc-300 logo">
            <Link href={"/"}>Priyanshu</Link>
          </h2>
        </div>
        <div className="flex justify-end items-center gap-5">
          <Link
            href={"/projects"}
            className="text-zinc-300 hover:text-cyan-600 slow"
          >
            Projects
          </Link>
          <Link
            href={"/links"}
            className="text-zinc-300 hover:text-cyan-600 slow"
          >
            Links
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Nav;
