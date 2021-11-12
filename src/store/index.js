import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    loggedIn: false
  },
  actions: {
    doLogin({ commit }) {
      commit("login");
    },
    doLogout({ commit }) {
      commit("logout");
    }
  },
  mutations: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    }
  }
});

export default store;
