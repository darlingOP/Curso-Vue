import superHeros from '../data/heroes'

 export const getHeroById = (id) =>{
    const found = superHeros.find(val => val.id == id)

    return{
        found
    }
 }

 export const getHerosByOwner = (val) => {
    const result = superHeros.filter(el => el.owner == val )
    return{
        result
    }
 }

/* import { getHeroById, getHerosByOwner } from './bases/08-imp-exp'


console.log(getHeroById(1));
console.log(getHerosByOwner('Marvel')); */
