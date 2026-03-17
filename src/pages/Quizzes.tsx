import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, PlayCircle, Clock, BookOpen } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

export function Quizzes() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  const initialSubject = searchParams.get('subject');

  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState(initialSubject || '');

  useEffect(() => {
    if (initialCategory) {
      const lowerCat = initialCategory.toLowerCase();
      if (lowerCat.includes('rbb')) setActiveTab('rbb');
      else if (lowerCat.includes('nrb')) setActiveTab('nrb');
      else if (lowerCat.includes('commercial') || lowerCat.includes('वाणिज्य')) setActiveTab('commercial');
      else if (lowerCat.includes('development') || lowerCat.includes('विकास')) setActiveTab('development');
      else if (lowerCat.includes('microfinance') || lowerCat.includes('लघुवित्त')) setActiveTab('microfinance');
      else if (lowerCat.includes('loksewa') || lowerCat.includes('लोकसेवा')) setActiveTab('loksewa');
      else setSearchQuery(initialCategory); // If not a tab, use as search query
    }
  }, [initialCategory]);

  const quizzes = [
    { id: 1, title: 'RBB Level 4 Pre-Test Mock', category: 'RBB', subject: 'Banking', questions: 50, time: 45, level: 'Medium' },
    { id: 2, title: 'NRB Assistant Level IT Quiz', category: 'NRB', subject: 'IT', questions: 20, time: 15, level: 'Hard' },
    { id: 3, title: 'Loksewa Kharidar GK', category: 'Loksewa', subject: 'GK', questions: 30, time: 25, level: 'Easy' },
    { id: 4, title: 'Commercial Bank Management', category: 'Commercial', subject: 'Management', questions: 40, time: 35, level: 'Medium' },
    { id: 5, title: 'Accounting Basics for Banking', category: 'All', subject: 'Accounting', questions: 25, time: 20, level: 'Easy' },
    { id: 6, title: 'Economics & Finance Advanced', category: 'NRB', subject: 'Economics', questions: 35, time: 30, level: 'Hard' },
    { id: 7, title: 'Microfinance Fundamentals', category: 'Microfinance', subject: 'Banking', questions: 30, time: 25, level: 'Medium' },
    { id: 8, title: 'Development Banks Regulations', category: 'Development', subject: 'Law', questions: 25, time: 20, level: 'Hard' },
    { id: 9, title: 'Loksewa Nayab Subba Model', category: 'Loksewa', subject: 'General Knowledge', questions: 50, time: 45, level: 'Medium' },
    { id: 10, title: 'Microfinance Credit Management', category: 'Microfinance', subject: 'Finance', questions: 20, time: 15, level: 'Easy' },
  ];

  const tabs = [
    { id: 'all', label: 'सबै (All)' },
    { id: 'rbb', label: 'RBB' },
    { id: 'nrb', label: 'NRB' },
    { id: 'commercial', label: 'वाणिज्य (Commercial)' },
    { id: 'development', label: 'विकास (Development)' },
    { id: 'microfinance', label: 'लघुवित्त (Microfinance)' },
    { id: 'loksewa', label: 'लोकसेवा (Loksewa)' }
  ];

  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesTab = activeTab === 'all' || quiz.category.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          quiz.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header & Search */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">क्विज अभ्यास (Quiz Practice)</h1>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="क्विज खोज्नुहोस् (Search quizzes...)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors">
            <Filter size={20} />
            फिल्टर (Filter)
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
        <div className="flex gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quiz Grid */}
      {filteredQuizzes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz, i) => (
            <motion.div
              key={quiz.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col h-full"
          >
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                  {quiz.category}
                </span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  quiz.level === 'Easy' ? 'bg-emerald-50 text-emerald-700' :
                  quiz.level === 'Medium' ? 'bg-amber-50 text-amber-700' :
                  'bg-rose-50 text-rose-700'
                }`}>
                  {quiz.level}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                {quiz.title}
              </h3>
              <p className="text-sm text-slate-500 mb-6 flex items-center gap-1">
                <BookOpen size={14} /> {quiz.subject}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 p-3 rounded-xl">
                  <BookOpen size={18} className="text-blue-500" />
                  <div>
                    <div className="text-xs text-slate-400">प्रश्न (Qs)</div>
                    <div className="font-bold text-slate-900">{quiz.questions}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 p-3 rounded-xl">
                  <Clock size={18} className="text-amber-500" />
                  <div>
                    <div className="text-xs text-slate-400">समय (Time)</div>
                    <div className="font-bold text-slate-900">{quiz.time}m</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-100 bg-slate-50">
              <Link 
                to={`/quiz/${quiz.id}`}
                className="flex items-center justify-center w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors gap-2"
              >
                <PlayCircle size={20} />
                सुरु गर्नुहोस् (Start)
              </Link>
            </div>
          </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
          <BookOpen className="mx-auto h-12 w-12 text-slate-300 mb-4" />
          <h3 className="text-lg font-medium text-slate-900 mb-2">कुनै क्विज भेटिएन (No quizzes found)</h3>
          <p className="text-slate-500">कृपया अर्को श्रेणी छान्नुहोस् वा खोज्ने शब्द परिवर्तन गर्नुहोस्।</p>
        </div>
      )}
    </div>
  );
}
