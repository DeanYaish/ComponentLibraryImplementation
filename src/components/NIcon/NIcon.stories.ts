import type { Meta, StoryObj } from '@storybook/vue3';
import NIcon from './NIcon.vue';

const meta = {
  title: 'NUI/Base/NIcon',
  component: NIcon,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'accent', 'white'] },
    size: { control: 'text' },
    icon: { control: 'text' },
  },
} satisfies Meta<typeof NIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: 'pi pi-check-circle',
    size: '2rem',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    icon: 'pi pi-times-circle',
    size: '2rem',
    color: 'secondary',
  },
};

export const FontAwesome: Story = {
  args: {
    icon: 'fas fa-rocket',
    size: '2rem',
    color: 'accent',
  },
};
