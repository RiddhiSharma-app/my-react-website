import React from 'react';
import Header from '../Header';
import {
  BriefcaseIcon,
  CodeBracketIcon,
  ClipboardDocumentIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import backgroundImage from '../../assets/career-bg.jpg';

function MainCareer(): React.ReactElement {
  return (
    <>
      <Header />
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-10 px-5 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        <div className="relative z-10 max-w-4xl" data-aos="fade-up">
          <p className="text-sm uppercase tracking-widest mb-2 text-gray-300">We work hard, we play hard</p>
          <h1 className="text-5xl font-bold mb-10">Work With Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-90 text-black p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="100">
              <BriefcaseIcon className="h-10 w-10 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advisory</h3>
              <p className="text-sm text-center">Expert guidance to shape your product and strategy.</p>
            </div>

            <div className="bg-white bg-opacity-90 text-black p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="200">
              <CodeBracketIcon className="h-10 w-10 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-sm text-center">Full-stack development to turn ideas into scalable products.</p>
            </div>

            <div className="bg-white bg-opacity-90 text-black p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="300">
              <ClipboardDocumentIcon className="h-10 w-10 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-sm text-center">Project planning and timeline management for success.</p>
            </div>

            <div className="bg-white bg-opacity-90 text-black p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay="400">
              <LightBulbIcon className="h-10 w-10 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-sm text-center">Innovative thinking to drive your company forward.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainCareer;
