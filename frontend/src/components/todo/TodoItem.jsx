import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { deleteTodo, updateTodo, completeTodo } from '../todo/todoSlice'

export function TodoItem({todo}) {

  const dispatch = useDispatch()
  const [name, setName] = useState(todo.name)
  const [editing, setEditing] = useState(false)

  function completeHandler() {
    dispatch(completeTodo(todo.id))
  }

  function editHandler() {
    setEditing(!editing)
    if (editing) saveHandler()
  }

  function nameHandler(e) {
    setName(e.target.value)
  }

  function saveHandler() {
    const newTodo = {id: todo.id, name}
    dispatch(updateTodo(newTodo))
  }

  function deleteHandler() {
    dispatch(deleteTodo(todo.id))
  }

  return (
    <li key={todo.id} className={'todo__item' + (
      todo.complited ? ' _complited' : ''
    )}>
      <i
        onClick={completeHandler}
        className="fi fi-br-check todo__check"
      ></i>
      <input
        className={'todo__input' + (editing ? ' _edit' : '')}
        value={name}
        onChange={nameHandler}
        readOnly={!editing}
      />
      <i
        onClick={editHandler}
        className={'todo__btn fi ' + (editing ? 'fi-rr-disk' : 'fi-rr-pencil')}
        ></i>
      <i
        onClick={deleteHandler}
        className='todo__btn fi fi-rr-trash'
      ></i>
    </li>
  )
}