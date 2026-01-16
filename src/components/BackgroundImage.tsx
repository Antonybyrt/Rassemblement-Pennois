import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundImage: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.8, 0.3]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Image avec effet parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <Image
          src="/moulin.png"
          alt="Les Pennes-Mirabeau"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay gradient pour meilleure lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </motion.div>

      {/* Contenu texte */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity }}
      >
        <div className="text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="px-5 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/30 shadow-xl">
                🏛️ Les Pennes-Mirabeau
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Préserver
              </span>
              <span className="block text-white drop-shadow-2xl">
                Les Pennes-Mirabeau
              </span>
            </h2>

            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-white via-blue-200 to-white mx-auto rounded-full mb-8 shadow-lg"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.p 
              className="text-2xl md:text-3xl font-light text-blue-50 drop-shadow-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Notre ville, notre avenir
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Vague de transition vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default BackgroundImage; 