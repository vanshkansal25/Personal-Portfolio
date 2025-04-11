// import { FloatingDock } from "./floating-doc";
// import {
//   IconHome,
//   IconBook,
//   IconUsers,
//   IconMessageCircle,
//   IconUser,
//   IconSearch,
//   IconAward,
// } from "@tabler/icons-react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// export function FloatingDockDemo() {
//   const links = [
//     {
//       title: "Home",
//       icon: (
//         <IconHome className="h-6 w-6 text-white" />
//       ),
//       href: "/",
//     },
//     {
//       title: "Discover",
//       icon: (
//         <IconSearch className="h-6 w-6 text-white" />
//       ),
//       href: "/discover",
//     },
//     {
//       title: "Teach",
//       icon: (
//         <IconAward className="h-6 w-6 text-white" />
//       ),
//       href: "/editor",
//     },
//     {
//       title: "Connect",
//       icon: (
//         <IconUsers className="h-6 w-6 text-white" />
//       ),
//       href: "/connect",
//     },
//     {
//       title: "Messages",
//       icon: (
//         <IconMessageCircle className="h-6 w-6 text-white" />
//       ),
//       href: "/messages",
//     },
//     {
//       title: "Resources",
//       icon: (
//         <IconBook className="h-6 w-6 text-white" />
//       ),
//       href: "/resources",
//     },
//     {
//       title: "Profile",
//       icon: (
//         <IconUser className="h-6 w-6 text-white" />
//       ),
//       href: "/profile",
//     },
//   ];

//   return (
//     <div className="flex items-center justify-center h-[5rem] w-full">
//       <FloatingDock
//         mobileClassName="translate-y-20"
//         items={links}
//         className="bg-transparent border-b border-zinc-900 border-opacity-20 shadow-md p-2 backdrop-blur-sm"
//       >
//         {links.map((link, index) => (
//           <div key={index} className="relative group">
//             <Link to={link.href} className="flex items-center justify-center">
//               {link.icon}
//             </Link>
//             {/* Title appears on hover and shows below the icon */}
//             <span className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-4 text-white text-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
//               {link.title}
//             </span>
//           </div>
//         ))}
//       </FloatingDock>
//     </div>
//   );
// }
// import { useEffect, useState } from "react";

// const Navbar = () => {
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
//     <div className="w-full flex justify-center fixed top-0 z-50">
//       <nav
//         className={`w-[95%] max-w-screen-xl mx-auto mt-4 rounded-4xl flex justify-between items-center px-10 py-4 backdrop-blur-lg transition-all duration-300 ${
//           scrolled ? "bg-white/60 text-black" : "bg-white/10 text-white"
//         }`}
//       >
//         {/* Logo */}
//         <h1 className="text-[13px] font-[Typo-4]">vanshkansal.</h1>

//         {/* Menu */}
//         <div className="flex space-x-6">
//           <a href="#" className="hover:underline font-[Typo-5]">Home</a>
//           <a href="#" className="hover:underline font-[Typo-5]">About</a>
//           <a href="#" className="hover:underline font-[Typo-5]">Projects</a>
//           <a href="#" className="hover:underline font-[Typo-5]">Contact</a>
//         </div>

//         {/* CTA Button */}
//         <button className="px-6 py-2 bg-black text-white  text-center rounded-full hover:scale-105  transition">
//           <div className="text-white text-sm p-1.5 font-[Typo-6] text-center" >
//             Hire Me
//           </div>
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/navbar";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Let’s not leave any part of your story in drafts — fill out all the fields.");
      return;
    }

    setTimeout(() => {
      toast.success("Your message is with me. Let’s co-write something meaningful.");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  const socialLinks = [
    { icon: <FaLinkedin />, link: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaGithub />, link: "https://github.com", label: "GitHub" },
    { icon: <FaTwitter />, link: "https://twitter.com", label: "Twitter" },
    { icon: <FaEnvelope />, link: "mailto:example@email.com", label: "Email" },
  ];

  return (
    <>
      <div className="min-h-screen bg-black px-6 py-20 md:px-16 text-white">
        <Toaster position="top-right" />

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Let’s Co-Write the Next Chapter ✍️</h1>
          <p className="text-gray-400 text-lg">
            Whether it’s a collaboration, a cool idea, or just a “Hey!”, my inbox is always open.
            Let’s connect and build something impactful together.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              className="text-2xl text-gray-400 hover:text-white transition-transform hover:scale-125"
              whileHover={{ y: -5 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-xl max-w-2xl mx-auto border border-white/10 shadow-xl"
        >
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="relative w-full text-white">
        <Navbar />
      </div>
    </>
  );
}
