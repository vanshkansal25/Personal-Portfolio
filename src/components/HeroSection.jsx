// import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
// import "../assets/style.css"
// const HeroSection = () => {
//     return (
//       <div className="h-screen flex justify-center items-center bg-gray-100 ">
//         <div className="w-[90%] max-w-full p-16 bg-white rounded-[30px] shadow-2xl text-center">
//           {/* Small Intro Text */}
//           <p className="text-gray-500 text-lg mb-2 font-[Typo-3] font-bold">Hello, I'm Vansh</p>
  
//           {/* Title */}
//           <h1 className="text-5xl md:text-6xl font-bold font-[Typo-6] leading-tight text-gray-900">
//           Every pixel, a piece of my journey. <br /> Purpose rendered
//           </h1>
  
//           {/* Subtitle */}
//           <p className="text-gray-500 mt-4 font-[Typo-5] text-lg">
//           Welcome to a digital journal shaped by curiosity, creativity, and code. <br /> 
//           </p>
  
//           {/* Call to Action */}
//           <button className="mt-6 px-8 py-3 bg-black text-white rounded-full text-lg hover:scale-105 transition font-[Typo-3]">
//           GET IN TOUCH
//           </button>
  
//          {/* Social Links */}
// <div className="flex justify-center gap-4 mt-6">
//   <a
//     href="https://www.linkedin.com/in/your-profile"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex font-[Typo-5] items-center gap-2 px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-200 transition"
//   >
//     <Linkedin size={18} />
//     LinkedIn
//   </a>

//   <a
//     href="https://twitter.com/your-handle"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-200 transition font-[Typo-5]"
//   >
//     <Twitter size={18} />
//     Twitter
//   </a>

//   <a
//     href="mailto:your-email@gmail.com"
//     className="flex font-[Typo-5] items-center gap-2 px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-200 transition"
//   >
//     <Mail size={18} />
//     Gmail
//   </a>

//   <a
//     href="https://www.instagram.com/your-handle"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex font-[Typo-5] items-center gap-2 px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-200 transition"
//   >
//     <Instagram size={18} />
//     Instagram
//   </a>

// </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default HeroSection;
// import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
// import "../assets/style.css";

// const HeroSection = () => {
//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-10 sm:px-6 lg:px-8">
//       <div className="w-full max-w-5xl p-6 sm:p-10 md:p-16 bg-white rounded-[30px] shadow-2xl text-center">

//         {/* Small Intro Text */}
//         <p className="text-gray-500 text-md sm:text-lg mb-2 font-[Typo-3] font-bold">
//           Hello, I'm Vansh
//         </p>

//         {/* Title */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[Typo-6] leading-tight text-gray-900">
//           Every pixel, a piece of my journey. <br /> Purpose rendered
//         </h1>

//         {/* Subtitle */}
//         <p className="text-gray-500 mt-4 font-[Typo-5] text-base sm:text-lg">
//           Welcome to a digital journal shaped by curiosity, creativity, and code.
//         </p>

//         {/* Call to Action */}
//         <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-black text-white rounded-full text-md sm:text-lg hover:scale-105 transition font-[Typo-3]">
//           GET IN TOUCH
//         </button>

//         {/* Social Links - Only icons by default, show label on hover */}
//         <div className="flex justify-center gap-3 sm:gap-4 mt-6 flex-wrap">
//           {[
//             {
//               icon: <Linkedin size={20} />,
//               label: "LinkedIn",
//               url: "https://www.linkedin.com/in/your-profile",
//             },
//             {
//               icon: <Twitter size={20} />,
//               label: "Twitter",
//               url: "https://twitter.com/your-handle",
//             },
//             {
//               icon: <Mail size={20} />,
//               label: "Gmail",
//               url: "mailto:your-email@gmail.com",
//             },
//             {
//               icon: <Instagram size={20} />,
//               label: "Instagram",
//               url: "https://www.instagram.com/your-handle",
//             },
//           ].map((social, index) => (
//             <a
//               key={index}
//               href={social.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-200 transition-all duration-300 font-[Typo-5]"
//             >
//               {social.icon}
//               <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 {social.label}
//               </span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import "../assets/style.css";

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
          Every pixel, a piece of my journey. <br /> Purpose rendered
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mt-4 font-[Typo-5] text-base sm:text-lg">
          Welcome to a digital journal shaped by curiosity, creativity, and code.
        </p>

        {/* CTA */}
        <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-black text-white rounded-full text-md sm:text-lg hover:scale-105 transition font-[Typo-3]">
          GET IN TOUCH
        </button>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-6 flex-wrap">
          {[
            {
              icon: <Linkedin size={20} />,
              label: "LinkedIn",
              url: "https://www.linkedin.com/in/your-profile",
            },
            {
              icon: <Twitter size={20} />,
              label: "Twitter",
              url: "https://twitter.com/your-handle",
            },
            {
              icon: <Mail size={20} />,
              label: "Gmail",
              url: "mailto:your-email@gmail.com",
            },
            {
              icon: <Instagram size={20} />,
              label: "Instagram",
              url: "https://www.instagram.com/your-handle",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-200 transition-all duration-300 font-[Typo-5]"
            >
              {social.icon}
              {/* Show label only on lg and above */}
              <span className="ml-2 hidden lg:inline">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
