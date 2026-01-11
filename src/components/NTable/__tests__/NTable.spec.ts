import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NTable from '../NTable.vue';
import PrimeVue from 'primevue/config';

describe('NTable', () => {
  const columns = [
    { field: 'name', header: 'Name' },
    { field: 'role', header: 'Role' }
  ];
  
  const data = [
    { name: 'Neo', role: 'Hacker' },
    { name: 'Trinity', role: 'Pilot' }
  ];

  it('renders columns and data', () => {
    // NTable wraps DataTable which is complex.
    // Testing structure existence and props passing.
    const wrapper = mount(NTable, {
      props: { data, columns },
      global: { plugins: [PrimeVue] }
    });
    
    // Check if table exists
    expect(wrapper.find('.n-table').exists()).toBe(true);
    
    // Check headers
    expect(wrapper.text()).toContain('Name');
    expect(wrapper.text()).toContain('Role');
    
    // Check data
    expect(wrapper.text()).toContain('Neo');
    expect(wrapper.text()).toContain('Hacker');
  });

  it('handles selection prop', async () => {
    const wrapper = mount(NTable, {
      props: { 
        data, 
        columns, 
        selectionMode: 'single',
        selection: []
      },
      global: { plugins: [PrimeVue] }
    });
    
    // PrimeVue DataTable class logic can vary, simpler to check if the table component exists 
    // and if the prop was passed correctly by checking if it doesn't throw or fail to render
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'DataTable' }).props('selectionMode')).toBe('single');
  });
});
