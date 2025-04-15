import React, { useEffect, useState } from 'react';
import logoImg from '../assets/logo.png';

function Loader(): React.ReactElement | null {
  const [showLoader, setShowLoader] = useState<boolean>(true);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      // Skip loader if not first visit
      setShowLoader(false);
      return;
    }
    
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
      // Mark as visited
      sessionStorage.setItem('hasVisited', 'true');
    }, 2000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-50 flex justify-center items-center">
      <img src={logoImg} alt="SysCubeLabs Loading" className="w-32 animate-pulse" />
    </div>
  );
}

export default Loader;