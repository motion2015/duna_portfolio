import React, { useState, useEffect } from 'react';
import './Header.scss';
// import ThemeToggle from '@components/common/ThemeToggle'; // 테마 토글 버튼 임포트
import ThemeSelector from '@components/common/ThemeSelector'; // 드롭다운 UI 컴포넌트
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // 모바일 메뉴 토글 함수
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // 메뉴 링크 클릭 시 모바일 메뉴 닫기
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // 1. localStorage나 시스템 기본 설정을 읽어와 초기 테마 설정
  // const [theme, setTheme] = useState(() => {
  //   const savedTheme = localStorage.getItem('app-theme');
  //   if (savedTheme) return savedTheme;

  //   return window.matchMedia('(prefers-color-scheme: dark)').matches
  //     ? 'dark'
  //     : 'light';
  // });

  // // 2. 테마가 바뀔 때마다 HTML 태그에 속성 부여 및 저장
  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', theme);
  //   localStorage.setItem('app-theme', theme);
  // }, [theme]);

  // const handleToggleTheme = () => {
  //   setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  // };

  return (
    <header className='header'>
      <div className='header__inner'>
        <h1 className='header__logo'>
          <a href='#home'>Park Min Sook</a>
        </h1>

        {/* 햄버거 토글 버튼 (모바일 전용) */}
        <button
          className={`header__toggle ${isOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isOpen}
        >
          <span className='hamburger-bar'></span>
          <span className='hamburger-bar'></span>
          <span className='hamburger-bar'></span>
        </button>

        {/* 네비게이션 영역 */}
        <nav className={`header__nav ${isOpen ? 'is-open' : ''}`}>
          {/* <a href='#about' onClick={handleLinkClick}>
            About
          </a>
          <a href='#skills' onClick={handleLinkClick}>
            Skills
          </a>
          <a href='#projects' onClick={handleLinkClick}>
            Projects
          </a>
          <a href='#contact' onClick={handleLinkClick}>
            Contact
          </a> */}
          <ul className='header__menu'>
            <li>
              <a href='#about' onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href='#skills' onClick={handleLinkClick}>
                Skills
              </a>
            </li>
            <li>
              <a href='#projects' onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>

          {/* 다크/라이트 토글 버튼을 메뉴 옆에 자연스럽게 배치 */}
          <div className='header__toggle-wrapper'>
            {/* <ThemeToggle theme={theme} onToggle={handleToggleTheme} /> */}
            <ThemeSelector />
          </div>
        </nav>
      </div>
    </header>
  );
}
