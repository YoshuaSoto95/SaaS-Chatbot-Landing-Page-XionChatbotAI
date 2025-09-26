import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      className="text-white hover:text-[#f562ff] transition-colors duration-300 text-lg md:text-base"
    >
      {children}
    </a>
  </li>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Contact', href: '#' },
  ];
  
  // FIX: Explicitly type menuVariants with Variants to resolve TypeScript error with easing property.
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-black/50 backdrop-blur-lg shadow-lg shadow-[#ba0bc6]/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white tracking-wider">
              XionChatbot<span className="text-[#f028fe]">AI</span>
            </a>
          </div>

          <div className="hidden md:flex justify-center flex-1">
            <ul className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <a
              href="#"
              className="px-6 py-3 rounded-md text-sm font-medium text-white bg-gradient-to-r from-[#aa0494] via-[#ba0bc6] to-[#f028fe] hover:shadow-lg hover:shadow-[#f028fe]/50 transition-all duration-300"
            >
              Start Free Trial
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <ul className="flex flex-col items-center space-y-4">
                {navItems.map((item) => (
                  <NavLink key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </NavLink>
                ))}
              </ul>
            </div>
            <div className="pt-4 pb-6 px-5">
              <a
                href="#"
                className="block text-center w-full px-6 py-3 rounded-md font-medium text-white bg-gradient-to-r from-[#aa0494] via-[#ba0bc6] to-[#f028fe]"
              >
                Start Free Trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;