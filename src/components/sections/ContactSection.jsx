// src/components/sections/ContactSection.jsx 또는 src/App.jsx
import React from 'react';
// 혹은 상대 경로: import ContactForm from '@components/common/ContactForm'; // alias 적용된 경로
import ContactForm from '../common/ContactForm';

import './ContactSection.scss'; // 섹션 전용 스타일 (필요시)

export default function ContactSection() {
  const handleFormSubmit = (formData) => {
    // 폼 제출 시 실행할 로직 (API 전송, 콘솔 확인 등)
    console.log('Submitted Data:', formData);
  };

  return (
    <section id='contact' className='contact-section'>
      <div className='container'>
        <h2 className='section-title'>Contact Me</h2>
        <p className='section-desc'>
          프로젝트 제안이나 문의사항이 있으시면 남겨주세요.
        </p>

        {/* ContactForm 컴포넌트 배치 */}
        <ContactForm onSubmit={handleFormSubmit} />
      </div>
    </section>
  );
}
