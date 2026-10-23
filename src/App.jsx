// src/App.jsx 예시
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Header from './components/layout/Header';
import SignupForm from './components/forms/SignupForm';
export default function App() {
  return (
    <BrowserRouter>
      {/* 1. 공통 스티키 헤더 (모든 페이지에서 항상 고정 노출) */}
      <Header />

      {/* 2. 헤더가 position: fixed 이므로 본문이 가리지 않도록 상단 여백(padding-top) 확보 */}
      <main className='main-content' style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          {/* 예시: 회원가입 페이지 경로를 추가하고 싶을 때 */}
          <Route path='/signup' element={<SignupForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
