<template>
    <h1>Buscar pokemon:{{ pokeId }}</h1>
        
    <form @submit.prevent="onSubmit">
        <input 
        type="number" 
        v-model="pokeId"
        placeholder="Numero del pokemon"
        ref="txtSearchId">
    </form>
    <br>
    <span>Presione enter para buscar</span>
</template>

<script>
import {ref, onActivated} from 'vue'
import { useRouter } from "vue-router";
export default {
    
    setup(){

        const router = useRouter()


        const pokeId = ref(1)

        const txtSearchId = ref()

        //en este caso se usa onActivated en lugar de onMount porque el componente no se destruye
        //gracias al keep-alive en el router-view
        onActivated(() =>{
            txtSearchId.value.select()
        })
        return{
            pokeId, txtSearchId,

            onSubmit:() =>{
                //console.log('pokemon a buscar: ',pokeId);
                router.push({name:'pokemon-id',params:{id:pokeId.value}})
            }
        }
    }
}
</script>