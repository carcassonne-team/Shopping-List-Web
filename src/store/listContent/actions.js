import axios from 'axios';
import "../../axios.js";

export default {
    async addProductToList(context, data) {
        await axios.post('list_content/add', {
            product_list_id: data.product_list_id,
            product_id: data.product_id
        })
        .then(res => context.commit('addProductToList',res.data))
        .catch(err => context.commit('addProductToList',err.status))
    },
    async getProductOnList(context,data) {
        await axios.get('/list_content/' + data)
        .then((res) => context.commit('getProductOnList',res.data))
        .catch(err => console.log(err))
    },
    async deleteProductFromList(context,id) {
        await axios.delete('/list_content/' + id)
        .then(() => context.commit('deleteProductFromList',id))
        .catch(err => console.log(err))
    },
}