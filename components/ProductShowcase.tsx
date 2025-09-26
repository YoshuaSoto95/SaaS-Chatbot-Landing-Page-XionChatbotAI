import React from 'react';
import { motion } from 'framer-motion';
import CheckIcon from './icons/CheckIcon';
import ProductImagen from '../asset/image/product.png';

const features = [
  '24/7 Automated Customer Support',
  'Seamless CRM Integration',
  'Advanced Conversation Analytics',
  'Customizable Chatbot Personality',
  'Multi-language Support',
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="bg-black overflow-hidden snap-start min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={ProductImagen}
              alt="SaaS Platform Dashboard"
              className="rounded-xl shadow-2xl shadow-[#ba0bc6]/30 w-full mx-auto"
              animate={{ y: [-10, 10] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Powerful Features, Simple Interface
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              XionChatbotAI is packed with features designed to enhance engagement and streamline your operations, all within an intuitive dashboard.
            </p>
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-green-400" />
                  </div>
                  <p className="ml-3 text-lg text-gray-300">{feature}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;