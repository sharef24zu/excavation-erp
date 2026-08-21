'use client';

import React, { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState('he');
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
      monthInvoices: 'חשבוניות ממתינות',
      monthIncome: 'הכנסות החודש',
      totalExpenses: 'סה"כ הוצאות',
      netProfit: 'רווח נקי',
      save: 'שמירה',
      cancel: 'ביטול',
      noData: 'אין נתונים רשומים',
      search: 'חיפוש...',
      uploadFile: 'בחר תמונה / קובץ מהמכשיר',
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
      save: 'حفظ',
      cancel: 'إلغاء',
      noData: 'لا توجد بيانات مسجلة',
      search: 'بحث...',
      uploadFile: 'اختر صورة / ملف من الجهاز',
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

  const renderModalContent = () => {
    switch (activeTab) {
      case 'projects':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-700 pb-2 mb-4">
              {lang === 'he' ? 'פרויקט חדש' : 'مشروع جديد'}
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'שם הפרויקט *' : 'اسم المشروع *'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'לקוח' : 'العميل'}</label>
                <select className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white">
                  <option>{lang === 'he' ? 'ללא' : 'بدون'}</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'מיקום' : 'الموقع'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'סטטוס' : 'الحالة'}</label>
                  <select className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white">
                    <option>{lang === 'he' ? 'בתכנון' : 'قيد التخطيط'}</option>
                    <option>{lang === 'he' ? 'פעיל' : 'نشط'}</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תאריך התחלה' : 'تاريخ البدء'}</label>
                  <input type="date" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תקציב (₪)' : 'الميزانية (₪)'}</label>
                <input type="number" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
            </div>
          </>
        );

      case 'equipment':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-700 pb-2 mb-4">
              {lang === 'he' ? 'ציוד חדש' : 'معدة جديدة'}
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'שם הציוד *' : 'اسم المعدة *'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'סוג' : 'النوع'}</label>
                  <select className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white">
                    <option>{lang === 'he' ? 'מחפר' : 'حفار'}</option>
                    <option>{lang === 'he' ? 'מטען' : 'جرافة'}</option>
                    <option>{lang === 'he' ? 'משאית' : 'شاحنة'}</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'סטטוס' : 'الحالة'}</label>
                  <select className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white">
                    <option>{lang === 'he' ? 'בהמתנה' : 'في الانتظار'}</option>
                    <option>{lang === 'he' ? 'בפעולה' : 'قيد العمل'}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'מספר רישוי / סידורי' : 'رقم الترخيص / التسلسلي'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תאריך טיפול אחרון' : 'تاريخ آخر صيانة'}</label>
                  <input type="date" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תאריך טיפול הבא' : 'تاريخ الصيانة القادمة'}</label>
                  <input type="date" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
            </div>
          </>
        );

      case 'employees':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-700 pb-2 mb-4">
              {lang === 'he' ? 'עובד חדש' : 'عامل جديد'}
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'שם מלא *' : 'الاسم الكامل *'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תפקיד' : 'الوظيفة'}</label>
                  <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'טלפון' : 'الهاتف'}</label>
                  <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תעריף ליום' : 'أجر اليوم (₪)'}</label>
                  <input type="number" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תעריף שעה נוספת' : 'أجر الساعة الإضافية (₪)'}</label>
                  <input type="number" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
            </div>
          </>
        );

      case 'insurance':
      case 'photos':
      case 'media':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-700 pb-2 mb-4">
              {lang === 'he' ? 'העלאת קובץ / מסמך חדש' : 'رفع ملف / وثيقة جديدة'}
            </h3>
            <div className="space-y-4 text-sm">
              <div className="border-2 border-dashed border-slate-700 p-6 text-center rounded-xl hover:border-amber-500 cursor-pointer transition-colors">
                <span className="text-3xl block mb-2">📁</span>
                <p className="text-xs text-slate-400">{t.uploadFile}</p>
                <input type="file" className="hidden" id="fileUpload" />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תיאור / הערות' : 'الوصف / ملاحظات'}</label>
                <textarea rows="3" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white"></textarea>
              </div>
            </div>
          </>
        );

      default:
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-700 pb-2 mb-4">
              {lang === 'he' ? 'הוספת רשומה חדשה' : 'إضافة سجل جديد'}
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'שם / תיאור *' : 'الاسم / الوصف *'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'סכום (₪)' : 'المبلغ (₪)'}</label>
                <input type="number" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen bg-[#0f172a] text-slate-100 flex flex-col font-sans`} dir="rtl">
      {/* Top Header */}
      <header className="bg-[#1e293b] border-b border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center space-x-4 space-x-reverse">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 bg-slate-800 rounded-lg text-amber-500 font-bold lg:hidden">
            ☰
          </button>
          <div>
            <h1 className="text-lg font-bold text-amber-500">{t.title}</h1>
            <p className="text-xs text-slate-400">{t.subTitle}</p>
          </div>
        </div>

        <button 
          onClick={() => setLang(lang === 'he' ? 'ar' : 'he')}
          className="bg-amber-500 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs hover:bg-amber-400 transition-colors shadow"
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
          {activeTab === 'dashboard' ? (
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

              <div className="bg-[#1e293b] p-8 rounded-xl border border-slate-800 text-center py-12">
                <span className="text-4xl mb-2 block">🏗️</span>
                <p className="text-slate-400 text-sm">{t.noData}</p>
              </div>
            </div>
          ) : (
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

              <div className="bg-[#1e293b] rounded-xl border border-slate-800 p-12 text-center">
                <p className="text-slate-400 text-sm">{t.noData}</p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1e293b] border border-slate-700 w-full max-w-lg rounded-2xl p-6 shadow-2xl space-y-4">
            {renderModalContent()}
            <div className="flex justify-end space-x-2 space-x-reverse pt-4 border-t border-slate-700">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm">
                {t.cancel}
              </button>
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg text-sm">
                {t.save}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
