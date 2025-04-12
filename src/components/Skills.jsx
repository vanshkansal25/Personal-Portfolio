
// import { motion } from "framer-motion";
// import React from "react";

// const logos = [
//   {
//     name: "HTML",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//   },
//   {
//     name: "CSS",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
//   },
//   {
//     name: "JavaScript",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//   },
//   {
//     name: "React",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//   },
//   {
//     name: "Node.js",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//   },
//   {
//     name: "MongoDB",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//   },
//   {
//     name: "TailwindCSS",
//     src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
//   },
//   {
//     name: "Git",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
//   },
//   {
//     name: "GitHub",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//   },
// ];

// export default function SkillCarousel() {
//   return (
//     <div className="bg-neutral-950 py-20 px-4 overflow-hidden text-white text-center">
      
//       <div className="max-w-3xl mx-auto mb-12">
//         <h2 className="text-4xl font-bold mb-4 font-[Typo-6]">🧠 My Skill Odyssey</h2>
//         <p className="text-neutral-400 text-lg font-[Typo-5]">
//           Every glowing logo below represents a tool or technology I’ve explored, tamed, and used to build something meaningful.
//           From structuring the web to breathing life into it, my journey has been shaped by curiosity, consistency, and code.
//         </p>
//       </div>

      
//       <h3 className="text-3xl font-semibold text-purple-400 mb-10 font-[Typo-5]">⚙️ Tools I Groove With</h3>
//       <div className="w-full overflow-hidden">
//         <motion.div
//           className="flex space-x-16"
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{
//             repeat: Infinity,
//             duration: 25,
//             ease: "linear",
//           }}
//         >
//           <div className="flex space-x-16 min-w-max">
//             {[...logos, ...logos].map((logo, index) => (
//               <div
//                 key={index}
//                 className="w-20 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300"
//               >
//                 <img
//                   src={logo.src}
//                   alt={logo.name}
//                   title={logo.name}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       <div className="text-center max-w-2xl mx-auto mt-16">
//         <p className="text-neutral-400 text-base font-[Typo-3]">
//           My skillset isn’t just a list—it’s a map of places I’ve been, challenges I’ve cracked, and ideas I’ve brought to life.
//           I’m always adding new destinations to this journey.
//         </p>
//         <p className="text-purple-400 font-semibold mt-4 font-[Typo-1]">
//           🔄 Keep scrolling, the story never stops.
//         </p>
//       </div>
//     </div>
//   );
// }
import { motion } from "framer-motion";
import React from "react";

const logos = [
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "TailwindCSS",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

export default function SkillCarousel() {
  return (
    <div className="bg-neutral-950 py-20 px-4 overflow-hidden text-white text-center">
      <div className="max-w-3xl mx-auto mb-12">
        {/* Responsive Heading Swap */}
        <h2 className="text-4xl font-bold mb-4 font-[Typo-6] block lg:hidden">🧰 Armory</h2>
        <h2 className="text-4xl font-bold mb-4 font-[Typo-6] hidden lg:block">🧠 My Skill Odyssey</h2>

        {/* Responsive Paragraph (Optional: can also vary content per screen) */}
        <p className="text-neutral-400 text-lg font-[Typo-5]">
          Every glowing logo below represents a tool or technology I’ve explored, tamed, and used to build something meaningful.
          From structuring the web to breathing life into it, my journey has been shaped by curiosity, consistency, and code.
        </p>
      </div>

      <h3 className="text-3xl font-semibold text-purple-400 mb-10 font-[Typo-5]">⚙️ Tools I Groove With</h3>
      
      {/* Logo Carousel */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex space-x-10 sm:space-x-14 md:space-x-16"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          <div className="flex space-x-10 sm:space-x-14 md:space-x-16 min-w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  title={logo.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Closing Text */}
      <div className="text-center max-w-2xl mx-auto mt-16">
        <p className="text-neutral-400 text-base font-[Typo-3]">
          My skillset isn’t just a list—it’s a map of places I’ve been, challenges I’ve cracked, and ideas I’ve brought to life.
          I’m always adding new destinations to this journey.
        </p>
        <p className="text-purple-400 font-semibold mt-4 font-[Typo-1]">
          🔄 Keep scrolling, the story never stops.
        </p>
      </div>
    </div>
  );
}
