import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, XCircle, AlertCircle, ArrowRight, ArrowLeft, Flag, Trophy } from 'lucide-react';
import { getQuestionsForQuiz } from '../data/questionBank';
import { quizzes } from '../data/quizList';

export function QuizPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the quiz details
  const quizId = parseInt(id || '1');
  const quiz = quizzes.find(q => q.id === quizId) || quizzes[0];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(quiz.time * 60);

  // Use the imported questions generator
  const questions = useMemo(() => {
    return getQuestionsForQuiz(quizId, quiz.questions, quiz.category);
  }, [quizId, quiz.questions, quiz.category]);

  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted]);

  const handleSelect = (optionIndex: number) => {
    if (selectedAnswers[currentQuestion] !== undefined || isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQuestion]: optionIndex }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const score = Object.entries(selectedAnswers).reduce((acc, [qIndex, ansIndex]) => {
    return acc + (questions[parseInt(qIndex)].correctAnswer === ansIndex ? 1 : 0);
  }, 0);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-100 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 sticky top-20 z-40">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
            title="Back"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-xl font-bold text-slate-900">{quiz.title}</h1>
            <p className="text-sm text-slate-500">प्रश्न {currentQuestion + 1} / {questions.length}</p>
          </div>
        </div>
        
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-lg ${
          timeLeft < 60 ? 'bg-rose-100 text-rose-600 animate-pulse' : 'bg-blue-50 text-blue-700'
        }`}>
          <Clock size={20} />
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2 rounded-full mb-8 overflow-hidden">
        <div 
          className="bg-blue-600 h-full transition-all duration-300 ease-out"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 leading-relaxed">
            <span className="text-blue-600 mr-2">{currentQuestion + 1}.</span>
            {questions[currentQuestion].text}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => {
              const hasAnswered = selectedAnswers[currentQuestion] !== undefined;
              const isSelected = selectedAnswers[currentQuestion] === index;
              const isCorrect = questions[currentQuestion].correctAnswer === index;
              
              let optionClass = "border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700";
              
              if (hasAnswered) {
                if (isCorrect) {
                  optionClass = "border-emerald-500 bg-emerald-50 text-emerald-800";
                } else if (isSelected && !isCorrect) {
                  optionClass = "border-rose-500 bg-rose-50 text-rose-800";
                } else {
                  optionClass = "border-slate-200 opacity-50";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  disabled={hasAnswered}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-4 ${optionClass}`}
                >
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 font-bold text-sm ${
                    hasAnswered && isCorrect ? 'bg-emerald-500 border-emerald-500 text-white' :
                    hasAnswered && isSelected && !isCorrect ? 'bg-rose-500 border-rose-500 text-white' :
                    'border-slate-300 text-slate-500'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-base sm:text-lg pt-0.5">{option}</span>
                  
                  {hasAnswered && isCorrect && <CheckCircle className="ml-auto text-emerald-500 shrink-0" />}
                  {hasAnswered && isSelected && !isCorrect && <XCircle className="ml-auto text-rose-500 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {selectedAnswers[currentQuestion] !== undefined && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100"
            >
              <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                <AlertCircle size={20} />
                व्याख्या (Explanation)
              </h3>
              <p className="text-blue-800 leading-relaxed">
                {questions[currentQuestion].explanation}
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <button
          onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
          disabled={currentQuestion === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft size={20} />
          अघिल्लो (Prev)
        </button>

        {currentQuestion === questions.length - 1 ? (
          <button
            onClick={() => setIsSubmitted(true)}
            disabled={selectedAnswers[currentQuestion] === undefined}
            className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-emerald-600/20"
          >
            समाप्त (Finish)
            <Flag size={20} />
          </button>
        ) : (
          <button
            onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
            disabled={selectedAnswers[currentQuestion] === undefined}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-blue-600/20"
          >
            अर्को (Next)
            <ArrowRight size={20} />
          </button>
        )}
      </div>

      {/* Results Modal */}
      <AnimatePresence>
        {isSubmitted && currentQuestion === questions.length - 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center"
            >
              <div className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy size={48} />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">नतिजा (Result)</h2>
              <p className="text-slate-500 mb-8">तपाईंले क्विज सफलतापूर्वक सम्पन्न गर्नुभयो!</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="text-sm text-slate-500 mb-1">प्राप्तांक (Score)</div>
                  <div className="text-3xl font-bold text-blue-600">{score}/{questions.length}</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="text-sm text-slate-500 mb-1">प्रतिशत (Percent)</div>
                  <div className="text-3xl font-bold text-emerald-600">{Math.round((score / questions.length) * 100)}%</div>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setSelectedAnswers({});
                    setCurrentQuestion(0);
                    setTimeLeft(600);
                  }}
                  className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors"
                >
                  फेरि खेल्नुहोस् (Retry)
                </button>
                <button 
                  onClick={() => navigate('/quizzes')}
                  className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-600/20"
                >
                  अन्य क्विज (More)
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
