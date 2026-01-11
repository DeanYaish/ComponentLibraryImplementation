import type { Meta, StoryObj } from '@storybook/vue3';
import NInput from './NInput.vue';

const meta = {
  title: 'NUI/Forms/NInput',
  component: NInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
  },
} satisfies Meta<typeof NInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    modelValue: 'invalid-email',
    error: 'Please enter a valid email address',
  },
};
