import { shallowMount } from '@vue/test-utils';
import index from '../pages/create_order/index';

function mountComponent() {
  return shallowMount(index, {
  });
}

describe('Create Order - index.vue File', () => {
  test('Component should mount successfully', () => {
    const wrapper = mountComponent();
    expect(wrapper.exists()).toBeTruthy();
  });
});
