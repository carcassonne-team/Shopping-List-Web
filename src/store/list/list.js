import createPersistedState from 'vuex-persistedstate'
import getters from './getters.js';
import state from './state.js';
import mutations from './mutations.js';
import actions from './actions.js';

export default {
    plugins: [createPersistedState({
      storage: window.sessionStorage,
    })],
  
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
  }