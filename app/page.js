'use client';

import React, { useState } from 'react';
import AppShell from '@/components/AppShell';

export default function Home() {
  const [currentModule, setCurrentModule] = useState('dashboard');

  const fleetData = [
    { id: 'EQ-01', name: 'حفار كاتربيلر 320', status: 'يعمل', driver: 'أحمد محمود', type: 'حفار' },
    { id: 'EQ-02', name: 'جرافة كوماتسو D85', status: 'صيانة', driver: 'خالد علي', type: 'جرافة' },
    { id: 'EQ-03', name: 'شاحنة مرسيدس قلاب', status: 'يعمل', driver: 'سعيد حسن', type: 'شاحنة' },
  ];

  return (
    <AppShell currentModule={currentModule} setCurrentModule={setCurrentModule}>
      {currentModule === 'dashboard' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-slate-500 text-sm font-medium">إجمالي المعدات</h3>
              <p className="text-3xl font-bold text-slate-800 mt-2">12</p>
              <span className="text-xs text-green-600 font-medium">↑ 2 آليات جديدة هذا الشهر</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-slate-500 text-sm font-medium">أوامر العمل النشطة</h3>
              <p className="text-3xl font-bold text-slate-800 mt-2">5</p>
              <span className="text-xs text-amber-600 font-medium">⚡ 2 بانتظار قطع الغيار</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-slate-500 text-sm font-medium">نسبة تشغيل الأسطول</h3>
              <p className="text-3xl font-bold text-slate-800 mt-2">88%</p>
              <span className="text-xs text-blue-600 font-medium">تغطية تشغيلية ممتازة</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">ملخص لوحة التحكم</h3>
            <p className="text-slate-600 leading-relaxed">
              مرحباً بك في نظام إدارة أسطول الحفريات والمعدات. اضغط على أزرار القائمة الجانبية للتنقل بين الأقسام.
            </p>
          </div>
        </>
      )}

      {currentModule === 'fleet' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-slate-800">إدارة المعدات والآليات</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              + إضافة معدة جديدة
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm">
                  <th className="p-4">رقم المعدة</th>
                  <th className="p-4">اسم الآلية</th>
                  <th className="p-4">النوع</th>
                  <th className="p-4">السائق الحالي</th>
                  <th className="p-4">الحالة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 text-sm">
                {fleetData.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="p-4 font-bold">{item.id}</td>
                    <td className="p-4">{item.name}</td>
                    <td className="p-4">{item.type}</td>
                    <td className="p-4">{item.driver}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${item.status === 'يعمل' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {(currentModule === 'workOrders' || currentModule === 'employees') && (
        <div className="bg-white rounded-xl p-8 border border-slate-200 text-center">
          <h2 className="text-xl font-bold text-slate-800 mb-2">قسم {currentModule === 'workOrders' ? 'أوامر العمل' : 'الموظفين والعمال'}</h2>
          <p className="text-slate-500">هذه الصفحة جاهزة لربط البيانات وإدخال السجلات.</p>
        </div>
      )}
    </AppShell>
  );
}
