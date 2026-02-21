import React, { useState } from 'react';
import { Shield, AlertTriangle, Eye, Ban, Play, CheckCircle } from 'lucide-react';

const highRiskUsers = [
  {
    id: 'U-10240',
    name: 'John Doe',
    riskScore: 87,
    flags: ['Tab Switch', 'Input Speed Anomaly'],
    matches: 45,
    winRate: 94,
    lastActive: '10 min ago',
  },
  {
    id: 'U-10231',
    name: 'Jane Smith',
    riskScore: 72,
    flags: ['Device Mismatch', 'Duplicate Audio'],
    matches: 38,
    winRate: 89,
    lastActive: '2 hrs ago',
  },
  {
    id: 'U-10215',
    name: 'Bob Wilson',
    riskScore: 65,
    flags: ['Speech Playback'],
    matches: 52,
    winRate: 85,
    lastActive: '1 day ago',
  },
];

const suspiciousMatches = [
  {
    id: 'M-8801',
    players: 'John D. vs Alex P.',
    language: 'Spanish',
    redFlags: ['Tab Switch x4', 'Abnormal Speed'],
    timestamp: '15 min ago',
  },
  {
    id: 'M-8798',
    players: 'Jane S. vs Mike T.',
    language: 'French',
    redFlags: ['Audio Duplicate', 'Device Change'],
    timestamp: '1 hr ago',
  },
];

export default function AntiCheatPage() {
  const [autoBanEnabled, setAutoBanEnabled] = useState(false);
  const [tabSwitchThreshold, setTabSwitchThreshold] = useState(3);
  const [inputSpeedThreshold, setInputSpeedThreshold] = useState(150);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Anti-Cheat System</h1>
        <p className="text-gray-600 mt-1">Monitor and prevent fraudulent activities</p>
      </div>

      {/* Risk Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <AlertTriangle className="text-red-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">High Risk Users</p>
          <p className="text-2xl font-bold text-red-600 mt-1">24</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Shield className="text-orange-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Suspicious Matches</p>
          <p className="text-2xl font-bold text-orange-600 mt-1">48</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Ban className="text-purple-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Auto-Bans (24h)</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Eye className="text-blue-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Manual Reviews</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">36</p>
        </div>
      </div>

      {/* Detection Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Shield size={20} className="text-purple-600" />
          Detection Controls
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">Tab Switch Threshold</label>
              <span className="text-sm font-semibold text-purple-600">{tabSwitchThreshold}</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={tabSwitchThreshold}
              onChange={(e) => setTabSwitchThreshold(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <p className="text-xs text-gray-500 mt-1">Max tab switches before flagging</p>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">Input Speed Threshold (WPM)</label>
              <span className="text-sm font-semibold text-blue-600">{inputSpeedThreshold}</span>
            </div>
            <input
              type="range"
              min="100"
              max="300"
              step="10"
              value={inputSpeedThreshold}
              onChange={(e) => setInputSpeedThreshold(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <p className="text-xs text-gray-500 mt-1">Typing speed anomaly detection</p>
          </div>

          <div className="flex items-center justify-between p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border border-red-200">
            <div>
              <p className="text-sm font-medium text-gray-900">Auto-Ban System</p>
              <p className="text-xs text-gray-600">Automatic suspension on detection</p>
            </div>
            <button
              onClick={() => setAutoBanEnabled(!autoBanEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                autoBanEnabled ? 'bg-red-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoBanEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
          <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded accent-purple-600" />
              <span className="text-sm text-gray-700">Speech Playback</span>
            </label>
          </div>
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded accent-blue-600" />
              <span className="text-sm text-gray-700">Duplicate Audio</span>
            </label>
          </div>
          <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-lg">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded accent-cyan-600" />
              <span className="text-sm text-gray-700">Device Fingerprint</span>
            </label>
          </div>
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded accent-green-600" />
              <span className="text-sm text-gray-700">VPN Detection</span>
            </label>
          </div>
          <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded accent-orange-600" />
              <span className="text-sm text-gray-700">Location Match</span>
            </label>
          </div>
        </div>

        <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
          Save Detection Settings
        </button>
      </div>

      {/* High Risk Users */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">High Risk Users</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">User ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Risk Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Flags</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Matches</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Win Rate</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Last Active
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {highRiskUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                        <div
                          className={`h-2 rounded-full ${
                            user.riskScore >= 80
                              ? 'bg-red-600'
                              : user.riskScore >= 60
                              ? 'bg-orange-600'
                              : 'bg-yellow-600'
                          }`}
                          style={{ width: `${user.riskScore}%` }}
                        ></div>
                      </div>
                      <span className="font-semibold text-red-600">{user.riskScore}/100</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex flex-wrap gap-1">
                      {user.flags.map((flag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-medium"
                        >
                          {flag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{user.matches}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="font-semibold text-purple-600">{user.winRate}%</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.lastActive}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye size={16} className="text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Ban size={16} className="text-red-600" />
                      </button>
                      <button className="p-2 hover:bg-green-50 rounded-lg transition-colors">
                        <CheckCircle size={16} className="text-green-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Suspicious Matches */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Suspicious Match Activity</h3>
        <div className="space-y-3">
          {suspiciousMatches.map((match) => (
            <div
              key={match.id}
              className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-red-600" size={20} />
                <div>
                  <p className="font-medium text-gray-900">{match.players}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-600">{match.language}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-600">{match.id}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-600">{match.timestamp}</span>
                  </div>
                  <div className="flex gap-1 mt-1">
                    {match.redFlags.map((flag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-red-200 text-red-800 rounded-full text-xs font-medium"
                      >
                        {flag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                  <Play size={16} className="text-blue-600" />
                </button>
                <button className="px-3 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-all">
                  Investigate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manual Review Queue */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Manual Review Queue</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Pending Review</h4>
            <p className="text-3xl font-bold text-yellow-600">36</p>
            <button className="mt-3 w-full px-3 py-2 bg-yellow-600 text-white rounded-lg text-sm hover:bg-yellow-700 transition-all">
              Start Review
            </button>
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Cleared (24h)</h4>
            <p className="text-3xl font-bold text-green-600">84</p>
            <button className="mt-3 w-full px-3 py-2 bg-white border border-green-300 text-green-700 rounded-lg text-sm hover:bg-green-50 transition-all">
              View History
            </button>
          </div>
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Banned (24h)</h4>
            <p className="text-3xl font-bold text-red-600">12</p>
            <button className="mt-3 w-full px-3 py-2 bg-white border border-red-300 text-red-700 rounded-lg text-sm hover:bg-red-50 transition-all">
              View Banned
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
