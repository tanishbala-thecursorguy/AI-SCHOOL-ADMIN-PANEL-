import React, { useState } from 'react';
import { Trophy, Plus, Pause, Edit, XCircle, Users, DollarSign, Calendar, Play } from 'lucide-react';

const tournaments = [
  {
    id: 'T-1024',
    name: 'Spanish Masters Championship',
    language: 'Spanish',
    mode: 'Speaking Duel',
    entryFee: 25,
    prizePool: 2500,
    participants: 98,
    maxParticipants: 100,
    status: 'Active',
    progress: 65,
    startDate: '2026-02-18',
  },
  {
    id: 'T-1023',
    name: 'French Beginner League',
    language: 'French',
    mode: 'Quiz Duel',
    entryFee: 5,
    prizePool: 500,
    participants: 84,
    maxParticipants: 128,
    status: 'Active',
    progress: 35,
    startDate: '2026-02-20',
  },
  {
    id: 'T-1022',
    name: 'German Elite Tournament',
    language: 'German',
    mode: 'Mixed Duel',
    entryFee: 50,
    prizePool: 5000,
    participants: 32,
    maxParticipants: 32,
    status: 'Full',
    progress: 85,
    startDate: '2026-02-15',
  },
];

export default function TournamentPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tournament Management</h1>
          <p className="text-gray-600 mt-1">Create and manage competitive tournaments</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
        >
          <Plus size={18} />
          Create Tournament
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Trophy className="text-purple-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Active Tournaments</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">14</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Users className="text-blue-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Total Participants</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">2,847</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <DollarSign className="text-green-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Total Prize Pool</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">$84,250</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Calendar className="text-orange-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Scheduled</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
        </div>
      </div>

      {/* Active Tournaments */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Active & Scheduled Tournaments</h3>
        <div className="space-y-4">
          {tournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900">{tournament.name}</h4>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        tournament.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : tournament.status === 'Full'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tournament.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {tournament.language} • {tournament.mode} • ID: {tournament.id}
                  </p>
                </div>
                <div className="flex gap-1">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Play size={16} className="text-green-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Pause size={16} className="text-yellow-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit size={16} className="text-blue-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <XCircle size={16} className="text-red-600" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-3">
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Entry Fee</p>
                  <p className="font-semibold text-gray-900">${tournament.entryFee}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Prize Pool</p>
                  <p className="font-semibold text-gray-900">${tournament.prizePool.toLocaleString()}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Participants</p>
                  <p className="font-semibold text-gray-900">
                    {tournament.participants}/{tournament.maxParticipants}
                  </p>
                </div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Start Date</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(tournament.startDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Tournament Progress</span>
                  <span>{tournament.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${tournament.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Tournament Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Create New Tournament</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <XCircle size={20} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Tournament Name</label>
                <input
                  type="text"
                  placeholder="e.g., Spanish Masters Championship"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Language</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Japanese</option>
                    <option>Mandarin</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Mode</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Quiz Duel</option>
                    <option>Speaking Duel</option>
                    <option>Mixed Duel</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Entry Fee ($)</label>
                  <input
                    type="number"
                    placeholder="25"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Prize Pool ($)</label>
                  <input
                    type="number"
                    placeholder="2500"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Rating Range</label>
                  <input
                    type="text"
                    placeholder="1500-2000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Participant Limit</label>
                  <input
                    type="number"
                    placeholder="100"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Start Date & Time</label>
                  <input
                    type="datetime-local"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Format</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Single Elimination</option>
                    <option>Double Elimination</option>
                    <option>Round Robin</option>
                    <option>Swiss System</option>
                  </select>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Prize Distribution</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">1st Place</span>
                    <input
                      type="number"
                      placeholder="50"
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-right"
                    />
                    <span className="text-gray-600">%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">2nd Place</span>
                    <input
                      type="number"
                      placeholder="30"
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-right"
                    />
                    <span className="text-gray-600">%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">3rd Place</span>
                    <input
                      type="number"
                      placeholder="20"
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-right"
                    />
                    <span className="text-gray-600">%</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
                  Create Tournament
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
