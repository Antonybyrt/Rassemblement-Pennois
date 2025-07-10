import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer: React.FC = () => (
  <motion.footer
    className="bg-gray-900 text-white py-12"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <motion.h3 
            className="text-xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Rassemblement Pennois
          </motion.h3>
          <motion.div 
            className="w-16 h-0.5 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full mb-4"
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Maximilien Fusone, candidat aux élections municipales 2026 pour Les Pennes-Mirabeau.
          </motion.p>
        </div>
        
        <div>
          <motion.h4 
            className="text-lg font-semibold mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Liens rapides
          </motion.h4>
          <motion.div 
            className="w-12 h-0.5 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full mb-4"
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <ul className="space-y-2">
            <li><a href="/#accueil" className="text-gray-300 hover:text-white transition-colors">Accueil</a></li>
            <li><a href="/#programme" className="text-gray-300 hover:text-white transition-colors">Programme</a></li>
            <li><a href="/equipe-de-campagne" className="text-gray-300 hover:text-white transition-colors">Équipe</a></li>
            <li><a href="/#avoscotes" className="text-gray-300 hover:text-white transition-colors">À vos côtés</a></li>
          </ul>
        </div>
        
        <div>
          <motion.h4 
            className="text-lg font-semibold mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Contact
          </motion.h4>
          <motion.div 
            className="w-12 h-0.5 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full mb-4"
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <div className="space-y-2">
            <p className="text-gray-300">rassemblement.pennois@gmail.com</p>
            <p className="text-gray-300">Les Pennes-Mirabeau, France</p>
          </div>
        </div>

        <div>
          <motion.h4 
            className="text-lg font-semibold mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Suivez-nous
          </motion.h4>
          <motion.div 
            className="w-12 h-0.5 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full mb-4"
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/profile.php?id=100071361176018" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              title="Facebook - Maximilien Fusone"
            >
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={32}
                height={32}
              />
            </a>
            <a 
              href="https://www.instagram.com/maximilien.fusone/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              title="Instagram - @maximilien.fusone"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={32}
                height={32}
              />
            </a>
            <a 
              href="https://www.youtube.com/@rassemblementnationallespe7689" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              title="Youtube - Rassemblement National Les Pennes Mirabeau"
            >
              <Image
                src="/youtube.png"
                alt="Youtube"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-gray-300">
          © 2025 Rassemblement Pennois. Tous droits réservés.
        </p>
      </div>
    </div>
  </motion.footer>
);

export default Footer; 