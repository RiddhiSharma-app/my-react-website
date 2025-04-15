import React, { useEffect, useRef, useState, useCallback } from 'react';
import Typed from 'typed.js';
import { Particles } from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

import homeImage from '../../assets/home-bg.png';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';

const images = [homeImage, image1, image2];

function Home(): React.ReactElement {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [particleKey, setParticleKey] = useState<number>(0);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: ['Revolutionizing', 'World Of AI'],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true,
      });
    }
    return () => typed.current?.destroy();
  }, []);

  // Force reset particles when component mounts
  useEffect(() => {
    setParticleKey(prev => prev + 1);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative pt-24 pb-10 px-5 text-white transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Static Particles */}
      <Particles
        key={particleKey} // ← This forces a full remount
        id="tsparticles-static"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          particles: {
            color: { value: '#ffffff' },
            links: {
              enable: true,
              color: '#ffffff',
              distance: 120,
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed : 2 },
            number: { value: 100 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />

      {/* Typed Text on top */}
      <div className="relative z-10" data-aos="fade-up">
        <h1 className="text-5xl font-bold mb-5">
          <span ref={el}></span>
        </h1>
        <p className="text-xl">— COMING SOON —</p>
      </div>
    </section>
  );
}

export default Home;
