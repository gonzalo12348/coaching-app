// components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import estoicoImg from "../../images/estoico.jpg"
import PlaylistCarousel from '../PlaylistCarousel';

// Datos de ejemplo para simular la obtención del detalle del producto
const products = [
    {
        id: 1,
        image: estoicoImg,
        title: 'Crea la Persona Que Admiras y Respetas',
        description: '90 Dias para crear la persona que admiras y respetas'
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/250',
        title: 'Plan de Fitness Personalizado',
        description: 'Entrena y mejora tu rendimiento con un plan adaptado a tus necesidades.'
      },
      {    id: 3,
        image: 'https://via.placeholder.com/250',
        title: 'Nutrición para el Éxito',
        description: 'Descubre cómo la alimentación puede ser clave en tu camino al éxito.'
      },];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((product) => product.id == id);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div style={{paddingBottom: 50}}>
      <Navbar />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <img src={product.image} alt={product.title} style={{ width: '10vw', borderRadius: '8px' }} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>

      <PlaylistCarousel/>
    </div>
  );
}

export default ProductDetail;
