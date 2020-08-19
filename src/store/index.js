import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    staff: [
      {
        name: 'Nick Fury',
        position: 'CEO',
        email: 'nickfury@mail.com',
        phone: '+380 63 123 45 67',
      },
      {
        name: 'James Bond',
        position: 'CTO',
        email: 'jamesbond@mail.com',
        phone: '+380 63 123 45 67',
      },
      {
        name: 'Luke Skywalker',
        position: 'CCO',
        email: 'lukeskywalker@mail.com',
        phone: '+380 63 123 45 67',
      },
    ],
  },
  mutations: {
    addEmployee(state, employee) {
      state.staff.push({
        name: employee.name,
        position: employee.position,
        email: employee.email,
        phone: employee.phone
      })
    },
    deleteEmployee(state, id) {
      state.staff.splice(id, 1)
    }
  },
  actions: {
    addEmployee({commit}, employee) {
      commit('addEmployee', employee)
    },
    deleteEmployee({commit}, id) {
      commit('deleteEmployee', id)
    }
  },
  modules: {},
});
