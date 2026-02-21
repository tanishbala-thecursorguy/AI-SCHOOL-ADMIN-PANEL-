import React, { useState } from 'react';
import { Brain, Sliders, Eye, RotateCcw, AlertTriangle } from 'lucide-react';

const flaggedEvaluations = [
  { id: 'AI-8821', user: 'Sarah K.', lesson: 'Spanish L24', score: 48, confidence: 0.42, flagged: 'Low Confidence' },
  { id: 'AI-8820', user: 'Mike T.', lesson: 'French L12', score: 94, confidence: 0.58, flagged: 'Score Mismatch' },
  { id: 'AI-8819', user: 'Emma W.', lesson: 'German L8', score: 35, confidence: 0.51, flagged: 'Anomaly Detected' },
];

export default function AIControlPage() {
  const [fluency, setFluency] = useState(25);
  const [vocabulary, setVocabulary] = useState(25);
  const [grammar, setGrammar] = useState(30);
  const [pronunciation, setPronunciation] = useState(20);
  const [passingScores, setPassingScores] = useState({
    beginner: 60,
    intermediate: 70,
    advanced: 75,
    expert: 80,
    master: 85,
  });

  const total = fluency + vocabulary + grammar + pronunciation;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">AI Control Center</h1>
        <p className="text-gray-600 mt-1">Configure AI evaluation parameters and monitoring</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Brain className="text-purple-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">AI Evaluations Today</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">8,921</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Sliders className="text-blue-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Avg Confidence</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">87.4%</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Eye className="text-green-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Accuracy Score</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">94.2%</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <AlertTriangle className="text-red-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Flagged Evaluations</p>
          <p className="text-2xl font-bold text-red-600 mt-1">14</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Scoring Weight Sliders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Scoring Weight Distribution</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Fluency</label>
                <span className="text-sm font-semibold text-purple-600">{fluency}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={fluency}
                onChange={(e) => setFluency(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Vocabulary</label>
                <span className="text-sm font-semibold text-blue-600">{vocabulary}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={vocabulary}
                onChange={(e) => setVocabulary(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Grammar</label>
                <span className="text-sm font-semibold text-green-600">{grammar}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={grammar}
                onChange={(e) => setGrammar(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Pronunciation</label>
                <span className="text-sm font-semibold text-orange-600">{pronunciation}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={pronunciation}
                onChange={(e) => setPronunciation(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Total Weight</span>
                <span
                  className={`text-lg font-bold ${total === 100 ? 'text-green-600' : 'text-red-600'}`}
                >
                  {total}%
                </span>
              </div>
              {total !== 100 && (
                <p className="text-xs text-red-600 mt-1">Total must equal 100%</p>
              )}
            </div>

            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
              Save Weight Configuration
            </button>
          </div>
        </div>

        {/* Minimum Passing Scores */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Minimum Passing Score per Tier</h3>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-900">Beginner</label>
                <input
                  type="number"
                  value={passingScores.beginner}
                  onChange={(e) =>
                    setPassingScores({ ...passingScores, beginner: Number(e.target.value) })
                  }
                  className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                />
              </div>
              <div className="w-full bg-purple-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${passingScores.beginner}%` }}
                ></div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-900">Intermediate</label>
                <input
                  type="number"
                  value={passingScores.intermediate}
                  onChange={(e) =>
                    setPassingScores({ ...passingScores, intermediate: Number(e.target.value) })
                  }
                  className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                />
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${passingScores.intermediate}%` }}
                ></div>
              </div>
            </div>

            <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-900">Advanced</label>
                <input
                  type="number"
                  value={passingScores.advanced}
                  onChange={(e) =>
                    setPassingScores({ ...passingScores, advanced: Number(e.target.value) })
                  }
                  className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                />
              </div>
              <div className="w-full bg-cyan-200 rounded-full h-2">
                <div
                  className="bg-cyan-600 h-2 rounded-full"
                  style={{ width: `${passingScores.advanced}%` }}
                ></div>
              </div>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-900">Expert</label>
                <input
                  type="number"
                  value={passingScores.expert}
                  onChange={(e) =>
                    setPassingScores({ ...passingScores, expert: Number(e.target.value) })
                  }
                  className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                />
              </div>
              <div className="w-full bg-green-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: `${passingScores.expert}%` }}
                ></div>
              </div>
            </div>

            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-900">Master</label>
                <input
                  type="number"
                  value={passingScores.master}
                  onChange={(e) =>
                    setPassingScores({ ...passingScores, master: Number(e.target.value) })
                  }
                  className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                />
              </div>
              <div className="w-full bg-orange-200 rounded-full h-2">
                <div
                  className="bg-orange-600 h-2 rounded-full"
                  style={{ width: `${passingScores.master}%` }}
                ></div>
              </div>
            </div>

            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
              Update Passing Scores
            </button>
          </div>
        </div>
      </div>

      {/* Additional Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Confidence Threshold</h3>
          <input
            type="number"
            placeholder="0.75"
            step="0.01"
            min="0"
            max="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <p className="text-xs text-gray-500 mt-2">
            Evaluations below this confidence score will be flagged
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Evaluation Mode</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded accent-purple-600" />
              <span className="text-sm text-gray-700">Real-time Feedback</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded accent-purple-600" />
              <span className="text-sm text-gray-700">Detailed Analysis</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded accent-purple-600" />
              <span className="text-sm text-gray-700">Voice Playback</span>
            </label>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Model Version</h3>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>v3.2.1 (Current)</option>
            <option>v3.1.8 (Stable)</option>
            <option>v3.3.0-beta (Testing)</option>
          </select>
          <p className="text-xs text-gray-500 mt-2">AI model for speech evaluation</p>
        </div>
      </div>

      {/* Flagged Evaluations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Flagged Evaluations - Manual Review</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Evaluation ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Lesson
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Confidence
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                  Reason
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {flaggedEvaluations.map((evaluation) => (
                <tr key={evaluation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{evaluation.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{evaluation.user}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{evaluation.lesson}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="font-semibold text-purple-600">{evaluation.score}</span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`font-medium ${
                        evaluation.confidence < 0.5 ? 'text-red-600' : 'text-yellow-600'
                      }`}
                    >
                      {evaluation.confidence.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                      {evaluation.flagged}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye size={16} className="text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <RotateCcw size={16} className="text-green-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}