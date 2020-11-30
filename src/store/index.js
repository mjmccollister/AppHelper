import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    botApplications: [
      {
        "name": "Payroll Calendar",
        "id": "001",
        "configurations": [
          "Monthly",
          "Bi-Weekly",
          "Weekly"
        ]
      },
      {
        "name": "Internal Transfers - US",
        "id": "002",
        "configurations": [
          "Exempt Job Roles",
          "Static List"
        ]
      },
      {
        "name": "Internal Transfers - India",
        "id": "003",
        "configurations": [
          "Exempt Job Roles",
          "Static List"
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getBotApplicationList: state => {
      return state.botApplications

    }
  }
})
