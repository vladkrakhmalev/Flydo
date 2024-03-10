import { useSelector, useDispatch } from "react-redux"
import { TodoList } from "../todo/TodoList"
import { openPopup } from '../shared/popupSlice'

export function CategoryBords() {

  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.items)
  const visibledCategories = categories.filter(category => category.isVisible)

  return (
    <div className="todo__boards">
      {visibledCategories.map(category =>
        <TodoList
          key={category.id}
          category={category}
        />
      )}

      {categories.length === visibledCategories.length ? null :
        <div
          className="todo__add-board"
          onClick={() => dispatch(openPopup(1))}
        >Add todo board</div>
      }
    </div>
  ) 
}