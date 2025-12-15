import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Smartphone, LayoutDashboard, CalendarClock, Monitor, Workflow, Globe } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const FeatureCard = ({ title, description, icon: Icon, className, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative group overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/40 backdrop-blur-md p-8 hover:bg-[#0f172a]/60 transition-colors ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          <Icon className="w-6 h-6 text-cyan-400" />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const { t } = useTranslation();

  return (
    <section id="solutions" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-bold mb-6"
          >
            {t('features.title_pre')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t('features.title_highlight')}</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-slate-400 text-lg max-w-3xl"
          >
            <Trans i18nKey="features.description">
              Somos seu parceiro tecnológico 360º. Especialistas em <strong>Agentes Conversacionais (Chatbot Humanizado)</strong>, 
              <strong>Desenvolvimento de Apps Multiplataforma</strong> e <strong>Criação de Sites</strong> de alta performance.
            </Trans>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1: Agents */}
          <FeatureCard 
            title={t('features.card_agents_title')}
            description={t('features.card_agents_desc')}
            icon={Mic}
            className="md:col-span-2 min-h-[250px]"
            delay={0}
          />

          {/* Service 2: Sites */}
          <FeatureCard 
            title={t('features.card_sites_title')}
            description={t('features.card_sites_desc')}
            icon={Monitor}
            className=""
            delay={0.1}
          />

          {/* Service 3: Apps */}
          <FeatureCard 
            title={t('features.card_apps_title')}
            description={t('features.card_apps_desc')}
            icon={Smartphone}
            className=""
            delay={0.2}
          />

          {/* Integrations */}
          <FeatureCard 
            title={t('features.card_eco_title')}
            description={t('features.card_eco_desc')}
            icon={CalendarClock}
            className="md:col-span-2"
            delay={0.3}
          />

          {/* Integrations */}
          <FeatureCard 
            title={t('features.card_support_title')}
            description={t('features.card_support_desc')}
            icon={CalendarClock}
            className="md:col-span-2"
            delay={0.4}
          />

          {/* Global Reach */}
          <FeatureCard 
            title={t('features.card_global_title')}
            description={t('features.card_global_desc')}
            icon={Globe}
            className=""
            delay={0.5}
          />
          
        </div>
      </div>
    </section>
  );
};

export default Features;