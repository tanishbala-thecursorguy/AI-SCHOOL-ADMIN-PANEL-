import React, { useState } from 'react';
import { Bell, Send, Mail, Megaphone, Plus, X, Users, Filter } from 'lucide-react';

const notificationHistory = [
  {
    id: 'N-1024',
    title: 'Season 9 Starting Soon!',
    message: 'New season begins in 48 hours. Get ready!',
    target: 'All Users',
    type: 'Push',
    sent: '2 hours ago',
    delivered: 68542,
  },
  {
    id: 'N-1023',
    title: 'Tournament Winner Announcement',
    message: 'Congratulations to our Spanish Masters Championship winners!',
    target: 'Tournament Participants',
    type: 'Email',
    sent: '1 day ago',
    delivered: 2847,
  },
  {
    id: 'N-1022',
    title: 'Maintenance Notice',
    message: 'Scheduled maintenance on Feb 25, 2026 from 2-4 AM EST',
    target: 'All Users',
    type: 'In-App',
    sent: '3 days ago',
    delivered: 68924,
  },
];

export default function NotificationsPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [notificationType, setNotificationType] = useState<'push' | 'email' | 'in-app'>('push');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications Center</h1>
          <p className="text-gray-600 mt-1">Send messages and announcements to users</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
        >
          <Plus size={18} />
          Create Notification
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Bell className="text-purple-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Push Sent (24h)</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">68,542</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Mail className="text-blue-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Emails Sent (24h)</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">12,847</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Megaphone className="text-green-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Active Banners</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Send className="text-orange-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Delivery Rate</p>
          <p className="text-2xl font-bold text-green-600 mt-1">98.4%</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Send</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => {
              setNotificationType('push');
              setShowCreateModal(true);
            }}
            className="p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-all"
          >
            <Bell className="text-purple-600 mx-auto mb-2" size={24} />
            <p className="font-medium text-gray-900">Push Notification</p>
            <p className="text-xs text-gray-600 mt-1">Instant mobile alert</p>
          </button>

          <button
            onClick={() => {
              setNotificationType('email');
              setShowCreateModal(true);
            }}
            className="p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-all"
          >
            <Mail className="text-blue-600 mx-auto mb-2" size={24} />
            <p className="font-medium text-gray-900">Email Broadcast</p>
            <p className="text-xs text-gray-600 mt-1">Send bulk emails</p>
          </button>

          <button
            onClick={() => {
              setNotificationType('in-app');
              setShowCreateModal(true);
            }}
            className="p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-all"
          >
            <Megaphone className="text-green-600 mx-auto mb-2" size={24} />
            <p className="font-medium text-gray-900">In-App Banner</p>
            <p className="text-xs text-gray-600 mt-1">Display inside app</p>
          </button>
        </div>
      </div>

      {/* Notification History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Notification History</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Target</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Delivered
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Sent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {notificationHistory.map((notif) => (
                <tr key={notif.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{notif.id}</td>
                  <td className="px-6 py-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">{notif.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{notif.message}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{notif.target}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        notif.type === 'Push'
                          ? 'bg-purple-100 text-purple-700'
                          : notif.type === 'Email'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {notif.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="font-semibold text-green-600">{notif.delivered.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{notif.sent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Notification Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Create Notification</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Notification Type */}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Notification Type</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setNotificationType('push')}
                    className={`p-3 border rounded-lg transition-all ${
                      notificationType === 'push'
                        ? 'bg-purple-50 border-purple-500 text-purple-700'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Bell className="mx-auto mb-1" size={20} />
                    <span className="text-xs font-medium">Push</span>
                  </button>
                  <button
                    onClick={() => setNotificationType('email')}
                    className={`p-3 border rounded-lg transition-all ${
                      notificationType === 'email'
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Mail className="mx-auto mb-1" size={20} />
                    <span className="text-xs font-medium">Email</span>
                  </button>
                  <button
                    onClick={() => setNotificationType('in-app')}
                    className={`p-3 border rounded-lg transition-all ${
                      notificationType === 'in-app'
                        ? 'bg-green-50 border-green-500 text-green-700'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Megaphone className="mx-auto mb-1" size={20} />
                    <span className="text-xs font-medium">In-App</span>
                  </button>
                </div>
              </div>

              {/* Target Audience */}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Target Audience</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                    <input type="radio" name="audience" defaultChecked className="accent-purple-600" />
                    <Users size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-700">All Users (68,924)</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                    <input type="radio" name="audience" className="accent-purple-600" />
                    <Filter size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-700">Filter by Tier</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                    <input type="radio" name="audience" className="accent-purple-600" />
                    <Filter size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-700">Filter by Rating Range</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                    <input type="radio" name="audience" className="accent-purple-600" />
                    <Filter size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-700">Filter by Language</span>
                  </label>
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Title</label>
                <input
                  type="text"
                  placeholder="e.g., Season 9 Starting Soon!"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Message</label>
                <textarea
                  placeholder="Enter your notification message..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {notificationType === 'push'
                    ? 'Keep it short and engaging (max 160 characters recommended)'
                    : notificationType === 'email'
                    ? 'You can use rich text and HTML formatting'
                    : 'This will be displayed as a banner in the app'}
                </p>
              </div>

              {/* Link (optional) */}
              {notificationType === 'push' && (
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">
                    Action Link (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="/tournaments or /leaderboards"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              )}

              {/* Schedule */}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Schedule</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                    <input type="radio" name="schedule" defaultChecked className="accent-purple-600" />
                    <span className="text-sm text-gray-700">Send Now</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                    <input type="radio" name="schedule" className="accent-purple-600" />
                    <span className="text-sm text-gray-700">Schedule Later</span>
                  </label>
                </div>
              </div>

              {/* Preview */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Preview</h4>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="font-medium text-gray-900 text-sm">Season 9 Starting Soon!</p>
                  <p className="text-xs text-gray-600 mt-1">New season begins in 48 hours. Get ready!</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
                  Send Notification
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
