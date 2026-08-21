'use client';

import React from 'react';
import AppShell from '../components/AppShell';

export default function Home() {
  return (
    <AppShell>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-slate-500 text-sm font-medium">إجمالي المعدات</h3>
          <p className="text-3xl font-bold text-slate-800 mt-2">12</p>
          <span className="text-xs text-green-600 font-medium">↑ 2 آليات جديدة هذا الشهر</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-slate-500 text-sm font-medium">أوامر العمل النشطة</h3>
          <p className="text-3xl font-bold text-slate-800 mt-2">5</p>
          <span className="text-xs text-amber-600 font-medium">⚡ 2 بانتظار القطع</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-slate-500 text-sm font-medium">نسبة التشغيل</h3>
          <p className="text-3xl font-bold text-slate-800 mt-2">88%</p>
          <span className="text-xs text-blue-600 font-medium">تغطية تشغيلية ممتازة</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">حالة النظام والاتصال</h3>
        <p className="text-slate-600">
          مرحباً بك في نظام إدارة الحفريات والمعدات. تم ربط قاعدة بيانات Supabase بنجاح، ويمكنك الآن البدء في متابعة أسطولك وأوامر العمل.
        </p>
      </div>
    </AppShell>
  );
}
