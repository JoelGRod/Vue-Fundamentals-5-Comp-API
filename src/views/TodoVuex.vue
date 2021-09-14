<template>
  <h1>Things to do</h1>
  <h4>Pending Tasks: {{ getPending.length }}</h4>

  <hr>
  <button  
    :class="{'active': currentTab === 'all' }"
    @click="currentTab = 'all'">
    Todos
  </button>
  <button  
    :class="{'active': currentTab === 'pending' }"
    @click="currentTab = 'pending'">
    Pending
  </button>
  <button  
    :class="{'active': currentTab === 'completed' }"
    @click="currentTab = 'completed'">
    Completed
  </button>

  <div class="list-container">
    <ul class="todo-list">
      <li 
        class="list-item" 
        :class="{ 'completed': todo.completed }" 
        v-for="todo in getTodos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "vue"
import { useStore } from "vuex"

export default {

  setup() {
    const store = useStore()

    const currentTab = ref('all')

    return {
      currentTab,

      getPending: computed(() => store.getters['getPendingTodos']),
      getAll: computed(() => store.getters['getAllTodos']),
      getCompleted: computed(() => store.getters['getCompletedTodos']),
      getTodos: computed(() => store.getters['getTodosByTab'](currentTab.value))
    }
  }

}
</script>

<style scoped>
.list-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.todo-list {
  list-style-type: none;
  text-align: left;
}
.list-item {
  cursor: pointer;
}
.active {
  background-color: #2c3e50;
  color: white;
}
.completed {
  text-decoration: line-through;
}

</style>