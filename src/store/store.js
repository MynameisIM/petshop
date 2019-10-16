import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: {

    }
  },
  mutations: {
    'SET_STORE' (state, products) {
      state.products = products;
    }
  },
  actions: {
    initStore: ({commit}) => {
      axios.get('static/products.json')
      .then((response) => {
        console.log(response.data.products);
        commit('SET_STORE', response.data.products)
      });
    }
  },
  getters: {
    products: state => state.products
  }
});