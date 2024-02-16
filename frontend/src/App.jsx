import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"
import './App.css'

export function App() {

  return (
    <div className="app">
      <h1>Yo, dude. Here are your tasks</h1>
      <TodoForm/>
      <TodoList/>
    </div>
  )
}
