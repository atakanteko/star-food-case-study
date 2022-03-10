export const state = () => ({
  navigationDrawerStatus: true,
});

export const getters = {
  getNavigationDrawerStatus: state => state.navigationDrawerStatus,
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
