console.log('Hola')

const nombre = 'Darling'
const apellido = 'Olvera'

const nombreCompleto =`${nombre} ${apellido}` 

console.log(nombreCompleto)

//expresion literal
console.log(`Resultado: ${1 + 1}`)

function getSaludo(nombre){
    return 'Hola ' + nombre
}

//uso con funciones
console.log(`Este es un texto: ${ getSaludo(nombre)}`);