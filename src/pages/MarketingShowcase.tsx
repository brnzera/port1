import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const marketingContent = [
  {
    id: 1,
    name: 'Dr. Gabriel',
    subtitle: 'Bacharelado em Medicina',
    images: [
      'https://cdn.discordapp.com/attachments/1341553970686201918/1372399443063603230/SaveClip.App_491463538_18380233384141299_2843345357253926359_n.jpg?ex=6826a215&is=68255095&hm=33e768c48b84cf32f8f568a17b4345f9c69362205d953e3623199216ca35c77b&',
      'https://cdn.discordapp.com/attachments/1341553970686201918/1372399352735207586/SaveClip.App_491466414_18380233405141299_5358402073229968755_n.jpg?ex=6826a1ff&is=6825507f&hm=3f181fb7794978ab2f22f012fed949dd0b031207c7325fa9669bbf5685f32749&',
      'https://cdn.discordapp.com/attachments/1341553970686201918/1372399352735207586/SaveClip.App_491466414_18380233405141299_5358402073229968755_n.jpg?ex=6826a1ff&is=6825507f&hm=3f181fb7794978ab2f22f012fed949dd0b031207c7325fa9669bbf5685f32749&'
    ],
    description: 'Conteúdo engajador para Instagram'
  },
  {
    id: 2,
    name: 'Gabrielly Fotografia',
    subtitle: '',
    images: [
      'https://cdn.discordapp.com/attachments/1341553970686201918/1372398867689246780/SaveClip.App_468103313_18248604676278976_8293623966033026877_n.jpg?ex=6826a18b&is=6825500b&hm=391f68d5fd3f0df58c91204d0ab768243360497798aa65eb9ce85f9d01c98cc1&',
      'https://cdn.discordapp.com/attachments/1341553970686201918/1372398867139657738/SaveClip.App_468019247_18248604667278976_6079056056805523364_n.jpg?ex=6826a18b&is=6825500b&hm=a090712770b43483ab3c6d4217cdf55695ebd3a72105c6f810a04d403cd1c736&',
      'https://cdn.discordapp.com/attachments/1341553970686201918/1372398866778816574/SaveClip.App_468126930_18248604688278976_6742757887109144670_n.jpg?ex=6826a18b&is=6825500b&hm=f27414d0473ccc9a0116eadaa46dfd0fb17c6a732dc8795884f00fdc9ad49181&'
    ],
    description: 'Conteúdo estratégico para Facebook'
  },
  {
    id: 3,
    name: 'Paola Menna',
    subtitle: 'Maternidade Sistêmica',
    images: [
      'https://cdn.discordapp.com/attachments/1341553970686201918/1372398857916252271/SaveClip.App_487167221_18496468306050310_8778235373612643299_n.jpg?ex=6826a189&is=68255009&hm=a25e195b3f864f4aaca90d8dd1ebdda83f4a1018412faad6ecfa605f3d661400&',
      'https://cdn.discordapp.com/attachments/1341553970686201918/1372398857492758528/SaveClip.App_488850822_18496468315050310_5679902615671498088_n.jpg?ex=6826a189&is=68255009&hm=863b078c62896c565c6f0ac8c7f596b27969077c7e790acbc842c5bd94bf625c&',
      'https://cdn.discordapp.com/attachments/1341553970686201918/1372398857144500284/SaveClip.App_487734146_18496468333050310_936303898035490874_n.jpg?ex=6826a189&is=68255009&hm=1a986950c55ce183c6a82b9c5d50f0b9570f03fef2072dde342742f94c687990&',
      'https://cdn.discordapp.com/attachments/1341553970686201918/1372398856700039308/SaveClip.App_487869856_18496468330050310_1928565813876748646_n.jpg?ex=6826a189&is=68255009&hm=dbe31c0d9ac76c816c89df615d55872d49364590d82f9f45edbce8fe37f8ad64&'
    ],
    description: 'Conteúdo profissional para LinkedIn'
  },
  {
    id: 4,
    name: 'Ellen Marques',
    subtitle: 'Cílios design',
    images: [
      'https://cdn.discordapp.com/attachments/1341553970686201918/1372398856410763264/SaveClip.App_496529079_18059560088165559_9218851860318576314_n.jpg?ex=6826a189&is=68255009&hm=728f910df08825f0b03c9d4e15d80eb0de6543ca3a5c8133af32d0322f4927b8&',
      'https://cdn.discordapp.com/attachments/1341553970686201918/1372398855995392030/SaveClip.App_496673372_18059560103165559_8682552018428351077_n.jpg?ex=6826a189&is=68255009&hm=c1bcba76e0a6bb06d7932591c1ac21c4a726bc7bf1af5e4f6eccd0249911017c&',
      'https://cdn.discordapp.com/attachments/1341553970686201918/1372398855651590154/SaveClip.App_496653883_18059560106165559_5382797039258372949_n.jpg?ex=6826a189&is=68255009&hm=56a6f2e55ddea50d581d78c0b0c49dc16a012b1cabbb8683072dad5360d8ca6e&'
    ],
    description: 'Conteúdo dinâmico para Twitter'
  }
];

const MarketingShowcase: React.FC = () => {
  const navigate = useNavigate();
  const [currentImages, setCurrentImages] = useState<{ [key: number]: number }>({});

  const nextImage = (id: number, totalImages: number) => {
    setCurrentImages(prev => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (id: number, totalImages: number) => {
    setCurrentImages(prev => ({
      ...prev,
      [id]: ((prev[id] || 0) - 1 + totalImages) % totalImages
    }));
  };

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
          Marketing Digital
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {marketingContent.map((content) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square relative group">
                <img
                  src={content.images[currentImages[content.id] || 0]}
                  alt={content.name}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <p className="text-white text-center font-medium">
                    {content.description}
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    onClick={() => prevImage(content.id, content.images.length)}
                    className="p-1.5 bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => nextImage(content.id, content.images.length)}
                    className="p-1.5 bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              <div className="p-6 border-t border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {content.name}
                </h3>
                {content.subtitle && (
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {content.subtitle}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingShowcase;