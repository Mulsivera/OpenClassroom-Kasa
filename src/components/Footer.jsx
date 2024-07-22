// Imports des modules internes
import logo from "../assets/logo_white.svg"

// Imports des styles
import "../Styles/Footer.scss"

function Footer() {
    return (
        <footer className="footer">
            <div className="[ footer--div ] [ flex-column-reverse ] [ bc-black ]">
                <p className="[ footer--text ] [ tc-white ] [ ta-center ] [ fw-500 ]">© 2020 Kasa. All rights reserved</p>
                <img src={logo} alt="logo de Kasa" className="footer--logo"></img>
            </div>
        </footer>
    )
}

export default Footer