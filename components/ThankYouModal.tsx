import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import XIcon from './icons/XIcon';
import CalendlyIcon from './icons/CalendlyIcon';
import WhatsappIcon from './icons/WhatsappIcon';
import SupportIcon from './icons/SupportIcon';

const ThankYouModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const options = [
    {
      icon: <CalendlyIcon className="h-10 w-10 mb-4 text-white" />,
      title: 'Schedule a Call',
      description: 'Book a 30-minute slot on Calendly with our team.',
      href: '#',
    },
    {
      icon: <WhatsappIcon className="h-10 w-10 mb-4 text-white" />,
      title: 'Chat on WhatsApp',
      description: 'Start a conversation with us directly on WhatsApp.',
      href: '#',
    },
    {
      icon: <SupportIcon className="h-10 w-10 mb-4 text-white" />,
      title: 'Contact Support',
      description: 'Have a specific question? Email our support team.',
      href: '#',
    },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-3xl p-8 relative shadow-2xl shadow-black"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
            <XIcon className="h-6 w-6" />
          </button>
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
              Thank You!
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              You're a great fit! We're excited to show you how XionChatbotAI can help.
            </p>
            <p className="mt-2 text-gray-400">Please choose your preferred next step:</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {options.map((option) => (
              <a
                key={option.title}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center transition-all duration-300 hover:border-[#f028fe] hover:bg-gray-800/80 transform hover:-translate-y-2"
              >
                <div className="flex justify-center items-center">{option.icon}</div>
                <h3 className="text-lg font-semibold text-white">{option.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{option.description}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThankYouModal;
