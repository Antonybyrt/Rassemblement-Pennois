import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    setIsSubmitting(true);

    const subject = `Nouveau message de ${formData.name}`;
    const body = `${formData.message}`;

    const mailtoLink = `mailto:rassemblement.pennois@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <motion.section
      id="contact"
      className="py-10 bg-gradient-to-br from-[#1976d2] to-[#003366]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Nous Contacter
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p 
            className="text-xl text-blue-100 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Une question ? Une suggestion ? N'hésitez pas à nous contacter.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-8">
            <div>
              <motion.h3 
                className="text-2xl font-semibold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                Informations de contact
              </motion.h3>
              <motion.div 
                className="w-16 h-0.5 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full mb-6"
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-blue-100">rassemblement.pennois@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Ville</p>
                    <p className="text-blue-100">Les Pennes-Mirabeau, France</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <motion.h3 
                className="text-2xl font-semibold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                Suivez-nous
              </motion.h3>
              <motion.div 
                className="w-16 h-0.5 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full mb-6"
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/maximilien.fusone.9" 
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
          <div className="bg-white/90 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 