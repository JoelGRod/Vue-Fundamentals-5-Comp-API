<template>
  <h1>HTTP Requests</h1>
  <h2 v-if="isLoading">Please Wait...</h2>
  <h3 v-else>Users</h3>
  <h5 v-if="errorMsg">{{ errorMsg }}</h5>

  <div v-if="users.length > 0">
    <UserListComponent 
      :users="users"
      v-slot="{ user }">

        <h4> {{ user.first_name }} {{ user.last_name }} </h4>
        <h6> {{ user.email }} </h6>
    </UserListComponent>
  </div>

  <button @click="prevPage">Before</button>
  <button @click="nextPage">Next</button>
  <span>Page: {{ currentPage }}</span>
</template>

<script>
import useUsers from "../composables/useUsers";
import UserListComponent from "../components/UserListComponent";

export default {
  components: {
    UserListComponent,
  },

  setup() {
    const { isLoading, errorMsg, users, currentPage, nextPage, prevPage } =
      useUsers();

    return {
      isLoading,
      errorMsg,
      users,
      currentPage,
      nextPage,
      prevPage,
    };
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