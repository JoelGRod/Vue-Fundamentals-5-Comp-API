<template>
  <div id="nav">
    <router-link to="/">Reactive vs Ref</router-link> |
    <router-link :to="{ name: 'Counter' }">Counter</router-link> |
    <router-link :to="{ name: 'Http' }">Http Requests</router-link> |
    <router-link :to="{ name: 'SearchClient' }">Search Client</router-link> |
    <router-link :to="{ name: 'TodoList' }">To Do List</router-link> |
    <router-link to="/about">Lifecycle Hooks</router-link>
  </div>

  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.name" />
    </keep-alive>
  </router-view>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
