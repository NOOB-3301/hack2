// import React from "react";
// import { useOCAuth } from "@opencampus/ocid-connect-js";
// import { FaShieldAlt, FaCertificate, FaBrain } from "react-icons/fa";
// import { motion } from "framer-motion";

// const LandingPage = () => {
//     const { ocAuth } = useOCAuth();
    
//     const handleLogin = async () => {
//         console.log("Login initiated");
//         console.log(ocAuth);
//         try {
//             await ocAuth.signInWithRedirect({ state: "opencampus" });
//         } catch (error) {
//             console.error("Login error:", error);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-white text-blue-900 flex flex-col items-center justify-center px-6 py-12 text-center">
//             {/* Hero Section */}
//             <motion.div 
//                 initial={{ opacity: 0, y: -50 }} 
//                 animate={{ opacity: 1, y: 0 }} 
//                 transition={{ duration: 1 }}
//                 className="max-w-3xl text-center">
//                 <motion.h1 
//                     className="text-5xl font-extrabold leading-tight"
//                     animate={{ scale: [1, 1.05, 1] }}
//                     transition={{ repeat: Infinity, duration: 2 }}
//                 >
//                     Revolutionizing Education with {" "}
//                     <span className="text-blue-700"> 
//                         <motion.span 
//                             className="inline-block"
//                             animate={{ opacity: [1, 0, 1] }}
//                             transition={{ repeat: Infinity, duration: 2 }}
//                         >AI</motion.span> & 
//                         <motion.span 
//                             className="inline-block"
//                             animate={{ opacity: [0, 1, 0] }}
//                             transition={{ repeat: Infinity, duration: 2 }}
//                         >Blockchain</motion.span>
//                     </span>
//                 </motion.h1>
//                 <motion.p 
//                     className="mt-4 text-lg text-blue-700"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1.5 }}
//                 >
//                     Verify, Showcase, and Own Your Achievements with EduNFT
//                 </motion.p>

//                 <motion.button 
//                     onClick={handleLogin}
//                     className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-blue-500/50 flex items-center justify-center mx-auto border border-blue-600 hover:border-gray-400"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                 >
//                     Get Started <FaShieldAlt className="ml-2" />
//                 </motion.button>
//             </motion.div>

//             {/* Feature Sections */}
//             <motion.div 
//                 className="mt-12 flex flex-wrap justify-center gap-10 max-w-6xl"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1.5 }}
//             >
//                 <FeatureCard
//                     icon={<FaBrain />}
//                     title="AI-Powered Recommendation"
//                     desc="Verify academic records with AI-driven accuracy."
//                 />
//                 <FeatureCard
//                     icon={<FaCertificate />}
//                     title="NFT-Based Certifications"
//                     desc="Own your achievements as digital assets."
//                 />
//                 <FeatureCard
//                     icon={<FaShieldAlt />}
//                     title="Skill Analytics & Badges"
//                     desc="AI-driven skill gap analysis & badge suggestions."
//                 />
//             </motion.div>
//         </div>
//     );
// };

// // Feature Card Component
// const FeatureCard = ({ icon, title, desc }) => (
//     <motion.div 
//         className="bg-white p-8 w-72 rounded-2xl shadow-lg border border-blue-400 
//                     flex flex-col items-center text-center transition-all duration-300 
//                     hover:scale-105 hover:shadow-blue-500/50"
//         whileHover={{ scale: 1.05 }}
//     >
//         <div className="text-5xl text-blue-600 animate-pulse">{icon}</div>
//         <h3 className="mt-4 text-2xl font-bold text-blue-900">{title}</h3>
//         <p className="mt-2 text-blue-700">{desc}</p>
//     </motion.div>
// );

// export default LandingPage;