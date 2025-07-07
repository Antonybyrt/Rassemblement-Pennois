import React from 'react';
import { motion } from 'framer-motion';

interface Theme {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
}

const Programme: React.FC = () => {
  const themes: Theme[] = [
    {
      title: "Sécurité",
      description: "Renforcer la sécurité et offrir un environnement plus sûr pour tous les Pennois.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconBgColor: "bg-blue-600"
    },
    {
      title: "Urbanisation modérée",
      description: "Préserver le cadre de vie en évitant la bétonisation, tout en facilitant l'accès au logement pour les Pennois.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      iconBgColor: "bg-green-600"
    },
    {
      title: "Les Pennois d'abord",
      description: "Emplois, éducation, loisirs, enfance, jeunesse, familles et seniors",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      iconBgColor: "bg-orange-600"
    },
    {
      title: "La proximité",
      description: "Une équipe dynamique, à vos côtés et à votre écoute.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      iconBgColor: "bg-red-600"
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
            Vos préoccupations sont notre priorité !
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1976d2] to-[#003366] rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${theme.iconBgColor} rounded-lg flex items-center justify-center mb-6`}>
                {theme.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{theme.title}</h3>
              <p className="text-blue-100">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Programme; 