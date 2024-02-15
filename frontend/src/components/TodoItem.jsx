import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { deleteTodo, updateTodo, completeTodo } from '../todoSlice'

export function TodoItem({todo}) {

  const dispatch = useDispatch()
  const [name, setName] = useState(todo.name)
  const [editing, setEditing] = useState(false)

  function completeHandler() {
    dispatch(completeTodo(todo.id))
  }

  function editHandler() {
    setEditing(true)
  }

  function nameHandler(e) {
    setName(e.target.value)
  }

  function saveHandler() {
    const newTodo = {id: todo.id, name}
    dispatch(updateTodo(newTodo))
    setEditing(false)
  }

  function deleteHandler() {
    dispatch(deleteTodo(todo.id))
  }

  return (
    <li key={todo.id}>
      {editing ? <>
        <input
          type='text'
          value={name}
          onChange={nameHandler}
        />
        <button onClick={saveHandler}>S</button>
      </> : <>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={completeHandler}
        />
        <span>{todo.name}</span>
        <button onClick={editHandler}>R</button>
        <button onClick={deleteHandler}>D</button>
      </>}
    </li>
  )
}