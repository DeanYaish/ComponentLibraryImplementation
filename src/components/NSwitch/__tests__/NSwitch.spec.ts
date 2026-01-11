import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NSwitch from '../NSwitch.vue';
import PrimeVue from 'primevue/config';

describe('NSwitch', () => {
  it('renders label', () => {
    const wrapper = mount(NSwitch, {
      props: { label: 'Toggle Mode', id: 'switch' },
      global: { plugins: [PrimeVue] }
    });
    expect(wrapper.text()).toContain('Toggle Mode');
  });

  it('updates model value', async () => {
    const wrapper = mount(NSwitch, {
      props: { modelValue: false },
      global: { plugins: [PrimeVue] }
    });
    const input = wrapper.find('input[type="checkbox"]');
    await input.setValue(true);
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true]);
  });
});
