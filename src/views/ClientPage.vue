<template>
  <h1 v-if="!client && !errorMsg">Searching...</h1>
  <h1 v-else-if="errorMsg"> {{ errorMsg }} </h1>

  <template v-else>
      <h3> {{ client.first_name }} {{ client.last_name }} </h3>
      <img :src="client.avatar" :alt="client.first_name">
      <br>
      <router-link :to="{ name: 'SearchClient' }">Return</router-link>

  </template>
</template>

<script>
import { useRoute } from 'vue-router'
import useClient from "../composables/useClient"

export default {

    setup() {
        const route = useRoute()

        const { 
            client, 
            isLoading, 
            errorMsg 
        } = useClient( route.params.id )

        return {
            client,
            isLoading,
            errorMsg
        }
    }

}
</script>