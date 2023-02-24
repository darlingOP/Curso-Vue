import {getHeroById} from './bases/08-imp-exp'


const getHeroByIdAsync = (id) =>{
    return new Promise((resolve,reject)=>{
        //The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
        //propia de javascript
        setTimeout(() =>{

            const heroe = getHeroById(id)

            if (heroe) {
                resolve( heroe )
            } else {
                reject ('No hay')
            }   

        }, 1000);
    });
}

getHeroByIdAsync(30)
.then(h => console.log(h))
.catch(console.log)







/* console.log('Inicio');
new Promise((resolve, reject) =>{
    console.log('cuerpo de la promersa');
    reject('promera resuelta con error')
})
.then(msg => console.log(msg))
.catch(err => console.log(err))
console.log('fin'); */