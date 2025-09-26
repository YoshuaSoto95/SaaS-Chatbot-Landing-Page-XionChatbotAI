import React from 'react';
import { motion } from 'framer-motion';
import CheckIcon from './icons/CheckIcon';

const plans = [
  {
    name: 'Starter',
    price: '49',
    description: 'For small businesses and startups getting started with AI.',
    features: [
      '1 Chatbot',
      '1,000 conversations/mo',
      'Basic integrations',
      'Email support',
    ],
    cta: 'Choose Plan',
  },
  {
    name: 'Pro',
    price: '99',
    description: 'For growing businesses that need more power and customization.',
    features: [
      '5 Chatbots',
      '10,000 conversations/mo',
      'Advanced integrations',
      'Priority email support',
      'CRM integration',
    ],
    cta: 'Choose Plan',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with specific needs and high volume.',
    features: [
      'Unlimited Chatbots',
      'Unlimited conversations',
      'Custom integrations',
      'Dedicated account manager',
      'Onboarding & training',
    ],
    cta: 'Book a Demo',
  },
];

const Pricing: React.FC<{ onBookDemoClick: () => void }> = ({ onBookDemoClick }) => {
  return (
    <section id="pricing" className="bg-black snap-start min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Choose the plan that's right for your business. No hidden fees, ever.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 flex flex-col transition-all duration-300 ${plan.popular ? 'border-[#f028fe] shadow-2xl shadow-[#f028fe]/30' : 'hover:border-gray-600'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#f028fe] to-[#ba0bc6] text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-4 text-gray-400">{plan.description}</p>
              <div className="mt-6">
                <span className="text-5xl font-bold text-white">{plan.price !== 'Custom' ? `$${plan.price}` : 'Contact'}</span>
                {plan.price !== 'Custom' && <span className="text-lg text-gray-400">/ mo</span>}
              </div>
              <ul className="mt-8 space-y-4 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="ml-3 text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={plan.name === 'Enterprise' ? onBookDemoClick : undefined}
                className={`w-full mt-10 py-3 font-semibold rounded-lg transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-[#f028fe] to-[#ba0bc6] text-white hover:shadow-lg hover:shadow-[#f028fe]/50' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
