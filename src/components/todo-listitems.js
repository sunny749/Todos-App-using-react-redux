import React from 'react'
import { useDispatch } from 'react-redux'
import { DELETE_TODO, TOGGLE_COMPLETED, TOGGLE_IMPORTENT } from '../redux/actions'
import DeleteIcon from '@mui/icons-material/Delete'
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import {Checkbox, FormControlLabel, FormGroup, IconButton, ListItem, ListItemSecondaryAction, Typography} from '@mui/material'

export default function TodoListItems({id,title,completed,importent}) {
    const dispatch=useDispatch()
    function toggleCheckBox(){
        dispatch({
            type:TOGGLE_COMPLETED,
            payload:{id}, 
        })
    }
    function toggleImportent(){
        dispatch({
            type:TOGGLE_IMPORTENT,
            payload:{id,}
        })
    }
    function deleteHandler(){
        dispatch({
            type:DELETE_TODO,
            payload:{title},
        })
    }
  return (
    <ListItem dense>
        <FormGroup>
            <FormControlLabel control={<Checkbox 
            checked={completed}
            name={title} 
            onChange={toggleCheckBox}
            color='primary' 
            ></Checkbox>}
            label={<Typography style={{textDecoration:completed&&'line-through'}}>{title}</Typography>}
            >
            </FormControlLabel>
            <ListItemSecondaryAction>
                <IconButton edge='end' onClick={toggleImportent}>
                    {importent?<StarIcon/>:<StarOutlineIcon/>}
                </IconButton>
                <IconButton onClick={deleteHandler} edge='end'>
                    < DeleteIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </FormGroup>
    </ListItem>
  )
}
