// components/PrivateRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../auth/fireBaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Cuando se completa la verificación, cambia el estado de carga
    });

    // Limpia el listener cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  // Muestra un mensaje de carga o un spinner mientras espera la verificación
  if (loading) return <div>Loading...</div>;

  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
