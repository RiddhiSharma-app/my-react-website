import React, { useEffect, useState } from 'react';
interface CursorPosition {
  x: number;
  y: number;
}

function Cursor(): React.ReactElement {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateCursor = (e: MouseEvent): void => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    document.addEventListener('mousemove', updateCursor);
    
    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div 
      className="w-5 h-5 bg-teal-300 rounded-full fixed pointer-events-none z-50 transition-transform duration-100 ease-linear"
      style={{ 
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)` 
      }}
    />
  );
}

export default Cursor;