import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import Dashboard from '../components/OrderList/Dashboard';

const model =
  [
    {
      orderNumber: '123123',
      timeInfo: '14/03/2022 at 12:19:18',
      name: '0537 295 8282',
      contact: 'Ata',
      radio: 'Takeaway',
      clientMessage: 'Ekstra ketçap ve mayonez istiyorum.',
      orderedItems: [{
        id: '224471', name: '3 Chicken Wings', price: '250.00', quantity: 1, cost: 250,
      }, {
        id: '224474', name: 'Chicken Livers and Portuguese Roll', price: '250.00', quantity: 1, cost: 250,
      }],
      totalCost: 500,
    },
  ];
function mountComponent() {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const getListModelMock = jest.fn();
  getListModelMock.mockReturnValue(model);

  const store = new Vuex.Store({
    getters: {
      'store/getListModel': getListModelMock,
    },

  });

  return shallowMount(Dashboard, {
    localVue,
    store,
    vuetify: new Vuetify(),
    stubs: {
      NuxtLink: true,
    },
    mocks: {
    },
  });
}

describe('Order List - Dashboard File', () => {
  test('Component should mount successfully', () => {
    const wrapper = mountComponent();
    expect(wrapper.exists()).toBeTruthy();
  });
});
