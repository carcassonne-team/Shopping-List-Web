export default {
    addProduct(state, data) {
      console.log(data);
      state.productStatus = data.message;
      state.basket += data;
    },
    getBasket(state, data) {
      state.basket = data;
    },
    deleteProduct(state, data){
      state.basket.splice(data,1);
    }
};