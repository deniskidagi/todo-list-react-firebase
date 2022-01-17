import { db }  from '../firebase'
import { List, ListItem, ListItemAvatar, ListItemText, } from "@material-ui/core"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import React from "react"
import './Todo.css'
const Todo = ({ arr }) => {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar/>
                <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
            </ListItem>
            <DeleteForeverIcon fontSize="Large"
                onclick={() => {db.collection('todos').doc(arr.id).delete()}}
            />
        </List>
    )
}

export default Todo

