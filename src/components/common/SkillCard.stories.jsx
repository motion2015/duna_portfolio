import SkillCard from './SkillCard';

export default {
  title: 'Components/SkillCard',
  component: SkillCard,
  tags: ['autodocs'],
  argTypes: {
    category: { control: 'text' },
    items: { control: 'object' },
  },
};

export const Default = {
  args: {
    category: 'Markup & Web Standards',
    items: [
      'HTML5',
      'Semantic Markup',
      'WAI-ARIA (웹 접근성)',
      'Cross Browsing',
      'Web Performance',
    ],
  },
};

export const StylingArchitecture = {
  args: {
    category: 'CSS & Styling Architecture',
    items: [
      'SCSS / Sass',
      'CSS Modules',
      'BEM Methodology',
      'Flexbox / Grid',
      'Responsive Web Design',
    ],
  },
};
