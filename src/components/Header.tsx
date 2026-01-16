import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
            : 'bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="Logo_Complet_FINAL.svg"
                  alt="Logo Rassemblement Pennois"
                  width={180}
                  height={180}
                  className="mix-blend-multiply"
                  priority
                />
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              <motion.a 
                href="/" 
                className="relative text-gray-700 hover:text-[#1976d2] transition-all duration-300 font-semibold px-4 py-2 rounded-xl group flex items-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="relative z-10">Accueil</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="navbar-hover"
                />
              </motion.a>
              <motion.a 
                href="/#programme" 
                className="relative text-gray-700 hover:text-[#1976d2] transition-all duration-300 font-semibold px-4 py-2 rounded-xl group flex items-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="relative z-10">Programme</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>
              <motion.a 
                href="/equipe-de-campagne" 
                className="relative text-gray-700 hover:text-[#1976d2] transition-all duration-300 font-semibold px-4 py-2 rounded-xl group flex items-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="relative z-10">Équipe</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>
              <motion.a 
                href="/#avoscotes" 
                className="relative text-gray-700 hover:text-[#1976d2] transition-all duration-300 font-semibold px-4 py-2 rounded-xl group flex items-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span className="relative z-10">Actualités</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>
              
              {/* CTA Button pour Boîte à Idées */}
              <motion.a 
                href="/contact" 
                className="relative bg-gradient-to-r from-[#1976d2] to-[#003366] text-white font-semibold px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 ml-2 overflow-hidden group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="relative z-10">Boîte à Idées</span>
              </motion.a>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2 text-gray-700 hover:text-[#1976d2] focus:outline-none rounded-xl hover:bg-blue-50 transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div 
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-3 pt-3 pb-4 space-y-2 bg-gradient-to-b from-white to-blue-50/30 border-t-2 border-gray-200">
                <motion.a
                  href="/"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#1976d2] hover:bg-blue-50 transition-all duration-300 rounded-xl font-semibold group"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-lg group-hover:bg-[#1976d2] transition-colors">
                    <svg className="w-4 h-4 text-[#1976d2] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <span>Accueil</span>
                </motion.a>
                <motion.a
                  href="/#programme"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#1976d2] hover:bg-blue-50 transition-all duration-300 rounded-xl font-semibold group"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-lg group-hover:bg-[#1976d2] transition-colors">
                    <svg className="w-4 h-4 text-[#1976d2] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span>Programme</span>
                </motion.a>
                <motion.a
                  href="/equipe-de-campagne"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#1976d2] hover:bg-blue-50 transition-all duration-300 rounded-xl font-semibold group"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-lg group-hover:bg-[#1976d2] transition-colors">
                    <svg className="w-4 h-4 text-[#1976d2] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span>Équipe de campagne</span>
                </motion.a>
                <motion.a
                  href="/#avoscotes"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#1976d2] hover:bg-blue-50 transition-all duration-300 rounded-xl font-semibold group"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-lg group-hover:bg-[#1976d2] transition-colors">
                    <svg className="w-4 h-4 text-[#1976d2] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <span>Actualités</span>
                </motion.a>
                
                {/* CTA mobile */}
                <motion.a
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-4 py-4 bg-gradient-to-r from-[#1976d2] to-[#003366] text-white hover:shadow-lg transition-all duration-300 rounded-xl font-bold mt-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span>Boîte à Idées</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>
    </>
  );
};

export default Header; 