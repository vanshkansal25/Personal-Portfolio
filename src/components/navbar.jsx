
// import React, { useState } from "react";
// import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
// import { motion } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";
// import Navbar from "../components/navbar";

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.message) {
//       toast.error("Let’s not leave any part of your story in drafts — fill out all the fields.");
//       return;
//     }

//     setTimeout(() => {
//       toast.success("Your message is with me. Let’s co-write something meaningful.");
//       setForm({ name: "", email: "", message: "" });
//     }, 1000);
//   };

//   const socialLinks = [
//     { icon: <FaLinkedin />, link: "https://linkedin.com", label: "LinkedIn" },
//     { icon: <FaGithub />, link: "https://github.com", label: "GitHub" },
//     { icon: <FaTwitter />, link: "https://twitter.com", label: "Twitter" },
//     { icon: <FaEnvelope />, link: "mailto:example@email.com", label: "Email" },
//   ];

//   return (
//     <>
//       <div className="min-h-screen bg-black px-6 py-20 md:px-16 text-white">
//         <Toaster position="top-right" />

//         <div className="max-w-4xl mx-auto text-center mb-16">
//           <h1 className="text-5xl font-bold mb-4">Let’s Co-Write the Next Chapter ✍️</h1>
//           <p className="text-gray-400 text-lg">
//             Whether it’s a collaboration, a cool idea, or just a “Hey!”, my inbox is always open.
//             Let’s connect and build something impactful together.
//           </p>
//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center gap-6 mb-12">
//           {socialLinks.map((social, index) => (
//             <motion.a
//               key={index}
//               href={social.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               title={social.label}
//               className="text-2xl text-gray-400 hover:text-white transition-transform hover:scale-125"
//               whileHover={{ y: -5 }}
//             >
//               {social.icon}
//             </motion.a>
//           ))}
//         </div>

//         {/* Contact Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white/5 backdrop-blur-lg p-8 rounded-xl max-w-2xl mx-auto border border-white/10 shadow-xl"
//         >
//           <div className="mb-6">
//             <label className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="John Doe"
//               className="w-full px-4 py-3 rounded-lg bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="john@example.com"
//               className="w-full px-4 py-3 rounded-lg bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="What's on your mind?"
//               rows={5}
//               className="w-full px-4 py-3 rounded-lg bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 px-6 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       <div className="relative w-full text-white">
//         <Navbar />
//       </div>
//     </>
//   );
// }
// import React from "react";
// import { useEffect, useState } from "react";
// import {Link, NavLink} from 'react-router-dom'

// const Navbar = ({ initialTextColor = "text-white" }) => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="w-full flex justify-center fixed top-0 z-50 mt-4">
//       <nav
//         className={`w-full fixed top-0 left-0 flex justify-between items-center px-10 py-4 transition-all duration-300 z-50
//           ${scrolled ? "bg-white text-black shadow-md" : `bg-transparent ${initialTextColor}`}
//         `}
//       >
//         {/* Logo */}
//         <h1 className="text-[15px] font-[Typo-4]">vanshkansal.</h1>

//         {/* Menu */}
//         <div className="flex space-x-7">
//         <NavLink to="/" className="font-[Typo-6]">Home</NavLink>
//         <NavLink to="/about" className="font-[Typo-6]">About</NavLink>
//         <NavLink to="/projects" className="font-[Typo-6]">Projects</NavLink>
//         <NavLink to="/contact" className="font-[Typo-6]">Contact</NavLink>
//         </div>

//         {/* CTA Button */}
//         <button
//           className="px-6 py-2 rounded-full transition-all duration-300 font-[Typo-5] bg-black text-white"
//         >
//           Hire Me
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi"; // hamburger & close icons

// const Navbar = ({ initialTextColor = "text-white" }) => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="w-full flex justify-center fixed top-0 z-50 mt-4">
//       <nav
//         className={`w-full fixed top-0 left-0 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 z-50 ${
//           scrolled ? "bg-white text-black shadow-md" : `bg-transparent ${initialTextColor}`
//         }`}
//       >
//         {/* Logo */}
//         <h1 className="font-[Typo-4] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px]">
//           vanshkansal.
//         </h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-7 font-[Typo-6]">
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/projects">Projects</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//         </div>

//         {/* CTA Button - hidden on small */}
//         <button className="hidden md:block px-6 py-2 rounded-full transition-all duration-300 font-[Typo-5] bg-black text-white">
//           Hire Me
//         </button>

//         {/* Hamburger Icon for small screens */}
//         <div className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="absolute top-16 right-4 w-[85vw] sm:w-[300px] bg-white text-black rounded-lg shadow-lg p-6 flex flex-col space-y-4 font-[Typo-6] transition-all duration-300 md:hidden">
//             <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
//             <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
//             <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
//             <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
//             <button className="mt-4 px-4 py-2 bg-black text-white rounded-full font-[Typo-5]">
//               Hire Me
//             </button>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ initialTextColor = "text-white" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  // const handleClick = () => {
  //   window.scrollTo(0, 0); // Scrolls to the top of the page
  // };
  const handleClick = () => {
    window.scrollTo({
      top: 0,          // Scroll to the top of the page
      behavior: "smooth", // Enable smooth scrolling
    });
  };

  return (
    <>
      <div className="w-full fixed top-0 z-50">
        <nav
          className={`w-full flex justify-between items-center px-6 py-4 transition-all duration-300 ${
            scrolled ? "bg-white text-black shadow-md" : `bg-transparent ${initialTextColor}`
          }`}
        >
          {/* Logo */}
          <h1 className="font-[Typo-4] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[15px]">
            vanshkansal.
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-7">
            <NavLink to="/" onClick={handleClick} className="font-[Typo-6] ">Home</NavLink>
            <NavLink to="/about" className="font-[Typo-6]">About</NavLink>
            <NavLink to="/projects" className="font-[Typo-6]">Projects</NavLink>
            <NavLink to="/contact" className="font-[Typo-6]">Contact</NavLink>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 rounded-full font-[Typo-5] bg-black text-white">
            Hire Me
          </button>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            {menuOpen ? (
              <FiX size={24} onClick={closeMenu} className="cursor-pointer z-50" />
            ) : (
              <FiMenu size={24} onClick={() => setMenuOpen(true)} className="cursor-pointer z-50" />
            )}
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Slide-in Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start px-6 py-8 space-y-6">
          <NavLink to="/" onClick={closeMenu} className="font-[Typo-6]">Home</NavLink>
          <NavLink to="/about" onClick={closeMenu} className="font-[Typo-6]">About</NavLink>
          <NavLink to="/projects" onClick={closeMenu} className="font-[Typo-6]">Projects</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className="font-[Typo-6]">Contact</NavLink>
          <button className="px-6 py-2 rounded-full font-[Typo-5] bg-black text-white mt-4">
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
