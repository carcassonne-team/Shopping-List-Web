import axios from 'axios';
// import router from '../../router/index';
import "../../axios.js";

export default {
    async getCategories(context) {
        await axios.get('categories')
        .then(res => {
            context.commit('getCategories', res.data)
        })
        .catch(err => console.log(err))
    },
    async createCategory(context,data) {
        await axios.post('categories/create', {name: data.name})
        .then(res => {
            context.commit('createCategory', res.data)
        })
        .catch(err => console.log(err))
    }
}