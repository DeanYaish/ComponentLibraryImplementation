import type { Meta, StoryObj } from '@storybook/vue3';
import NChip from './NChip.vue';

const meta = {
  title: 'NUI/Display/NChip',
  component: NChip,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'outline'] },
    removable: { control: 'boolean' },
  },
} satisfies Meta<typeof NChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'React',
    variant: 'primary',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Vue.js',
    icon: 'pi pi-check',
    variant: 'secondary',
  },
};

export const Removable: Story = {
  args: {
    label: 'Filter: Active',
    removable: true,
    variant: 'outline',
  },
};
