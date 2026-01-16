import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { news } from '@/data/AVosCotesData';

const AVosCotes: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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

  const openVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const getYouTubeVideoId = (url: string): string => {
    const patterns = [
      // YouTube Shorts
      /(?:youtube\.com\/shorts\/)([^#&?]*)/,
      // YouTube watch
      /(?:youtube\.com\/watch\?v=)([^#&?]*)/,
      // youtu.be
      /(?:youtu\.be\/)([^#&?]*)/,
      // YouTube embed
      /(?:youtube\.com\/embed\/)([^#&?]*)/,
      // Autres formats
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1] && match[1].length === 11) {
        return match[1];
      }
    }
    
    return '';
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const cardVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
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
    <section
      id="avoscotes"
      className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Décoration de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête de section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-gray-100 text-blue-800 rounded-full text-sm font-semibold">
              📰 Actualités
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#1976d2] to-gray-900 bg-clip-text text-transparent">
            À vos côtés
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Suivez l'actualité de notre campagne et nos actions sur le terrain
          </p>
        </motion.div>

        <div className="relative">

          {/* Conteneur des cartes */}
          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {[0, 1, 2].map((slotIndex) => {
              const item = visibleNews[slotIndex];
              if (!item) return <div key={slotIndex} className="h-full" />;
              
              const realIndex = currentIndex * 3 + slotIndex;
              return (
                <div key={slotIndex} className="relative h-full">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={`news-${realIndex}-${currentIndex}`}
                      variants={cardVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        opacity: { duration: 0.2 },
                      }}
                      className="group bg-gradient-to-br from-[#1976d2] to-[#003366] rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer relative h-full flex flex-col max-h-[500px] transition-all duration-300 border-2 border-transparent hover:border-blue-300"
                  whileHover={{ 
                    scale: 1.03, 
                    y: -8, 
                    transition: { duration: 0.3, ease: "easeOut" as const }
                  }}
                >
                  {/* Badge de type */}
                  <div className="absolute top-4 right-4 z-20">
                    {item.type === 'video' ? (
                      <motion.div 
                        className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        <span>VIDÉO</span>
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>PHOTO</span>
                      </motion.div>
                    )}
                  </div>
                  <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
                    {item.type === 'video' ? (
                      <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center group">
                        {/* Miniature YouTube */}
                        <div className="absolute inset-0">
                          <img
                            src={`https://img.youtube.com/vi/${getYouTubeVideoId(item.video!)}/maxresdefault.jpg`}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback vers une image de qualité inférieure si maxresdefault n'existe pas
                              const target = e.target as HTMLImageElement;
                              target.src = `https://img.youtube.com/vi/${getYouTubeVideoId(item.video!)}/hqdefault.jpg`;
                            }}
                          />
                          {/* Overlay sombre */}
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                        
                        <button
                          className="absolute inset-0 w-full h-full cursor-pointer z-30"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openVideo(item.video!);
                          }}
                          style={{ background: 'transparent', border: 'none' }}
                        >
                          {/* Icône de lecture YouTube */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-red-600 rounded-full p-4 shadow-lg group-hover:bg-red-700 group-hover:scale-110 transition-all duration-300">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                          
                          {/* Texte d'instruction */}
                          <div className="absolute bottom-2 left-2 right-2 text-center z-10">
                            <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                              Cliquez pour lire
                            </span>
                          </div>
                        </button>
                      </div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image
                          src={item.image!}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow min-h-0 bg-gradient-to-b from-transparent to-black/10">
                    {/* Date avec icône */}
                    <motion.div 
                      className="flex items-center gap-2 text-xs text-blue-200 font-semibold mb-2 flex-shrink-0"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{item.date}</span>
                    </motion.div>

                    {/* Titre */}
                    <motion.h3 
                      className="text-lg font-bold text-white mb-3 flex-shrink-0 line-clamp-2 group-hover:text-blue-100 transition-colors"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      {item.title}
                    </motion.h3>

                    {/* Séparateur */}
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-300 to-transparent mb-3 flex-shrink-0"></div>

                    {/* Description avec scroll */}
                    <motion.div 
                      className="flex-grow overflow-y-auto card-scrollbar min-h-0"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      <p className="text-sm text-blue-50 pr-2 leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000 pointer-events-none"></div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Navigation et indicateurs en dessous */}
          {totalPages > 1 && (
            <motion.div 
              className="flex flex-col items-center mt-16 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Barre de progression */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-full h-1.5 w-64 overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#1976d2] via-blue-500 to-[#003366] rounded-full shadow-lg"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex + 1) / totalPages) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" as const }}
                />
              </div>

              {/* Boutons de navigation */}
              <div className="flex items-center justify-center gap-4">
                {/* Flèche gauche */}
                <motion.button
                  onClick={prevPage}
                  className="group relative bg-gradient-to-br from-[#1976d2] to-[#003366] text-white rounded-full p-2.5 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isAnimating}
                  aria-label="Précédent"
                >
                  <svg 
                    className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.button>

                {/* Compteur de pages */}
                <div className="flex items-center gap-3 bg-white rounded-full px-5 py-2 shadow-md">
                  <span className="text-lg font-bold text-[#1976d2]">{currentIndex + 1}</span>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#1976d2] to-[#003366] rounded-full"></div>
                  <span className="text-sm text-gray-400">{totalPages}</span>
                </div>

                {/* Flèche droite */}
                <motion.button
                  onClick={nextPage}
                  className="group relative bg-gradient-to-br from-[#1976d2] to-[#003366] text-white rounded-full p-2.5 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isAnimating}
                  aria-label="Suivant"
                >
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Modal pour la vidéo */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div
              className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header de la modal */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700">
                <h3 className="text-white font-semibold text-lg">🎬 Vidéo de campagne</h3>
                <motion.button
                  onClick={closeVideo}
                  className="text-white hover:text-gray-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              
              {/* Contenu de la vidéo */}
              <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedVideo)}?autoplay=1&rel=0&modestbranding=1`}
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-b-2xl"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              
              {/* Footer avec instructions */}
              <div className="p-4 bg-gray-50 text-center">
                <p className="text-gray-600 text-sm">
                  💡 Cliquez en dehors de la vidéo ou sur la croix pour fermer
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AVosCotes; 