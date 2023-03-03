<template >
    <h1 v-if="!pokemon && !errorMsg">Buscando...</h1>
    <h1 v-else-if="errorMsg">{{ errorMsg }}</h1>
    <template v-else>
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.sprites.front_default" alt="{{ pokemon.name }}">
        <br>
        <router-link :to="{name:'pokemon-search'}">Regresar</router-link>
    </template>
</template>

<script>
import {watch} from 'vue'
import { useRoute, onBeforeRouteLeave } from "vue-router";
import usePokemon from "@/composables/usePokemon";
export default {

    setup(){

        const route = useRoute()

       // console.log(route.params);

       const {errorMsg,isLoading,pokemon,searchPokemon} = usePokemon(route.params.id)

       watch(
            () => route.params.id,() =>{
                searchPokemon(route.params.id)
            }
       )

       //hook de ciclo de vida del router
        onBeforeRouteLeave(() =>{

            const answer = window.confirm('¿Está seguro que quiere salir?')

            if(!answer) return false //el false bloquea la salida
        })

       return{
        errorMsg,
        isLoading,
        pokemon
       }

    }
}
</script>
