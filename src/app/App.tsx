import React, { useState } from 'react';
import { Bell, Search, User, ChevronDown, Menu, X, Clock, AlertCircle, CheckCircle, Info } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/pages/Dashboard';
import UsersPage from './components/pages/UsersPage';
import CoursesPage from './components/pages/CoursesPage';
import AIControlPage from './components/pages/AIControlPage';
import PvPArenaPage from './components/pages/PvPArenaPage';
import TournamentPage from './components/pages/TournamentPage';
import WalletFinancePage from './components/pages/WalletFinancePage';
import AntiCheatPage from './components/pages/AntiCheatPage';
import LeaderboardsPage from './components/pages/LeaderboardsPage';
import NotificationsPage from './components/pages/NotificationsPage';
import SystemSettingsPage from './components/pages/SystemSettingsPage';

// Mock data for search
const searchData = [
  { id: 1, type: 'user', title: 'Sarah Kim', description: 'sarah.kim@email.com', page: 'users' },
  { id: 2, type: 'user', title: 'Mike Thompson', description: 'mike.t@email.com', page: 'users' },
  { id: 3, type: 'course', title: 'Spanish Beginner Course', description: '2,400 enrolled', page: 'courses' },
  { id: 4, type: 'course', title: 'French Intermediate', description: '1,850 enrolled', page: 'courses' },
  { id: 5, type: 'tournament', title: 'Summer Championship 2024', description: 'Active - 245 participants', page: 'tournaments' },
  { id: 6, type: 'match', title: 'PvP Match #8821', description: 'Sarah K. vs Mike T.', page: 'pvp-arena' },
  { id: 7, type: 'setting', title: 'AI Scoring Parameters', description: 'Configure AI settings', page: 'ai-control' },
  { id: 8, type: 'finance', title: 'Wallet Management', description: 'View transactions', page: 'wallet' },
];

// Mock notifications data
const notificationsData = [
  {
    id: 1,
    type: 'alert',
    title: 'Suspicious Activity Detected',
    message: 'User #4521 flagged for potential cheating',
    time: '5 min ago',
    read: false,
  },
  {
    id: 2,
    type: 'success',
    title: 'Tournament Started',
    message: 'Summer Championship 2024 is now live',
    time: '15 min ago',
    read: false,
  },
  {
    id: 3,
    type: 'info',
    title: 'New User Registration Spike',
    message: '150 new users registered in the last hour',
    time: '1 hour ago',
    read: false,
  },
  {
    id: 4,
    type: 'warning',
    title: 'High Payout Request',
    message: 'Withdrawal of $5,000 pending approval',
    time: '2 hours ago',
    read: false,
  },
  {
    id: 5,
    type: 'success',
    title: 'System Update Complete',
    message: 'Version 2.4.1 deployed successfully',
    time: '3 hours ago',
    read: true,
  },
  {
    id: 6,
    type: 'info',
    title: 'Course Content Updated',
    message: 'Spanish Beginner Course updated with new lessons',
    time: '5 hours ago',
    read: true,
  },
  {
    id: 7,
    type: 'alert',
    title: 'Failed Login Attempts',
    message: 'Multiple failed login attempts detected',
    time: '6 hours ago',
    read: true,
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [systemStatus, setSystemStatus] = useState<'live' | 'maintenance'>('live');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof searchData>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  // Notifications state
  const [notifications, setNotifications] = useState(notificationsData);
  const [showNotifications, setShowNotifications] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      const results = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleSearchResultClick = (page: string) => {
    setCurrentPage(page);
    setSearchQuery('');
    setShowSearchResults(false);
  };

  // Handle notifications
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return <AlertCircle size={18} className="text-red-500" />;
      case 'success':
        return <CheckCircle size={18} className="text-green-500" />;
      case 'warning':
        return <AlertCircle size={18} className="text-orange-500" />;
      default:
        return <Info size={18} className="text-blue-500" />;
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UsersPage />;
      case 'courses':
        return <CoursesPage />;
      case 'ai-control':
        return <AIControlPage />;
      case 'pvp-arena':
        return <PvPArenaPage />;
      case 'tournaments':
        return <TournamentPage />;
      case 'wallet':
        return <WalletFinancePage />;
      case 'anti-cheat':
        return <AntiCheatPage />;
      case 'leaderboards':
        return <LeaderboardsPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'settings':
        return <SystemSettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Hidden on mobile by default, visible on desktop */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <Sidebar
          currentPage={currentPage}
          onNavigate={(page) => {
            setCurrentPage(page);
            setMobileMenuOpen(false);
          }}
        />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Top Navigation Bar */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-6 shadow-sm flex-shrink-0 relative z-30">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Search Bar */}
          <div className="flex items-center flex-1 max-w-xl lg:ml-0 ml-2 relative">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              <input
                type="text"
                placeholder="Search users, courses, matches..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchQuery && setShowSearchResults(true)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              />
              
              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setShowSearchResults(false)}
                  />
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-20">
                    <div className="p-2">
                      <p className="text-xs text-gray-500 px-3 py-2">Search Results ({searchResults.length})</p>
                      {searchResults.map((result) => (
                        <button
                          key={result.id}
                          onClick={() => handleSearchResultClick(result.page)}
                          className="w-full text-left px-3 py-2.5 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-medium text-purple-700">
                                {result.type === 'user' ? 'U' : result.type === 'course' ? 'C' : result.type === 'tournament' ? 'T' : result.type === 'match' ? 'M' : 'S'}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{result.title}</p>
                              <p className="text-xs text-gray-500 truncate">{result.description}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {showSearchResults && searchQuery && searchResults.length === 0 && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setShowSearchResults(false)}
                  />
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-20">
                    <p className="text-sm text-gray-500 text-center">No results found for "{searchQuery}"</p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-4 ml-2 lg:ml-6">
            {/* System Status */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg">
              <div className={`w-2 h-2 rounded-full ${systemStatus === 'live' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className="text-sm font-medium text-gray-700">
                {systemStatus === 'live' ? 'Live' : 'Maintenance'}
              </span>
            </div>

            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bell size={20} className="text-gray-600" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setShowNotifications(false)}
                  />
                  <div className="absolute top-full right-0 mt-2 w-80 sm:w-96 bg-white border border-gray-200 rounded-lg shadow-xl z-20 max-h-[32rem] flex flex-col">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">Notifications</h3>
                      {unreadCount > 0 && (
                        <button
                          onClick={markAllAsRead}
                          className="text-xs text-purple-600 hover:text-purple-700 font-medium"
                        >
                          Mark all as read
                        </button>
                      )}
                    </div>

                    {/* Notifications List */}
                    <div className="overflow-y-auto flex-1">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          onClick={() => markAsRead(notification.id)}
                          className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                            !notification.read ? 'bg-purple-50/50' : ''
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                              {getNotificationIcon(notification.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                                {!notification.read && (
                                  <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0 mt-1.5"></div>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                                <Clock size={12} />
                                <span>{notification.time}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="p-3 border-t border-gray-200">
                      <button
                        onClick={() => {
                          setCurrentPage('notifications');
                          setShowNotifications(false);
                        }}
                        className="w-full text-center text-sm text-purple-600 hover:text-purple-700 font-medium"
                      >
                        View all notifications
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Admin Avatar Dropdown */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <User size={18} className="text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 hidden md:block">Admin</span>
              <ChevronDown size={16} className="text-gray-500 hidden md:block" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}