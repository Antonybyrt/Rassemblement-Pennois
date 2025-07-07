import React from 'react';
import { motion } from 'framer-motion';

interface NewsItem {
  date: string;
  title: string;
  description: string;
}

const Actualites: React.FC = () => {
  const news: NewsItem[] = [
    {
      date: "15 Janvier 2025",
      title: "Lancement de la campagne",
      description: "Maximilien Fusone annonce officiellement sa candidature aux élections municipales de 2026."
    },
    {
      date: "20 Janvier 2025",
      title: "Première réunion publique",
      description: "Première réunion publique pour présenter le programme et échanger avec les Pennois."
    },
    {
      date: "25 Janvier 2025",
      title: "Programme détaillé",
      description: "Présentation du programme détaillé avec les propositions pour chaque thématique."
    }
  ];

  return (
    <motion.section
      id="actualites"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Actualités</h2>
          <p className="text-xl text-gray-600">
            Suivez l'actualité de notre campagne et les dernières nouvelles.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Lire la suite →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Actualites; 