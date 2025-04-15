import React from 'react';
import Header from '../Header';
import contactImage from '../../assets/car-image.webp';

function MainContact(): React.ReactElement {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#f1fcfa] flex flex-col md:flex-row items-center justify-center px-5 py-20">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0" data-aos="fade-right">
          <img src={contactImage} alt="Contact" className="rounded-xl max-w-xs md:max-w-sm shadow-xl" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white p-10 rounded-lg shadow-2xl" data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Us</h2>
          <form action="mailto:sharmarid09@gmail.com" method="POST" encType="text/plain">
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-semibold text-gray-700">First Name *</label>
                <input type="text" name="First Name" required className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-400 focus:outline-none" />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-semibold text-gray-700">Last Name *</label>
                <input type="text" name="Last Name" required className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-400 focus:outline-none" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">Email *</label>
              <input type="email" name="Email" required className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-400 focus:outline-none" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700">Leave us a few words *</label>
              <textarea name="Message" rows={4} required className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-400 focus:outline-none" />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded font-semibold hover:bg-red-600 transition-all"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default MainContact;
