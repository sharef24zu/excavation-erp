'use client';

import React, { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState('he'); // 'he' or 'ar'
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const t = {
    he: {
      title: 'זוביידאת חאלד עבודות עפר ופיתוח',
      subTitle: 'ניהול חברת עפר וחפורות',
      dashboard: 'לוח בקרה',
      alerts: 'רישיונות ותראות',
      projects: 'פרויקטים ואתרים',
      equipment: 'ציוד וצי כלים',
      employees: 'עובדים',
      customers: 'לקוחות ושיווק',
      quotes: 'הצעות מחיר',
      invoices: 'חשבוניות',
      expenses: 'הוצאות',
      checks: 'שיקים דחויים',
      photos: 'תמונות ציוד',
      media: 'מדיה לשיווק',
      insurance: 'מסמכי ביטוח',
      activeProjects: 'פרויקטים פעילים',
      equipmentInWork: 'ציוד בפעולה',
      monthInvoices: 'חשבוניות ממתנות',
      monthIncome: 'הכנסות החודש',
      totalExpenses: 'סה"כ הוצאות',
      netProfit: 'רווח נקי',
      addProject: 'פרויקט חדש',
      addEquipment: 'ציוד חדש',
      addEmployee: 'עובד חדש',
      addCustomer: 'לקוח / ליד',
      addQuote: 'הצעת מחיר חדשה',
      addInvoice: 'חשבונית חדשה',
      addExpense: 'הוצאה חדשה',
      addCheck: 'שיק חדש',
      search: 'חיפוש...',
      noData: 'אין נתונים רשומים',
      save: 'שמירה',
      cancel: 'ביטול',
      allOk: 'הכל תקין, אין התראות',
    },
    ar: {
      title: 'زوبيدات خالد لأعمال الحفريات والتطوير',
      subTitle: 'إدارة شركة الحفريات',
      dashboard: 'لوحة التحكم',
      alerts: 'الرخص والتنبيهات',
      projects: 'المشاريع والمواقع',
      equipment: 'المعدات والأسطول',
      employees: 'العمال',
      customers: 'العملاء والتسويق',
      quotes: 'عروض الأسعار',
      invoices: 'الفواتير',
      expenses: 'المصاريف',
      checks: 'الشيكات',
      photos: 'صور المعدات',
      media: 'وسائط التسويق',
      insurance: 'وثائق التأمين',
      activeProjects: 'المشاريع النشطة',
      equipmentInWork: 'معدات قيد العمل',
      monthInvoices: 'فواتير معلقة',
      monthIncome: 'دخل الشهر',
      totalExpenses: 'إجمالي المصاريف',
      netProfit: 'الربح الصافي',
      addProject: '+ مشروع جديد',
      addEquipment: '+ معدة جديدة',
      addEmployee: '+ عامل جديد',
      addCustomer: '+ عميل جديد',
      addQuote: '+ عرض سعر جديد',
      addInvoice: '+ فاتورة جديدة',
      addExpense: '+ مصاريف جديدة',
      addCheck: '+ شيك جديد',
      search: 'بحث...',
      noData: 'لا توجد بيانات مسجلة',
      save: 'حفظ',
      cancel: 'إلغاء',
      allOk: 'كل شيء ممتاز، لا توجد تنبيهات',
    }
  }[lang];

  const menuItems = [
    { id: 'dashboard', label: t.dashboard, icon: '📊' },
    { id: 'alerts', label: t.alerts, icon: '🔔' },
    { id: 'projects', label: t.projects, icon: '📍' },
    { id: 'equipment', label: t.equipment, icon: '🚜' },
    { id: 'employees', label: t.employees, icon: '👷' },
    { id: 'customers', label: t.customers, icon: '👥' },
    { id: 'quotes', label: t.quotes, icon: '🏷️' },
    { id: 'invoices', label: t.invoices, icon: '📄' },
    { id: 'expenses', label: t.expenses, icon: '💳' },
    { id: 'checks', label: t.checks, icon: '📑' },
    { id: 'photos', label: t.photos, icon: '🖼️' },
    { id: 'media', label: t.media, icon: '📱' },
    { id: 'insurance', label: t.insurance, icon: '🛡️' },
  ];

  return (
    <div className={`min-h-screen bg-[#0f172a] text-slate-100 flex flex-col font-sans`} dir={lang === 'ar' ? 'rtl' : 'rtl'}>
      {/* Header */}
      <header className="bg-[#1e293b] border-b border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center space-x-4 space-x-reverse">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-amber-500 font-bold">
            ☰
          </button>
          <div>
            <h1 className="text-lg font-bold text-amber-500">{t.title}</h1>
            <p className="text-xs text-slate-400">{t.subTitle}</p>
          </div>
        </div>

        <button 
          onClick={() => setLang(lang === 'he' ? 'ar' : 'he')}
          className="bg-amber-500 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs hover:bg-amber-400 transition-colors"
        >
          {lang === 'he' ? 'العربية 🌐' : 'עברית 🌐'}
        </button>
      </header>

      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <aside className={`w-64 bg-[#111827] border-l border-slate-800 p-4 space-y-1 fixed lg:static inset-y-0 right-0 z-30 transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} overflow-y-auto`}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setIsSidebarOpen(false); }}
              className={`w-full flex items-center space-x-3 space-x-reverse px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id 
                  ? 'bg-amber-500/10 text-amber-500 border-r-4 border-amber-500' 
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto max-w-7xl mx-auto w-full">
          {/* Dashboard View */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { title: t.activeProjects, val: '0 ₪', icon: '📍' },
                  { title: t.equipmentInWork, val: '0', icon: '🚜' },
                  { title: t.monthInvoices, val: '0 ₪', icon: '📄' },
                  { title: t.monthIncome, val: '0 ₪', icon: '📈' },
                  { title: t.totalExpenses, val: '0 ₪', icon: '💳' },
                  { title: t.netProfit, val: '0 ₪', icon: '💰' },
                ].map((card, i) => (
                  <div key={i} className="bg-[#1e293b] p-4 rounded-xl border border-slate-800">
                    <div className="flex justify-between items-center text-slate-400 text-xs mb-2">
                      <span>{card.title}</span>
                      <span>{card.icon}</span>
                    </div>
                    <p className="text-xl font-bold text-slate-100">{card.val}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#1e293b] p-6 rounded-xl border border-slate-800 text-center py-12">
                <span className="text-4xl mb-2 block">🏗️</span>
                <p className="text-slate-400 text-sm">{t.noData}</p>
              </div>
            </div>
          )}

          {/* Other Tabs with Action Buttons & Modals */}
          {activeTab !== 'dashboard' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-amber-500">
                  {menuItems.find(m => m.id === activeTab)?.label}
                </h2>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/10"
                >
                  + {lang === 'he' ? 'הוספה חדשה' : 'إضافة جديدة'}
                </button>
              </div>

              <div className="bg-[#1e293b] rounded-xl border border-slate-800 p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-3 text-slate-500">
                  ➕
                </div>
                <p className="text-slate-400 text-sm">{t.noData}</p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1e293b] border border-slate-700 w-full max-w-lg rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b border-slate-700 pb-3">
              <h3 className="font-bold text-amber-500">{lang === 'he' ? 'טופס הוספה חדש' : 'نموذج إضافة جديد'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'שם / תיאור' : 'الاسم / الوصف'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:border-amber-500 outline-none" />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'סכום / פרטים' : 'المبلغ / التفاصيل'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:border-amber-500 outline-none" />
              </div>
            </div>

            <div className="flex justify-end space-x-2 space-x-reverse pt-2">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm">{t.cancel}</button>
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg text-sm">{t.save}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
