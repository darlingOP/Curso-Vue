import { createStore } from 'vuex'

export default createStore({
  state: {
    todos:[
      {id:'1', text:'Recolectar las piedras del infinito', completed:false},
      {id:'2', text:'Piedra del alma', completed:true},
      {id:'3', text:'Piedra del poder', completed:true},
      {id:'4', text:'Piedra de realidad', completed:false},
      {id:'5', text:'Conseguir nuevos secuaces competentes', completed:false}
    ]
  },
  getters: {
  },
  mutations: {
    toggleTodo(state, id){
      const todoIdx = state.todos.findIndex(todo => todo.id === id)
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    }
  },
  actions: {
  },
  getters:{
    pendingTodos(state,getters){
      return state.todos.filter(todo => !todo.completed)
    },
    allTodos: (state,getters) =>{
      return state.todos
    },
    completedTodos: (state, getters) =>{
      return state.todos.filter(todo => todo.completed)
    },
    getTodosByTab:( _ , getters) => (tab) => {
        switch (tab) {
          case 'all': return getters.allTodos
            
          case 'pending': return getters.pendingTodos

          case 'completed': return getters.completedTodos
        
        }
    }
  },
  modules: {
  }
})
