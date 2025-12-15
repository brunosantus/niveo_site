import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-6 relative border-t border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('about.title_pre')} <span className="text-cyan-400">NIVEO</span>?
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                <Trans i18nKey="about.description1">
                A NIVEO projeta, constrói e opera <strong>agentes conversacionais</strong> que atendem, vendem e agendam em WhatsApp, Telegram e chat do site/páginas.
                </Trans>
              </p>
              <p>
                <Trans i18nKey="about.description2">
                <strong>Desenvolvemos apps Multiplataforma</strong>, landing pages e sites de alta performance. 
                </Trans>
              </p>
              <p>
                {t('about.description3')}
              </p>
              
              <div className="pt-6">
                <h3 className="text-white font-semibold text-xl mb-4">{t('about.commitment_title')}</h3>
                <ul className="space-y-3">
                   <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>
                        <Trans i18nKey="about.item1">
                          <strong>Clareza primeiro</strong> em toda comunicação.
                        </Trans>
                      </span>
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>
                        <Trans i18nKey="about.item2">
                          <strong>Escala com toque humano</strong>, sem perder a empatia.
                        </Trans>
                      </span>
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>
                        <Trans i18nKey="about.item3">
                          <strong>Métricas no centro</strong> para crescimento previsível.
                        </Trans>
                      </span>
                   </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
             <div className="aspect-square rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 mix-blend-overlay z-10" />
                {/* Abstract visual representation of Integration/Flow */}
                <div className="w-full h-full bg-[#0f172a] border border-white/10 p-8 flex flex-col justify-center relative overflow-hidden">
                   
                   {/* Decorative connecting lines */}
                   <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                         <path d="M20,20 Q50,50 80,20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500" />
                         <path d="M20,80 Q50,50 80,80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-500" />
                         <path d="M20,20 Q50,50 20,80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-500" />
                         <path d="M80,20 Q50,50 80,80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
                      </svg>
                   </div>

                   <div className="relative z-20 grid grid-cols-2 gap-8 text-center">
                      <div className="bg-white/5 backdrop-blur border border-white/10 p-4 rounded-xl">
                        <div className="text-3xl font-bold text-white mb-1">24/7</div>
                        <div className="text-xs text-slate-400">{t('about.stat_availability')}</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur border border-white/10 p-4 rounded-xl">
                        <div className="text-3xl font-bold text-white mb-1">100%</div>
                        <div className="text-xs text-slate-400">{t('about.stat_transparency')}</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur border border-white/10 p-4 rounded-xl col-span-2">
                        <div className="text-lg font-bold text-white mb-1">{t('about.stat_growth')}</div>
                        <div className="text-xs text-slate-400">{t('about.stat_growth_sub')}</div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;