<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">cambiar titulo</button>
  </div>
</template>

<script>
import { 
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
 } from 'vue'


export default {

  setup() {
    console.log('setup se llamó');

    const title = ref('Hola mundo')

    onMounted(() =>{
      console.log('onMounted');  
    }),

    onUpdated(() =>{
      console.log('onUpdated'); 
    }),

    onUnmounted(() =>{
      console.log('onUnmounted'); 
    }),

    onBeforeMount(() => {
      console.log('onBeforeMount'); 
    }),

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate'); 
    }),

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount'); 
    })

    return{
      title,
      changeTitle: () =>{
        title.value = 'new About'
      }
    }
    
  }
  
}
</script>