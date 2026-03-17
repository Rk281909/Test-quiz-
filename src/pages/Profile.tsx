import { motion } from 'framer-motion';
import { User, Mail, MapPin, Globe, BookOpen, Trophy, Target, Clock, Award, Settings, Edit3 } from 'lucide-react';

export function Profile() {
  const stats = [
    { label: 'जम्मा क्विज (Total Quizzes)', value: '145', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'प्राप्तांक (Total Points)', value: '12,500', icon: Trophy, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'शुद्धता (Accuracy)', value: '92%', icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'समय बिताएको (Time Spent)', value: '48h', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const recentActivity = [
    { title: 'RBB Level 4 Pre-Test Mock', score: '45/50', date: 'आज (Today)', time: '10:30 AM' },
    { title: 'NRB Assistant Level IT Quiz', score: '18/20', date: 'हिजो (Yesterday)', time: '02:15 PM' },
    { title: 'Loksewa Kharidar GK', score: '28/30', date: '२ दिन अघि (2 days ago)', time: '09:00 AM' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden relative">
        <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700 relative">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/nepal/1920/1080?blur=4')] opacity-20 mix-blend-overlay"></div>
          <button className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors">
            <Settings size={20} />
          </button>
        </div>
        
        <div className="px-6 sm:px-12 pb-8 sm:pb-12 relative">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-20 sm:-mt-24 mb-6">
            <div className="relative group">
              <img 
                src="https://i.pravatar.cc/150?u=1" 
                alt="Profile" 
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-xl bg-white object-cover"
              />
              <button className="absolute bottom-2 right-2 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors opacity-0 group-hover:opacity-100">
                <Edit3 size={16} />
              </button>
            </div>
            
            <div className="text-center sm:text-left flex-1 pb-2">
              <h1 className="text-3xl font-extrabold text-slate-900 mb-1">RAKESH KURMI</h1>
              <p className="text-slate-500 font-medium flex items-center justify-center sm:justify-start gap-2">
                <Award size={16} className="text-amber-500" />
                वरिष्ठ विद्यार्थी (Senior Student)
              </p>
            </div>
            
            <div className="flex gap-3 pb-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold rounded-xl transition-colors">
                <Edit3 size={18} />
                सम्पादन (Edit)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-4 text-slate-700">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-blue-600">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium mb-0.5">इमेल (Email)</div>
                <div className="font-bold">rakeshkurmi479@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-700">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-emerald-600">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium mb-0.5">ठेगाना (Address)</div>
                <div className="font-bold">suddhodhan-3 kapilvastu Nepal</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-700">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-purple-600">
                <Globe size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium mb-0.5">वेबसाइट (Website)</div>
                <a href="https://kurmirk.carrd.co" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:underline">kurmirk.carrd.co</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stats Grid */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon size={28} />
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Clock className="text-blue-600" size={24} />
            हालको गतिविधि (Recent Activity)
          </h2>
          
          <div className="space-y-6">
            {recentActivity.map((activity, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-6 border-l-2 border-slate-100 pb-6 last:pb-0 last:border-transparent"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-600"></div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:bg-blue-50 hover:border-blue-100 transition-colors group">
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{activity.title}</h3>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                    <span className="font-bold text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-lg">
                      स्कोर: {activity.score}
                    </span>
                    <span className="text-slate-500 font-medium flex items-center gap-1">
                      <Clock size={14} /> {activity.date}, {activity.time}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-3 text-sm font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
            सबै हेर्नुहोस् (View All)
          </button>
        </div>
      </div>
    </div>
  );
}
