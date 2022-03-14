import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import OrderForm from '../components/CreateOrder/OrderForm';

const menuList = [
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
];
const selectedOrdersMeal =
  [
    {
      id: '224474',
      name: 'Chicken Livers and Portuguese Roll',
      price: '250.00',
      quantity: 1,
      cost: 250,
    },
    {
      id: '224477',
      name: 'Spicy Mixed Olives (V)',
      price: '215.00',
      quantity: 1,
      cost: 215,
    },
  ];

function mountComponent(options) {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const getMenuListMock = jest.fn();
  getMenuListMock.mockReturnValue(menuList);
  const getSelectedOrderedMealsMock = jest.fn();
  getSelectedOrderedMealsMock.mockReturnValue(selectedOrdersMeal);

  const store = new Vuex.Store({
    getters: {
      'store/getMenuList': getMenuListMock,
      'store/getSelectedOrderedMeals': getMenuListMock,
    },
    actions: {
      'store/markNameFieldAsDirty': jest.fn,
      'store/calculateSelectedOrderedMeals': jest.fn,
      'store/markSelectedMealsAsDirty': jest.fn,
      'store/markClientMessageFieldAsDirty': jest.fn,
      'store/quantityProcess': jest.fn,
    },
  });

  return shallowMount(OrderForm, {
    localVue,
    store,
    vuetify: new Vuetify(),
    propsData: {
      ...options,
    },
    data() {
      return {
        time: null,
        orderNumber: null,
        items: null,
        selectedMeals: [],
        clientMessage: null,
        radios: 'Delivery',
        inputValueName: null,
        inputValueContact: null,
      };
    },
    stubs: {
      'v-row': true,
      'v-col': true,
      'v-text-field': true,
      'v-radio': true,
      'v-radio-group': true,
      'v-select': true,
    },
    mocks: {
    },
  });
}

describe('Order Form File', () => {
  test('Component should mount successfully', () => {
    const param = { value: menuList, signal: true };
    const wrapper = mountComponent(param);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('digitsCount method should return number of digit', () => {
    const param = { value: menuList, signal: true };
    const wrapper = mountComponent(param);
    const numOfDigitsWrapper = wrapper.vm.digitsCount(5555);
    expect(numOfDigitsWrapper).toEqual(4);
  });

  test('watcher radios should work properly', async () => {
    const param = { value: menuList, signal: true };
    const wrapper = mountComponent(param);
    wrapper.vm.$options.watch.radios.call(wrapper.vm, 'Takeaway');
    await wrapper.vm.$nextTick();
    const emittedVal = wrapper.emitted(['sendRadioValue'][0]);
    const emittedRealVal = emittedVal[0][0];
    expect(emittedRealVal).toEqual('Takeaway');
  });

  test('watcher clientMessage should work properly', async () => {
    const param = { value: menuList, signal: true };
    const wrapper = mountComponent(param);
    wrapper.vm.$options.watch.clientMessage.call(wrapper.vm, 'TestVal');
    await wrapper.vm.$nextTick();
    const emittedVal = wrapper.emitted(['sendClientMessage'][0]);
    const emittedRealVal = emittedVal[0][0];
    expect(emittedRealVal).toEqual('TestVal');
  });

  test('watcher signal should work properly', async () => {
    const param = { value: menuList, signal: true };
    const wrapper = mountComponent(param);
    wrapper.vm.$options.watch.signal.call(wrapper.vm, true);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.selectedMeals.length).toBe(0);
  });

  test('watcher inputValueName should work properly', async () => {
    const param = { value: menuList, signal: true };
    const wrapper = mountComponent(param);
    wrapper.vm.$options.watch.inputValueName.call(wrapper.vm, 'Atakan');
    await wrapper.vm.$nextTick();
    const emittedVal = wrapper.emitted(['sendContactInputValue'][0]);
    const emittedRealVal = emittedVal[0][0];
    expect(emittedRealVal).toEqual('Atakan');
  });
  test('watcher inputValueName should mark false properly', async () => {
    const param = { value: menuList, signal: true };
    const wrapper = mountComponent(param);
    wrapper.vm.$options.watch.inputValueName.call(wrapper.vm, '');
  });
  test('watcher selectedMeals should work properly', async () => {
    const param = { value: menuList, signal: true };
    const meal = [{
      id: '224474',
      name: 'Chicken Livers and Portuguese Roll',
      price: '250.00',
      quantity: 1,
      cost: 250,
    }];
    const wrapper = mountComponent(param);
    wrapper.vm.$options.watch.selectedMeals.call(wrapper.vm, meal);
  });
  test('watcher selectedMeals should mark false properly', async () => {
    const param = { value: menuList, signal: true };
    const meal = {
    };
    const wrapper = mountComponent(param);
    wrapper.vm.$options.watch.selectedMeals.call(wrapper.vm, meal);
  });
  test('watcher inputValueContact should markClientMessageFieldAsDirty as true ', async () => {
    const param = { value: menuList, signal: true };
    const num = '05372222222';
    const wrapper = mountComponent(param);
    wrapper.vm.$options.watch.inputValueContact.call(wrapper.vm, num);
  });
  test('watcher inputValueContact should markClientMessageFieldAsDirty as false ', async () => {
    const param = { value: menuList, signal: true };
    const num = '0537 222 22 22';
    const wrapper = mountComponent(param);
    wrapper.vm.$options.watch.inputValueContact.call(wrapper.vm, num);
  });
});
