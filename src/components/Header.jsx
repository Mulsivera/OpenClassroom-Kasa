// Imports des bibliothèques externes
import { NavLink } from "react-router-dom";

// Imports des modules internes
import logo from "../assets/logo.svg"

// Imports des styles
import "../Styles/Header.scss"

function Header() {
    return (
        <header className="[ header ] [ flex-row ] [ justify-center ]">
            <div className="[ header__div ] [ flex-row ] [ justify-between ] [ ai-center ]">
                <img src={logo} alt="logo de Kasa" className="header__logo"></img>
                <nav className="[ header__nav ] [ tc-black ] [ fw-500 ]">
                    <NavLink to="/" className="header__nav__link">Accueil</NavLink>
                    <NavLink to="/a-propos" className="header__nav__link">A Propos</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header