"use client";
import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import axios from "axios";

const ContactMe = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [btn, setBtn] = React.useState("Send");

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
      <div className="flex flex-col justify-start items-start space-y-4 w-[95vw] lg:container">
        <h2 data-aos="zoom-in" className="text-3xl font-medium">
          Contact Me
        </h2>
        <div className="flex flex-col justify-start items-start w-full gap-3">
          <form
            data-aos="fade-up"
            className="flex flex-col justify-start items-start gap-4 w-full"
            onSubmit={sendEmail}
          >
            <div className="flex flex-col justify-start items-start gap-2 w-full">
              <label
                htmlFor="name"
                className="text-2xl font-medium text-slate-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="text-xl font-medium px-3 py-2 outline-none w-full rounded-lg text-slate-300 input"
                placeholder="Your Name"
                required
                value={name}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-2 w-full">
              <label
                htmlFor="email"
                className="text-2xl font-medium text-slate-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="text-xl font-medium px-3 py-2 outline-none w-full rounded-lg text-slate-300 input"
                placeholder="Your Email"
                required
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-2 w-full">
              <label
                htmlFor="message"
                className="text-2xl font-medium text-slate-200"
              >
                Message
              </label>
              <textarea
                id="message"
                className="text-xl font-medium px-3 py-2 outline-none w-full rounded-lg text-slate-300 input"
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-xl font-medium px-4 py-2 flex items-center gap-2 rounded-lg btn"
            >
              {btn} <BsFillSendFill />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;