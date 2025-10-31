'use client';

import { motion } from 'framer-motion';
import { Users, ArrowLeft, Heart, Scale, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';
import { TeamworkIllustration } from '@/components/Illustrations';

export default function QuanHeLoiIch() {
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
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                Quan Hệ Lợi Ích
              </h1>
              <p className="text-gray-600 mt-1">
                Bảo đảm hài hòa các quan hệ lợi ích trong phát triển
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Definition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Khái niệm</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa, <span className="font-semibold text-orange-600">quan hệ lợi ích</span> là mối quan hệ giữa các chủ thể kinh tế, các tầng lớp xã hội trong quá trình sản xuất, phân phối và tiêu dùng của cải vật chất và tinh thần.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                <TeamworkIllustration />
              </div>
            </div>
          </motion.div>

          {/* Types of Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Các loại quan hệ lợi ích</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Lợi ích cá nhân',
                  icon: <Heart className="w-6 h-6" />,
                  color: 'from-orange-500 to-orange-600',
                  desc: 'Lợi ích của từng cá nhân trong xã hội',
                },
                {
                  title: 'Lợi ích tập thể',
                  icon: <Users className="w-6 h-6" />,
                  color: 'from-amber-600 to-orange-700',
                  desc: 'Lợi ích của nhóm, đơn vị, tổ chức',
                },
                {
                  title: 'Lợi ích quốc gia',
                  icon: <Target className="w-6 h-6" />,
                  color: 'from-orange-600 to-red-600',
                  desc: 'Lợi ích chung của toàn dân tộc',
                },
                {
                  title: 'Lợi ích nhân loại',
                  icon: <TrendingUp className="w-6 h-6" />,
                  color: 'from-red-600 to-orange-700',
                  desc: 'Lợi ích của cộng đồng quốc tế',
                },
              ].map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{type.title}</h3>
                  <p className="text-gray-600">{type.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Harmonization Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">
                  Nguyên tắc hài hòa lợi ích
                </h2>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {[
                'Lợi ích cá nhân phải gắn với lợi ích tập thể và lợi ích quốc gia',
                'Lợi ích trước mắt phải gắn với lợi ích lâu dài',
                'Lợi ích kinh tế phải gắn với lợi ích chính trị, văn hóa, xã hội',
                'Phát triển kinh tế đi đôi với bảo vệ môi trường',
                'Hội nhập kinh tế quốc tế gắn với bảo vệ lợi ích quốc gia',
                'Tôn trọng sự khác biệt nhưng đảm bảo công bằng xã hội',
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">
                    {principle}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Giải pháp bảo đảm hài hòa lợi ích
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Hoàn thiện thể chế',
                  content: 'Xây dựng hệ thống pháp luật đồng bộ, bảo vệ quyền và lợi ích hợp pháp của các chủ thể',
                },
                {
                  title: 'Phát triển kinh tế',
                  content: 'Tăng trưởng kinh tế bền vững, tạo nguồn lực cho phân phối và tái phân phối',
                },
                {
                  title: 'Chính sách xã hội',
                  content: 'Phát triển hệ thống an sinh xã hội, phúc lợi xã hội, giảm nghèo bền vững',
                },
                {
                  title: 'Dân chủ hóa',
                  content: 'Phát huy dân chủ, tạo điều kiện nhân dân tham gia quản lý nhà nước và xã hội',
                },
                {
                  title: 'Giáo dục, nâng cao nhận thức',
                  content: 'Giáo dục ý thức tôn trọng pháp luật, đạo đức xã hội, tinh thần đoàn kết',
                },
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {index + 1}. {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 bg-gradient-to-br from-green-50 to-emerald-50"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Kết luận</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bảo đảm hài hòa các quan hệ lợi ích là <span className="font-semibold text-green-600">yêu cầu tất yếu và nhiệm vụ quan trọng</span> trong phát triển kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam. 
              Điều này góp phần tạo động lực phát triển, ổn định chính trị - xã hội, hướng tới mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.
            </p>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
        >
          <Link href="/hoan-thien-the-che">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-xl font-semibold text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Hoàn thiện thể chế
            </motion.button>
          </Link>

          <Link href="/game">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Thử thách với trò chơi! 🎮
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
