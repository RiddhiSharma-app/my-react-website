import React from 'react';
import Header from '../Header';
import pollyImage from '../../assets/car-image.webp';

function MainMission(): React.ReactElement {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-5 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Image Section */}
          <div className="relative w-full max-w-md mx-auto md:mx-0" data-aos="fade-up">
            <div className="absolute top-5 left-5 w-full h-full bg-gradient-to-r from-green-400 to-green-300 rounded-lg -z-10" />
            <img
              src={pollyImage}
              alt="CEO Polly Walter"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute bottom-0 left-0 bg-green-500 text-white px-4 py-2 font-semibold rounded-tr-lg">
              Polly Walter <br />
              <span className="text-sm font-normal">CEO, Ecosma Buddies</span>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-left" data-aos="fade-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="text-green-500 text-6xl leading-none">“</span> Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              We integrate systems and technologies designed by our team of scientists and engineers,
              with the most advanced technologies available to deliver more reliable and efficient energy
              projects. Our global platform is our strength. We constantly challenge the status quo,
              collaborate with industry leaders, and push technological boundaries to deliver real-world impact.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default MainMission;