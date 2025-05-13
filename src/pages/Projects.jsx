
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaTools, FaCodeBranch, FaSpinner, FaReact, FaNodeJs } from "react-icons/fa";
import "../assets/style.css";
import Navbar from "../components/navbar";

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
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden px-6 py-20 glitch-overlay">
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
            <span className="hidden md:inline">Cooking up something special...</span>
            <span className="md:hidden">Cooking... 🍳</span>
          </motion.h1>
          <h1 aria-hidden="true" className="glitch glitch-before">
            <span className="hidden md:inline">Cooking up something special...</span>
            <span className="md:hidden">Cooking... 🍳</span>
          </h1>
          <h1 aria-hidden="true" className="glitch glitch-after">
            <span className="hidden md:inline">Cooking up something special...</span>
            <span className="md:hidden">Cooking... 🍳</span>
          </h1>
        </div>

        <h2 className="text-lg md:text-xl text-gray-400 mt-4 mb-4 text-center">
          <Typewriter
            words={["Two ideas. Endless potential.", "Coming soon to a terminal near you."]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </h2>

        <p className="text-gray-400 max-w-xl text-center mt-2">
          Every story has a chapter where the hero is preparing behind the scenes. This is mine. Stay tuned as the next innovations take shape.
        </p>
      </div>
    </>
  );
}
