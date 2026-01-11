import type { Meta, StoryObj } from '@storybook/vue3';
import NCheckbox from './NCheckbox.vue';

const meta = {
  title: 'NUI/Forms/NCheckbox',
  component: NCheckbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
} satisfies Meta<typeof NCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'I accept the terms and conditions',
    modelValue: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Subscribe to newsletter',
    modelValue: true,
  },
};
