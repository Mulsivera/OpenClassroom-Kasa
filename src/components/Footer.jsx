import logo from "../assets/logo_white.svg"
import "../Styles/Footer.scss"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer--div">
                <p className="footer--text">© 2020 Kasa. All rights reserved</p>
                <img src={logo} alt="logo de Kasa" className="footer--logo"></img>
            </div>
        </footer>
    )
}

export default Footer