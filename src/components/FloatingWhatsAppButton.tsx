import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
}

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({ phoneNumber }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the button when scrolling down and show when scrolling up
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <a
      href={`https://wa.me/55${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg
        hover:bg-green-600 transition-all duration-300 flex items-center justify-center
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="ml-2 max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out"></span>
    </a>
  );
};

export default FloatingWhatsAppButton;