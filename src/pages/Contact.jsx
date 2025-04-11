// import React from "react";
// import { motion } from "framer-motion";

// export default function ContactPage() {
//   return (
//     <motion.div
//       className="min-h-screen bg-neutral-950 text-white py-16 px-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Hero Section */}
//       <motion.div
//         className="text-center max-w-2xl mx-auto"
//         initial={{ y: 40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-4xl md:text-5xl font-bold">
//           Let’s Co-Write the Next Chapter 📖
//         </h1>
//         <p className="text-lg text-neutral-400 mt-4">
//           Whether it’s a collaboration, a conversation, or a challenge — I’d love to be part of your story. Let’s build something meaningful, together.
//         </p>
//       </motion.div>

//       {/* Contact Form */}
//       <motion.form
//         className="space-y-6 max-w-xl mx-auto mt-12 bg-white p-6 rounded-2xl shadow-xl text-black"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: {},
//           visible: {
//             transition: {
//               staggerChildren: 0.15,
//             },
//           },
//         }}
//       >
//         {["Your Name", "Your Email", "Your Message (Let's talk dreams, code, or coffee ☕)"].map((placeholder, idx) => (
//           <motion.div
//             key={idx}
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//           >
//             {placeholder.includes("Message") ? (
//               <textarea
//                 rows="5"
//                 placeholder={placeholder}
//                 className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
//               />
//             ) : (
//               <input
//                 type={placeholder.includes("Email") ? "email" : "text"}
//                 placeholder={placeholder}
//                 className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//             )}
//           </motion.div>
//         ))}

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <button
//             type="submit"
//             className="bg-purple-600 text-white px-6 py-3 rounded-xl w-full hover:bg-purple-700 transition"
//           >
//             Send Message 🚀
//           </button>
//         </motion.div>
//       </motion.form>

//       {/* Social Links */}
//       <motion.div
//         className="text-center mt-10"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.2 }}
//       >
//         <p className="text-neutral-400">Or reach out via:</p>
//         <div className="flex justify-center space-x-6 mt-4 text-purple-400 text-lg">
//           <a href="mailto:youremail@gmail.com" className="hover:underline">Email</a>
//           <a href="https://linkedin.com/in/yourprofile" className="hover:underline">LinkedIn</a>
//           <a href="https://github.com/yourprofile" className="hover:underline">GitHub</a>
//         </div>
//       </motion.div>

//       {/* Outro Quote */}
//       <motion.p
//         className="text-center text-neutral-500 text-sm mt-12 italic"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.6, duration: 1 }}
//       >
//         "Every great story begins with a hello. Let’s write ours together."
//       </motion.p>
//     </motion.div>
//   );
// }
// import React from "react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import { motion } from "framer-motion";

// const socialLinks = [
//   {
//     name: "LinkedIn",
//     icon: <FaLinkedin size={28} />,
//     href: "https://linkedin.com/in/yourprofile",
//     color: "text-blue-500",
//   },
//   {
//     name: "GitHub",
//     icon: <FaGithub size={28} />,
//     href: "https://github.com/yourprofile",
//     color: "text-gray-700",
//   },
//   {
//     name: "Email",
//     icon: <FaEnvelope size={28} />,
//     href: "mailto:youremail@example.com",
//     color: "text-red-400",
//   },
// ];

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-white px-6 py-20 md:px-20 text-black font-[Typo-6]">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold mb-2">📨 Let’s Co-Write the Next Chapter</h2>
//         <p className="text-neutral-600 text-lg">
//           Whether it’s collaboration, feedback, or a new adventure — I’d love to hear from you.
//         </p>
//       </div>

//       {/* Animated Social Links */}
//       <div className="flex justify-center space-x-6 mb-16">
//         {socialLinks.map((link, index) => (
//           <motion.a
//             key={index}
//             href={link.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2, y: -5 }}
//             whileTap={{ scale: 0.95 }}
//             className={`transition-all duration-300 hover:${link.color}`}
//           >
//             {link.icon}
//           </motion.a>
//         ))}
//       </div>

//       {/* Contact Form */}
//       <div className="max-w-xl mx-auto bg-white border border-neutral-200 rounded-2xl shadow-lg p-8">
//         <form className="space-y-6">
//           <div className="relative">
//             <input
//               type="text"
//               id="name"
//               placeholder=" "
//               className="peer w-full border border-neutral-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//             <label
//               htmlFor="name"
//               className="absolute text-sm text-neutral-500 left-4 top-3 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-black"
//             >
//               Name
//             </label>
//           </div>

//           <div className="relative">
//             <input
//               type="email"
//               id="email"
//               placeholder=" "
//               className="peer w-full border border-neutral-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//             <label
//               htmlFor="email"
//               className="absolute text-sm text-neutral-500 left-4 top-3 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-black"
//             >
//               Email
//             </label>
//           </div>

//           <div className="relative">
//             <textarea
//               id="message"
//               rows="5"
//               placeholder=" "
//               className="peer w-full border border-neutral-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-black"
//             ></textarea>
//             <label
//               htmlFor="message"
//               className="absolute text-sm text-neutral-500 left-4 top-3 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-black"
//             >
//               Message
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-black text-white py-3 rounded-md hover:bg-neutral-800 transition-all"
//           >
//             Send Message 🚀
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/navbar"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy validation
    if (!form.name || !form.email || !form.message) {
      toast.error("Let’s not leave any part of your story in drafts — fill out all the fields.");
      return;
    }

    // Simulate sending
    setTimeout(() => {
      toast.success("Your message is with me. Let’s co-write something meaningful.");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:example@email.com",
      label: "Email",
    },
  ];

  return (
    <>
    <div className="min-h-screen bg-white px-6 py-20 md:px-16 text-black">
      <Toaster position="top-right" />

      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Let’s Co-Write the Next Chapter ✍️</h1>
        <p className="text-gray-600 text-lg">
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
            className="text-2xl text-gray-700 hover:text-black transition-transform hover:scale-125"
            whileHover={{ y: -5 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded-xl max-w-2xl mx-auto shadow-lg"
      >
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Your Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What's on your mind?"
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
    <div className="relative w-full text-black ">
        <Navbar/>
      </div>
    </>
  );
}
