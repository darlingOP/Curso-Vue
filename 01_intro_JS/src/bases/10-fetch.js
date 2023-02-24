const apiKey = 'OVvCCGNHYqMTx27CaaeIQ7ReionjRdPM'
//https://api.giphy.com/v1/gifs/random?api_key=OVvCCGNHYqMTx27CaaeIQ7ReionjRdPM

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then(resp => resp.json() ) //json tambien es una promesa entonces
.then(({data}) => {
    const {url} = data.images.original

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
}) //respuesta del json