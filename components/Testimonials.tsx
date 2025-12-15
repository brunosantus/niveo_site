import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TestimonialCard = ({ quote, author, role, company, metric, metricLabel, icon: Icon, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-[#0f172a]/40 backdrop-blur-md hover:bg-[#0f172a]/60 transition-colors group"
    >
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote size={60} className="text-cyan-400" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-6 text-yellow-500">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} size={16} fill="currentColor" />
        ))}
      </div>

      {/* Quote Text */}
      <p className="text-slate-300 text-lg leading-relaxed mb-8 flex-grow italic">
        "{quote}"
      </p>

      {/* Result Metric Badge */}
      <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center gap-3">
        <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
          <Icon size={20} />
        </div>
        <div>
          <div className="text-xl font-bold text-white leading-none">{metric}</div>
          <div className="text-xs text-cyan-200/70 uppercase tracking-wider font-medium mt-1">{metricLabel}</div>
        </div>
      </div>

      {/* Author Info */}
      <div className="pt-6 border-t border-white/5">
        <div className="font-semibold text-white">{author}</div>
        <div className="text-sm text-slate-500">{role}, <span className="text-cyan-400">{company}</span></div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t('testimonials.t1_quote'),
      author: "Ricardo Mendes",
      role: t('testimonials.t1_role'),
      company: "Moda & Estilo",
      metric: "+35%",
      metricLabel: t('testimonials.t1_metric'),
      icon: TrendingUp,
      delay: 0
    },
    {
      quote: t('testimonials.t2_quote'),
      author: "Dra. Juliana Costa",
      role: t('testimonials.t2_role'),
      company: "Clínica Vitalitá",
      metric: "-90%",
      metricLabel: t('testimonials.t2_metric'),
      icon: CalendarClock => <Clock {...CalendarClock} />, 
      delay: 0.1
    },
    {
      quote: t('testimonials.t3_quote'),
      author: "Carlos Eduardo",
      role: t('testimonials.t3_role'),
      company: "TechSolutions B2B",
      metric: "5x",
      metricLabel: t('testimonials.t3_metric'),
      icon: Users,
      delay: 0.2
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            {t('testimonials.title_pre')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t('testimonials.title_highlight')}</span>
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;