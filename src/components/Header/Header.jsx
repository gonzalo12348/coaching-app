// components/Header.js
import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: '#e74c3c', color: '#000', fontSize: '20px' }}>
      <div className="hello-bars"></div>
      {/* Aquí se puede añadir el menú de navegación */}
    </header>
  );
}

export default Header;
