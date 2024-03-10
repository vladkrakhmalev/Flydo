import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { closePopup } from "../shared/popupSlice"

export function Popup({id, children}) {

  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const openId = useSelector(state => state.popup.id)

  useEffect(() => 
    setIsOpen(openId == id)
  , [openId])

  function handlerClose(e) {
    if (e.target.classList.contains(['popup__container'])) {
      dispatch(closePopup())
    }
  }

  return (
    <div className={"popup__container" + (isOpen ? ' _open' : '')} onClick={handlerClose}>
      <div className="popup">
        {children}
      </div>
    </div>
  )
}