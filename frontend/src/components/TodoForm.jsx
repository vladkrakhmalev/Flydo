import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from '../todoSlice'

export function TodoForm() {

  const dispatch = useDispatch()
  const [name, setName] = useState('')

  function addHandler(e) {
    e.preventDefault()
    dispatch(addTodo(name))
    setName('')
  } 

  return (
    <form>
      <input
        type="text"
        onChange={e => setName(e.target.value)}
        value={name}
        placeholder="Task name"/>
      <button onClick={addHandler}>Add</button>
    </form>
  )
}