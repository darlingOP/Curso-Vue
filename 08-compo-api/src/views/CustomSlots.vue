<template>
    <h1>Aprendiendo slots</h1>
    <button @click="openModal">Abrir modal</button>
    <!--más cómodo para trabajar con slots-->
    <modal 
    v-if="isOpen" 
    @on:close="closeModal"
    title="Hola mundo">
        <!-- <h2>Titulo del modal</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>cerrar</button> -->

        <!--mediante named slots es posible dar cierta estructura 
            sin importar el orden en el que se escriban los elementos-->
        <template v-slot:footer>
            <button @click="closeModal">salir</button>
        </template>
        <template v-slot:header>
            <h2>Titulo del modal</h2>
        </template>
        <template v-slot:body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </template>
        <template v-slot:exposed="{newTitle}">
            <h2> {{ newTitle }} </h2>
        </template>
    </modal>
</template>
<script>
import {ref} from 'vue'
import Modal from '@/components/Modal.vue'
export default {
    components:{Modal},

    setup(){
        const isOpen = ref(false)

        return{
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value =false
        }
    }
}
</script>

<style scoped>
    
</style>