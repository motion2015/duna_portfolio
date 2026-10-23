import ContactForm from '../common/ContactForm';

export default {
  title: 'Components/Common/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#090d16' }, // 테크 블루 다크모드 배경
      ],
    },
  },
};

export const Default = {
  args: {
    onSubmit: (data) => alert(JSON.stringify(data, null, 2)),
  },
};
