import axios from 'axios'

const apiKey = 'OVvCCGNHYqMTx27CaaeIQ7ReionjRdPM'
//`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

const giphyApi = axios.create({
    baseURL:'https://api.giphy.com/v1/gifs',
    params:{
        api_key: apiKey //el nombre del parametro debe ser sintaxicamente como lo pide la api, en este cas api_key
    }
})

giphyApi.get('/random')
.then(resp =>{
    
    const {data} = resp.data
    const {url} =data.images.original
    
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
    //console.log(resp.data.data)

})

export default  giphyApi