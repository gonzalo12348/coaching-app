// DayContent.js
import React from 'react';
import "./PlaylistItem.css"
const PlaylistItem = ({ title, subtitle, dayNumber, content }) => {
  return (
    <div className="day-content">
      <h1 className="day-title">Día {dayNumber}/90</h1>
      <h1 className="day-title">{title}</h1>
      <h5 className="day-subtitle"><a href="#">{subtitle}</a></h5>
      {/* <h4 className="day-progress">Día {dayNumber}/90</h4> */}
      {/* <h2 className="day-hashtag">90CrearPersonaQueAdmirasYRespetas</h2> */}
      {/* <h4 className="day-masterclass">Masterclass de Cómo Vivir con Llados</h4> */}
      {/* <h4 className="day-quote"><strong>La Mente lo es TODO</strong></h4> */}
      <p className="day-paragraph">{content}</p>
    </div>
  );
};

export default PlaylistItem;
