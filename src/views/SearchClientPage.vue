<template>
  <h1>Search Client: {{ clientNumber }}</h1>
  <form @submit.prevent="onSubmit">
      <input 
        type="number"
        placeholder="Client Number"
        v-model="clientNumber"
        ref="clientNumberHtml"
      >
  </form>
  <br>
  <span>Press Enter for search</span>
</template>

<script>
import { ref, onActivated } from "vue";
import { useRouter } from 'vue-router'

export default {

    setup() {
        const router = useRouter()
        // Data
        const clientNumber = ref(1)
        const clientNumberHtml = ref()

        onActivated(() => {
            // clientNumberHtml.value.focus()
            clientNumberHtml.value.select()
        })

        return {
            // Public Data
            clientNumber,
            clientNumberHtml,
            // Public Methods
            onSubmit: () => {
                router.push({ 
                    name: 'Client', 
                    params: { id: clientNumber.value }
                })
            }
        }
    }
}
</script>