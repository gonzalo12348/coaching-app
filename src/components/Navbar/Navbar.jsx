// components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../auth/fireBaseConfig';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
// console.log("auth", auth);

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: '#fff'
    }}>
      <div>
        <Link to="/escuela" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>
          Tu Escuela
        </Link>
        <Link  style={{ color: '#fff', textDecoration: 'none' }}>
          Cursos
        </Link>
      </div>
      <div style={{ position: 'relative', display: "flex", alignContent: "center" }}>
        <p style={{ paddingRight: 5}}>{(auth.currentUser.displayName || auth.currentUser.email)?.slice(0, 10) + "..."}</p>
        <div 
          onClick={toggleMenu}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#ccc',
            alignSelf: "center",
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '16px',
            color: '#333'
          }}
        >
          👤
        </div>

        {/* Menú Desplegable */}
        {menuOpen && (
          <div style={{
            position: 'absolute',
            top: '50px',
            right: 0,
            backgroundColor: '#fff',
            color: '#333',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '5px',
            overflow: 'hidden',
            width: '120px'
          }}>
            <div style={{ padding: '10px', cursor: 'pointer' }} onClick={() => alert('Consulta con Gonzalo. Dale un chequeo al programa para no preguntar boludeces que ya estén aqui :)')}>
              Ajustes
            </div>
            <div style={{ padding: '10px', cursor: 'pointer' }} onClick={handleLogout}>
              Cerrar Sesión
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
