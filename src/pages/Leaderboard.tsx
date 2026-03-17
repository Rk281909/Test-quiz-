import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, TrendingUp, Search } from 'lucide-react';

export function Leaderboard() {
  const [timeframe, setTimeframe] = useState('weekly');

  const leaders = [
    { rank: 1, name: 'Ramesh Sharma', points: 12500, quizzes: 145, accuracy: '92%', avatar: 'https://i.pravatar.cc/150?u=1' },
    { rank: 2, name: 'Sita Thapa', points: 11200, quizzes: 130, accuracy: '89%', avatar: 'https://i.pravatar.cc/150?u=2' },
    { rank: 3, name: 'Hari Bahadur', points: 10800, quizzes: 125, accuracy: '88%', avatar: 'https://i.pravatar.cc/150?u=3' },
    { rank: 4, name: 'Gita Karki', points: 9500, quizzes: 110, accuracy: '85%', avatar: 'https://i.pravatar.cc/150?u=4' },
    { rank: 5, name: 'Bikash Nepal', points: 8900, quizzes: 105, accuracy: '84%', avatar: 'https://i.pravatar.cc/150?u=5' },
    { rank: 6, name: 'Anu Shrestha', points: 8200, quizzes: 95, accuracy: '82%', avatar: 'https://i.pravatar.cc/150?u=6' },
    { rank: 7, name: 'Ram Prasad', points: 7800, quizzes: 90, accuracy: '80%', avatar: 'https://i.pravatar.cc/150?u=7' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 sm:p-12 rounded-3xl shadow-xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white rounded-full blur-3xl opacity-10"></div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 flex items-center justify-center sm:justify-start gap-3">
              <Trophy className="text-amber-400" size={40} />
              लिडरबोर्ड (Leaderboard)
            </h1>
            <p className="text-blue-100 text-lg max-w-xl">
              उत्कृष्ट नतिजा ल्याउने विद्यार्थीहरूको सूची। निरन्तर अभ्यास गर्नुहोस् र शीर्ष स्थानमा पर्नुहोस्!
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center min-w-[200px]">
            <div className="text-sm text-blue-100 mb-1 font-medium">तपाईंको र्याङ्क (Your Rank)</div>
            <div className="text-4xl font-black text-amber-400 mb-2">#४२</div>
            <div className="text-sm text-white flex items-center justify-center gap-1">
              <TrendingUp size={16} className="text-emerald-400" />
              +५ स्थान माथि
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
          {['daily', 'weekly', 'monthly', 'allTime'].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                timeframe === tf 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tf === 'daily' ? 'दैनिक' : tf === 'weekly' ? 'साप्ताहिक' : tf === 'monthly' ? 'मासिक' : 'सबै समय'}
            </button>
          ))}
        </div>
        
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="नाम खोज्नुहोस्..." 
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="hidden sm:grid grid-cols-12 gap-4 p-6 bg-slate-50 border-b border-slate-100 text-sm font-bold text-slate-500 uppercase tracking-wider">
          <div className="col-span-1 text-center">र्याङ्क</div>
          <div className="col-span-5">विद्यार्थीको नाम</div>
          <div className="col-span-2 text-center">अंक (Points)</div>
          <div className="col-span-2 text-center">क्विज (Quizzes)</div>
          <div className="col-span-2 text-center">शुद्धता (Accuracy)</div>
        </div>
        
        <div className="divide-y divide-slate-100">
          {leaders.map((leader, i) => (
            <motion.div 
              key={leader.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 sm:p-6 items-center transition-colors hover:bg-slate-50 ${
                leader.rank <= 3 ? 'bg-amber-50/30' : ''
              }`}
            >
              {/* Rank */}
              <div className="col-span-1 flex justify-center items-center">
                {leader.rank === 1 ? (
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shadow-sm border border-amber-200">
                    <Trophy size={20} />
                  </div>
                ) : leader.rank === 2 ? (
                  <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shadow-sm border border-slate-300">
                    <Medal size={20} />
                  </div>
                ) : leader.rank === 3 ? (
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shadow-sm border border-orange-200">
                    <Medal size={20} />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold">
                    #{leader.rank}
                  </div>
                )}
              </div>

              {/* Name & Avatar */}
              <div className="col-span-5 flex items-center gap-4 justify-center sm:justify-start">
                <img src={leader.avatar} alt={leader.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <div className="font-bold text-slate-900 text-lg">{leader.name}</div>
                  <div className="text-xs text-slate-500 sm:hidden flex items-center gap-2 mt-1">
                    <span className="flex items-center gap-1"><Star size={12} className="text-amber-400" /> {leader.points} pts</span>
                    <span>• {leader.quizzes} quizzes</span>
                  </div>
                </div>
              </div>

              {/* Desktop Stats */}
              <div className="col-span-2 hidden sm:flex justify-center items-center font-bold text-blue-600 text-lg">
                {leader.points.toLocaleString()}
              </div>
              <div className="col-span-2 hidden sm:flex justify-center items-center text-slate-600 font-medium">
                {leader.quizzes}
              </div>
              <div className="col-span-2 hidden sm:flex justify-center items-center">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">
                  {leader.accuracy}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
