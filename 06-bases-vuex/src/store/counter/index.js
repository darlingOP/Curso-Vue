
import state from './state'
//el asterisco para traer todas las importaciones individuales
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const counterStore = {
    //TODO: falta algo
    namespaced:true,
    
    //se importa el state de su archivo individual
    state,

    mutations,

    actions,

    
    getters,

}

export default counterStore