import React, { useState } from 'react';
import Modal from './Modal';

export default {
  title: 'Components/Common/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#090d16' }],
    },
  },
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3b82f6',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '600',
        }}
      >
        모달 열기
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='신한카드 디지털 서비스 상세 내용'
      >
        <p>
          <strong>프로젝트 기간:</strong> 2025.08 - 2026.02
        </p>
        <p style={{ marginTop: '12px' }}>
          신한카드 디지털 플랫폼 UI 템플릿 표준화 및 반응형 웹 인터페이스를
          설계했습니다. BEM 마크업 구조를 체계화하여 유지보수성을
          극대화했습니다.
        </p>
      </Modal>
    </div>
  );
};
