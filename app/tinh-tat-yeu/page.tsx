'use client';

import { motion } from 'framer-motion';
import { Target, ArrowLeft, ArrowRight, TrendingUp, Heart, Users } from 'lucide-react';
import Link from 'next/link';
import { EconomyIllustration } from '@/components/Illustrations';

export default function TinhTatYeu() {
  const reasons = [
    {
      title: 'Phù hợp xu hướng phát triển',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      points: [
        'Kinh tế hàng hóa phát triển đến trình độ cao tạo ra kinh tế thị trường',
        'Ở Việt Nam, các điều kiện cho kinh tế thị trường đang tồn tại khách quan',
        'Sự hình thành kinh tế thị trường là tất yếu khách quan',
        'Mong muốn dân giàu, nước mạnh là khát vọng chung của các quốc gia',
        'Không dừng lại ở kinh tế thị trường tư bản, cần tiến tới xã hội xã hội chủ nghĩa',
      ],
    },
    {
      title: 'Ưu việt trong thúc đẩy phát triển',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-amber-600 to-orange-700',
      points: [
        'Kinh tế thị trường là phương thức phân bổ nguồn lực hiệu quả nhất',
        'Thúc đẩy lực lượng sản xuất phát triển nhanh và có hiệu quả',
        'Kích thích tiến bộ kỹ thuật - công nghệ, nâng cao năng suất lao động',
        'Không mâu thuẫn với mục tiêu xã hội chủ nghĩa',
        'Cần điều tiết kịp thời của nhà nước pháp quyền XHCN',
      ],
    },
    {
      title: 'Đáp ứng nguyện vọng nhân dân',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-orange-600 to-red-600',
      points: [
        'Khát vọng dân giàu, nước mạnh, dân chủ, công bằng, văn minh',
        'Hiện thực hóa khát vọng thông qua kinh tế thị trường ĐHXHCN',
        'Phá vỡ tính chất tự cấp, tự túc, lạc hậu của nền kinh tế',
        'Tạo việc làm, cải thiện và nâng cao đời sống nhân dân',
        'Mở rộng giao lưu kinh tế trong nước và quốc tế',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
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
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Target className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                Tính Tất Yếu Khách Quan
              </h1>
              <p className="text-gray-600 mt-1">
                Phát triển kinh tế thị trường định hướng XHCN ở Việt Nam
              </p>
            </div>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-2xl overflow-hidden mb-8"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Phát triển kinh tế thị trường định hướng xã hội chủ nghĩa là <span className="font-semibold text-orange-600">tất yếu ở Việt Nam</span> xuất phát từ những lý do cơ bản sau:
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
              <EconomyIllustration />
            </div>
          </div>
        </motion.div>

        {/* Main Reasons */}
        <div className="space-y-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-effect rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${reason.color} p-6`}>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    {reason.icon}
                  </div>
                  <h2 className="text-2xl font-bold">
                    {index + 1}. {reason.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-3">
                  {reason.points.map((point, pointIndex) => (
                    <motion.div
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: pointIndex * 0.05 }}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${reason.color} rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                        {pointIndex + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-1">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-effect rounded-2xl p-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Lợi ích của KTTT ĐHXHCN
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-green-600">Phá vỡ tính chất lạc hậu:</span> Đẩy mạnh phân công lao động xã hội, phát triển ngành nghề
                </p>
                <p>
                  <span className="font-semibold text-green-600">Tạo việc làm:</span> Khuyến khích ứng dụng kỹ thuật công nghệ mới, tăng năng suất lao động
                </p>
                <p>
                  <span className="font-semibold text-green-600">Cải thiện đời sống:</span> Tăng số lượng, chất lượng và chủng loại hàng hóa, dịch vụ
                </p>
                <p>
                  <span className="font-semibold text-green-600">Thúc đẩy tích tụ và tập trung sản xuất:</span> Mở rộng giao lưu kinh tế giữa các vùng miền
                </p>
                <p>
                  <span className="font-semibold text-green-600">Khuyến khích năng động, sáng tạo:</span> Phân bổ và sử dụng nguồn lực xã hội hợp lý, tiết kiệm
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
        >
          <Link href="/khai-niem">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-xl font-semibold text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Khái niệm
            </motion.button>
          </Link>

          <Link href="/dac-trung">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Tiếp theo: Đặc trưng
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
