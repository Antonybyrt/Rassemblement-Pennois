import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const team = [
  {
    name: 'Maximilien Fusone',
    photo: '/maximilien.png',
  },
  {
    name: 'Sophie Martin',
    photo: '/default-profile.png',
  },
  {
    name: 'Julien Bernard',
    photo: '/default-profile.png',
  },
  {
    name: 'Claire Dubois',
    photo: '/default-profile.png',
  },
  {
    name: 'Lucas Petit',
    photo: '/default-profile.png',
  },
  {
    name: 'Emma Lefevre',
    photo: '/default-profile.png',
  },
  {
    name: 'Nicolas Girard',
    photo: '/default-profile.png',
  },
  {
    name: 'Camille Moreau',
    photo: '/default-profile.png',
  },
  {
    name: 'Hugo Laurent',
    photo: '/default-profile.png',
  },
  {
    name: 'Chloé Robert',
    photo: '/default-profile.png',
  },
  {
    name: 'Antoine Mercier',
    photo: '/default-profile.png',
  },
  {
    name: 'Manon Faure',
    photo: '/default-profile.png',
  },
  {
    name: 'Thomas Blanchard',
    photo: '/default-profile.png',
  },
  {
    name: 'Laura Mathieu',
    photo: '/default-profile.png',
  },
  {
    name: 'Alexandre Caron',
    photo: '/default-profile.png',
  },
  {
    name: 'Pauline Lefort',
    photo: '/default-profile.png',
  },
  {
    name: 'Vincent Perrot',
    photo: '/default-profile.png',
  },
  {
    name: 'Elodie Gauthier',
    photo: '/default-profile.png',
  },
  {
    name: 'Baptiste Leroy',
    photo: '/default-profile.png',
  },
  {
    name: 'Sabrina Colin',
    photo: '/default-profile.png',
  },
  {
    name: 'Olivier Dupuis',
    photo: '/default-profile.png',
  },
];

const ListeElectorale: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
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
            <h1 className="text-4xl font-bold text-white mb-10 text-center">Liste électorale</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {visibleTeam.map((member, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/90 rounded-lg p-6 flex flex-col items-center shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.07 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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
      </main>
      <Footer />
    </div>
  );
};

export default ListeElectorale; 