import { ref } from "vue"

const useCounter = ( initValue = 1 ) => {

    const counter = ref( initValue );

    return {
      // Public Data
      counter,
      // Public Methods
      decrease: () => counter.value--,
      increase: () => counter.value++,
    }
}

export default useCounter