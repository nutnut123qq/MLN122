'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowLeft, Send, Bot, User, Sparkles, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Xin chào! 👋 

Tôi là **trợ lý AI chuyên về Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam**.

Tôi có thể giúp bạn tìm hiểu về:
- 📖 Khái niệm và đặc trưng
- 🎯 Tính tất yếu khách quan
- 🏛️ Hoàn thiện thể chế
- 🤝 Quan hệ lợi ích

Hãy đặt câu hỏi cho tôi nhé!`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    const question = input.trim();
    setInput('');
    setIsLoading(true);

    try {
      // Gọi Python API (sử dụng env variable)
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.success ? data.response : 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.'
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error calling Python API:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Không thể kết nối với AI. Vui lòng kiểm tra Python API đang chạy tại http://localhost:5000'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    'Kinh tế thị trường ĐHXHCN là gì?',
    'Tại sao phải phát triển kinh tế thị trường ĐHXHCN?',
    'Đặc trưng của kinh tế thị trường ĐHXHCN?',
    'Vai trò của kinh tế nhà nước?'
  ];

  const handleSuggestionClick = (question: string) => {
    setInput(question);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-6 px-4 shadow-lg sticky top-0 z-10"
      >
        <div className="container mx-auto max-w-4xl">
          <Link href="/">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </motion.button>
          </Link>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                Chat với AI
                <Sparkles className="w-8 h-8" />
              </h1>
              <p className="text-white/90 mt-1">
                Trợ lý AI chuyên về Kinh tế thị trường ĐHXHCN
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto py-8 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto max-w-4xl space-y-6">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Bot size={20} />
                  </div>
                )}
                
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white'
                      : 'glass-effect'
                  }`}
                >
                  <div className="prose prose-sm max-w-none">
                    {message.content.split('\n').map((line, i) => {
                      // Render markdown-like formatting
                      if (line.startsWith('###')) {
                        return <h3 key={i} className="text-lg font-bold mt-4 mb-2 text-orange-700">{line.replace('###', '').trim()}</h3>;
                      }
                      if (line.startsWith('##')) {
                        return <h2 key={i} className="text-xl font-bold mt-4 mb-3 text-orange-700">{line.replace('##', '').trim()}</h2>;
                      }
                      if (line.startsWith('-')) {
                        return <li key={i} className="ml-4 text-gray-700">{line.replace('-', '').trim()}</li>;
                      }
                      if (line.match(/^[0-9]+\./)) {
                        return <li key={i} className="ml-4 text-gray-700 font-semibold">{line.replace(/^[0-9]+\./, '').trim()}</li>;
                      }
                      if (line.includes('**')) {
                        const parts = line.split('**');
                        return (
                          <p key={i} className={message.role === 'user' ? 'text-white' : 'text-gray-700'}>
                            {parts.map((part, j) => 
                              j % 2 === 1 ? <strong key={j} className="font-bold text-orange-600">{part}</strong> : part
                            )}
                          </p>
                        );
                      }
                      if (line.trim()) {
                        return <p key={i} className={message.role === 'user' ? 'text-white mb-2' : 'text-gray-700 mb-2'}>{line}</p>;
                      }
                      return <br key={i} />;
                    })}
                  </div>
                </div>

                {message.role === 'user' && (
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <User size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white">
                <Bot size={20} />
              </div>
              <div className="glass-effect rounded-2xl p-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggested Questions */}
      {messages.length <= 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 pb-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2 mb-3 text-gray-600">
              <BookOpen size={18} />
              <span className="font-semibold">Gợi ý câu hỏi:</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {suggestedQuestions.map((question, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSuggestionClick(question)}
                  className="text-left p-3 bg-white border-2 border-orange-200 rounded-xl hover:border-orange-400 hover:shadow-md transition-all text-gray-700 text-sm"
                >
                  💡 {question}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Input Box */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 shadow-lg px-4 py-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Nhập câu hỏi của bạn về kinh tế thị trường ĐHXHCN..."
                className="w-full px-5 py-4 pr-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 resize-none bg-white text-gray-800 placeholder-gray-400"
                rows={1}
                style={{ minHeight: '56px', maxHeight: '120px' }}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className={`px-6 py-4 rounded-xl font-semibold shadow-lg transition-all flex items-center gap-2 ${
                input.trim() && !isLoading
                  ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Send size={20} />
              <span className="hidden md:inline">Gửi</span>
            </motion.button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            AI chỉ trả lời câu hỏi về Kinh tế thị trường ĐHXHCN ở Việt Nam
          </p>
        </div>
      </div>
    </div>
  );
}
