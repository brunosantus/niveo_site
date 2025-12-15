import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18nInstance from '../i18n';

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    // Use the imported instance directly to avoid potential hook return issues
    i18nInstance.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  const languages = [
    { code: 'es', flag: '🇪🇸', label: 'ES' },
    { code: 'pt', flag: '🇧🇷', label: 'PT' },
    { code: 'en', flag: '🇺🇸', label: 'EN' },
  ];

  // Use i18nInstance for current language check as well to be consistent
  const currentLangCode = i18nInstance.language || 'es';
  const currentLang = languages.find(l => l.code === currentLangCode) || languages[0];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t('navbar.home'), href: '#home' },
    { name: t('navbar.solutions'), href: '#solutions' },
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#030014]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-2 cursor-pointer z-50"
        >
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            N
          </div>
          <span className="text-xl font-bold tracking-tight text-white">N I V E O</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Language Selector Desktop */}
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
            >
              <span className="text-base">{currentLang.flag}</span>
              <span>{currentLang.label}</span>
            </button>
            
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-2 right-0 bg-[#0f172a] border border-white/10 rounded-xl overflow-hidden min-w-[120px] shadow-xl"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-white/10 transition-colors text-left ${currentLangCode === lang.code ? 'text-cyan-400 bg-white/5' : 'text-slate-300'}`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="group relative px-6 py-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-slate-200 transition-all flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">{t('navbar.cta')}</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <button 
            onClick={() => setLangMenuOpen(!langMenuOpen)}
            className="flex items-center gap-1.5 text-sm font-medium text-slate-300 bg-white/5 px-2 py-1 rounded-full border border-white/10"
          >
            <span className="text-base">{currentLang.flag}</span>
            <span>{currentLang.label}</span>
          </button>

          <button
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Language Menu Mobile (Absolute overlay) */}
      <AnimatePresence>
        {langMenuOpen && (
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: 10 }}
             className="md:hidden absolute top-20 right-6 z-50 bg-[#0f172a] border border-white/10 rounded-xl overflow-hidden min-w-[140px] shadow-xl"
           >
             {languages.map((lang) => (
               <button
                 key={lang.code}
                 onClick={() => changeLanguage(lang.code)}
                 className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-white/10 transition-colors text-left ${currentLangCode === lang.code ? 'text-cyan-400 bg-white/5' : 'text-slate-300'}`}
               >
                 <span className="text-lg">{lang.flag}</span>
                 <span>{lang.label}</span>
               </button>
             ))}
           </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 h-screen bg-[#030014] pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-2xl font-semibold text-slate-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-white/10 w-full my-4" />
            <a 
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full py-4 text-center block bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-cyan-900/20"
            >
              {t('navbar.cta')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;