import menu from '../assets/model/menu.json';

export const state = () => ({
  navigationDrawerStatus: true,
  meals: menu,
});

export const getters = {
  getNavigationDrawerStatus: state => state.navigationDrawerStatus,
  getMenuList: state => state.meals,
};

export const actions = {
  toggleNavigationDrawer: async (context, status) => {
    context.commit('TOGGLE_NAV_DRAWER_STATUS', status);
  },
};

export const mutations = {
  TOGGLE_NAV_DRAWER_STATUS(state, status) {
    state.navigationDrawerStatus = status;
  },
};
