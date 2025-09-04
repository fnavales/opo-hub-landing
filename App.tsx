import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Demo from './components/Demo.tsx';
import Testimonials from './components/Testimonials.tsx';
import CTA from './components/CTA.tsx';
import Footer from './components/Footer.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import TermsOfService from './components/TermsOfService.tsx';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (route) {
      case '#privacy':
        return <PrivacyPolicy />;
      case '#terms':
        return <TermsOfService />;
      default:
        return (
          <main>
            <Hero />
            <Features />
            <HowItWorks />
            <Demo />
            <Testimonials />
            <CTA />
          </main>
        );
    }
  };


  return (
    <div className="bg-[#FDFBF8] text-slate-800 antialiased">
      <Header />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default App;