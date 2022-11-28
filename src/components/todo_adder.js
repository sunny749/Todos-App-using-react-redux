import React,{useState,useRef} from 'react'
import {Box,TextField,Button} from '@mui/material'
import { ADD_TODO } from '../redux/actions'
import { useDispatch,useSlector } from 'react-redux'

export default function TodoAdder() {
    const titleRef=useRef(null)
    const dispatch=useDispatch()
    const [title,setTitle]=useState(null)
    const handleClick=()=>{
        if(title){
            dispatch({
                type:ADD_TODO,
                payload:{
                    title,
                },
            })
        }
        setTitle(null)
        titleRef.current.value=''
    }
  return (
    <Box>
        <TextField style={{width:400}}label='Add new Todo' variant='filled' inputRef={titleRef} onChange={(e)=>setTitle(e.target.value)}/>
        <Button 
        style={{height:55}}
        color='primary'
        variant='contained'
        onClick={handleClick}
        >Add</Button>
    </Box>
  )
}
