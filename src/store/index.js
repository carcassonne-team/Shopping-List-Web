import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import Auth from './auth/auth.js';
import Lists from './list/list.js';
import Categories from './categories/categories.js';
import Products from './products/products.js';
import Basket from './basket/basket.js';

export default createStore({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  modules: {
    auth: Auth,
    lists: Lists,
    categories: Categories,
    products: Products,
    basket: Basket,
  },
})