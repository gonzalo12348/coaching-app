// components/Login.js
import React, { useState } from 'react';
import { auth } from '../../auth/fireBaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/escuela');
    } catch (error) {
      setError('Credenciales incorrectas. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '10px', padding: '10px', fontSize: '16px' }}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '10px', padding: '10px', fontSize: '16px' }}
          required
        />
        <button type="submit" style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#4285F4',
          color: '#fff',
          border: 'none',
          borderRadius: '5px'
        }}>
          Iniciar sesión
        </button>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
