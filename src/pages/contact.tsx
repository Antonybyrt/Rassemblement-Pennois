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

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />
        
        <main className="pt-16 sm:pt-20 pb-8 sm:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête de la page */}
            <motion.div
              className="text-center mb-8 sm:mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                💡 Boîte à Idées
              </h1>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-4 sm:mb-6" />
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Partagez vos idées et suggestions pour améliorer Les Pennes-Mirabeau. Votre voix compte pour notre projet municipal !
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
              {/* Formulaire de contact */}
              <ContactForm />

              {/* Informations de contact */}
              <motion.div
                className="space-y-6 sm:space-y-8"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Informations générales */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Informations de contact
                  </h3>
                  
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
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Suivez-nous
                  </h3>
                  
                  <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
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
                        width={40}
                        height={40}
                        className="sm:w-12 sm:h-12"
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
                        width={40}
                        height={40}
                        className="sm:w-12 sm:h-12"
                      />
                    </a>
                    <a 
                      href="https://www.youtube.com/@RassemblementPennois" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                      title="Youtube - Rassemblement National Les Pennes Mirabeau"
                    >
                      <Image
                        src="/youtube.png"
                        alt="Youtube"
                        width={40}
                        height={40}
                        className="sm:w-12 sm:h-12"
                      />
                    </a>
                  </div>
                </div>

                {/* Principe de la Boîte à Idées */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    💡 Comment ça marche ?
                  </h3>
                  
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
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
