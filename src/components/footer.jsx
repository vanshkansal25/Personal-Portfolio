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
    <>
    
    <div className="min-h-screen w-full flex flex-col items-center justify-center pt-30 pb-5 px-6 bg-white text-black">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 font-[Typo-5]">
        Every great story needs a collaboration—READY to begin ours?
      </h1>

      <p className="text-center text-gray-600 text-base md:text-lg mb-6 font-[Typo-6]">
        It’s {new Date().toLocaleTimeString()}, Hit me up—every great build starts with a simple hello.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        
        <button className="px-5 py-2 bg-black text-white rounded-full text-sm hover:opacity-90 transition font-[Typo-5]">
          SEND AN EMAIL
        </button>
      </div>

      
<div className="w-full max-w-3xl mt-10 p-6 rounded-2xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white shadow-xl">
  <p className="text-lg text-center leading-relaxed font-[Typo-5]">
    Every brand, every portfolio, every product tells a story. Mine began with curiosity and grew into creation. 
    Let’s build something that speaks — loud, clear, and bold.
  </p>
  <p className="mt-4 text-center  text-sm text-white/90 font-[Typo-6]">
    This isn’t just collaboration. It’s the start of a shared journey.
  </p>
</div>


      {/* Social Links */}
      <div className="flex gap-6 mt-10 text-2xl text-gray-700">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-700 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-blue-500 transition" />
        </a>
        <a href="mailto:example@gmail.com">
          <FaEnvelope className="hover:text-red-500 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-black transition" />
        </a>
      </div>

      <p className="mt-10 text-sm text-gray-600 text-center font-[Typo-1]">
        Have a fantastic {new Date().toLocaleDateString("en-US", { weekday: "long" })}!
      </p>
      <br />
      <p className="text-lg text-gray-500 mt-1 text-center font-[Typo-1]">
        developed by <span className="font-[Typo-4] text-black italic">vansh kansal</span>. All rights reserved.
      </p>
    </div>
    </>
  );
};

export default CollabPage;

