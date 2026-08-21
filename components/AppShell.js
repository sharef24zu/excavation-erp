'use client';

import React from 'react';
import Sidebar from './Sidebar';

export default function AppShell({ children, currentModule, setCurrentModule }) {
  return (
    <div className="flex min-h-screen bg-slate-100 dir-rtl" dir="rtl">
      {/* القائمة الجانبية ثابته */}
      <Sidebar currentModule={currentModule} setCurrentModule={setCurrentModule} />

      {/* منطقة المحتوى الرئيسي */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* الشريط العلوي */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center shadow-sm">
          <div className="flex items-center space-x-3 space-x-reverse">
            <span className="text-xl font-bold text-slate-800">
              {currentModule === 'dashboard' && 'اللوحة الرئيسية'}
              {currentModule === 'fleet' && 'إدارة المعدات والآليات'}
              {currentModule === 'workOrders' && 'أوامر العمل'}
              {currentModule === 'employees' && 'الموظفون والعمال'}
            </span>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <span className="text-sm font-medium text-slate-600">مرحباً بك، المدير العام</span>
          </div>
        </header>

        {/* محتوى الصفحة */}
        <main className="flex-1 p-8 overflow-y-auto max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
