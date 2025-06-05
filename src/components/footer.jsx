

import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

const stories = [
  "Every brand tells a story. Mine began with curiosity and grew into creation.",
  "Designing isn’t just building, it's storytelling in pixels and purpose.",
  "Let's create something that people feel, not just see.",
  "Your vision. My creativity. Let’s make it unforgettable.",
];

const CollabPage = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(stories[Math.floor(Math.random() * stories.length)]);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-10 bg-white text-black">
      
      {/* Tagline */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-snug md:leading-snug font-[Typo-5] max-w-4xl mb-4">
        Every great story needs a collaboration — Your  <span className="text-fuchsia-600">Idea</span>, my Code <span className="text-fuchsia-600"> & </span> Design.
      </h1>

      {/* Subheading */}
      <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg mb-6 font-[Typo-6]">
        It’s {new Date().toLocaleTimeString()}. Hit me up—every great build starts with a simple hello.
      </p>

      {/* CTA */}
      <div className="flex gap-4 flex-wrap justify-center">
        <button className="px-6 py-2 sm:px-8 sm:py-2 bg-black text-white rounded-full text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 font-[Typo-5]">
        <a href="mailto:vanshkansal328@gmail.com">SEND AN EMAIL</a>
        </button>
      </div>

      {/* Quote Card */}
      <div className="w-full max-w-3xl mt-10 p-6 rounded-2xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white shadow-xl">
        <p className="text-base sm:text-lg text-center leading-relaxed font-[Typo-5]">
          {quote}
        </p>
        <p className="mt-4 text-center text-xs sm:text-sm text-white/90 font-[Typo-6]">
          This isn’t just collaboration. It’s the start of a shared journey.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-10 text-xl sm:text-2xl text-gray-700 flex-wrap justify-center">
        <a href="https://www.linkedin.com/in/vanshkansal-dev" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-700 transition" />
        </a>
        <a href="https://x.com/Vanshtwt25" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-blue-500 transition" />
        </a>
        <a href="mailto:your-vanshkansal328@gmail.com">
          <FaEnvelope className="hover:text-red-500 transition" />
        </a>
        <a href="https://www.instagram.com/__vanshkansal__" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition" />
        </a>
        <a href="https://github.com/vanshkansal25" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-black transition" />
        </a>
      </div>

      {/* Footer */}
      <p className="mt-10 text-sm text-gray-600 text-center font-[Typo-1]">
        Have a fantastic {new Date().toLocaleDateString("en-US", { weekday: "long" })}!
      </p>
      
      <p className="text-base text-gray-500 mt-1 text-center font-[Typo-1]">
  <span>
    developed by <span className="font-[Typo-4] text-black italic pt-0.5">vansh kansal</span>
  </span>
  <span className="hidden sm:inline">. </span>
  <br className="sm:hidden" />
  <span>All rights reserved.</span>
</p>
    </div>
  );
};

export default CollabPage;
