import type { Meta, StoryObj } from '@storybook/vue3';
import NAutoComplete from './NAutoComplete.vue';

const meta = {
  title: 'NUI/Forms/NAutoComplete',
  component: NAutoComplete,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof NAutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Country',
    placeholder: 'Search for a country',
    suggestions: [],
  },
};
