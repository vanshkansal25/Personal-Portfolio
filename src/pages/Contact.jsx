
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
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/vanshkansal-dev", label: "LinkedIn" },
    { icon: <FaGithub />, link: "https://github.com/vanshkansal25", label: "GitHub" },
    { icon: <FaTwitter />, link: "https://x.com/Vanshtwt25", label: "Twitter" },
    { icon: <FaEnvelope />, link: "mailto:vanshkansal328@gmail.com", label: "Email" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black px-6 py-20 md:px-16 text-white">
        <Toaster position="top-right" />

        <div className="max-w-4xl mx-auto text-center mb-16 mt-5">
          <h1 className="text-4xl font-bold mb-4 text-center md:text-center">
            
            <span className="hidden md:inline">Let’s Co-Write the Next Chapter ✍️</span>
            <span className="inline md:hidden">Let’s Connect 🤝</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Whether it’s a collaboration, a cool idea, or just a “Hey!”, my inbox is always open. Let’s connect and build something impactful together.
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
              className="text-2xl text-gray-300 hover:text-white transition-transform hover:scale-125"
              whileHover={{ y: -5 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-xl max-w-2xl mx-auto shadow-xl"
        >
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-white">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-white">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-white">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
