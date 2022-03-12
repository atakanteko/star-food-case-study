import menu from '../assets/model/menu.json';

export const state = () => ({
  navigationDrawerStatus: true,
  meals: menu,
  selectedOrderedMeals: [],
  totalCost: 0,
});

export const getters = {
  getNavigationDrawerStatus: state => state.navigationDrawerStatus,
  getMenuList: state => state.meals,
  getSelectedOrderedMeals: state => state.selectedOrderedMeals,
  getTotalCost: state => state.totalCost,
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
          cost: Number(parseInt(item.price, 10).toFixed(2)),
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
    if (processType) {
      orderItems.forEach(i => {
        if (i.id === id) {
          i.quantity++;
          console.log(typeof i.cost);
          i.cost += Number(parseInt(i.price, 10).toFixed(2));
        }
      });
    } else {
      orderItems.forEach(i => {
        if (i.id === id) {
          i.quantity--;
          if (i.cost !== 0) {
            i.cost -= Number(parseInt(i.price, 10).toFixed(2));
          }
        }
      });
    }
    state.selectedOrderedMeals = orderItems;
  },
};
