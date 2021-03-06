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
  test('dialog status computed should return dialog prop properly', () => {
    const param = {
      dialog: false,
    };
    const wrapper = mountComponent(param);
    wrapper.setData({ decline: null });
    const { dialogStatus } = wrapper.vm;
    expect(dialogStatus).toBe(param.dialog);
  });
  test('close dialog method should make decline variable false when it is true', () => {
    const param = {
      dialog: false,
    };
    const wrapper = mountComponent(param);
    wrapper.setData({ decline: true });
    wrapper.vm.closeDialog();
    expect(wrapper.vm.decline).toBeFalsy();
  });
  test('close dialog method should emit false', async () => {
    const param = {
      dialog: false,
    };
    const wrapper = mountComponent(param);
    wrapper.setData({ decline: true });
    wrapper.vm.closeDialog();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted(['changeDialog'][0][0])).toBeFalsy();
  });
  test('Dialog watcher should work properly', async () => {
    const param = {
      dialog: false,
    };
    const wrapper = mountComponent(param);
    wrapper.setData({ decline: true });
    wrapper.vm.$options.watch.dialog(wrapper.vm, true);
    expect(wrapper.vm.decline).toBeTruthy();
  });
});
