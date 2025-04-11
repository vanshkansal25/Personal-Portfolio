
import React from "react";
import { Timeline } from "./Timeline";
import cc1 from "../assets/cc1.jpg"
import cc2 from "../assets/cc2.jpg"

export default function TimelineDemo() {
  const data = [
    {
      title: "The Origin",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base font-normal mb-8 font-[Typo-6]">
          I didn’t come from a big tech background. But I was always curious — how websites work, how apps are made.
           I started experimenting with HTML and CSS, making static
            pages and customizing blogs. What seemed like a hobby soon became a
            passion as I dove deeper into the world of web development.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Origin"
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80"
              alt="Early days"
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "The Quest",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base font-normal mb-8 font-[Typo-6]">
          I knew just learning wasn’t enough — I needed to apply. That’s when the real quest began. 
          I dove into React, JavaScript, Java, and DSA.
           From
            front-end to full-stack, from confusion to clarity — I embraced the
            chaos of learning. This phase taught me the value of community,
            open-source, and most importantly — consistency.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=800&q=80"
              alt="The Quest"
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Code grind"
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "The Growth Arc",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base font-normal mb-8 font-[Typo-6]">
          After learning the basics, I started building actual projects — 
          not just for practice, but to create something useful.I understood that coding is not just about writing code — it’s about solving real problems. I also started caring more about design, user experience, and writing clean,
           readable code.This phase made me feel like a <span className="font-bold">real developer</span> , not just a learner.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
              alt="Teamwork"
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1587614203976-365c74645e83?auto=format&fit=crop&w=800&q=80"
              alt="Growth"
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Current Chapter",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base font-normal mb-8 font-[Typo-6]">
          Right now, I’m focusing on backend development and completing strong full-stack projects for my portfolio.

I’m not perfect — but I’m improving daily. Every day, I’m learning something new, building something better.

This chapter is all about growth, hard work, and preparing for big opportunities. And yes — the best is yet to come!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={cc1}
              alt="Now"
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-md"
            />
            <img
              src={cc2}
              alt="Building"
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
  ];

  return <Timeline items={data} />;
}
