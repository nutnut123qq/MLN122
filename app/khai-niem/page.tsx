'use client';

import { motion } from 'framer-motion';
import { BookOpen, ArrowLeft, ArrowRight, Lightbulb, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { BookIllustration } from '@/components/Illustrations';

export default function KhaiNiem() {
  const keyPoints = [
    'Nền kinh tế vận hành theo quy luật thị trường',
    'Có sự điều tiết của Nhà nước do Đảng Cộng sản Việt Nam lãnh đạo',
    'Hướng tới mục tiêu: dân giàu, nước mạnh, dân chủ, công bằng, văn minh',
    'Phù hợp với điều kiện lịch sử, trình độ phát triển của Việt Nam',
  ];

  const timeline = [
    {
      year: '1986',
      event: 'Đổi mới - Quan niệm kinh tế hàng hóa có mặt tích cực',
    },
    {
      year: 'Đại hội IX',
      event: 'Kinh tế thị trường ĐHXHCN là mô hình kinh tế tổng quát thời kỳ quá độ',
    },
    {
      year: 'Đại hội XI',
      event: 'Nền kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường',
    },
    {
      year: 'Đại hội XII',
      event: 'Kinh tế thị trường hiện đại, hội nhập quốc tế, quản lý bởi nhà nước pháp quyền XHCN',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
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
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                Khái Niệm
              </h1>
              <p className="text-gray-600 mt-1">
                Kinh tế thị trường định hướng xã hội chủ nghĩa
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Definition Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Định nghĩa</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold text-orange-600">Kinh tế thị trường định hướng xã hội chủ nghĩa</span> là nền kinh tế vận hành 
                    theo các quy luật của thị trường đồng thời góp phần hướng tới từng bước xác lập một xã hội mà ở đó 
                    <span className="font-semibold"> dân giàu, nước mạnh, dân chủ, công bằng, văn minh</span>; 
                    có sự điều tiết của Nhà nước do Đảng Cộng sản Việt Nam lãnh đạo.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                <BookIllustration />
              </div>
            </div>
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Điểm quan trọng</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl"
                >
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Quá trình hình thành nhận thức của Đảng
            </h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                      <span className="text-center text-sm px-2">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-4">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-5">
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {item.event}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-effect rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Giải thích chi tiết</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Hệ giá trị <span className="font-semibold text-orange-600">dân giàu, nước mạnh, xã hội dân chủ, công bằng, văn minh</span> là 
                những giá trị của xã hội tương lai mà loài người còn tiếp tục phải phấn đấu. Có quốc gia dân rất giàu nhưng nước chưa mạnh, 
                xã hội thiếu văn minh; có quốc gia nước rất mạnh, dân chủ song lại thiếu công bằng.
              </p>
              <p>
                Do đó, <span className="font-semibold">định hướng xã hội chủ nghĩa</span> thực chất là hướng tới các giá trị cốt lõi của xã hội mới ấy. 
                Nền kinh tế thị trường mà trong các hoạt động kinh tế của các chủ thể, hướng tới góp phần xác lập được các giá trị xã hội 
                thực tế với hệ giá trị toàn diện như vậy là nền kinh tế thị trường định hướng xã hội chủ nghĩa.
              </p>
              <p>
                Để đạt được hệ giá trị như vậy, nền kinh tế thị trường Việt Nam cần có vai trò điều tiết của nhà nước, nhưng đối với Việt Nam, 
                nhà nước phải được đặt dưới sự lãnh đạo của <span className="font-semibold">Đảng Cộng sản Việt Nam</span> - đảng cầm quyền do 
                lịch sử khách quan quy định.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-xl font-semibold text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Trang chủ
            </motion.button>
          </Link>

          <Link href="/tinh-tat-yeu">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Tiếp theo: Tính tất yếu
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
