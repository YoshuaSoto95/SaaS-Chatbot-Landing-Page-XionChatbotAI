import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronDownIcon from './icons/ChevronDownIcon';

const faqData = [
  {
    question: 'How does the AI chatbot work?',
    answer: 'You connect the chatbot to your website or platform via a simple script. Then, you can train it with your own data, set up automated workflows, and customize its personality to match your brand. Our AI, powered by advanced language models, handles the rest.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, absolutely. All our plans are flexible. You can upgrade, downgrade, or cancel your subscription at any time directly from your account dashboard. There are no hidden fees or long-term contracts.',
  },
  {
    question: 'What integrations are supported?',
    answer: 'We support a wide range of integrations with popular CRM, e-commerce, and support platforms like Salesforce, Shopify, Zendesk, and more. We also offer a robust API for custom integrations.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Data security is our top priority. We use industry-standard encryption for data in transit and at rest. We are fully GDPR and CCPA compliant, ensuring your customer data is handled with the utmost care and privacy.',
  },
];

const AccordionItem: React.FC<{
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-[#f562ff] transition-colors duration-300">{item.question}</span>
        <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <ChevronDownIcon className="h-6 w-6 text-gray-400" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-4 text-gray-400">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black snap-start min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </motion.div>
        <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;