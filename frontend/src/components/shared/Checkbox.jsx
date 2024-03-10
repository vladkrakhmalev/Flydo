import { useState } from "react"

export function Checkbox({children, onClick}) {

  const [isChecked, setIsCheked] = useState(false)

  function handlerClick() {
    onClick()
    setIsCheked(!isChecked)
  }

  return (
    <div className="checkbox" onClick={handlerClick}>
      <i className={"checkbox__check fi fi-br-check" + (isChecked ? ' _active' : '')}></i>
      <span className="checkbox__label">{children}</span>
    </div>
  )
}