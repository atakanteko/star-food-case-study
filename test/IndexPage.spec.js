import { shallowMount } from '@vue/test-utils';
import index from '../pages/index';

function mountComponent() {
  return shallowMount(index, {
  });
}

describe('Page - index.vue File', () => {
  test('Component should mount successfully', () => {
    const wrapper = mountComponent();
    expect(wrapper.exists()).toBeTruthy();
  });
});
