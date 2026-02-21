import React, { useState } from 'react';
import {
  Users,
  DollarSign,
  Wallet,
  Swords,
  Brain,
  Trophy,
  AlertTriangle,
  Activity,
  BookOpen,
  Zap,
  Plus,
  Bell,
  UserX,
  StopCircle,
  TrendingUp,
  Settings,
  Shield,
  Wallet as WalletIcon,
  Bell as BellIcon,
  Activity as ActivityIcon,
} from 'lucide-react';
import MetricCard from '../MetricCard';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const userGrowthData = [
  { month: 'Jan', users: 12400 },
  { month: 'Feb', users: 15800 },
  { month: 'Mar', users: 18200 },
  { month: 'Apr', users: 22100 },
  { month: 'May', users: 26800 },
  { month: 'Jun', users: 31500 },
  { month: 'Jul', users: 36200 },
  { month: 'Aug', users: 42100 },
  { month: 'Sep', users: 48700 },
  { month: 'Oct', users: 55300 },
  { month: 'Nov', users: 62400 },
  { month: 'Dec', users: 68900 },
];

const revenueData = [
  { month: 'Jan', revenue: 45000, payout: 32000 },
  { month: 'Feb', revenue: 52000, payout: 38000 },
  { month: 'Mar', revenue: 61000, payout: 42000 },
  { month: 'Apr', revenue: 58000, payout: 40000 },
  { month: 'May', revenue: 72000, payout: 51000 },
  { month: 'Jun', revenue: 84000, payout: 59000 },
];

const matchVolumeData = [
  { day: 'Mon', matches: 1240 },
  { day: 'Tue', matches: 1580 },
  { day: 'Wed', matches: 1820 },
  { day: 'Thu', matches: 2210 },
  { day: 'Fri', matches: 2680 },
  { day: 'Sat', matches: 3150 },
  { day: 'Sun', matches: 2890 },
];

const aiRequestsData = [
  { hour: '00:00', requests: 420 },
  { hour: '04:00', requests: 180 },
  { hour: '08:00', requests: 890 },
  { hour: '12:00', requests: 1450 },
  { hour: '16:00', requests: 1680 },
  { hour: '20:00', requests: 2120 },
];

const certificationData = [
  { name: 'Beginner', value: 28500, color: '#8b5cf6' },
  { name: 'Intermediate', value: 18200, color: '#3b82f6' },
  { name: 'Advanced', value: 9800, color: '#06b6d4' },
  { name: 'Expert', value: 4100, color: '#10b981' },
  { name: 'Master', value: 1200, color: '#f59e0b' },
];

const realtimeMatches = [
  { id: 'M-8821', players: 'Sarah K. vs Mike T.', language: 'Spanish', mode: 'Speaking Duel', duration: '2:34', stake: '$5' },
  { id: 'M-8820', players: 'Alex P. vs Jordan R.', language: 'French', mode: 'Quiz Duel', duration: '1:12', stake: '$10' },
  { id: 'M-8819', players: 'Emma W. vs Chris L.', language: 'German', mode: 'Mixed Duel', duration: '4:56', stake: '$3' },
  { id: 'M-8818', players: 'Lisa M. vs David H.', language: 'Japanese', mode: 'Speaking Duel', duration: '0:45', stake: '$8' },
  { id: 'M-8817', players: 'Tom B. vs Anna S.', language: 'Mandarin', mode: 'Quiz Duel', duration: '3:21', stake: '$5' },
];

