import { ref } from "vue";

const useModal = () => {

    const isOpen = ref(false)
    const inputText = ref('')

    return {
        // Public Properties
        isOpen,
        inputText,
        // Public methods
        openModal: () => (isOpen.value = true),
        closeModal: () => (isOpen.value = false),
    }
}

export default useModal