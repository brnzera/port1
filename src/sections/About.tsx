import React, { useState } from 'react';
import TeamTab from '../components/TeamTab';

interface AboutProps {
  phoneNumbers: {
    stefany: string;
    breno: string;
  };
}

const About: React.FC<AboutProps> = ({ phoneNumbers }) => {
  const [activeTab, setActiveTab] = useState<'stefany' | 'breno'>('stefany');

  const stefanyData = {
    name: 'Stefany Macêdo',
    age: 20,
    role: 'Estudante de Ciência da Computação – 3º período',
    description: 'Objetivo: Aprender e crescer como profissional',
    experiences: [
      {
        title: 'JUVENTUDE CODE',
        description: 'Desenvolvimento de site para comunidade; foco em lazer, cursos e palestras.'
      },
      {
        title: 'MEMAKER',
        description: 'Desenvolvimento de habilidades socioemocionais, gestão de equipe e resolução de conflitos.'
      }
    ],
    certifications: [
      { title: 'Pitch', organization: 'SEBRAE/PE', year: '2022' },
      { title: 'Pitch e Storytelling', organization: 'SEBRAE/PE', year: '2022' },
      { title: 'Design Thinking', organization: 'SEBRAE/PE', year: '2022' },
      { title: 'Lean Canvas', organization: 'SEBRAE/PE', year: '2022' },
      { title: 'Big Idea', organization: 'SEBRAE/PE', year: '2022' }
    ],
    phoneNumber: phoneNumbers.stefany,
    photoUrl: 'https://cdn.discordapp.com/attachments/1341553970686201918/1372395599789428797/SaveClip.App_455832349_523383670086267_3709384031983470568_n.jpg?ex=68269e80&is=68254d00&hm=1ceacb2a12495730fc07a2708f664fb4501ad078b517884e6b06461936bc550a&'
  };

  const brenoData = {
    name: 'Breno',
    age: 20,
    role: 'Agente de Registro',
    description: 'Mais de 1000 certificados digitais emitidos • Proativo, comunicativo, sempre aprendendo',
    experiences: [
      {
        title: 'Estagiário – Online Certificadora (2022–2025)',
        description: 'Emissão de Certificados, Programação básica, Marketing Digital'
      }
    ],
    skills: [
      { name: 'Marketing de persuasão' },
      { name: 'Tomada de decisões' },
      { name: 'Inglês Básico' },
      { name: 'Aprendizado rápido' },
      { name: 'Organização e responsabilidade' },
      { name: 'Design responsivo e moderno' }
    ],
    phoneNumber: phoneNumbers.breno,
    photoUrl: 'https://cdn.discordapp.com/attachments/1341553970686201918/1372395612888236052/WhatsApp_Image_2025-05-06_at_23.19.59.jpeg?ex=68269e83&is=68254d03&hm=2a94244fd72c764879ad05ee8caa995ea29f0f4d9e2329da7174e6c2e4ceb627&'
  };

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Quem somos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conheça os profissionais por trás da AGÊNCIA MALI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="w-full">
            <TeamTab 
              {...stefanyData}
              active={activeTab === 'stefany'}
              color="green"
              onClick={() => setActiveTab('stefany')}
            />
          </div>
          
          <div className="w-full">
            <TeamTab 
              {...brenoData}
              active={activeTab === 'breno'}
              color="blue"
              onClick={() => setActiveTab('breno')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;