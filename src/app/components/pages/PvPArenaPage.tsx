import React, { useState } from 'react';
import { Swords, Users, Clock, Target, TrendingUp, Settings, AlertTriangle, Play } from 'lucide-react';

const liveMatches = [
  {
    id: 'M-8821',
    player1: 'Sarah K.',
    player2: 'Mike T.',
    language: 'Spanish',
    mode: 'Speaking Duel',
    duration: '2:34',
    rating1: 1842,
    rating2: 1856,
    stake: '$5',
    suspicious: false,
  },
  {
    id: 'M-8820',
    player1: 'Alex P.',
    player2: 'Jordan R.',
    language: 'French',
    mode: 'Quiz Duel',
    duration: '1:12',
    rating1: 1654,
    rating2: 1648,
    stake: '$10',
    suspicious: false,
  },
  {
    id: 'M-8819',
    player1: 'Emma W.',
    player2: 'Chris L.',
    language: 'German',
    mode: 'Mixed Duel',
    duration: '4:56',
    rating1: 2104,
    rating2: 1892,
    stake: '$3',
    suspicious: true,
  },
];

export default function PvPArenaPage() {
  const [ratingTolerance, setRatingTolerance] = useState(150);
  const [queueTimeout, setQueueTimeout] = useState(30);
  const [kFactor, setKFactor] = useState(32);
  const [paidMatchesEnabled, setPaidMatchesEnabled] = useState(true);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">PvP Arena Control</h1>
        <p className="text-gray-600 mt-1">Manage matchmaking, rating system, and live matches</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Swords className="text-purple-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Active Matches</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">87</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Users className="text-blue-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">In Queue</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">142</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Clock className="text-green-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Avg Match Time</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">3:24</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <AlertTriangle className="text-red-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Suspicious Activity</p>
          <p className="text-2xl font-bold text-red-600 mt-1">5</p>
        </div>
      </div>

      {/* Matchmaking Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Target size={20} className="text-purple-600" />
            Matchmaking Settings
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Rating Range Tolerance</label>
                <span className="text-sm font-semibold text-purple-600">±{ratingTolerance}</span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={ratingTolerance}
                onChange={(e) => setRatingTolerance(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <p className="text-xs text-gray-500 mt-1">Players within this rating difference can match</p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Queue Timeout (seconds)</label>
                <span className="text-sm font-semibold text-blue-600">{queueTimeout}s</span>
              </div>
              <input
                type="range"
                min="10"
                max="120"
                step="5"
                value={queueTimeout}
                onChange={(e) => setQueueTimeout(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <p className="text-xs text-gray-500 mt-1">Max wait time before expanding search range</p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Skill Gap Threshold</label>
              <input
                type="number"
                placeholder="300"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <p className="text-xs text-gray-500 mt-1">Maximum rating difference allowed</p>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">Enable Paid Matches</p>
                <p className="text-xs text-gray-500">Allow real-money stake matches</p>
              </div>
              <button
                onClick={() => setPaidMatchesEnabled(!paidMatchesEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  paidMatchesEnabled ? 'bg-green-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    paidMatchesEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
              Save Matchmaking Config
            </button>
          </div>
        </div>

        {/* Rating Engine Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp size={20} className="text-blue-600" />
            Rating Engine
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">K-Factor</label>
                <span className="text-sm font-semibold text-purple-600">{kFactor}</span>
              </div>
              <input
                type="range"
                min="8"
                max="64"
                step="4"
                value={kFactor}
                onChange={(e) => setKFactor(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <p className="text-xs text-gray-500 mt-1">Rating change sensitivity (ELO algorithm)</p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Tier Boundaries</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Beginner</span>
                  <span className="font-medium">0 - 1199</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Intermediate</span>
                  <span className="font-medium">1200 - 1599</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Advanced</span>
                  <span className="font-medium">1600 - 1999</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Expert</span>
                  <span className="font-medium">2000 - 2399</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Master</span>
                  <span className="font-medium">2400+</span>
                </div>
              </div>
              <button className="w-full mt-3 px-3 py-1.5 bg-white border border-purple-300 text-purple-700 rounded-lg text-sm hover:bg-purple-50 transition-colors">
                Edit Boundaries
              </button>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Win Bonus Multiplier</label>
              <input
                type="number"
                placeholder="1.0"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Loss Penalty Adjustment</label>
              <input
                type="number"
                placeholder="1.0"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
              Update Rating Engine
            </button>
          </div>
        </div>
      </div>

      {/* Mode Toggles */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Game Mode Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Quiz Duel</h4>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>
            <p className="text-xs text-gray-600">Multiple choice questions</p>
            <div className="mt-2 pt-2 border-t border-purple-200">
              <p className="text-xs text-gray-600">Active players: <span className="font-semibold text-purple-600">2,847</span></p>
            </div>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Speaking Duel</h4>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>
            <p className="text-xs text-gray-600">Voice-based challenges</p>
            <div className="mt-2 pt-2 border-t border-blue-200">
              <p className="text-xs text-gray-600">Active players: <span className="font-semibold text-blue-600">1,924</span></p>
            </div>
          </div>

          <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Mixed Duel</h4>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>
            <p className="text-xs text-gray-600">Quiz + Speaking combined</p>
            <div className="mt-2 pt-2 border-t border-cyan-200">
              <p className="text-xs text-gray-600">Active players: <span className="font-semibold text-cyan-600">1,156</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Live Monitor */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Live Match Monitor</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Match ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Players</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Language</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Mode</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Stake</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {liveMatches.map((match) => (
                <tr key={match.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{match.id}</td>
                  <td className="px-6 py-4 text-sm">
                    <div>
                      <p className="text-gray-900">
                        {match.player1} <span className="text-purple-600">({match.rating1})</span>
                      </p>
                      <p className="text-gray-900">
                        vs {match.player2} <span className="text-purple-600">({match.rating2})</span>
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{match.language}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{match.mode}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{match.duration}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="font-medium text-green-600">{match.stake}</span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {match.suspicious ? (
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium flex items-center gap-1 w-fit">
                        <AlertTriangle size={12} />
                        Suspicious
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1 w-fit">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Live
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Play size={16} className="text-blue-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Results Feed */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Recent Match Results</h3>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xs font-bold">W</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Sarah K. defeated Mike T.</p>
                  <p className="text-xs text-gray-500">Spanish Quiz Duel • 2 min ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">+15 rating</span>
                <span className="text-sm font-medium text-green-600">$5.00</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
