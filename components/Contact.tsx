import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ContactProps {
  onOpenChat: () => void;
}

const Contact = ({ onOpenChat }: ContactProps) => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0f172a] to-[#030014] p-12 md:p-24 text-center">
        {/* Glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t('contact.title_line1')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">{t('contact.title_highlight')}</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
             <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                   <Mail size={20} />
                </div>
                <h3 className="text-white font-semibold mb-2">{t('contact.label_email')}</h3>
                <p className="text-slate-400 text-sm">contato@niveo.es</p>
             </div>
             <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                   <MessageSquare size={20} />
                </div>
                <h3 className="text-white font-semibold mb-2">{t('contact.label_support')}</h3>
                <p className="text-slate-400 text-sm">{t('contact.label_support_desc')}</p>
             </div>
             <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                   <MapPin size={20} />
                </div>
                <h3 className="text-white font-semibold mb-2">{t('contact.label_location')}</h3>
                <p className="text-slate-400 text-sm">Madrid, Espanha</p>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/34614004308?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria%20da%20NIVEO."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-colors w-full sm:w-auto inline-flex items-center justify-center cursor-pointer"
            >
              {t('contact.btn_schedule')}
            </a>
            <button 
              onClick={onOpenChat}
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors w-full sm:w-auto font-medium inline-flex items-center justify-center cursor-pointer"
            >
              {t('contact.btn_agent')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;