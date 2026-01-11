import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NDatePicker from '../NDatePicker.vue';
import PrimeVue from 'primevue/config';

describe('NDatePicker', () => {
  it('renders correctly', () => {
    const wrapper = mount(NDatePicker, {
      props: { label: 'Select Date' },
      global: { plugins: [PrimeVue] }
    });
    expect(wrapper.text()).toContain('Select Date');
    expect(wrapper.find('.n-datepicker').exists()).toBe(true);
  });
});
