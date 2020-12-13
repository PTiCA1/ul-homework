import { createStore } from "vuex";

export default createStore({
  state: {
    users: [
      {
        name: "John Doe",
        phone: "+420123123123",
        nickname: "John"
      },
      {
        name: "Radek Novak",
        phone: "+42009090909",
        nickname: "John"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
