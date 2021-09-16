import { computed, ref } from "vue"
import { useStore } from "vuex"

const useTodo = () => {

    const store = useStore()
    
    const currentTab = ref('all')

    return {
      // Properties
      currentTab,
      // Methods
      toggleTodo: ( id ) => store.commit('toggleTodo', id),
      createTodo: ( text ) => store.commit('createTodo', text), 
      // Getters
      getPending: computed(() => store.getters['getPendingTodos']),
      // getAll: computed(() => store.getters['getAllTodos']),
      // getCompleted: computed(() => store.getters['getCompletedTodos']),
      getTodos: computed(() => store.getters['getTodosByTab'](currentTab.value))
    }

}

export default useTodo