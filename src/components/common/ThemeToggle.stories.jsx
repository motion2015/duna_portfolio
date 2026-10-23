import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default {
  title: 'Components/Common/ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#090d16' }],
    },
  },
};

export const Default = () => {
  const [theme, setTheme] = useState('dark');

  const handleToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      style={{
        padding: '40px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <ThemeToggle theme={theme} onToggle={handleToggle} />
      <span style={{ color: '#f8fafc', fontSize: '0.95rem' }}>
        현재 테마: <strong>{theme.toUpperCase()}</strong>
      </span>
    </div>
  );
};
