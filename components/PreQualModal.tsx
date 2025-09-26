import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI, Type } from "@google/genai";
import XIcon from './icons/XIcon';

interface PreQualModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQualified: () => void;
}

const PreQualModal: React.FC<PreQualModalProps> = ({ isOpen, onClose, onQualified }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    goal: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // FIX: Ensure API key is available before making a call.
    if (!process.env.REACT_APP_API_KEY) {
        setError("Configuration error: API Key is missing. Please contact support.");
        setIsLoading(false);
        console.error("API_KEY environment variable not set!");
        return;
    }

    try {
      // FIX: Use new GoogleGenAI({apiKey: ...}) for initialization.
      const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_API_KEY });
      const prompt = `
        As a Sales Development Representative for XionChatbotAI, a company that sells AI chatbot solutions,
        your task is to pre-qualify a new lead.
        
        Analyze the following lead information:
        - Name: ${formData.name}
        - Company: ${formData.company}
        - Role: ${formData.role}
        - Primary Goal: ${formData.goal}

        A good lead is typically from a tech, e-commerce, or customer service-focused company.
        They are usually in decision-making roles (e.g., Manager, Director, CEO, Founder).
        Their goals should align with what a chatbot can solve (e.g., "improve customer support", "generate more leads", "reduce support costs").
        
        A bad lead might be a student, someone looking for a job, or someone with goals unrelated to chatbots (e.g., "learn to code").

        Based on your analysis, determine if this lead is qualified for a product demo.
        Provide your response in JSON format.
      `;

      // FIX: Use ai.models.generateContent to generate content.
      const response = await ai.models.generateContent({
        // FIX: Use gemini-2.5-flash model.
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          // FIX: Set responseMimeType to application/json for JSON output.
          responseMimeType: "application/json",
          // FIX: Define a responseSchema for the expected JSON structure.
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              isQualified: {
                type: Type.BOOLEAN,
                description: 'Whether the lead is qualified for a demo.',
              },
              reason: {
                type: Type.STRING,
                description: 'A brief explanation for the qualification decision.',
              },
            },
            required: ["isQualified", "reason"],
          },
        },
      });

      // FIX: Use response.text to get the generated text.
      const resultText = response.text.trim();
      const result = JSON.parse(resultText);

      if (result.isQualified) {
        onQualified();
      } else {
        setError(`Thank you for your interest. At this time, it seems we may not be the best fit. Reason: ${result.reason}`);
      }
    } catch (apiError) {
      console.error("API Error:", apiError);
      setError("Sorry, we couldn't process your request at this time. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  
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
          className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-lg p-8 relative shadow-2xl shadow-black"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
            <XIcon className="h-6 w-6" />
          </button>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Book a Demo</h2>
            <p className="mt-2 text-gray-400">
              Tell us a bit about yourself, and our AI will see if you're a good fit for a demo.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <InputField name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
            <InputField name="email" type="email" placeholder="Work Email" value={formData.email} onChange={handleChange} />
            <InputField name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} />
            <InputField name="role" placeholder="Your Role (e.g., Marketing Manager)" value={formData.role} onChange={handleChange} />
            <TextAreaField name="goal" placeholder="What's your primary goal with a chatbot?" value={formData.goal} onChange={handleChange} />
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 mt-4 font-semibold text-white bg-gradient-to-r from-[#f028fe] to-[#ba0bc6] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? 'Analyzing...' : 'Submit for Qualification'}
            </button>
            {error && <p className="mt-4 text-center text-red-400">{error}</p>}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    required
    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f028fe] transition-all"
  />
);

const TextAreaField: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
  <textarea
    {...props}
    required
    rows={3}
    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f028fe] transition-all resize-none"
  />
);

export default PreQualModal;
