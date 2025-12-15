import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoChat from './components/DemoChat';
import { useTranslation } from 'react-i18next';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="bg-[#030014] min-h-screen text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      
      <main>
        <Hero onOpenChat={() => setIsChatOpen(true)} />
        
        {/* Tech Stack Ticker */}
        <div className="py-10 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
             <p className="text-center text-slate-500 text-sm font-medium mb-8 uppercase tracking-widest">{t('app.tech_stack')}</p>
             <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Text representations of logos for demo purposes */}
                <span className="text-xl font-bold text-white flex items-center gap-2">WhatsApp</span>
                <span className="text-xl font-bold text-white flex items-center gap-2">OpenAI/Gemini</span>
                <span className="text-xl font-bold text-white flex items-center gap-2">Google Cloud</span>
                <span className="text-xl font-bold text-white flex items-center gap-2">CRM</span>
                <span className="text-xl font-bold text-white flex items-center gap-2">ChatWoot</span>
             </div>
          </div>
        </div>

        <Features />

        <Testimonials />
        
        <About />

        <Contact onOpenChat={() => setIsChatOpen(true)} />

      </main>

      <Footer />
      
      {/* Floating Demo Chat */}
      <DemoChat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
}

export default App;