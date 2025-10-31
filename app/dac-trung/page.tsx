'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowLeft, ArrowRight, Target, Building2, Scale, DollarSign, Heart } from 'lucide-react';
import Link from 'next/link';
import { ChartIllustration } from '@/components/Illustrations';

export default function DacTrung() {
  const characteristics = [
    {
      title: 'Về mục tiêu',
      icon: <Target className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      content: [
        'Phát triển lực lượng sản xuất, xây dựng cơ sở vật chất - kỹ thuật của CNXH',
        'Nâng cao đời sống nhân dân',
        'Thực hiện "dân giàu, nước mạnh, dân chủ, công bằng, văn minh"',
        'Gắn với xây dựng quan hệ sản xuất tiến bộ, phù hợp theo định hướng XHCN',
      ],
    },
    {
      title: 'Về quan hệ sở hữu và thành phần kinh tế',
      icon: <Building2 className="w-6 h-6" />,
      color: 'from-amber-600 to-orange-700',
      content: [
        'Nhiều hình thức sở hữu, nhiều thành phần kinh tế',
        'Kinh tế nhà nước giữ vai trò chủ đạo',
        'Kinh tế tư nhân là động lực quan trọng',
        'Các chủ thể thuộc các thành phần kinh tế bình đẳng, hợp tác, cạnh tranh cùng phát triển',
        'Kinh tế nhà nước làm đòn bẩy thúc đẩy tăng trưởng và giải quyết vấn đề xã hội',
      ],
    },
    {
      title: 'Về quan hệ quản lý nền kinh tế',
      icon: <Scale className="w-6 h-6" />,
      color: 'from-orange-600 to-red-600',
      content: [
        'Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân',
        'Dưới sự lãnh đạo của Đảng Cộng sản Việt Nam',
        'Sự làm chủ và giám sát của nhân dân',
        'Quản lý thông qua pháp luật, chiến lược, kế hoạch, quy hoạch',
        'Tôn trọng nguyên tắc thị trường, phù hợp yêu cầu xây dựng XHCN',
      ],
    },
    {
      title: 'Về quan hệ phân phối',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-red-600 to-orange-700',
      content: [
        'Phân phối công bằng các yếu tố sản xuất (đầu vào)',
        'Phân phối chủ yếu theo kết quả lao động, hiệu quả kinh tế',
        'Theo mức đóng góp vốn và các nguồn lực khác',
        'Thông qua hệ thống an sinh xã hội, phúc lợi xã hội',
        'Nhiều hình thức phân phối thúc đẩy tăng trưởng và tiến bộ xã hội',
      ],
    },
    {
      title: 'Về gắn tăng trưởng với công bằng xã hội',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-amber-500 to-orange-600',
      content: [
        'Gắn tăng trưởng kinh tế với công bằng xã hội',
        'Phát triển kinh tế đi đôi với phát triển văn hóa - xã hội',
        'Thực hiện tiến bộ và công bằng xã hội ngay trong từng chính sách',
        'Không hy sinh tiến bộ xã hội để chạy theo tăng trưởng đơn thuần',
        'Tạo điều kiện để mọi người có cơ hội tiếp cận dịch vụ xã hội cơ bản',
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
            <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                Đặc Trưng Cơ Bản
              </h1>
              <p className="text-gray-600 mt-1">
                Của kinh tế thị trường định hướng XHCN ở Việt Nam
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
                Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam có những <span className="font-semibold text-orange-600">đặc trưng riêng</span> phản ánh điều kiện lịch sử, trình độ phát triển và hoàn cảnh chính trị - xã hội của đất nước.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
              <ChartIllustration />
            </div>
          </div>
        </motion.div>

        {/* Characteristics */}
        <div className="space-y-6">
          {characteristics.map((char, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden card-hover"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${char.color} p-6`}>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    {char.icon}
                  </div>
                  <h2 className="text-2xl font-bold">
                    {index + 1}. {char.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid gap-3">
                  {char.content.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.05 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl hover:shadow-md transition-all"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-br ${char.color} rounded-full mt-2 flex-shrink-0`} />
                      <p className="text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-effect rounded-2xl p-8 bg-gradient-to-br from-orange-50 to-amber-50"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Kết luận</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Với những đặc trưng trên, kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là{' '}
            <span className="font-semibold text-orange-600">sự kết hợp những mặt tích cực, ưu điểm của kinh tế thị trường với bản chất ưu việt của chủ nghĩa xã hội</span>{' '}
            để hướng tới một nền kinh tế thị trường hiện đại, văn minh. Tuy nhiên, kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam đang trong quá trình hình thành và phát triển nên còn bộc lộ nhiều yếu kém cần phải khắc phục và hoàn thiện.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
        >
          <Link href="/tinh-tat-yeu">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-xl font-semibold text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Tính tất yếu
            </motion.button>
          </Link>

          <Link href="/hoan-thien-the-che">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Tiếp theo: Hoàn thiện thể chế
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
