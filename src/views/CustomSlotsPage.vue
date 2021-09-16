<template>
  <h1>Learning Slots</h1>
  <button @click="openModal">Open modal</button>

  <Modal v-if="isOpen" @on:close="closeModal" title="one Prop" anotherTitle="another prop">
    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </template>
    <template v-slot:footer>
      <button @click="closeModal">Exit</button>
    </template>
    <template v-slot:header>
      <h2>Modal Title</h2>
    </template>

    <!-- Scoped Slots -->
    <template v-slot:exposed="{ newTitle }">
      <h2>{{ newTitle }}</h2>
    </template>

    <!-- <h2>Modal Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>Exit</button> -->
  </Modal>
</template>

<script>
import { ref } from "@vue/reactivity";
import Modal from "../components/Modal";

export default {
  components: { Modal },

  setup() {
    const isOpen = ref(false);

    return {
      // Public Properties
      isOpen,
      // Public methods
      openModal: () => (isOpen.value = true),
      closeModal: () => (isOpen.value = false),
    };
  },
};
</script>

<style scoped>
</style>