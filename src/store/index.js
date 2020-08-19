import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    staff: [
      {
        name: 'Nick Fury',
        position: 'Cheaf',
        email: 'nickfury@mail.com',
        phone: '+380631234567',
      },
      {
        name: 'James Bond',
        position: 'Cheaf',
        email: 'jamesbond@mail.com',
        phone: '+380631234567',
      },
      {
        name: 'Luke Skywalker',
        position: 'Cheaf',
        email: 'lukeskywalker@mail.com',
        phone: '+380631234567',
      },
    ],
    formMode: true,
    edEmp: {
      name: '',
      position: '',
      email: '',
      phone: '',
    },
    edEmpId: '',
  },
  mutations: {
    addEmployee(state, employee) {
      state.staff.push({
        name: employee.name,
        position: employee.position,
        email: employee.email,
        phone: employee.phone,
      });
    },
    deleteEmployee(state, id) {
      state.staff.splice(id, 1);
    },
    editEmployee(state, employee) {
      state.staff[state.edEmpId].name = employee.name;
      state.staff[state.edEmpId].position = employee.position;
      state.staff[state.edEmpId].email = employee.email;
      state.staff[state.edEmpId].phone = employee.phone;
    },
    editMode(state, { id, employee }) {
      state.formMode = false;
      state.edEmpId = id;
      state.edEmp = employee;
    },
    addMode(state) {
      state.formMode = true;
    }
  },
  actions: {
    addEmployee({ commit }, employee) {
      commit('addEmployee', employee);
    },
    deleteEmployee({ commit }, id) {
      commit('deleteEmployee', id);
    },
    editEmployee({ commit }, employee) {
      commit('editEmployee', employee);
    },
    editMode({ commit }, { id, employee }) {
      commit('editMode', { id, employee });
    },
    addMode({commit}) {
      commit('addMode')
    }
  },
  modules: {},
});
