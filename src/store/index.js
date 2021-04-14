import { createStore } from 'vuex';
import axios from 'axios';
import router from '../router/index';
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],

  state: {
    status: '',
    token: '',
    user: {},
    errors: '',
    login: false,
  },
  getters: {
    getToken: state => state.token,
    authStatus: state => state.status,
    errors: state => state.errors,
    login: state => state.login,
  },
  mutations: {
    login(state, data) {
      state.token = data.token;
      state.user = data;
      state.login = true;
      localStorage.setItem('token', data.token);
      console.log(data.token);
    },
    register(state, token){
      console.log(state,token);
    },
    logout(state){
      state.token = '';
      state.login = false;
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
          window.sessionStorage.setItem('error',error.response.data.error)
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
          window.sessionStorage.setItem('error',error.response.data.error)
        });
    },
    logout(context){
      localStorage.removeItem('token');
      context.commit('logout');
    },
    errors(context){
      context.commit('errors','');
    }
  },
  modules: {}
})