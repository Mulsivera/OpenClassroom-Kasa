import logo from "../assets/logo.svg"
import "../Styles/Header.scss"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header--div">
                <img src={logo} alt="logo de Kasa" className="header--logo"></img>
                <nav className="header--nav">
                    <NavLink to="/" className="header--nav--link">Accueil</NavLink>
                    <NavLink to="/a-propos" className="header--nav--link">A Propos</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header