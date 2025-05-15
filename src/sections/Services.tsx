import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { Globe, PenTool, MessageSquare, Film } from 'lucide-react';

interface ServicesProps {
  phoneNumber: string;
}

const Services: React.FC<ServicesProps> = ({ phoneNumber }) => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Sites',
      description: 'Desenvolvimento de websites modernos, responsivos e otimizados para SEO, alinhados com seus objetivos de negócio.',
      icon: <Globe size={48} />,
      action: () => navigate('/sites')
    },
    {
      title: 'Logomarcas',
      description: 'Criação de identidade visual única e memorável que representa a essência da sua marca.',
      icon: <PenTool size={48} />,
      action: () => navigate('/logomarcas')
    },
    {
      title: 'Conteúdos para Marketing',
      description: 'Produção de conteúdo estratégico para suas redes sociais e campanhas de marketing.',
      icon: <MessageSquare size={48} />,
      action: () => navigate('/marketing')
    },
    {
      title: 'Edição de Vídeo',
      description: 'Edição profissional de vídeos para redes sociais, campanhas e apresentações institucionais.',
      icon: <Film size={48} />,
      action: () => navigate('/videos')
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            O que fazemos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Oferecemos soluções digitais completas para impulsionar sua presença online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              onClick={service.action}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <WhatsAppButton 
            text="Fale conosco sobre nossos serviços"
            phoneNumber={phoneNumber}
          />
        </div>
      </div>
    </section>
  );
};

export default Services