import type { Meta, StoryObj } from '@storybook/vue3';
import NSelect from './NSelect.vue';

const meta = {
  title: 'NUI/Forms/NSelect',
  component: NSelect,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof NSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
];

export const Default: Story = {
  args: {
    label: 'City',
    placeholder: 'Select a City',
    options: options,
    optionLabel: 'name',
    optionValue: 'code'
  },
};
