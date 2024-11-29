import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex justify-start items-start w-[95vw] lg:w-[65vw] md:w-[75vw]">
      <GitHubCalendar
          username="Bluetooxth"
          colorScheme={"dark"}
          fontSize={12}
          blockSize={12}
          blockMargin={4}
          className="w-full overflow-scroll p-3"
        />
      </div>
    </section>
  );
};

export default Github;
