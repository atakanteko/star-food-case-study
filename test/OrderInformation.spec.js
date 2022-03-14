import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import OrderInformation from '../components/CreateOrder/OrderInformation';

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
const propsParams = {
  contactInput: '05343334422',
  nameInput: 'Atakan',
  radioInfo: 'Delivery',
  clientInfo: 'Ketçap istiyorum.',
  orderNum: 12345,
  timeInfo: '01/01/01 15:22:12',
};
function mountComponent(options) {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const getMenuListMock = jest.fn();
  getMenuListMock.mockReturnValue(menuList);

  const getSelectedOrderedMealsMock = jest.fn();
  getSelectedOrderedMealsMock.mockReturnValue(selectedOrdersMeal);

  const getNameFieldDirtyMock = jest.fn();
  getNameFieldDirtyMock.mockReturnValue(true);

  const getClientMessageFieldDirtyMock = jest.fn();
  getClientMessageFieldDirtyMock.mockReturnValue(true);

  const getSelectedOrdersFieldDirtyMock = jest.fn();
  getSelectedOrdersFieldDirtyMock.mockReturnValue(true);

  const store = new Vuex.Store({
    getters: {
      'store/getMenuList': getMenuListMock,
      'store/getSelectedOrderedMeals': getMenuListMock,
      'store/getNameFieldDirty': getNameFieldDirtyMock,
      'store/getClientMessageFieldDirty': getClientMessageFieldDirtyMock,
      'store/getSelectedOrdersFieldDirty': getSelectedOrdersFieldDirtyMock,
    },
    actions: {
      'store/markNameFieldAsDirty': jest.fn,
      'store/calculateSelectedOrderedMeals': jest.fn,
      'store/markSelectedMealsAsDirty': jest.fn,
      'store/markClientMessageFieldAsDirty': jest.fn,
      'store/quantityProcess': jest.fn,
      'store/listModelAction': jest.fn,
      'store/clearAll': jest.fn,
    },
  });
  const replaceMock = jest.fn();
  return shallowMount(OrderInformation, {
    localVue,
    store,
    vuetify: new Vuetify(),
    propsData: {
      ...options,
    },
    data() {
      return {
        dialogStatus: false,
      };
    },
    mocks: {
      $router: {
        push: replaceMock,
      },
    },
  });
}

describe('Order Information File', () => {
  test('Component should mount successfully', () => {
    const param = {
      ...propsParams,
    };
    const wrapper = mountComponent(param);
    expect(wrapper.exists()).toBeTruthy();
  });
  test('changeDialog method should work successfully', () => {
    const param = {
      ...propsParams,
    };
    const wrapper = mountComponent(param);
    wrapper.vm.changeDialog(true);
    expect(wrapper.vm.dialogStatus).toBeTruthy();
  });
  test('clearAll method should work successfully', async () => {
    const param = {
      ...propsParams,
    };
    const wrapper = mountComponent(param);
    wrapper.vm.clearAll();
    await wrapper.vm.$nextTick();
    const emittedVal = wrapper.emitted(['clearSignal'][0]);
    const emittedRealVal = emittedVal[0][0];
    expect(emittedRealVal).toBeTruthy();
  });
  test('createModel method should work successfully', async () => {
    const param = {
      ...propsParams,
    };
    const wrapper = mountComponent(param);
    wrapper.vm.createModel();
    await wrapper.vm.$nextTick();
    const emittedVal = wrapper.emitted(['clearSignal'][0]);
    const emittedRealVal = emittedVal[0][0];
    expect(emittedRealVal).toBeTruthy();
  });
});
