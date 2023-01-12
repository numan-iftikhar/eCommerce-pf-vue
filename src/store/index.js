import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      cart: [],
      userDetails: [],
    };
  },
  mutations: {
    UPDATE_CART(state, newCart) {
      state.cart = newCart; // here newCart is new updated array
    },
    UPDATE_USER(state, data) {
      state.userDetails = data;
    },
  },

  actions: {
    addProductToCart(context, [productDetails, qty]) {
      const cart = context.state.cart;
      for (let i = 0; i < qty; i++) cart.push(productDetails);
      context.commit("UPDATE_CART", cart); // here cart has been updated
    },
    removeProductFromCart(context, prodId) {
      const cart = context.state.cart;
      const filteredCart = cart.filter((item) => item.id !== prodId);
      context.commit("UPDATE_CART", filteredCart); // here cart has been updated
    },
    addUser(context, userData) {
      let user = context.state.userDetails;
      user.push(userData);
      context.commit("UPDATE_USER", user);
    },
  },
});

export default store;
