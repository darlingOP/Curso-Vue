<template>
    <div>
        <custom-link
        v-for="link in links"
        :key="link.to"
        :link="link"
        ></custom-link>
       <!-- <router-link :to="{name:'home'}">Pokemon List</router-link>
       <router-link :to="{name:'pokemon-id', params:{id:1}}">Pokemon Id </router-link>
       <router-link :to="{name:'about'}">About </router-link>  -->
    </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'
    export default {
        data(){
            return{
                links:[
                    {to: 'pokemon-home', name:'Pokemons'},
                    {to: 'pokemon-id', name:'Por ID', id:151},
                    {to: 'pokemon-about', name:'About'},
                    {to: 'https://google.com', name:'Google'},

                    //DBZ links
                    {to:'dbz-characters', name:'DBZ Personajes'},
                    {to:'dbz-about', name:'DBZ About'}

                ]
            }
        },

        components:{
            CustomLink: defineAsyncComponent(() => import('./CustomLink'))
        }
    }
</script>
<style scoped>

div{
    padding: 0px 30px;
}

div a{
    font-weight: 700;
    text-decoration: none;
    color:gray;
    margin:0px 10px;
}

div a:hover{
    color:#41B883;
    cursor: pointer;
}

/*clase de router-link para apicar estilo a la ruta activa */
/* div .router-link-exact-active{
    color:#42b983
} */

</style>