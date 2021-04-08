import { createStore } from 'vuex';
import axios from 'axios';
import router from '../router/index';

export default createStore({
  state: {
    status: '',
    token: '',
    user: {},
    errors: '',
  },
  getters: {
    getToken: state => state.token,
    authStatus: state => state.status,
    errors: state => state.errors,
  },
  mutations: {
    login(state, data) {
      state.token = data.token;
      state.user = data;
      localStorage.setItem('token', data.token);
      console.log(data.token);
    },
    register(state, token){
      console.log(state,token);
    },
    logout(state){
      state.token = '';
    },
    errors(state, context){
      state.errors = context;
    }
  },
  actions: {
    async login(context, user) {
      await axios.post('http://projekcik.ddns.net:8080/api/auth/login', {
          email: user.email,
          password: user.password,
          persistent: true
        })
        .then(response => {
          context.commit('login',response.data);
          router.push('/');
        })
        .catch(error => {
          console.log(error.response)
          context.commit('errors',error.response.data.error);
        });
    },
    async register(context, user){
      await axios.post('http://projekcik.ddns.net:8080/api/auth/register', {
          name: user.name,
          email: user.email,
          password: user.password,
          password_confirmation: user.password_confirmation
        })
        .then(response => {
          context.commit('register',response);
          router.push('/login');
        })
        .catch(error => {
          console.log(error.response);
          context.commit('errors',error.response.data);
        });
    },
    logout(context){
      localStorage.removeItem('token');
      context.commit('logout');
    }
  },
  modules: {}
})