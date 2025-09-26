import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC<{ onBookDemoClick: () => void }> = ({ onBookDemoClick }) => {
  return (
    <section className="bg-black relative overflow-hidden snap-start min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute w-96 h-96 bg-gradient-to-tr from-[#f028fe] to-[#ba0bc6] rounded-full -left-32 top-1/4 filter blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-tr from-[#aa0494] to-[#f562ff] rounded-full -right-32 bottom-1/4 filter blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Schedule a personalized demo to see XionChatbotAI in action and discover how it can help you achieve your goals.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'backOut' }}
          className="mt-10"
        >
          <button
            onClick={onBookDemoClick}
            className="px-10 py-4 bg-gradient-to-r from-[#f028fe] to-[#ba0bc6] text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-[#f028fe]/50 transition-all duration-300 transform hover:scale-105"
          >
            Book Your Free Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
