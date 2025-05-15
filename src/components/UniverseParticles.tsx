import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const UniverseParticles: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        particles: {
          number: { value: 120, density: { enable: true, area: 800 } },
          color: { value: '#fff' },
          shape: { type: 'circle' },
          opacity: { value: 0.8, random: true },
          size: { value: 2, random: { enable: true, minimumValue: 0.5 } },
          move: {
            enable: true,
            speed: 0.2,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}
    />
  );
};

export default UniverseParticles; 