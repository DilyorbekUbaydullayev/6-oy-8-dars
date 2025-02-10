// src/App.jsx
import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import PrivateRoute from './routes/PrivateRoute';
export const ThemeContext = createContext()

const App = () => {
  const [theme, setTheme] = useState('dark')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ThemeContext.Provider value={{ theme, setTheme }}>
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            </ThemeContext.Provider>
          }
        />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;