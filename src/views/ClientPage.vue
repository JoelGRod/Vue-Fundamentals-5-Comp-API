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
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { watch } from "vue";
import useClient from "../composables/useClient"

export default {

    setup() {
        const route = useRoute()

        const { 
            client, 
            isLoading, 
            errorMsg,
            searchClient 
        } = useClient( route.params.id )

        watch(
            () => route.params.id,
            ( value, prevValue ) => {
                searchClient( route.params.id )
            }
        )

        onBeforeRouteLeave(() => {
            const answer = window.confirm('Are you sure you want to leave?')
            if( !answer ) return false
        })

        return {
            client,
            isLoading,
            errorMsg
        }
    }

}
</script>