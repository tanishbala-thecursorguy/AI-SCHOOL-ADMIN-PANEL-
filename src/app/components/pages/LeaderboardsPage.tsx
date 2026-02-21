import React, { useState } from 'react';
import { Award, Trophy, TrendingUp, Calendar, Edit, RotateCcw, Archive } from 'lucide-react';

const leaderboardData = [
  { rank: 1, name: 'Lisa Anderson', rating: 2480, tier: 'Master', wins: 542, change: '+15' },
  { rank: 2, name: 'Chris Thompson', rating: 2240, tier: 'Expert', wins: 324, change: '+8' },
  { rank: 3, name: 'Michael Chen', rating: 2154, tier: 'Expert', wins: 287, change: '-5' },
  { rank: 4, name: 'Emma Rodriguez', rating: 2098, tier: 'Expert', wins: 245, change: '+12' },
  { rank: 5, name: 'David Martinez', rating: 1920, tier: 'Advanced', wins: 124, change: '+3' },
  { rank: 6, name: 'Sarah Johnson', rating: 1842, tier: 'Advanced', wins: 156, change: '+7' },
  { rank: 7, name: 'Anna Kim', rating: 1580, tier: 'Intermediate', wins: 165, change: '-2' },
  { rank: 8, name: 'Alex Parker', rating: 1654, tier: 'Intermediate', wins: 198, change: '+4' },
  { rank: 9, name: 'Jordan Rivers', rating: 1648, tier: 'Intermediate', wins: 142, change: '+9' },
  { rank: 10, name: 'James Wilson', rating: 1125, tier: 'Beginner', wins: 42, change: '+1' },
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

export default function LeaderboardsPage() {
  const [showBoundaryEditor, setShowBoundaryEditor] = useState(false);
  const [boundaries, setBoundaries] = useState({
    beginner: { min: 0, max: 1199 },
    intermediate: { min: 1200, max: 1599 },
    advanced: { min: 1600, max: 1999 },
    expert: { min: 2000, max: 2399 },
    master: { min: 2400, max: 9999 },
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leaderboards</h1>
          <p className="text-gray-600 mt-1">Manage rankings, tiers, and seasonal rewards</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all">
            <Archive size={18} />
            Archive
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
            <Calendar size={18} />
            New Season
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Award className="text-purple-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Current Season</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">Season 8</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Trophy className="text-blue-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Top Ranked Players</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">68,924</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <TrendingUp className="text-green-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Avg Rating Change</p>
          <p className="text-2xl font-bold text-green-600 mt-1">+8.4</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Calendar className="text-orange-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Days Remaining</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">42</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Leaderboard */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Current Leaderboard - Season 8</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Rank</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Player</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Tier</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Rating</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Wins</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leaderboardData.map((player) => (
                  <tr key={player.rank} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          player.rank === 1
                            ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white'
                            : player.rank === 2
                            ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white'
                            : player.rank === 3
                            ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {player.rank}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">{player.name.charAt(0)}</span>
                        </div>
                        <span className="font-medium text-gray-900">{player.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTierColor(player.tier)}`}>
                        {player.tier}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <span className="font-semibold text-purple-600">{player.rating}</span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900">{player.wins}</td>
                    <td className="px-4 py-4 text-sm">
                      <span
                        className={`font-medium ${
                          player.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {player.change}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Management Tools */}
        <div className="space-y-4">
          {/* Tier Boundary Editor */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Tier Boundaries</h3>
              <button
                onClick={() => setShowBoundaryEditor(!showBoundaryEditor)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Edit size={16} className="text-purple-600" />
              </button>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">Beginner</span>
                  <span className="text-sm text-gray-600">
                    {boundaries.beginner.min} - {boundaries.beginner.max}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">Intermediate</span>
                  <span className="text-sm text-gray-600">
                    {boundaries.intermediate.min} - {boundaries.intermediate.max}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">Advanced</span>
                  <span className="text-sm text-gray-600">
                    {boundaries.advanced.min} - {boundaries.advanced.max}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">Expert</span>
                  <span className="text-sm text-gray-600">
                    {boundaries.expert.min} - {boundaries.expert.max}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">Master</span>
                  <span className="text-sm text-gray-600">{boundaries.master.min}+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Season Management */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Season Management</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 border border-purple-200 rounded-lg hover:bg-purple-100 transition-all">
                <RotateCcw size={16} />
                <span className="text-sm font-medium">Reset Season</span>
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-100 transition-all">
                <Calendar size={16} />
                <span className="text-sm font-medium">Start Season 9</span>
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all">
                <Archive size={16} />
                <span className="text-sm font-medium">Archive Season 8</span>
              </button>
            </div>
          </div>

          {/* Seasonal Rewards */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Seasonal Rewards</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-900">Top 10</span>
                  <Trophy className="text-yellow-600" size={16} />
                </div>
                <p className="text-xs text-gray-600">$500 + Premium Badge</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-900">Top 50</span>
                  <Award className="text-blue-600" size={16} />
                </div>
                <p className="text-xs text-gray-600">$100 + Elite Badge</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-900">Top 100</span>
                  <Award className="text-purple-600" size={16} />
                </div>
                <p className="text-xs text-gray-600">$25 + Star Badge</p>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all text-sm">
              Configure Rewards
            </button>
          </div>
        </div>
      </div>

      {/* Season Stats */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Season 8 Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Master Tier</p>
            <p className="text-2xl font-bold text-purple-600">1,200</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Expert Tier</p>
            <p className="text-2xl font-bold text-green-600">4,100</p>
          </div>
          <div className="text-center p-4 bg-cyan-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Advanced Tier</p>
            <p className="text-2xl font-bold text-cyan-600">9,800</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Intermediate</p>
            <p className="text-2xl font-bold text-blue-600">18,200</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Beginner Tier</p>
            <p className="text-2xl font-bold text-gray-600">35,624</p>
          </div>
        </div>
      </div>
    </div>
  );
}
