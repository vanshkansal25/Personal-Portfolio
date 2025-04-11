// import React from "react";
// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// // import Navbar from "../components/navbar";

// const floatingSnippets = [
//   "{ const dream = code(); }",
//   "<div class='vision'>Create</div>",
//   "function nextChapter() { return 'Coming Soon'; }",
//   "// Ideas in progress...",
//   "let magic = imagination + logic;",
//   "<CodeIsPoetry />",
// ];

// export default function ProjectsPage() {
//   return (
//     <div className="relative min-h-screen bg-black text-white px-6 py-24 flex flex-col items-center justify-center overflow-hidden">
//       {/* <Navbar /> */}

//       {/* Floating code fragments */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full">
//         {floatingSnippets.map((snippet, i) => (
//           <motion.div
//             key={i}
//             className="absolute text-xs md:text-sm text-gray-700 font-mono whitespace-nowrap"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             initial={{ y: 0, opacity: 0 }}
//             animate={{
//               y: ["0%", "200%"],
//               opacity: [0.2, 0.6, 0],
//             }}
//             transition={{
//               duration: 12 + Math.random() * 6,
//               repeat: Infinity,
//               ease: "linear",
//               delay: Math.random() * 5,
//             }}
//           >
//             {snippet}
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         className="z-10 text-center max-w-2xl"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-5xl font-bold mb-6">
//           <span className="text-white">
//             <Typewriter
//               words={["Cookinggg... 🍳", "Simmering ideas... 🔥", "Chapter loading... ⏳"]}
//               loop={true}
//               cursor
//               cursorStyle="_"
//               typeSpeed={80}
//               deleteSpeed={60}
//               delaySpeed={1500}
//             />
//           </span>
//         </h1>

//         <motion.p
//           className="text-lg text-gray-300 leading-relaxed"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2, duration: 1 }}
//         >
//           Every masterpiece begins with a blank canvas.  
//           <br />
//           Two new tales are quietly coming to life — bold, untold, and built to inspire.
//           <br /><br />
//           This page isn’t empty... it’s evolving.
//         </motion.p>

//         <motion.p
//           className="mt-10 text-sm text-gray-500 italic"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2, duration: 1 }}
//         >
//           “Every line of code is a sentence in your story. The next chapters are being written.”
//         </motion.p>
//       </motion.div>
//     </div>
//   );
// }
// import React from "react";
// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import { FaTools, FaCodeBranch, FaSpinner } from "react-icons/fa";
// import "../assets/style.css"

// export default function ProjectsPage() {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden px-6 py-20">
//       {/* Floating Elements */}
//       <motion.div
//         className="absolute top-10 left-10 text-white text-xl"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 3, repeat: Infinity }}
//       >
//         <FaTools />
//       </motion.div>
//       <motion.div
//         className="absolute bottom-20 right-16 text-white text-xl"
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 3, repeat: Infinity }}
//       >
//         <FaCodeBranch />
//       </motion.div>
//       <motion.div
//         className="absolute bottom-10 left-1/2 text-white text-xl"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//       >
//         <FaSpinner />
//       </motion.div>

//       {/* Text Content */}
      
//       <h1 className="text-4xl md:text-6xl font-bold mb-6">

//         <Typewriter
//           words={["Cooking up something special...", "Two ideas. Endless potential.", "Coming soon to a terminal near you."]}
//           loop={0}
//           cursor
//           cursorStyle="|"
//           typeSpeed={60}
//           deleteSpeed={30}
//           delaySpeed={2000}
//         />
//       </h1>

//       <p className="text-gray-400 max-w-xl text-center mt-4">
//         Every story has a chapter where the hero is preparing behind the scenes. This is mine. Stay tuned as the next innovations take shape.
//       </p>

//       {/* Ambient Background SVG or blur pattern could go here */}
//     </div>
//   );
// }
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaTools, FaCodeBranch, FaSpinner,FaReact, FaNodeJs, FaTerminal} from "react-icons/fa";
import "../assets/style.css";
// // import Navbar from "../components/navbar";
export default function ProjectsPage() {
  const controls = useAnimation();

  useEffect(() => {
    const glitchLoop = async () => {
      while (true) {
        await controls.start({
          x: [0, -2, 2, -1, 1, 0],
          opacity: [1, 0.7, 1],
          transition: { duration: 0.15 },
        });
        await new Promise((res) => setTimeout(res, Math.random() * 3000 + 1000));
      }
    };
    glitchLoop();
  }, [controls]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden px-6 py-20 glitch-overlay">
       {/* <Navbar /> */}
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-white text-xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <FaTools />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-16 text-white text-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <FaCodeBranch />
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/2 text-white text-xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <FaSpinner />
      </motion.div>
      <motion.div
  className="absolute top-24 right-10 text-white text-xl"
  animate={{ y: [0, 15, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
>
  <FaReact />
</motion.div>

<motion.div
  className="absolute bottom-10 left-12 text-white text-xl"
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
>
  <FaNodeJs />
</motion.div>

{/* <motion.div
  className="absolute bottom-32 right-1/3 text-white text-xl"
  animate={{ rotate: [0, -15, 0, 15, 0] }}
  transition={{ duration: 3.5, repeat: Infinity }}
>
  <FaTerminal />
</motion.div> */}


      {/* Glitchy Title */}
      {/* <motion.h1
        animate={controls}
        className="text-4xl md:text-6xl font-bold mb-6 text-center"
      >
        Cooking up something special...
      </motion.h1> */}
      {/* <div className="relative text-4xl md:text-6xl font-bold mb-6 text-center glitch-wrapper">
  <motion.span
    className="glitch-text"
    initial={{ x: 0 }}
    animate={{
      x: [0, -1, 1, -2, 2, 0],
      y: [0, 1, -1, 0],
    }}
    transition={{
      duration: 0.4,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  >
    Cooking up something special...
  </motion.span>
</div> */}
<div className="glitch-container">
  <motion.h1
    className="glitch"
    initial={{ opacity: 1 }}
    animate={{
      opacity: [1, 0.9, 1, 0.7, 1],
      x: [0, -2, 2, -1, 1, 0],
      y: [0, 1, -1, 0],
    }}
    transition={{
      duration: 0.5,
      repeat: Infinity,
      repeatType: "loop",
    }}
  >
    Cooking up something special...
  </motion.h1>
  <h1 aria-hidden="true" className="glitch glitch-before">Cooking up something special...</h1>
  <h1 aria-hidden="true" className="glitch glitch-after">Cooking up something special...</h1>
</div>



      {/* Typewriter Subtitle */}
      <h2 className="text-lg md:text-xl text-gray-400 mt-4 mb-4 text-center">
        <Typewriter
          words={[
            "Two ideas. Endless potential.",
            "Coming soon to a terminal near you.",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={30}
          delaySpeed={2000}
        />
      </h2>

      {/* Paragraph */}
      <p className="text-gray-400 max-w-xl text-center mt-2">
        Every story has a chapter where the hero is preparing behind the scenes. This is mine. Stay tuned as the next innovations take shape.
      </p>
    </div>
  );
}
