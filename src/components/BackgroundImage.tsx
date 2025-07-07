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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Les Pennes-Mirabeau
        </h2>
        <p className="text-xl md:text-2xl drop-shadow-lg">
          Notre ville, notre avenir
        </p>
      </div>
    </div>
  </section>
);

export default BackgroundImage; 