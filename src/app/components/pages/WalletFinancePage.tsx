import React from 'react';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Check,
  X,
  Eye,
  Clock,
  Shield,
} from 'lucide-react';

const withdrawalQueue = [
  {
    id: 'W-8821',
    user: 'Sarah Johnson',
    userId: 'U-10284',
    amount: 284.50,
    method: 'PayPal',
    requestedAt: '2 hours ago',
    kycStatus: 'Verified',
  },
  {
    id: 'W-8820',
    user: 'Michael Chen',
    userId: 'U-10283',
    amount: 520.75,
    method: 'Bank Transfer',
    requestedAt: '5 hours ago',
    kycStatus: 'Verified',
  },
  {
    id: 'W-8819',
    user: 'Emma Rodriguez',
    userId: 'U-10282',
    amount: 125.00,
    method: 'PayPal',
    requestedAt: '1 day ago',
    kycStatus: 'Pending',
  },
];

const recentTransactions = [
  { id: 'TX-9821', user: 'Sarah K.', type: 'Match Win', amount: 5.00, status: 'Completed' },
  { id: 'TX-9820', user: 'Mike T.', type: 'Tournament Entry', amount: -25.00, status: 'Completed' },
  { id: 'TX-9819', user: 'Alex P.', type: 'Deposit', amount: 100.00, status: 'Completed' },
  { id: 'TX-9818', user: 'Jordan R.', type: 'Withdrawal', amount: -50.00, status: 'Pending' },
  { id: 'TX-9817', user: 'Emma W.', type: 'Match Win', amount: 10.00, status: 'Completed' },
];

export default function WalletFinancePage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Wallet & Finance</h1>
        <p className="text-gray-600 mt-1">Manage transactions, withdrawals, and financial operations</p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <TrendingUp className="text-green-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Total Deposits</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">$842,650</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <TrendingDown className="text-red-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Total Withdrawals</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">$656,230</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <DollarSign className="text-purple-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Platform Revenue</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">$186,420</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Clock className="text-yellow-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Pending Withdrawals</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">$12,840</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <AlertTriangle className="text-red-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Fraud Risk Alerts</p>
          <p className="text-2xl font-bold text-red-600 mt-1">7</p>
        </div>
      </div>

      {/* Withdrawal Approval Queue */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Withdrawal Approval Queue</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Request ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Method</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Requested
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  KYC Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {withdrawalQueue.map((withdrawal) => (
                <tr key={withdrawal.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{withdrawal.id}</td>
                  <td className="px-6 py-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">{withdrawal.user}</p>
                      <p className="text-xs text-gray-500">{withdrawal.userId}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="font-semibold text-purple-600">${withdrawal.amount.toFixed(2)}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{withdrawal.method}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{withdrawal.requestedAt}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        withdrawal.kycStatus === 'Verified'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {withdrawal.kycStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-green-50 rounded-lg transition-colors">
                        <Check size={16} className="text-green-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <X size={16} className="text-red-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye size={16} className="text-blue-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Recent Transaction History</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">TX ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{tx.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{tx.user}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{tx.type}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`font-semibold ${tx.amount > 0 ? 'text-green-600' : 'text-red-600'}`}
                    >
                      {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount).toFixed(2)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tx.status === 'Completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Financial Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Withdrawal Limits</h3>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-700 block mb-1">Daily Limit ($)</label>
              <input
                type="number"
                placeholder="1000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1">Weekly Limit ($)</label>
              <input
                type="number"
                placeholder="5000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1">Monthly Limit ($)</label>
              <input
                type="number"
                placeholder="20000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
              Update Limits
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Earning Limits</h3>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-700 block mb-1">Daily Earning Cap ($)</label>
              <input
                type="number"
                placeholder="500"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1">Match Win Cap ($)</label>
              <input
                type="number"
                placeholder="100"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1">Tournament Cap ($)</label>
              <input
                type="number"
                placeholder="1000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
              Update Caps
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Shield size={18} className="text-green-600" />
            KYC Management
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-gray-900 font-medium">Verified Users</p>
              <p className="text-2xl font-bold text-green-600 mt-1">42,847</p>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-gray-900 font-medium">Pending Verification</p>
              <p className="text-2xl font-bold text-yellow-600 mt-1">284</p>
            </div>
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-gray-900 font-medium">Rejected</p>
              <p className="text-2xl font-bold text-red-600 mt-1">142</p>
            </div>
            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all">
              Review Queue
            </button>
          </div>
        </div>
      </div>

      {/* Manual Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Manual Wallet Operations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Adjust Balance</h4>
            <input
              type="text"
              placeholder="User ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm"
            />
            <input
              type="number"
              placeholder="Amount"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm"
            />
            <button className="w-full px-3 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-all">
              Adjust
            </button>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Freeze Wallet</h4>
            <input
              type="text"
              placeholder="User ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm"
            />
            <textarea
              placeholder="Reason"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm"
              rows={2}
            />
            <button className="w-full px-3 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-all">
              Freeze
            </button>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Refund Tournament</h4>
            <input
              type="text"
              placeholder="Tournament ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm"
            />
            <input
              type="text"
              placeholder="User ID (optional)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm"
            />
            <button className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-all">
              Refund
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
