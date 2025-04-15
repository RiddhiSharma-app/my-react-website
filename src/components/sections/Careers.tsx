import React from 'react';
import { Particles } from 'react-tsparticles';
import { useNavigate } from 'react-router-dom';

function Careers(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <section
      id="careers"
      className="min-h-screen flex flex-col justify-center items-center text-center relative pt-24 pb-10 px-5 bg-gray-800 text-white"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles-careers"
        className="absolute inset-0 z-0"
        options={{
          background: {
            color: { value: 'transparent' },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#00ffd0" },
            links: { color: "#00ffd0", distance: 150, enable: true, opacity: 0.5, width: 1 },
            move: { enable: true, speed: 2 },
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
        <h2 className="text-4xl font-bold mb-5">Join Us</h2>
        <p className="text-lg mb-5 leading-relaxed">
          We are hiring Full Stack Developers: please share your resumes<br />
          Build cutting-edge platforms. Shape the future of systems engineering. Work globally, remotely.
        </p>
        <p
          className="text-teal-300 underline cursor-pointer hover:text-white"
          onClick={() => navigate('/main-career')}
        >
          Read more
        </p>
      </div>
    </section>
  );
}

export default Careers;
