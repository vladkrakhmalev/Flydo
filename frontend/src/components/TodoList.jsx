import { TodoItem } from './TodoItem'
import { useSelector } from 'react-redux'

export function TodoList() {

  const todos = useSelector(state => state.todos.items)

  return (
    !todos ? <p>All tasks are completed</p> :
    <ul>
      {todos.map(todo => 
        <TodoItem key={todo.id} todo={todo}/>  
      )}
    </ul>
  )
}