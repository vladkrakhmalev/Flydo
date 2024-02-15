import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [
    {
      id: 1,
      name: '123',
      completed: false
    },
    {
      id: 2,
      name: '1233',
      completed: false
    }
  ]
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodo(state, action) {
      console.log('Get Todos')
    },
    addTodo(state, action) {
      const todo = {id: Date.now(), name: action.payload, completed: false}
      state.items.push(todo)
    },
    completeTodo(state, action) {
      const todo = state.items.find(todo => todo.id == action.payload)
      if(todo) todo.completed = !todo.completed
    },
    updateTodo(state, action) {
      const {id, name} = action.payload
      const todo = state.items.find(todo => todo.id == id)
      if (todo) todo.name = name
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(todo => todo.id !== action.payload)
    }
  }
})

export const {getTodo, addTodo, completeTodo, updateTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer