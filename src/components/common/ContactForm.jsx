import React, { useState } from 'react';
import './ContactForm.scss';

export default function ContactForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      if (onSubmitSuccess) onSubmitSuccess(formData);
    }, 1000);
  };

  return (
    <div className='contact-form-wrapper'>
      {status === 'success' ? (
        <div className='contact-form__success'>
          <div className='success-icon'>✓</div>
          <h4>메시지가 성공적으로 전송되었습니다!</h4>
          <p>빠른 시일 내에 회신해 드리겠습니다. 감사합니다.</p>
          <button
            type='button'
            className='btn-reset'
            onClick={() => {
              setStatus('idle');
              setFormData({ name: '', email: '', message: '' });
            }}
          >
            새로운 메시지 보내기
          </button>
        </div>
      ) : (
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='contact-form__field'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='성함 또는 기업명을 입력해주세요'
              required
            />
          </div>

          <div className='contact-form__field'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='회신받을 이메일 주소를 입력해주세요'
              required
            />
          </div>

          <div className='contact-form__field'>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              rows='5'
              value={formData.message}
              onChange={handleChange}
              placeholder='프로젝트 문의 및 협업 제안 내용을 적어주세요'
              required
            ></textarea>
          </div>

          <button
            type='submit'
            className={`contact-form__submit ${status === 'submitting' ? 'is-loading' : ''}`}
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
