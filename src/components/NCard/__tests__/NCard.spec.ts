import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NCard from '../NCard.vue';
import PrimeVue from 'primevue/config';

describe('NCard', () => {
  it('renders title and content', () => {
    const wrapper = mount(NCard, {
      props: { title: 'Card Title' },
      slots: { default: 'Card Content' },
      global: { plugins: [PrimeVue] }
    });
    expect(wrapper.text()).toContain('Card Title');
    expect(wrapper.text()).toContain('Card Content');
  });

  it('renders subtitle', () => {
    const wrapper = mount(NCard, {
      props: { subtitle: 'Card Subtitle' },
      global: { plugins: [PrimeVue] }
    });
    expect(wrapper.text()).toContain('Card Subtitle');
  });
});
