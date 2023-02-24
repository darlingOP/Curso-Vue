console.log('Funciones')

function saludar(){
    return 'Hola mundo'
}

//funcion anonima ligada a una variable

const saludar2 =function(xyz){
    return  `Hola ${xyz}`
}

nombre = 'Darling'

//funcion tipo flecha o lambda function

const saludar3 = (xyz) => {
    return `Hola ${xyz}` 
}

console.log(saludar())
console.log(saludar2(nombre))
console.log(saludar3(nombre))

//ejemplo uso funcion flecha

const getUser = () =>{
    return{
        uid: 'ABC123',
        username: 'Tony001'
    }
}

//en el caso de no usar return para devolver el objeto
const getU = () =>({uid:'ABC123', username:'Tony001'})
//los parentesis son basicamente el return implicito de la funcion

const heroes =[
    {
        id:1,
        name:'Batman'
    },
    {
        id:2,
        name:'Batman'
    }
]

const existe = heroes.some((heroe)=>heroe.id ===1)

console.log(getUser());
console.log(getU());
console.log(existe)