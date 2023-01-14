import React, {useState} from 'react'
import './collapsible.css'
function Collapsible  (props)  {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div className="collapsible">
        <button className={`${isOpen ? "toggle" : "toggle show"} ${props.isOpen ? "toggle show" : "toggle"}`} onClick={() => setIsOpen(!isOpen)}>{props.title}</button>
        <div className={isOpen ? "content" : "content show"}>{props.children}</div>
    </div>
  )
}

export default Collapsible
