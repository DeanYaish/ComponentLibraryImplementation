import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NButton from '../NButton.vue';
import PrimeVue from 'primevue/config';

describe('NButton', () => {
  it('renders label correctly', () => {
    const wrapper = mount(NButton, {
      props: { label: 'Test Button' },
      global: {
        plugins: [PrimeVue]
      }
    });
    expect(wrapper.text()).toContain('Test Button');
  });

  it('applies variant classes', () => {
    const wrapper = mount(NButton, {
      props: { variant: 'danger' },
      global: {
        plugins: [PrimeVue]
      }
    });
    expect(wrapper.find('.n-button--danger').exists()).toBe(true);
  });
});
