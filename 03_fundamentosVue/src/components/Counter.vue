<template>
    <h2>{{ customTitle }}</h2>
    <p data-testid="counter">{{ counter }}</p>
    <p>{{ counter }}<sup>2</sup> = {{ getSquare }} </p>
    
    <div class="botones">
        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>
    
</template>

<script>

export default {
    name:'Counter', //uso del name es para identificar el componente en el dev Vue tools
    props:{
        title:String,
        start:{
            type:Number,
            default:100,
            validator(value){
                return value > -1
            }
        }
    } ,
    data(){
        return{
            counter: this.start
        }
    },

    methods:{
        increase(){
         this.counter = this.counter + 1
        },

        decrease(){
         this.counter = this.counter - 1
        }
    },
    computed:{
        getSquare(){
            return this.counter*this.counter
        },
        customTitle(){
            // if(!this.title){
            //     return 'Counter'
            // }
            // else{
            //     return this.title
            // }

            //se puede resumir con ternarios o de la siguiente forma
            return this.title || 'Counter'
        }
    }
   
}

</script>
<!--Sort lines ascending shortcut alt+s-->
<style scoped> 
    button{
        background-color: cadetblue;
        border-radius: 5px;
        color: white;
        margin:0 5px;
    }
</style>