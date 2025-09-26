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

  const containerRef = useRef<HTMLDivElement>(null);

  const openPreQualModal = () => setIsPreQualModalOpen(true);
  const closePreQualModal = () => setIsPreQualModalOpen(false);

  const openThankYouModal = () => setIsThankYouModalOpen(true);
  const closeThankYouModal = () => setIsThankYouModalOpen(false);

  const handleQualified = () => {
    closePreQualModal();
    openThankYouModal();
  };

  return (
    <div className="bg-black text-white font-sans">
      <Header onBookDemoClick={openPreQualModal} />
      <div 
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <ScrollProgressBar containerRef={containerRef} />
        <main>
          <Hero onBookDemoClick={openPreQualModal} />
          <KeyBenefits />
          <ProductShowcase />
          <Testimonials />
          <Pricing onBookDemoClick={openPreQualModal}/>
          <FAQ />
          <CallToAction onBookDemoClick={openPreQualModal} />
          <Footer />
        </main>
      </div>
      <PreQualModal
        isOpen={isPreQualModalOpen}
        onClose={closePreQualModal}
        onQualified={handleQualified}
      />
      <ThankYouModal
        isOpen={isThankYouModalOpen}
        onClose={closeThankYouModal}
      />
    </div>
  );
}

export default App;
