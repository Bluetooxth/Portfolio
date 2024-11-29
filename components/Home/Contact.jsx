"use client";
import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import axios from "axios";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [btn, setBtn] = useState("Send");

  const sendEmail = async (e) => {
    e.preventDefault();
    setBtn(`Sending...`);
    try {
      const response = await axios.post("/api/email", {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setBtn(`Sent`);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setBtn(`Error`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setBtn(`Error`);
    }
  };

  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-start gap-4 w-[95vw] lg:w-[65vw] md:w-[75vw]">
        <h2 className="text-3xl font-medium text-zinc-200">
          Drop me a message
        </h2>
        <div className="flex flex-col justify-start items-start w-full gap-3">
          <form
            className="flex flex-col justify-start items-start gap-4 max-w-[600px] w-full"
            onSubmit={sendEmail}
          >
            <div className="flex flex-col justify-start items-start gap-2 w-full relative">
              <label
                htmlFor="name"
                className="text-xl font-medium text-zinc-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="text-lg font-medium px-3 py-2 outline-none w-full bg-transparent border-2 border-zinc-700 rounded-md text-zinc-300 slow"
                placeholder="Your Name"
                required
                value={name}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
              />
              <span className="absolute inset-x-0 bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
              <span className="absolute inset-x-0 bottom-0 h-[2px] blur-md w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
            </div>
            <div className="flex flex-col justify-start items-start gap-2 w-full relative">
              <label
                htmlFor="email"
                className="text-xl font-medium text-zinc-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="text-lg font-medium px-3 py-2 outline-none w-full bg-transparent border-2 border-zinc-700 rounded-md text-zinc-300 slow"
                placeholder="Your Email"
                required
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="absolute inset-x-0 bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
              <span className="absolute inset-x-0 bottom-0 h-[2px] blur-md w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
            </div>
            <div className="flex flex-col justify-start items-start gap-2 w-full relative">
              <label
                htmlFor="message"
                className="text-xl font-medium text-zinc-300"
              >
                Message
              </label>
              <textarea
                id="message"
                className="text-lg font-medium px-3 py-2 outline-none w-full bg-transparent border-2 border-zinc-700 rounded-md text-zinc-300 slow"
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <span className="absolute inset-x-0 bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
              <span className="absolute inset-x-0 bottom-0 h-[2px] blur-md w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
            </div>
            <button
              type="submit"
              className="text-lg font-medium flex gap-2 items-center px-3 py-1 border-2 border-zinc-700 cursor-pointer bg-transparent rounded-md text-zinc-300 slow relative"
            >
              {btn} <BsFillSendFill className="inline-block" />
              <span className="absolute inset-x-0 bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
              <span className="absolute inset-x-0 bottom-0 h-[2px] blur-md w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
