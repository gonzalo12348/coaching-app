// components/ButtonGroup.js
import React from 'react';
import imgIG from "../../images/instagram.png";
import imgYT from "../../images/youtube1.png";
import { Link } from 'react-router-dom';

const buttons = [
  { text: 'Contacta con Gonza', link: 'https://wa.me/5492615777945', color: '#2f2f30' },
  { text: 'LOGIN ALUMNOS', link: '/login', color: '#8e44ad' },
];

function ButtonGroup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '20px' }}>
      {buttons.map((button, index) => (
        button.link.startsWith('http') ? (
          <a
            key={index}
            href={button.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              color: '#fff',
              backgroundColor: button.color,
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: 'bold',
              textAlign: 'center',
              width: '200px',
            }}
          >
            {button.text}
          </a>
        ) : (
          <Link
            key={index}
            to={button.link}
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              color: '#fff',
              backgroundColor: button.color,
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: 'bold',
              textAlign: 'center',
              width: '200px',
            }}
          >
            {button.text}
          </Link>
        )
      ))}
      <div>
        <img
          onClick={() => window.location.assign("https://www.instagram.com/gonza.arancibiaa/")}
          src={imgIG}
          style={{ cursor: "pointer", width: "50px", marginRight: 10 }}
        />
        <img
          onClick={() => window.location.assign("https://www.youtube.com/@gonzaarancibia")}
          src={imgYT}
          style={{ width: "50px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}


export default ButtonGroup;
