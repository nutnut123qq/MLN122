'use client';

import { motion } from 'framer-motion';
import { BookOpen, Target, TrendingUp, Scale, Users, Globe, ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { HeroIllustration, BookIllustration, TeamworkIllustration, EconomyIllustration } from '@/components/Illustrations';

export default function Home() {
  const roadmapItems = [
    {
      id: 1,
      title: 'Khái niệm KTTT định hướng XHCN',
      description: 'Nền kinh tế vận hành theo quy luật thị trường, hướng tới dân giàu, nước mạnh, dân chủ, công bằng, văn minh',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      link: '/khai-niem',
    },
    {
      id: 2,
      title: 'Tính tất yếu khách quan',
      description: 'Phù hợp xu hướng phát triển, ưu việt trong thúc đẩy phát triển, đáp ứng nguyện vọng nhân dân',
      icon: <Target className="w-6 h-6" />,
      color: 'from-amber-600 to-orange-700',
      link: '/tinh-tat-yeu',
    },
    {
      id: 3,
      title: 'Đặc trưng cơ bản',
      description: 'Về mục tiêu, sở hữu, quản lý, phân phối và gắn kết tăng trưởng với công bằng xã hội',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-orange-600 to-red-600',
      link: '/dac-trung',
    },
    {
      id: 4,
      title: 'Hoàn thiện thể chế',
      description: 'Về sở hữu, thị trường, công bằng xã hội, hội nhập quốc tế và nâng cao năng lực hệ thống chính trị',
      icon: <Scale className="w-6 h-6" />,
      color: 'from-red-600 to-orange-700',
      link: '/hoan-thien-the-che',
    },
    {
      id: 5,
      title: 'Quan hệ lợi ích',
      description: 'Bảo đảm hài hòa các quan hệ lợi ích trong phát triển kinh tế - xã hội',
      icon: <Users className="w-6 h-6" />,
      color: 'from-amber-500 to-orange-600',
      link: '/quan-he-loi-ich',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Globe className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient">
                  Kinh Tế Thị Trường
                </span>
                <br />
                <span className="text-gray-800">
                  Định Hướng Xã Hội Chủ Nghĩa
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto lg:mx-0 mb-8">
                Tìm hiểu về mô hình kinh tế đặc thù của Việt Nam - 
                hướng tới <span className="font-semibold text-orange-600">dân giàu, nước mạnh, dân chủ, công bằng, văn minh</span>
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link href="/khai-niem">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                  >
                    Bắt đầu học
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                
                <Link href="/game">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 glass-effect rounded-xl font-semibold text-gray-700 hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <Target size={20} />
                    Trò chơi
                  </motion.button>
                </Link>

                <Link href="/chat">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Chat với AI
                  </motion.button>
                </Link>
              </motion.div>
              </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="w-full max-w-lg mx-auto glass-effect rounded-3xl p-8">
                <HeroIllustration />
              </div>
            </motion.div>
          </div>

          {/* Roadmap Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient">Lộ trình học tập</span>
            </h2>

            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 transform -translate-x-1/2 rounded-full" />

              {roadmapItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <Link href={item.link}>
                      <motion.div
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="glass-effect rounded-2xl p-6 card-hover cursor-pointer group"
                      >
                        <div className={`flex items-center gap-3 mb-3 ${
                          index % 2 === 0 ? 'justify-end' : 'justify-start'
                        }`}>
                          <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                        <div className={`mt-4 flex items-center gap-2 text-orange-600 font-semibold ${
                          index % 2 === 0 ? 'justify-end' : 'justify-start'
                        }`}>
                          Tìm hiểu thêm
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </motion.div>
                    </Link>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white`}
                    >
                      {item.id}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-6">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Link href={item.link}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-effect rounded-2xl p-6 card-hover cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0`}>
                          {item.id}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-2 text-orange-600 font-semibold text-sm">
                            Tìm hiểu thêm
                            <ArrowRight size={14} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="text-gradient">Tính năng nổi bật</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Nội dung chi tiết',
                description: 'Hệ thống kiến thức được tổ chức khoa học, dễ hiểu',
                icon: <BookOpen className="w-8 h-8" />,
                color: 'from-orange-500 to-orange-600',
                illustration: <BookIllustration />,
              },
              {
                title: 'Trò chơi tương tác',
                description: 'Học qua quiz và mini games thú vị, củng cố kiến thức',
                icon: <Target className="w-8 h-8" />,
                color: 'from-amber-600 to-orange-700',
                illustration: <TeamworkIllustration />,
              },
              {
                title: 'Giao diện hiện đại',
                description: 'Thiết kế đẹp mắt, animation mượt mà, trải nghiệm tuyệt vời',
                icon: <TrendingUp className="w-8 h-8" />,
                color: 'from-orange-600 to-red-600',
                illustration: <EconomyIllustration />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-effect rounded-2xl overflow-hidden card-hover"
              >
                {/* Illustration */}
                <div className="h-48 bg-gradient-to-br from-orange-50 to-amber-50 p-6 flex items-center justify-center">
                  <div className="w-full h-full">
                    {feature.illustration}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
