<template>
  <h1>Things to do</h1>
  <h4>Pending Tasks: {{ getPending.length }}</h4>

  <hr />
  <button 
    :class="{ active: currentTab === 'all' }" 
    @click="currentTab = 'all'">
    Todos
  </button>
  <button
    :class="{ active: currentTab === 'pending' }"
    @click="currentTab = 'pending'">
    Pending
  </button>
  <button
    :class="{ active: currentTab === 'completed' }"
    @click="currentTab = 'completed'">
    Completed
  </button>

  <button @click="openModal">Create Todo</button>
  <Modal v-if="isOpen" @on:close="closeModal">
    <template v-slot:header>
      <h2>Create New Todo</h2>
    </template>
    <template v-slot:body>
      <form
        @submit.prevent="
          createTodo(inputText);
          closeModal()">
        <input type="text" placeholder="New Todo" v-model="inputText" />
        <button type="submit">Create</button>
      </form>
    </template>
  </Modal>

  <div class="list-container">
    <ul class="todo-list">
      <li
        class="list-item"
        :class="{ completed: todo.completed }"
        v-for="todo in getTodos"
        :key="todo.id"
        @dblclick="toggleTodo(todo.id)">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import useTodo from "../composables/useTodo";
import useModal from "../composables/useModal";
import Modal from "../components/Modal";

export default {
  components: { Modal },

  setup() {
    const {
      // Properties
      currentTab,
      // Methods
      toggleTodo,
      createTodo,
      // Getters
      getPending,
      getTodos,
    } = useTodo();

    const {
      // Properties
      isOpen,
      inputText,
      // Methods
      openModal,
      closeModal,
    } = useModal();

    return {
      // useTodo
      // Properties
      currentTab,
      // Methods
      toggleTodo,
      createTodo,
      // Getters
      getPending,
      getTodos,

      // useModal
      // Properties
      isOpen,
      inputText,
      // Methods
      openModal,
      closeModal,
    };
  },
};
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