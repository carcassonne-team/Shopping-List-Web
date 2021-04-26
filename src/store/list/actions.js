import axios from 'axios';
// import router from '../../router/index';
import "../../axios.js";


export default {
    async listCreate(context,data){
        await axios.post('lists/create',{name: data})
        .then(res => {
            context.commit('listCreate', res.data);            
        })
        .catch(err => {
            console.log(err);
        })
    },
    async getLists(context){
        await axios.get('lists')
        .then((res) => {
            context.commit('getLists', res.data);            
        })
        .catch(err => {
            console.log(err);
        })
    },
    async deleteList(context,id){
        await axios.delete('lists/' + id)
        .then(() => {
            context.commit('deleteList', id);             
        })
        .catch(err => {
            console.log(err);
        })
    }
}