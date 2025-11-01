'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, BookOpen, Gamepad2, ChevronDown, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contentPages = [
    { name: 'Khái niệm', href: '/khai-niem' },
    { name: 'Tính tất yếu', href: '/tinh-tat-yeu' },
    { name: 'Đặc trưng', href: '/dac-trung' },
    { name: 'Hoàn thiện thể chế', href: '/hoan-thien-the-che' },
    { name: 'Quan hệ lợi ích', href: '/quan-he-loi-ich' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-lg'
          : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">KT</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-gradient">
                  Kinh Tế XHCN
                </h1>
                <p className="text-xs text-gray-600">Việt Nam</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="/" icon={<Home size={18} />}>
              Trang chủ
            </NavLink>

            {/* Content Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('content')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 transition-colors"
              >
                <BookOpen size={18} />
                <span className="font-medium">Nội dung</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === 'content' ? 'rotate-180' : ''
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {activeDropdown === 'content' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 glass-effect rounded-xl overflow-hidden"
                  >
                    {contentPages.map((page, index) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        className="block"
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-4 py-3 hover:bg-orange-50 transition-colors border-b border-gray-100 last:border-0"
                        >
                          <span className="text-gray-700 hover:text-orange-600 font-medium">
                            {page.name}
                          </span>
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/game" icon={<Gamepad2 size={18} />}>
              Trò chơi
            </NavLink>

            <NavLink href="/chat" icon={<MessageCircle size={18} />}>
              Chat AI
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <MobileNavLink href="/" icon={<Home size={18} />}>
                  Trang chủ
                </MobileNavLink>
                
                <div className="space-y-1">
                  <div className="px-4 py-2 text-sm font-semibold text-gray-500">
                    NỘI DUNG
                  </div>
                  {contentPages.map((page) => (
                    <MobileNavLink key={page.href} href={page.href}>
                      {page.name}
                    </MobileNavLink>
                  ))}
                </div>

                <MobileNavLink href="/game" icon={<Gamepad2 size={18} />}>
                  Trò chơi
                </MobileNavLink>

                <MobileNavLink href="/chat" icon={<MessageCircle size={18} />}>
                  Chat AI
                </MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

const NavLink = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <Link href={href}>
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors cursor-pointer"
    >
      {icon}
      <span className="font-medium">{children}</span>
    </motion.div>
  </Link>
);

const MobileNavLink = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <Link href={href}>
    <motion.div
      whileHover={{ x: 4 }}
      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
    >
      {icon}
      <span className="font-medium">{children}</span>
    </motion.div>
  </Link>
);

export default Header;
