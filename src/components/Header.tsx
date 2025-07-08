import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <motion.header
    className="bg-white shadow-sm border-b border-gray-100"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-6">
        <div className="">
          <Link href="/" className="flex items-center">
            <Image
              src="/rassemblement-pennois.png"
              alt="Logo Rassemblement Pennois"
              width={200}
              height={200}
              className="mix-blend-multiply"
              priority
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <motion.a 
            href="/" 
            className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Accueil</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            />
          </motion.a>
          <motion.a 
            href="/#programme" 
            className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Programme</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            />
          </motion.a>
          <motion.a 
            href="/equipe-de-campagne" 
            className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Équipe</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            />
          </motion.a>
          <motion.a 
            href="/#avoscotes" 
            className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">À vos côtés</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            />
          </motion.a>
          <motion.a 
            href="/#contact" 
            className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contact</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            />
          </motion.a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <motion.a
              href="/"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Accueil
            </motion.a>
            <motion.a
              href="/#programme"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Programme
            </motion.a>
            <motion.a
              href="/equipe-de-campagne"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Équipe de campagne
            </motion.a>
            <motion.a
              href="/#avposcotes"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              À vos côtés
            </motion.a>
            <motion.a
              href="/#contact"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      )}
    </div>
  </motion.header>
);

export default Header; 