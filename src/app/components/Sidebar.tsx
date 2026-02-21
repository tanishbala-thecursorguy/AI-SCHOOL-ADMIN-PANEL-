import React from 'react';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Brain,
  Swords,
  Trophy,
  Wallet,
  Shield,
  Award,
  Bell,
  Settings,
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'courses', label: 'Courses & Content', icon: BookOpen },
  { id: 'ai-control', label: 'AI Control', icon: Brain },
  { id: 'pvp-arena', label: 'PvP Arena', icon: Swords },
  { id: 'tournaments', label: 'Tournaments', icon: Trophy },
  { id: 'wallet', label: 'Wallet & Finance', icon: Wallet },
  { id: 'anti-cheat', label: 'Anti-Cheat', icon: Shield },
  { id: 'leaderboards', label: 'Leaderboards', icon: Award },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'settings', label: 'System Settings', icon: Settings },
];

export default function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <div>
            <h1 className="font-bold text-gray-900">LangLearn</h1>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-purple-600' : 'text-gray-500'} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 flex-shrink-0">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-3">
          <p className="text-xs font-semibold text-purple-900 mb-1">Version 2.4.1</p>
          <p className="text-xs text-gray-600">Last deploy: 2h ago</p>
        </div>
      </div>
    </aside>
  );
}