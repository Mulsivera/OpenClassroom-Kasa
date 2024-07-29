// Imports des modules internes
import logo from "../assets/logo_white.svg"

// Imports des styles
import "../Styles/Footer.scss"

function Footer() {
    return (
        <footer className="footer">
            <div className="[ footer__div ] [ flex-column-reverse ] [ background-color-black ]">
                <p className="[ footer__text ] [ text-color-white ] [ text-align-center ] [ font-weight-500 ]">© 2020 Kasa. All rights reserved</p>
                <img src={logo} alt="logo de Kasa" className="footer__logo"></img>
            </div>
        </footer>
    )
}

export default Footer