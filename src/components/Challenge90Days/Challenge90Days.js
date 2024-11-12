import React, { useState } from 'react'
import daysRefexion from '../../90daysReflexion';


export default function Challenge90Days() {
  const [currentPage, setCurrentPage] = useState(80);
  return (
    <div className="container">
    <h1>#90PersonaQueAdmirasYRespetas</h1>
    <h2 className='subtittle'> {`Dia ${currentPage} - ${daysRefexion[`day${currentPage}`]?.title}`}</h2>
    <div className='container-arrows'>
      <button onClick={() => setCurrentPage(currentPage -1 || 1)}>{`<`}</button>
      <button onClick={() => currentPage < 90 && setCurrentPage(currentPage +1)}>{`>`}</button>
    </div>
    {/* <div className='container-reflexion'>
      {daysRefexion[`day${currentPage}`]?.body}

    </div> */}
    {/* <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-section">
        <div className="input-column">
          <label>
            Género:
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
            </select>
          </label>

          <label>
            Peso (kg):
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
          </label>

          <label>
            Altura (cm):
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
          </label>

          <label>
            Edad:
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
          </label>
        </div>
      </div>
      <button className="submit-btn" type="button" onClick={calcularBMR}>Calcular</button>
    </form> */}

    {/* {result && <div className="result">{result}</div>} */}
  </div>
  )
}
