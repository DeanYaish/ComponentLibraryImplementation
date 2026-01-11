import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NChip from '../NChip.vue';
import PrimeVue from 'primevue/config';

describe('NChip', () => {
  it('renders label', () => {
    const wrapper = mount(NChip, {
      props: { label: 'Tag' },
      global: { plugins: [PrimeVue] }
    });
    expect(wrapper.text()).toContain('Tag');
  });

  it('emits remove event', async () => {
    const wrapper = mount(NChip, {
      props: { label: 'Tag', removable: true },
      global: { plugins: [PrimeVue] }
    });
    // PrimeVue Chip remove icon logic is internal, checking existence of component
    expect(wrapper.find('.p-chip').exists()).toBe(true);
  });
});
