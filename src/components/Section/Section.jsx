// components/Section.js
import React from 'react';

function Section({ backgroundImage }) {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    paddingTop: '40px',
    // paddingBottom: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <section style={sectionStyle}>
      {/* Aquí se pueden agregar otros elementos dentro de la sección */}
      <img
        src={backgroundImage}
        alt="Sección principal"
        style={{ maxWidth: '100%', height: `1vh` }}
      />
    </section>
  );
}

export default Section;
