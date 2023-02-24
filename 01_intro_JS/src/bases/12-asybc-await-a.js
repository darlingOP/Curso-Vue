const miPromesa = () => {
    return new Promise( resolve =>{
        setTimeout(() =>{
            resolve('Tenemos un valor en la promesa')
        },1000);
    })
}


const medirTiempoAsync = async()=>{
    console.log('Inicio');

    const respuesta = await miPromesa()
    console.log(respuesta);

    console.log('Fin');

    return 'fin de medir tiempo async'
    //throw 'Error en medirTiempoAsync' //se usa throw para tirar un error si algo va mal
}

medirTiempoAsync()
//.then(console.log)
//.catch(console.log)