import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const websites = [
  {
    id: 1,
    name: 'Landing Page - Clínica Odontológica',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Landing page moderna e profissional para clínica odontológica, com foco em conversão de pacientes'
  },
  {
    id: 2,
    name: 'Landing Page - Advocacia',
    image: 'https://images.pexels.com/photos/5668862/pexels-photo-5668862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Landing page elegante para escritório de advocacia, destacando serviços jurídicos'
  },
  {
    id: 3,
    name: 'Landing Page - Design de Unhas',
    image: 'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Landing page criativa para designer de unhas, com portfólio e agendamento online'
  },
  {
    id: 4,
    name: 'Landing Page - Consultoria',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Landing page profissional para serviços de consultoria, com formulário de contato otimizado'
  }
];

const WebsiteShowcase: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={20} />
          Voltar para página inicial
        </motion.button>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500"
        >
          Nossas Landing Pages
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {websites.map((website) => (
            <motion.div
              key={website.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video relative group">
                <img
                  src={website.image}
                  alt={website.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <p className="text-white text-center font-medium">
                    {website.description}
                  </p>
                </div>
              </div>
              <div className="p-6 border-t border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {website.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteShowcase;