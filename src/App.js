// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ButtonGroup from './components/ButtonGroup';
import Login from './components/Login';
import UserList from './components/UserList';
import Escuela from './components/Escuela';
import PrivateRoute from './components/PrivateRoute';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <div style={{height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", bottom: 70}}>
            {/* <nav style={{ textAlign: 'center', margin: '20px' }}>
              <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
              <Link to="/users">Usuarios Registrados</Link>
            </nav> */}
              {/* <Section 
                backgroundImage="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2149270825/settings_images/ef2ab5-8b00-1366-b4f-16f3723f2d6d_tu1millon.jpeg" 
              /> */}
              <ButtonGroup />
            </div>
          } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UserList />} />
        
        <Route 
          path="/escuela" 
          element={
            <PrivateRoute>
              <Escuela />
            </PrivateRoute>
          } 
        />

        {/* Ruta dinámica para el detalle del producto */}
        <Route 
          path="/producto/:id" 
          element={
            <PrivateRoute>
              <ProductDetail />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
