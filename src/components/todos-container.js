import React from 'react'
import { Box,Typography,Grid,Divider,List,ListItem } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useSelector } from 'react-redux'
import TodoListItems from './todo-listitems'

const useStyles=makeStyles()((theam)=>{
    return {
        root:{
            margin:20,
            padding:20,
            backgroundColor:'rgb(92.9%,92.9%,92.9%,92.9%)',
        },
    }
})
export default function TodosContainer() {

    const {todos}=useSelector((state)=>{
        return {
            todos:state.todos
        }
    })
    const {classes}=useStyles()
    const prioritisedTodos =(function prioritise(){
        const importentTodos=[]
        const notimportentTodos=[]
        todos.forEach(todo=>{
            if(todo.importent){
                importentTodos.push(todo)
            }else{
                notimportentTodos.push(todo)
            }
        })
        return importentTodos.concat(notimportentTodos)
        })();

  return (
    <Box className={classes.root}>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography align='left' variant='h5' gutterBottom>My Todos</Typography>
                <Divider />   
                <List>{
                    prioritisedTodos.map(todo=>{
                        if(!todo.completed){
                            return <TodoListItems {...todo} key={todo.id}></TodoListItems>
                        }
                    })
                    }</List>
            </Grid> 
            <Grid item xs={6}>
                <Typography align='left' variant='h5' gutterBottom>Completed</Typography>
                <Divider />   
                <List>{
                    prioritisedTodos.map(todo=>{
                        if(todo.completed){
                            return <TodoListItems {...todo} key={todo.id}></TodoListItems>
                        }
                    })
                    }</List>
            </Grid>      
        </Grid>
    </Box>
  )
}
