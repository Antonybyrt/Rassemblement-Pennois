import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BackgroundImage: React.FC = () => (
  <section className="relative h-100 overflow-hidden">
    <Image
      src="/moulin.png"
      alt="Les Pennes-Mirabeau"
      fill
      className="object-cover object-center"
      priority
      sizes="100vw"
    />
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    ></motion.div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Les Pennes-Mirabeau
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-white to-blue-200 mx-auto rounded-full mb-4"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.p 
          className="text-xl md:text-2xl drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Préserver les Pennes Mirabeau
        </motion.p>
      </div>
    </div>
  </section>
);

export default BackgroundImage; 