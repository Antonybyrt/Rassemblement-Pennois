import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => (
  <motion.footer
    className="bg-gray-900 text-white py-12"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Rassemblement Pennois</h3>
          <p className="text-gray-300">
            Maximilien Fusone, candidat aux élections municipales 2026 pour Les Pennes-Mirabeau.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
          <ul className="space-y-2">
            <li><a href="#accueil" className="text-gray-300 hover:text-white transition-colors">Accueil</a></li>
            <li><a href="#programme" className="text-gray-300 hover:text-white transition-colors">Programme</a></li>
            <li><a href="#avoscotes" className="text-gray-300 hover:text-white transition-colors">À vos côtés</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-300 mb-2">rassemblement.pennois@gmail.com</p>
          <p className="text-gray-300">Les Pennes-Mirabeau, France</p>
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