<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIronman">Change IronMan</button>
    <button @click="changeHulk">Change Hulk</button>

    <h3>Ironman: {{ ironmanIsAlive }}</h3>
    <h3>Hulk: {{ hulkIsAlive }}</h3>

    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'Home',
  
  setup() {
    const ironman = ref({name: 'Tony', age: 50})      // Ref works with all kind of data
    const hulk = reactive({name: 'Bruce', age: 45})   // Reactive only works with objects

    const ironmanIsAlive = ref(false)
    const hulkIsAlive = reactive(true)

    const changeStatus = () => {
      ironmanIsAlive.value = !ironmanIsAlive.value
      // hulkIsAlive = !hulkIsAlive // Not Work
    }

    return {
      // Public data
      ironman, 
      hulk,

      ironmanIsAlive,
      hulkIsAlive,
      // Methods
      changeIronman: () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 55
      },
      changeHulk: () => {
        hulk.name = 'Bruce Banner'
        hulk.age = 50
      },
      changeStatus
    }
  }
}
</script>
