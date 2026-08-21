'use client';

import React from 'react';
import Link from 'next/link';

export default function Sidebar({ currentModule, setCurrentModule, translations }) {
  const menuItems = [
    { id: 'dashboard', label: 'اللوحة الرئيسية', icon: '📊', path: '/' },
    { id: 'fleet', label: 'المعدات والآليات', icon: '🚜', path: '/fleet' },
    { id: 'workOrders', label: 'أوامر العمل', icon: '📋', path: '/' },
    { id: 'employees', label: 'الموظفين والعمال', icon: '👷', path: '/' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-4 flex flex-col justify-between">
      <div>
        <div className="mb-8 p-2 text-center border-b border-slate-800">
          <h1 className="text-xl font-bold text-blue-400">نظام الحفريات ERP</h1>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              onClick={() => setCurrentModule && setCurrentModule(item.id)}
              className={`flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg transition-colors ${
                currentModule === item.id ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="text-xs text-slate-500 text-center border-t border-slate-800 pt-4">
        إصدار النظام v1.0
      </div>
    </aside>
  );
}
