export default {
    listCreate(state, data) {
      console.log(data);
      console.log(state.lists);
    },
    getLists(state,context){
      state.lists = context;
    }
}