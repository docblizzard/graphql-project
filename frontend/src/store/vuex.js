import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false,
    token: null,
  },
  mutations: {
    setAuthentication(state, { isAuthenticated, token }) {
      state.isAuthenticated = isAuthenticated;
      state.token = token;
    },
  },
  actions: {
    login({ commit }, { token }) {
      commit('setAuthentication', { isAuthenticated: true, token });
      localStorage.setItem('user', token)
    },
    logout({ commit }) {
      commit('setAuthentication', { isAuthenticated: false, token: null });
      localStorage.removeItem('user')

    },
  },
});