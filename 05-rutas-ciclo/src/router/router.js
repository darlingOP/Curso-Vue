
import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard'

const routes = [
    {
        path:'/',
        redirect:'/pokemon'
    },
    {
        path:'/pokemon',
        name:'pokemon',
        component:() => import(/*webpackChunkName:"PokemonLayout"*/'@/modules/pokemon/layouts/PokemonLayout'),
        children:[
            {
                path:'', 
                name:'pokemon-home',
                 component:() => import(/*webpackChunkName:"ListPage"*/ '@/modules/pokemon/pages/ListPage')
            },
            {
                path:'about',
                name:'pokemon-about',
                //lazy load de pagina
                component:() => import(/*webpackChunkName:"AboutPage"*/'@/modules/pokemon/pages/AboutPage')
            },
            {
                path:'pokemonid/:id', 
                name:'pokemon-id',
                component:() => import(/*webpackChunkName:"PokemonPage"*/ '@/modules/pokemon/pages/PokemonPage'),
                props:(route) =>{
                    const id = Number(route.params.id) //parseo de string a numero
                    return isNaN(id) ? {id:1} : {id} //validacion para saber si el query es un numero o no y que hacer   
                    }
            },
            {
                path:'',
                name:'redireccion',
                redirect:{name:'pokemon-about'}
            }
        ]
    },
    
    //Rutas Dragon Ball Z
    {
        path:'/dbz',
        name:'dbz',
        beforeEnter: [isAuthenticatedGuard],
        component:()=>import(/*webpackChunkName:"DBZLayout"*/ '@/modules/dbz/layouts/DragonBallLayout'),
        children:[
            {
                path:'characters',
                name:'dbz-characters',
                //lazy load de pagina
                component:() => import(/*webpackChunkName:"CharactersPage"*/'@/modules/dbz/pages/Characters')
            },
            {
                path:'about', 
                name:'dbz-about',
                component:() => import(/*webpackChunkName:"AboutDBZ"*/ '@/modules/dbz/pages/About')
            },
            {
                path:'',
                name:'redireccion2',
                redirect:{name:'dbz-characters'}
            }
        ]
    },
   
    //aqui se esta buscando cualquier ruta que no coincida con ninguna de las de arriba
    //si eso pasa, se manda el componente asignado
     {
        path:'/:pathMatch(.*)*', 
        component:() => import(/*webpackChunkName:"NoPageFound"*/ '@/modules/shared/pages/NoPageFound')
     }
]


const router = createRouter({

    history: createWebHashHistory(),
    routes,
})

//Guard global sincrono
/* router.beforeEach((to, from, next) =>{
    //console.log(to,from,next);

    //si el numero random es menor a 50 bloquea el acceso a la ruta
    const random = Math.random() * 100
    if(random > 50){
        console.log('Autenticado');
        next()
    }else{
        console.log(random,'bloqueado por el beforeEach Guard');
        next({name:'pokemon-home'})
    }
}) */

//uso de un Guard global asincrono
/* const canAccess = () =>{
    return new Promise (resolve =>{

        const random = Math.random() * 100
        if(random > 50){
            console.log('Autenticado - canAccess');
            resolve(true)
        }else{
            console.log(random,'bloqueado por el beforeEach Guard - canAccess');
            resolve(false)
        }
    })
}

router.beforeEach(async (to,from,next) =>{
    const authorized = await canAccess()

    authorized ? next() :next({name:'pokemon-home'})
}) */
export default router