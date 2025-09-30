import React from 'react';

const Hero: React.FC = () => {

  const handleJoinClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Stop the browser's default jump

    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
        // Programmatically scroll to the section
        ctaSection.scrollIntoView({ behavior: 'smooth' });

        const emailInput = document.getElementById('email-input');
        if (emailInput) {
            // Create an observer to wait for the section to be visible
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    // When the section is in view, focus the input
                    emailInput.focus();
                    // Clean up: stop observing
                    observer.disconnect();
                }
            }, {
                // Trigger when at least 50% of the section is visible
                threshold: 0.5 
            });

            // Start observing the target section
            observer.observe(ctaSection);
        }
    }
  };

  const handleHowItWorksClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  return (
    <section 
      className="pt-32 pb-20 md:pt-48 md:pb-32"
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Revoluciona tu oposición.
          <br />
          <span className="text-orange-500">Casos prácticos ilimitados con IA.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600">
          OpoHub es tu aliado creativo para las Oposiciones de Educación Infantil. Genera supuestos prácticos únicos y personalizados en segundos, y destaca en tu examen.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#cta" 
            onClick={handleJoinClick}
            className="w-full sm:w-auto bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all transform border-b-4 border-orange-700 hover:bg-orange-600 hover:-translate-y-0.5 active:bg-orange-700 active:border-b-0 active:translate-y-0">
            Unete a la prueba
          </a>
          <a href="#howitworks" onClick={handleHowItWorksClick} className="w-full sm:w-auto bg-white text-teal-500 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-colors">
            Ver cómo funciona
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;