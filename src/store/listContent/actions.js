import axios from 'axios';
import "../../axios.js";

export default {
    async addProduct(context, data) {
        await axios.post('list_content/add', {
            product_list_id: data.product_list_id,
            product_id: data.product_id
        })
        .then(res => context.commit('addProduct',res.data))
        .catch(err => context.commit('addProduct',err.status))
    },
    async getBasket(context,data) {
        await axios.get('/list_content/' + data)
        .then(res => context.commit('getBasket',res.data))
        .catch(err => console.log(err))
    },
}