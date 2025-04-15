import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';

function Header(): React.ReactElement {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setShowMenu(!showMenu);

  const isActive = (path: string): string =>
    location.pathname === path
      ? 'text-teal-300 font-bold after:content-[""] after:block after:w-full after:h-0.5 after:bg-teal-300 after:absolute after:bottom-0 after:left-0'
      : 'text-white';

  return (
    <header className="fixed top-0 w-full px-12 py-5 bg-black bg-opacity-80 z-50 transition-all duration-400">
      <div className="container mx-auto flex items-center justify-between max-w-6xl">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="SysCubeLabs Logo" className="w-12 mr-3 brightness-0 invert" />
          <span className="text-2xl font-bold text-white">Company Labs</span>
        </Link>

        {/* Desktop Menu */}
        <nav>
          <ul
            className={`flex gap-8 md:flex ${
              showMenu
                ? 'flex absolute top-20 right-5 flex-col bg-black bg-opacity-90 w-48 p-4'
                : 'hidden md:flex'
            }`}
          >
            <li>
              <Link to="/" className={`font-medium relative py-1 transition-all duration-300 hover:text-teal-300 hover:scale-110 ${isActive('/')}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/main-mission" className={`font-medium relative py-1 transition-all duration-300 hover:text-teal-300 hover:scale-110 ${isActive('/main-mission')}`}>
                Mission
              </Link>
            </li>
            <li>
              <Link to="/main-career" className={`font-medium relative py-1 transition-all duration-300 hover:text-teal-300 hover:scale-110 ${isActive('/main-career')}`}>
                Careers
              </Link>
            </li>
            <li>
            <Link to="/main-contact" className={`font-medium relative py-1 transition-all duration-300 hover:text-teal-300 hover:scale-110 ${isActive('/main-contact')}`}>
              Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <div className="block md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </header>
  );
}

export default Header;
