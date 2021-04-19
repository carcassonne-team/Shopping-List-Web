import axios from 'axios';
import "../../axios.js";

export default {
    async products(context){
        await axios.get('products')
        .then(res => {
            context.commit('products', res.data);            
        })
        .catch(err => {
            console.log(err);
        })
    },
    async getProduct(context,data){
        await axios.get('products/' + data.id)
        .then(res => {
            context.commit('getProduct', res.data);            
        })
        .catch(err => {
            console.log(err);
        })
    },
    async createProduct(context,data){
        await axios.post('products/create', {
            name: data.name,
            category_id: data.category_id
        })
        .then(res => {
            context.commit('createProduct', res.data);            
        })
        .catch(err => {
            console.log(err);
        })
    },
}