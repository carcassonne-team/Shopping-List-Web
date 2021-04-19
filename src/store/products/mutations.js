export default {
    products(state, context) {
      state.products = context;
    },
    getProduct(state,context){
        state.product = context;
    },
    createProduct(state,context){
      console.log(state,context);
    }
}