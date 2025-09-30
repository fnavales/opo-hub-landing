import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    
    // If on a legal page, first go home, then scroll
    if (window.location.hash === '#privacy' || window.location.hash === '#terms') {
      window.location.hash = '';
      // The scroll needs a timeout to allow the main page to render first
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleJoinClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    handleNavClick(e); // Reuse the same logic
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
        const emailInput = document.getElementById('email-input');
        if (emailInput) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    emailInput.focus();
                    observer.disconnect();
                }
            }, {
                threshold: 0.5 
            });
            observer.observe(ctaSection);
        }
    }
  };
  
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (window.location.hash) {
      window.location.hash = ''; // Navigate home
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll on home
    }
  };

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavClick(e);
    setIsMenuOpen(false);
  };

  const handleMobileJoinClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleJoinClick(e);
    setIsMenuOpen(false);
  };

   const navLinks = [
    { href: '#features', label: 'Beneficios' },
    { href: '#howitworks', label: 'Cómo funciona' },
    { href: '#testimonials', label: 'Opiniones' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={handleLogoClick} className="text-5xl font-logo">
          <span className="text-orange-500 logo-shadow-orange">Opo</span><span className="text-teal-500 logo-shadow-teal">Hub</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleNavClick} className="text-slate-600 hover:text-orange-500 transition-colors font-medium">
              {link.label}
            </a>
          ))}
        </nav>
        <a 
          href="#cta" 
          onClick={handleJoinClick}
          className="hidden md:inline-block bg-orange-500 text-white font-bold py-2 px-6 rounded-full transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-md border-b-2 border-orange-700 hover:bg-orange-400 active:bg-orange-600 active:border-b-0">
          Unete a la prueba
        </a>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 px-6 pt-2 pb-6">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={handleMobileLinkClick}
                className="text-slate-700 hover:text-orange-500 transition-colors font-medium text-lg py-2">
                {link.label}
              </a>
            ))}
            <a 
              href="#cta" 
              onClick={handleMobileJoinClick}
              className="w-full text-center bg-orange-500 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-md border-b-2 border-orange-700 hover:bg-orange-400 active:bg-orange-600 active:border-b-0 mt-4">
              Unete a la prueba
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;