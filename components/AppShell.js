import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { translations } from '../lib/i18n';

export default function AppShell({ children }) {
  const [lang, setLang] = useState('ar');
  const [currentModule, setCurrentModule] = useState('dashboard');

  const t = translations[lang];

  return (
    <div className={`flex min-h-screen bg-slate-100 ${lang === 'ar' ? 'rtl' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Sidebar 
        currentModule={currentModule} 
        setCurrentModule={setCurrentModule} 
        translations={t} 
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-slate-200 p-4 flex justify-between items-center shadow-sm">
          <h2 className="text-xl font-bold text-slate-800">
            {t[currentModule] || currentModule}
          </h2>
          <div className="flex items-center space-x-4 space-x-reverse">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded text-sm font-medium transition-colors"
            >
              {lang === 'ar' ? 'English' : 'عربي'}
            </button>
            <span className="text-sm text-slate-600">
              {t.welcome}، <strong>المدير العام</strong>
            </span>
          </div>
        </header>

        <main className="p-6 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
