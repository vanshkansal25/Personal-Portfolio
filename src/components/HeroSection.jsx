
import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl p-6 sm:p-10 md:p-16 bg-white rounded-[30px] shadow-2xl text-center">

        {/* Intro */}
        <p className="text-gray-500 text-md sm:text-lg mb-2 font-[Typo-3] font-bold">
          Hello, I'm Vansh
        </p>

        {/* Title */}
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[Typo-6] leading-tight text-gray-900">
  Design is how it feels. Development is how it works. <br /> I do both — with intention.
</h1>


        {/* Subtitle */}
        <p className="text-gray-500 mt-4 font-[Typo-5] text-base sm:text-lg">
        I’m your designer and developer, building seamless experiences with soul and structure.        </p>

        
        <Link to="/contact">
  <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-black text-white rounded-full text-md sm:text-lg transition-all duration-300 font-[Typo-3] hover:bg-gray-800 hover:scale-105">
    GET IN TOUCH
  </button>
</Link>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-6 flex-wrap">
          <a
            href="https://www.linkedin.com/in/vanshkansal-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full text-gray-700 transition-all duration-300 font-[Typo-5] hover:bg-[#0077b5] hover:text-white"
          >
            <Linkedin size={20} />
            <span className="ml-2 hidden lg:inline">LinkedIn</span>
          </a>

          <a
            href="https://x.com/Vanshtwt25"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full text-gray-700 transition-all duration-300 font-[Typo-5] hover:bg-[#1DA1F2] hover:text-white"
          >
            <Twitter size={20} />
            <span className="ml-2 hidden lg:inline">Twitter</span>
          </a>

          <a
            href="mailto:vanshkansal328@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full text-gray-700 transition-all duration-300 font-[Typo-5] hover:bg-[#D44638] hover:text-white"
          >
            <Mail size={20} />
            <span className="ml-2 hidden lg:inline">Gmail</span>
          </a>

          <a
            href="https://www.instagram.com/__vanshkansal__"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full text-gray-700 transition-all duration-300 font-[Typo-5] hover:bg-[#E1306C] hover:text-white"
          >
            <Instagram size={20} />
            <span className="ml-2 hidden lg:inline">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
