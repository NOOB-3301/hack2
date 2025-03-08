import React from "react";
import { useOCAuth } from "@opencampus/ocid-connect-js";
import { FaShieldAlt, FaCertificate, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingPage = () => {
    const { isInitialized, authState, ocAuth, OCId, ethAddress } = useOCAuth();
    
    useEffect(() => {

    }, [])
    
    
    const handleLogin = async () => {
        console.log("Login initiated");
        console.log(ocAuth);

        try {
            await ocAuth.signInWithRedirect({ state: "opencampus" });
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-900 to-gray-950 text-white flex flex-col items-center px-6 py-12 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-purple-700 via-gray-900 to-black opacity-50"></div>
            <div className="flex flex-col justify-between">
            {/* Hero Section */}
            <motion.div 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="max-w-3xl text-center relative z-10">
                <motion.h1 
                    className="text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-600"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    Revolutionizing Education with {" "}
                    <span className="text-violet-300">AI & Blockchain</span>
                </motion.h1>
                <motion.p 
                    className="mt-4 text-lg text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    Verify, Showcase, and Own Your Achievements with EduNFT
                </motion.p>

                <motion.button 
                    onClick={handleLogin}
                    className="mt-6 bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-violet-500/50 flex items-center mx-auto border border-violet-500 hover:border-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Get Started <FaShieldAlt className="ml-2" />
                </motion.button>
            </motion.div>

            {/* Feature Sections */}
            <motion.div 
                className="mt-12 flex flex-wrap justify-center gap-10 max-w-6xl relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <FeatureCard
                    icon={<FaBrain />}
                    title="AI-Powered Recommendation"
                    desc="Verify academic records with AI-driven accuracy."
                />
                <FeatureCard
                    icon={<FaCertificate />}
                    title="NFT-Based Certifications"
                    desc="Own your achievements as digital assets."
                />
                <FeatureCard
                    icon={<FaShieldAlt />}
                    title="Skill Analytics & Badges"
                    desc="AI-driven skill gap analysis & badge suggestions."
                />
            </motion.div>

            </div>
            
        </div>
    );
};

// Feature Card Component
const FeatureCard = ({ icon, title, desc }) => (
    <motion.div 
        className="bg-gray-900 p-8 w-72 rounded-2xl shadow-lg border border-gray-700 
                    flex flex-col items-center text-center transition-all duration-300 
                    hover:scale-105 hover:shadow-violet-500/50"
        whileHover={{ scale: 1.05 }}
    >
        <div className="text-5xl text-violet-400 animate-pulse">{icon}</div>
        <h3 className="mt-4 text-2xl font-bold text-gray-100">{title}</h3>
        <p className="mt-2 text-gray-400">{desc}</p>
    </motion.div>
);

export default LandingPage;
