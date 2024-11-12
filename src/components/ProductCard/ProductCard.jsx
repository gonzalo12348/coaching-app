// components/ProductCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ id, image, title, description, disabled }) {
  const navigate = useNavigate();

  const handleClick = () => {

      navigate(`/producto/${id}`);

  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      width: '250px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      margin: '10px'
    }}>
      <img src={image} alt={title} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
      <h3 style={{ fontSize: '18px', margin: '10px 0', minHeight: "48px"}}>{title}</h3>
      <p style={{ fontSize: '14px', color: '#555' }}>{description}</p>
      <button onClick={handleClick} disabled={disabled} style={{
        marginTop: '10px',
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: disabled ? "gray" : '#45c8f1',
        color: '#fff',
        cursor: disabled ? "default" : 'pointer'
      }}>
        Ver más
      </button>
    </div>
  );
}

export default ProductCard;
