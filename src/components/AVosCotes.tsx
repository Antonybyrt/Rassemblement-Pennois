import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { news } from '@/data/AVosCotesData';

const AVosCotes: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(news.length / 3);
  const visibleNews = news.slice(currentIndex * 3, (currentIndex * 3) + 3);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <motion.section
      id="avoscotes"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            À vos côtés
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p 
            className="text-xl text-gray-600 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Suivez l'actualité de notre campagne et nos dernières actions
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Flèche gauche */}
          {totalPages > 1 && (
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Précédent"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Flèche droite */}
          {totalPages > 1 && (
            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Suivant"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
            {visibleNews.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-[#1976d2] to-[#003366] rounded-lg shadow-md overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.025, y: -4, boxShadow: '0 8px 25px 0 rgba(30, 64, 175, 0.15)' }}
                transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-200 font-semibold mb-2">{item.date}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <div className="max-h-32 overflow-y-auto card-scrollbar">
                    <p className="text-blue-100 pr-2">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicateurs de page */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    i === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default AVosCotes; 