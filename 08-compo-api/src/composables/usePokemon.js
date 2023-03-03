import {ref} from 'vue'
import axios from 'axios'
const usePokemon = (pokemonId = '1') => {
    const pokemon = ref()
    const isLoading = ref(false)
    const errorMsg = ref()

    const searchPokemon = async (id) =>{

        if(!id) return

        isLoading.value = true
        pokemon.value = null

        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            pokemon.value = data
            errorMsg.value = null
            //console.log(data);
        } catch (error) {
            errorMsg.value = 'no se pudo cargar el pokemon'
        }

        isLoading.value = false
    }

    searchPokemon(pokemonId)

    return{
        pokemon, 
        isLoading, 
        errorMsg,
        searchPokemon 
    }
}

export default usePokemon