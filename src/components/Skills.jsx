// import React from "react";
// import {
//   SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
//   SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub
// } from "react-icons/si";

// const skills = {
//   "Frontend": [SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss],
//   "Backend": [SiNodedotjs, SiExpress, SiMongodb],
//   "Tools": [SiGit, SiGithub]
// };

// const Skills = () => {
//   return (
//     <div className="min-h-screen bg-white dark:bg-neutral-950 px-6 py-20 md:px-20 text-black dark:text-white">
//       <h2 className="text-3xl md:text-5xl font-bold mb-4">🧰 My Arsenal</h2>
//       <p className="text-neutral-600 dark:text-neutral-300 mb-12 max-w-xl">
//         Every line of code I write is backed by these tools and technologies that help bring ideas to life.
//       </p>

//       <div className="space-y-10">
//         {Object.entries(skills).map(([category, icons]) => (
//           <div key={category}>
//             <h3 className="text-xl font-semibold mb-4">{category}</h3>
//             <div className="flex flex-wrap gap-6">
//               {icons.map((Icon, idx) => (
//                 <div
//                   key={idx}
//                   className="text-4xl hover:scale-110 transition-transform text-purple-600 dark:text-blue-400"
//                 >
//                   <Icon />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;
// const skillsData = [
//     {
//       title: "Chapter I – The Foundation",
//       desc: "Where it all began. The world of web opened its doors.",
//       stack: ["HTML", "CSS", "JavaScript"]
//     },
//     {
//       title: "Chapter II – The Awakening",
//       desc: "Design met function. The UI came alive.",
//       stack: ["React", "Tailwind CSS"]
//     },
//     {
//       title: "Chapter III – The Depths",
//       desc: "The backend whispered secrets. I listened.",
//       stack: ["Node.js", "Express", "MongoDB"]
//     },
//     {
//       title: "Chapter IV – The Weapons",
//       desc: "The right tools turned the tides of every project.",
//       stack: ["Git", "GitHub", "VSCode"]
//     }
//   ];
  
//   export default function Skills() {
//     return (
//       <div className="min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-white px-6 py-16 md:px-20">
//         <h2 className="text-3xl md:text-5xl font-bold mb-10">🧠 Skillset: Unlocked Chapters</h2>
        
//         <div className="space-y-12">
//           {skillsData.map((chapter, idx) => (
//             <div key={idx} className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 md:p-10 shadow-lg">
//               <h3 className="text-xl md:text-3xl font-semibold mb-2">{chapter.title}</h3>
//               <p className="text-neutral-700 dark:text-neutral-300 mb-4">{chapter.desc}</p>
//               <div className="flex flex-wrap gap-4">
//                 {chapter.stack.map((skill, i) => (
//                   <span key={i} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// 
// "use client";
// import { motion } from "framer-motion";
// import React from "react";

// const skills = [
//   {
//     category: "Frontend",
//     items: [
//       {
//         name: "HTML",
//         desc: "Built the bones of the web",
//         img: "../assets/html.png",
//         topOffset: -10,
//       },
//       {
//         name: "CSS",
//         desc: "Styled with elegance",
//         img: "../assets/css.jpg",
//         topOffset: 20,
//       },
//       {
//         name: "JavaScript",
//         desc: "Brought the web to life",
//         img: "../assets/js1.webp",
//         topOffset: -25,
//       },
//       {
//         name: "React",
//         desc: "Mastered components & state",
//         img: "../assets/react.png",
//         topOffset: 10,
//       },
//     ],
//   },
//   {
//     category: "Backend",
//     items: [
//       {
//         name: "Node.js",
//         desc: "Handled server-side magic",
//         img: "../assets/node.png",
//         topOffset: -15,
//       },
//       {
//         name: "MongoDB",
//         desc: "Managed data like a wizard",
//         img: "../assets/mongodb.png",
//         topOffset: 30,
//       },
//     ],
//   },
// ];

// export default function SkillRoute() {
//   return (
//     <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center px-4 py-20">
//       <h2 className="text-4xl font-bold mb-4 text-center">
//         🧠 My Skill Odyssey
//       </h2>
//       <p className="text-neutral-400 mb-12 text-center max-w-xl">
//         Each glowing point marks a milestone in my coding journey.
//       </p>

//       {skills.map((section, sIdx) => (
//         <div
//           key={sIdx}
//           className="w-full max-w-4xl mb-20 relative overflow-visible"
//         >
//           <h3 className="text-2xl font-semibold mb-6 text-purple-400">
//             {section.category}
//           </h3>

//           <div className="relative w-full h-2 bg-neutral-700 rounded-full mb-14 hidden md:block">
//             {section.items.map((skill, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: idx * 0.2 }}
//                 className="absolute w-14 h-14 bg-purple-600 rounded-full shadow-[0_0_20px_5px_rgba(168,85,247,0.6)] hover:scale-110 transition-all cursor-pointer group flex items-center justify-center"
//                 style={{
//                   left: `${(idx / (section.items.length - 1)) * 100}%`,
//                   transform: `translateX(-50%) translateY(${skill.topOffset}px)`,
//                 }}
//               >
//                 <img
//                   src={skill.img}
//                   alt={skill.name}
//                   width={28}
//                   height={28}
//                   className="rounded-full"
//                 />
//                 <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-max bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all z-10 text-center">
//                   <p className="font-semibold">{skill.name}</p>
//                   <p className="text-xs text-neutral-400">{skill.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Mobile view: vertical listing */}
//           <div className="flex flex-col space-y-6 md:hidden">
//             {section.items.map((skill, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.2 }}
//                 className="flex items-center space-x-4 bg-neutral-800 rounded-xl p-4"
//               >
//                 <div className="bg-purple-500 rounded-full p-2 shadow-md">
//                   <img
//                     src={skill.img}
//                     alt={skill.name}
//                     width={32}
//                     height={32}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-white">{skill.name}</p>
//                   <p className="text-sm text-neutral-400">{skill.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// "use client";
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
      {/* Intro Section */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4 font-[Typo-6]">🧠 My Skill Odyssey</h2>
        <p className="text-neutral-400 text-lg font-[Typo-5]">
          Every glowing logo below represents a tool or technology I’ve explored, tamed, and used to build something meaningful.
          From structuring the web to breathing life into it, my journey has been shaped by curiosity, consistency, and code.
        </p>
      </div>

      {/* Infinite Logo Carousel */}
      <h3 className="text-3xl font-semibold text-purple-400 mb-10 font-[Typo-5]">⚙️ Tools I Groove With</h3>
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex space-x-16"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          <div className="flex space-x-16 min-w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="w-20 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300"
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

      {/* Outro Section */}
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
