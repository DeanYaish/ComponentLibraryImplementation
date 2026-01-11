import type { Meta, StoryObj } from '@storybook/vue3';
import NDialog from './NDialog.vue';
import NButton from '../NButton/NButton.vue';
import { ref } from 'vue';

const meta = {
  title: 'NUI/Display/NDialog',
  component: NDialog,
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large', 'full'] },
    visible: { control: 'boolean' },
  },
} satisfies Meta<typeof NDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: 'Confirm Action',
    visible: false, // controlled by story wrapper
  },
  render: (args) => ({
    components: { NDialog, NButton },
    setup() {
      const isVisible = ref(false);
      const open = () => isVisible.value = true;
      return { args, isVisible, open };
    },
    template: `
      <div>
        <NButton label="Open Dialog" @click="open" variant="primary" />
        <NDialog v-bind="args" v-model:visible="isVisible">
          <p>Are you sure you want to proceed with this operation? This action cannot be undone.</p>
          <template #footer>
            <NButton label="Cancel" variant="ghost" @click="isVisible = false" />
            <NButton label="Confirm" variant="primary" @click="isVisible = false" />
          </template>
        </NDialog>
      </div>
    `,
  }),
};
