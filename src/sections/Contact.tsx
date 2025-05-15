import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import { MessageCircle, Mail, Instagram } from 'lucide-react';

interface ContactProps {
  phoneNumber: string;
  email: string;
  instagram: string;
}

const Contact: React.FC<ContactProps> = ({ phoneNumber, email, instagram }) => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-500 to-blue-600 dark:from-purple-700 dark:to-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Entre em contato conosco
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Estamos prontos para transformar seu projeto em realidade!
        </p>
        
        <div className="flex justify-center mb-12">
          <WhatsAppButton 
            text="Fale conosco agora pelo WhatsApp"
            phoneNumber={phoneNumber}
            className="text-lg py-3 px-6"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <a 
            href={`https://wa.me/55${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
          >
            <MessageCircle size={32} className="mb-3" />
            <span className="font-medium">WhatsApp</span>
          </a>
          
          <a
            href={`mailto:${email}`}
            className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
          >
            <Mail size={32} className="mb-3" />
            <span className="font-medium">Email</span>
          </a>
          
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
          >
            <Instagram size={32} className="mb-3" />
            <span className="font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;