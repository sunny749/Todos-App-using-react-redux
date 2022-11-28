import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED, TOGGLE_IMPORTENT } from "./actions";
import {initialState} from './initial-state'
import shortid from 'shortid'

function preserveState(state){
    localStorage.setItem('todos',JSON.stringify(state))
}

function reducer(state=initialState,action){
    switch(action.type){
        case ADD_TODO:{
            const {title}=action.payload
            const newState={
                ...state,
                todos:[...state.todos,
                    {
                        id:shortid(),
                        title:title,
                        completed:false,
                        important:false,
                    }
                ]}
            preserveState(newState)
            return newState
        }
        case TOGGLE_COMPLETED:{
            const newTodos=state.todos.map(todo=>{
                if(todo.id===action.payload.id){
                    todo.completed=!todo.completed
                }
                return todo
               })
            const newState={
                ...state,
                todos:newTodos
            }
            preserveState(newState)
            return newState
        } 
        case DELETE_TODO:{
            const newTodos=[]
            state.todos.map((todo)=>{
                if(todo.title!==action.payload.title){
                    // console.log(todo.title!==action.payload.title)
                     newTodos.push(todo)
                }
                return todo
            })
            const newState={
                todos:newTodos}
            preserveState(newState)
            return newState
        }
        case TOGGLE_IMPORTENT:{
            const newTodos=state.todos.map(todo=>{
                if(todo.id===action.payload.id){
                    todo.importent=!todo.importent
                }
                return todo
            })
            const newState={
                ...state,
                todos:newTodos,
            }
            preserveState(newState)
            return newState
        }
        default : return state 
    }
}

export default reducer