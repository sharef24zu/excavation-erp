import React from 'react';

export default function Sidebar({ currentModule, setCurrentModule, translations }) {
  const menuItems = [
    { id: 'dashboard', label: translations.dashboard, icon: '📊' },
    { id: 'equipment', label: translations.equipment, icon: '🚜' },
    { id: 'workOrders', label: translations.workOrders, icon: '📋' },
    { id: 'employees', label: translations.employees, icon: '👷' },
    { id: 'settings', label: translations.settings, icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-3 space-x-reverse mb-8">
          <span className="text-2xl">🏗️</span>
          <h1 className="font-bold text-lg">{translations.title}</h1>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentModule(item.id)}
              className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg transition-colors ${
                currentModule === item.id ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              <span>{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="pt-4 border-t border-slate-800">
        <button
          onClick={() => window.location.href = '/login'}
          className="w-full flex items-center space-x-3 space-x-reverse px-4 py-2 rounded-lg text-red-400 hover:bg-slate-800 transition-colors"
        >
          <span>🚪</span>
          <span>{translations.logout}</span>
        </button>
      </div>
    </aside>
  );
}
