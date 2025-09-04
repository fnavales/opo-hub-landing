import React from 'react';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-orange-500 transition-colors">
        {children}
    </a>
);

const InstagramIcon = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.792 2.013 10.146 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.75-9.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" />
    </svg>
);


const Footer: React.FC = () => {
    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (window.location.hash) {
          window.location.hash = '';
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleLegalLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const targetHash = e.currentTarget.getAttribute('href');
      if (targetHash) {
          window.location.hash = targetHash;
      }
    };
    
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <a href="#" onClick={handleLogoClick} className="text-2xl font-extrabold">
                            <span className="text-orange-500 logo-shadow-orange">Opo</span><span className="text-teal-500 logo-shadow-teal">Hub</span>
                        </a>
                        <p className="mt-2 text-slate-500 text-sm">&copy; {new Date().getFullYear()} OpoHub. Todos los derechos reservados.</p>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500 order-last md:order-none">
                        <a href="#privacy" onClick={handleLegalLinkClick} className="hover:text-orange-500 transition-colors">Política de Privacidad</a>
                        <a href="#terms" onClick={handleLegalLinkClick} className="hover:text-orange-500 transition-colors">Términos de Servicio</a>
                    </nav>
                    <div className="flex space-x-6">
                        <SocialIcon href="https://www.instagram.com/opo_hub/"><InstagramIcon /></SocialIcon>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;