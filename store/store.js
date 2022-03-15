import menu from '../assets/model/menu.json';

export const state = () => ({
  navigationDrawerStatus: true,
  meals: menu,
  selectedOrderedMeals: [],
  totalCost: 0,
  listModel: [],
  isNameFieldDirty: false,
  isClientMessageFieldDirty: false,
  isSelectedOrdersFieldDirty: false,
});

export const getters = {
  getNavigationDrawerStatus: state => state.navigationDrawerStatus,
  getMenuList: state => state.meals,
  getSelectedOrderedMeals: state => state.selectedOrderedMeals,
  getTotalCost: state => state.totalCost,
  getListModel: state => state.listModel,
  getNameFieldDirty: state => state.isNameFieldDirty,
  getClientMessageFieldDirty: state => state.isClientMessageFieldDirty,
  getSelectedOrdersFieldDirty: state => state.isSelectedOrdersFieldDirty,
};

export const actions = {
  removeItem: async (context, id) => {
    context.commit('REMOVE_SELECTED_MEAL', id);
  },
  markSelectedMealsAsDirty: async (context, status) => {
    context.commit('MARK_SELECTED_ORDERS_AS_DIRTY', status);
  },
  markNameFieldAsDirty: async (context, status) => {
    context.commit('MARK_NAME_FIELD_AS_DIRTY', status);
  },
  markClientMessageFieldAsDirty: async (context, status) => {
    context.commit('MARK_CLIENT_FIELD_AS_DIRTY', status);
  },
  listModelAction: async (context, model) => {
    context.commit('LIST_MODEL', model);
  },
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
  clearAll: context => {
    const cleanArr = [];
    context.commit('CLEAR', cleanArr);
  },
};

export const mutations = {
  REMOVE_SELECTED_MEAL(state, id) {
    state.selectedOrderedMeals = state.selectedOrderedMeals.filter(item => item.id !== id);
  },
  MARK_SELECTED_ORDERS_AS_DIRTY(state, payload) {
    state.isSelectedOrdersFieldDirty = payload;
  },
  MARK_NAME_FIELD_AS_DIRTY(state, payload) {
    state.isNameFieldDirty = payload;
  },
  MARK_CLIENT_FIELD_AS_DIRTY(state, payload) {
    state.isClientMessageFieldDirty = payload;
  },
  LIST_MODEL(state, payload) {
    state.listModel.push(payload);
  },
  TOGGLE_NAV_DRAWER_STATUS(state, status) {
    state.navigationDrawerStatus = status;
  },
  PUSH_SELECTED_MEALS(state, selectedMealsArr) {
    state.selectedOrderedMeals = selectedMealsArr;
  },
  CLEAR(state, cleanArr) {
    state.selectedOrderedMeals = cleanArr;
  },
  QUANTITY_PROCESS(state, { orderItems, processType, id }) {
    if (processType) {
      orderItems.forEach(i => {
        if (i.id === id) {
          i.quantity++;
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
