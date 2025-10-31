'use client';

import { motion } from 'framer-motion';
import { Scale, ArrowLeft, ArrowRight, FileText, Building, Globe2, Users } from 'lucide-react';
import Link from 'next/link';
import { BalanceIllustration } from '@/components/Illustrations';

export default function HoanThienTheChe() {
  const sections = [
    {
      title: 'Hoàn thiện thể chế về sở hữu',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      items: [
        'Thể chế hóa đầy đủ quyền tài sản của nhà nước, tổ chức và cá nhân',
        'Hoàn thiện pháp luật về đất đai, sử dụng hiệu quả đất đai',
        'Hoàn thiện pháp luật về quản lý, khai thác tài nguyên thiên nhiên',
        'Hoàn thiện pháp luật về đầu tư vốn nhà nước, sử dụng hiệu quả tài sản công',
        'Hoàn thiện hệ thống thể chế về sở hữu trí tuệ',
        'Hoàn thiện khung pháp luật về hợp đồng và giải quyết tranh chấp',
      ],
    },
    {
      title: 'Phát triển các thành phần kinh tế',
      icon: <Building className="w-6 h-6" />,
      color: 'from-amber-600 to-orange-700',
      items: [
        'Mặt bằng pháp lý thống nhất cho các loại hình doanh nghiệp',
        'Bảo đảm quyền tự do kinh doanh theo Hiến pháp',
        'Hoàn thiện thể chế về cạnh tranh lành mạnh',
        'Cơ cấu lại và nâng cao hiệu quả doanh nghiệp nhà nước',
        'Huy động nguồn lực cho các đơn vị sự nghiệp công lập',
        'Thể chế hóa hoạt động kinh tế tập thể',
        'Phát triển kinh tế tư nhân thành động lực quan trọng',
      ],
    },
    {
      title: 'Phát triển đồng bộ các loại thị trường',
      icon: <Globe2 className="w-6 h-6" />,
      color: 'from-orange-600 to-red-600',
      items: [
        'Hoàn thiện thể chế để phát triển đồng bộ các yếu tố thị trường',
        'Vận hành theo nguyên tắc thể chế kinh tế thị trường',
        'Thị trường hàng hóa, vốn, công nghệ, lao động',
        'Đảm bảo sự vận hành thông suốt các thị trường',
        'Phát huy tác động tích cực, cộng hưởng của các thị trường',
      ],
    },
    {
      title: 'Công bằng xã hội và hội nhập',
      icon: <Users className="w-6 h-6" />,
      color: 'from-red-600 to-orange-700',
      items: [
        'Kết hợp phát triển kinh tế với phát triển xã hội bền vững',
        'Tạo cơ hội cho mọi thành viên tham gia và hưởng thụ công bằng',
        'Rà soát, bổ sung pháp luật đáp ứng cam kết quốc tế',
        'Đa phương hóa, đa dạng hóa hợp tác kinh tế quốc tế',
        'Nâng cao năng lực cạnh tranh quốc gia',
        'Bảo vệ lợi ích quốc gia - dân tộc',
      ],
    },
  ];

  const challenges = [
    'Hoàn thiện thể chế kinh tế thị trường còn chậm',
    'Quy định pháp luật còn chồng chéo, mâu thuẫn',
    'Hiệu quả hoạt động của các chủ thể kinh tế còn hạn chế',
    'Môi trường đầu tư, kinh doanh chưa thật sự thông thoáng',
    'Một số thị trường chậm hình thành và phát triển',
    'Thể chế bảo đảm công bằng xã hội còn nhiều bất cập',
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
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Scale className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                Hoàn Thiện Thể Chế
              </h1>
              <p className="text-gray-600 mt-1">
                Kinh tế thị trường định hướng XHCN ở Việt Nam
              </p>
            </div>
          </div>
        </motion.div>

        {/* Definition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-2xl overflow-hidden mb-8"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Thể chế kinh tế là gì?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold text-orange-600">Thể chế kinh tế thị trường định hướng xã hội chủ nghĩa</span> là hệ thống đường lối, chủ trương chiến lược, hệ thống luật pháp, chính sách quy định xác lập cơ chế vận hành, điều chỉnh chức năng, hoạt động, mục tiêu, phương thức hoạt động, các quan hệ lợi ích của các tổ chức, các chủ thể kinh tế.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nhằm hướng tới xác lập đồng bộ các yếu tố thị trường, các loại thị trường hiện đại theo hướng góp phần thúc đẩy <span className="font-semibold">dân giàu, nước mạnh, dân chủ, công bằng, văn minh</span>.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 flex items-center justify-center">
              <BalanceIllustration />
            </div>
          </div>
        </motion.div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 mb-8 bg-gradient-to-br from-red-50 to-orange-50"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Một số hạn chế cần khắc phục</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
              >
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  !
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {challenge}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${section.color} p-6`}>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold">
                    {index + 1}. {section.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid gap-3">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.05 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:shadow-md transition-all"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${section.color} rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                        {itemIndex + 1}
                      </div>
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

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-effect rounded-2xl p-8 bg-gradient-to-br from-green-50 to-emerald-50"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Mục tiêu cuối cùng</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Xây dựng hệ thống thể chế đồng bộ để nâng cao năng lực lãnh đạo của Đảng, vai trò xây dựng và thực hiện thể chế kinh tế của nhà nước, phát huy vai trò làm chủ của nhân dân trong hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
        >
          <Link href="/dac-trung">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-xl font-semibold text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Đặc trưng
            </motion.button>
          </Link>

          <Link href="/quan-he-loi-ich">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Tiếp theo: Quan hệ lợi ích
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
