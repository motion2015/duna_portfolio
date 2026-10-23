import React, { useEffect } from 'react';
import './Modal.scss';

export default function Modal({ isOpen, onClose, title, children }) {
  // ESC 키 누르면 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // 모달 열렸을 때 배경 스크롤 방지
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div
        className='modal-container'
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫힘 방지
        role='dialog'
        aria-modal='true'
      >
        <div className='modal-header'>
          {title && <h2 className='modal-title'>{title}</h2>}
          <button
            className='modal-close-btn'
            onClick={onClose}
            aria-label='Close Modal'
          >
            &times;
          </button>
        </div>

        <div className='modal-body'>{children}</div>
      </div>
    </div>
  );
}
