<template>
    <h1>
        Pokemon page <span v-if="pokemon">#{{ id }}</span> 
    </h1>
    <img v-if="pokemon" :src="pokemon.sprites.front_default" :alt="pokemon.name">
</template>

<script>
    export default {
        props:{
            id:{
                type:Number,
                required:true
            }
        },
        data(){
            return{
               pokemon:null
            }
        },       
        created(){
            //se recomienda que las peticiones sean llamadas en created
            this.getPokemon()
        },

        methods:{

            async getPokemon(){

                try {
                    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
                    .then(r => r.json()) 
                    console.log(pokemon);
                    this.pokemon = pokemon  
                } catch (error) {
                    this.$router.push('/') //metodo brindado por router
                    console.log('no hay nada que hacer aqui'); 
                }
               
            }
        },

        watch:{
            id(){
                this.getPokemon()
            }
        }
    }
</script>

<style scoped>
    
</style>