import type { Meta, StoryObj } from '@storybook/vue3';
import NTable from './NTable.vue';

const meta = {
  title: 'NUI/Data/NTable',
  component: NTable,
  tags: ['autodocs'],
  argTypes: {
    striped: { control: 'boolean' },
    paginator: { control: 'boolean' },
    loading: { control: 'boolean' },
    selectionMode: { control: 'select', options: [null, 'single', 'multiple'] },
  },
} satisfies Meta<typeof NTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
  { field: 'id', header: 'ID', sortable: true },
  { field: 'name', header: 'Name', sortable: true },
  { field: 'role', header: 'Role', sortable: true },
  { field: 'status', header: 'Status' }
];

const data = [
  { id: 1, name: 'V', role: 'Mercenary', status: 'Active' },
  { id: 2, name: 'Jackie Welles', role: 'Solo', status: 'Deceased' },
  { id: 3, name: 'Johnny Silverhand', role: 'Rockerboy', status: 'Construct' },
  { id: 4, name: 'Judy Alvarez', role: 'Braindance Tech', status: 'Active' },
  { id: 5, name: 'Panam Palmer', role: 'Nomad', status: 'Active' },
  { id: 6, name: 'Goro Takemura', role: 'Bodyguard', status: 'Unknown' },
];

export const Default: Story = {
  args: {
    data,
    columns,
    striped: true,
  },
};

export const WithPagination: Story = {
  args: {
    data: [...data, ...data, ...data], // duplicate for pagination
    columns,
    paginator: true,
    rows: 5,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};
