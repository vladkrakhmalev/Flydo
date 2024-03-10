import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  hiddenComplited: false,
  items: [
    {
      id: 1,
      name: 'Design the application',
      complited: true,
      isToday: true,
      category: 2
    },
    {
      id: 2,
      name: 'Add D&D',
      complited: true,
      isToday: true,
      category: 1
    },
    {
      id:3,
      name: 'Upload changes to Git',
      complited: false,
      isToday: false,
      category: 1
    }
  ]
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      const todo = {...action.payload, id: Date.now(), complited: false}
      state.items.push(todo)
    },
    completeTodo(state, action) {
      const todo = state.items.find(todo => todo.id == action.payload)
      if(todo) todo.complited = !todo.complited
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
    },
    changeViewCompleted(state) {
      state.hiddenComplited = !state.hiddenComplited
    }
  }
})

export const {addTodo, completeTodo, updateTodo, reorderTodos, deleteTodo, changeViewCompleted} = todoSlice.actions
export default todoSlice.reducer