import { useDispatch, useSelector } from "react-redux"
import { toggleCategory } from '../category/categorySlice'
import { closePopup } from '../shared/popupSlice'

export function CategoryForm() {

  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.items)
  const visivledCategories = categories.filter(category => !category.isVisible)

  function handlerClick(id) {
    dispatch(toggleCategory({id, isVisible: true}))
    dispatch(closePopup())
  } 

  return (
    <ul className="category__list">
      {visivledCategories.map(category =>
        <li
          className="category__item _big"
          onClick={() => handlerClick(category.id)}
          key={category.id}
        >{category.name}</li>
      )}
    </ul>
  )
}