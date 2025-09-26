import React from 'react';
// FIX: Import Variants type from framer-motion.
import { motion, Variants } from 'framer-motion';
import ChatBubbleIcon from './icons/ChatBubbleIcon';
import RobotIcon from './icons/RobotIcon';
import ChartBarIcon from './icons/ChartBarIcon';

const benefits = [
  {
    icon: <ChatBubbleIcon className="h-10 w-10 mb-4 text-[#f028fe]" />,
    title: 'Instant Support',
    description: 'Provide 24/7, real-time answers to your customers\' questions, improving satisfaction and loyalty.',
  },
  {
    icon: <RobotIcon className="h-10 w-10 mb-4 text-[#f028fe]" />,
    title: 'AI Automation',
    description: 'Automate repetitive tasks, lead qualification, and appointment booking to free up your team.',
  },
  {
    icon: <ChartBarIcon className="h-10 w-10 mb-4 text-[#f028fe]" />,
    title: 'Analytics & Reports',
    description: 'Gain valuable insights into customer interactions and chatbot performance with our dashboard.',
  },
];

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const titleVariants: Variants = {
  offscreen: { opacity: 0, y: -30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const KeyBenefits: React.FC = () => {
  return (
    <section className="bg-black snap-start min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                Unlock Your Business Potential
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                Discover the core advantages of integrating an AI-powered chatbot.
            </p>
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 text-center transition-all duration-300 hover:border-[#f028fe] hover:shadow-2xl hover:shadow-[#f028fe]/30 transform hover:-translate-y-2"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="flex justify-center items-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="mt-2 text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;