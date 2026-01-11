import type { Meta, StoryObj } from '@storybook/vue3';
import NButton from './NButton.vue';

const meta = {
  title: 'NUI/Base/NButton',
  component: NButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger'] },
    label: { control: 'text' },
    icon: { control: 'text' },
  },
} satisfies Meta<typeof NButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Action',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Action',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Zone',
    variant: 'danger',
    icon: 'pi pi-exclamation-triangle',
  },
};
