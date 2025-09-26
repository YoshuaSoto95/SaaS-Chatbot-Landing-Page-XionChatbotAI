import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Header />
      <main>
        <Hero />
        {/* Placeholder content to enable scrolling and demonstrate sticky header */}
        <div className="h-[50vh] w-full flex items-center justify-center">
            <p className="text-center text-2xl text-gray-600">
              Scroll down for more amazing features.
            </p>
        </div>
      </main>
    </div>
  );
};

export default App;