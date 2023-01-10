import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    UPDATE_CART(state, newCart) {
      state.cart = newCart; // here newCart is new updated array
    },
  },

  actions: {
    addProductToCart(context, productDetails) {
      const cart = context.state.cart;
      cart.push(productDetails);
      context.commit("UPDATE_CART", cart); // here cart has been updated
    },
  },
});

export default store;
