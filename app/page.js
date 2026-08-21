'use client';

import React, { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState('he');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Form State Handlers
  const [equipType, setEquipType] = useState('محفر');
  const [equipStatus, setEquipStatus] = useState('פעיל');
  const [clientType, setClientType] = useState('פרטי');

  const t = {
    he: {
      title: 'זוביידאת חאלד עבודות עפר ופיתוח',
      subTitle: 'פיקוח וניהול של ביצוע עבודות עפר',
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
      noData: 'אין נתונים להצגה',
      search: 'חיפוש לפי שם...',
      addBtn: 'הוספה חדשה',
    },
    ar: {
      title: 'زوبيدات خالد لأعمال الحفريات والتطوير',
      subTitle: 'إشراف وإدارة تنفيذ أعمال الحفريات',
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
      noData: 'لا توجد بيانات للعرض',
      search: 'بحث حسب الاسم...',
      addBtn: 'إضافة جديدة',
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
            <h3 className="font-bold text-amber-500 border-b border-slate-700 pb-2 mb-4 text-center">
              {lang === 'he' ? 'פרויקט חדש' : 'مشروع جديد'}
            </h3>
            <div className="space-y-3 text-right">
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'שם הפרויקט' : 'اسم المشروع'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'לקוח' : 'العميل'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תקציב (₪)' : 'الميزانية (₪)'}</label>
                  <input type="number" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תאריך התחלה' : 'تاريخ البدء'}</label>
                  <input type="date" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'מיקום / כתובת' : 'الموقع / العنوان'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
            </>
        );

      case 'equipment':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-700 pb-2 mb-4 text-center">
              {lang === 'he' ? 'ציוד חדש' : 'معدة جديدة'}
            </h3>
            <div className="space-y-3 text-right">
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'שם הציוד' : 'اسم المعدة'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'סוג' : 'النوع'}</label>
                  <select value={equipType} onChange={(e) => setEquipType(e.target.value)} className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white">
                    <option value="محفر">{lang === 'he' ? 'מחפר' : 'حفار'}</option>
                    <option value="مجد">{lang === 'he' ? 'מטען' : 'جرافة'}</option>
                    <option value="شاحنة">{lang === 'he' ? 'משאית' : 'شاحنة'}</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'מספר רישוי' : 'رقم الترخيص'}</label>
                  <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'מחיר לשעה (₪)' : 'السعر للساعة (₪)'}</label>
                  <input type="number" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'סטטוס' : 'الحالة'}</label>
                  <div className="flex bg-[#0f172a] rounded-lg p-1 border border-slate-700">
                    <button type="button" onClick={() => setEquipStatus('פעיל')} className={`flex-1 py-1 text-xs rounded ${equipStatus === 'פעיל' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}>
                      {lang === 'he' ? 'פעיל' : 'نشط'}
                    </button>
                    <button type="button" onClick={() => setEquipStatus('מועבר')} className={`flex-1 py-1 text-xs rounded ${equipStatus === 'מועבר' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}>
                      {lang === 'he' ? 'בהמתנה' : 'معطل/صيانة'}
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תאריך טיפול אחרון' : 'تاريخ آخر صيانة'}</label>
                  <input type="date" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תאריך טסט/טיפול הבא' : 'تاريخ الفحص القادم'}</label>
                  <input type="date" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
            </div>
          </>
        );

      case 'employees':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-700 pb-2 mb-4 text-center">
              {lang === 'he' ? 'עובד חדש' : 'عامل جديد'}
            </h3>
            <div className="space-y-3 text-right">
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'שם מלא' : 'الاسم الكامل'}</label>
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
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תאריך תחילת עבודה' : 'تاريخ بدء العمل'}</label>
                <input type="date" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תעריף ליום (₪)' : 'أجر اليوم (₪)'}</label>
                  <input type="number" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תעריף שעה נוספת (₪)' : 'أجر الساعة الإضافية (₪)'}</label>
                  <input type="number" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
            </div>
          </>
        );

      case 'customers':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-700 pb-2 mb-4 text-center">
              {lang === 'he' ? 'לקוח / ספק חדש' : 'عميل / مورد جديد'}
            </h3>
            <div className="space-y-3 text-right">
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'שם מלא / חברה' : 'الاسم الكامل / الشركة'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'טלפון' : 'الهاتف'}</label>
                  <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'אימייל' : 'البريد الإلكتروني'}</label>
                  <input type="email" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'מספר ע.מורשה / ח.פ' : 'رقم المشتغل / الشركة'}</label>
                  <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'סוג לקוח' : 'نوع العميل'}</label>
                  <div className="flex bg-[#0f172a] rounded-lg p-1 border border-slate-700">
                    <button type="button" onClick={() => setClientType('פרטי')} className={`flex-1 py-1 text-xs rounded ${clientType === 'פרטי' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}>
                      {lang === 'he' ? 'פרטי' : 'خاص'}
                    </button>
                    <button type="button" onClick={() => setClientType('חברה')} className={`flex-1 py-1 text-xs rounded ${clientType === 'חברה' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}>
                      {lang === 'he' ? 'חברה' : 'شركة'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case 'quotes':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-700 pb-2 mb-4 text-center">
              {lang === 'he' ? 'הצעת מחיר חדשה' : 'عرض سعر جديد'}
            </h3>
            <div className="space-y-3 text-right">
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'לקוח' : 'العميل'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'פרויקט' : 'المشروع'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תאריך' : 'التاريخ'}</label>
                  <input type="date" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'בתוקף עד' : 'صالح حتى'}</label>
                  <input type="date" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'סכום לפני מע"מ (₪)' : 'المبلغ قبل الضريبة (₪)'}</label>
                <input type="number" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
            </div>
          </>
        );

      case 'invoices':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-700 pb-2 mb-4 text-center">
              {lang === 'he' ? 'חשבונית חדשה' : 'فاتورة جديدة'}
            </h3>
            <div className="space-y-3 text-right">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'מספר חשבונית' : 'رقم الفاتورة'}</label>
                  <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'לקוח' : 'العميل'}</label>
                  <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'סכום לפני מע"מ (₪)' : 'المبلغ قبل الضريبة (₪)'}</label>
                  <input type="number" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תאריך הוצאה' : 'تاريخ الإصدار'}</label>
                  <input type="date" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תאריך פירעון' : 'تاريخ الاستحقاق'}</label>
                  <input type="date" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'סטטוס תשלום' : 'حالة الدفع'}</label>
                  <select className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white">
                    <option>{lang === 'he' ? 'ממתין לתשלום' : 'معلق'}</option>
                    <option>{lang === 'he' ? 'שולם' : 'مدفوع'}</option>
                  </select>
                </div>
              </div>
            </div>
          </>
        );

      case 'expenses':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-700 pb-2 mb-4 text-center">
              {lang === 'he' ? 'הוצאה חדשה' : 'مصروف جديد'}
            </h3>
            <div className="space-y-3 text-right">
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תיאור ההוצאה' : 'وصف المصروف'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'קטגוריה' : 'الفئة'}</label>
                  <select className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white">
                    <option>{lang === 'he' ? 'דלק' : 'وقود'}</option>
                    <option>{lang === 'he' ? 'חלפים ותיקונים' : 'قطع غيار وصيانة'}</option>
                    <option>{lang === 'he' ? 'משכורות' : 'رواتب'}</option>
                    <option>{lang === 'he' ? 'אחר' : 'آخر'}</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'סכום (₪)' : 'المبلغ (₪)'}</label>
                  <input type="number" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תאריך' : 'التاريخ'}</label>
                  <input type="date" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'ספק / קבלן' : 'المورد / المقاول'}</label>
                  <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
            </div>
          </>
        );

      case 'checks':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-700 pb-2 mb-4 text-center">
              {lang === 'he' ? 'שיק חדש' : 'شيك جديد'}
            </h3>
            <div className="space-y-3 text-right">
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'מספר שיק' : 'رقم الشيك'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'שם הבנק' : 'اسم البنك'}</label>
                  <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'סכום (₪)' : 'المبلغ (₪)'}</label>
                  <input type="number" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'תאריך פירעון' : 'تاريخ الاستحقاق'}</label>
                  <input type="date" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'מקור / מוטב' : 'المستفيد'}</label>
                  <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
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
            <h3 className="font-bold text-amber-500 border-b border-slate-700 pb-2 mb-4 text-center">
              {lang === 'he' ? 'העלאת קובץ חדש' : 'رفع ملف جديد'}
            </h3>
            <div className="space-y-4 text-right">
              <div className="border-2 border-dashed border-slate-700 p-8 text-center rounded-xl hover:border-amber-500 cursor-pointer bg-[#0f172a]/50">
                <span className="text-4xl block mb-2">☁️</span>
                <p className="text-xs text-slate-400">{t.uploadFile}</p>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">{lang === 'he' ? 'שם הקובץ / תיאור' : 'اسم الملف / الوصف'}</label>
                <input type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-2.5 text-white" />
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col font-sans" dir="rtl">
      {/* Header */}
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
                  <div key={i} className="bg-[#1e293b] p-4 rounded-xl border border-slate-800 text-right">
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
                  + {t.addBtn}
                </button>
              </div>

              <div className="bg-[#1e293b] rounded-xl border border-slate-800 p-12 text-center">
                <p className="text-slate-400 text-sm">{t.noData}</p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Modal */}
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
