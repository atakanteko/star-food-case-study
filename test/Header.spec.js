import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import Header from '../components/Header';

function mountComponent(option) {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const getNavigationDrawerStatusMock = jest.fn();
  getNavigationDrawerStatusMock.mockReturnValue(true);

  const toggleNavigationDrawerMock = jest.fn();
  toggleNavigationDrawerMock.mockReturnValue(true);

  const store = new Vuex.Store({
    getters: {
      'store/getNavigationDrawerStatus': getNavigationDrawerStatusMock,
    },
    actions: {
      'store/toggleNavigationDrawer': toggleNavigationDrawerMock,
    },
  });

  return mount(Header, {
    localVue,
    store,
    vuetify: new Vuetify(),
    propsData: {
      ...option,
    },
    stubs: {
      'v-app-bar': true,
      'v-app-bar-nav-icon': true,
      'v-app-bar-title': true,
    },
    mocks: {
    },
  });
}

describe('Header File', () => {
  test('Component should mount successfully', () => {
    const param = {
      title: 'Test Data',
      dataId: 'accepted',
    };
    const wrapper = mountComponent(param);
    expect(wrapper.exists()).toBeTruthy();
  });
  test('should render title properly', () => {
    const param = {
      title: 'Test Data',
      dataId: 'accepted',
    };
    const wrapper = mountComponent(param);
    const titleElement = wrapper.find('.test');
    expect(titleElement.text()).toEqual(param.title);
  });

  test('render toggle method', () => {
    const param = {
      title: 'Test Data',
    };
    const wrapper = mountComponent(param);
    wrapper.vm.toggleDrawer();
  });
});
