import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import SkillCard from '../components/common/SkillCard';
import ProjectCard from '../components/common/ProjectCard';
import './Home.scss';
import ContactForm from '@components/common/ContactForm';

export default function Home() {
  // 18년차 시니어의 기술 스택 데이터
  const skillData = [
    {
      category: 'Markup & Web Standards',
      items: [
        'HTML5',
        'Semantic Markup',
        'WAI-ARIA (웹 접근성)',
        'Cross Browsing',
        'Web Performance',
      ],
    },
    {
      category: 'CSS & Styling Architecture',
      items: [
        'SCSS / Sass',
        'CSS Modules',
        'BEM Methodology',
        'Flexbox / Grid',
        'Responsive Web Design',
      ],
    },
    {
      category: 'JavaScript & Frontend',
      items: [
        'JavaScript (ES6+)',
        'React',
        'State Management (Zustand/Context)',
        'Vite',
        'Component-Driven Development',
      ],
    },
    {
      category: 'Tools & Workflow',
      items: ['Git / GitHub', 'VS Code', 'Storybook', 'Figma', 'CI/CD Basics'],
    },
  ];

  // 대표 프로젝트 데이터
  const projectData = [
    {
      title: 'React & SCSS UI Component Library',
      category: 'Design System / Open Source',
      description:
        '웹 표준과 접근성을 준수한 재사용 가능한 반응형 UI 컴포넌트 시스템. BEM 방법론과 SCSS 변수 체계를 적용하여 확장성 높게 구축했습니다.',
      tags: ['React', 'SCSS', 'BEM', 'Storybook', 'Vite'],
      link: '/experience',
    },
    {
      title: '금융 / 커머스 엔터프라이즈 UI 구축 프로젝트',
      category: 'Enterprise Publishing',
      description:
        '신한카드 디지털 서비스, 아모레몰, KB국민은행 등 대규모 웹/앱 서비스의 웹 표준, 접근성 지침 준수 및 고도화 UI 퍼블리싱 담당.',
      tags: ['HTML5', 'SCSS', 'JavaScript', 'CrossBrowsing', 'Accessibility'],
      link: '/experience',
    },
    {
      title: 'Senior Publisher Portfolio Platform',
      category: 'Personal Project',
      description:
        'Vite + React 기반으로 제작한 다크 모드 스타일의 개인 포트폴리오 웹사이트. 컴포넌트 기반 모듈화 구조로 빠른 로딩과 정교한 인터랙션 제공.',
      tags: ['React', 'SCSS Architecture', 'Vite'],
      link: '/experience',
    },
  ];

  // link 값을 매개변수로 받아서 동적으로 라우팅
  const handleDetailClick = (link) => {
    if (link) {
      navigate(link); // 예: '/experience' 또는 '/projects/shinhan' 등
    }
  };

  // 폼 제출 시 실행될 핸들러 함수 (선택 사항)
  const handleFormSubmit = (formData) => {
    console.log('전송된 문의 데이터:', formData);
    // 여기에 이메일 전송 API나 백엔드 연동 로직을 넣을 수 있습니다.
  };

  return (
    <div className='page-home'>
      {/* <Header /> */}
      {/* <main className='main-content'> */}
      {/* 1. Hero 섹션 (오프닝) */}
      <section className='hero'>
        <div className='hero__inner'>
          <span className='hero__tag'>
            UI/UX Publisher & Frontend Developer
          </span>
          <h2 className='hero__title'>
            단단한 웹 표준과 구조 위에서
            <br />
            <strong>완벽한 사용자 경험</strong>을 만듭니다.
          </h2>
          <p className='hero__desc'>
            18년 동안 쌓아온 마크업 및 스타일링 전문성과 현대적인 React 컴포넌트
            아키텍처를 결합하여 유지보수하기 쉽고 정교한 웹 인터페이스를
            구축합니다.
          </p>
        </div>
      </section>
      {/* 2. About 섹션 (경력 핵심) - id="about" */}
      {/* About / Experience Summary Section */}
      <section id='about' className='about-section'>
        {' '}
        {/* 👈 여기에 id="about"이 꼭 있어야 합니다! */}
        <div className='about-section__inner'>
          <div className='section-header'>
            <span className='section-badge'>ABOUT ME</span>
            <h3 className='section-title'>Solid Experience & Value</h3>
          </div>
          <div className='about-content'>
            <div className='about-card'>
              <h4>18+ Years Experience</h4>
              <p>
                대규모 엔터프라이즈 환경에서의 UI 퍼블리싱 및 리딩 경험을
                보유하고 있습니다.
              </p>
            </div>
            <div className='about-card'>
              <h4>Web Standards & Accessibility</h4>
              <p>
                모든 사용자를 고려한 웹 표준과 접근성(WAI-ARIA) 지침을 정교하게
                구현합니다.
              </p>
            </div>
            <div className='about-card'>
              <h4>Modern Component System</h4>
              <p>
                SCSS 아키텍처와 React 컴포넌트를 연계하여 재사용성 높은 UI
                라이브러리를 만듭니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Skills 섹션 (기술 스택) - id="skills" */}
      <section id='skills' className='skills-section'>
        <div className='skills-section__inner'>
          <div className='section-header'>
            <span className='section-badge'>EXPERTISE</span>
            <h3 className='section-title'>Skills & Capabilities</h3>
            <p className='section-desc'>
              완벽한 마크업 기초 위에 현대적인 프론트엔드 역량을 더합니다.
            </p>
          </div>
          <div className='skills-grid'>
            {skillData.map((group, index) => (
              <SkillCard
                key={index}
                category={group.category}
                items={group.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Projects 섹션 (대표 프로젝트) - id="projects" */}
      <section id='projects' className='projects-section'>
        <div className='projects-section__inner'>
          <div className='section-header'>
            <span className='section-badge'>PORTFOLIO</span>
            <h3 className='section-title'>Featured Projects</h3>
            <p className='section-desc'>
              완성도 높은 웹 구조와 마크업 역량을 담아낸 대표 작업물입니다.
            </p>
          </div>
          <div className='projects-grid'>
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                // onClick 이벤트 발생 시 해당 프로젝트의 link 값을 넘겨줌
                onClick={() => handleDetailClick(project.link)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact 섹션 (연락처/마무리) - id="contact" */}
      <section id='contact' className='contact-section'>
        <div className='contact-section__inner'>
          <span className='section-badge'>CONTACT</span>
          <h3 className='contact-title'>함께 일할 준비가 되어 있습니다</h3>
          <p className='contact-desc'>
            웹 표준, 컴포넌트 아키텍처, 그리고 지속 가능한 UI 개발에 대한
            이야기를 나누고 싶으시다면 연락해 주세요.
          </p>
          {/* ContactForm 컴포넌트 렌더링 */}
          <div className='contact-content'>
            <ContactForm onSubmit={handleFormSubmit} />
          </div>
          {/* <div className='contact-actions'>
              <a href='mailto:motion74@naver.com' className='btn-contact'>
                이메일 보내기
              </a>
            </div> */}
        </div>
      </section>
      {/* </main> */}

      <footer className='footer'>
        <p>© 2026 Park Min Sook. All rights reserved.</p>
      </footer>
    </div>
  );
}
