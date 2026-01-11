import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NCheckbox from '../NCheckbox.vue';
import PrimeVue from 'primevue/config';

describe('NCheckbox', () => {
  it('renders label', () => {
    const wrapper = mount(NCheckbox, {
      props: { label: 'Accept Terms', id: 'terms' },
      global: { plugins: [PrimeVue] }
    });
    expect(wrapper.text()).toContain('Accept Terms');
  });

  it('updates model value', async () => {
    const wrapper = mount(NCheckbox, {
      props: { modelValue: false },
      global: { plugins: [PrimeVue] }
    });
    const input = wrapper.find('input[type="checkbox"]');
    await input.setValue(true);
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true]);
  });
});
