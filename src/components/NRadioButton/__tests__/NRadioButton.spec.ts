import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NRadioButton from '../NRadioButton.vue';
import PrimeVue from 'primevue/config';

describe('NRadioButton', () => {
  it('renders label', () => {
    const wrapper = mount(NRadioButton, {
      props: { label: 'Option 1', value: 'opt1', id: 'opt1' },
      global: { plugins: [PrimeVue] }
    });
    expect(wrapper.text()).toContain('Option 1');
  });

  it('updates model value when clicked', async () => {
    const wrapper = mount(NRadioButton, {
      props: { modelValue: '', value: 'opt1', id: 'opt1' },
      global: { plugins: [PrimeVue] }
    });
    const input = wrapper.find('input[type="radio"]');
    await input.setValue();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['opt1']);
  });
});
