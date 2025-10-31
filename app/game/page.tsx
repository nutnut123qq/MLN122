'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, ArrowLeft, CheckCircle, XCircle, Trophy, RotateCcw, Star } from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Kinh tế thị trường định hướng xã hội chủ nghĩa hướng tới mục tiêu nào?',
    options: [
      'Chỉ tăng trưởng kinh tế nhanh',
      'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh',
      'Phát triển công nghiệp hiện đại',
      'Tăng GDP cao nhất',
    ],
    correctAnswer: 1,
    explanation: 'Mục tiêu của kinh tế thị trường ĐHXHCN là toàn diện: dân giàu, nước mạnh, dân chủ, công bằng, văn minh.',
  },
  {
    id: 2,
    question: 'Trong nền kinh tế thị trường ĐHXHCN, thành phần kinh tế nào giữ vai trò chủ đạo?',
    options: [
      'Kinh tế tư nhân',
      'Kinh tế nhà nước',
      'Kinh tế có vốn đầu tư nước ngoài',
      'Kinh tế hộ gia đình',
    ],
    correctAnswer: 1,
    explanation: 'Kinh tế nhà nước giữ vai trò chủ đạo, còn kinh tế tư nhân là động lực quan trọng của nền kinh tế.',
  },
  {
    id: 3,
    question: 'Phát triển kinh tế thị trường ĐHXHCN ở Việt Nam là tất yếu bởi lý do nào?',
    options: [
      'Chỉ vì xu hướng toàn cầu hóa',
      'Do sự áp đặt từ bên ngoài',
      'Phù hợp xu hướng phát triển, ưu việt trong thúc đẩy phát triển, đáp ứng nguyện vọng nhân dân',
      'Chỉ để thu hút đầu tư nước ngoài',
    ],
    correctAnswer: 2,
    explanation: 'Có 3 lý do cơ bản: phù hợp xu hướng phát triển, ưu việt trong thúc đẩy phát triển, và đáp ứng nguyện vọng nhân dân.',
  },
  {
    id: 4,
    question: 'Nhà nước quản lý nền kinh tế thị trường ĐHXHCN thông qua:',
    options: [
      'Chỉ bằng mệnh lệnh hành chính',
      'Pháp luật, chiến lược, kế hoạch, quy hoạch và các công cụ kinh tế',
      'Chỉ dựa vào thị trường tự điều tiết',
      'Bằng sự can thiệp trực tiếp vào mọi hoạt động',
    ],
    correctAnswer: 1,
    explanation: 'Nhà nước quản lý nền kinh tế thông qua pháp luật, các chiến lược, kế hoạch, quy hoạch và cơ chế chính sách.',
  },
  {
    id: 5,
    question: 'Trong phân phối, kinh tế thị trường ĐHXHCN thực hiện theo nguyên tắc nào?',
    options: [
      'Chỉ phân phối bình quân',
      'Chỉ theo kết quả lao động',
      'Theo kết quả lao động, hiệu quả kinh tế, đóng góp vốn và thông qua an sinh xã hội',
      'Hoàn toàn theo cơ chế thị trường',
    ],
    correctAnswer: 2,
    explanation: 'Phân phối chủ yếu theo kết quả lao động, hiệu quả kinh tế, mức đóng góp vốn và các nguồn lực khác, cùng hệ thống an sinh xã hội.',
  },
  {
    id: 6,
    question: 'Đặc trưng quan trọng của kinh tế thị trường ĐHXHCN về tăng trưởng và công bằng là:',
    options: [
      'Chỉ tập trung vào tăng trưởng kinh tế',
      'Gắn tăng trưởng kinh tế với công bằng xã hội ngay trong từng chính sách',
      'Tăng trưởng trước, công bằng sau',
      'Công bằng tuyệt đối cho mọi người',
    ],
    correctAnswer: 1,
    explanation: 'Gắn tăng trưởng kinh tế với công bằng xã hội; thực hiện tiến bộ và công bằng xã hội ngay trong từng chính sách, từng giai đoạn phát triển.',
  },
  {
    id: 7,
    question: 'Thể chế kinh tế thị trường ĐHXHCN là gì?',
    options: [
      'Chỉ là hệ thống pháp luật',
      'Hệ thống đường lối, luật pháp, chính sách điều chỉnh hoạt động kinh tế',
      'Chỉ là cơ chế thị trường',
      'Chỉ là quy định của nhà nước',
    ],
    correctAnswer: 1,
    explanation: 'Là hệ thống đường lối, chủ trương, luật pháp, chính sách quy định xác lập cơ chế vận hành, điều chỉnh các hoạt động kinh tế.',
  },
  {
    id: 8,
    question: 'Quan hệ lợi ích trong kinh tế thị trường ĐHXHCN cần được giải quyết theo nguyên tắc:',
    options: [
      'Lợi ích cá nhân trên hết',
      'Lợi ích quốc gia trên hết',
      'Hài hòa lợi ích cá nhân, tập thể, quốc gia và nhân loại',
      'Chỉ quan tâm lợi ích kinh tế',
    ],
    correctAnswer: 2,
    explanation: 'Cần bảo đảm hài hòa các quan hệ lợi ích: cá nhân gắn với tập thể và quốc gia, trước mắt gắn với lâu dài.',
  },
  {
    id: 9,
    question: 'Đảng Cộng sản Việt Nam bắt đầu đổi mới và phát triển kinh tế thị trường từ năm nào?',
    options: [
      '1975',
      '1986',
      '1990',
      '2000',
    ],
    correctAnswer: 1,
    explanation: 'Năm 1986 là mốc khởi đầu của công cuộc đổi mới, khi Đại hội VI của Đảng quyết định chuyển sang cơ chế thị trường.',
  },
  {
    id: 10,
    question: 'Một trong những hạn chế cần khắc phục trong hoàn thiện thể chế là:',
    options: [
      'Có quá nhiều luật pháp',
      'Quy định pháp luật còn chồng chéo, mâu thuẫn, thiếu ổn định',
      'Nhà nước can thiệp quá ít',
      'Không có vấn đề gì cần khắc phục',
    ],
    correctAnswer: 1,
    explanation: 'Một số quy định pháp luật còn chồng chéo, mâu thuẫn, thiếu ổn định là hạn chế cần khắc phục trong hoàn thiện thể chế.',
  },
];

