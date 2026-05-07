"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const userMessage = async (e: React.FormEvent) => {
    e.preventDefault(); // ✅ IMPORTANT

    try {
      const api = await axios.post("/api/user", {
        firstname,
        lastname,
        email,
        phone,
        message,
      });

      console.log(api.data);
      //alert("Thank you for your response ✅");
      
      toast("Thank you for your response ✅");
      

      // ✅ Reset form
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast("Something went wrong ❌");
      //alert("Something went wrong ❌");
    }
  };

  return (
    <div className="mt-20 font-sans px-4 sm:px-6 lg:px-10">
      {/* HEADER */}
      <div className="flex flex-col justify-center items-center font-bold gap-2 text-center">
        <h1 className="text-3xl sm:text-4xl">
          Get In <span className="text-amber-400">Touch</span>
        </h1>
        <p className="text-sm sm:text-md font-semibold text-gray-300">
          Let's discuss your project
        </p>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/contact.png"
            alt="contact"
            width={500}
            height={400}
            className="w-full max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>

        {/* FORM */}
        <form
          onSubmit={userMessage}
          className="w-full lg:w-1/2 flex flex-col gap-5 max-w-xl"
        >
          {/* Name Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-700"
              required
            />
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-700"
              required
            />
          </div>

          {/* Email */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded-lg bg-gray-700"
            required
          />

          {/* Phone */}
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 rounded-lg bg-gray-700"
          />

          {/* Message */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-gray-700"
            required
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="bg-gradient-to-l from-amber-300 via-amber-500 to-amber-600 text-white py-2 rounded-lg font-bold text-lg sm:text-xl hover:opacity-90 transition"
          >
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Contact;
