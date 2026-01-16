import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { team } from '@/data/EquipeData';
import TeamMemberDialog from '@/components/dialog/TeamMemberDialog';

const ListeElectorale: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<null | number>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const visibleTeam = showAll ? team : team.slice(0, 8);

  const toggleShowAll = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowAll((v) => !v);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: "easeIn" as const
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" as const }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  return (
    <div className="font-sans min-h-screen flex flex-col relative overflow-hidden pt-20">
      <SEOHead 
        title="Équipe de Campagne - Rassemblement Pennois"
        description="Découvrez les membres dévoués qui composent notre équipe de campagne pour les élections municipales 2026 aux Pennes-Mirabeau."
        canonicalUrl="https://www.rassemblementpennois.com/equipe-de-campagne"
      />

      <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />

      {/* Hero Section avec image de fond */}
      <div className="relative bg-gradient-to-br from-[#1976d2] via-[#1565c0] to-[#003366]">
      
        <div className="py-20 relative z-10">
          {/* Formes décoratives */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <motion.div
              className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0]
              }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
                👥 Notre équipe
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            >
              Équipe de campagne
            </motion.h1>
            
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-white to-blue-200 mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            <motion.p 
              className="text-blue-50 text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Découvrez les membres dévoués et passionnés qui composent notre équipe de campagne pour les élections municipales 2026
            </motion.p>

            {/* Statistiques */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-white font-semibold">{team.length} membres</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-white font-semibold">Dévoués et engagés</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contenu principal avec fond blanc */}
      <main className="flex-1 bg-gradient-to-br from-white via-blue-50 to-white relative">
        {/* Décoration de fond */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="py-20 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="wait">
                {visibleTeam.map((member, idx) => (
                  <motion.div
                    key={`${showAll ? 'all' : 'partial'}-${idx}`}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ delay: idx * 0.05 }}
                    className="group relative bg-white rounded-2xl p-6 flex flex-col items-center shadow-xl hover:shadow-2xl cursor-pointer h-full border-2 border-transparent hover:border-blue-300 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.03, 
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelected(idx)}
                  >
                    {/* Badge numéro */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#1976d2] to-[#003366] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {idx + 1}
                    </div>

                    {/* Photo avec effet */}
                    <div className="relative mb-5">
                      <div className="w-28 h-28 relative mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover rounded-full border-4 border-blue-200 group-hover:border-blue-400 transition-colors relative z-10"
                          sizes="112px"
                        />
                      </div>
                    </div>

                    {/* Informations */}
                    <div className="flex-1 flex flex-col items-center w-full text-center mb-4">
                      <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                        {member.name}
                      </h2>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-2"></div>
                      <p className="text-gray-600 text-sm">{member.profession}</p>
                    </div>

                    {/* Bouton avec icône */}
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelected(idx); }}
                      className="group/btn w-full px-4 py-2.5 bg-gradient-to-r from-[#1976d2] to-[#003366] text-white rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>En savoir plus</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>

                    {/* Effet de brillance au hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000 pointer-events-none rounded-2xl"></div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            <motion.div 
              className="flex justify-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                onClick={toggleShowAll}
                disabled={isAnimating}
                className="group relative bg-gradient-to-r from-[#1976d2] to-[#003366] text-white font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span className="text-lg">{showAll ? 'Voir moins de membres' : 'Voir toute l\'équipe'}</span>
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: showAll ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </span>
                
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-all duration-1000"></div>
                
                {/* Border animé */}
                <div className="absolute inset-0 rounded-full border-2 border-white/30"></div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        <AnimatePresence>
          {selected !== null && (
            <TeamMemberDialog
              member={team[selected]}
              onClose={() => setSelected(null)}
            />
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default ListeElectorale; 