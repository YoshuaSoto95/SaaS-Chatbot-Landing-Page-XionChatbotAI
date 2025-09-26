import React, { useState, useEffect } from 'react';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

const Header: React.FC<{ onBookDemoClick: () => void }> = ({ onBookDemoClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // This is a simple implementation. In a real app with the scroll container,
    // you would get the container ref and add the event listener to it.
    const container = document.querySelector('.h-screen.overflow-y-scroll');
    const handleScroll = (e: Event) => {
        if (e.target) {
            setIsScrolled((e.target as HTMLElement).scrollTop > 10);
        }
    };
    
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white tracking-wider">
              XionChatbot<span className="text-[#f028fe]">AI</span>
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <button
              onClick={onBookDemoClick}
              className="px-6 py-2 bg-gradient-to-r from-[#f028fe] to-[#ba0bc6] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#f028fe]/50 transition-all duration-300 transform hover:scale-105"
            >
              Book a Demo
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-sm"
          >
            <nav className="px-4 pt-2 pb-4 space-y-2 text-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={toggleMenu} className="block py-2 text-gray-300 hover:text-white transition-colors duration-300">
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  onBookDemoClick();
                  toggleMenu();
                }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#f028fe] to-[#ba0bc6] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#f028fe]/50 transition-all duration-300"
              >
                Book a Demo
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
