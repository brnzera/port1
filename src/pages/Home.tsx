import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import About from '../sections/About';
import Contact from '../sections/Contact';

interface HomeProps {
  contactInfo: {
    phoneNumber: string;
    email: string;
    instagram: string;
    teamPhoneNumbers: {
      stefany: string;
      breno: string;
    };
  };
}

const Home: React.FC<HomeProps> = ({ contactInfo }) => {
  return (
    <>
      <Hero />
      <Services phoneNumber={contactInfo.phoneNumber} />
      <About phoneNumbers={contactInfo.teamPhoneNumbers} />
      <Contact 
        phoneNumber={contactInfo.phoneNumber} 
        email={contactInfo.email}
        instagram={contactInfo.instagram}
      />
    </>
  );
};

export default Home;