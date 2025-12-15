import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#030014] border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white">
                N
              </div>
              <span className="text-xl font-bold text-white">N I V E O</span>
            </div>
            <p className="text-slate-500 text-sm mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6"></h4>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6"></h4>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">{t('footer.contact_header')}</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contato@niveo.es</span>
              </li>
              <li>Madrid, Espanha</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <div>{t('footer.rights')}</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-slate-400">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;