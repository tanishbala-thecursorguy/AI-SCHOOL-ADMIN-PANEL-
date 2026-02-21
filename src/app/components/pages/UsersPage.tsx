import React, { useState } from 'react';
import {
  Search,
  Filter,
  Download,
  MoreVertical,
  Eye,
  Zap,
  RotateCcw,
  Award,
  Lock,
  Ban,
  DollarSign,
  X,
  User,
  Trophy,
  Activity,
  Smartphone,
  AlertTriangle,
  Play,
} from 'lucide-react';
import DataTable from '../DataTable';

const userData = [
  {
    id: 'U-10284',
    name: 'Sarah Johnson',
    phone: '+1-555-0123',
    tier: 'Advanced',
    rating: 1842,
    wallet: 284.50,
    earnings: 1250.00,
    matches: 156,
    lastActive: '2 min ago',
    status: 'Active',
  },
  {
    id: 'U-10283',
    name: 'Michael Chen',
    phone: '+1-555-0124',
    tier: 'Expert',
    rating: 2154,
    wallet: 520.75,
    earnings: 2840.00,
    matches: 287,
    lastActive: '15 min ago',
    status: 'Active',
  },
  {
    id: 'U-10282',
    name: 'Emma Rodriguez',
    phone: '+1-555-0125',
    tier: 'Intermediate',
    rating: 1456,
    wallet: 125.00,
    earnings: 680.50,
    matches: 98,
    lastActive: '1 hr ago',
    status: 'Active',
  },
  {
    id: 'U-10281',
    name: 'James Wilson',
    phone: '+1-555-0126',
    tier: 'Beginner',
    rating: 1125,
    wallet: 45.25,
    earnings: 120.00,
    matches: 42,
    lastActive: '3 hrs ago',
    status: 'Active',
  },
  {
    id: 'U-10280',
    name: 'Lisa Anderson',
    phone: '+1-555-0127',
    tier: 'Master',
    rating: 2480,
    wallet: 1250.00,
    earnings: 8420.75,
    matches: 542,
    lastActive: '5 min ago',
    status: 'Active',
  },
  {
    id: 'U-10279',
    name: 'David Martinez',
    phone: '+1-555-0128',
    tier: 'Advanced',
    rating: 1920,
    wallet: 0.00,
    earnings: 540.00,
    matches: 124,
    lastActive: '2 days ago',
    status: 'Suspended',
  },
  {
    id: 'U-10278',
    name: 'Anna Kim',
    phone: '+1-555-0129',
    tier: 'Intermediate',
    rating: 1580,
    wallet: 280.50,
    earnings: 920.00,
    matches: 165,
    lastActive: '30 min ago',
    status: 'Active',
  },
  {
    id: 'U-10277',
    name: 'Chris Thompson',
    phone: '+1-555-0130',
    tier: 'Expert',
    rating: 2240,
    wallet: 680.25,
    earnings: 3560.00,
    matches: 324,
    lastActive: '10 min ago',
    status: 'Active',
  },
];

const getTierColor = (tier: string) => {
  const colors: Record<string, string> = {
    Beginner: 'bg-purple-100 text-purple-700',
    Intermediate: 'bg-blue-100 text-blue-700',
    Advanced: 'bg-cyan-100 text-cyan-700',
    Expert: 'bg-green-100 text-green-700',
    Master: 'bg-orange-100 text-orange-700',
  };
  return colors[tier] || 'bg-gray-100 text-gray-700';
};

