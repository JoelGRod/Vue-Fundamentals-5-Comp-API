import { ref } from "vue"
import axios from "axios";

const useClient = ( clientId = '1' ) => {
    const client = ref()
    const isLoading = ref(false)
    const errorMsg = ref()

    const searchClient = async ( clientId ) => {

        if( !clientId ) return

        isLoading.value = true
        client.value = null

        try {
            const { data } = await axios.get(
                `https://reqres.in/api/users/${ clientId }`
            );

            client.value = data.data
            errorMsg.value = null
        } catch (error) {
            errorMsg.value = 'No Client found'
        }

        isLoading.value = false
    }

    searchClient(clientId)

    return {
        client,
        isLoading,
        errorMsg,
        // Public methods
        searchClient
    }
}

export default useClient