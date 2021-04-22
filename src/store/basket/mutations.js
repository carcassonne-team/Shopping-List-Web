export default {
    addProduct(state, data) {
      state.productStatus = data.message;
    },
    getBasket(state, data) {
      state.basket = data;
    }
};