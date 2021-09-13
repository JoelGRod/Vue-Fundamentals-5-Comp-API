<template>
  <h1>HTTP Requests</h1>
  <h2 v-if="isLoading" >Please Wait...</h2>
  <h3 v-else>Users</h3>
  <h5 v-if="errorMsg" >{{ errorMsg }}</h5>

  <div v-if="users.length > 0">
    <ul>
      <li v-for="{ first_name, last_name, email, id } in users" :key="id">
        <h4>{{ first_name }}, {{ last_name }}</h4>
        <h6>{{ email }}</h6>
      </li>
    </ul>
  </div>

  <button @click="prevPage">Before</button>
  <button @click="nextPage">Next</button>
  <span>Page: {{ currentPage }}</span>
</template>

<script>
import useUsers from "../composables/useUsers"

export default {
  setup() {
    const { 
      isLoading, 
      errorMsg, 
      users, 
      currentPage, 
      nextPage, 
      prevPage } = useUsers()
    
    return {
      isLoading, 
      errorMsg, 
      users, 
      currentPage, 
      nextPage, 
      prevPage
    }
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  width: 250px;
  list-style-type: none;
}
</style>