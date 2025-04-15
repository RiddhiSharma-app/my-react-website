import React from 'react';
import { Particles } from 'react-tsparticles';
import { useNavigate } from 'react-router-dom';

function Mission(): React.ReactElement {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/main-mission');
  };

  return (
    <section
      id="mission"
      className="min-h-screen flex flex-col justify-center items-center text-center relative pt-24 pb-10 px-5 bg-gray-900 text-white"
    >
      {/* Static Particles Background */}
      <Particles
        id="tsparticles-mission"
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: {
            color: { value: 'transparent' },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: false },
            },
          },
          particles: {
            color: { value: "#00ffd0" },
            links: {
              color: "#00ffd0",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: false,
            },
            number: { value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* Content */}
      <div className="content relative z-10 max-w-3xl" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-5">Our Mission</h2>
        <p className="text-lg mb-5 leading-relaxed">
          We are reimagining how complex systems are engineered through innovation, precision, and simplicity.
          Computer Labs is setting a new foundation for the future.
          <br />
          <span
            onClick={handleReadMore}
            className="text-teal-400 cursor-pointer underline hover:text-teal-200 transition-colors ml-1"
          >
            Read more
          </span>
        </p>
      </div>
    </section>
  );
}

export default Mission;
