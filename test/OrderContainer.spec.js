import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import OrderContainer from '../components/CreateOrder/OrderContainer';

const menuList = {
  list: [
    {
      id: '224477',
      name: 'Spicy Mixed Olives (V)',
      price: '215.00',
    },
    {
      id: '224480',
      name: 'Hummus with PERI-PERI Drizzle',
      price: '215.00',
    },
    {
      id: '224483',
      name: 'Red Pepper Dip',
      price: '205.00',
    },
  ],
};

function mountComponent() {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const getMenuListMock = jest.fn();
  getMenuListMock.mockReturnValue(menuList);

  const store = new Vuex.Store({
    getters: {
      'store/getMenuList': getMenuListMock,
    },
  });

  return shallowMount(OrderContainer, {
    localVue,
    store,
    vuetify: new Vuetify(),
    data() {
      return {
        menu: this.list,
        clearSignalForOrderItems: null,
        iValue: null,
        cValue: null,
        clientMes: null,
        radioMes: null,
        time: null,
        orderNumber: null,
      };
    },
    stubs: {
    },
    mocks: {
    },
  });
}

describe('Order Container File', () => {
  test('Component should mount successfully', () => {
    const wrapper = mountComponent();
    expect(wrapper.exists()).toBeTruthy();
  });
  test('clearSignalTest method should work properly', () => {
    const wrapper = mountComponent();
    wrapper.vm.clearSignal(true);
    expect(wrapper.vm.clearSignalForOrderItems).toBeTruthy();
  });
  test('sendNameInputValue method should work properly', () => {
    const wrapper = mountComponent();
    wrapper.vm.sendNameInputValue('test data');
    expect(wrapper.vm.iValue).toEqual('test data');
  });
  test('sendContactInputValue method should work properly', () => {
    const wrapper = mountComponent();
    wrapper.vm.sendContactInputValue('test data');
    expect(wrapper.vm.cValue).toEqual('test data');
  });
  test('sendRadioValue method should work properly', () => {
    const wrapper = mountComponent();
    wrapper.vm.sendRadioValue('test data');
    expect(wrapper.vm.radioMes).toEqual('test data');
  });
  test('sendClientMessage method should work properly', () => {
    const wrapper = mountComponent();
    wrapper.vm.sendClientMessage('test data');
    expect(wrapper.vm.clientMes).toEqual('test data');
  });
  test('sendTime method should work properly', () => {
    const wrapper = mountComponent();
    wrapper.vm.sendTime('test data');
    expect(wrapper.vm.time).toEqual('test data');
  });
  test('sendOrder method should work properly', () => {
    const wrapper = mountComponent();
    wrapper.vm.sendOrder(12345);
    expect(wrapper.vm.orderNumber).toEqual(12345);
  });
});
