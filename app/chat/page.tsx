'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowLeft, Send, Bot, User, Sparkles, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Khởi tạo Gemini AI
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

// System prompt với kiến thức đầy đủ từ readme.md
const SYSTEM_PROMPT = `Bạn là trợ lý AI chuyên về **Kinh tế thị trường định hướng Xã hội Chủ nghĩa ở Việt Nam**.

**QUY TẮC:**
1. ✅ CHỈ trả lời về kinh tế thị trường ĐHXHCN Việt Nam
2. ❌ TỪ CHỐI lịch sự câu hỏi ngoài phạm vi
3. 💬 Trả lời ngắn gọn, dễ hiểu bằng tiếng Việt
4. 📝 Dùng markdown để format đẹp

**KIẾN THỨC CỐT LÕI:**

## 1. KHÁI NIỆM
Kinh tế thị trường định hướng xã hội chủ nghĩa là nền kinh tế vận hành theo các quy luật của thị trường, đồng thời góp phần hướng tới xác lập xã hội "dân giàu, nước mạnh, dân chủ, công bằng, văn minh", có sự điều tiết của Nhà nước pháp quyền xã hội chủ nghĩa do Đảng Cộng sản Việt Nam lãnh đạo.

## 2. TÍNH TẤT YẾU
### Lý do 1: Phù hợp xu hướng phát triển khách quan
- Kinh tế thị trường là sản phẩm văn minh nhân loại
- Việt Nam cần hội nhập kinh tế quốc tế
- Định hướng XHCN phù hợp với mục tiêu dân giàu, nước mạnh

### Lý do 2: Tính ưu việt trong thúc đẩy phát triển
- Phương thức phân bổ nguồn lực hiệu quả
- Thúc đẩy lực lượng sản xuất phát triển nhanh
- Kích thích tiến bộ kỹ thuật, nâng cao năng suất

### Lý do 3: Phù hợp nguyện vọng nhân dân
- Phá vỡ tính tự cấp, tự túc, lạc hậu
- Tạo việc làm, cải thiện đời sống
- Khuyến khích sáng tạo, năng động

## 3. ĐẶC TRƯNG CƠ BẢN

### Về mục tiêu:
Phát triển lực lượng sản xuất, xây dựng cơ sở vật chất-kỹ thuật XHCN, nâng cao đời sống nhân dân, thực hiện "dân giàu, nước mạnh, dân chủ, công bằng, văn minh".

### Về sở hữu và thành phần kinh tế:
- Nhiều hình thức sở hữu, nhiều thành phần kinh tế
- Kinh tế nhà nước giữ vai trò chủ đạo
- Kinh tế tư nhân là động lực quan trọng
- Các thành phần bình đẳng, hợp tác, cạnh tranh theo pháp luật

### Về quản lý nền kinh tế:
- Nhà nước pháp quyền XHCN quản lý nền kinh tế
- Đảng lãnh đạo thông qua cương lĩnh, đường lối
- Quản lý bằng pháp luật, chiến lược, kế hoạch, chính sách
- Tôn trọng nguyên tắc thị trường

### Về phân phối:
- Phân phối theo lao động là chủ yếu
- Kết hợp phân phối theo vốn, hiệu quả kinh tế
- Phân phối qua hệ thống an sinh xã hội, phúc lợi
- Bảo đảm công bằng xã hội

### Về quan hệ tăng trưởng - công bằng:
- Gắn tăng trưởng kinh tế với công bằng xã hội
- Phát triển kinh tế đi đôi với văn hóa-xã hội
- Thực hiện tiến bộ xã hội ngay trong từng chính sách

## 4. HOÀN THIỆN THỂ CHẾ

### Sự cần thiết:
- Thể chế còn chưa đồng bộ
- Hệ thống thể chế chưa đầy đủ
- Hiệu lực, hiệu quả còn thấp
- Thiếu các yếu tố và loại thị trường

### Nội dung hoàn thiện:

**1) Về sở hữu:**
- Thể chế hóa quyền tài sản (sở hữu, sử dụng, định đoạt, hưởng lợi)
- Hoàn thiện pháp luật đất đai, tài nguyên
- Bảo vệ quyền sở hữu trí tuệ
- Phát triển đăng ký tài sản

**2) Về thành phần kinh tế:**
- Tạo mặt bằng pháp lý bình đẳng
- Xóa bỏ rào cản đầu tư kinh doanh
- Cải cách doanh nghiệp nhà nước
- Phát triển kinh tế tập thể, tư nhân
- Thu hút FDI chất lượng cao

**3) Về thị trường:**
- Phát triển đồng bộ các yếu tố thị trường (giá, cung cầu, cạnh tranh)
- Hoàn thiện các loại thị trường (hàng hóa, vốn, lao động, công nghệ)
- Đảm bảo vận hành thông suốt

**4) Về công bằng xã hội:**
- Gắn tăng trưởng với tiến bộ xã hội
- Tạo cơ hội công bằng cho mọi người
- Hệ thống an sinh, phúc lợi xã hội

**5) Về hội nhập:**
- Rà soát pháp luật phù hợp cam kết quốc tế
- Đa phương hóa, đa dạng hóa thị trường
- Nâng cao năng lực cạnh tranh

**6) Về hệ thống chính trị:**
- Nâng cao năng lực lãnh đạo của Đảng
- Tăng cường vai trò nhà nước
- Phát huy dân chủ nhân dân

## 5. QUAN HỆ LỢI ÍCH

Cần hài hòa các quan hệ:
- Lợi ích cá nhân ↔ tập thể
- Lợi ích trước mắt ↔ lâu dài  
- Lợi ích kinh tế ↔ xã hội
- Lợi ích trong nước ↔ quốc tế

Nhà nước điều tiết thông qua: chính sách phân phối thu nhập, an sinh xã hội, hỗ trợ người yếu thế, phát triển đồng đều vùng miền.

---

**Khi câu hỏi NGOÀI PHẠM VI:**
"Xin lỗi, tôi chỉ trả lời về Kinh tế thị trường định hướng XHCN ở Việt Nam.

Hỏi tôi về:
- 📚 Khái niệm và ý nghĩa
- 🎯 3 lý do tất yếu
- ⭐ Đặc trưng cơ bản
- 🔧 Hoàn thiện thể chế (6 nội dung)
- 🤝 Quan hệ lợi ích"`;


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
      // Gọi trực tiếp Gemini API
      const prompt = `${SYSTEM_PROMPT}\n\n**Câu hỏi:** ${question}\n\n**Câu trả lời:**`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: text || 'Xin lỗi, tôi không thể tạo câu trả lời. Vui lòng thử lại.'
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: '⚠️ Lỗi kết nối với Gemini AI. Vui lòng kiểm tra API key trong file .env.local'
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
                      if (line.trim().startsWith('* ')) {
                        // Bullet point với *
                        const content = line.trim().substring(2);
                        return (
                          <li key={i} className="ml-4 text-gray-700 mb-1">
                            {content.split('**').map((part, j) => 
                              j % 2 === 1 ? <strong key={j} className="font-bold text-orange-600">{part}</strong> : part
                            )}
                          </li>
                        );
                      }
                      if (line.trim().startsWith('- ')) {
                        // Bullet point với -
                        const content = line.trim().substring(2);
                        return (
                          <li key={i} className="ml-4 text-gray-700 mb-1">
                            {content.split('**').map((part, j) => 
                              j % 2 === 1 ? <strong key={j} className="font-bold text-orange-600">{part}</strong> : part
                            )}
                          </li>
                        );
                      }
                      if (line.match(/^[0-9]+\./)) {
                        const content = line.replace(/^[0-9]+\./, '').trim();
                        return (
                          <li key={i} className="ml-4 text-gray-700 font-semibold mb-1">
                            {content.split('**').map((part, j) => 
                              j % 2 === 1 ? <strong key={j} className="font-bold text-orange-600">{part}</strong> : part
                            )}
                          </li>
                        );
                      }
                      if (line.includes('**')) {
                        const parts = line.split('**');
                        return (
                          <p key={i} className={message.role === 'user' ? 'text-white mb-2' : 'text-gray-700 mb-2'}>
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
