'use client';

import React from 'react';
import AppShell from '@/components/AppShell';

export default function FleetPage() {
  const fleet = [
    { id: 'EQ-01', name: 'حفار كاتربيلر 320', status: 'يعمل', driver: 'أحمد محمود', type: 'حفار' },
    { id: 'EQ-02', name: 'جرافة كوماتسو D85', status: 'صيانة', driver: 'خالد علي', type: 'جرافة' },
    { id: 'EQ-03', name: 'شاحنة مرسيدس قلاب', status: 'يعمل', driver: 'سعيد حسن', type: 'شاحنة' },
  ];

  return (
    <AppShell>
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
            {fleet.map((item) => (
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
    </AppShell>
  );
}
