'use client';

import React, { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState('he');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const t = {
    he: {
      brandTitle: 'זוביידאת חאלד עבודות עפר ופיתוח',
      brandSub: 'סקירה כללית של ביצועי החברה',
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
      noData: 'אין עדיין נתונים',
      allClear: 'הכול תקין, אין התראות',
      exportExcel: 'ייצוא ל-Excel',
      addBtn: {
        projects: 'פרויקט חדש',
        equipment: 'ציוד חדש',
        employees: 'עובד חדש',
        customers: 'לקוח / ליד',
        quotes: 'הצעת מחיר חדשה',
        invoices: 'חשבונית חדשה',
        expenses: 'הוצאה חדשה',
        checks: 'שיק חדש',
        photos: 'הוספת תמונה',
        media: 'הוספת מדיה',
        insurance: 'פוליסת ביטוח חדשה'
      }
    },
    ar: {
      brandTitle: 'زوبيدات خالد لأعمال الحفريات والتطوير',
      brandSub: 'نظرة عامة على أداء الشركة',
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
      noData: 'لا توجد بيانات حتى الآن',
      allClear: 'كل شيء سليم، لا توجد تنبيهات',
      exportExcel: 'تصدير لـ Excel',
      addBtn: {
        projects: 'مشروع جديد',
        equipment: 'معدة جديدة',
        employees: 'عامل جديد',
        customers: 'عميل / زبون محتمل',
        quotes: 'عرض سعر جديد',
        invoices: 'فاتورة جديدة',
        expenses: 'مصروف جديد',
        checks: 'شيك جديد',
        photos: 'إضافة صورة',
        media: 'إضافة ميديا',
        insurance: 'وثيقة تأمين جديدة'
      }
    }
  }[lang];

  const menuItems = [
    { id: 'dashboard', label: t.dashboard, icon: '🎛️' },
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
            <h3 className="font-bold text-amber-500 border-b border-slate-800 pb-3 mb-4 text-center text-lg">
              {lang === 'he' ? 'פרויקט חדש' : 'مشروع جديد'}
            </h3>
            <div className="space-y-3 text-right">
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'שם הפרויקט *' : 'اسم المشروع *'}</label>
                <input type="text" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'לקוח' : 'العميل'}</label>
                <select className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white"><option>{lang === 'he' ? 'ללא' : 'بدون'}</option></select>
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'מיקום' : 'الموقع'}</label>
                <input type="text" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'סטטוס' : 'الحالة'}</label>
                  <select className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white"><option>{lang === 'he' ? 'בתכנון' : 'قيد التخطيط'}</option></select>
                </div>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'תאריך התחלה' : 'تاريخ البدء'}</label>
                  <input type="date" defaultValue="2026-08-20" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'תקציב (₪)' : 'الميزانية (₪)'}</label>
                <input type="number" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'ציוד משויך' : 'المعدة المرتبطة'}</label>
                <input type="text" defaultValue={lang === 'he' ? 'ללא' : 'بدون'} className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
            </div>
          </>
        );

      case 'equipment':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-800 pb-3 mb-4 text-center text-lg">
              {lang === 'he' ? 'ציוד חדש' : 'معدة جديدة'}
            </h3>
            <div className="space-y-3 text-right">
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'שם הציוד *' : 'اسم المعدة *'}</label>
                <input type="text" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'סוג' : 'النوع'}</label>
                  <select className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white">
                    <option>{lang === 'he' ? 'מחפר' : 'حفار'}</option>
                    <option>{lang === 'he' ? 'מטען' : 'جرافة'}</option>
                    <option>{lang === 'he' ? 'משאית הובלה' : 'شاحنة نقل'}</option>
                    <option>{lang === 'he' ? 'מוביל ציוד' : 'ناقلة معدات'}</option>
                    <option>{lang === 'he' ? 'דחפור' : 'بلدوزر'}</option>
                    <option>{lang === 'he' ? 'מנוף' : 'رافعة'}</option>
                    <option>{lang === 'he' ? 'אחר' : 'آخر'}</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'סטטוס' : 'الحالة'}</label>
                  <select className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white">
                    <option>{lang === 'he' ? 'בהמתנה' : 'في الانتظار'}</option>
                    <option>{lang === 'he' ? 'פעיל' : 'نشط'}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'מספר רישוי / סידורי' : 'رقم الترخيص / التسلسلي'}</label>
                <input type="text" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'פרויקט נוכחי' : 'المشروع الحالي'}</label>
                <select className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white"><option>{lang === 'he' ? 'ללא' : 'بدون'}</option></select>
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'תאריך תפוגת רישיון רכב/ציוד' : 'تاريخ انتهاء الترخيص'}</label>
                <input type="date" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'תאריך טיפול אחרון' : 'تاريخ آخر صيانة'}</label>
                  <input type="date" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'תאריך טיפול הבא' : 'تاريخ الصيانة القادمة'}</label>
                  <input type="date" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
                </div>
              </div>
            </div>
          </>
        );

      case 'employees':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-800 pb-3 mb-4 text-center text-lg">
              {lang === 'he' ? 'עובד חדש' : 'عامل جديد'}
            </h3>
            <div className="space-y-3 text-right">
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'שם *' : 'الاسم *'}</label>
                <input type="text" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'תפקיד' : 'الوظيفة'}</label>
                <input type="text" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'טלפון' : 'الهاتف'}</label>
                <input type="text" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'תאריך לידה' : 'تاريخ الميلاد'}</label>
                  <input type="date" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'תאריך תחילת עבודה בחברה' : 'تاريخ بدء العمل'}</label>
                  <input type="date" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'תאריך תפוגת רישיון' : 'تاريخ انتهاء الرخصة'}</label>
                <input type="date" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'תעריף יום מלא (16:00-6:00) (₪)' : 'أجر اليوم الكامل (₪)'}</label>
                  <input type="number" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'תעריף שעה נוספת (₪)' : 'أجر الساعة الإضافية (₪)'}</label>
                  <input type="number" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
                </div>
              </div>
            </div>
          </>
        );

      case 'customers':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-800 pb-3 mb-4 text-center text-lg">
              {lang === 'he' ? 'לקוח / ליד' : 'عميل / زبون محتمل'}
            </h3>
            <div className="space-y-3 text-right">
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'שם *' : 'الاسم *'}</label>
                <input type="text" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'שם החברה' : 'اسم الشركة'}</label>
                <input type="text" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'טלפון' : 'الهاتف'}</label>
                <input type="text" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'מקור פנייה' : 'مصدر الاتصال'}</label>
                  <select className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white">
                    <option>{lang === 'he' ? 'המלצה' : 'توصية'}</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'שלב במעקב' : 'مرحلة المتابعة'}</label>
                  <select className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white">
                    <option>{lang === 'he' ? 'ליד' : 'زبون محتمل'}</option>
                  </select>
                </div>
              </div>
            </div>
          </>
        );

      case 'media':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-800 pb-3 mb-4 text-center text-lg">
              {lang === 'he' ? 'הוספת מדיה' : 'إضافة ميديا'}
            </h3>
            <div className="space-y-4 text-right">
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'סוג' : 'النوع'}</label>
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" className="border border-amber-500 text-amber-500 rounded-md py-2 text-sm font-semibold flex justify-center items-center gap-2">🖼️ {lang === 'he' ? 'תמונה' : 'صورة'}</button>
                  <button type="button" className="border border-slate-700 text-slate-400 rounded-md py-2 text-sm flex justify-center items-center gap-2">🎥 {lang === 'he' ? 'וידאו' : 'فيديو'}</button>
                </div>
              </div>
              <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center bg-[#111827]">
                <span className="text-2xl block mb-2">☁️</span>
                <p className="text-xs text-slate-400">{lang === 'he' ? 'בחר תמונה מהמכשיר' : 'اختر صورة من الجهاز'}</p>
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'תיאור / רעיון' : 'الوصف / الفكرة'}</label>
                <textarea rows={3} className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'פלטפורמה' : 'المنصة'}</label>
                  <select className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white"><option>טיקטוק</option></select>
                </div>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'סטטוס' : 'الحالة'}</label>
                  <select className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white"><option>{lang === 'he' ? 'טיוטה' : 'مسودة'}</option></select>
                </div>
              </div>
            </div>
          </>
        );

      case 'insurance':
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-800 pb-3 mb-4 text-center text-lg">
              {lang === 'he' ? 'פוליסת ביטוח חדשה' : 'وثيقة تأمين جديدة'}
            </h3>
            <div className="space-y-3 text-right">
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'סוג ביטוח' : 'نوع التأمين'}</label>
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" className="border border-amber-500 text-amber-500 rounded-md py-2 text-sm font-semibold">{lang === 'he' ? 'רכב' : 'مركبة'}</button>
                  <button type="button" className="border border-slate-700 text-slate-400 rounded-md py-2 text-sm">{lang === 'he' ? 'ציוד הנדסי' : 'معدة هندسية'}</button>
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'ציוד / רכב' : 'المعدة / المركبة'}</label>
                <select className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white"><option>{lang === 'he' ? 'ללא' : 'بدون'}</option></select>
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'חברת ביטוח' : 'شركة التأمين'}</label>
                <input type="text" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'מספר פוליסה' : 'رقم الوثيقة'}</label>
                <input type="text" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'תאריך תחלת ביטוח' : 'تاريخ بدء التأمين'}</label>
                  <input type="date" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
                </div>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'תאריך תפוגת ביטוח *' : 'تاريخ انتهاء التأمين *'}</label>
                  <input type="date" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
                </div>
              </div>
              <div className="border-2 border-dashed border-slate-700 rounded-lg p-4 text-center bg-[#111827]">
                <span className="text-xl block mb-1">☁️</span>
                <p className="text-xs text-slate-400">{lang === 'he' ? 'בחר תמונת מסמך מהמכשיר' : 'اختر صورة الوثيقة من الجهاز'}</p>
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'הערות' : 'ملاحظات'}</label>
                <textarea rows={2} className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
            </div>
          </>
        );

      default:
        return (
          <>
            <h3 className="font-bold text-amber-500 border-b border-slate-800 pb-3 mb-4 text-center text-lg">
              {t.addBtn[activeTab] || t.addBtn.projects}
            </h3>
            <div className="space-y-3 text-right">
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'שם / תיאור *' : 'الاسم / الوصف *'}</label>
                <input type="text" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
              <div>
                <label className="text-xs text-slate-300 block mb-1">{lang === 'he' ? 'סכום (₪)' : 'المبلغ (₪)'}</label>
                <input type="number" className="w-full bg-[#182030] border border-slate-700 rounded-md p-2 text-sm text-white" />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans" dir="rtl">
      {/* Top Header */}
      <header className="bg-[#111827] border-b border-slate-800 px-4 py-3 flex justify-between items-center sticky top-0 z-20">
        <div>
          <h1 className="text-base font-bold text-amber-500">{t.brandTitle}</h1>
          <p className="text-xs text-slate-400">{t.brandSub}</p>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          className="p-2 text-slate-300 hover:text-white focus:outline-none"
        >
          <span className="text-xl">🎛️</span>
        </button>
      </header>

      <div className="flex flex-1 relative">
        {/* Main Content Area */}
        <main className="flex-1 p-4 overflow-y-auto max-w-5xl mx-auto w-full">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { title: t.activeProjects, val: '0', icon: '📍', color: 'text-cyan-400' },
                  { title: t.equipmentInWork, val: '0', icon: '🚜', color: 'text-amber-400' },
                  { title: t.monthInvoices, val: '0 ₪', icon: '📄', color: 'text-rose-400' },
                  { title: t.monthIncome, val: '0 ₪', icon: '📈', color: 'text-emerald-400' },
                  { title: t.totalExpenses, val: '0 ₪', icon: '💳', color: 'text-rose-400' },
                  { title: t.netProfit, val: '0 ₪', icon: '💰', color: 'text-emerald-400' },
                ].map((card, i) => (
                  <div key={i} className="bg-[#111827] p-3.5 rounded-lg border border-slate-800/80 text-right relative">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-slate-400">{card.title}</span>
                      <span className={`text-base ${card.color}`}>{card.icon}</span>
                    </div>
                    <p className="text-xl font-extrabold text-slate-100">{card.val}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#111827] p-6 rounded-lg border border-slate-800/80 text-center space-y-2">
                <h4 className="text-sm font-bold text-right text-slate-200 border-b border-slate-800 pb-2">פרויקטים אחרונים</h4>
                <div className="py-8">
                  <span className="text-2xl text-slate-600 block mb-1">➕</span>
                  <p className="text-xs text-slate-500">{t.noData}</p>
                </div>
              </div>

              <div className="bg-[#111827] p-6 rounded-lg border border-slate-800/80 text-center space-y-2">
                <h4 className="text-sm font-bold text-right text-slate-200 border-b border-slate-800 pb-2">משווק שיווק</h4>
                <div className="py-8">
                  <span className="text-2xl text-slate-600 block mb-1">➕</span>
                  <p className="text-xs text-slate-500">{t.noData}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'alerts' && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-100 text-right">{t.alerts}</h2>
              <p className="text-xs text-slate-400 text-right">כל התאריכים החשובים שצריך לשים לב אליהם במקום אחד</p>
              <div className="bg-[#111827] p-10 rounded-lg border border-slate-800 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto text-lg border border-emerald-500/30">
                  ✓
                </div>
                <p className="text-sm font-medium text-slate-200">{t.allClear}</p>
              </div>
            </div>
          )}

          {activeTab !== 'dashboard' && activeTab !== 'alerts' && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-100 text-right">
                {menuItems.find(m => m.id === activeTab)?.label}
              </h2>

              <div className="relative">
                <input 
                  type="text" 
                  placeholder={`חיפוש ${menuItems.find(m => m.id === activeTab)?.label}...`}
                  className="w-full bg-[#111827] border border-slate-800 rounded-md py-2.5 px-9 text-sm text-right text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
                />
                <span className="absolute right-3 top-3 text-slate-500 text-xs">🔍</span>
              </div>

              {(activeTab === 'invoices' || activeTab === 'expenses') && (
                <button className="w-full bg-[#111827] border border-slate-800 text-slate-300 py-2 rounded-md text-xs font-medium flex items-center justify-center gap-2 hover:bg-slate-800/50 transition">
                  <span>📥</span> {t.exportExcel}
                </button>
              )}

              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-amber-500 text-slate-950 font-bold py-2.5 rounded-md text-sm hover:bg-amber-400 transition shadow"
              >
                + {t.addBtn[activeTab] || t.addBtn.projects}
              </button>

              <div className="bg-[#111827] p-12 rounded-lg border border-slate-800 text-center">
                <span className="text-2xl text-slate-600 block mb-2">➕</span>
                <p className="text-xs text-slate-500">{t.noData}</p>
              </div>
            </div>
          )}
        </main>

        {/* Sidebar Drawer */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black/60 z-30" onClick={() => setIsSidebarOpen(false)} />
        )}
        <aside className={`w-64 bg-[#111827] border-l border-slate-800 p-3 fixed inset-y-0 right-0 z-40 transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
          <div className="mb-4 text-right px-2 pt-2 border-b border-slate-800 pb-3">
            <h2 className="text-sm font-bold text-amber-500">{t.brandTitle}</h2>
            <p className="text-[10px] text-slate-400">{t.brandSub}</p>
          </div>

          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setIsSidebarOpen(false); }}
                className={`w-full flex items-center justify-start space-x-2.5 space-x-reverse px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                  activeTab === item.id 
                    ? 'bg-amber-500/15 text-amber-400 font-bold border-r-2 border-amber-500' 
                    : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 pt-3 border-t border-slate-800">
            <button 
              onClick={() => setLang(lang === 'he' ? 'ar' : 'he')}
              className="w-full flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-md text-xs text-slate-300 hover:bg-slate-800/50"
            >
              <span>🌐</span>
              <span>{lang === 'he' ? 'العربية' : 'עברית'}</span>
            </button>
          </div>
        </aside>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xs z-50 flex items-center justify-center p-3">
          <div className="bg-[#111827] border border-slate-800 w-full max-w-md rounded-lg p-5 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute left-4 top-4 text-slate-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>
            {renderModalContent()}
            <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-800/80 mt-4">
              <button onClick={() => setIsModalOpen(false)} className="py-2.5 bg-amber-500 text-slate-950 font-bold rounded-md text-xs hover:bg-amber-400">
                {t.save}
              </button>
              <button onClick={() => setIsModalOpen(false)} className="py-2.5 bg-transparent border border-slate-700 text-slate-300 rounded-md text-xs hover:bg-slate-800">
                {t.cancel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
