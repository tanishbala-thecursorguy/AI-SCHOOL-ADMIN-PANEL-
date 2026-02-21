import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Plus,
  Edit,
  Trash,
  Globe,
  BookOpen,
  FileText,
  MessageSquare,
  ToggleLeft,
  ToggleRight,
  DollarSign,
  Target,
  Award,
  TrendingUp,
  Zap,
  Upload,
} from 'lucide-react';

const coursesData = [
  {
    id: 'lang-1',
    name: 'Spanish',
    enabled: true,
    premium: false,
    subjects: [
      {
        id: 'subj-1',
        name: 'Conversational Spanish',
        chapters: [
          {
            id: 'chap-1',
            name: 'Greetings & Introductions',
            lessons: [
              { id: 'less-1', name: 'Basic Greetings', difficulty: 'Easy', mastery: 85, xp: 10 },
              { id: 'less-2', name: 'Formal Introductions', difficulty: 'Medium', mastery: 70, xp: 15 },
            ],
          },
          {
            id: 'chap-2',
            name: 'Daily Conversations',
            lessons: [
              { id: 'less-3', name: 'At the Restaurant', difficulty: 'Medium', mastery: 75, xp: 20 },
              { id: 'less-4', name: 'Shopping Dialogs', difficulty: 'Hard', mastery: 60, xp: 25 },
            ],
          },
        ],
      },
      {
        id: 'subj-2',
        name: 'Business Spanish',
        chapters: [
          {
            id: 'chap-3',
            name: 'Professional Communication',
            lessons: [
              { id: 'less-5', name: 'Email Writing', difficulty: 'Hard', mastery: 80, xp: 30 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'lang-2',
    name: 'French',
    enabled: true,
    premium: true,
    subjects: [
      {
        id: 'subj-3',
        name: 'French Basics',
        chapters: [
          {
            id: 'chap-4',
            name: 'Pronunciation',
            lessons: [
              { id: 'less-6', name: 'Vowel Sounds', difficulty: 'Easy', mastery: 90, xp: 10 },
              { id: 'less-7', name: 'Consonants', difficulty: 'Medium', mastery: 75, xp: 15 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'lang-3',
    name: 'German',
    enabled: false,
    premium: false,
    subjects: [],
  },
];

export default function CoursesPage() {
  const [expandedLanguages, setExpandedLanguages] = useState<string[]>(['lang-1']);
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>(['subj-1']);
  const [expandedChapters, setExpandedChapters] = useState<string[]>(['chap-1']);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);

  const toggleLanguage = (id: string) => {
    setExpandedLanguages((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleSubject = (id: string) => {
    setExpandedSubjects((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleChapter = (id: string) => {
    setExpandedChapters((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors: Record<string, string> = {
      Easy: 'bg-green-100 text-green-700',
      Medium: 'bg-yellow-100 text-yellow-700',
      Hard: 'bg-red-100 text-red-700',
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Courses & Content</h1>
          <p className="text-gray-600 mt-1">Manage languages, subjects, chapters, and lessons</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
          <Plus size={18} />
          Add Language
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <Globe className="text-purple-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Languages</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <BookOpen className="text-blue-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Total Subjects</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">42</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <FileText className="text-cyan-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Total Lessons</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">1,284</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <MessageSquare className="text-green-600 mb-2" size={20} />
          <p className="text-sm text-gray-600">Speaking Prompts</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">5,642</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course Tree */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Course Structure</h3>
          <div className="space-y-2">
            {coursesData.map((language) => (
              <div key={language.id} className="border border-gray-200 rounded-lg">
                {/* Language Level */}
                <div
                  className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-t-lg"
                  onClick={() => toggleLanguage(language.id)}
                >
                  <div className="flex items-center gap-2">
                    {expandedLanguages.includes(language.id) ? (
                      <ChevronDown size={18} className="text-gray-500" />
                    ) : (
                      <ChevronRight size={18} className="text-gray-500" />
                    )}
                    <Globe size={18} className="text-purple-600" />
                    <span className="font-semibold text-gray-900">{language.name}</span>
                    {language.premium && (
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
                        Premium
                      </span>
                    )}
                    {language.enabled ? (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        Enabled
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                        Disabled
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <Edit size={14} className="text-gray-600" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <Trash size={14} className="text-red-600" />
                    </button>
                  </div>
                </div>

                {/* Subjects */}
                {expandedLanguages.includes(language.id) && language.subjects.length > 0 && (
                  <div className="pl-6 space-y-1 pb-2">
                    {language.subjects.map((subject) => (
                      <div key={subject.id}>
                        <div
                          className="flex items-center justify-between p-2 hover:bg-gray-50 cursor-pointer rounded"
                          onClick={() => toggleSubject(subject.id)}
                        >
                          <div className="flex items-center gap-2">
                            {expandedSubjects.includes(subject.id) ? (
                              <ChevronDown size={16} className="text-gray-500" />
                            ) : (
                              <ChevronRight size={16} className="text-gray-500" />
                            )}
                            <BookOpen size={16} className="text-blue-600" />
                            <span className="text-sm font-medium text-gray-900">{subject.name}</span>
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              <Edit size={12} className="text-gray-600" />
                            </button>
                          </div>
                        </div>

                        {/* Chapters */}
                        {expandedSubjects.includes(subject.id) && (
                          <div className="pl-6 space-y-1">
                            {subject.chapters.map((chapter) => (
                              <div key={chapter.id}>
                                <div
                                  className="flex items-center justify-between p-2 hover:bg-gray-50 cursor-pointer rounded"
                                  onClick={() => toggleChapter(chapter.id)}
                                >
                                  <div className="flex items-center gap-2">
                                    {expandedChapters.includes(chapter.id) ? (
                                      <ChevronDown size={14} className="text-gray-500" />
                                    ) : (
                                      <ChevronRight size={14} className="text-gray-500" />
                                    )}
                                    <FileText size={14} className="text-cyan-600" />
                                    <span className="text-sm text-gray-900">{chapter.name}</span>
                                  </div>
                                </div>

                                {/* Lessons */}
                                {expandedChapters.includes(chapter.id) && (
                                  <div className="pl-6 space-y-1">
                                    {chapter.lessons.map((lesson) => (
                                      <div
                                        key={lesson.id}
                                        onClick={() => setSelectedLesson(lesson)}
                                        className="flex items-center justify-between p-2 hover:bg-purple-50 cursor-pointer rounded"
                                      >
                                        <div className="flex items-center gap-2">
                                          <MessageSquare size={12} className="text-green-600" />
                                          <span className="text-xs text-gray-900">{lesson.name}</span>
                                          <span
                                            className={`px-1.5 py-0.5 text-xs rounded-full font-medium ${getDifficultyColor(
                                              lesson.difficulty
                                            )}`}
                                          >
                                            {lesson.difficulty}
                                          </span>
                                        </div>
                                        <span className="text-xs text-gray-500">{lesson.xp} XP</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {expandedLanguages.includes(language.id) && language.subjects.length === 0 && (
                  <div className="p-4 text-center text-sm text-gray-500">No subjects yet</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Lesson Controls */}
        <div className="space-y-4">
          {selectedLesson ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Lesson Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-700 font-medium">Lesson Name</label>
                  <input
                    type="text"
                    value={selectedLesson.name}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 font-medium">Difficulty</label>
                  <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-700 font-medium">Mastery %</label>
                  <input
                    type="number"
                    value={selectedLesson.mastery}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 font-medium">XP Reward</label>
                  <input
                    type="number"
                    value={selectedLesson.xp}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 font-medium">PvP Readiness</label>
                  <input
                    type="number"
                    placeholder="70"
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 font-medium">Rating Impact</label>
                  <input
                    type="number"
                    placeholder="10"
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
                  Save Changes
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <p className="text-sm text-gray-500 text-center">Select a lesson to edit settings</p>
            </div>
          )}

          {/* Speaking Prompts Manager */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Speaking Prompts</h3>
            <button className="w-full px-4 py-2 bg-purple-50 text-purple-700 border border-purple-200 rounded-lg hover:bg-purple-100 transition-all">
              <Plus size={18} className="inline mr-2" />
              Add Prompt
            </button>
            <div className="mt-4 space-y-2">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-900 font-medium">Introduce yourself</p>
                <span
                  className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full font-medium ${getDifficultyColor(
                    'Easy'
                  )}`}
                >
                  Easy
                </span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-900 font-medium">Describe your daily routine</p>
                <span
                  className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full font-medium ${getDifficultyColor(
                    'Medium'
                  )}`}
                >
                  Medium
                </span>
              </div>
            </div>
          </div>

          {/* Quiz Question Bank */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quiz Questions</h3>
            <button className="w-full px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-100 transition-all mb-3">
              <Plus size={18} className="inline mr-2" />
              Add Question
            </button>
            <button className="w-full px-4 py-2 bg-gray-50 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all">
              <Upload size={18} className="inline mr-2" />
              Bulk Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
