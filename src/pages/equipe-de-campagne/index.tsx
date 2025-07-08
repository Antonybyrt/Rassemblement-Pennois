import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { team } from '@/data/EquipeData';
import TeamMemberDialog from '@/components/dialog/TeamMemberDialog';

const ListeElectorale: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<null | number>(null);
  const visibleTeam = showAll ? team : team.slice(0, 8);

  return (
    <div className="font-sans bg-gradient-to-br from-[#1976d2] to-[#003366] min-h-screen flex flex-col">
      <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />
      <main className="flex-1 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                Équipe de campagne
              </motion.h1>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "6rem" }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <motion.p 
                className="text-blue-100 text-lg mt-6 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Découvrez les membres dévoués qui composent notre équipe de campagne
              </motion.p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {visibleTeam.map((member, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/90 rounded-lg p-6 flex flex-col items-center shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  onClick={() => setSelected(idx)}
                >
                  <div className="w-32 h-32 mb-4 relative">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full border-4 border-blue-200"
                      sizes="128px"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 text-center">{member.name}</h2>
                  <p className="text-gray-600 text-center text-sm mt-1">{member.profession}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAll((v) => !v)}
                className="bg-white/90 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-white hover:scale-105 transition-all border border-blue-200"
              >
                {showAll ? 'Voir moins' : 'Voir plus'}
              </button>
            </div>
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