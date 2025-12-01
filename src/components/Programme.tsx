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
    <motion.section
      id="programme"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Notre programme
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto mt-6 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Découvrez les différents aspects de notre programme pour Les Pennes-Mirabeau
          </motion.p>
          <motion.p 
            className="text-sm text-gray-500 max-w-2xl mx-auto mt-4 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            La suite du programme sera annoncée prochainement
          </motion.p>
        </div>
        
        {/* Grille de cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {programmeCards.map((card, index) => {
            const videoId = getYouTubeVideoId(card.videoUrl);
            
            return (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Header de la card */}
                <div className="bg-gradient-to-r from-blue-600 to-red-700 px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-white font-semibold ml-4">{card.title}</span>
                  </div>
                </div>
                
                {/* Contenu de la vidéo */}
                <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Programme; 