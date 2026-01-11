import type { Meta, StoryObj } from '@storybook/vue3';
import NCard from './NCard.vue';

const meta = {
  title: 'NUI/Display/NCard',
  component: NCard,
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
} satisfies Meta<typeof NCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Cyberpunk Card',
    subtitle: 'Futuristic UI Component',
    default: 'This is the main content area of the card. It features a neon glow effect on hover.',
  },
  render: (args) => ({
    components: { NCard },
    setup() {
      return { args };
    },
    template: '<NCard v-bind="args">{{ args.default }}</NCard>',
  }),
};

export const WithHeaderAndFooter: Story = {
  args: {
    header: 'System Alert',
    title: 'Breach Detected',
    subtitle: 'Sector 7G',
    default: 'Unauthorized access detected in the main mainframe. Security protocols initiated.',
  },
  render: (args) => ({
    components: { NCard },
    setup() {
      return { args };
    },
    template: `
      <NCard v-bind="args">
        {{ args.default }}
        <template #footer>
          <div class="flex gap-2 justify-end">
            <button class="text-primary-400 uppercase font-bold text-sm hover:text-white">Dismiss</button>
            <button class="bg-primary-500 text-black px-3 py-1 uppercase font-bold text-sm hover:bg-primary-400">Lockdown</button>
          </div>
        </template>
      </NCard>
    `,
  }),
};
