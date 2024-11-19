import { createStore } from 'vuex';

const store = createStore({
  modules: {
    auth: {
      namespaced: true,
      state: {
        token: localStorage.getItem('token') || null,
        user: null,
      },
      mutations: {
        setToken(state, token) {
          state.token = token;
          localStorage.setItem('token', token);
        },
        clearToken(state) {
          state.token = null;
          localStorage.removeItem('token');
        },
        setUser(state, user) {
          state.user = user;
        },
      },
      actions: {
        login({ commit }, token) {
          commit('setToken', token);
        },
        logout({ commit }) {
          commit('clearToken');
        },
        setUser({ commit }, user) {
          commit('setUser', user);
        },
      },
      getters: {
        isAuthenticated: (state) => !!state.token,
        user: (state) => state.user,
      },
    },
  },
});

export default store;