export default function Dashboard() {
  const [activeUsersPeriod, setActiveUsersPeriod] = useState<'24h' | '7d'>('24h');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Master Overview</h1>
        <p className="text-sm lg:text-base text-gray-600 mt-1">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <MetricCard
          title="Total Registered Users"
          value="68,924"
          icon={<Users className="text-purple-600" size={24} />}
          trend={{ value: 12.5, isPositive: true }}
        />
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm text-gray-600">Active Users</p>
                <div className="flex gap-1">
                  <button
                    onClick={() => setActiveUsersPeriod('24h')}
                    className={`px-2 py-0.5 text-xs rounded ${
                      activeUsersPeriod === '24h'
                        ? 'bg-purple-100 text-purple-700 font-medium'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    24h
                  </button>
                  <button
                    onClick={() => setActiveUsersPeriod('7d')}
                    className={`px-2 py-0.5 text-xs rounded ${
                      activeUsersPeriod === '7d'
                        ? 'bg-purple-100 text-purple-700 font-medium'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    7d
                  </button>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {activeUsersPeriod === '24h' ? '12,847' : '38,291'}
              </h3>
              <div className="flex items-center gap-1 mt-2">
                <Activity size={14} className="text-green-500" />
                <span className="text-xs font-medium text-green-600">
                  {activeUsersPeriod === '24h' ? '+8.2%' : '+15.7%'}
                </span>
                <span className="text-xs text-gray-500">vs last period</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
              <Activity className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
        <MetricCard
          title="Total Revenue"
          value="$428,650"
          icon={<DollarSign className="text-purple-600" size={24} />}
          trend={{ value: 18.3, isPositive: true }}
        />
        <MetricCard
          title="Total Wallet Balance"
          value="$186,420"
          subtitle="Platform Liability"
          icon={<Wallet className="text-purple-600" size={24} />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="PvP Matches Today"
          value="2,847"
          icon={<Swords className="text-purple-600" size={24} />}
          trend={{ value: 23.1, isPositive: true }}
        />
        <MetricCard
          title="AI Evaluations Today"
          value="8,921"
          icon={<Brain className="text-purple-600" size={24} />}
          trend={{ value: 15.4, isPositive: true }}
        />
        <MetricCard
          title="Active Tournaments"
          value="14"
          icon={<Trophy className="text-purple-600" size={24} />}
        />
        <MetricCard
          title="Fraud Alerts"
          value="3"
          icon={<AlertTriangle className="text-red-500" size={24} />}
        />
      </div>

      {/* Revenue & Growth Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-4">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="revenue" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="payout" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-4">User Growth Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="url(#colorGradient)"
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', r: 4 }}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Control Actions */}
      <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-4">
          <button className="flex flex-col items-center justify-center p-3 lg:p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <Users className="text-purple-600 mb-2" size={20} />
            <span className="text-xs font-medium text-gray-700 text-center">Add User</span>
          </button>
          <button className="flex flex-col items-center justify-center p-3 lg:p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <BookOpen className="text-blue-600 mb-2" size={20} />
            <span className="text-xs font-medium text-gray-700 text-center">New Course</span>
          </button>
          <button className="flex flex-col items-center justify-center p-3 lg:p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <TrendingUp className="text-green-600 mb-2" size={20} />
            <span className="text-xs font-medium text-gray-700 text-center">Analytics</span>
          </button>
          <button className="flex flex-col items-center justify-center p-3 lg:p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
            <Settings className="text-orange-600 mb-2" size={20} />
            <span className="text-xs font-medium text-gray-700 text-center">System</span>
          </button>
          <button className="flex flex-col items-center justify-center p-3 lg:p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
            <Shield className="text-red-600 mb-2" size={20} />
            <span className="text-xs font-medium text-gray-700 text-center">Security</span>
          </button>
          <button className="flex flex-col items-center justify-center p-3 lg:p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
            <WalletIcon className="text-indigo-600 mb-2" size={20} />
            <span className="text-xs font-medium text-gray-700 text-center">Finance</span>
          </button>
          <button className="flex flex-col items-center justify-center p-3 lg:p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
            <BellIcon className="text-pink-600 mb-2" size={20} />
            <span className="text-xs font-medium text-gray-700 text-center">Notify</span>
          </button>
          <button className="flex flex-col items-center justify-center p-3 lg:p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors">
            <ActivityIcon className="text-teal-600 mb-2" size={20} />
            <span className="text-xs font-medium text-gray-700 text-center">Monitor</span>
          </button>
        </div>
      </div>

      {/* Platform Liability & PvP Matches */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Platform Liability</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#8b5cf6' }}></div>
                <span className="text-gray-700">Total Wallet Balance</span>
              </div>
              <span className="font-medium text-gray-900">$186,420</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">PvP Match Volume</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={matchVolumeData}>
              <defs>
                <linearGradient id="colorMatches" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Area
                type="monotone"
                dataKey="matches"
                stroke="#8b5cf6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorMatches)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Certification Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Certification Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={certificationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {certificationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {certificationData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-gray-700">{item.name}</span>
                </div>
                <span className="font-medium text-gray-900">{item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Match Activity Feed */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:col-span-2">
          <h3 className="font-semibold text-gray-900 mb-4">Real-time Match Activity</h3>
          <div className="space-y-3">
            {realtimeMatches.map((match) => (
              <div
                key={match.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">{match.players}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-600">{match.language}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-600">{match.mode}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-600">ID: {match.id}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-purple-600">{match.stake}</span>
                  <span className="text-sm text-gray-500">{match.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}