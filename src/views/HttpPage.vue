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
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const users = ref([])
    const isLoading = ref(true)
    const currentPage = ref(1)
    const errorMsg = ref()

    const getUsers = async (page = 1) => {
      if (page <= 0) page = 1
      isLoading.value = true
      const { data } = await axios.get("https://reqres.in/api/users", {
        params: { page },
      });

      if (data.data.length > 0) {
        users.value = data.data
        currentPage.value = page
        errorMsg.value = null
      } else if (currentPage.value > 0) {
        errorMsg.value = "No users available"
      }

      isLoading.value = false
    }

    getUsers()

    return {
        users,
        isLoading,
        currentPage,
        errorMsg,

        nextPage: () => getUsers( currentPage.value + 1 ),
        prevPage: () => getUsers( currentPage.value - 1 )

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