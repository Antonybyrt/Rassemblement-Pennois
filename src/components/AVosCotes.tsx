import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { news } from '@/data/AVosCotesData';

const AVosCotes: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalPages = Math.ceil(news.length / 3);
  const visibleNews = news.slice(currentIndex * 3, (currentIndex * 3) + 3);

  const nextPage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex: number) => {
    if (isAnimating || pageIndex === currentIndex) return;
    setIsAnimating(true);
    setDirection(pageIndex > currentIndex ? 1 : -1);
    setCurrentIndex(pageIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const indicatorVariants = {
    inactive: {
      scale: 0.9,
      opacity: 0.7,
    },
    active: {
      scale: 1.1,
      opacity: 1,
    },
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
            <motion.button
              onClick={prevPage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-4 shadow-lg transition-all duration-300 hover:shadow-xl backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                x: -1,
                transition: { duration: 0.3, ease: "easeOut" as const }
              }}
              whileTap={{ scale: 0.98 }}
              disabled={isAnimating}
              aria-label="Précédent"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.svg 
                className="w-6 h-6 text-gray-700" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: -1 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </motion.svg>
            </motion.button>
          )}

          {/* Flèche droite */}
          {totalPages > 1 && (
            <motion.button
              onClick={nextPage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-4 shadow-lg transition-all duration-300 hover:shadow-xl backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                x: 1,
                transition: { duration: 0.3, ease: "easeOut" as const }
              }}
              whileTap={{ scale: 0.98 }}
              disabled={isAnimating}
              aria-label="Suivant"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.svg 
                className="w-6 h-6 text-gray-700" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 1 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.button>
          )}

          {/* Conteneur des cartes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-16 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              {visibleNews.map((item, index) => (
                <motion.div 
                  key={`${currentIndex}-${index}`}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 200, damping: 25 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.4 }
                  }}
                  className="bg-gradient-to-br from-[#1976d2] to-[#003366] rounded-lg shadow-lg overflow-hidden cursor-pointer relative"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -3, 
                    boxShadow: '0 12px 30px rgba(30, 64, 175, 0.2)',
                    transition: { duration: 0.4, ease: "easeOut" as const }
                  }}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <motion.div 
                      className="text-sm text-blue-200 font-semibold mb-2"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      {item.date}
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-semibold text-white mb-3"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.div 
                      className="max-h-32 overflow-y-auto card-scrollbar"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      <p className="text-blue-100 pr-2 leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Indicateurs de page */}
          {totalPages > 1 && (
            <motion.div 
              className="flex justify-center mt-12 space-x-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {Array.from({ length: totalPages }, (_, i) => (
                <motion.button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                    i === currentIndex 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  variants={indicatorVariants}
                  animate={i === currentIndex ? "active" : "inactive"}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={isAnimating}
                  aria-label={`Page ${i + 1}`}
                >
                  {i === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-white rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Indicateur de progression */}
          {totalPages > 1 && (
            <motion.div 
              className="flex justify-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="bg-gray-200 rounded-full h-2 w-32 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex + 1) / totalPages) * 100}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" as const }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default AVosCotes; 