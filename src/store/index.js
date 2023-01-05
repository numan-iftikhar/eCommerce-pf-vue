import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    UPDATE_CART(state) {
      state.cart.push("payload");
    },
  },
});

export default store;
