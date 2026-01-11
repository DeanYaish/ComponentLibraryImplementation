import type { Meta, StoryObj } from '@storybook/vue3';
import NRadioButton from './NRadioButton.vue';

const meta = {
  title: 'NUI/Forms/NRadioButton',
  component: NRadioButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
} satisfies Meta<typeof NRadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Option A',
    value: 'A',
    name: 'options',
  },
};
