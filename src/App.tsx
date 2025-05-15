import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogoShowcase from './pages/LogoShowcase';
import WebsiteShowcase from './pages/WebsiteShowcase';
import MarketingShowcase from './pages/MarketingShowcase';
import VideoShowcase from './pages/VideoShowcase';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  // Configuration
  const contactInfo = {
    phoneNumber: "1234567890", // Replace with actual phone number
    email: "contato@agenciamali.com",
    instagram: "https://instagram.com/agenciamali",
    teamPhoneNumbers: {
      stefany: "1234567890", // Replace with actual phone number
      breno: "1234567890"    // Replace with actual phone number
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Dark Mode Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <DarkModeToggle />
      </div>
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home contactInfo={contactInfo} />} />
        <Route path="/logomarcas" element={<LogoShowcase />} />
        <Route path="/sites" element={<WebsiteShowcase />} />
        <Route path="/marketing" element={<MarketingShowcase />} />
        <Route path="/videos" element={<VideoShowcase />} />
      </Routes>
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsAppButton phoneNumber={contactInfo.phoneNumber} />
      
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-6 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} AGÊNCIA MALI. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;