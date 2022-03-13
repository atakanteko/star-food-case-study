import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import ToggleableDrawer from '../components/ToggleableDrawer';

function mountComponent(option) {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const getNavigationDrawerStatusMock = jest.fn();
  getNavigationDrawerStatusMock.mockReturnValue(false);

  const store = new Vuex.Store({
    getters: {
      'store/getNavigationDrawerStatus': getNavigationDrawerStatusMock,
    },
  });

  return mount(ToggleableDrawer, {
    localVue,
    store,
    vuetify: new Vuetify(),
    propsData: {
      ...option,
    },
    stubs: {
      'v-navigation-drawer': true,
      NuxtLink: true,
    },
    mocks: {
    },
  });
}

describe('ToggleableDrawer File', () => {
  test('Component should mount successfully', () => {
    const param = {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
    const wrapper = mountComponent(param);
    expect(wrapper.exists()).toBeTruthy();
  });
});
