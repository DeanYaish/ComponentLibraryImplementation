import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NInput from '../NInput.vue';
import PrimeVue from 'primevue/config';

describe('NInput', () => {
  it('renders correctly', () => {
    const wrapper = mount(NInput, {
      props: { label: 'Username' },
      global: { plugins: [PrimeVue] }
    });
    expect(wrapper.text()).toContain('Username');
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('updates model value', async () => {
    const wrapper = mount(NInput, {
      props: { modelValue: '' },
      global: { plugins: [PrimeVue] }
    });
    const input = wrapper.find('input');
    await input.setValue('test');
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test']);
  });

  it('shows error message', () => {
    const wrapper = mount(NInput, {
      props: { error: 'Required field' },
      global: { plugins: [PrimeVue] }
    });
    expect(wrapper.text()).toContain('Required field');
    expect(wrapper.find('.p-invalid').exists()).toBe(true);
  });
});
