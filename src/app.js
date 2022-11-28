import React, { useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import TodoAdder from './components/todo_adder'
import { Box,AppBar,Toolbar,IconButton,Typography,Container,Paper } from '@mui/material'
import TodosContainer from './components/todos-container'
const useStyles=makeStyles()((theme)=>({
    root:{},
    appContainer:{
        paddingLeft:100,
        paddingRight:100,
        marginTop:100,
    },
    wrapper:{
        textAlign:'center',
        width:'100%',
    }
}))

export default function MSKToods() {
    const {classes}=useStyles()
  return (
    <Box className='root'>
        <AppBar position='static'>
            <Toolbar>
                {/* // <IconButton edge='start' color='inherit'>
                //     hello 
                // </IconButton> */}
                <Typography variant='h5'>
                    Todos App
                </Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.appContainer}>
            <Paper className={classes.wrapper} elevation={0}>
                <TodoAdder />
                <TodosContainer/>
            </Paper>
        </Container>
    </Box>
  )
}