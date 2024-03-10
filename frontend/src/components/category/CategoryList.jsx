import { useSelector } from "react-redux"
import { CategoryItem } from './CategoryItem'
import { useState } from "react"

export function CategoryList() {

  const categories = useSelector(state => state.categories.items)
  const [newCategory, setNewCategory] = useState(null)

  function handlerAdd() {
    setNewCategory({id: Date.now(), name: ''})
  }

  function handlerClear() {
    setNewCategory(null)
  }

  return (
    <ul className="category__list">

      {categories.map(category =>
        <CategoryItem key={category.id} category={category}/>
      )}

      {!newCategory ? null : <CategoryItem
        category={newCategory}
        isNew={true}
        handlerClear={handlerClear}
      />}

      <button
        className="button _primary"
        onClick={handlerAdd}
      >Add</button>

    </ul>
  )
}