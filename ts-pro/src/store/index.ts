import { createStore } from 'vuex'


export interface State {
  username:string,
  count:number,
  token: string
}

export default createStore<State>({
  state: {
    username: 'ming',
    count: 1,
    token: JSON.stringify(localStorage.getItem('token')) || ''
  },
  getters: {
  },
  mutations: {
    setName(state: State, payload: string): void {
      state.username = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
