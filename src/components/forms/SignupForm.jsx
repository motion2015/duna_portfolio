import React, { useState } from 'react';
import './SignupForm.scss';

const SignupForm = () => {
  // 폼 입력값 상태
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    agreeTerms: false,
  });

  // 에러 메시지 상태
  const [errors, setErrors] = useState({});
  // 터치(포커스 이탈) 여부 상태 (실시간 에러 폭탄 방지)
  const [touched, setTouched] = useState({});
  // 제출 성공 여부
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 유효성 검사 로직
  const validate = (values) => {
    const newErrors = {};

    // 이름 검증
    if (!values.name.trim()) {
      newErrors.name = '이름을 입력해 주세요.';
    } else if (values.name.length < 2) {
      newErrors.name = '이름은 최소 2글자 이상이어야 합니다.';
    }

    // 이메일 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email) {
      newErrors.email = '이메일 주소를 입력해 주세요.';
    } else if (!emailRegex.test(values.email)) {
      newErrors.email = '올바른 이메일 형식(예: id@domain.com)이 아닙니다.';
    }

    // 비밀번호 검증
    if (!values.password) {
      newErrors.password = '비밀번호를 입력해 주세요.';
    } else if (values.password.length < 8) {
      newErrors.password = '비밀번호는 최소 8자 이상이어야 합니다.';
    }

    // 비밀번호 확인 검증
    if (!values.passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호 확인을 입력해 주세요.';
    } else if (values.password !== values.passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
    }

    // 약관 동의 검증
    if (!values.agreeTerms) {
      newErrors.agreeTerms = '서비스 이용약관에 동의해 주세요.';
    }

    return newErrors;
  };

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    // 입력하는 동안 실시간으로 에러 검증 업데이트
    setErrors(validate({ ...formData, [name]: val }));
  };

  // 포커스 아웃(Blur) 시 터치 상태 기록
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    // 모든 필드를 터치한 것으로 처리하여 에러 메시지 노출
    setTouched({
      name: true,
      email: true,
      password: true,
      passwordConfirm: true,
      agreeTerms: true,
    });

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      console.log('폼 제출 성공 데이터:', formData);
    }
  };

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit} noValidate>
        <h2 className='signup-form__title'>회원가입</h2>

        {isSubmitted && (
          <div className='signup-form__success' role='alert'>
            🎉 회원가입이 성공적으로 완료되었습니다!
          </div>
        )}

        {/* 이름 입력 필드 */}
        <div className='form-group'>
          <label htmlFor='name' className='form-group__label'>
            이름
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className={`form-group__input ${touched.name && errors.name ? 'has-error' : ''}`}
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required='true'
            aria-invalid={touched.name && !!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {touched.name && errors.name && (
            <span id='name-error' className='form-group__error' role='alert'>
              {errors.name}
            </span>
          )}
        </div>

        {/* 이메일 입력 필드 */}
        <div className='form-group'>
          <label htmlFor='email' className='form-group__label'>
            이메일 주소
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className={`form-group__input ${touched.email && errors.email ? 'has-error' : ''}`}
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required='true'
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {touched.email && errors.email && (
            <span id='email-error' className='form-group__error' role='alert'>
              {errors.email}
            </span>
          )}
        </div>

        {/* 비밀번호 입력 필드 */}
        <div className='form-group'>
          <label htmlFor='password' className='form-group__label'>
            비밀번호
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className={`form-group__input ${touched.password && errors.password ? 'has-error' : ''}`}
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required='true'
            aria-invalid={touched.password && !!errors.password}
            aria-describedby={errors.password ? 'password-error' : undefined}
          />
          {touched.password && errors.password && (
            <span
              id='password-error'
              className='form-group__error'
              role='alert'
            >
              {errors.password}
            </span>
          )}
        </div>

        {/* 비밀번호 확인 필드 */}
        <div className='form-group'>
          <label htmlFor='passwordConfirm' className='form-group__label'>
            비밀번호 확인
          </label>
          <input
            type='password'
            id='passwordConfirm'
            name='passwordConfirm'
            className={`form-group__input ${touched.passwordConfirm && errors.passwordConfirm ? 'has-error' : ''}`}
            value={formData.passwordConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required='true'
            aria-invalid={touched.passwordConfirm && !!errors.passwordConfirm}
            aria-describedby={
              errors.passwordConfirm ? 'passwordConfirm-error' : undefined
            }
          />
          {touched.passwordConfirm && errors.passwordConfirm && (
            <span
              id='passwordConfirm-error'
              className='form-group__error'
              role='alert'
            >
              {errors.passwordConfirm}
            </span>
          )}
        </div>

        {/* 약관 동의 체크박스 */}
        <div className='form-group form-group--checkbox'>
          <label className='checkbox-label'>
            <input
              type='checkbox'
              name='agreeTerms'
              checked={formData.agreeTerms}
              onChange={handleChange}
              aria-required='true'
            />
            <span className='checkbox-text'>
              [필수] 서비스 이용약관 및 개인정보 처리방침에 동의합니다.
            </span>
          </label>
          {touched.agreeTerms && errors.agreeTerms && (
            <span className='form-group__error' role='alert'>
              {errors.agreeTerms}
            </span>
          )}
        </div>

        {/* 제출 버튼 */}
        <button type='submit' className='signup-form__submit-btn'>
          가입하기
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
