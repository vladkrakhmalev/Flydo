import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './components/todo/todoSlice'
import popupReducer from './components/shared/popupSlice'
import categorySlice from './components/category/categorySlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    popup: popupReducer,
    categories: categorySlice
  }
})