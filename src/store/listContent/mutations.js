export default {
  addProductToList(state, data) {
      console.log(data);
      state.productStatus = data.message;
      state.basket += data;
    },
    getProductOnList(state, data) {
      state.basket = data;
    },
    deleteProductFromList(state, data){
      state.basket.splice(data,1);
    }
};