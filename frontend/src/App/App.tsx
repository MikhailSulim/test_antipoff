import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ExpertPage from '../pages/ExpertPage';
import ProtectedRoutes from '../components/ProtectedRoutes/ProtectedRoutes';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<ExpertPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
