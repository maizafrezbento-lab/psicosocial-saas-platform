import React, { useState } from 'react';
import { Menu, LogOut, Settings, Bell, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();
  const [profileOpen, setProfileOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', href: '/dashboard', icon: '📊' },
    { label: 'Indicadores', href: '/indicators', icon: '📈' },
    { label: 'Setores', href: '/sectors', icon: '🏢' },
    { label: 'Inteligência Artificial', href: '/ai', icon: '🤖' },
    { label: 'Banco de Ideias', href: '/ideas', icon: '💡' },
    { label: 'Reconhecimento', href: '/recognition', icon: '🏆' },
    { label: 'Relatórios', href: '/reports', icon: '📄' },
    { label: 'Configurações', href: '/settings', icon: '⚙️' },
  ];

  return (
    <div className="flex h-screen bg-light">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-white shadow-lg transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">RZ</span>
            </div>
            {sidebarOpen && <span className="text-xl font-bold text-primary">RiscoZero</span>}
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <a
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {sidebarOpen && <span className="font-medium">{item.label}</span>}
                </a>
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="border-t border-gray-200 p-4">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all"
          >
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">JD</span>
            </div>
            {sidebarOpen && (
              <>
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold text-gray-900">João Silva</p>
                  <p className="text-xs text-gray-500">Administrador</p>
                </div>
                <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-all"
          >
            <Menu size={24} className="text-gray-600" />
          </button>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all relative">
              <Bell size={24} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-3 h-3 bg-danger rounded-full"></span>
            </button>
            <button
              onClick={() => {
                localStorage.removeItem('user');
                router.push('/login');
              }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all"
            >
              <LogOut size={24} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
