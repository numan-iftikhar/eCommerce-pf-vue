import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    UPDATE_CART(state, payload) {
      state.cart = payload; // here payload is new array
    },
  },

  actions: {
    addToCart(context, payload) {
      const cart = context.state.cart;
      cart.push(payload);
      context.commit("UPDATE_CART", cart); // here cart is updated
    },
  },
});

export default store;
