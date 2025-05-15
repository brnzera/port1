import React from 'react';
import WhatsAppButton from './WhatsAppButton';

interface Certification {
  title: string;
  organization: string;
  year: string;
}

interface Experience {
  title: string;
  description: string;
}

interface Skill {
  name: string;
}

interface TeamMemberProps {
  name: string;
  age: number;
  role: string;
  description?: string;
  experiences: Experience[];
  certifications?: Certification[];
  skills?: Skill[];
  phoneNumber: string;
  active: boolean;
  color: string;
  onClick: () => void;
  photoUrl: string;
}

const TeamTab: React.FC<TeamMemberProps> = ({
  name,
  age,
  role,
  description,
  experiences,
  certifications,
  skills,
  phoneNumber,
  active,
  color,
  onClick,
  photoUrl
}) => {
  const tabColors = {
    green: 'bg-green-500 hover:bg-green-600',
    blue: 'bg-blue-500 hover:bg-blue-600',
  };
  
  const selectedColor = tabColors[color as keyof typeof tabColors] || tabColors.blue;
  
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className={`
          flex items-center justify-center py-3 px-6 font-medium text-white rounded-t-lg transition-all duration-300
          ${active ? selectedColor : 'bg-gray-400 dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600'}
          ${active ? 'shadow-md' : ''}
        `}
      >
        <div className="flex items-center gap-2">
          <img 
            src={photoUrl} 
            alt={name} 
            className="w-8 h-8 rounded-full object-cover border-2 border-white"
          />
          {name}
        </div>
      </button>
      
      {active && (
        <div className={`bg-white dark:bg-gray-800 p-6 rounded-b-lg rounded-tr-lg shadow-md animate-fadeIn`}>
          <div className="mb-6 flex items-start gap-4">
            <img 
              src={photoUrl} 
              alt={name} 
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold mb-1 text-gray-800 dark:text-white">{name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">Idade: {age} anos</p>
              <p className="text-gray-600 dark:text-gray-300 mb-3">{role}</p>
              {description && <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>}
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
              <span className="mr-2">🧩</span> EXPERIÊNCIA{experiences[0].title.includes('PROFISSIONAL') ? ' PROFISSIONAL' : ' EM PROJETOS'}:
            </h4>
            <ul className="space-y-3">
              {experiences.map((exp, index) => (
                <li key={index} className="pl-4 border-l-2 border-purple-400 dark:border-purple-600">
                  <p className="font-medium text-gray-800 dark:text-gray-200">{exp.title}</p>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </li>
              ))}
            </ul>
          </div>
          
          {certifications && certifications.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                <span className="mr-2">📜</span> CERTIFICAÇÕES:
              </h4>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-400">
                    {cert.title} – {cert.organization} – {cert.year}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {skills && skills.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                <span className="mr-2">🛠️</span> HABILIDADES:
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <WhatsAppButton 
            text={`Falar com ${name} no WhatsApp`}
            phoneNumber={phoneNumber}
            className="mt-4 w-full justify-center"
          />
        </div>
      )}
    </div>
  );
};

export default TeamTab;