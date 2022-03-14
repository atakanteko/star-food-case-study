import { mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Dialog from '../components/Dialog/Dialog';

function mountComponent(option) {
  return mount(Dialog, {
    vuetify: new Vuetify(),
    propsData: {
      ...option,
    },
    stubs: {
      'v-dialog': true,
      'v-card': true,
      'v-card-title': true,
      'v-card-text': true,
      'v-card-actions': true,
      'v-row': true,
      'v-spacer': true,
      'v-btn': true,
    },
    mocks: {
    },
  });
}

describe('Dialog Component', () => {
  test('Component should mount successfully', () => {
    const param = {
      dialog: false,
    };
    const wrapper = mountComponent(param);
    wrapper.setData({ decline: null });
    expect(wrapper.exists()).toBeTruthy();
  });
});
