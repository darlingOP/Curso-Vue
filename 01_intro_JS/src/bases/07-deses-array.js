
const characters =['Goku','Vegeta','Trunks']

const [g,v,t] = characters

console.log(g,v,t);

const [, V] = characters
console.log(V);

const returnArray = (arr) =>{
    return[arr[0], arr[1]]
}

const [letters, numbers] = returnArray(['ABC',123])

//tambien se puede resumir
const resumido = ([letters,numbers])=>{
    return [letters, numbers]
}

console.log(letters,numbers);