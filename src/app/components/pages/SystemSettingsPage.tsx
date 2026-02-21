import React, { useState } from 'react';
import {
  Settings,
  Power,
  Globe,
  Zap,
  Database,
  Activity,
  Shield,
  Code,
  AlertTriangle,
} from 'lucide-react';

export default function SystemSettingsPage() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [pvpEnabled, setPvpEnabled] = useState(true);
  const [walletEnabled, setWalletEnabled] = useState(true);

  const featureFlags = [
    { id: 'new-ui', name: 'New UI Dashboard', enabled: true, description: 'Updated admin interface' },
    { id: 'ai-v3', name: 'AI Model v3.3', enabled: false, description: 'Beta AI evaluation model' },
    { id: 'voice-chat', name: 'Voice Chat', enabled: false, description: 'In-match voice communication' },
    {
      id: 'auto-matching',
      name: 'Auto Matchmaking',
      enabled: true,
      description: 'Automatic player matching',
    },
    { id: 'live-streaming', name: 'Match Streaming', enabled: false, description: 'Live match broadcasts' },
    { id: 'multi-lang', name: 'Multi-Language UI', enabled: true, description: 'Localized interface' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
        <p className="text-gray-600 mt-1">Configure system-wide settings and features</p>
      </div>

      {/* Critical Controls */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="text-red-600" size={24} />
          <h3 className="font-semibold text-gray-900 text-lg">Critical System Controls</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-semibold text-gray-900">Maintenance Mode</h4>
                <p className="text-xs text-gray-600 mt-1">Disable all user access</p>
              </div>
              <button
                onClick={() => setMaintenanceMode(!maintenanceMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  maintenanceMode ? 'bg-red-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    maintenanceMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            {maintenanceMode && (
              <div className="mt-2 p-2 bg-red-100 rounded text-xs text-red-800">
                ⚠️ Platform is currently in maintenance mode
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-semibold text-gray-900">PvP System</h4>
                <p className="text-xs text-gray-600 mt-1">Enable/disable all matches</p>
              </div>
              <button
                onClick={() => setPvpEnabled(!pvpEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  pvpEnabled ? 'bg-green-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    pvpEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            {!pvpEnabled && (
              <div className="mt-2 p-2 bg-yellow-100 rounded text-xs text-yellow-800">
                PvP matches are disabled
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-semibold text-gray-900">Wallet System</h4>
                <p className="text-xs text-gray-600 mt-1">Enable/disable transactions</p>
              </div>
              <button
                onClick={() => setWalletEnabled(!walletEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  walletEnabled ? 'bg-green-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    walletEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            {!walletEnabled && (
              <div className="mt-2 p-2 bg-yellow-100 rounded text-xs text-yellow-800">
                Wallet transactions are disabled
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Feature Flags */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Zap size={20} className="text-purple-600" />
            Feature Flags
          </h3>
          <div className="space-y-3">
            {featureFlags.map((flag) => (
              <div
                key={flag.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">{flag.name}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{flag.description}</p>
                </div>
                <button
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    flag.enabled ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      flag.enabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Language Expansion */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Globe size={20} className="text-blue-600" />
            Language Expansion
          </h3>
          <div className="space-y-3">
            {['Spanish', 'French', 'German', 'Japanese', 'Mandarin', 'Italian', 'Portuguese', 'Korean'].map(
              (lang, idx) => (
                <div
                  key={lang}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Globe size={16} className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">{lang}</span>
                  </div>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      idx < 5 ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        idx < 5 ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* API Usage Statistics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Code size={20} className="text-cyan-600" />
          API Usage Statistics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-purple-50 rounded-lg">
            <Activity className="text-purple-600 mb-2" size={20} />
            <p className="text-sm text-gray-600">Total Requests (24h)</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">1.2M</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <Database className="text-blue-600 mb-2" size={20} />
            <p className="text-sm text-gray-600">Database Queries</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">4.8M</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <Shield className="text-green-600 mb-2" size={20} />
            <p className="text-sm text-gray-600">Auth Success Rate</p>
            <p className="text-2xl font-bold text-green-600 mt-1">99.8%</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <AlertTriangle className="text-red-600 mb-2" size={20} />
            <p className="text-sm text-gray-600">Error Rate</p>
            <p className="text-2xl font-bold text-red-600 mt-1">0.04%</p>
          </div>
        </div>
      </div>

      {/* Firebase Configuration */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Database size={20} className="text-orange-600" />
          Firebase Configuration
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Project ID</label>
            <input
              type="text"
              value="langlearn-prod-2024"
              disabled
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-600"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Region</label>
            <input
              type="text"
              value="us-central1"
              disabled
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-600"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Database Instances</label>
            <input
              type="text"
              value="3 (Primary + 2 Replicas)"
              disabled
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-600"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Storage Used</label>
            <input
              type="text"
              value="284 GB / 1 TB"
              disabled
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-600"
            />
          </div>
        </div>
        <button className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all">
          View Firebase Console
        </button>
      </div>

      {/* Log Viewer */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Activity size={20} className="text-green-600" />
          Recent System Logs
        </h3>
        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto max-h-64 overflow-y-auto">
          <div className="space-y-1 text-gray-300">
            <p>
              <span className="text-green-400">[2026-02-21 14:32:18]</span>{' '}
              <span className="text-blue-400">[INFO]</span> PvP matchmaking service running
            </p>
            <p>
              <span className="text-green-400">[2026-02-21 14:32:15]</span>{' '}
              <span className="text-blue-400">[INFO]</span> AI evaluation completed for user U-10284
            </p>
            <p>
              <span className="text-green-400">[2026-02-21 14:32:12]</span>{' '}
              <span className="text-purple-400">[DEBUG]</span> Tournament T-1024 status: Active
            </p>
            <p>
              <span className="text-green-400">[2026-02-21 14:32:10]</span>{' '}
              <span className="text-blue-400">[INFO]</span> Withdrawal W-8821 approved
            </p>
            <p>
              <span className="text-green-400">[2026-02-21 14:32:08]</span>{' '}
              <span className="text-yellow-400">[WARN]</span> High API usage detected - rate limit check
            </p>
            <p>
              <span className="text-green-400">[2026-02-21 14:32:05]</span>{' '}
              <span className="text-blue-400">[INFO]</span> Database backup completed successfully
            </p>
            <p>
              <span className="text-green-400">[2026-02-21 14:32:02]</span>{' '}
              <span className="text-red-400">[ERROR]</span> Failed login attempt from IP 192.168.1.1
            </p>
            <p>
              <span className="text-green-400">[2026-02-21 14:32:00]</span>{' '}
              <span className="text-blue-400">[INFO]</span> Scheduled task: Leaderboard update completed
            </p>
            <p>
              <span className="text-green-400">[2026-02-21 14:31:58]</span>{' '}
              <span className="text-purple-400">[DEBUG]</span> Cache hit rate: 94.2%
            </p>
            <p>
              <span className="text-green-400">[2026-02-21 14:31:55]</span>{' '}
              <span className="text-blue-400">[INFO]</span> 2847 active matches in progress
            </p>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-all">
            Refresh Logs
          </button>
          <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-all">
            Download Full Log
          </button>
          <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-all">
            Filter by Level
          </button>
        </div>
      </div>

      {/* System Health */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">Server Status</h4>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-2xl font-bold text-green-600">Healthy</p>
          <p className="text-xs text-gray-600 mt-1">Uptime: 99.98%</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">CPU Usage</h4>
            <Activity className="text-blue-600" size={16} />
          </div>
          <p className="text-2xl font-bold text-blue-600">42%</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '42%' }}></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">Memory Usage</h4>
            <Database className="text-purple-600" size={16} />
          </div>
          <p className="text-2xl font-bold text-purple-600">68%</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '68%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
