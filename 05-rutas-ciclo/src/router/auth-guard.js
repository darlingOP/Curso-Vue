//Guard especifico para rutas

const isAuthenticatedGuard = (to, from,next) =>{
    //console.log(to,from,next);

    return new Promise(()=>{

        const random = Math.random() *100
        //console.log(random);
        if(random > 50){
            console.log('está autenticado');
            next()
        }else{
            console.log('bloqueado por el isAuthenticatedGuard',random);
            //queda a discrecion el manejo de la redireccion
            next({name:'pokemon-home'})
        }
    })
}


export default isAuthenticatedGuard