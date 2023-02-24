console.log('Hola')

const persona ={
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 523123,
        lat: 14.3232,
        lng: 34.23456
    }
}

//operador spread ... para crear un objeto a partir de uno existente

const persona2 = {...persona}
persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);