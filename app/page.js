import About from "@/components/Home/About";
import ContactMe from "@/components/Home/Contact";
import Github from "@/components/Home/Github";
import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import React from "react";

const Home = () => {
  return (
    <>
      <main className="space-y-12 pt-12 pb-28">
        <Hero />
        <About />
        <Skills />
        {/* <Github /> */}
        <ContactMe />
      </main>
    </>
  );
};

export default Home;
