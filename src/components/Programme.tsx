import React from 'react';
import { motion } from 'framer-motion';
import { themes } from '../data/ProgrammeData';

const Programme: React.FC = () => {
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
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1976d2] to-[#003366] rounded-lg p-8 shadow transition-shadow cursor-pointer"
              whileHover={{ scale: 1.025, y: -4, boxShadow: '0 4px 16px 0 rgba(30, 64, 175, 0.15)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className={`w-12 h-12 ${theme.iconBgColor} rounded-lg flex items-center justify-center mb-6`}>
                {theme.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{theme.title}</h3>
              <p className="text-blue-100">{theme.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Programme; 