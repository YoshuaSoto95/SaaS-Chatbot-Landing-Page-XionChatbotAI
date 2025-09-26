import React from 'react';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';
import GitHubIcon from './icons/GitHubIcon';

const Footer: React.FC = () => {
  const productLinks = [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Integrations', href: '#' },
    { name: 'Book a Demo', href: '#' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: <LinkedInIcon className="h-5 w-5" /> },
    { name: 'Twitter', href: '#', icon: <TwitterIcon className="h-5 w-5" /> },
    { name: 'GitHub', href: '#', icon: <GitHubIcon className="h-5 w-5" /> },
  ];

  const LinkList: React.FC<{ title: string; links: { name: string; href: string }[] }> = ({ title, links }) => (
    <div>
      <h3 className="font-semibold text-white tracking-wider uppercase">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="text-base text-gray-400 hover:text-white transition-all duration-300 inline-block transform hover:-translate-y-0.5">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-black border-t border-gray-900 snap-start min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          <div className="col-span-2 lg:col-span-2">
             <a href="#" className="text-2xl font-bold text-white tracking-wider">
              XionChatbot<span className="text-[#f028fe]">AI</span>
            </a>
            <p className="mt-4 text-gray-400 text-sm max-w-xs">
              Intelligent AI chatbots to automate support and accelerate sales.
            </p>
          </div>
          
          <LinkList title="Product" links={productLinks} />
          <LinkList title="Company" links={companyLinks} />
          <LinkList title="Legal" links={legalLinks} />

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 order-2 sm:order-1 mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} XionChatbotAI. All rights reserved.
          </p>
          <div className="flex space-x-4 order-1 sm:order-2">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-white bg-gray-800 hover:bg-gradient-to-tr from-[#aa0494] to-[#f028fe] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;