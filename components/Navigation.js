import React from "react";

const Navigation = ({ currentSection, setCurrentSection }) => {
  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-start container lg:w-[65vw] px-5">
        <div className="flex flex-wrap justify-start items-start w-full gap-5">
          <button
            className={`text-lg lg:text-xl font-medium px-3 py-1 btn ${
              currentSection === "About" ? "active" : ""
            }`}
            onClick={() => setCurrentSection("About")}
          >
            About
          </button>
          <button
            className={`text-lg lg:text-xl font-medium px-3 py-1 btn ${
              currentSection === "Skills" ? "active" : ""
            }`}
            onClick={() => setCurrentSection("Skills")}
          >
            Skills
          </button>
          <button
            className={`text-lg lg:text-xl font-medium px-3 py-1 btn ${
              currentSection === "Projects" ? "active" : ""
            }`}
            onClick={() => setCurrentSection("Projects")}
          >
            Projects
          </button>
          <button
            className={`text-lg lg:text-xl font-medium px-3 py-1 btn ${
              currentSection === "Contact" ? "active" : ""
            }`}
            onClick={() => setCurrentSection("Contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
