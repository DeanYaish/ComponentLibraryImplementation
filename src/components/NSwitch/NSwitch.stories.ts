import type { Meta, StoryObj } from '@storybook/vue3';
import NSwitch from './NSwitch.vue';

const meta = {
  title: 'NUI/Forms/NSwitch',
  component: NSwitch,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
} satisfies Meta<typeof NSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable Notifications',
    modelValue: false,
  },
};

export const Active: Story = {
  args: {
    label: 'Dark Mode',
    modelValue: true,
  },
};
