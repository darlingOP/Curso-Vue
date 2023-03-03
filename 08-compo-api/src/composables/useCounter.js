//primer composable en vue
//a los composable si se les pueden pasar argumentos
import {ref} from 'vue'

const useCounter = (initValue = 5) =>{

    const counter = ref(initValue)

    return{
        counter,

        decrease:() => counter.value--,
        increase:() => counter.value++
    }
}



export default useCounter