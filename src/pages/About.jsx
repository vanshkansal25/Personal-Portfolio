
import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import "../assets/style.css"
import TimelineDemo from "../components/TimelineDemo";
import Navbar from "../components/navbar"
import myphoto2 from "../assets/myphoto2.jpeg"
import SkillCarousel from "../components/Skills";
import CollabPage from "../components/footer";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function StorySection() {
  return (
    <>
      <Navbar initialTextColor = "text-black" /> {/* Keep only this Navbar here */}

      <div className="relative w-full min-h-screen pt-24 px-6 md:px-16 bg-white overflow-hidden text-black">
        {/* Remove this duplicate Navbar below */}
        {/* <Navbar initialTextColor="text-black"/> */}

        <div
          className={cn(
            "absolute inset-0 z-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)]"
          )}
        />
        
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>

        <div className="relative z-20">
          <div className="text-center mb-16">
            <p className="text-2xl font-medium text-neutral-600 font-[Typo-1]">
              “Every developer has an origin story. Here’s mine.”
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <span role="img" aria-label="waving hand" className="text-5xl inline-block mr-2 wave-hand">👋</span>

              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Hey, I’m Vansh.
              </h1>
              <p className="text-lg text-black leading-relaxed font-[Typo-6]">
                I’m a self-taught developer with a passion for turning ideas into interactive experiences. From building my first webpage at midnight to exploring the world of full-stack development, my journey is fueled by curiosity and creativity. I love crafting intuitive designs, writing clean code, and constantly evolving with the tech landscape. This space is my story — built one commit at a time.
              </p>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src={myphoto2} 
                alt="Vansh Kansal"
                className="rounded-2xl object-cover h-full max-h-[400px] w-[470px] shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-950 pb-5">
        <TimelineDemo />
      </div>

      <div className="pt-10 bg-neutral-950">
        <SkillCarousel />
      </div>

      <main className="w-full flex flex-col items-center justify-center pt-10 pb-5 px-6 bg-white text-black">
        <CollabPage />
      </main>
    </>
  );
}

