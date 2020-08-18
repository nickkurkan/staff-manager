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
  mutations: {},
  actions: {},
  modules: {},
});