function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shuffleQuestions(baseQuestions: Question[]): Question[] {
  return shuffleArray(baseQuestions).map((q) => {
    const optionIndices = q.options.map((_, idx) => idx);
    const shuffledIndices = shuffleArray(optionIndices);
    const shuffledOptions = shuffledIndices.map((idx) => q.options[idx]);
    const newCorrectIndex = shuffledIndices.indexOf(q.correctAnswer);
    return {
      ...q,
      options: shuffledOptions,
      correctAnswer: newCorrectIndex,
    };
  });
}

export default function Game() {
  // Initialize deterministically to avoid hydration mismatch; shuffle after mount
  const [quizQuestions, setQuizQuestions] = useState<Question[]>(questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeScore, setTimeScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizQuestions.length).fill(false));
  const QUESTION_TIME_LIMIT = 20;
  const [timeRemaining, setTimeRemaining] = useState(QUESTION_TIME_LIMIT);

  // Shuffle once on the client after mount to avoid SSR/client mismatch
  useEffect(() => {
    setQuizQuestions(shuffleQuestions(questions));
  }, []);

  useEffect(() => {
    if (quizCompleted) return;
    if (selectedAnswer !== null) return;

    const timerId = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerId);
          setShowResult(true);
          setAnsweredQuestions((prevArr) => {
            const updated = [...prevArr];
            updated[currentQuestion] = true;
            return updated;
          });
          // Auto-advance after a short delay to show the explanation
          setTimeout(() => {
            if (currentQuestion < quizQuestions.length - 1) {
              setCurrentQuestion(currentQuestion + 1);
              setSelectedAnswer(null);
              setShowResult(false);
              setTimeRemaining(QUESTION_TIME_LIMIT);
            } else {
              setQuizCompleted(true);
            }
          }, 1200);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [currentQuestion, selectedAnswer, quizCompleted, quizQuestions.length]);

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answerIndex);
      setShowResult(true);
      setTimeRemaining((prev) => prev); // freeze display
      
      setAnsweredQuestions((prevArr) => {
        const updated = [...prevArr];
        updated[currentQuestion] = true;
        return updated;
      });

      if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
        setScore(score + 1);
        setTimeScore((prev) => prev + timeRemaining);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeRemaining(QUESTION_TIME_LIMIT);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    const reshuffled = shuffleQuestions(questions);
    setQuizQuestions(reshuffled);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    setAnsweredQuestions(new Array(reshuffled.length).fill(false));
    setTimeRemaining(QUESTION_TIME_LIMIT);
    setTimeScore(0);
  };

  const currentQ = quizQuestions[currentQuestion];
  const percentage = Math.round((score / quizQuestions.length) * 100);

  useEffect(() => {
    if (!quizCompleted) return;
    try {
      const newResult = {
        timestamp: Date.now(),
        correctCount: score,
        totalQuestions: quizQuestions.length,
        percentage,
        timeScore,
      };
      const existingRaw = localStorage.getItem('quizResults');
      const existing: typeof newResult[] = existingRaw ? JSON.parse(existingRaw) : [];
      existing.push(newResult);
      localStorage.setItem('quizResults', JSON.stringify(existing));
    } catch {}
  }, [quizCompleted, score, quizQuestions.length, percentage, timeScore]);

  return (
    <div suppressHydrationWarning className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link href="/">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-gray-600 hover:text-orange-600 mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </motion.button>
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                Trò Chơi Kiến Thức
              </h1>
              <p className="text-gray-600 mt-1">
                Kiểm tra kiến thức về kinh tế thị trường ĐHXHCN
              </p>
            </div>
          </div>
        </motion.div>

        {!quizCompleted ? (
          <>
            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-2xl p-6 mb-8"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-gray-600">
                  Câu hỏi {currentQuestion + 1}/{quizQuestions.length}
                </span>
                <span className="text-sm font-semibold text-blue-600">Điểm: {score}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                <span>Thời gian còn lại</span>
                <span className={`font-semibold ${timeRemaining <= 5 ? 'text-red-600' : 'text-gray-800'}`}>{timeRemaining}s</span>
              </div>
            </motion.div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="glass-effect rounded-2xl p-8 mb-8"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  {currentQ.question}
                </h2>

                <div className="space-y-4">
                  {currentQ.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === currentQ.correctAnswer;
                    const showCorrect = showResult && isCorrect;
                    const showIncorrect = showResult && isSelected && !isCorrect;

                    return (
                      <motion.button
                        key={index}
                        whileHover={selectedAnswer === null ? { scale: 1.02, x: 5 } : {}}
                        whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                        onClick={() => handleAnswerClick(index)}
                        disabled={selectedAnswer !== null}
                        className={`w-full p-5 rounded-xl text-left transition-all flex items-center gap-4 ${
                          showCorrect
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                            : showIncorrect
                            ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg'
                            : selectedAnswer === null
                            ? 'bg-gradient-to-r from-gray-50 to-orange-50 hover:shadow-md border-2 border-transparent hover:border-orange-300'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold ${
                          showCorrect || showIncorrect
                            ? 'bg-white/20'
                            : 'bg-gradient-to-br from-blue-500 to-purple-500 text-white'
                        }`}>
                          {showCorrect ? (
                            <CheckCircle size={24} />
                          ) : showIncorrect ? (
                            <XCircle size={24} />
                          ) : (
                            String.fromCharCode(65 + index)
                          )}
                        </div>
                        <span className={`flex-1 ${showCorrect || showIncorrect ? 'font-semibold' : ''}`}>
                          {option}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`mt-6 p-6 rounded-xl ${
                        selectedAnswer === currentQ.correctAnswer
                          ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200'
                          : 'bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {selectedAnswer === currentQ.correctAnswer ? (
                          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        )}
                        <div>
                          <h3 className={`font-bold mb-2 ${
                            selectedAnswer === currentQ.correctAnswer ? 'text-green-800' : 'text-red-800'
                          }`}>
                            {selectedAnswer === currentQ.correctAnswer ? 'Chính xác!' : 'Chưa đúng!'}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {currentQ.explanation}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>

            {/* Next Button */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-end"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextQuestion}
                  className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  {currentQuestion < quizQuestions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                  <ArrowLeft className="rotate-180" size={20} />
                </motion.button>
              </motion.div>
            )}
          </>
        ) : (
          /* Results Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-effect rounded-2xl p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
            >
              <Trophy className="w-16 h-16 text-white" />
            </motion.div>

            <h2 className="text-4xl font-bold mb-4 text-gradient">
              Hoàn thành!
            </h2>

            <div className="mb-8">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700 mb-2">
                {score}/{quizQuestions.length}
              </div>
              <p className="text-xl text-gray-600">Bạn đã trả lời đúng {percentage}% câu hỏi</p>
              <p className="mt-2 text-sm text-gray-500">Điểm thời gian: <span className="font-semibold text-gray-700">{timeScore}</span></p>
            </div>

            {/* Rating */}
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 ${
                    star <= Math.ceil((score / quizQuestions.length) * 5)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                {percentage >= 80
                  ? '🎉 Xuất sắc! Bạn đã nắm vững kiến thức về kinh tế thị trường ĐHXHCN!'
                  : percentage >= 60
                  ? '👍 Tốt lắm! Bạn đã hiểu khá tốt, hãy đọc lại một số phần để nắm vững hơn.'
                  : '💪 Hãy tiếp tục học tập! Đọc lại nội dung để hiểu sâu hơn nhé!'}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRestart}
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <RotateCcw size={20} />
                Chơi lại
              </motion.button>

              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-effect text-gray-700 rounded-xl font-semibold hover:shadow-xl transition-all"
                >
                  Về trang chủ
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
