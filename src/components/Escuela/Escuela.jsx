// components/Escuela.js
import React from 'react';
import Navbar from '../Navbar';
import ProductList from '../ProductList';

function Escuela() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Bienvenido a Tu Escuela y Mentoria</h1>
        <p>Aquí podrás acceder a tus programas, cursos y contenido exclusivo.</p>
      </div>
      <ProductList />
    </div>
  );
}

export default Escuela;
