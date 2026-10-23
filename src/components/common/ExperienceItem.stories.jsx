import ExperienceItem from './ExperienceItem';

export default {
  title: 'Components/Common/ExperienceItem',
  component: ExperienceItem,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#090d16' }],
    },
  },
};

export const Default = {
  args: {
    period: '2025.08 - 2026.02',
    role: 'Senior Web Publisher & UI Developer',
    company: 'Shinhan Card Digital Project',
    description:
      '디지털 서비스 및 카드 디자인 플랫폼(Anniverse 등) UI 템플릿 구축, 시멘틱 마크업 및 SCSS 구조화 리팩토링 진행',
    skills: ['HTML5', 'SCSS', 'JavaScript', 'BEM', 'Vue.js'],
  },
};
