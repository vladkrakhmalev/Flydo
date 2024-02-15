import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"

export function App() {

  return (
    <div>
      <h1>Hello, guy. This your task:</h1>
      <TodoForm/>
      <TodoList/>
    </div>
  )
}
