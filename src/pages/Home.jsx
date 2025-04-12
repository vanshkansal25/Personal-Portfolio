// import React from "react";
// import "../assets/style.css";
// import Navbar from "../components/navbar"
// import HeroSection from "../components/HeroSection";
// import CollabPage from "../components/footer";

// const Home = () => {
//   return (
//     <>
//   {/* First Section with Glassmorphism & Name */}
//   <div className="w-full h-screen flex justify-center items-center animated-bg relative">
//     <div className="bg-white/10 backdrop-blur-[10px] rounded-xl w-full h-full shadow-lg relative">
      
//       {/* Centered Name */}
//       <div className="flex items-center justify-center w-full h-screen">
//         <h1 className="text-[30px] font-[Typo-4] text-white">vanshkansal.</h1>
//       </div>

//       {/* Scroll Down Indicator (Bottom Center) */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-50">
//         <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
//           <div className="w-1 h-2 bg-white animate-bounce rounded-full"></div>
//         </div>
//         <p className="text-white text-sm mt-2 font-[Typo-3] animate-pulse">Scroll Down</p>
//       </div>

//       {/* Hero Section */}
//       <div>
//         <HeroSection />
//       </div>
//     </div>
//   </div>

//   {/* Navbar Section */}
//   <div className="relative w-full h-screen">
//     <Navbar />
//   </div>

//   {/* Collab Section */}
//   <main className="h-screen w-full flex flex-col items-center justify-center pt-30 pb-5 px-6 bg-white text-black mt-20">
//     <CollabPage />
//   </main>
// </>

    
    
//   );
// };

// export default Home;

import React from "react";
import "../assets/style.css";
import Navbar from "../components/navbar";
import HeroSection from "../components/HeroSection";
import CollabPage from "../components/footer";

const Home = () => {
  return (
    <>
      {/* First Section with Glassmorphism & Name */}
      <section className="w-full h-screen flex justify-center items-center animated-bg relative">
        <div className="bg-white/10 backdrop-blur-[10px] rounded-xl w-full h-full shadow-lg relative">

          {/* Centered Name */}
          <div className="flex items-center justify-center w-full h-screen">
            <h1 className="text-[30px] font-[Typo-4] text-white">vanshkansal.</h1>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-50">
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-white animate-bounce rounded-full"></div>
            </div>
            <p className="text-white text-sm mt-2 font-[Typo-3] animate-pulse">Scroll Down</p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>

      {/* Navbar Section */}
      <section className="relative w-full">
        <Navbar />
      </section>

      {/* Collab Section */}
      <main className="w-full flex flex-col items-center justify-center pt-30 pb-5 px-6 bg-white text-black mt-20">
        <CollabPage />
      </main>
    </>
  );
};

export default Home;
