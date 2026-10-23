// src/App.jsx 예시
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}
