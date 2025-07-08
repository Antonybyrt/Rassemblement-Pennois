import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TeamMember } from '@/data/EquipeData';

interface TeamMemberDialogProps {
  member: TeamMember;
  onClose: () => void;
}

const TeamMemberDialog: React.FC<TeamMemberDialogProps> = ({ member, onClose }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="bg-white rounded-lg p-8 max-w-md w-full relative shadow-xl"
      initial={{ scale: 0.8, y: 40 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.8, y: 40 }}
      onClick={e => e.stopPropagation()}
    >
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
        onClick={onClose}
        aria-label="Fermer"
      >
        &times;
      </button>
      <div className="flex flex-col items-center">
        <div className="w-28 h-28 mb-4 relative">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover rounded-full border-4 border-blue-200"
            sizes="112px"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{member.name}</h2>
        <p className="text-blue-700 text-center font-semibold mb-2">{member.profession}</p>
        <div className="text-gray-700 text-center max-h-56 overflow-y-auto px-2 whitespace-pre-line">
          {member.description}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default TeamMemberDialog; 