import giphyApi from "./bases/11-axios";

const getImage = async () => {

    try {
      
       const {data} = (await giphyApi.get('/random')).data
       const {url} = data.images.original
       console.log(url);
    } catch (error) {
            console.log('Error en la petición', error);
            throw error
    }
}







getImage()