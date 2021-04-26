export default {
    listCreate(state, data) {
      state.lists += data;
    },
    getLists(state,context){
      state.lists = context;
    },
    deleteList(state,id){
      state.lists.splice(id,1);
    }
}