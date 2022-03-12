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
        };
        temp.push(i);
      }
    });
    context.commit('PUSH_SELECTED_MEALS', temp);
  },
};

export const mutations = {
  TOGGLE_NAV_DRAWER_STATUS(state, status) {
    state.navigationDrawerStatus = status;
  },
  PUSH_SELECTED_MEALS(state, selectedMealsArr) {
    state.selectedOrderedMeals = selectedMealsArr;
  },
};
