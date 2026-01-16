import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Boîte à Idées - Rassemblement Pennois</title>
        <meta name="description" content="Partagez vos idées et suggestions pour améliorer Les Pennes-Mirabeau. Votre voix compte pour notre campagne municipale 2026." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col relative overflow-hidden pt-20">
        <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />
        
        {/* Hero Section avec fond bleu */}
        <div className="relative bg-gradient-to-br from-[#1976d2] via-[#1565c0] to-[#003366]">

          {/* Formes décoratives */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <motion.div
              className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0]
              }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* En-tête de la page */}
          <div className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                className="inline-block mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
                  💡 Vos idées
                </span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              >
                Boîte à Idées
              </motion.h1>
              
              <motion.div 
                className="w-32 h-1.5 bg-gradient-to-r from-white to-blue-200 mx-auto rounded-full mb-8"
                initial={{ width: 0 }}
                animate={{ width: "8rem" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              <motion.p 
                className="text-blue-50 text-xl max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Partagez vos idées et suggestions pour améliorer Les Pennes-Mirabeau. Votre voix compte pour notre projet municipal !
              </motion.p>

              {/* Statistiques */}
              <motion.div
                className="flex flex-wrap justify-center gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white font-semibold">Réponse garantie</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-white font-semibold">Impact réel</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <main className="flex-1 bg-gradient-to-br from-white via-blue-50 to-white relative">
          {/* Décoration de fond */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
          </div>

          <div className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Formulaire de contact */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <ContactForm />
              </motion.div>

              {/* Informations de contact */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Informations générales */}
                <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border-2 border-transparent hover:border-blue-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1976d2] to-[#003366] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Informations de contact
                    </h3>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h4>
                        <p className="text-gray-600 text-sm sm:text-base break-all">rassemblement.pennois@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Commune</h4>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Les Pennes-Mirabeau<br />
                          13170 Bouches-du-Rhône
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border-2 border-transparent hover:border-blue-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1976d2] to-[#003366] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Suivez-nous
                    </h3>
                  </div>
                  
                  <div className="flex justify-center sm:justify-start space-x-4">
                    <motion.a 
                      href="https://www.facebook.com/profile.php?id=100071361176018" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transform hover:scale-110 transition-transform duration-300"
                      title="Facebook - Maximilien Fusone"
                      whileHover={{ y: -5 }}
                    >
                      <Image
                        src="/facebook.png"
                        alt="Facebook"
                        width={48}
                        height={48}
                        className="drop-shadow-lg"
                      />
                    </motion.a>
                    <motion.a 
                      href="https://www.instagram.com/maximilien.fusone/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transform hover:scale-110 transition-transform duration-300"
                      title="Instagram - @maximilien.fusone"
                      whileHover={{ y: -5 }}
                    >
                      <Image
                        src="/instagram.png"
                        alt="Instagram"
                        width={48}
                        height={48}
                        className="drop-shadow-lg"
                      />
                    </motion.a>
                    <motion.a 
                      href="https://www.youtube.com/@RassemblementPennois" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transform hover:scale-110 transition-transform duration-300"
                      title="Youtube - Rassemblement National Les Pennes Mirabeau"
                      whileHover={{ y: -5 }}
                    >
                      <Image
                        src="/youtube.png"
                        alt="Youtube"
                        width={48}
                        height={48}
                        className="drop-shadow-lg"
                      />
                    </motion.a>
                  </div>
                </div>

                {/* Principe de la Boîte à Idées */}
                <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border-2 border-transparent hover:border-blue-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1976d2] to-[#003366] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Comment ça marche ?
                    </h3>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Votre avis compte</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          Chaque citoyen a des idées précieuses pour améliorer notre commune. 
                          Votre expérience quotidienne nous aide à mieux comprendre les besoins réels.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Réponse garantie</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          Notre équipe étudie chaque suggestion avec attention. 
                          Vous recevrez une réponse personnalisée.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Idées concrètes</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          Les meilleures suggestions seront intégrées dans notre programme municipal 
                          et mises en œuvre si nous sommes élus en 2026.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm text-blue-800 font-medium">
                        <strong>Engagement :</strong> Chaque idée reçue sera examinée et vous recevrez une réponse.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
