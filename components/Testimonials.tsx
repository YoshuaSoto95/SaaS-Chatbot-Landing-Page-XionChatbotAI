import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "This chatbot saved us 40% in support costs within the first three months. Absolutely revolutionary for our workflow.",
    name: 'Sarah Miller',
    title: 'CEO, Innovate Inc.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    quote: "Our clients love the 24/7 response time. It has significantly improved customer satisfaction and lead generation.",
    name: 'David Chen',
    title: 'Founder, Tech Solutions',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
  },
  {
    quote: "The analytics dashboard is a game-changer. We now understand our customers better than ever before.",
    name: 'Maria Rodriguez',
    title: 'Marketing Director, Growth Co.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-black relative overflow-hidden snap-start min-h-screen flex items-center justify-center">
       <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute w-96 h-96 bg-gradient-to-tr from-[#f028fe] to-[#ba0bc6] rounded-full -left-32 top-1/4 filter blur-3xl"></div>
            <div className="absolute w-96 h-96 bg-gradient-to-tr from-[#aa0494] to-[#f562ff] rounded-full -right-32 bottom-1/4 filter blur-3xl"></div>
       </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Trusted by Teams Worldwide
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Hear what our satisfied customers have to say about XionChatbotAI.
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center">
                <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                <div className="ml-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;