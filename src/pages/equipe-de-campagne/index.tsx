import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const team = [
  {
    name: 'Maximilien Fusone',
    photo: '/maximilien.jpg',
    profession: 'Conseiller municipal, Conseiller régional',
    description: "Chères Pennoises, chers Pennois, \n \n Conseiller municipal de notre commune depuis 2014 et conseiller régional de Provence-Alpes-Côte-d'Azur depuis 2021, j'ai eu l'honneur de vous représenter à différents niveaux et de porter vos préoccupations dans les instances locales et régionales. Ces deux mandats m'ont permis d'acquérir une solide expérience et une connaissance approfondie des dossiers qui concernent notre territoire. \n \n Pacsé et père de deux enfants, je suis profondément attaché à notre commune et à ce qui fait son identité : ses villages, ses traditions, son cadre de vie. Je sais à quel point il est essentiel de préserver les Pennes-Mirabeau, tout en préparant l'avenir avec responsabilité et ambition. \n \n Aujourd'hui, avec mon équipe, nous souhaitons rassembler les Pennois autour d'un projet clair, fidèle à nos valeurs et résolument tourné vers les enjeux de demain : sécurité, qualité de vie, développement durable, services publics de proximité, soutien à tous les Pennois. \n \n Je suis convaincu que c'est avec vous et pour vous que nous pourrons construire l'avenir des Pennes-Mirabeau. \n \n Avec engagement et détermination."
  },
  {
    name: 'Antony Loussararian',
    photo: '/Antony.png',
    profession: 'Ingénieur Blockchain',
    description: "Antony, 23 ans étudiant en 5e année d'ingénieurie informatique orienté blockchain, et actuellement alternant en tant qu'ingénieur blockchain."
  },
  {
    name: 'Jean-Jacques Louedec',
    photo: '/Jean-Jacques.png',
    profession: 'Cuisinier des collèges à la retraite',
    description: "Jean-Jacques, 64 ans, cusinier des collèges à la retraite."
  },
  {
    name: 'Maeva Trucy',
    photo: '/default-profile.png',
    profession: 'Agent polyvalent',
    description: "Maëva 29ans maman de deux petits garçon travaille dans un collège en tant qu'agent polyvalent. \n \n Très soucieuse sur le bien être animal et leurs protections. \n \n Pratique de la natation au cercle des nageurs et continu à nager en loisir."
  },
  {
    name: 'Nadine Legal-Giavelli',
    photo: '/default-profile.png',
    profession: 'Retraité de la fonction publique territoriale',
    description: "Nadine Legal-Giavelli, Née le 16/10/1957 à Aix en Provence. \n \n Retraité de la fonction publique territoriale de 1982 à 2024 en tant Atsem. Animatrice au centre aéré petit enfance de 1989 à 2024. \n \n Mariée une fille âgée de 51 ans, 2 petits fils âgés de 29 et 24 ans. \n \n J’ai pratiqué la course à pieds jusqu’en 2015. \n \n Je suis amoureuse de ma ville Les pennes Mirabeau depuis l’âge de 12 ans."
  },
  {
    name: 'Vincent Ferretti',
    photo: '/default-profile.png',
    profession: 'Fonctionnaire de police à la retraite',
    description: "71 ans, deux enfants, fonctionnaire de police à la retraite."
  },
  {
    name: 'Béatrice Rizzo',
    photo: '/default-profile.png',
    profession: 'Attachée principale du ministère des armées',
    description: "Béatrice RIZZO, 66 ans, cadre A, attachée principale du ministère des armées, 46 ans d’activité. \n \n Représentante nationale des personnels du service du commissariat des armées. Mariée, 1 enfant en études supérieures. \n \n J’aime la musique, le cinéma, le sport, les voyages et les jeux de cartes."
  },
  {
    name: 'Viviane Verdollin',
    photo: '/default-profile.png',
    profession: 'Comptable retraitée',
    description: "Viviane, 73 ans, retraitée. \n \n A participé au marathon des aigles en 1994, de Paris et de New York en 1997. Participation à une épreuve de 5km de natation en 2018. \n \n Medaillée de bronze aux championnats de france d'aviron indoor en 2019."
  },
  {
    name: 'Jérôme Vonfeld',
    photo: '/default-profile.png',
    profession: 'Commerçant en restauration',
    description: "Jérôme, 47 ans, pennois de naissance et deux enfants. \n \n Commerçant en restauration aux Pennes Mirabeau, délégué du personnel FO à Airbus. \n \n Entraîneur de football et champion de france de UFOLEP en 1998 avec Air Voilerie (football)."
  },
  {
    name: 'Anonyme',
    photo: '/default-profile.png',
    profession: 'Profession',
    description: "Description du membre anonyme."
  },
  {
    name: 'Anonyme',
    photo: '/default-profile.png',
    profession: 'Profession',
    description: "Description du membre anonyme."
  },
  {
    name: 'Anonyme',
    photo: '/default-profile.png',
    profession: 'Profession',
    description: "Description du membre anonyme."
  },
  {
    name: 'Anonyme',
    photo: '/default-profile.png',
    profession: 'Profession',
    description: "Description du membre anonyme."
  },
  {
    name: 'Anonyme',
    photo: '/default-profile.png',
    profession: 'Profession',
    description: "Description du membre anonyme."
  },
  {
    name: 'Anonyme',
    photo: '/default-profile.png',
    profession: 'Profession',
    description: "Description du membre anonyme."
  },
  {
    name: 'Anonyme',
    photo: '/default-profile.png',
    profession: 'Profession',
    description: "Description du membre anonyme."
  },
  {
    name: 'Anonyme',
    photo: '/default-profile.png',
    profession: 'Profession',
    description: "Description du membre anonyme."
  },
  {
    name: 'Anonyme',
    photo: '/default-profile.png',
    profession: 'Profession',
    description: "Description du membre anonyme."
  },
];

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
            <h1 className="text-4xl font-bold text-white mb-10 text-center">Équipe de campagne</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {visibleTeam.map((member, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/90 rounded-lg p-6 flex flex-col items-center shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.07 }}
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
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
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
                  onClick={() => setSelected(null)}
                  aria-label="Fermer"
                >
                  &times;
                </button>
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 mb-4 relative">
                    <Image
                      src={team[selected].photo}
                      alt={team[selected].name}
                      fill
                      className="object-cover rounded-full border-4 border-blue-200"
                      sizes="112px"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{team[selected].name}</h2>
                  <p className="text-blue-700 text-center font-semibold mb-2">{team[selected].profession}</p>
                  <div className="text-gray-700 text-center max-h-56 overflow-y-auto px-2 whitespace-pre-line">
                    {team[selected].description}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default ListeElectorale; 