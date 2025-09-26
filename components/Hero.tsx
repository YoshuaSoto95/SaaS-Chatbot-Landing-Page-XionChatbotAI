import React from 'react';
import { motion } from 'framer-motion';

const Bubble: React.FC<{ className: string; animate: any; duration: number }> = ({ className, animate, duration }) => (
    <motion.div
        className={`absolute rounded-full filter blur-3xl opacity-20 md:opacity-30 ${className}`}
        animate={animate}
        transition={{
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
        }}
    />
);

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden isolate px-4 pt-32 pb-24 sm:pt-40 sm:pb-32">
            {/* Background Bubbles */}
            <div className="absolute inset-0 -z-10">
                <Bubble
                    className="w-80 h-80 bg-gradient-to-r from-[#aa0494] to-[#ba0bc6] top-[10%] left-[5%]"
                    animate={{ y: [20, -20], x: [-15, 15] }}
                    duration={20}
                />
                <Bubble
                    className="w-96 h-96 bg-gradient-to-r from-[#ba0bc6] to-[#f028fe] bottom-[10%] right-[5%]"
                    animate={{ y: [-25, 25], x: [20, -20] }}
                    duration={25}
                />
                 <Bubble
                    className="hidden md:block w-72 h-72 bg-gradient-to-r from-[#f028fe] to-[#f562ff] top-[5%] right-[25%]"
                    animate={{ y: [15, -15], x: [-10, 10] }}
                    duration={18}
                />
            </div>
            
            <div className="text-center z-10">
                <motion.h1 
                    className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Revolutionize Your Customer Service
                </motion.h1>
                <motion.h2
                    className="mt-4 text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ba0bc6] to-[#f028fe]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    with XionChatbot<span className="text-white">AI</span>
                </motion.h2>
                <motion.p 
                    className="mt-6 max-w-2xl mx-auto text-lg text-gray-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Engage customers 24/7, resolve issues instantly, and drive sales with our intelligent, easy-to-deploy AI chatbots.
                </motion.p>

                <motion.div 
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a
                        href="#"
                        className="w-full sm:w-auto px-8 py-4 rounded-md text-base font-medium text-white bg-gradient-to-r from-[#aa0494] via-[#ba0bc6] to-[#f028fe] hover:shadow-xl hover:shadow-[#f028fe]/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    >
                        Start Free Trial
                    </a>
                    <a
                        href="#"
                        className="w-full sm:w-auto px-8 py-4 rounded-md text-base font-medium text-white bg-black/20 border border-gray-600 hover:bg-white/10 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        See Demo
                    </a>
                </motion.div>

                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <motion.img
                        src="https://i.imgur.com/g055z58.png"
                        alt="SaaS Platform Mockup"
                        className="rounded-lg shadow-2xl shadow-[#aa0494]/30 w-full max-w-4xl mx-auto"
                        animate={{ y: [-8, 8] }}
                        transition={{
                            duration: 4,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "mirror"
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;