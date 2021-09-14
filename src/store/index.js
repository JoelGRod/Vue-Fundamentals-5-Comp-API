import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'prepare the food', completed: false },
      { id: '2', text: 'to do physical exercise', completed: true },
      { id: '3', text: 'Go shopping', completed: true },
      { id: '4', text: 'study vue', completed: false },
      { id: '5', text: 'sleep the baby', completed: false },
    ]
  },
  getters: {
    getPendingTodos( state, getters, rootState ) {
      return state.todos.filter( task => !task.completed )
    },
    getAllTodos( state, getters, rootState ) {
      return state.todos
    },
    getCompletedTodos( state, getters, rootState ) {
      return state.todos.filter( task => task.completed )
    },
    getTodosByTab( state, getters, rootState ) {
      return ( tab ) => {
        const options = {
          'all': getters.getAllTodos,
          'pending': getters.getPendingTodos,
          'completed': getters.getCompletedTodos
        }
        return options[tab]
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
