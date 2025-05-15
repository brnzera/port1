import React from 'react';
import { MessageCircleMore } from 'lucide-react';

interface WhatsAppButtonProps {
  text?: string;
  phoneNumber: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  text = "Fale conosco agora", 
  phoneNumber,
  className = ""
}) => {
  const whatsappUrl = `https://wa.me/55${phoneNumber}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md ${className}`}
    >
      <MessageCircleMore size={20} />
      <span>{text}</span>
    </a>
  );
};

export default WhatsAppButton;