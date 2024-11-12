// components/ProductList.js
import React from 'react';
import ProductCard from '../ProductCard';
import estoicoImg from "../../images/estoico.jpg"
import proximamenteImg from "../../images/Proximamente.png"

const products = [
  {
    id: 1,
    image: estoicoImg,
    title: 'Crea la Persona Que Admiras y Respetas',
    description: '90 Dias para crear la persona que admiras y respetas',
    disabled: false
  },
  {
    id: 2,
    image: proximamenteImg,
    title: 'Desarrollo Web',
    description: 'Aprende programación y consigue trabajo online',
    disabled: true

  },
  {
    id: 2,
    image: proximamenteImg,
    title: 'Plan de Fitness Personalizado',
    description: 'Entrena y mejora tu rendimiento con un plan adaptado a tus necesidades.',
    disabled: true

  },
  {    id: 3,
    image: proximamenteImg,
    title: 'Nutrición para el Éxito',
    description: 'Descubre cómo la alimentación puede ser clave en tu camino al éxito.',
    disabled: true
  },
];

function ProductList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {products.map((product, index) => (
        <ProductCard id={product.id} image={product.image} title={product.title} description={product.description} disabled={product.disabled} />
      ))}
    </div>
  );
}

export default ProductList;
