import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NIcon from '../NIcon.vue';

describe('NIcon', () => {
  it('renders icon class correctly', () => {
    const wrapper = mount(NIcon, {
      props: { icon: 'pi pi-home' }
    });
    expect(wrapper.find('i').classes()).toContain('pi-home');
  });

  it('applies color class', () => {
    const wrapper = mount(NIcon, {
      props: { icon: 'pi pi-home', color: 'primary' }
    });
    // Check if the classes array contains the specific class we expect
    expect(wrapper.classes()).toContain('text-primary-500');
  });
});
