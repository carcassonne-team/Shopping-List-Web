import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import Auth from './auth/auth.js';

export default createStore({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  modules: {
    auth: Auth
  },
})