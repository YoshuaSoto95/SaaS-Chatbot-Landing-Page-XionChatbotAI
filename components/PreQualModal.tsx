import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import XIcon from './icons/XIcon';

interface PreQualModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQualified: () => void;
  initialPlan?: string | null;
}

const PreQualModal: React.FC<PreQualModalProps> = ({ isOpen, onClose, onQualified, initialPlan }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    plan: initialPlan || 'Not Specified',
  });
  const [formErrors, setFormErrors] = useState<{ email?: string }>({});

  useEffect(() => {
    // Reset form when modal is opened
    if (isOpen) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        plan: initialPlan || 'Not Specified',
      });
      setFormErrors({});
    }
  }, [initialPlan, isOpen]);
  
  const validate = (): boolean => {
    const errors: { email?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.email) {
        errors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address.';
    }
    
    setFormErrors(errors);
    // The HTML5 `required` attribute will handle other empty fields
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'email' && formErrors.email) {
        setFormErrors(prev => ({...prev, email: undefined}));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // After validation passes, directly call onQualified to show the Thank You modal.
    if (validate()) {
      onQualified();
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
          className="bg-gray-900/80 backdrop-blur-md border border-[#f028fe]/50 rounded-2xl w-full max-w-lg p-8 relative shadow-2xl shadow-[#f028fe]/20"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
            <XIcon className="h-6 w-6" />
          </button>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Get Started</h2>
            <p className="mt-2 text-gray-400">
              Fill out the form below and we'll be in touch with the next steps.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                <InputField name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            </div>
            <div>
                <InputField name="email" type="email" placeholder="Work Email" value={formData.email} onChange={handleChange} hasError={!!formErrors.email} aria-describedby="email-error" />
                {formErrors.email && <p id="email-error" className="mt-1 text-sm text-red-400">{formErrors.email}</p>}
            </div>
            <div>
                 <InputField name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            </div>
            <div>
                <InputField name="company" placeholder="Company Name (Optional)" value={formData.company} onChange={handleChange} isOptional={true} />
            </div>
            <div>
                <SelectField name="plan" value={formData.plan} onChange={handleChange}>
                    <option value="Not Specified" disabled>Select an interested plan...</option>
                    <option value="Starter">Starter</option>
                    <option value="Pro">Pro</option>
                    <option value="Enterprise">Enterprise</option>
                </SelectField>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 mt-4 font-semibold text-white bg-gradient-to-r from-[#f028fe] to-[#ba0bc6] rounded-lg hover:shadow-lg hover:shadow-[#f028fe]/50 transition-all"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean; isOptional?: boolean }> = ({ hasError, isOptional, ...props }) => (
  <input
    {...props}
    required={!isOptional}
    aria-invalid={hasError}
    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${hasError ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-[#f028fe]'}`}
  />
);

const SelectField: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean }> = ({ hasError, ...props }) => (
    <select
      {...props}
      required
      aria-invalid={hasError}
      className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${hasError ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-[#f028fe]'}`}
    >
      {props.children}
    </select>
);

export default PreQualModal;