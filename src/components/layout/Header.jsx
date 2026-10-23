import React, { useState, useEffect } from 'react';
import './Header.scss';
// import ThemeToggle from '@components/common/ThemeToggle'; // 테마 토글 버튼 임포트
import ThemeSelector from '@components/common/ThemeSelector'; // 드롭다운 UI 컴포넌트

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // 모바일 메뉴 토글 함수
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // 메뉴 링크 클릭 시 모바일 메뉴 닫기
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // 스크롤 시 헤더에 그림자 및 배경 변화 효과 주기
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴 토글
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className='header__container'>
        {/* 로고 영역 */}
        <a href='#' className='header__logo'>
          Dev.<strong>Portfolio</strong>
        </a>

        {/* PC 버전 네비게이션 (시맨틱 ul > li 구조) */}
        <nav className='header__nav'>
          <ul className='header__menu'>
            <li>
              <a
                href='#about'
                className='header__link'
                onClick={handleLinkClick}
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#skills'
                className='header__link'
                onClick={handleLinkClick}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className='header__link'
                onClick={handleLinkClick}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='header__link'
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* 우측 유틸리티 영역 (테마 셀렉터 + 햄버거 버튼) */}
        <div className='header__actions'>
          <ThemeSelector />

          {/* 모바일 햄버거 버튼 */}
          <button
            className={`header__hamburger ${isMobileMenuOpen ? 'is-active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label='모바일 메뉴 열기'
          >
            <span className='header__hamburger-bar'></span>
            <span className='header__hamburger-bar'></span>
            <span className='header__hamburger-bar'></span>
          </button>
        </div>
      </div>

      {/* 모바일 슬라이드 백드롭 & 메뉴 드로어 */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <div className='mobile-menu__backdrop' onClick={toggleMobileMenu}></div>
        <div className='mobile-menu__drawer'>
          <div className='mobile-menu__header'>
            <span>Menu</span>
            <button className='mobile-menu__close' onClick={toggleMobileMenu}>
              ✕
            </button>
          </div>
          <nav className='mobile-menu__nav'>
            <a
              href='#about'
              onClick={toggleMobileMenu}
              className='mobile-menu__link'
            >
              About
            </a>
            <a
              href='#skills'
              onClick={toggleMobileMenu}
              className='mobile-menu__link'
            >
              Skills
            </a>
            <a
              href='#projects'
              onClick={toggleMobileMenu}
              className='mobile-menu__link'
            >
              Projects
            </a>
            <a
              href='#contact'
              onClick={toggleMobileMenu}
              className='mobile-menu__link'
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
