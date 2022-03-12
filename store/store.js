import menu from '../assets/model/menu.json';

export const state = () => ({
  navigationDrawerStatus: true,
  meals: menu,
  selectedOrderedMeals: [],
});

export const getters = {
  getNavigationDrawerStatus: state => state.navigationDrawerStatus,
  getMenuList: state => state.meals,
  getSelectedOrderedMeals: state => state.selectedOrderedMeals,
};

export const actions = {
  toggleNavigationDrawer: async (context, status) => {
    context.commit('TOGGLE_NAV_DRAWER_STATUS', status);
  },
  calculateSelectedOrderedMeals: async (context, meals) => {
    const temp = [];
    context.getters.getMenuList.list.forEach(item => {
      if (meals.some(x => x === item.name)) {
        const i = {
          ...item,
          quantity: 1,
          cost: 0,
        };
        temp.push(i);
      }
    });
    context.commit('PUSH_SELECTED_MEALS', temp);
  },
  quantityProcess: async (context, { processType, id }) => {
    const orderItems = context.getters.getSelectedOrderedMeals;
    context.commit('QUANTITY_PROCESS', { orderItems, processType, id });
  },
};

export const mutations = {
  TOGGLE_NAV_DRAWER_STATUS(state, status) {
    state.navigationDrawerStatus = status;
  },
  PUSH_SELECTED_MEALS(state, selectedMealsArr) {
    state.selectedOrderedMeals = selectedMealsArr;
  },
  QUANTITY_PROCESS(state, { orderItems, processType, id }) {
    console.log('id', id);
    console.log(orderItems);
    if (processType) {
      console.log('2');
      orderItems.forEach(i => {
        console.log('i', i);
        if (i.id === id) {
          console.log('243');
          i.quantity++;
        }
      });
    } else {
      console.log('4');
      orderItems.forEach(i => {
        if (i.id === id) {
          console.log('243c');
          i.quantity--;
        }
      });
    }
    console.log(orderItems);
  },
};
