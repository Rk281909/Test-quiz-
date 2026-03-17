import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, Eye, FileText, Calendar, Building2 } from 'lucide-react';

export function PastPapers() {
  const [activeBank, setActiveBank] = useState('all');

  const dummyPdf = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  
  const papers = [
    { id: 1, title: 'नेपाल बैंक लिमिटेड, चौथो तह (सहायक)', bank: 'NBL', year: '२०८२', subject: 'Management and Service Related', type: 'Internal', size: '2.4 MB', fileUrl: dummyPdf },
    { id: 2, title: 'राष्ट्रिय वाणिज्य बैंक, पाँचौ तह (वरिष्ठ सहायक)', bank: 'RBB', year: '२०८१', subject: 'Banking, Accounting & IT', type: 'Open', size: '3.1 MB', fileUrl: dummyPdf },
    { id: 3, title: 'नेपाल राष्ट्र बैंक, सहायक द्वितीय', bank: 'NRB', year: '२०८०', subject: 'Economics & Banking', type: 'Open', size: '1.8 MB', fileUrl: dummyPdf },
    { id: 4, title: 'कृषि विकास बैंक, लेखापाल', bank: 'ADBL', year: '२०८१', subject: 'Accounting & Management', type: 'Internal', size: '2.0 MB', fileUrl: dummyPdf },
    { id: 5, title: 'लोकसेवा आयोग, खरिदार', bank: 'Loksewa', year: '२०८०', subject: 'General Knowledge & IQ', type: 'Open', size: '4.5 MB', fileUrl: dummyPdf },
    { id: 6, title: 'नेपाल बैंक लिमिटेड, तेस्रो तह (कनिष्ठ सहायक)', bank: 'NBL', year: '२०७९', subject: 'Banking & Customer Service', type: 'Open', size: '1.5 MB', fileUrl: dummyPdf },
    { id: 7, title: 'लोकसेवा आयोग, नायब सुब्बा', bank: 'Loksewa', year: '२०८१', subject: 'Administration', type: 'Open', size: '3.2 MB', fileUrl: dummyPdf },
    { id: 8, title: 'राष्ट्रिय वाणिज्य बैंक, लेखापाल', bank: 'RBB', year: '२०८०', subject: 'Accounting', type: 'Open', size: '2.8 MB', fileUrl: dummyPdf },
  ];

  return (
    <div className="space-y-8">
      {/* Header & Search */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">पुराना प्रश्नपत्र (Past Papers)</h1>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="प्रश्नपत्र खोज्नुहोस् (Search past papers...)" 
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Bank Filter Tabs */}
      <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
        <div className="flex gap-2">
          {['सबै (All)', 'NBL', 'RBB', 'NRB', 'ADBL', 'Loksewa'].map((bank, i) => {
            const tabKey = bank.split(' ')[0];
            const isActive = activeBank === tabKey || (i === 0 && activeBank === 'all');
            return (
              <button
                key={i}
                onClick={() => setActiveBank(i === 0 ? 'all' : tabKey)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {bank}
              </button>
            );
          })}
        </div>
      </div>

      {/* Papers List */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-100">
          {papers.map((paper, i) => (
            <motion.div 
              key={paper.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-4 sm:p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row gap-4 sm:items-center justify-between group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {paper.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Building2 size={14} /> {paper.bank}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {paper.year}
                    </span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded-md text-xs font-medium text-slate-600">
                      {paper.type}
                    </span>
                    <span className="text-slate-400">{paper.subject}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:ml-auto pl-16 sm:pl-0">
                <a 
                  href={paper.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-medium rounded-lg transition-all"
                >
                  <Eye size={18} />
                  <span className="hidden sm:inline">हेर्नुहोस्</span>
                </a>
                <a 
                  href={paper.fileUrl}
                  download={`PastPaper_${paper.bank}_${paper.year}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm shadow-blue-600/20"
                >
                  <Download size={18} />
                  <span className="hidden sm:inline">डाउनलोड</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
