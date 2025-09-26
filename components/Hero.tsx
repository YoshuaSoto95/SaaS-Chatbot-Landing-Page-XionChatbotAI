import React from 'react';
import { motion } from 'framer-motion';
import InterfaceImagen from '../asset/image/interface.png';

const Hero: React.FC<{ onBookDemoClick: () => void }> = ({ onBookDemoClick }) => {
  return (
    <section id="features" className="relative bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden snap-start pt-32 pb-16">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#f028fe] to-[#ba0bc6] rounded-full -left-48 top-1/4 filter blur-3xl animate-blob"></div>
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-[#aa0494] to-[#f562ff] rounded-full -right-48 bottom-1/4 filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
        >
          Revolutionize Your Customer Engagement
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Deploy an intelligent AI chatbot in minutes. Automate support, qualify leads, and boost sales 24/7 with XionChatbotAI.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'backOut' }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onBookDemoClick}
            className="px-8 py-4 bg-gradient-to-r from-[#f028fe] to-[#ba0bc6] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#f028fe]/50 transition-all duration-300 transform hover:scale-105"
          >
            Get Started For Free
          </button>
          <button
            className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800/80 transition-all duration-300"
          >
            Watch Demo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-16"
        >
          <img
            src={InterfaceImagen}
            alt="XionChatbotAI SaaS Mockup"
            className="rounded-2xl w-full max-w-4xl mx-auto shadow-2xl shadow-[#f028fe]/20"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;