const getStatusColor = (status: string) => {
  return status === 'Active'
    ? 'bg-green-100 text-green-700'
    : status === 'Suspended'
    ? 'bg-red-100 text-red-700'
    : 'bg-gray-100 text-gray-700';
};

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTier, setFilterTier] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredData = userData.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm);
    const matchesTier = filterTier === 'all' || user.tier === filterTier;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesTier && matchesStatus;
  });

  const columns = [
    { key: 'id', label: 'User ID', width: '100px' },
    {
      key: 'name',
      label: 'Name',
      render: (value: string, row: any) => (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-semibold">{value.charAt(0)}</span>
          </div>
          <div>
            <p className="font-medium">{value}</p>
            <p className="text-xs text-gray-500">{row.phone}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'tier',
      label: 'Tier',
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTierColor(value)}`}>
          {value}
        </span>
      ),
    },
    {
      key: 'rating',
      label: 'Rating',
      render: (value: number) => <span className="font-semibold text-purple-600">{value}</span>,
    },
    {
      key: 'wallet',
      label: 'Wallet',
      render: (value: number) => <span className="font-medium">${value.toFixed(2)}</span>,
    },
    {
      key: 'earnings',
      label: 'Total Earnings',
      render: (value: number) => <span className="text-green-600 font-medium">${value.toFixed(2)}</span>,
    },
    { key: 'matches', label: 'Matches' },
    {
      key: 'lastActive',
      label: 'Last Active',
      render: (value: string) => <span className="text-gray-600">{value}</span>,
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(value)}`}>
          {value}
        </span>
      ),
    },
  ];

  const actions = (row: any) => (
    <button
      onClick={() => setSelectedUser(row)}
      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
    >
      <Eye size={18} className="text-gray-600" />
    </button>
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Users Management</h1>
          <p className="text-gray-600 mt-1">Manage all registered users and their activities</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
          <Download size={18} />
          Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[300px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name, ID, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <select
            value={filterTier}
            onChange={(e) => setFilterTier(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All Tiers</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
            <option value="Master">Master</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <p className="text-sm text-gray-600">Total Users</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">68,924</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <p className="text-sm text-gray-600">Active Today</p>
          <p className="text-2xl font-bold text-green-600 mt-1">12,847</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <p className="text-sm text-gray-600">Suspended</p>
          <p className="text-2xl font-bold text-red-600 mt-1">142</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <p className="text-sm text-gray-600">New This Week</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">1,284</p>
        </div>
      </div>

      {/* Data Table */}
      <DataTable columns={columns} data={filteredData} actions={actions} />

      {/* User Profile Drawer */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end">
          <div className="bg-white w-full max-w-2xl h-full overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
              <h2 className="text-xl font-bold text-gray-900">User Profile</h2>
              <button
                onClick={() => setSelectedUser(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* User Header */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{selectedUser.name.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{selectedUser.name}</h3>
                  <p className="text-gray-600">{selectedUser.id}</p>
                  <p className="text-gray-600">{selectedUser.phone}</p>
                  <div className="flex gap-2 mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTierColor(selectedUser.tier)}`}>
                      {selectedUser.tier}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedUser.status)}`}>
                      {selectedUser.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <Trophy className="text-purple-600 mb-2" size={20} />
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="text-xl font-bold text-gray-900">{selectedUser.rating}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <DollarSign className="text-green-600 mb-2" size={20} />
                  <p className="text-sm text-gray-600">Wallet</p>
                  <p className="text-xl font-bold text-gray-900">${selectedUser.wallet}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <Activity className="text-blue-600 mb-2" size={20} />
                  <p className="text-sm text-gray-600">Matches</p>
                  <p className="text-xl font-bold text-gray-900">{selectedUser.matches}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Zap size={16} className="text-purple-600" />
                    <span className="text-sm">Adjust Rating</span>
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <RotateCcw size={16} className="text-blue-600" />
                    <span className="text-sm">Reset Cert</span>
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Award size={16} className="text-green-600" />
                    <span className="text-sm">Add Tier</span>
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Lock size={16} className="text-orange-600" />
                    <span className="text-sm">Freeze Wallet</span>
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <DollarSign size={16} className="text-teal-600" />
                    <span className="text-sm">Credit/Debit</span>
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-red-50 transition-colors">
                    <Ban size={16} className="text-red-600" />
                    <span className="text-sm">Ban User</span>
                  </button>
                </div>
              </div>

              {/* Speaking History */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Recent Speaking History</h4>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Spanish - Lesson 24</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-green-600">92%</span>
                        <button className="p-1 hover:bg-gray-200 rounded">
                          <Play size={14} className="text-gray-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Device Tracking */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Device Tracking</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Smartphone size={16} className="text-gray-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">iPhone 14 Pro</p>
                        <p className="text-xs text-gray-500">iOS 17.2 - New York, US</p>
                      </div>
                    </div>
                    <span className="text-xs text-green-600 font-medium">Current</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Smartphone size={16} className="text-gray-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">MacBook Pro</p>
                        <p className="text-xs text-gray-500">macOS 14.1 - New York, US</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-600">2 days ago</span>
                  </div>
                </div>
              </div>

              {/* Behavior Anomaly */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle size={20} className="text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Behavior Anomaly Score</h4>
                    <p className="text-sm text-gray-700">Low Risk (Score: 12/100)</p>
                    <p className="text-xs text-gray-600 mt-1">No suspicious activity detected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
