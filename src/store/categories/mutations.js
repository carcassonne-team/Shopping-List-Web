export default {
    getCategories(state,data) {
        state.categories = data;
    },
    createCategory(__state,data) {
        console.log(data);
    }
}