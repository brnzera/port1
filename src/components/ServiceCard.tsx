import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-purple-600 dark:text-purple-400 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        
        <div className={`
          absolute inset-0 bg-gradient-to-b from-purple-600/90 to-blue-600/90 p-6 flex flex-col items-center justify-center text-white rounded-xl transition-all duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}>
          <Info size={28} className="mb-3" />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;