import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [
    {
      id: 0,
      name: 'All',
      isVisible: true,
      readOnly: true
    },
    {
      id: 1,
      name: 'Development',
      isVisible: false
    },
    {
      id: 2,
      name: 'Design',
      isVisible: false
    }
  ]
}

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory(state, action) {
      state.items.push({...action.payload, isVisible: false})
    },
    toggleCategory(state, action) {
      const {isVisible, id} = action.payload
      const category = state.items.find(category => category.id === id)
      if (category) category.isVisible = isVisible
    },
    renameCategory(state, action) {
      const {name, id} = action.payload
      const category = state.items.find(category => category.id === id)
      if (category) category.name = name
    },
    removeCategory(state, action) {
      state.items = state.items.filter(category => category.id !== action.payload)
    },
  }
})  

export const {addCategory, toggleCategory, renameCategory, removeCategory} = categorySlice.actions
export default categorySlice.reducer