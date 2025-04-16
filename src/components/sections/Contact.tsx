import React from 'react';
import { Particles } from 'react-tsparticles';

function Contact(): React.ReactElement {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center relative pt-24 pb-10 px-5 bg-gray-900 text-white"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles-contact"
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
        <h2 className="text-4xl font-bold mb-5">Contact</h2>
        <p className="text-lg mb-5 leading-relaxed">
          Email us at <a href="mailto:sharmarid09@gmail.com" className="hover:text-teal-300 transition-colors">
            sharmarid09@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
