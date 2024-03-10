import { useState } from "react"
import { useDispatch } from 'react-redux' 
import { addCategory, renameCategory, removeCategory } from '../category/categorySlice'

export function CategoryItem({category, isNew, handlerClear}) {

  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(isNew)
  const [name, setName] = useState(category.name)
  


  function handlerSave() {
    if (isNew) {
      handlerClear()
      dispatch(addCategory({id: category.id, name}))
    }

    if (!isNew) {
      dispatch(renameCategory({id: category.id, name}))
    }
    
    setIsEditing(false)
  }

  function handlerDelete() {
    dispatch(removeCategory(category.id))
  }



  return (
    <li key={category.id} className='category__item'>
      {category.readOnly ? <input className='category__input' readOnly value={category.name}/> :
        <>
          <input
            className={'category__input' + (isEditing ? ' _edit' : '')}
            value={name}
            onChange={e => setName(e.target.value)}
            readOnly={!isEditing}
          />
          <i
            onClick={() => isEditing ? handlerSave() : setIsEditing(true)}
            className={'category__btn fi ' + (isEditing ? 'fi-rr-disk' : 'fi-rr-pencil')}
            ></i>
          <i
            onClick={handlerDelete}
            className='category__btn fi fi-rr-trash'
          ></i>
        </>
      }
    </li>
  )
}