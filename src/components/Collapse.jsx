import "../Styles/Collapse.scss"
import React, { useState } from "react"

function Collapse ({collapseTitle, collapseContent}) {
    const [isOpen, setIsOpen] = useState(false)
    const isdisplay = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return (
        <div className="collapse--div">
            <div className="collapse--title--div">
                <p className="collapse--title--text">{collapseTitle}</p>
                <button if className={isOpen ? "collapse--title--button_close" : "collapse--title--button_open"} onClick={isdisplay}><svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></button>
            </div>
            <div className={isOpen ? "collapse--content--div_show" : "collapse--content--div_hide"}>
                <p className={isOpen ? "collapse--content--text_show" : "collaspe--content--text_hide"}>{collapseContent}</p>
            </div>
        </div>
    )
}

export default Collapse