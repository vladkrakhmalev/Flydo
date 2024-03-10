import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  idOpen: null
}

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup(state, action) {
      state.id = action.payload
    },
    closePopup(state) {
      state.id = null
    },
  }
})

export const {openPopup, closePopup} = popupSlice.actions
export default popupSlice.reducer