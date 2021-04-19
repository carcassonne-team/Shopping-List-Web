export default {
    addProduct(state, data) {
      console.log(state,data);
    },
    getBasket(state, data) {
      state.basket = data;
    }
};