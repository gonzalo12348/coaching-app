// Program90Days.js
import React, { useState } from 'react';

const Program90Days = () => {
  const [currentDay, setCurrentDay] = useState(1);

  const handleNextDay = () => {
    if (currentDay < 90) setCurrentDay(currentDay + 1);
  };

  const handlePreviousDay = () => {
    if (currentDay > 1) setCurrentDay(currentDay - 1);
  };

  return (
    <div>
      <h2>Día {currentDay}/90</h2>
      <p>Reflexión y contenido para el día {currentDay}...</p>

      <div>
        <button onClick={handlePreviousDay} disabled={currentDay === 1}>
          Día anterior
        </button>
        <button onClick={handleNextDay} disabled={currentDay === 90}>
          Día siguiente
        </button>
      </div>
    </div>
  );
};

export default Program90Days;
