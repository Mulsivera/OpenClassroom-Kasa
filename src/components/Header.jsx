// Imports des bibliothèques externes
import { NavLink } from "react-router-dom";

// Imports des modules internes
import logo from "../assets/logo.svg"

// Imports des styles
import "../Styles/Header.scss"

function Header() {
    return (
        <header className="[ header ] [ flex-row ] [ justify-center ]">
            <div className="[ header--div ] [ flex-row ] [ justify-between ] [ ai-center ]">
                <img src={logo} alt="logo de Kasa" className="header--logo"></img>
                <nav className="[ header--nav ] [ tc-black ] [ fw-500 ]">
                    <NavLink to="/" className="header--nav--link">Accueil</NavLink>
                    <NavLink to="/a-propos" className="header--nav--link">A Propos</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header