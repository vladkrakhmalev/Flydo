import { useDispatch } from "react-redux"
import { openPopup } from './components/shared/popupSlice'
import './App.css'

import { Popup } from "./components/shared/Popup"
import { CategoryBords } from "./components/category/CategoryBords"
import { CategoryForm } from "./components/category/CategoryForm"
import { TodoForm } from "./components/todo/TodoForm"
import { CategoryList } from "./components/category/CategoryList"
import { Checkbox } from './components/shared/Checkbox'
import { changeViewCompleted } from "./components/todo/todoSlice"
import { combineSlices } from "@reduxjs/toolkit"



export function App() {

  const dispatch = useDispatch()

  return (
    <>
      <div className="app">
        <div className="app__header">
          <div className="logo">
          <h1 className="logo__name">Flydo</h1>
          <p className="logo__text">Fly through todos</p>
          </div>
          <button
            className="button _primary"
            onClick={() => dispatch(openPopup(0))}
          >Add Todo</button>
          <button
            className="button _secondary"
            onClick={() => dispatch(openPopup(2))}
          >Change category</button>
          <Checkbox
            onClick={()=> dispatch(changeViewCompleted())}
          >Hide completed tasks</Checkbox>
        </div>
        <CategoryBords/>
      </div>
      <Popup id="0"><TodoForm/></Popup>
      <Popup id="1"><CategoryForm/></Popup>
      <Popup id="2"><CategoryList/></Popup>
    </>
  )
}
