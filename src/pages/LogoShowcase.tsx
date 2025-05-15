import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const logos = [
  {
    id: 1,
    name: 'Mauro Melo Advogado',
    image: 'https://media.discordapp.net/attachments/1341553970686201918/1372373936129572954/maurologo.png?ex=68268a53&is=682538d3&hm=56380fbe07b998ceeea0aad465d92322bad5e5b84197ea035ce32786ad52dbe6&=&format=webp&quality=lossless',
    description: 'Logo para escritório de advocacia com elementos que representam a justiça e profissionalismo'
  },
  {
    id: 2,
    name: 'Marina Dias Odontologia',
    image: 'https://cdn.discordapp.com/attachments/1341553970686201918/1372373936406532107/marinalogo.png?ex=68268a53&is=682538d3&hm=fd1da9db789ebccb848b81d122961c082b30309f819d6c6b7789cfad537ab06d&',
    description: 'Logo clean e moderno para clínica odontológica'
  },
  {
    id: 3,
    name: 'Fernanda Nail Designer',
    image: 'https://cdn.discordapp.com/attachments/1341553970686201918/1372373936687415336/fernandalogo.png?ex=68268a53&is=682538d3&hm=7ffd1c4ab0862978328819a754cf6e9f5bbfe19b460fcd226453d28bc7de6f7e&',
    description: 'Logo delicado com elemento de borboleta para designer de unhas'
  },
  {
    id: 4,
    name: 'Daniel Gomes Advocacia',
    image: 'https://cdn.discordapp.com/attachments/1341553970686201918/1372373937081548800/daniellogo.png?ex=68268a54&is=682538d4&hm=842d6ea577c69bbc1f34e0ee7c16a97ab561bba7a434655485b680e8f1701f28&',
    description: 'Logo minimalista e elegante para escritório de advocacia'
  }
];

const LogoShowcase: React.FC = () => {
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
          Nossa Galeria de Logomarcas
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {logos.map((logo) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square relative group">
                <div className="w-full h-full flex items-center justify-center p-8 bg-white dark:bg-gray-800">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/90 to-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <p className="text-white text-center font-medium">
                    {logo.description}
                  </p>
                </div>
              </div>
              <div className="p-6 border-t border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center">
                  {logo.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;