import { mount } from '@vue/test-utils';
import Vuetify from 'vuetify';

import NavigationDrawer from '../components/NavigationDrawer';

function mountComponent() {
  return mount(NavigationDrawer, {
    vuetify: new Vuetify(),
    stubs: {
      'v-navigation-drawer': true,
      NuxtLink: true,
    },
    mocks: {
    },
  });
}

describe('NavigationDrawer File', () => {
  test('Component should mount successfully', async () => {
    const wrapper = mountComponent();
    const dataParam = {
      clipped: false,
      drawer: false,
      fixed: false,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
    await wrapper.setData({ ...dataParam });
    expect(wrapper.exists()).toBeTruthy();
  });
});
