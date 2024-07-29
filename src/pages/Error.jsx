// Imports des modules internes
import { NavLink } from "react-router-dom";

// Imports des styles
import "../Styles/Error.scss"

function Error() {
    return (
        <div className="[ content__div ] [ flex-column ] [ justify-center ]">
            <p className="[ content__number ] [ tc-red ] [ ta-center ] [ fw-700 ]">404</p>
            <p className="[ content__text ] [ tc-red ] [ ta-center ] [ fw-500 ]">Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="[ content__link ] [ tc-black ] [ ta-center ]  [ fw-500 ]">Retourner sur la page d'accueil</NavLink>
        </div>
    )
}

export default Error