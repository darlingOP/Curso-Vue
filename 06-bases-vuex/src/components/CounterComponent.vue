<template>
    <div>
        <h1>Counter - vuex</h1>
        <h2>Direct access: {{ $store.state.counter.count }}</h2>
        <h2>Computed: {{ countComputed }}</h2>

        <button @click="increment">+1</button>
        <button @click="incrementBy">+5</button>
        <button @click="randomInt" :disabled="isLoading">Random</button>
        <h1>mapState</h1>
        <h2>mapState:{{ count }}</h2>
        <h2>lastMutation:{{ lastMutation }}</h2>

        <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex' //se usa para obtener todo lo que se quiera del state
    export default {
        name:'CounterComponent',

        //computed: mapState(['count'])
         computed:{
             countComputed(){
                return this.$store.state.counter.count 
             },

             ...mapState('counter', ['count','lastMutation','isLoading'])
            // ...mapState({
            //     count: state => state.count
            // })

         },

         methods: {

            increment(){
                                  //define el modulo del cual se llama la mutation
               this.$store.commit('counter/increment') //dispara la mutacion
            },
            incrementBy(){
                this.$store.commit('counter/incrementBy', 5) //mutacion con parametro
            },

            // incrementRandom(){
            //     this.$store.dispatch('incrementRandomInt')
            // },
                        //el primer argumento es el modulo del cual se quieren extraer las acciones
            //...mapActions('counter', ['incrementRandomInt'])
             ...mapActions('counter',{
                 randomInt:'incrementRandomInt'
             })
         },

        
    }
</script>