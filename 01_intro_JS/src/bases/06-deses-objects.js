
const person ={
    name: 'Darling',
    age: '22',
    codeName: 'Me'
}




//desestructuracion de objeto
const {name,age,codeName} = person

const createHero = (persona) =>{

    const {name,age,codeName,power = 'No tiene poder'} = persona
    return{
        id: 123456,
        name: name,
        age: age,
        codeName: codeName,
        power:power
    }
}

//el codigo se puede resumir
//cuando se tienen las variables y valores apuntados iguales se pueden obviar
//ademas la desestructuracion se puede hacer de manera directa al pasar el parametro a la funcion
const createHero2 = ({name,age,codeName,power = 'No tiene poder'}) =>{

    return{
        id: 123456,
        name,
        age,
        codeName,
        power
    }
}
//forma implicita
const createHero3 = ({name,age,codeName,power = 'No tiene poder'}) =>
    
    (
        {
            id: 123456,
            name,
            age,
            codeName,
            power
        }
    )
    

console.log(createHero(person));
console.log(createHero2(person));
console.log(createHero3(person));