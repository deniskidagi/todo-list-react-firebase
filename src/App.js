import { FormControl, InputLabel, Button, Input } from "@material-ui/core"
import { useState, useEffect } from "react"
import Todo from "./Components/Todo"
import { db } from './firebase'
// import firebase from './firebase'
import firebase from "firebase/compat/app"
const App = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
                 setTodos(snapshot.docs.map(doc => ({
                 id: doc.id,
                 item: doc.data()
                })))
        })
      }, [input])

    const addToDo = e => {
        e.preventDefault()
        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }
    console.log(todos)
    return (
        <div className="App">
            <h1>to do react firebase</h1>
            <form>
                <FormControl>
                    <InputLabel>Write a Todo</InputLabel>
                    <Input value={input} onChange={e => setInput(e.target.value)}></Input>
                </FormControl>
                <Button type="submit" onClick={addToDo} variant="contained" color="primary" disabled={!input}>Add To Do</Button>
            </form>
            <ul>
                {todos.map(item => <Todo key={item.id} arr={item} />)}
            </ul>
        </div>
    )
}

export default App
