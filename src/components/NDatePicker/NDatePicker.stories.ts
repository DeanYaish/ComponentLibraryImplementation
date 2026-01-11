import type { Meta, StoryObj } from '@storybook/vue3';
import NDatePicker from './NDatePicker.vue';

const meta = {
  title: 'NUI/Forms/NDatePicker',
  component: NDatePicker,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    dateFormat: { control: 'text' },
  },
} satisfies Meta<typeof NDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Date',
    placeholder: 'Select date',
  },
};
