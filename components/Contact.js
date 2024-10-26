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
      <div className="flex flex-col justify-start items-start space-y-4  container lg:w-[65vw] px-5">
        <h2 className="text-3xl font-medium mb-2">
          Drop a message
        </h2>
        <div className="flex flex-col justify-start items-start w-full gap-3">
          <form
            className="flex flex-col justify-start items-start gap-4 w-full"
            onSubmit={sendEmail}
          >
            <div className="flex flex-col justify-start items-start gap-2 w-full">
              <label
                htmlFor="name"
                className="text-2xl font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="text-lg lg:text-xl font-medium px-3 py-2 outline-none w-full input"
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
                className="text-2xl font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="text-lg lg:text-xl font-medium px-3 py-2 outline-none w-full input"
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
                className="text-2xl font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                className="text-lg lg:text-xl font-medium px-3 py-2 outline-none w-full input"
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-xl font-medium px-3 py-2 flex items-center gap-2  btn"
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
