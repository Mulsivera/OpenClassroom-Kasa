// Imports des bibliothèques externes
import React, { useState } from "react"

// Imports des styles
import "../Styles/Collapse.scss"

function Collapse ({collapseTitle, collapseContent}) {
    const [isOpen, setIsOpen] = useState(false)
    const isdisplay = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="[ collapse__div ] [ f-column ] [ ai-center ]">
            <div className="[ collapse__title__div ] [ bc-red ] [ flex-row ] [ justify-between ] [ ai-center ]">
                <p className="[ collapse__title__text ] [ tc-white ] [ fw-700 ]">{collapseTitle}</p>
                <button if className={isOpen ? "collapse__title__button_close" : "collapse__title__button_open"} onClick={isdisplay}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></button>
            </div>
            <div className={isOpen ? "collapse__content__div_show" : "collapse__content__div_hide"}>
                <p className={isOpen ? "collapse__content__text_show" : "collapse__content__text_hide"}>{collapseContent}</p>
            </div>
        </div>
    )
}

export default Collapse