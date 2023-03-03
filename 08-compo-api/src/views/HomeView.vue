<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIronman">Cambiar Ironman</button>
    <button @click="changeHulk">Cambiar Hulk</button>
    
  </div>
</template>

<script>
// @ is an alias to /src

import {ref, reactive} from 'vue'
export default {
  name: 'HomeView',
  
  setup() {
    const ironman = ref({name:'tony', age:50})

    //reactive solo funciona con objetos
    const hulk = reactive({name:'Bruce', age:50})


    return{
      ironman, hulk,

      changeIronman:() =>{
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 55
      },

      changeHulk: () =>{
        hulk.name = 'Bruce Banner'
        hulk.age = 45
      }

    }
  }
}
</script>
