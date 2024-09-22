import React from "react";

const Expertise = () => {
  const areas = [
    {
      name: "REST API Development",
      desc: "Developing scalable REST APIs using the MERN stack.",
    },
    {
      name: "Frontend Development",
      desc: "Create responsive, modern user interfaces with Next.js or React.",
    },
    {
      name: "Upgrading Existing Web Applications",
      desc: "Enhance and modernize existing web applications to meet current standards.",
    },
  ];

  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-start space-y-4 w-[95vw] lg:container">
        <h2 data-aos="zoom-in" className="text-3xl font-medium">
          Area of expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-5 w-full">
          {areas.map((area, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="flex flex-col justify-start items-start w-full"
            >
              <div className="flex flex-col justify-start items-start gap-2 w-full p-5 cursor-pointer rounded-xl card">
                <h2 className="text-2xl font-medium text-slate-100">{area.name}</h2>
                <p className="text-xl font-medium text-slate-200">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;