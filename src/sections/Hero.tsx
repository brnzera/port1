import React from 'react';
import UniverseParticles from '../components/UniverseParticles';
// import AnimatedGrid from '../components/AnimatedGrid'; // Removido grid antigo
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#181c26]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Fundo gradiente e textura de ruído */}
      <div className="hero-bg-gradient" />
      <div className="hero-bg-noise" />
      <UniverseParticles />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] w-full">
        {/* Headline MALI */}
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-lg tracking-tight"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
        >
          MALI
        </motion.h1>
        {/* Subheadline */}
        <motion.h2
          className="text-xl md:text-2xl font-medium mb-8 text-white/90 max-w-2xl mx-auto drop-shadow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: 'easeOut' }}
        >
          Oferecemos soluções digitais completas para impulsionar sua presença online e alavancar suas vendas.
        </motion.h2>
        {/* Botão CTA */}
        <motion.button
          onClick={scrollToServices}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.6, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.08, background: 'linear-gradient(90deg, #f59e42, #3b82f6)' }}
          whileTap={{ scale: 0.97 }}
          style={{ boxShadow: '0 4px 24px 0 rgba(80, 70, 229, 0.15)' }}
        >
          Nossos serviços
          <ArrowDown size={22} />
        </motion.button>
      </div>

      <div className="absolute bottom-8 animate-bounce z-10">
        <ArrowDown 
          size={28} 
          className="text-gray-200 cursor-pointer" 
          onClick={scrollToServices}
        />
      </div>
    </motion.section>
  );
};

export default Hero;