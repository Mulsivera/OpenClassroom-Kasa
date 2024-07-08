import { NavLink } from "react-router-dom";
import "../Styles/404.scss"

function Error() {
    return (
        <div className="p404--content">
            <p className="p404--number">404</p>
            <p className="p404--text">Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="p404--link">Retourner sur la page d'accueil</NavLink>
        </div>
    )
}

export default Error