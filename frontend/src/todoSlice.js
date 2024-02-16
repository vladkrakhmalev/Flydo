import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [
    {
      id: 1,
      name: 'Design the application',
      completed: true
    },
    {
      id: 2,
      name: 'Add D&D',
      completed: true
    },
    {
      id:3,
      name: 'Upload changes to Git',
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
    reorderTodos: (state, action) => {
      const { startIndex, endIndex } = action.payload
      const [removed] = state.items.splice(startIndex, 1)
      state.items.splice(endIndex, 0, removed)
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(todo => todo.id !== action.payload)
    }
  }
})

export const {getTodo, addTodo, completeTodo, updateTodo, reorderTodos, deleteTodo} = todoSlice.actions
export default todoSlice.reducer