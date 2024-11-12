import React, { useEffect, useState } from 'react';
import "./PlaylistCarousel.css";
import img from "../../images/estoico.jpg";
import PlaylistItem from './components/PlaylistItem';
import { firestore, auth } from "../../auth/fireBaseConfig";
import { doc, setDoc, collection, getDocs, getDoc } from "firebase/firestore";


const PlaylistCarousel = () => {
  const [days, setDays] = useState([]);
  const [currentDay, setCurrentDay] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Estado de carga
  const userId = auth.currentUser?.uid; // Suponiendo que el usuario ya esté autenticado


  // Cargar contenido de días y progreso del usuario desde Firestore
  useEffect(() => {
    if (userId) {
      loadDataWithProgress(userId);
    }
  }, [userId]);


  const loadDataWithProgress = async (userId) => {
    try {
      // Cargar reflexiones
      const reflectionsSnapshot = await getDocs(collection(firestore, "reflections"));
      const reflectionsData = reflectionsSnapshot.docs.map(doc => doc.data());
      const sortedReflections = reflectionsData.sort((a, b) => a.day - b.day); // Ordena los días

      // Cargar progreso del usuario
      const userDocRef = doc(firestore, "users", userId);
      const userDocSnap = await getDoc(userDocRef);
      const userProgress = userDocSnap.exists() ? userDocSnap.data().days : [];

      // Combinar reflexiones con progreso del usuario
      const combinedData = sortedReflections.map((dayData, i) => ({
        ...dayData,
        completed: userProgress[i]?.completed || false,
      }));

      setDays(combinedData);
    } catch (error) {
      console.error("Error al cargar reflexiones o progreso:", error);
    } finally {
      setIsLoading(false);
    }
  };


  // Guardar datos en Firestore
  const saveProgress = async (userId, days) => {
    try {
      const sanitizedDays = days.map(({ completed }) => ({
        completed: completed ?? false, // Coloca false si completed es undefined
      }));
      
      const docRef = doc(firestore, "users", userId);
      await setDoc(docRef, { days: sanitizedDays });
    } catch (error) {
      console.error("Error al guardar el progreso:", error);
    }
  };
  

  const handleComplete = (index) => {
    const updatedDays = [...days];
    updatedDays[index].completed = !updatedDays[index].completed; // Alterna el estado de completado
    setDays(updatedDays);
    
    if (userId) {
      saveProgress(userId, updatedDays);
    }
  };

  const handleNextDay = () => {
    setCurrentDay((prev) => (prev < days.length - 1 ? prev + 1 : prev));
  };

  const handlePreviousDay = () => {
    setCurrentDay((prev) => (prev > 0 ? prev - 1 : prev));
  };

  if (isLoading ) {
    return <div>Cargando...</div>; // Indicador de carga
  }

  return (
    <div className="playlist-container" style={{ display: "flex", flexDirection: "column", minHeight: "50vh" }}>
      <div style={{ display: "flex", flexDirection: "row", maxHeight: "60vh" }}>
        <div className="playlist-sidebar">
          <h3>Mes 1-3</h3>
          <ul>
            {days.map((day, index) => (
              <div style={{ display: "flex", cursor: "pointer", minWidth: "250px" }}
                onClick={() => setCurrentDay(index)}
              >
                <img style={{ width: "100px" }} src={img} alt="day-thumbnail" />
                <div
                  key={day.day}
                  className={`playlist-item ${day.completed ? 'completed' : ''} ${index === currentDay ? 'active' : ''}`}
                >
                  Día {day.day}
                  {day.completed && <span className="checkmark">✔️</span>}
                </div>
              </div>
            ))}
          </ul>
        </div>

        <div className="playlist-content">
          <h2>Día {days[currentDay].day}</h2>
          <img style={{ alignSelf: 'center', width: "20vw", height: "60%" }} src={img} alt="day-image" />
          <button
            onClick={() => handleComplete(currentDay)}
            className={!days[currentDay].completed ? "complete-button" : "incomplete-button"}
          >
            {days[currentDay].completed ? 'Desmarcar como Completado' : 'Marcar como Completado'}
          </button>
          <div className="navigation-buttons">
            <button onClick={handlePreviousDay} disabled={currentDay === 0}>
              Anterior
            </button>
            <button onClick={handleNextDay} disabled={currentDay === days.length - 1}>
              Siguiente
            </button>
          </div>
        </div>
      </div>
      {/* Contenido del Día */}
      <PlaylistItem
        title={days[currentDay].title}
        subtitle={`Mes ${Math.ceil(days[currentDay].day / 30)}`}
        dayNumber={days[currentDay].day}
        content={days[currentDay].body}
      />
    </div>
  );
};

export default PlaylistCarousel;
