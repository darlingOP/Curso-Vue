<template>
    
        <h2 v-if="isLoading">Espere por favor...</h2>
        <h2 v-else>Usuarios</h2>
        <h5 v-if="errorMsg">{{ errorMsg }}</h5>


        <div v-if="users.length > 0">
           <!--  <UserList 
            :users="users"/> -->

            <!--uso de scoped slots-->
            <user-list 
            :users="users"
            v-slot="{user}"> <!--se desestructura la slotprops para obtener el usuario-->
                <h5>{{ user.first_name }} {{ user.last_name }}</h5>
                <span>{{ user.email }}</span>
            </user-list>
        </div>

        <button @click="prevPage">Atras</button>
        <button @click="nextPage">siguiente</button>
        <span> Página: {{ currentPage }}</span>
    
</template>
<script>
import useUsers from '@/composables/useUsers'
import UserList from '@/components/UserList'

export default {
    components:{UserList},
    setup() {
        
        const {
            isLoading, 
            currentPage, 
            users, 
            errorMsg,
            prevPage,
            nextPage} = useUsers()

        return{
            isLoading, 
            currentPage, 
            users, 
            errorMsg,
            prevPage,
            nextPage
        }

    }
}
</script>
<style scoped>
   h2{
    text-align: center;
    width:100%
   } 

   div{
    display: flex;
    justify-content: center;
    text-align: center;
   }

   ul{
    width:250px
   }
</style>