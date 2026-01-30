
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const companyRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setIsCompanyOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const companyLinks = [
    { label: 'About', href: '#about' },
    { label: 'Mission, Vision & Values', href: '#mission' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'FAQ', href: '#faq' }
  ];

  const servicesLinks = [
    { label: 'Software Development', href: '#services' },
    { label: 'Website Development', href: '#services' },
    { label: 'Mobile App Development', href: '#services' },
    { label: 'Blockchain Development', href: '#services' },
    { label: 'UI/UX & Graphics Design', href: '#services' },
    { label: 'Digital Marketing', href: '#services' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
      setIsCompanyOpen(false);
      setIsServicesOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-slate-950 py-5'}`}>
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">V</div>
          <span className="text-xl font-bold tracking-tight text-white">Nexus<span className="text-blue-500">Vision</span></span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-7 text-[13px] font-semibold tracking-wide uppercase text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          
          {/* Company Dropdown */}
          <div 
            className="relative" 
            ref={companyRef}
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <button 
              className={`flex items-center space-x-1 cursor-pointer transition-colors outline-none ${isCompanyOpen ? 'text-white' : 'hover:text-white'}`}
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              <span>Company</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isCompanyOpen ? 'rotate-180 text-blue-500' : ''}`} />
            </button>
            
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 origin-top transition-all duration-300 ${isCompanyOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}`}>
              <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl overflow-hidden py-2 mt-2">
                {companyLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block px-6 py-3 text-sm font-medium normal-case text-slate-400 hover:text-white hover:bg-slate-800/50 hover:border-l-2 hover:border-blue-500 transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div 
            className="relative" 
            ref={servicesRef}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              className={`flex items-center space-x-1 cursor-pointer transition-colors outline-none ${isServicesOpen ? 'text-white' : 'hover:text-white'}`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <span>Services</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-blue-500' : ''}`} />
            </button>
            
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 origin-top transition-all duration-300 ${isServicesOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}`}>
              <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl overflow-hidden py-2 mt-2">
                {servicesLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block px-6 py-3 text-sm font-medium normal-case text-slate-400 hover:text-white hover:bg-slate-800/50 hover:border-l-2 hover:border-blue-500 transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="#" className="hover:text-white transition-colors">Industries</a>
          <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="hover:text-white transition-colors">Case Studies</a>
          <a href="#" className="hover:text-white transition-colors">Blog</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-md text-sm font-bold transition-all shadow-lg shadow-blue-600/20 uppercase tracking-tighter">
            Get in touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
