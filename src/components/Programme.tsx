import React from 'react';
import { motion } from 'framer-motion';

interface Theme {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

const Programme: React.FC = () => {
  const themes: Theme[] = [
    {
      title: "Sécurité",
      description: "Renforcer la sécurité dans tous les quartiers, améliorer l'éclairage public et développer la vidéoprotection.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      bgColor: "bg-blue-600"
    },
    {
      title: "Environnement",
      description: "Développer les espaces verts, améliorer la gestion des déchets et promouvoir les énergies renouvelables.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: "bg-green-600"
    },
    {
      title: "Commerce",
      description: "Soutenir les commerces locaux, revitaliser le centre-ville et créer de nouveaux espaces commerciaux.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      bgColor: "bg-orange-600"
    },
    {
      title: "Transport",
      description: "Améliorer les transports en commun, développer les pistes cyclables et faciliter les déplacements.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      bgColor: "bg-purple-600"
    },
    {
      title: "Culture",
      description: "Développer l'offre culturelle, soutenir les associations et créer de nouveaux événements.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m4 0V2a1 1 0 011-1h4a1 1 0 011 1v2M7 4h10m0 0v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4m0 0h10" />
        </svg>
      ),
      bgColor: "bg-red-600"
    },
    {
      title: "Solidarité",
      description: "Renforcer les services sociaux, soutenir les plus vulnérables et créer du lien social.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      bgColor: "bg-pink-600"
    }
  ];

  return (
    <motion.section
      id="programme"
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Programme</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des propositions concrètes pour améliorer le quotidien des Pennois et construire ensemble l'avenir de notre ville.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${theme.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                {theme.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{theme.title}</h3>
              <p className="text-gray-600">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Programme; 