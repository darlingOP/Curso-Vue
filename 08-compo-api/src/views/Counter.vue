<template >
    <div>
        <h1>Counter view</h1>
        <h2>{{ counter }}</h2>
        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>
</template>
<script>
import useCounter from '@/composables/useCounter'

export default {
    //esta parte es lo que queda fuera del setup
    name:'Counter',
    props:{},
    emits:[],

    //aqui empiezz el setup
    setup(){

        const {counter,increase,decrease} = useCounter(10)

        return{
            counter,increase,decrease
        }


    }
}
</script>
<style>
    
</style>