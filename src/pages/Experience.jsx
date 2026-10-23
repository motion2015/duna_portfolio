import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExperienceItem from '@components/common/ExperienceItem';
import Modal from '@components/common/Modal';
import './Experience.scss';

const experiences = [
  {
    period: '2025.09 ~ 2026.03',
    role: '신한카드 디지털플랫폼(New 피슈 SOL) 고도화',
    company: '드림시프트',
    description: '카드 메뉴 담당 웹 퍼블리싱 구축 및 UI 고도화',
    skills: ['HTML5', 'CSS3', 'JS', 'Figma', 'Git'],
  },
  {
    period: '2023.05 ~ 2023.10',
    role: '아모레몰 운영 및 퍼블리싱',
    company: '토피아정보기술',
    description: '아모레몰 웹/모바일 운영 퍼블리싱 및 유지보수',
    skills: ['HTML', 'CSS', 'JS', 'Git', 'Zeplin'],
  },
  {
    period: '2022.09 ~ 2022.12',
    role: '국민은행 KBWallet 고도화',
    company: '토모도모',
    description: 'KBWallet 서비스 고도화 Vue 기반 퍼블리싱',
    skills: ['Vue.js', 'JS', 'Zeplin', 'Git'],
  },
  {
    period: '2022.06 ~ 2022.09',
    role: '삼성SDS 금융데이터 자산화 과제',
    company: '삼성전자서비스',
    description: '퍼블리싱 UI 개발 신규 자산화 뷰 퍼블리싱 수정 (Vue 퍼블리싱)',
    skills: ['Vue.js', 'JS', 'Adobe XD'],
  },
  {
    period: '2022.04 ~ 2022.05',
    role: '삼성 셀 스토리몰 Vue.js 리뉴얼',
    company: '메이드인헤븐',
    description: 'Vue.js 기반 캐러셀 컴포넌트 및 핵심 페이지 구현',
    skills: ['Vue.js', 'Figma'],
  },
  {
    period: '2022.01 ~ 2022.04',
    role: '현대오토에버 모니터링 시스템 개발',
    company: '콘웰',
    description: 'Vue 프론트엔드 개발 및 Swagger 연동 UI 구축',
    skills: ['Vue.js', 'SCSS', 'JS', 'Git'],
  },
  {
    period: '2021.05 ~ 2021.11',
    role: '삼성 녹스(Knox) 포털 Teams',
    company: '제나인소프트',
    description: 'React 기반 퍼블리싱, UI 컴포넌트 개발',
    skills: ['React.js', 'TypeScript', 'SCSS', 'Zeplin'],
  },
  {
    period: '2021.04 ~ 2021.05',
    role: 'DB손해보험 GA 모바일 영업지원 구축',
    company: '두손소프트',
    description: 'GA 모바일 시스템 Vue 퍼블리싱',
    skills: ['Vue.js', 'JavaScript'],
  },
  {
    period: '2020.09 ~ 2020.10',
    role: 'IMK Korea 웹 퍼블리싱',
    company: 'IMK 코리아',
    description: 'IMK Korea 자사몰/플랫폼 Vue 퍼블리싱',
    skills: ['Vue.js', 'HTML', 'CSS'],
  },
  {
    period: '2020.02 ~ 2020.05',
    role: '배달의민족 사장님광장 이벤트 웹퍼블리싱',
    company: '배달의민족',
    description: '이벤트 페이지 운영 및 UI 개발 (Handlebars 활용)',
    skills: ['JavaScript', 'Handlebars.js'],
  },
  {
    period: '2019.10 ~ 2019.12',
    role: '클라우드웍스 플랫폼 화면 개발',
    company: '클라우드웍스',
    description: '플랫폼 화면 퍼블리싱 및 프론트엔드 개발',
    skills: ['JavaScript', 'HTML5', 'CSS3'],
  },
  {
    period: '2019.05 ~ 2019.09',
    role: 'CJ오쇼핑 파트너 시스템',
    company: '토피아정보기술',
    description: 'Material UI 활용 React 컴포넌트 프레임워크 개발',
    skills: ['React.js', 'SCSS', 'Material UI'],
  },
];

export default function Experience() {
  const navigate = useNavigate();

  // 1. 모달 열림 상태와 현재 선택된 경력 데이터를 관리할 state
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. 아이템 클릭 시 실행할 핸들러
  const handleItemClick = (exp) => {
    setSelectedExperience(exp);
    setIsModalOpen(true);
  };

  // 3. 모달 닫기 핸들러
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <div className='experience-page'>
      <div className='experience-page__container'>
        <div className='experience-page__header'>
          <button className='btn-back' onClick={() => navigate('/')}>
            &larr; Back to Home
          </button>
          <span className='experience-page__badge'>Career History</span>
          <h1 className='experience-page__title'>Work & Projects</h1>
          <p className='experience-page__subtitle'>
            각 항목을 클릭하시면 상세한 프로젝트 기여 내역을 확인하실 수
            있습니다.
          </p>
        </div>

        <div className='experience-page__timeline experience-timeline'>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              onClick={() => handleItemClick(exp)}
              className='experience-clickable-wrapper'
            >
              <ExperienceItem {...exp} />
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={
          selectedExperience
            ? `${selectedExperience.role} @ ${selectedExperience.company}`
            : ''
        }
      >
        {selectedExperience && (
          <div className='experience-modal'>
            <span className='experience-modal__period'>
              {selectedExperience.period}
            </span>

            {/* 요약 설명 */}
            <p className='experience-modal__summary'>
              {selectedExperience.description}
            </p>

            {/* 상세 설명 */}
            <p className='experience-modal__desc'>
              {selectedExperience.details}
            </p>

            {/* 기술 스택 */}
            <div className='experience-modal__skills-section'>
              <h4 className='skills-title'>사용 기술 및 환경</h4>
              <div className='skills-list'>
                {selectedExperience.skills.map((skill, idx) => (
                  <span key={idx} className='skill-badge'>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
    // <section className='experience' id='experience'>
    //   <h2 className='experience__title'>
    //     주요 경력 상세 (Recent Major Projects)
    //   </h2>

    //   <div className='experience__list'>
    //     {experiences.map((item, index) => (
    //       <ExperienceItem
    //         key={`${item.period}-${index}`}
    //         period={item.period}
    //         role={item.role}
    //         company={item.company}
    //         description={item.description}
    //         skills={item.skills}
    //       />
    //     ))}
    //   </div>
    // </section>
  );
}
