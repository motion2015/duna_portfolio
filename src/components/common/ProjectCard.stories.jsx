import ProjectCard from './ProjectCard';

export default {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  argTypes: {
    category: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    tags: { control: 'object' },
    link: { control: 'text' },
  },
};

export const Enterprise = {
  args: {
    category: 'Enterprise Project',
    title: '신한카드 디지털 서비스 UI 퍼블리싱',
    description:
      'HTML5, SCSS, BEM 방법론을 활용한 반응형 웹 표준 UI 템플릿 구축 및 멀티 멤버십 동의 플로우 개발',
    tags: ['HTML5', 'SCSS', 'BEM', 'JavaScript'],
    link: '#',
  },
};

export const Personal = {
  args: {
    category: 'Design System',
    title: 'React SCSS 컴포넌트 라이브러리',
    description:
      '18년 차 퍼블리싱 노하우를 녹여낸 모던 다크모드 컴포넌트 쇼케이스 및 Storybook 문서화 구축',
    tags: ['React', 'Vite', 'SCSS', 'Storybook'],
    link: '#',
  },
};
