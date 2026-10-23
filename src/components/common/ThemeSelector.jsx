import React, { useState, useEffect } from 'react';
import './ThemeSelector.scss'; // BEM 클래스 적용 파일

const ThemeSelector = () => {
  // 로컬스토리지에서 저장된 테마 불러오기 (기본값: light)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('user-theme') || 'light';
  });

  // 테마 상태가 바뀔 때마다 <html> 태그의 data-theme 업데이트
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('user-theme', theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    console.log(e.target.value);
    setTheme(e.target.value);
  };

  return (
    <div className='theme-selector'>
      <label htmlFor='theme-select' className='theme-selector__label'>
        🎨 테마 선택:
      </label>
      <select
        id='theme-select'
        className='theme-selector__select'
        value={theme}
        onChange={handleThemeChange}
      >
        <option value='light'>☀️ 라이트 모드</option>
        <option value='dark'>🌙 다크 모드</option>
        <option value='blue'>🌊 블루 테마</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
