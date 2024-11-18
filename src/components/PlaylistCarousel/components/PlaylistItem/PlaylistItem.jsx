// DayContent.js
import React from 'react';
import "./PlaylistItem.css"
const PlaylistItem = ({ title, subtitle, dayNumber, content }) => {
  return (
    <div className="day-content">
      <h1 className="day-title">Día {dayNumber}/90</h1>
      <h1 className="day-title">{title}</h1>
      <h5 className="day-subtitle"><a href='#'>{subtitle}</a></h5>
      <div className='day-body' dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PlaylistItem;
