import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '../components/Loader';
import Cursor from '../components/Cursor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/sections/Home';
import Mission from '../components/sections/Mission';
import Careers from '../components/sections/Careers';
import Contact from '../components/sections/Contact';

function HomePage(): React.ReactElement {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <Loader />
      <Cursor />
      <Header />
      <main>
        <Home />
        <Mission />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
