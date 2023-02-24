<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h1>¿Quíen es este pokémon</h1>

        <poke-img 
        :pokeId="pokemon.id" 
        :showPokemon="showPokemon"/>

        <poke-opts 
        :options="pokemonArr"
        @selection="checkAnswer"/>

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                Nuevo Juego
            </button>
        </template>
        
    </div>
   
</template>
<script>
import PokeImg from '@/components/PokemonImage.vue'
import PokeOpts from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components:{
        PokeImg,
        PokeOpts
    },
    data(){
        return{
            pokemonArr:[],
            pokemon:null,
            showPokemon:false,
            showAnswer:false,
            message:''
        }
    },
    methods: {
        async mixPokemonArray(){

            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[rndInt]
        },

        checkAnswer(selectedId){
            this.showPokemon = true
            this.showAnswer = true
            if(selectedId === this.pokemon.id){
                this.message = `Correcto, era ${this.pokemon.name}`
            }else{
                this.message = `Oops!... era ${this.pokemon.name}`
            }
        },
        newGame(){
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixPokemonArray()
        }
    },
    mounted(){
        this.mixPokemonArray()
    }
}
</script>
<style>
    
</style>