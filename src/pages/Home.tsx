import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Trophy, Clock, Target, Users, PlayCircle, Award } from 'lucide-react';

export function Home() {
  const categories = [
    { name: 'राष्ट्रिय वाणिज्य बैंक (RBB)', count: 1200, icon: BookOpen, color: 'bg-blue-100 text-blue-600' },
    { name: 'नेपाल राष्ट्र बैंक (NRB)', count: 850, icon: Target, color: 'bg-emerald-100 text-emerald-600' },
    { name: 'वाणिज्य बैंकहरु (Commercial Banks)', count: 1500, icon: Users, color: 'bg-purple-100 text-purple-600' },
    { name: 'विकास बैंकहरु (Development Banks)', count: 600, icon: Award, color: 'bg-amber-100 text-amber-600' },
    { name: 'लघुवित्त (Microfinance)', count: 450, icon: Target, color: 'bg-rose-100 text-rose-600' },
    { name: 'लोकसेवा (Loksewa)', count: 2000, icon: BookOpen, color: 'bg-indigo-100 text-indigo-600' },
  ];

  const subjects = [
    { name: 'बैंकिङ तथा वित्त (Banking & Finance)', query: 'Banking' },
    { name: 'कार्यालय व्यवस्थापन (Office Management)', query: 'Management' },
    { name: 'मानव संसाधन व्यवस्थापन (HRM)', query: 'HRM' },
    { name: 'ग्राहक सेवा (Customer Service)', query: 'Customer Service' },
    { name: 'लेखा (Accounting)', query: 'Accounting' },
    { name: 'अर्थशास्त्र (Economics)', query: 'Economics' },
    { name: 'संस्थागत सुशासन (Corporate Governance)', query: 'Governance' },
    { name: 'बैंकिङमा सूचना प्रविधि (IT in Banking)', query: 'IT' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/nepal/1920/1080?blur=4')] opacity-20 mix-blend-overlay"></div>
        <div className="relative px-6 py-16 sm:px-12 sm:py-24 lg:px-16 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
              नेपाल बैंकिङ तथा <br className="hidden sm:block" />
              <span className="text-amber-400">लोकसेवा तयारी</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0"
            >
              Rakesh Banking Knowledge मा स्वागत छ। उत्कृष्ट MCQ क्विज, पुराना प्रश्नपत्र र नमुना परीक्षाहरूको साथ आफ्नो तयारीलाई मजबुत बनाउनुहोस्।
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/quizzes" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-blue-700 bg-white hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
                <PlayCircle className="mr-2 h-5 w-5" />
                क्विज सुरु गर्नुहोस् (Start Quiz)
              </Link>
              <Link to="/past-papers" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-blue-600/40 hover:bg-blue-600/60 backdrop-blur-sm border border-blue-400/30 transition-colors">
                <FileText className="mr-2 h-5 w-5" />
                पुराना प्रश्नपत्र (Past Papers)
              </Link>
            </motion.div>
          </div>
          
          {/* Unlimited Practice Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Target className="text-amber-400" />
                असीमित अभ्यास (Unlimited Practice)
              </h3>
              <span className="bg-emerald-400 text-emerald-900 text-xs font-bold px-2 py-1 rounded-full">Free</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-blue-100">प्रश्न संख्या (Questions)</span>
                <span className="font-bold">असीमित (Unlimited)</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-blue-100">समय (Time)</span>
                <span className="font-bold">कुनै सीमा छैन (No Limit)</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-blue-100">पहुँच (Access)</span>
                <span className="font-bold text-amber-400">२४/७ (24/7)</span>
              </div>
            </div>
            <Link to="/quizzes" className="block w-full py-3 px-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white text-center font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/25">
              अहिले खेल्नुहोस् (Play Now)
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: 'जम्मा प्रश्न (Total Qs)', value: '10,000+', icon: BookOpen },
          { label: 'पुराना प्रश्नपत्र (Past Papers)', value: '50+', icon: FileText },
          { label: 'सक्रिय विद्यार्थी (Students)', value: '5,000+', icon: Users },
          { label: 'असीमित क्विज (Unlimited Quiz)', value: '24/7', icon: Clock },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                <Icon size={24} />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 mt-1">{stat.label}</div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Categories Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">बैंक अनुसार तयारी (Bank Wise)</h2>
          <Link to="/quizzes" className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
            सबै हेर्नुहोस् (View All) <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/quizzes?category=${category.name}`} className="group block bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${category.color}`}>
                      <Icon size={24} />
                    </div>
                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      {category.count} Qs
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{category.name}</h3>
                  <p className="text-sm text-slate-500">तयारी सुरु गर्नुहोस् (Start Prep)</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Subjects Section */}
      <section className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>
        
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">विषयगत तयारी (Subject Wise)</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {subjects.map((subject, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/quizzes?subject=${subject.query}`} className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm sm:text-base font-medium transition-colors backdrop-blur-sm">
                  {subject.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
