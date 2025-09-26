import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KeyBenefits from './components/KeyBenefits';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import PreQualModal from './components/PreQualModal';
import ThankYouModal from './components/ThankYouModal';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
  const [isPreQualModalOpen, setIsPreQualModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const openPreQualModal = (planName: string | null = null) => {
    setSelectedPlan(planName);
    setIsPreQualModalOpen(true);
  };
  
  const closePreQualModal = () => {
      setIsPreQualModalOpen(false);
      // Delay reset to avoid UI flicker during closing animation
      setTimeout(() => setSelectedPlan(null), 300);
  };


  const openThankYouModal = () => setIsThankYouModalOpen(true);
  const closeThankYouModal = () => setIsThankYouModalOpen(false);

  const handleQualified = () => {
    closePreQualModal();
    openThankYouModal();
  };

  return (
    <div className="bg-black text-white font-sans">
      <Header onBookDemoClick={() => openPreQualModal()} />
      <div 
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <ScrollProgressBar containerRef={containerRef} />
        <main>
          <Hero onBookDemoClick={() => openPreQualModal()} />
          <KeyBenefits />
          <ProductShowcase />
          <Testimonials />
          <Pricing onPlanSelect={openPreQualModal}/>
          <FAQ />
          <CallToAction onBookDemoClick={() => openPreQualModal()} />
          <Footer />
        </main>
      </div>
      <PreQualModal
        isOpen={isPreQualModalOpen}
        onClose={closePreQualModal}
        onQualified={handleQualified}
        initialPlan={selectedPlan}
      />
      <ThankYouModal
        isOpen={isThankYouModalOpen}
        onClose={closeThankYouModal}
      />
    </div>
  );
}

export default App;