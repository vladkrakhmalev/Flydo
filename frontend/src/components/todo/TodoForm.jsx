import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from './todoSlice'
import { validateTodo } from "../../services/servicesTodo"

export function TodoForm() {

  const initialState = {
    name: '',
    category: '',
    date: ''
  }
  const [formData, setFormData] = useState(initialState)
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.items)



  function handlerChange(e) {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  function handlerSubmit(e) {
    e.preventDefault()
    const error = validateTodo(formData)

    if (error) {
      setErrorMessage(error)
    } else {
      setErrorMessage(null)
      dispatch(addTodo(formData))
      setFormData(initialState)
    }
  } 



  return (
    <form className="form">
      <h2 className="form__title">Add a todo</h2>
      <input
        required  
        autoComplete='none'
        type="text"
        className="form__input"
        onChange={handlerChange}
        name='name'
        value={formData.name}
        placeholder="Todo name"/>
      {/* <input
        name="date"
        type="datetime-local"
        className="form__input"
        onChange={handlerChange}
        value={formData.date}/> */}
      <select
        className="form__select"
        onChange={handlerChange}
        name="category"
        value={formData.category}
      >
        {categories.map(category => 
          <option key={category.id} value={category.id}>{category.name}</option>
        )}
      </select>
      {errorMessage ? <p className="form__message">{errorMessage}</p> : null}
      <button
        type="submit"
        className="form__btn"
        onClick={handlerSubmit}
      >Add</button>
    </form>
  )
}