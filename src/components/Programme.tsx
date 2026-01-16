import React from 'react';
import { motion } from 'framer-motion';
import { programmeCards } from '@/data/ProgrammeVideosData';

const Programme: React.FC = () => {
  // Fonction pour extraire l'ID YouTube de différentes URL formats (incluant les Shorts)
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

  return (
    <section
      id="programme"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Décoration de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-80 h-80 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
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
            <span className="px-4 py-2 bg-gradient-to-r from-red-100 to-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              🎬 En vidéo
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1976d2] to-[#dc2626] bg-clip-text text-transparent">
            Notre programme en action
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos propositions et engagements pour Les Pennes-Mirabeau
          </p>
          
          <motion.p 
            className="inline-flex items-center gap-2 mt-6 text-sm text-gray-500 bg-blue-50 px-4 py-2 rounded-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>La suite du programme sera annoncée prochainement</span>
          </motion.p>
        </motion.div>
        
        {/* Grille de cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {programmeCards.map((card, index) => {
            const videoId = getYouTubeVideoId(card.videoUrl);
            
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >

                  {/* Header de la card */}
                  <div className="bg-gradient-to-r from-[#1976d2] to-[#dc2626] px-6 py-5">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <h3 className="text-white font-bold text-lg uppercase tracking-wide">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Contenu de la vidéo */}
                  <div className="relative w-full bg-gray-100" style={{ aspectRatio: '16/9' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
                      width="100%"
                      height="100%"
                      style={{ border: 'none' }}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>

                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000 pointer-events-none"></div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bouton d'action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#avoscotes"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1976d2] to-[#003366] text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Suivez notre actualité</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Programme; 