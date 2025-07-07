import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero: React.FC = () => (
  <motion.section
    id="accueil"
    className="relative bg-gradient-to-br from-[#1976d2] to-[#003366]"
    initial={{ opacity: 0, scale: 0.8, y: 60 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-white leading-tight">
              Maximilien Fusone
            </h2>
            <h3 className="text-2xl text-blue-200 font-semibold">
              Candidat aux élections municipales 2026
            </h3>
            <p className="text-xl text-blue-100 leading-relaxed">
            Conseiller municipal des Pennes-Mirabeau depuis 2014
            Conseiller régional de Provence-Alpes-Côte-d'Azur depuis 2021
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#programme"
              className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-white bg-transparent hover:bg-white hover:text-[#003366] transition-colors duration-200 shadow-md text-center"
              style={{backdropFilter: 'blur(2px)'}}
            >
              Découvrir le programme
            </a>
            <a
              href="/equipe-de-campagne"
              className="px-8 py-4 rounded-lg font-semibold text-[#003366] bg-white border-2 border-white hover:bg-transparent hover:text-white transition-colors duration-200 shadow-md text-center"
              style={{backdropFilter: 'blur(2px)'}}
            >
              Voir l'équipe de campagne
            </a>
          </div>
        </div>
        <div className="relative">
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Image
              src="/maximilien.jpg"
              alt="Maximilien Fusone"
              width={500}
              height={600}
              className="rounded-lg shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Hero; 