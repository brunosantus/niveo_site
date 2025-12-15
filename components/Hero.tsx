import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, MessageCircle, Bot, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onOpenChat: () => void;
}

const Hero = ({ onOpenChat }: HeroProps) => {
  const { t } = useTranslation();

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
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 pb-20 px-6">
      {/* Background Gradients/Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[20%] w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute -bottom-[20%] left-[40%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onOpenChat}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-8 hover:bg-cyan-500/20 transition-colors cursor-pointer group"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-xs font-medium text-cyan-300 uppercase tracking-wide">
            {t('hero.badge')}
          </span>
          <ChevronRight className="w-3 h-3 text-cyan-300 group-hover:translate-x-0.5 transition-transform" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400">
            {t('hero.title1')}
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-glow">
            {t('hero.title2')}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a 
             href="#contact" 
             onClick={(e) => scrollToSection(e, '#contact')}
             className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            {t('hero.btn_automate')}
            <Bot className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
          </a>
          
          <a 
             href="#solutions" 
             onClick={(e) => scrollToSection(e, '#solutions')}
             className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white font-medium backdrop-blur-sm flex items-center justify-center gap-2 group"
          >
            {t('hero.btn_features')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Hero Visual/Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-20 relative w-full max-w-6xl"
        >
           {/* Abstract Glow behind image */}
           <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20" />
           
           <div className="relative rounded-xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-xl overflow-hidden shadow-2xl">
             <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
             </div>
             {/* Chat / Automation Dashboard Concept */}
             <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                   {/* Main metric card */}
                   <div className="h-48 rounded-lg bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-6 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-sm text-cyan-400 mb-2">{t('hero.stats.response_time')}</div>
                          <div className="text-4xl font-bold text-white mb-1">{t('hero.stats.response_value')}</div>
                          <div className="text-xs text-slate-500">{t('hero.stats.active_agents')}</div>
                        </div>
                        <div className="p-2 bg-cyan-500/10 rounded-lg">
                          <Zap className="text-cyan-400 w-6 h-6" />
                        </div>
                      </div>
                      
                      {/* Interaction Graph Mockup */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end gap-1 px-6 pb-4 opacity-50">
                         {/* Smoother wave-like bars */}
                        {[20, 35, 40, 50, 45, 60, 75, 65, 80, 70, 90, 85, 95, 100, 90, 80].map((h, i) => (
                          <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-gradient-to-t from-cyan-500/40 to-blue-500/40 rounded-t-sm" />
                        ))}
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-6">
                      <div className="h-32 rounded-lg bg-white/5 border border-white/5 p-4 flex flex-col justify-between">
                         <div className="flex items-center gap-2">
                           <MessageCircle className="w-4 h-4 text-purple-400" />
                           <div className="text-sm text-slate-400">{t('hero.stats.conversion')}</div>
                         </div>
                         <div>
                           <div className="text-2xl font-bold text-white flex items-center gap-2">
                             +40% 
                             <span className="text-xs text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded-full">↑</span>
                           </div>
                           <div className="text-xs text-slate-500 mt-1">{t('hero.stats.vs_manual')}</div>
                         </div>
                      </div>
                       <div className="h-32 rounded-lg bg-white/5 border border-white/5 p-4 flex flex-col justify-between">
                         <div className="flex items-center gap-2">
                           <Bot className="w-4 h-4 text-blue-400" />
                           <div className="text-sm text-slate-400">{t('hero.stats.automation')}</div>
                         </div>
                         <div>
                            <div className="text-2xl font-bold text-white">99.8%</div>
                            <div className="mt-2 h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                              <div className="h-full w-[99%] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Integration Sidebar */}
                <div className="col-span-1 h-full rounded-lg bg-white/5 border border-white/5 p-6 relative">
                   <div className="text-sm text-slate-400 mb-4">{t('hero.stats.integrations')}</div>
                   <div className="space-y-3">
                     {[
                       { name: 'WhatsApp API', color: 'bg-green-500' },
                       { name: 'Google Calendar', color: 'bg-blue-500' },
                       { name: 'CRM', color: 'bg-sky-500' },
                       { name: 'OpenAI / Gemini', color: 'bg-purple-500' }
                     ].map((item, i) => (
                       <div key={i} className="flex items-center justify-between p-3 rounded-md bg-white/5 hover:bg-white/10 transition-colors cursor-default border border-white/5">
                          <span className="text-sm text-slate-200">{item.name}</span>
                          <div className={`w-2 h-2 rounded-full ${item.color} shadow-[0_0_8px_currentColor]`} />
                       </div>
                     ))}
                   </div>
                   
                   <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="text-xs text-slate-500 mb-2">{t('hero.stats.next_schedule')}</div>
                      <div className="bg-white/5 rounded p-3 text-sm flex gap-3 items-center">
                        <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">14</div>
                        <div>
                          <div className="text-white font-medium">{t('hero.stats.demo_product')}</div>
                          <div className="text-xs text-slate-400">{t('hero.stats.today')}, 14:00h</div>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;